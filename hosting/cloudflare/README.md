# 帧包静态镜像

已发布的帧包源为 `https://just-cuz-episode-1-mirror.xhuozhong.workers.dev/`。阅读入口继续使用 [GitHub Pages](https://xhuozhong.github.io/just-cuz-episode-1/?v=load8)；镜像根地址不提供阅读页面。

本项目仅分发既有高清帧包、24帧低清预览包和16 KiB线路探针。漫画页面、音乐、原图和视频后备继续由原GitHub Pages站点提供。所有镜像帧包以完整内容SHA命名，重复内容只存一份。

使用 Node 22+ 与 npm，安装锁定依赖后运行：

```sh
python prepare_assets.py
npm run check
npm run deploy
```

发布仍通过 `cf deploy --prebuilt`。首次使用尚未注册公开子域的账号，需要在可交互终端中完成 cf 提供的 workers.dev 注册提示。账号选择来自 cloudflare.config.ts；文件不含令牌。

cf beta.12 在 Windows 下直接委派 Wrangler 的JS入口会产生 `spawn EFTYPE`。这里通过官方 `@cloudflare/build-output-utils` 构建仅静态资源的 Build Output，再交给 cf 验证和发布，不修改CLI或依赖包。wrangler.config.ts只保留构建目录声明；它不负责部署。

构建脚本核对每个包的完整SHA、文件数量、单文件大小和BOS复制结果；无Worker脚本、运行时绑定或容器，`runWorkerFirst:false`。静态资源的当前额度见[官方计费与限制](https://developers.cloudflare.com/workers/static-assets/billing-and-limitations/)。

`_headers`允许公开帧包跨域读取，禁止内容转换，对内容哈希路径长期缓存；小探针不使用浏览器缓存。播放器先核对探针长度和SHA再选择先完成的线路，所有帧和包仍需通过原有内容校验。网络/HTTP错误可回源；正文开始后的错误会保留可用角度、标记坏线路并提示重新准备，不声称对所有断流无感恢复。

public-v8与BOS是忽略的构建副本，不纳入Git；不得将账号凭据放入这些目录。完整运行时仍以GitHub仓库中dist为来源。
