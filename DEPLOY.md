# TKE 生产部署

仅一个生产环境，执行脚本：

```powershell
.\deploy\deploy.ps1
# 指定版本并检查 TKE 节点入口
.\deploy\deploy.ps1 -Version 20261021-120000 -BaseUrl http://<TKE节点公网IP>:30081
# 推送本地已有镜像并部署
.\deploy\deploy.ps1 -Version 20261021-120000 -SkipBuild
```

- Deployment / Service / 容器名称：`ezbuild-website`，命名空间：`ezbuild`。
- 镜像：`ezbuild-images.tencentcloudcr.com/ezbuild/ezbuild:website-<Version>`，默认版本为本机时间。
- 脚本构建并推送镜像，将固定摘要写回 `k8s/deployment.yaml`，应用配置并等待滚动更新完成。
- NodePort：`30081`（`30080` 已用于参考项目）。节点安全组需允许入口访问；如该端口已被其他 Service 使用，请先修改 `k8s/service.yaml`。
- `-BaseUrl` 可选，指定后检查首页。请使用实际指向本次 TKE 部署的节点地址或域名。

## 首次准备

安装并启动 Docker，安装 kubectl，配置 TKE 集群 kubeconfig，确认 `kubectl config current-context` 指向目标集群。TKE 节点需能访问 TCR。

```powershell
docker login ezbuild-images.tencentcloudcr.com
kubectl apply -f k8s/namespace.yaml
kubectl create secret docker-registry tcr-secret -n ezbuild --docker-server=ezbuild-images.tencentcloudcr.com --docker-username=<TCR用户名> --docker-password=<TCR密码>
```

若 `ezbuild` 命名空间已有可用的 `tcr-secret`，直接复用。脚本在构建前检查该凭证。

## 域名入口与排查

将域名入口的反向代理上游指向 `http://<TKE节点可达IP>:30081`，或在 TKE 配置 Ingress / CLB 转发至 `ezbuild/ezbuild-website` Service 的 80 端口。原域名若仍指向旧服务器，需要同步调整入口；只有代理与节点在同机时才使用 `127.0.0.1`。

```powershell
kubectl get pods,svc -n ezbuild -l app=ezbuild-website
kubectl logs -n ezbuild deployment/ezbuild-website --tail=50
kubectl rollout undo deployment/ezbuild-website -n ezbuild
```

回滚后，下次发布请使用所需版本重新运行脚本；脚本会更新本地 manifest 的镜像字段。

---

# 历史部署参考（自建 Registry / 单机）

以下是旧部署记录，使用旧名称 `official-website` 和端口 `30080`，不适用于当前 TKE 配置；当前 `k8s/` 以本文顶部的生产部署说明为准。

# 单独推包 rsync -avz --progress dist/ root@119.45.31.214:/var/www/website/

# 部署文档

## 首次搭建 Registry

服务器和客户端均需配置允许 HTTP 访问：

```json
// /etc/docker/daemon.json
{
  "insecure-registries": ["<server-ip>:5000"]
}
```

配置后重启 Docker：`sudo systemctl restart docker`。Windows Docker Desktop 用户在 Settings → Docker Engine 中添加同样的 `insecure-registries` 配置。

在服务器上启动 Registry：

```bash
docker run -d --name registry --restart=always -p 5000:5000 registry:2
```

本地登录：

```bash
docker login <server-ip>:5000
```

> 以下所有 `<server-ip>` 请替换为实际服务器 IP。

## 1. 构建镜像

在项目根目录执行：

```bash
docker build -t <server-ip>:5000/official-website:<version> .
```

## 2. 推送镜像

```bash
docker push <server-ip>:5000/official-website:<version>
```

## 3. K8s 部署

> K8s 节点也需配置 insecure-registries，编辑 `/etc/containerd/config.toml`，添加：
>
> ```toml
> [plugins."io.containerd.grpc.v1.cri".registry.mirrors."<server-ip>:5000"]
>   endpoint = ["http://<server-ip>:5000"]
> ```
>
> 配置后重启 containerd：`sudo systemctl restart containerd`。

部署前，先将 `k8s/deployment.yaml` 中的镜像标签更新为实际版本号：

```yaml
image: <server-ip>:5000/official-website:<version> # 将 latest 改为实际版本
```

然后执行：

```bash
kubectl apply -f k8s/
```

## 4. 过渡部署（K8s 就绪前）

若 K8s 集群尚未跑通，可先用单个容器临时顶替，端口与未来 K8s NodePort 保持一致（30080）。域名入口层（DNS / 宿主机 Nginx / HTTPS 证书）在后续切换 K8s 时无需任何改动。

```bash
docker run -d \
  --name official-website-tmp \
  --restart=always \
  -p 30080:80 \
  <server-ip>:5000/official-website:<version>
```

验证：`curl -I http://127.0.0.1:30080` 返回 200 即可，随后按第 5 节接入域名。

## 5. 域名接入（ezbuild.design）

采用宿主机 Nginx 反向代理 + Certbot 签发 HTTPS 证书的方案，流量路径：

```
浏览器 → https://ezbuild.design → 宿主机 Nginx (80/443) → 127.0.0.1:30080 → K8s NodePort Service 或过渡容器 → Nginx
```

### 5.1 配置 DNS 解析

在域名服务商（购买 `ezbuild.design` 处）添加两条 A 记录，指向服务器 IP（下文以 `119.45.31.214` 为例）：

| 类型 | 主机记录 | 记录值        |
| ---- | -------- | ------------- |
| A    | @        | 119.45.31.214 |
| A    | www      | 119.45.31.214 |

验证解析生效（返回服务器 IP 即可）：

```bash
nslookup ezbuild.design
```

### 5.2 安装宿主机 Nginx 与 Certbot

```bash
sudo apt update
sudo apt install -y nginx certbot python3-certbot-nginx
```

### 5.3 配置反向代理

创建 `/etc/nginx/conf.d/ezbuild.conf`：

```nginx
server {
    listen 80;
    server_name ezbuild.design www.ezbuild.design;

    location / {
        proxy_pass http://127.0.0.1:30080;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

> K8s Service 为 NodePort 30080（见 `k8s/service.yaml`），宿主机 Nginx 只需代理本机 30080 端口。

检查并重载：

```bash
sudo nginx -t && sudo systemctl reload nginx
```

此时通过 `http://ezbuild.design` 应已能访问（若 80 端口被系统默认站点占用，删除 `/etc/nginx/sites-enabled/default` 后重载）。

### 5.4 签发 HTTPS 证书

```bash
sudo certbot --nginx -d ezbuild.design -d www.ezbuild.design
```

Certbot 会自动完成：验证域名所有权 → 申请 Let's Encrypt 证书 → 改写 Nginx 配置监听 443 并配置 HTTP 自动跳转 HTTPS。

### 5.5 验证与续期

```bash
# 验证 HTTPS 与证书信息
curl -I https://ezbuild.design

# 查看自动续期定时器（证书有效期 90 天，certbot 自动续期）
sudo systemctl list-timers | grep certbot

# 手动测试续期流程
certbot renew --dry-run
```

### 5.6 防火墙（可选）

```bash
# 仅放行 SSH / HTTP / HTTPS，收敛起见可同时关闭 30080 对外访问
sudo ufw allow 22
sudo ufw allow 80
sudo ufw allow 443
sudo ufw enable
```

## 6. K8s 跑通后从过渡方案切换

K8s 集群就绪后，下线临时容器并启用 K8s 部署。NodePort 同为 30080，域名、证书、宿主机 Nginx 配置均无需改动：

```bash
# 1. 下线临时容器（不能与 NodePort 同时占用 30080）
docker stop official-website-tmp && docker rm official-website-tmp

# 2. 更新 k8s/deployment.yaml 镜像标签后部署
kubectl apply -f k8s/

# 3. 验证接管
curl -I https://ezbuild.design
```
