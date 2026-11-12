(() => {
  'use strict';
  const sha = value => typeof value === 'string' && /^[a-f0-9]{64}$/i.test(value);
  const relative = value => typeof value === 'string' && value.length > 0
    && !/^(?:[a-z]+:|[\/])|[:?#%\\\u0000-\u0020\u007f]/i.test(value)
    && value.split('/').every(part => part && part !== '.' && part !== '..');
  const positive = value => Number.isFinite(value) && value > 0;
  // Default caches must preserve native aspect. A reviewed full-native contain
  // with nearest-edge fill needs an explicit, matching source/media contract on
  // BOTH the panel and cache entry; it never changes source-media dimensions.
  function validFrameAspect(entry, panel, page, media) {
    // The crop is independently declared by this exact source-bound child.
    // All ordinary panels keep their existing native-aspect validation.
    if (entry.transparentFrameCrop!==undefined || panel.transparentFrameCrop!==undefined)
      return !!window.ComicPanelPlayer?.transparentFrameCrop(panel,page,entry);
    const mapping = entry.frameMapping, declared = panel.frameCacheMapping;
    if (mapping === undefined && declared === undefined)
      return Math.abs((entry.width / entry.height) / (media.width / media.height) - 1) <= .003;
    if (!mapping || !declared || panel.quality !== 'review-candidate'
      || mapping.mode !== 'uniform-contain-nearest-edge' || declared.mode !== mapping.mode
      || mapping.panelId !== panel.id || mapping.sourcePageSha256 !== page.sha256
      || mapping.mediaSha256 !== media.sha256 || !sha(mapping.sourceCropSha256)
      || mapping.sourceCropSha256 !== panel.sourceCropSha256 || !sha(mapping.publicationProofSha256)
      || !panel.bounds || !positive(panel.bounds.width) || !positive(panel.bounds.height)
      || Math.abs((entry.width / entry.height) / (panel.bounds.width / panel.bounds.height) - 1) > .003) return false;
    const keys = ['mode', 'panelId', 'sourcePageSha256', 'sourceCropSha256', 'mediaSha256',
      'publicationProofSha256', 'width', 'height', 'resizedWidth', 'resizedHeight', 'offsetX', 'offsetY'];
    if (!keys.every(key => mapping[key] === declared[key])) return false;
    const dims = ['width', 'height', 'resizedWidth', 'resizedHeight', 'offsetX', 'offsetY'];
    if (!dims.every(key => Number.isSafeInteger(mapping[key]) && mapping[key] >= 0)
      || mapping.width !== entry.width || mapping.height !== entry.height) return false;
    const scale = Math.min(entry.width / media.width, entry.height / media.height);
    const width = Math.round(media.width * scale), height = Math.round(media.height * scale);
    return width > 0 && height > 0 && mapping.resizedWidth === width && mapping.resizedHeight === height
      && mapping.offsetX === Math.floor((entry.width - width) / 2)
      && mapping.offsetY === Math.floor((entry.height - height) / 2)
      && width <= entry.width && height <= entry.height
      && (entry.width * entry.height - width * height) / (entry.width * entry.height) <= .1;
  }

  // The canonical local reader still ships its reviewed JPEG config as a
  // classic script. Keep that local config for page projections, not fetching.
  const legacy = !window.COMIC_FRAME_INDEX && window.COMIC_FRAME_SEQUENCES;
  const cache = new Map();
  let generation = 0, active = null;
  function cancelled() { const error = new Error('Page changed'); error.name = 'AbortError'; return error; }
  function indexEntry(page) {
    const index = window.COMIC_FRAME_INDEX;
    if (!page || !/^page-\d{3,}$/.test(page.id || '') || !sha(page.sha256) || !index || index.schemaVersion !== 1 || !Array.isArray(index.pages)) throw new Error('Page frame index unavailable');
    const sources = new Set();
    for (const entry of index.pages) {
      if (!entry || !sha(entry.sourcePageSha256) || !sha(entry.sha256) || !relative(entry.source)
        || !/^frame-config\/[^/]+\.json$/i.test(entry.source) || sources.has(entry.source)) throw new Error('Invalid page frame index');
      sources.add(entry.source);
    }
    // Two authored pages can repeat identical source pixels yet bind different
    // panels/media. The stable page ID and source SHA must both match.
    const entry = index.pages.find(item => item.sourcePageSha256 === page.sha256 && (
      item.source === `frame-config/${page.id}-${item.sha256.slice(0, 12)}.json` || item.source === `frame-config/${page.id}.json`));
    if (!entry) throw new Error('Current page frame index missing');
    return entry;
  }
  function validPacks(entry) {
    if (entry.packs === undefined) return true;
    if (!Array.isArray(entry.packs) || !entry.packs.length) return false;
    const covered = new Set(), sources = new Set();
    for (const pack of entry.packs) {
      if (!pack || !relative(pack.source) || !/\.orbf$/i.test(pack.source) || !sha(pack.sha256)
        || !Number.isSafeInteger(pack.byteLength) || !Array.isArray(pack.indices) || !pack.indices.length
        || pack.byteLength < 12 + pack.indices.length * 8 || sources.has(pack.source)) return false;
      sources.add(pack.source);
      for (const i of pack.indices) { if (!Number.isSafeInteger(i) || i < 0 || i >= entry.frameCount || covered.has(i)) return false; covered.add(i); }
      if (pack.frameBytes !== undefined || pack.frameSha256 !== undefined) {
        if (!Array.isArray(pack.frameBytes) || !Array.isArray(pack.frameSha256)
          || pack.frameBytes.length !== pack.indices.length || pack.frameSha256.length !== pack.indices.length
          || !pack.frameBytes.every(n => Number.isSafeInteger(n) && n >= 12 && n <= 0xffffffff) || !pack.frameSha256.every(sha)
          || pack.frameBytes.reduce((n, length) => n + length, 12 + pack.indices.length * 8) !== pack.byteLength) return false;
      }
    }
    return covered.size === entry.frameCount;
  }
  function availableMedia(page) {
    const parents=(page.panels || []).filter(panel => panel.actualMedia && typeof panel.video === 'string');
    const children=[];
    for (const parent of parents) {
      const api=window.ComicPanelPlayer, anchors=window.COMIC_INTERACTION_LAYOUTS && window.COMIC_INTERACTION_LAYOUTS.regionMediaOverrides;
      const declared=parent.regionMediaOverrides !== undefined || Array.isArray(anchors) && anchors.some(item => item && item.binding && item.binding.parentPanelId === parent.id);
      const items=api ? api.regionMediaOverrides(parent,page) : declared ? null : [];
      if (!items || declared && !items.length) throw new Error('Invalid bound region media override');
      children.push(...items.map(item => item.panel));
    }
    const available=[...parents,...children];
    if (new Set(available.map(panel => panel.id)).size !== available.length) throw new Error('Duplicate bound media identity');
    return available;
  }
  function validate(config, page) {
    const available = availableMedia(page);
    const required = available.filter(panel => panel.quality !== 'review-candidate' || panel.regionMediaOverride);
    // A source-bound candidate may have a preview/cache without becoming accepted.
    // Existing accepted/reused media still require their current-page entries.
    if (!config || config.schemaVersion !== 1 || !Array.isArray(config.entries)
      || config.entries.length < required.length || config.entries.length > available.length) throw new Error('Invalid current page frame config');
    const seen = new Set();
    for (const entry of config.entries) {
      const panel = entry && available.find(panel => panel.id === entry.panelId), media = panel && panel.actualMedia;
      const regionBindingValid = !(panel && panel.regionMediaOverride || entry && entry.regionMediaOverrideBinding !== undefined)
        || window.ComicPanelPlayer && window.ComicPanelPlayer.regionMediaCacheBinding(panel,page,entry);
      if (!media || !regionBindingValid || seen.has(entry.panelId) || entry.sourcePageSha256 !== page.sha256 || entry.mediaSha256 !== media.sha256
        || !sha(entry.mediaSha256) || entry.videoSource !== panel.video || !relative(entry.videoSource)
        || entry.sourceWidth !== media.width || entry.sourceHeight !== media.height || entry.duration !== media.duration
        || entry.frameCount !== media.frameCount || !Number.isSafeInteger(entry.frameCount) || entry.frameCount < 1
        || !Number.isSafeInteger(entry.width) || entry.width < 1 || !Number.isSafeInteger(entry.height) || entry.height < 1
        || !positive(media.width) || !positive(media.height) || !positive(media.duration)
        || entry.width > media.width || entry.height > media.height || !validFrameAspect(entry, panel, page, media)
        || !Array.isArray(entry.frames) || entry.frames.length !== entry.frameCount || !entry.frames.every(source => relative(source) && /\.(?:jpe?g|webp)$/i.test(source))
        || !validPacks(entry)) throw new Error('Current page frames do not match bound media');
      seen.add(entry.panelId);
    }
    if (required.some(panel => !seen.has(panel.id))) throw new Error('Current page frames missing required media');
    return config;
  }
  function freeze(value) {
    if (value && typeof value === 'object' && !Object.isFrozen(value)) { Object.values(value).forEach(freeze); Object.freeze(value); }
    return value;
  }
  async function ensure(page, signal, modelReady) {
    const attempt = ++generation;
    if (active) active.abort();
    window.COMIC_FRAME_SEQUENCES = null;
    const controller = new AbortController(); active = controller;
    const abort = () => controller.abort();
    if (signal) { if (signal.aborted) abort(); else signal.addEventListener('abort', abort, {once:true}); }
    const assertCurrent = () => { if (attempt !== generation || controller.signal.aborted) throw cancelled(); };
    try {
      assertCurrent();
      if (!window.COMIC_FRAME_INDEX && legacy && legacy.schemaVersion === 1 && Array.isArray(legacy.entries)) {
        if (modelReady) await modelReady;
        assertCurrent();
        const ids = new Set(availableMedia(page).map(panel => panel.id));
        const config = freeze(validate({schemaVersion:1, entries:legacy.entries.filter(entry => ids.has(entry.panelId) && entry.sourcePageSha256 === page.sha256)}, page));
        assertCurrent(); window.COMIC_FRAME_SEQUENCES = config;
        return config;
      }
      const entry = indexEntry(page), key = page.id + ':' + entry.source + ':' + page.sha256 + ':' + entry.sha256;
      let config = cache.get(key);
      if (config) {
        if (modelReady) await modelReady;
        assertCurrent();
        cache.delete(key); cache.set(key, config); validate(config, page);
      }
      else {
        if (!window.crypto || !window.crypto.subtle || typeof window.crypto.subtle.digest !== 'function') throw new Error('Verified frame loading unavailable');
        let bytes = await window.ComicEarlySourceMasks?.packet(page.source, entry.source, entry.sha256.toLowerCase(), controller.signal);
        assertCurrent();
        if (!bytes) {
          const response = await fetch(`${entry.source}?sha256=${entry.sha256.toLowerCase()}`, {signal:controller.signal, cache:'force-cache'});
          assertCurrent();
          if (!response.ok) throw new Error('Page frame config HTTP error');
          bytes = await response.arrayBuffer(); assertCurrent();
        }
        if (!bytes.byteLength || bytes.byteLength > 1024 * 1024) throw new Error('Invalid page frame config size');
        const digest = await window.crypto.subtle.digest('SHA-256', bytes); assertCurrent();
        const actualSHA = Array.from(new Uint8Array(digest), byte => byte.toString(16).padStart(2, '0')).join('');
        if (actualSHA !== entry.sha256.toLowerCase()) throw new Error('Page frame config SHA-256 mismatch');
        if (modelReady) await modelReady;
        assertCurrent();
        config = freeze(validate(JSON.parse(new TextDecoder('utf-8', {fatal:true}).decode(bytes)), page));
        assertCurrent(); cache.set(key, config);
        while (cache.size > 2) cache.delete(cache.keys().next().value);
      }
      assertCurrent(); window.COMIC_FRAME_SEQUENCES = config;
      return config;
    } finally {
      if (signal) signal.removeEventListener('abort', abort);
      if (active === controller) active = null;
    }
  }
  window.ComicPageFrames = Object.freeze({ensure});
})();
