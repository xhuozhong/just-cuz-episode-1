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
    let packs;
    if (entry.packs !== undefined) {
      if (!Array.isArray(entry.packs) || !entry.packs.length) return null;
      const sources = new Set(), covered = new Set();
      packs = [];
      for (const pack of entry.packs) {
        if (!pack || !relative(pack.source) || /[:\u0000-\u0020\u007f]/.test(pack.source) || !/\.orbf$/i.test(pack.source) || !sha(pack.sha256)
          || !Number.isSafeInteger(pack.byteLength) || !Array.isArray(pack.indices) || !pack.indices.length
          || pack.byteLength < 12 + pack.indices.length * 8 || sources.has(pack.source)) return null;
        sources.add(pack.source);
        for (const index of pack.indices) {
          if (!Number.isSafeInteger(index) || index < 0 || index >= entry.frameCount || covered.has(index)) return null;
          covered.add(index);
        }
        packs.push(Object.freeze({source:pack.source, sha256:pack.sha256.toLowerCase(), byteLength:pack.byteLength, indices:Object.freeze(pack.indices.slice())}));
      }
      if (covered.size !== entry.frameCount) return null;
      packs = Object.freeze(packs);
    }
    return Object.freeze({...entry, frames:Object.freeze(entry.frames.slice()), packs});
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
  function scheduleProgress(consumer) {
    if (consumer.disposed || consumer.progressScheduled) return;
    consumer.progressScheduled = true;
    defer(() => {
      consumer.progressScheduled = false;
      if (!consumer.disposed && !consumer.store.disposed && typeof consumer.options.onProgress === 'function') {
        consumer.options.onProgress({loaded:consumer.store.blobs.size, total:consumer.store.sequence.frameCount});
      }
    });
  }
  function enqueueRequest(store, key, priority, index, pack) {
    const existing = store.requests.get(key);
    if (existing) { existing.priority = Math.min(existing.priority, priority); return existing.promise; }
    let resolve, reject;
    const promise = new Promise((ok, fail) => { resolve = ok; reject = fail; });
    const request = {key, index, pack, priority, promise, resolve, reject, started:false, controller:null};
    store.requests.set(key, request); schedulePump();
    return promise;
  }
  function requestBlob(store, index, priority) {
    if (store.disposed) return Promise.reject(new Error('Frame store disposed'));
    if (store.blobs.has(index)) return Promise.resolve(store.blobs.get(index));
    if (store.errors.has(index)) return Promise.reject(store.errors.get(index));
    const pack = store.packByIndex && store.packByIndex[index];
    return enqueueRequest(store, pack ? pack.source : index, priority, index, pack).then(() => {
      if (store.disposed || !store.blobs.has(index)) throw new Error('Frame store disposed');
      return store.blobs.get(index);
    });
  }
  async function unpack(store, pack, buffer) {
    if (buffer.byteLength !== pack.byteLength) throw new Error('Frame pack byte length mismatch');
    const digest = await store.subtle.digest('SHA-256', buffer);
    const hash = Array.from(new Uint8Array(digest), byte => byte.toString(16).padStart(2, '0')).join('');
    if (hash !== pack.sha256) throw new Error('Frame pack SHA-256 mismatch');
    const bytes = new Uint8Array(buffer), view = new DataView(buffer);
    if (bytes.length < 12 || 'ORBF0001'.split('').some((char, index) => bytes[index] !== char.charCodeAt(0))) throw new Error('Invalid frame pack magic');
    const count = view.getUint32(8, true);
    if (count !== pack.indices.length || 12 + count * 8 > bytes.length) throw new Error('Invalid frame pack table count');
    let offset = 12 + count * 8;
    const rows = [];
    for (let row = 0; row < count; row++) {
      const index = view.getUint32(12 + row * 8, true), length = view.getUint32(16 + row * 8, true);
      if (index !== pack.indices[row] || length < 12 || offset + length > bytes.length) throw new Error('Invalid frame pack table row');
      if (bytes[offset] !== 82 || bytes[offset + 1] !== 73 || bytes[offset + 2] !== 70 || bytes[offset + 3] !== 70
        || bytes[offset + 8] !== 87 || bytes[offset + 9] !== 69 || bytes[offset + 10] !== 66 || bytes[offset + 11] !== 80
        || view.getUint32(offset + 4, true) + 8 !== length) throw new Error('Invalid frame pack WebP payload');
      rows.push({index, offset, length}); offset += length;
    }
    if (offset !== bytes.length) throw new Error('Trailing frame pack bytes');
    return rows.map(row => [row.index, new Blob([new Uint8Array(buffer, row.offset, row.length)], {type:'image/webp'})]);
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
        return fetch(request.pack ? request.pack.source : store.sequence.frames[request.index], {signal:request.controller.signal});
      }).then(response => {
        if (!response.ok) throw new Error(`Frame ${request.pack ? 'pack' : 'image'} HTTP ${response.status}`);
        return request.pack ? response.arrayBuffer().then(buffer => unpack(store, request.pack, buffer)) : response.blob();
      }).then(result => {
        if (!current(store, generation)) throw new Error('Frame store disposed');
        if (request.pack) {
          for (const [index, blob] of result) store.blobs.set(index, blob);
        } else {
          if (!result || result.size === 0) throw new Error('Frame image is empty');
          store.blobs.set(request.index, result);
        }
        request.resolve();
        for (const consumer of store.consumers) scheduleProgress(consumer);
      }).catch(error => {
        if (current(store, generation)) {
          for (const index of request.pack ? request.pack.indices : [request.index]) store.errors.set(index, error);
          for (const consumer of store.consumers) if (store.errors.has(consumer.target)) scheduleRender(consumer);
        }
        request.reject(error);
      }).finally(() => {
        if (store.requests.get(request.key) === request) store.requests.delete(request.key);
        fetchPending--; schedulePump();
      });
    }
  }
  function neighbors(consumer) {
    const count = consumer.store.sequence.frameCount, index = consumer.target;
    const offsets = consumer.direction ? [1,2,3,4].map(step => step * consumer.direction) : [-1,1,-2,2];
    return [...new Set(offsets.map(offset => ((index + offset) % count + count) % count))].filter(value => value !== index);
  }
  function requestDemand(consumer) {
    if (!consumer.store.sequence.packs) return;
    void requestBlob(consumer.store, consumer.target, 0).catch(() => {});
    for (const index of neighbors(consumer)) void requestBlob(consumer.store, index, 1).catch(() => {});
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
    if (!sequence || typeof fetch !== 'function' || typeof createImageBitmap !== 'function' || typeof AbortController !== 'function'
      || (sequence.packs && (!window.crypto || !window.crypto.subtle || typeof window.crypto.subtle.digest !== 'function'))) return null;
    let canvas, context;
    try { canvas = document.createElement('canvas'); context = canvas.getContext('2d'); }
    catch (_) { return null; }
    if (!context) return null;
    canvas.width = sequence.width; canvas.height = sequence.height;
    canvas.setAttribute('aria-hidden', 'true');
    const key = JSON.stringify([sequence.mediaSha256, sequence.videoSource, sequence.frameCount, sequence.sourceWidth, sequence.sourceHeight, sequence.width, sequence.height, sequence.duration, sequence.frames, sequence.packs]);
    let store = stores.get(key);
    if (!store) {
      const packByIndex = sequence.packs ? new Array(sequence.frameCount) : null;
      if (packByIndex) for (const pack of sequence.packs) for (const index of pack.indices) packByIndex[index] = pack;
      store = {key, id:++serial, sequence, packByIndex, subtle:sequence.packs ? window.crypto.subtle : null, generation:0, disposed:false, consumers:new Set(), blobs:new Map(), requests:new Map(), pending:new Set(), errors:new Map()};
      stores.set(key, store);
      // Compressed images are small and reusable; decode only the requested/nearby frames.
      if (!sequence.packs) for (let index = 0; index < sequence.frameCount; index++) void requestBlob(store, index, 2).catch(() => {});
    }
    const consumer = {store, canvas, context, options, target:0, actualIndex:-1, ready:false, disposed:false, direction:0, version:0, errorVersion:-1, prefetched:new Set(), renderScheduled:false, progressScheduled:false};
    store.consumers.add(consumer);
    function setPercent(percent) {
      if (consumer.disposed || !Number.isFinite(Number(percent))) return;
      const next = Math.min(sequence.frameCount - 1, Math.floor(Math.max(0, Math.min(100, Number(percent))) / 100 * sequence.frameCount + 1e-9));
      if (next !== consumer.target) {
        let delta = next - consumer.target;
        if (Math.abs(delta) > sequence.frameCount / 2) delta += delta > 0 ? -sequence.frameCount : sequence.frameCount;
        consumer.direction = Math.sign(delta); consumer.target = next; consumer.version++; consumer.prefetched.clear();
      }
      requestDemand(consumer); scheduleRender(consumer); schedulePump();
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
    scheduleProgress(consumer); requestDemand(consumer); scheduleRender(consumer); schedulePump();
    return Object.freeze({canvas, setPercent, reset, destroy,
      get currentTime() { return consumer.actualIndex < 0 ? 0 : consumer.actualIndex / sequence.frameCount * sequence.duration; },
      get index() { return consumer.actualIndex; }, get ready() { return consumer.ready; }});
  }
  window.OrbitFrameCache = Object.freeze({create});
})();
