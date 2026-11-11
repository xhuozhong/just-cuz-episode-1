# Q291 exact Pages publication

The publication workflow verifies `docs/pages-release-manifest.json` with `tools/stage_verified_pages.py`, emits exactly its reviewed files to `_site`, and checks the conservative 1,000,000,000-byte budget. It performs no media conversion, rebundling or route selection during deployment. The reviewed frontend map currently contains 1,607 files / 996,771,161 bytes.

The six split-asset payloads are served from `xhuozhong/just-cuz-orbit-assets`. Before deploying the frontend, the workflow verifies their complete SHA-256 values and actual HTTP 206 ranges at the configured immutable paths. Publish that asset repository first, using GitHub Actions as its Pages source, then run the frontend workflow.

Editable runtime source is retained in `release-source/q291/`; its complete source inventory is `pages-runtime-source-inventory.json`. Run `python tools/bundle_verified_runtime.py --dist release-source/q291 --verify` to verify the reader. The reviewed on-demand reader is `39f82e7842c9f0cbcbe0283ec5ff873008590653a29a31a6a8701d68066f3785`.

The release reuses 677 existing Git blobs / 722,924,284 bytes. Frontend additions and replacements total 930 files / 273,846,877 bytes, plus 287 editable runtime source files / 7,124,618 bytes. Historical Git paths are retained. The existing first-episode archive remains in the repository. `.gitattributes` preserves checked bytes across Windows and CI.

## Compatibility policy

Preserve current tested source/readable/text resources, current delivery routes, the specifically tested old P43 public HD paths and all Git history. Retire obsolete optional Pages URLs rather than expand the asset split to every page. This keeps the reviewed architecture and both Pages artifacts within their size budgets.

The exact artifact omits 442 obsolete non-HD paths / 578,631,062 bytes from the former publication inventory, principally old optional MP4s and source crops. Their original bytes remain addressable at fixed historical Git commits. Full compatibility with every historical Pages URL is outside the selected publication scope.

The former public HTML and versioned reader were observed with `Cache-Control: max-age=600`. An already-open tab may continue using an older reader until reloaded; a cached older reader can request retired optional resources. Page1 desktop/phone transition spot-checks kept the original visible with either the old cached reader or the new reader under old HTML, while reporting interaction unavailable. Refreshing onto current HTML restores the current bootstrap and reader reference. This is a cache transition boundary, not a promise to retain every obsolete URL.

## Verification

The frozen on-demand reader passed 85-page desktop and phone traversals: 128 interactive hosts and 85 source-pinned bilingual packets per profile, with zero browser or HTTP errors. Separate P14/P43/P78 cases verified actual mouse/touch interaction, independent panels, exact final HD Range hashes, source/text integrity, reset and next/back navigation. Six held in-flight reverse/navigation cases aborted obsolete requests without stale painting. These results apply to the recorded reader hash; public performance requires verification of the deployed commit and URLs.

Release using a non-force, expected-parent main update. Record the exact commit and Actions run, then verify the live artifact hashes, source/text resources, preview response, HD Range body and desktop/phone interaction. The complete frontend map is authoritative for the deployment bytes.

## User acceptance and technical evidence

On 2026-11-12, the user accepted the existing comic materials as basically ready and directed the remaining work toward loading speed and user experience. This accepts the current artwork for publication; it does not certify perfect generated viewpoints or calibrated 3D geometry. Publication is authorized, with live verification recorded separately after deployment.

The frozen on-demand reader SHA-256 is `39f82e7842c9f0cbcbe0283ec5ff873008590653a29a31a6a8701d68066f3785`. Its full 85-page desktop and phone pass recorded 85 pages, 128 interactive hosts, 85 source-pinned bilingual packets and 103 protected/lettering samples per profile, with zero browser or HTTP errors. The complete technical book receipt SHA-256 is `fb191adfbfb6cc27c158a2466452e3a1ad1635e1be8cd551abe7a4506ca9bca2`. Frontend and asset file maps were identical before and after that pass. Metadata finalization changes only `collection-release.json`; runtime, HTML, media, source/text resources and routes remain exact.

The embedded collection receipt describes the reviewed prepublication build. It does not assert that its public deployment has already been verified. Post-deployment commit/run, live hash, Range and performance evidence is written to the separate workspace receipt `work/Q291-public-verification.json`.
