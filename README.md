VentoSail 静态网站（ventosail.com）

概述
- 类型：纯静态网站（HTML/CSS/JS）
- 目的：展示 VentoSail 全球航运业务与联系方式
- 特色：
  - 顶部联系栏（Email 与 WhatsApp 一键联系）
  - 首页全宽轮播（5 张，默认 5 秒切换）
  - “公司信息”新颖布局（斜切背景 + 玻璃拟态卡片 + 图片拼贴）
  - “公司业务”卡片栅格（欧洲航线、每周航线、澳洲航线、定制方案）
  - 响应式、可无障碍键盘操作（轮播支持左右键）

目录结构
- index.html
- assets/
  - css/styles.css
  - js/main.js
  - img/（站内 SVG 占位图与 favicon）

本地预览
1. 双击 `index.html` 用浏览器打开即可；或使用任意静态服务器：
   - Node：`npx serve .` 或 `npx http-server .`
   - Python：`python -m http.server 8080`

部署到 Cloudflare Pages（通过 GitHub）
1. 将本仓库推送到你的 GitHub（例如 `ventosail/site`）。
2. 登录 Cloudflare 控制台 → Pages → Create a project。
3. 选择 “Connect to Git”，授权并选择仓库。
4. Build settings：
   - Framework preset：`None`
   - Build command：留空（静态文件无需构建）
   - Build output directory：`/`（根目录）
5. 等待首次构建完成，预览域名会生成。
6. 绑定自定义域名 `ventosail.com`：
   - Pages 项目 → Custom domains → Set up a custom domain
   - 按引导完成 DNS 解析（通常添加 CNAME 或 A 记录到 Cloudflare 提供的目标）。

自定义说明
- 替换图片：
  - 目前 `assets/img/*.svg` 是轻量占位图，方便快速上线。
  - 若有实拍/素材图，将文件命名替换为同名 `.jpg/.png` 并更新 `assets/css/styles.css` 中对应 `background:url()` 即可。
- 轮播切换间隔：
  - 在 `index.html` 中的 `.carousel` 元素上有 `data-interval="5000"`，单位毫秒。
- 联系方式：
  - 修改顶栏的 `mailto:` 与 `https://wa.me/` 链接即可。

SEO/运营建议
- 在 `<head>` 中完善 `title/description` 与 Open Graph 标签（已初始配置）。
- 可在 Cloudflare Pages 中开启：
  - 自动压缩（压缩 HTML/CSS/JS）
  - 缓存（合理设置 Cache）
  - HTTPS 强制与 HSTS

版权与法律
- 页脚包含通用法律声明占位。若有正式隐私与条款页，可将链接指向对应页面。

