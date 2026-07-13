# NextFile 官网（nextfile.cn）

独立静态站点，用于项目介绍与推广。与主应用 `frontend/` 分离部署。

GitHub：[filenext/website](https://github.com/filenext/website)

## 功能

- 中英文切换（自动检测浏览器语言，选择持久化）
- 产品演示（文件管理 / AI 对话 / 管理后台 三 Tab 切换）
- 愿景 · 使命 · 价值观
- 定价方案（社区版 / 团队版 / 企业版）
- 更新日志页 `/changelog`

## 域名规划

| 域名 | 用途 |
|------|------|
| `nextfile.cn` | 官网（本目录构建产物） |
| `app.nextfile.cn` | 产品实例（主应用 `frontend/` + `nextfile/`） |

## 本地开发

```bash
cd frontendsite
npm install
cp .env.example .env
npm run dev
```

访问 http://127.0.0.1:5433

## 构建与部署

```bash
npm run build
# 或从项目根目录
./scripts/deploy-site.sh
```

Nginx 配置：`deploy/nginx/nextfile-site.conf`

## 环境变量

| 变量 | 说明 |
|------|------|
| `VITE_APP_URL` | 「在线体验」跳转（默认 `https://app.nextfile.cn`） |
| `VITE_GITHUB_URL` | GitHub 仓库 |
| `VITE_DOCS_URL` | 部署文档链接 |

## 文案修改

所有可翻译文案在 `src/i18n/locales/`（`zh-CN.ts`、`en-US.ts`）。非文案配置（URL 等）在 `src/config.ts`。
