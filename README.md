# Allo图库 Lite

REDMI Watch 6 上的轻量图库快应用，通过 AstroBox 插件从手机推送图片到手表。

这是 Allo图库 系列的 **Lite 版**：去掉了标准版的实验性功能（壁纸背景、预览比例切换等），只保留最稳定的核心体验，适合追求稳定和省电的用户。

## 功能

- **三列网格** 图库浏览，缩略图加载
- **手机推送图片**：AstroBox 插件选图 → 自动压缩 → QAIC 分片传输到手表
- **大图浏览**：圆形半透明返回 / 左右切换按钮，双图跟手滑动翻页
- **收藏图库**：一键收藏 / 取消收藏
- **删除图片**：带确认提示
- **更多页**：导入图片、收藏图库、退出应用、版本号

> Lite 版**不含**：壁纸背景、实验性比例切换、视频实验室。需要这些功能请用标准版 / Pro 版。

## 配套插件

手表端需要配合 AstroBox 导入插件使用。插件为 Rust / WASI（API Level 4），从手机选图后自动唤起手表上的对应版本。

| 版本 | 包名 | 配套插件 |
|---|---|---|
| Lite | `com.example.gallery.lite` | `Allo图库导入插件-Rust4-v4.2.4.abp` |

插件对标准版、Lite、Pro 三个包名都做了投递兼容，装哪个版本都能收到图片。

## 安装

1. 用 [AstroBox](https://astrobox.online/) 连接手表。
2. 安装 `dist/` 目录下的：
   - `Allo图库Lite-RW6-v1.0.1.rpk`（手表端）
   - `Allo图库导入插件-Rust4-v4.2.4.abp`（手机端插件）
3. 打开插件，点「选择图片」从手机挑图，图片会自动传到手表图库。

> 源码在国内网络下也可用「表盘自定义工具」等第三方工具安装 rpk。

## 目录结构

```
src/        # 快应用源码（.ux 三段式）
  Index/      主页 + 大图浏览
  Import/     导入页（接收插件推送）
  Settings/   更多页
  Favorites/  收藏图库
  About/      关于页
  common/     公共模块与图片资源
build/      # 编译产物（由 aiot build 生成）
dist/       # 可直接安装的交付包（rpk + abp）
```

## 本地构建

需要 Node.js 与 AIoT 工具链：

```bash
npm install
npm run build
```

产物生成在 `dist/`。

## 技术说明

- 快应用框架：小米 Vela，`.ux` 三段式（template / style / script）
- `designWidth: 432`，适配 REDMI Watch 6（432×514）圆形屏安全区
- 图片协议：大图 `g<gid>.png` + 缩略图 `t<gid>.png`，QAIC `gallery_chunk` 分片传输
- 稳定优先：只插值 `left/top` 位移，不动态插值宽高；翻页首末停住不循环；背景能力在 Lite 版已移除

## 许可

仅供学习与个人使用。
