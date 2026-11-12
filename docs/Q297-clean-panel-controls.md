# Cleaner comic panels

Remove the per-panel Enlarge buttons and their dedicated focus dialog at the
reader's request. The unused focus implementation and its integration hooks are
removed from the retained source, reducing the reader by 17,057 bytes.

Single-panel dragging, whole-page two-finger zoom, reset, immediate page feedback,
chapter bookmarks, quiet reading tools and chapter music remain in their existing
reading flow. No new button, menu entry or gesture replaces the removed controls.
Comic originals, translations and orbit media are identical to Q296.

The exact publication map still controls the static artifact. Retained editable
sources are in `release-source/q297`; validation and public readback receipts are
in the production workspace under `work/Q297-reader`.
