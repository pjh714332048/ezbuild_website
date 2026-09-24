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
