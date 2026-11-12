# Reader loading and recovery iteration

This release preserves all accepted 85-page artwork, original lettering geometry,
frame sequences, source packets, translations, book decoration and music.

The initial page's existing verified configuration is reused to prepare its small
source-mask transfers after the original page image arrives. Existing compressed
preview-first loading, SHA checks and HD frames on demand remain in effect.
The additional HTML helper is approximately 1.3 KB compressed. Controlled tests
with an explicitly delayed reader showed a modest 0.18–0.21 second improvement;
ordinary local loading was essentially unchanged. This is not a general CDN
latency or worldwide speed guarantee.

On an explicitly fast connection, once every current panel is usable, one second
of idle time may load only the next original image in the reading direction.
There is at most one speculative original, no adjacent video, frame pack or
metadata. Save Data, slow or unknown connections and hidden pages skip automatic
warmup. Dragging or turning elsewhere cancels it. The same in-flight or finished
image is reused on the actual page turn, avoiding a duplicate request. A controlled
200 KB/s test measured click-to-original at 2,034 ms without warmup and 27 ms with
a previously finished warmup; the benefit uses an earlier idle transfer.

Retry now recovers interrupted panels together without replacing healthy sibling
hosts or their selected angles. Shared frame stores are released before recovery,
and a previously failed video fallback can retry if frame loading fails again.
Errors remain visible on the phone's edge paper tabs after an earlier drag and
in motion-control mode. The recovery button keeps a phone-sized hit area and is
allowed to wrap below a long status message. Publication titles and footer copy
are quieter in all six languages; the detailed visual caveat remains in About.

## Validation

The exact combined reader passed all 85 pages on desktop and simulated phone:
128 interactive hosts, 85 source-bound lettering packets and 103 protection
samples per profile, with no script or application-resource HTTP errors. All
accepted media and packet bytes were verified unchanged. Focused tests cover
individual panel drag/reset, exact failed-angle HTTP 206 byte/SHA recovery,
shared-store recovery, unavailable-preview video fallback, navigation cancellation,
Save Data, slow/unknown connection gating, pending/finished warm-image reuse and
six-language controls. Physical phone gyro quality is outside these automated
checks.

Editable sources are retained in `release-source/q294`. The deployment file map
is `docs/pages-release-manifest.json`; the workflow publishes only those reviewed
files. This iteration adds no paid generation or external delivery provider.
