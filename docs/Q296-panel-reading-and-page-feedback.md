# Enlarged panels and immediate page feedback

Each logical scene now has an Enlarge entry. Its reading dialog moves the live
page composition, including original artwork, translations, protection layers
and existing orbit canvases, into a clipped panel viewport. Returning restores
the whole-page zoom, scroll and current scene angles without duplicating media
players or requesting a new video. The dialog supports touch rotation, bounded
two-finger zoom/pan, fit, keyboard, Escape and browser Back. The two characters on
page 13 remain in the same scene; page 14 retains its three logical regions.

Page navigation immediately displays a small paper target tag. While the new
original is pending, the previous artwork and lettering are hidden under its
new page number. Only the latest navigation can settle, and a cached load event
cannot publish the same page twice. The existing board turn keeps its left
binding; resizing, hidden pages and reduced-motion preferences cancel obsolete
motion. The tag disappears when the requested original is readable.

Reading tools can fade after five seconds of settled idle reading without
changing book geometry. Input wakes them; focus, dialogs, dragging, loading and
errors keep them available. The existing More menu includes the opt-out. Each
chapter remembers its last successfully opened page, with a separate From start
choice. Chapter music uses one audio node with cancelable fade-out/fade-in,
preserving chapter mute and volume choices and the existing autoplay handling.

## Validation

- All 85 pages on desktop and simulated phone: 128 interactive hosts, 85 bound
  lettering packets and 103 protection samples per profile; no script or
  application HTTP errors. Candidate file maps remained unchanged.
- Seven enlargement contexts cover pages 11, 13 and 14 at 320/390px plus desktop:
  real CDP touches, pinch boundaries, existing canvas identity, sibling angles,
  zoom/scroll return, rapid close/reopen, Back/Escape, resize and six languages.
- A two-second delayed original still produced navigation feedback in the first
  measured frame (22.8/27ms in the merged local cases). Rapid navigation, load
  failure/retry, duplicate cached load, pending language change and reduced
  motion passed. These timings measure feedback, not full network loading.
- Five reading-detail suites, the existing 18 tool checks, three existing pinch
  contexts, and cached-Q295-HTML/current-reader compatibility passed.
- No comic, source image, lettering, orbit frame or media payload was replaced.
  The reader adds 9,283 gzip bytes over Q295; the exact static artifact remains
  1,610 files / 996,903,145 bytes.

Sources are retained in `release-source/q296`. Local evidence is indexed by
`work/Q296-reader/local-acceptance.json` in the production workspace. The exact
publication map and existing Pages environment review gate are preserved.

Mobile input was tested in simulated phone viewports, not on physical devices.
Music cancellation and autoplay cases use controlled audio/clock tests plus a
genuine muted audio node; physical sound quality is not claimed. GitHub edge
latency remains variable. Public deployment and interaction readback are tracked
separately from the local acceptance receipts.
