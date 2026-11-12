# Reading gestures, adjacent previews and compact tools

Q295 preserves all accepted 85-page comic originals, generated orbit media,
frame identities, source-bound lettering and translations. Its only new image
payloads are three faithful 96x120 lossless WebP chapter thumbnails, 51,092 bytes
total, requested only when the directory opens.

## Interaction

One finger continues to turn an individual panel. Two touches claim page zoom
and pan, with a midpoint anchor and zoom limits of 1x to 5x. Starting a pinch
pauses existing panel handles and pending manual detail selection; no player is
recreated. Orbit and gyro events are suppressed during the pinch. A remaining
finger stays locked until all fingers lift. Cancellation, fit controls, hidden
pages and navigation clean up the gesture. Mouse and keyboard behavior remains.

A stationary selected angle may gain detail through a 100 ms snapshot fade.
The normal canvas immediately receives its verified detailed image. At most one
snapshot exists, with longest side at most 720px; disposal clears its pixel
buffer. A new selected angle or reset removes it. Reduced-motion preference and
transparent sparse layers skip this optional effect.

## Optional adjacent-page preparation

The existing next-original warmup now may prepare one light interaction preview
after the current page is fully usable, one second idle, on a known fast visible
connection. Slow, unknown, saving or hidden connections skip automatic warmup.
Decoded model and frame metadata share a 100 KiB budget; one preview is capped at
350 KiB, with 450 KiB total. No neighboring HD pack, video or second preview is
prepared. Existing source/hash validators inspect private metadata without
publishing it to the current book. Only completed verified bodies are handed to
the ordinary loaders on target navigation; unfinished work is canceled and uses
the normal fallback. The loaders still perform their regular validation.

Controlled Edge tests at 150ms latency / 200 KB/s measured next-page first usable
at 925.5ms before and 619.6ms after warmup. This uses idle transfer time, not a
faster server. The example's optional bodies totaled 231,218 decoded bytes, and
each warmed URL transferred once with the browser cache disabled. The helper
adds about 1,727 gzip bytes. An already verified model is not fetched again.

## Directory and tools

The compact directory shows three small original chapter covers and opens with
the current chapter card visible. Share this page and Record a page problem are
inside More. Sharing preserves page and language, invokes native sharing from a
user action when available, and offers copy/manual selection fallbacks. Native
cancellation is respected. The report contains only optional reader-entered text
and local page/language/readiness/connection hints; it is copied locally and is
never automatically submitted or sent as telemetry. Tool labels, reading guide,
focus handling and small-screen layout support all six existing languages.

## Acceptance

The frozen reader passed all 85 pages on desktop and simulated phone: 128
interactive hosts, 85 source lettering packets and 103 protection samples per
profile. The combined tools suite passed 18 checks, including 320px six-language
layout, independent three-panel drag/reset and whole-page interaction. Actual
CDP two-touch tests passed midpoint anchoring within 0.5px, remaining-finger lock,
interruption of existing motion, gyro suppression, zoom clamps and post-pinch
independent dragging. Prewarm tests cover saveData/weak/unknown/hidden gates,
cancellation, malformed/SHA-corrupt preview fallback, known-model reuse and an
actual HTTP206 detailed-angle upgrade with fade cleanup. Native share outcomes
were mocked for repeatable branch checks; physical phone/OS sharing and sensor
quality are not claimed as field-tested.

Editable sources: `release-source/q295`. The workflow uses only the reviewed
`docs/pages-release-manifest.json` file map, preserving the existing publication
environment gate and stable concurrency group. No paid generation was used.

## Cached earlier documents

An older cached HTML document can still request the shared `reader.js` path
with its older version query. New optional tools therefore initialize only when
their matching elements exist. Earlier directories keep their page-number focus
fallback, and missing new dialogs are skipped. A deliberate Q294-HTML/current-JS
browser test passed startup, six languages, directory, real panel drag/reset and
navigation. The corrected current document also passed the full 18-check UI
suite. An earlier pending build of this iteration was rejected before deployment;
only the cache-compatible revision is approved for publication.
