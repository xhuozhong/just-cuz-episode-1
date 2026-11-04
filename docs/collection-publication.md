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
site around 674 MB. The build enables external HD and supplies only the immutable
raw GitHub URL for the exact deployed `GITHUB_SHA`, then rebuilds the reader and
updates its version. The draft Cloudflare packet upload is not a published route
for this collection and is not configured in the artifact.

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
