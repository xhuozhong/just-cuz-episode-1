/* Shared frame-store lifecycle/LRU ideas adapted from Orbit Panel Viewer FrameStore.
 * Copyright (c) 2026 Orbit Panel Viewer contributors. MIT License.
 * See THIRD_PARTY_NOTICES.md for the retained attribution and full license.
 * This adapter reads existing locally exported frames; it creates no new views. */
(() => {
  'use strict';
  const MAX_BITMAPS = 24, MAX_DECODE_PENDING = 4, MAX_FETCH_PENDING = 4;
  const stores = new Map(), lru = new Map();
  let serial = 0, decodePending = 0, fetchPending = 0, pumpScheduled = false;
  const defer = callback => Promise.resolve().then(callback);
  const sha = value => typeof value === 'string' && /^[a-f0-9]{64}$/i.test(value);
  const positive = value => Number.isFinite(value) && value > 0;
  const relative = value => typeof value === 'string' && value.length > 0
    && !/^(?:[a-z]+:|[\/])|[?#%\\]/i.test(value)
    && value.split('/').every(part => part && part !== '.' && part !== '..');
  function boundSequence(panel, page) {
    const config = window.COMIC_FRAME_SEQUENCES, media = panel && panel.actualMedia;
    if (!config || config.schemaVersion !== 1 || !Array.isArray(config.entries) || !media
      || !page || !sha(page.sha256) || !sha(media.sha256) || !relative(panel.video)) return null;
    const matches = config.entries.filter(entry => entry && entry.panelId === panel.id);
    if (matches.length !== 1) return null;
    const entry = matches[0];
    if (entry.sourcePageSha256 !== page.sha256 || entry.mediaSha256 !== media.sha256
      || entry.videoSource !== panel.video || entry.frameCount !== media.frameCount
      || entry.sourceWidth !== media.width || entry.sourceHeight !== media.height || entry.duration !== media.duration
      || !Number.isSafeInteger(entry.frameCount) || entry.frameCount < 1
      || !Number.isSafeInteger(entry.width) || entry.width < 1
      || !Number.isSafeInteger(entry.height) || entry.height < 1 || !positive(entry.duration)
      || !positive(media.width) || !positive(media.height) || entry.width > media.width || entry.height > media.height
      || Math.abs((entry.width / entry.height) / (media.width / media.height) - 1) > .003
      || !Array.isArray(entry.frames) || entry.frames.length !== entry.frameCount
      || !entry.frames.every(file => relative(file) && /\.(?:jpe?g|webp)$/i.test(file))) return null;
    return Object.freeze({...entry, frames:Object.freeze(entry.frames.slice())});
  }
  const keyFor = (store, index) => `${store.id}:${index}`;
  function peek(store, index) {
    const key = keyFor(store, index), entry = lru.get(key);
    if (!entry) return null;
    lru.delete(key); lru.set(key, entry);
    return entry.bitmap;
  }
  function evictOldest() {
    const key = lru.keys().next().value;
    if (key === undefined) return;
    const entry = lru.get(key); lru.delete(key);
    entry.bitmap.close();
  }
  function schedulePump() {
    if (pumpScheduled) return;
    pumpScheduled = true;
    defer(() => { pumpScheduled = false; pumpDecodes(); pumpFetches(); });
  }
  function current(store, generation) { return !store.disposed && store.generation === generation; }
  function requestBlob(store, index, priority) {
    if (store.disposed) return Promise.reject(new Error('Frame store disposed'));
    if (store.blobs.has(index)) return Promise.resolve(store.blobs.get(index));
    if (store.errors.has(index)) return Promise.reject(store.errors.get(index));
    const existing = store.requests.get(index);
    if (existing) { existing.priority = Math.min(existing.priority, priority); return existing.promise; }
    let resolve, reject;
    const promise = new Promise((ok, fail) => { resolve = ok; reject = fail; });
    const request = {index, priority, promise, resolve, reject, started:false, controller:null};
    store.requests.set(index, request); schedulePump();
    return promise;
  }
  function nextFetch() {
    let choice = null;
    for (const store of stores.values()) {
      for (const request of store.requests.values()) {
        if (!request.started && (!choice || request.priority < choice.request.priority)) choice = {store, request};
      }
    }
    return choice;
  }
  function pumpFetches() {
    while (fetchPending < MAX_FETCH_PENDING) {
      const next = nextFetch();
      if (!next) break;
      const {store, request} = next, generation = store.generation;
      request.started = true; request.controller = new AbortController(); fetchPending++;
      Promise.resolve().then(() => {
        if (!current(store, generation)) throw new Error('Frame store disposed');
        return fetch(store.sequence.frames[request.index], {signal:request.controller.signal});
      }).then(response => {
        if (!response.ok) throw new Error(`Frame image HTTP ${response.status}`);
        return response.blob();
      }).then(blob => {
        if (!current(store, generation)) throw new Error('Frame store disposed');
        if (!blob || blob.size === 0) throw new Error('Frame image is empty');
        store.blobs.set(request.index, blob); request.resolve(blob);
      }).catch(error => {
        if (current(store, generation)) store.errors.set(request.index, error);
        request.reject(error);
      }).finally(() => {
        if (store.requests.get(request.index) === request) store.requests.delete(request.index);
        fetchPending--; schedulePump();
      });
    }
  }
  function neighbors(consumer) {
    const count = consumer.store.sequence.frameCount, index = consumer.target;
    const offsets = consumer.direction ? [1,2,3,4].map(step => step * consumer.direction) : [-1,1,-2,2];
    return [...new Set(offsets.map(offset => ((index + offset) % count + count) % count))].filter(value => value !== index);
  }
  function nextDecode() {
    // Derive demand from live consumers instead of accumulating stale seek promises.
    for (const store of stores.values()) {
      for (const consumer of store.consumers) {
        const index = consumer.target;
        if (consumer.actualIndex !== index && !lru.has(keyFor(store, index)) && !store.pending.has(index) && !store.errors.has(index)) return {store, index, priority:0};
      }
    }
    for (const store of stores.values()) {
      for (const consumer of store.consumers) {
        for (const index of neighbors(consumer)) {
          if (consumer.prefetched.has(index)) continue;
          consumer.prefetched.add(index);
          if (!lru.has(keyFor(store, index)) && !store.pending.has(index) && !store.errors.has(index)) return {store, index, priority:1};
        }
      }
    }
    return null;
  }
  function pumpDecodes() {
    while (decodePending < MAX_DECODE_PENDING) {
      const next = nextDecode();
      if (!next) break;
      const {store, index, priority} = next, generation = store.generation;
      // Reserve capacity before createImageBitmap, so even its late result never
      // makes the live decoded bitmap count exceed24.
      while (lru.size + decodePending >= MAX_BITMAPS) evictOldest();
      store.pending.add(index); decodePending++;
      requestBlob(store, index, priority).then(blob => {
        if (!current(store, generation)) return null;
        return createImageBitmap(blob);
      }).then(bitmap => {
        if (!bitmap) return;
        if (!current(store, generation)) { bitmap.close(); return; }
        if (bitmap.width !== store.sequence.width || bitmap.height !== store.sequence.height) {
          bitmap.close(); throw new Error('Frame dimensions do not match the bound media');
        }
        lru.set(keyFor(store, index), {store, index, bitmap});
        for (const consumer of store.consumers) if (consumer.target === index) scheduleRender(consumer);
      }).catch(error => {
        if (!current(store, generation)) return;
        store.errors.set(index, error);
        for (const consumer of store.consumers) if (consumer.target === index) scheduleRender(consumer);
      }).finally(() => {
        store.pending.delete(index); decodePending--; schedulePump();
      });
    }
  }
  function scheduleRender(consumer) {
    if (consumer.disposed || consumer.renderScheduled) return;
    consumer.renderScheduled = true;
    defer(() => {
      consumer.renderScheduled = false;
      if (consumer.disposed || consumer.store.disposed) return;
      const index = consumer.target, bitmap = peek(consumer.store, index);
      if (!bitmap) {
        const error = consumer.store.errors.get(index);
        if (error && consumer.errorVersion !== consumer.version) {
          consumer.errorVersion = consumer.version;
          if (typeof consumer.options.onError === 'function') consumer.options.onError(error);
        }
        schedulePump(); return;
      }
      try { consumer.context.drawImage(bitmap, 0, 0, consumer.canvas.width, consumer.canvas.height); }
      catch (error) {
        if (typeof consumer.options.onError === 'function') consumer.options.onError(error);
        return;
      }
      consumer.actualIndex = index;
      const sequence = consumer.store.sequence, firstReady = !consumer.ready;
      consumer.ready = true;
      if (firstReady && typeof consumer.options.onReady === 'function') consumer.options.onReady({frameCount:sequence.frameCount, width:sequence.width, height:sequence.height, sourceWidth:sequence.sourceWidth, sourceHeight:sequence.sourceHeight, duration:sequence.duration});
      if (!consumer.disposed && consumer.target === index && typeof consumer.options.onFrame === 'function') consumer.options.onFrame({index, currentTime:index / sequence.frameCount * sequence.duration, duration:sequence.duration, percent:index / sequence.frameCount * 100});
      schedulePump();
    });
  }
  function disposeStore(store) {
    store.disposed = true; store.generation++;
    if (stores.get(store.key) === store) stores.delete(store.key);
    for (const [key, entry] of lru) if (entry.store === store) { entry.bitmap.close(); lru.delete(key); }
    for (const request of store.requests.values()) {
      if (request.controller) request.controller.abort();
      request.reject(new Error('Frame store disposed'));
    }
    store.requests.clear(); store.blobs.clear(); store.errors.clear(); store.pending.clear();
    schedulePump();
  }
  function create(panel, page, options = {}) {
    const sequence = boundSequence(panel, page);
    if (!sequence || typeof fetch !== 'function' || typeof createImageBitmap !== 'function' || typeof AbortController !== 'function') return null;
    let canvas, context;
    try { canvas = document.createElement('canvas'); context = canvas.getContext('2d'); }
    catch (_) { return null; }
    if (!context) return null;
    canvas.width = sequence.width; canvas.height = sequence.height;
    canvas.setAttribute('aria-hidden', 'true');
    const key = JSON.stringify([sequence.mediaSha256, sequence.videoSource, sequence.frameCount, sequence.sourceWidth, sequence.sourceHeight, sequence.width, sequence.height, sequence.duration, sequence.frames]);
    let store = stores.get(key);
    if (!store) {
      store = {key, id:++serial, sequence, generation:0, disposed:false, consumers:new Set(), blobs:new Map(), requests:new Map(), pending:new Set(), errors:new Map()};
      stores.set(key, store);
      // Compressed images are small and reusable; decode only the requested/nearby frames.
      for (let index = 0; index < sequence.frameCount; index++) void requestBlob(store, index, 2).catch(() => {});
    }
    const consumer = {store, canvas, context, options, target:0, actualIndex:-1, ready:false, disposed:false, direction:0, version:0, errorVersion:-1, prefetched:new Set(), renderScheduled:false};
    store.consumers.add(consumer);
    function setPercent(percent) {
      if (consumer.disposed || !Number.isFinite(Number(percent))) return;
      const next = Math.min(sequence.frameCount - 1, Math.floor(Math.max(0, Math.min(100, Number(percent))) / 100 * sequence.frameCount + 1e-9));
      if (next !== consumer.target) {
        let delta = next - consumer.target;
        if (Math.abs(delta) > sequence.frameCount / 2) delta += delta > 0 ? -sequence.frameCount : sequence.frameCount;
        consumer.direction = Math.sign(delta); consumer.target = next; consumer.version++; consumer.prefetched.clear();
      }
      scheduleRender(consumer); schedulePump();
    }
    function reset() {
      if (consumer.disposed) return;
      consumer.version++; consumer.direction = 0; consumer.prefetched.clear();
      setPercent(0);
    }
    function destroy() {
      if (consumer.disposed) return;
      consumer.disposed = true; consumer.ready = false; store.consumers.delete(consumer);
      canvas.width = 0; canvas.height = 0;
      if (!store.consumers.size) disposeStore(store);
    }
    // Includes cache hits: no callback can run until the caller has assigned its handle.
    scheduleRender(consumer); schedulePump();
    return Object.freeze({canvas, setPercent, reset, destroy,
      get currentTime() { return consumer.actualIndex < 0 ? 0 : consumer.actualIndex / sequence.frameCount * sequence.duration; },
      get index() { return consumer.actualIndex; }, get ready() { return consumer.ready; }});
  }
  window.OrbitFrameCache = Object.freeze({create});
})();
