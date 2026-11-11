# Just Cuz · 三集互动漫画合集

[打开互动漫画](https://xhuozhong.github.io/just-cuz-episode-1/collection/)

原合集首页和三集故事，共85页。保留原漫画的页序、分格和原画阅读层，提供AI辅助生成的环绕视角。部分生成画面仍有局部人物或空间衔接瑕疵。

## 阅读

- 左右拖动单个画格查看不同视角；双击或按Home还原原画。
- 各画格独立操作，支持桌面鼠标和手机触摸。
- 可切换中文、英文、日文、韩语、俄语、法语；品牌标题Just Cuz保留英文。
- 每集使用对应背景音乐，也可手动暂停。
- 优先显示原画和轻量预览；高清内容按当前选择的角度读取，空闲时不下载整套高清帧。

生成视角属于AI辅助的环绕表现，并非可自由移动的真实三维场景。原有视频回退及帧数保留。

## 发布与验证

`docs/pages-release-manifest.json`列出完整发布文件及其内容摘要。GitHub Actions通过`tools/stage_verified_pages.py`验证并生成完全对应的`_site/`产物，不在发布时重编码素材或重新选择镜像。

页面和大部分资源由本仓库的GitHub Pages提供。第43页新增帧包和视频回退由同一账号的[独立素材仓库](https://github.com/xhuozhong/just-cuz-orbit-assets)提供。前端发布前会验证这些素材的完整文件摘要与实际HTTP 206范围响应。当前版本不依赖第三方素材CDN。

可编辑播放器源码位于`release-source/q291/`，用`python tools/bundle_verified_runtime.py --dist release-source/q291 --verify`检查其构建结果。发布过程和验证边界见[发布说明](docs/pages-q291-release.md)。

保留当前已测试的阅读资源、第43页旧版高清路径及全部Git历史。为遵守站点体积限制，不继续发布不再使用的旧版可选素材URL；旧版本素材仍可通过固定历史提交访问。已有页面或脚本可能短暂使用浏览器缓存，刷新并等待缓存更新后进入当前版本。

## 权利与来源

漫画、音乐及生成画面的相关权利归各自权利人，本仓库不对这些素材另授开源许可。播放器参考及字体许可见[第三方说明](dist/collection/THIRD_PARTY_NOTICES.md)。[原第一集版本说明](docs/episode1-readme-archive.md)保留历史实现和验证记录。
