# EZBuild Website

EZBuild 官网项目。

## 技术栈

- **React** + **TypeScript** — 前端框架与类型系统
- **Vite** — 构建工具
- **Redux Toolkit** — 状态管理
- **MUI** + **Ant Design** — UI 组件库

## 开发环境要求

- [Node.js](https://nodejs.org/)
- [pnpm](https://pnpm.io/)

## 快速开始

```bash
pnpm install
pnpm dev
```

## COS 模型资源

智能设计使用 COS `club/A.glb`–`club/L.glb`。每次开始设计或重新加载时，通过
`GET /api/v1/website/models/resource/?key=club%2FA.glb` 获取一小时有效的签名 URL。
需同步部署同级 `ezbuild_model_library_server` 的官网资源接口，服务端 COS 配置指向
`ezbuild-models-1462104808` 及其实际 Region；浏览器不保存 COS 密钥。

复制 `.env.example` 为 `.env.local`。开发环境 `/api` 默认代理到 `http://127.0.0.1:8000`，
可用 `API_PROXY_TARGET` 修改。生产环境将 `/api` 反向代理到 server，或通过
`VITE_API_BASE_URL` 指定完整 API 地址（包含 `/api/v1/`）；跨域时需配置 server 和 COS
允许官网域名访问。GLB 应包含内嵌贴图等依赖。

| 条件 | 包豪斯 | 自然风 |
| --- | --- | --- |
| 文旅民宿 ≥200㎡，8 间 | A | B |
| 文旅民宿 ≥200㎡，12 间 | C | D |
| 自建住宅 <100㎡，1–2 人 | E | F |
| 自建住宅 <100㎡，3–4 人 | G | H |
| 自建住宅 100–200㎡，1–2 人 | I | J |
| 自建住宅 100–200㎡，3–4 人 | K | L |

## 构建

```bash
pnpm build
```

## 代码格式化

```bash
pnpm format
```
