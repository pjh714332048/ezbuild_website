# 部署文档

## 服务器信息

| 项目     | 值                          |
| -------- | --------------------------- |
| 服务器   | `root@119.45.31.214`        |
| 部署目录 | `/var/www/website/`         |
| 访问地址 | `http://119.45.31.214:3000` |

---

## 1. 本地构建

```bash
pnpm install
pnpm build
```

构建完成后会在项目根目录生成 `dist/` 目录，包含所有静态资源。

---

## 2. 首次部署

### 2.1 上传构建产物到服务器

在项目根目录下的 **Windows PowerShell** 中执行：

**方式一：SCP**

```powershell
scp -r dist\* root@119.45.31.214:/var/www/website/
```

**方式二：Rsync**（推荐，支持增量传输，后续更新更高效）

```powershell
rsync -avz --progress dist/ root@119.45.31.214:/var/www/website/
```

> **注意：** 以上命令需在 Windows PowerShell 中执行，不要使用 WSL（WSL 的密码认证存在问题）。

### 2.2 服务器端安装 Nginx

SSH 登录服务器后执行：

```bash
# CentOS / RHEL
yum install -y nginx

# Ubuntu / Debian
apt update && apt install -y nginx
```

### 2.3 配置 Nginx

项目中已包含 Nginx 配置文件 `nginx.conf`，将其上传到服务器：

```powershell
scp nginx.conf root@119.45.31.214:/etc/nginx/conf.d/website.conf
```

> 如需绑定域名，修改 `nginx.conf` 中的 `server_name` 为域名，并将域名 A 记录指向 `119.45.31.214`。

### 2.4 启动 Nginx

```bash
sudo nginx -t        # 检查配置是否正确
sudo systemctl enable nginx   # 设置开机自启
sudo systemctl start nginx    # 启动 Nginx
```

> **注意：** 所有 Nginx 管理命令都需要 `sudo` 权限。

---

## 3. 后续更新部署

只需重新构建并上传，无需重启 Nginx：

```bash
pnpm build
```

然后在 PowerShell 中执行：

```powershell
scp -r dist\* root@119.45.31.214:/var/www/website/
```

或使用 rsync（推荐，只传输变更文件，速度更快）：

```powershell
rsync -avz --progress dist/ root@119.45.31.214:/var/www/website/
```

---

## 4. 访问方式

部署完成后，浏览器访问 `http://119.45.31.214:3000`。

---

## 5. 常见问题

### SCP / SSH 每次都要输入密码

建议配置 SSH 密钥免密登录：

```powershell
# 1. 本地生成密钥（如果还没有）
ssh-keygen -t ed25519

# 2. 将公钥上传到服务器
type $env:USERPROFILE\.ssh\id_ed25519.pub | ssh root@119.45.31.214 "mkdir -p ~/.ssh && cat >> ~/.ssh/authorized_keys"
```

配置完成后，SCP / Rsync 命令将不再需要输入密码。

### WSL 中 SCP / Rsync 密码认证失败

- **现象：** 在 WSL 终端执行 `scp` / `rsync` 时报 `Permission denied (publickey,password)`，但 Windows PowerShell 中 SSH 可以正常登录
- **原因：** WSL 的 SSH 客户端与 Windows 的 OpenSSH 实现不同，密码认证存在兼容性问题
- **解决：** 部署命令在 **Windows PowerShell** 中执行；或配置 SSH 密钥免密登录（见上一节）

### Nginx 命令权限不足

- **现象：** 执行 `nginx -t` 报 `Permission denied`
- **解决：** 使用 `sudo nginx -t`，所有 Nginx 管理命令（`nginx -t`、`systemctl restart nginx` 等）都需要 `sudo`

### 500 Internal Server Error — Nginx 配置冲突

- **现象：** 部署后访问域名返回 500 错误
- **错误日志：** `rewrite or internal redirection cycle while internally redirecting to "/index.html"`
- **原因：** `/etc/nginx/sites-enabled/` 下存在其他配置文件（如 `ezbuild`），拦截了请求导致冲突
- **解决：**
  ```bash
  # 1. 查看是否有冲突配置
  ls /etc/nginx/sites-enabled/
  # 2. 删除不需要的配置
  sudo rm /etc/nginx/sites-enabled/ezbuild
  # 3. 重启 Nginx
  sudo systemctl restart nginx
  ```

### 一台服务器部署多个前端项目

三种常见方式：

**方式一：不同域名 → 不同项目（最常用）**

```nginx
# /etc/nginx/conf.d/project-a.conf
server {
    listen 80;
    server_name a.example.com;
    root /var/www/project-a;
    index index.html;
    location / { try_files $uri $uri/ /index.html; }
}

# /etc/nginx/conf.d/project-b.conf
server {
    listen 80;
    server_name b.example.com;
    root /var/www/project-b;
    index index.html;
    location / { try_files $uri $uri/ /index.html; }
}
```

**方式二：同一 IP 不同路径**

```nginx
server {
    listen 80;
    server_name _;

    location / {
        root /var/www/project-a;
        index index.html;
        try_files $uri $uri/ /index.html;
    }

    location /project-b {
        alias /var/www/project-b;
        index index.html;
        try_files $uri $uri/ /index.html;
    }
}
```

**方式三：不同端口 → 不同项目**

```nginx
server {
    listen 80;
    server_name _;
    root /var/www/project-a;
    index index.html;
    location / { try_files $uri $uri/ /index.html; }
}

server {
    listen 8080;
    server_name _;
    root /var/www/project-b;
    index index.html;
    location / { try_files $uri $uri/ /index.html; }
}
```

### 部署后页面空白或 404

- 确认 `dist/` 文件已正确上传到 `/var/www/website/`
- 确认 Nginx 配置中的 `root` 路径与实际部署目录一致
- 运行 `sudo nginx -t` 检查配置语法
- 查看 Nginx 错误日志：`tail -f /var/log/nginx/error.log`
