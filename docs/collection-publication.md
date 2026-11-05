# Three-episode collection publication

The collection is an optimization draft, not a declaration that every generated
view passed final visual acceptance. It retains all 85 original pages, including
the collection cover, and all three supplied background-music web versions.

The original episode-one files remain in Git. New collection assets use the
`collection/` prefix because the old first-episode page numbers and the original
85-page source numbers differ. The published root redirects to `collection/`
while preserving query parameters and the page fragment. No old episode-one
asset is overwritten by a different original page at the same URL.

`docs/collection-active-assets.json` records selected paths, byte lengths and
SHA-256 values. Exactly five runtime paths are explicitly audited for publication:
the approved external-delivery adapter, the retained local-delivery config, the
deterministic bundle, the derived entry HTML and the optional diagnostic module.
All comic pixels, videos, frame packets, fonts and audio retain their source bytes.
The source configuration uses local HD and no mirrors, so a checkout remains
usable with all retained files present.

Before publishing, `tools/verify_collection.py` checks the complete file inventory,
85 page/source bindings, all three audio tracks, 110 frame sequences, the region
child media binding, 440 HD packets with 17,267 frame rows, and 110 preview packets
with 2,640 frame rows. Every packet row is checked for byte length, SHA-256 and
WebP dimensions. The original 20-source reader bundle is verified as well. This
replaces the older first-episode-only deployment parsers; verification is not
skipped.

The Q34 protection-delivery correction enables the previously missing lossless
WebP declaration. Its 63 existing PNG/WebP mappings were decoded locally and
compared byte-for-byte in RGBA, including hidden transparent RGB. Exactly 62
current bindings use 59 unique WebP files, with every original PNG retained as a
fallback; the stale page-85 mapping remains rejected. These protection downloads
total 23,745,144 bytes instead of 38,749,824 bytes, a 38.72% reduction for those
resources only. No page, media, text, crop or animation pixels were changed.
`docs/collection-lossless-protection-q34.json` retains the pixel-audit hashes and
active file evidence. CI pins the three reviewed source changes, checks the
unchanged mapping bytes, current bindings, dimensions and original fallbacks.
This is not a measured 38.72% improvement in overall page-loading time.

GitHub Actions builds a separate `_site` artifact instead of publishing all of
`dist`. It includes original images, preview packets, active video fallbacks,
protection images, original-panel download links, fonts and music. The HD packets
remain in Git but are excluded from the Pages artifact, keeping the published
site around 674 MB. The build enables external HD using two retained sources:
a content-addressed Cloudflare static-asset mirror and a verified immutable
GitHub media commit. Reader-only releases keep both media URL sets unchanged,
so cached packets remain reusable. The webpage release commit is recorded
separately from the media-source commit.

The first HD request starts one shared comparison of the two 16 KiB probes.
Only a complete probe with the expected SHA-256 can select a route. HD waits
at most 1.2 seconds for that comparison; unresolved selection uses the existing
GitHub route, and the probes expire after 6 seconds. Original images and small
all-angle previews neither start nor wait for those probes. Connection or HTTP
failures fall back to the other configured route; the reader's explicit retry
allows previously failed routes to be measured again. Probe latency does not
prove which route has the fastest sustained large-file throughput.

`tools/verify_cdn_manifest.py` requires the exact current packet inventory and
real remote header/body observations in `docs/collection-cdn-deployment.json`.
`tools/verify_media_origin.py` binds all 551 logical frame/preview/probe paths
to the separately verified Git source recorded in `docs/collection-media-origin.json`.
A changed media file or path invalidates those proofs. The reviewed adaptive
module is a build-only override, pinned by SHA-256 and included in the release
receipt; historical source-media inventory remains exact.

The mirror serves static files without executing a Worker. Cloudflare currently
documents free unlimited static-asset requests and no additional storage cost,
with 20,000 files per free Worker version and 25 MiB per individual file. The
prepared mirror fits these limits. No R2 bucket or paid plan is required.
Documentation checked 2026-11-05:
https://developers.cloudflare.com/workers/static-assets/billing-and-limitations/
https://developers.cloudflare.com/workers/platform/limits/#static-assets

This split respects GitHub Pages' documented 1 GB published-site limit without
reencoding or discarding HD views. Documentation checked 2026-11-04:
https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits

Adding `?perf=1` to the collection URL enables a small optional measurement panel.
It reports actual browser request durations, original-visible time, each panel's
preview and HD readiness, and transfer details where the browser exposes them.
Cross-origin restrictions and cached byte counts are disclosed. The panel makes
no network telemetry uploads and ordinary readers do not download its script.
Real public network measurements must be collected after deployment; local build
success and packet checks are not a claim about internet latency.


## Q47：使用当前页的已校验高清包选择线路

构建时将历史帧缓存模块替换为 `tools/adaptive-frame-cache.js`，原始分发目录与素材清单保留。先用既有小探针建立初始线路，再由当前页实际需要的不同高清包各取一条线路样本；只有完整包 SHA 校验通过才统计交付速度，后续新包使用明显更快的线路。同一内容包固定来源以保持 HTTP 缓存复用，失败来源与过期请求不能写入新一轮测速。预览仍从页面原站加载，不额外下载高清素材测速，也不预取未来页。

25 项线路受控检查与 5 项真实素材缓存集成检查通过，其中两个模块一起处理第 78 页两格的真实帧包，维持独立角度、4 路下载/解码、24 张位图上限。详见 `collection-loading-qa47.json`。这是功能验证，尚未证明真实浏览器或各地区下载速度改善；整书画面质量仍未完成验收。
