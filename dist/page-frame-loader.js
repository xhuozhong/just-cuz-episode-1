(() => {
  'use strict';
  const sha = value => typeof value === 'string' && /^[a-f0-9]{64}$/i.test(value);
  const relative = value => typeof value === 'string' && value.length > 0
    && !/^(?:[a-z]+:|[\/])|[:?#%\\\u0000-\u0020\u007f]/i.test(value)
    && value.split('/').every(part => part && part !== '.' && part !== '..');
  const positive = value => Number.isFinite(value) && value > 0;
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
    const entry = index.pages.find(item => item.source === `frame-config/${page.id}.json` && item.sourcePageSha256 === page.sha256);
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
  function validate(config, page) {
    const expected = (page.panels || []).filter(panel => panel.actualMedia && typeof panel.video === 'string');
    if (!config || config.schemaVersion !== 1 || !Array.isArray(config.entries) || config.entries.length !== expected.length) throw new Error('Invalid current page frame config');
    const seen = new Set();
    for (const entry of config.entries) {
      const panel = entry && expected.find(panel => panel.id === entry.panelId), media = panel && panel.actualMedia;
      if (!media || seen.has(entry.panelId) || entry.sourcePageSha256 !== page.sha256 || entry.mediaSha256 !== media.sha256
        || !sha(entry.mediaSha256) || entry.videoSource !== panel.video || !relative(entry.videoSource)
        || entry.sourceWidth !== media.width || entry.sourceHeight !== media.height || entry.duration !== media.duration
        || entry.frameCount !== media.frameCount || !Number.isSafeInteger(entry.frameCount) || entry.frameCount < 1
        || !Number.isSafeInteger(entry.width) || entry.width < 1 || !Number.isSafeInteger(entry.height) || entry.height < 1
        || !positive(media.width) || !positive(media.height) || !positive(media.duration)
        || entry.width > media.width || entry.height > media.height || Math.abs((entry.width / entry.height) / (media.width / media.height) - 1) > .003
        || !Array.isArray(entry.frames) || entry.frames.length !== entry.frameCount || !entry.frames.every(source => relative(source) && /\.(?:jpe?g|webp)$/i.test(source))
        || !validPacks(entry)) throw new Error('Current page frames do not match accepted media');
      seen.add(entry.panelId);
    }
    return config;
  }
  function freeze(value) {
    if (value && typeof value === 'object' && !Object.isFrozen(value)) { Object.values(value).forEach(freeze); Object.freeze(value); }
    return value;
  }
  async function ensure(page, signal) {
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
        const ids = new Set((page.panels || []).map(panel => panel.id));
        const config = freeze(validate({schemaVersion:1, entries:legacy.entries.filter(entry => ids.has(entry.panelId) && entry.sourcePageSha256 === page.sha256)}, page));
        assertCurrent(); window.COMIC_FRAME_SEQUENCES = config;
        return config;
      }
      const entry = indexEntry(page), key = page.id + ':' + entry.source + ':' + page.sha256 + ':' + entry.sha256;
      let config = cache.get(key);
      if (config) { cache.delete(key); cache.set(key, config); validate(config, page); }
      else {
        if (!window.crypto || !window.crypto.subtle || typeof window.crypto.subtle.digest !== 'function') throw new Error('Verified frame loading unavailable');
        const response = await fetch(entry.source, {signal:controller.signal, cache:'no-cache'});
        assertCurrent();
        if (!response.ok) throw new Error('Page frame config HTTP error');
        const bytes = await response.arrayBuffer(); assertCurrent();
        if (!bytes.byteLength || bytes.byteLength > 1024 * 1024) throw new Error('Invalid page frame config size');
        const digest = await window.crypto.subtle.digest('SHA-256', bytes); assertCurrent();
        const actualSHA = Array.from(new Uint8Array(digest), byte => byte.toString(16).padStart(2, '0')).join('');
        if (actualSHA !== entry.sha256.toLowerCase()) throw new Error('Page frame config SHA-256 mismatch');
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
