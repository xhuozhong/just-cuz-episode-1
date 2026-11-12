/* Shared frame-store lifecycle/LRU ideas adapted from Orbit Panel Viewer FrameStore.
 * Copyright (c) 2026 Orbit Panel Viewer contributors. MIT License.
 * See THIRD_PARTY_NOTICES.md for the retained attribution and full license.
 * This adapter reads existing locally exported frames; it creates no new views. */
(() => {
  'use strict';
  const MAX_BITMAPS = 24, MAX_DECODE_PENDING = 4, MAX_FETCH_PENDING = 4;
  const stores = new Map(), lru = new Map();
  const retained = new Map(), MAX_RETAINED_BYTES = 16 * 1024 * 1024, MAX_RETAINED_STORES = 12;
  const MAX_RETAINED_RANGE_BYTES = 128 * 1024;
  let retainedBytes = 0;
  let serial = 0, decodePending = 0, fetchPending = 0, pumpScheduled = false;
  const defer = callback => Promise.resolve().then(callback);
  const sha = value => typeof value === 'string' && /^[a-f0-9]{64}$/i.test(value);
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

  const relative = value => typeof value === 'string' && value.length > 0
    && !/^(?:[a-z]+:|[\/])|[?#%\\]/i.test(value)
    && value.split('/').every(part => part && part !== '.' && part !== '..');
  function boundSequence(panel, page, config = window.COMIC_FRAME_SEQUENCES) {
    const media = panel && panel.actualMedia;
    if (!config || config.schemaVersion !== 1 || !Array.isArray(config.entries) || !media
      || !page || !sha(page.sha256) || !sha(media.sha256) || !relative(panel.video)) return null;
    const matches = config.entries.filter(entry => entry && entry.panelId === panel.id);
    if (matches.length !== 1) return null;
    const entry = matches[0];
    if ((panel.regionMediaOverride || entry.regionMediaOverrideBinding !== undefined)
      && !(window.ComicPanelPlayer && window.ComicPanelPlayer.regionMediaCacheBinding(panel,page,entry))) return null;
    if (entry.sourcePageSha256 !== page.sha256 || entry.mediaSha256 !== media.sha256
      || entry.videoSource !== panel.video || entry.frameCount !== media.frameCount
      || entry.sourceWidth !== media.width || entry.sourceHeight !== media.height || entry.duration !== media.duration
      || !Number.isSafeInteger(entry.frameCount) || entry.frameCount < 1
      || !Number.isSafeInteger(entry.width) || entry.width < 1
      || !Number.isSafeInteger(entry.height) || entry.height < 1 || !positive(entry.duration)
      || !positive(media.width) || !positive(media.height) || entry.width > media.width || entry.height > media.height
      || !validFrameAspect(entry, panel, page, media)
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
        let frameBytes, frameSha256;
        if (pack.frameBytes !== undefined || pack.frameSha256 !== undefined) {
          if (!Array.isArray(pack.frameBytes) || !Array.isArray(pack.frameSha256)
            || pack.frameBytes.length !== pack.indices.length || pack.frameSha256.length !== pack.indices.length
            || !pack.frameBytes.every(length => Number.isSafeInteger(length) && length >= 12 && length <= 0xffffffff)
            || !pack.frameSha256.every(sha)
            || pack.frameBytes.reduce((total, length) => total + length, 12 + pack.indices.length * 8) !== pack.byteLength) return null;
          frameBytes = Object.freeze(pack.frameBytes.slice());
          frameSha256 = Object.freeze(pack.frameSha256.map(hash => hash.toLowerCase()));
        }
        packs.push(Object.freeze({source:pack.source, sha256:pack.sha256.toLowerCase(), byteLength:pack.byteLength, indices:Object.freeze(pack.indices.slice()), frameBytes, frameSha256}));
      }
      if (covered.size !== entry.frameCount) return null;
      packs = Object.freeze(packs);
    }
    const crop=entry.transparentFrameCrop===undefined ? null : window.ComicPanelPlayer.transparentFrameCrop(panel,page,entry);
    const boundedOrbit=window.ComicPanelPlayer?.isBoundedOrbit?.(panel,page)===true;
    return Object.freeze({...entry, ...(crop ? {transparentFrameCrop:crop} : {}), boundedOrbit,
      frames:Object.freeze(entry.frames.slice()), packs});
  }
  function boundPreview(panel, page, sequence, config = window.COMIC_FRAME_SEQUENCES) {
    const legacy = window.COMIC_PREVIEW_SEQUENCES;
    const entries = config?.previewEntries ?? (legacy?.schemaVersion === 1 ? legacy.entries : null);
    if (!sequence.packs || !Array.isArray(entries)) return null;
    const matches = entries.filter(entry => entry && entry.panelId === panel.id);
    if (matches.length !== 1) return null;
    const entry = matches[0], pack = entry.pack;
    // Existing previews retain the complete source canvas, including padding.
    const previewWidth=sequence.transparentFrameCrop ? sequence.sourceWidth : sequence.width;
    const previewHeight=sequence.transparentFrameCrop ? sequence.sourceHeight : sequence.height;
    if ((panel.regionMediaOverride || entry.regionMediaOverrideBinding !== undefined)
      && !(window.ComicPanelPlayer && window.ComicPanelPlayer.regionMediaCacheBinding(panel,page,entry))) return null;
    if (entry.sourcePageSha256 !== page.sha256 || entry.mediaSha256 !== sequence.mediaSha256
      || entry.videoSource !== sequence.videoSource || entry.frameCount !== sequence.frameCount
      || entry.sourceWidth !== sequence.sourceWidth || entry.sourceHeight !== sequence.sourceHeight || entry.duration !== sequence.duration
      || !Number.isSafeInteger(entry.width) || entry.width < 1 || entry.width > previewWidth
      || !Number.isSafeInteger(entry.height) || entry.height < 1 || entry.height > previewHeight
      || Math.max(entry.width, entry.height) > 480 || Math.abs((entry.width / entry.height) / (previewWidth / previewHeight) - 1) > .006
      || !Array.isArray(entry.indices) || ![24,32].includes(entry.indices.length) || new Set(entry.indices).size !== entry.indices.length
      || !entry.indices.every(index => Number.isSafeInteger(index) && index >= 0 && index < sequence.frameCount)
      || !Array.from({length:entry.indices.length}, (_, index) => Math.floor(index * sequence.frameCount / entry.indices.length + .5) % sequence.frameCount).every(index => entry.indices.includes(index))
      || !pack || !relative(pack.source) || /[:\u0000-\u0020\u007f]/.test(pack.source) || !/^preview-packs\/.+\.orbf$/i.test(pack.source)
      || !sha(pack.sha256) || !Number.isSafeInteger(pack.byteLength) || !Array.isArray(pack.indices)
      || pack.indices.length !== entry.indices.length || !pack.indices.every((index, row) => index === entry.indices[row])
      || !Array.isArray(pack.frameBytes) || !Array.isArray(pack.frameSha256)
      || pack.frameBytes.length !== pack.indices.length || pack.frameSha256.length !== pack.indices.length
      || !pack.frameBytes.every(length => Number.isSafeInteger(length) && length >= 12 && length <= 0xffffffff) || !pack.frameSha256.every(sha)
      || pack.frameBytes.reduce((sum, length) => sum + length, 12 + pack.indices.length * 8) !== pack.byteLength) return null;
    const indices = Object.freeze(entry.indices.slice());
    return Object.freeze({...entry, indices, pack:Object.freeze({...pack, indices,
      sha256:pack.sha256.toLowerCase(), frameBytes:Object.freeze(pack.frameBytes.slice()), frameSha256:Object.freeze(pack.frameSha256.map(hash => hash.toLowerCase()))})});
  }
  const keyFor = (store, index, preview = false) => `${store.id}:${preview ? 'p:' : ''}${index}`;
  const pendingKey = (index, preview = false) => preview ? `p:${index}` : index;
  function peek(store, index, preview = false) {
    const key = keyFor(store, index, preview), entry = lru.get(key);
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
  const recoveryFailure = (message, kind, cause) => Object.assign(new Error(message),
    {recoveryKind:kind, recoveryRetryable:true, ...(cause ? {cause} : {})});
  const recoveryCancelled = () => Object.assign(new Error('Automatic recovery cancelled'),
    {name:'AbortError', recoveryKind:'cancelled', recoveryRetryable:false});
  const retryable = error => error?.recoveryRetryable === true;
  const recoveryAllowed = (store, generation) => current(store, generation)
    && !document.hidden && navigator.onLine !== false && [...store.consumers].some(consumer => !consumer.disposed);
  function recoveryState(consumer) {
    const values = [...consumer.store.recoveryStates.values(), consumer.rangeRecoveryState];
    return values.includes('retrying') ? 'retrying' : values.includes('exhausted') ? 'exhausted' : '';
  }
  function setRecovery(store, key, state) {
    if (state) store.recoveryStates.set(key, state); else store.recoveryStates.delete(key);
    for (const consumer of store.consumers) scheduleProgress(consumer);
  }
  function recoveryDelay(store, generation, signal, wanted = () => true) {
    // Exactly one short backoff. Visibility/offline/ownership changes cancel it;
    // no online/visibility listener ever starts a new request in the background.
    return new Promise((resolve, reject) => {
      let timer;
      const finish = error => {
        clearTimeout(timer); signal?.removeEventListener('abort', cancel);
        document.removeEventListener?.('visibilitychange', check);
        window.removeEventListener?.('offline', check);
        store.recoveryCancels.delete(cancel);
        error ? reject(error) : resolve();
      };
      const cancel = () => finish(recoveryCancelled());
      const check = () => { if (!recoveryAllowed(store, generation) || signal?.aborted || !wanted()) cancel(); };
      store.recoveryCancels.add(cancel);
      signal?.addEventListener('abort', cancel, {once:true});
      document.addEventListener?.('visibilitychange', check);
      window.addEventListener?.('offline', check);
      if (!recoveryAllowed(store, generation) || signal?.aborted || !wanted()) { cancel(); return; }
      timer = setTimeout(() => {
        if (!recoveryAllowed(store, generation) || signal?.aborted || !wanted()) cancel();
        else finish();
      }, 350);
    });
  }
  async function transportRead(reader) {
    try { return await reader.read(); }
    catch (error) {
      // Only native transport errors at the read boundary are transient. Parser,
      // SHA, geometry and source-binding failures never enter this classifier.
      if (error instanceof TypeError) throw recoveryFailure('Frame body transport failed', 'body-transport', error);
      throw error;
    }
  }
  function clearPreviewIdle(request) {
    if (request.previewTimer != null && typeof clearTimeout === 'function') clearTimeout(request.previewTimer);
    request.previewTimer = null;
    request.previewTimerVersion = (request.previewTimerVersion || 0) + 1;
  }
  function armPreviewIdle(store, request, generation) {
    if (!request.pack || request.previewIdleTimeout || !current(store, generation)
      || request.preview && (store.preview.finished || store.preview.failed) || typeof setTimeout !== 'function' || typeof clearTimeout !== 'function') return;
    clearPreviewIdle(request);
    const version = request.previewTimerVersion;
    request.previewTimer = setTimeout(() => {
      if (version !== request.previewTimerVersion || !current(store, generation) || request.preview && (store.preview.finished || store.preview.failed)) return;
      request.previewTimer = null; request.previewIdleTimeout = true;
      // The request loop owns the retry and final error publication. Verified
      // partial rows stay usable while this one response is cancelled.
      request.controller.abort();
      if (request.reader) { try { void Promise.resolve(request.reader.cancel()).catch(() => {}); } catch (_) {} }
      schedulePump();
    }, 8000);
  }
  function scheduleProgress(consumer) {
    if (consumer.disposed || typeof consumer.options.onProgress !== 'function') return;
    const preview = consumer.store.preview, previewLoaded = preview ? preview.blobs.size : 0;
    const previewFailed = preview ? Math.max(preview.errors.size, preview.failed ? 1 : 0) : 0;
    const complete = consumer.store.blobs.size === consumer.store.sequence.frameCount;
    const urgent = complete || preview && previewLoaded === preview.spec.indices.length && previewLoaded !== consumer.previewProgressLoaded
      || consumer.store.errors.size > consumer.progressFailed || previewFailed > consumer.previewProgressFailed
      || recoveryState(consumer) !== consumer.progressRecoveryState;
    // The initial callback stays asynchronous. Streamed rows then share one
    // update per animation frame; completion must also work in a hidden tab.
    if (consumer.progressScheduled) {
      if (!urgent || consumer.progressFrame === null) return;
      window.cancelAnimationFrame(consumer.progressFrame); consumer.progressFrame = null;
    }
    consumer.progressScheduled = true;
    const version = ++consumer.progressVersion;
    const deliver = () => {
      if (version !== consumer.progressVersion) return;
      consumer.progressFrame = null;
      consumer.progressScheduled = false;
      if (!consumer.disposed && !consumer.store.disposed && typeof consumer.options.onProgress === 'function') {
        const preview = consumer.store.preview, loaded = consumer.store.blobs.size, failed = consumer.store.errors.size;
        const previewLoaded = preview ? preview.blobs.size : 0, previewTotal = preview ? preview.spec.indices.length : 0;
        const previewFailed = preview ? Math.max(preview.errors.size, preview.failed ? 1 : 0) : 0;
        const autoRecoveryState = recoveryState(consumer);
        if (loaded !== consumer.progressLoaded || failed !== consumer.progressFailed || previewLoaded !== consumer.previewProgressLoaded || previewFailed !== consumer.previewProgressFailed || autoRecoveryState !== consumer.progressRecoveryState) {
          consumer.progressLoaded = loaded;
          consumer.progressFailed = failed;
          consumer.previewProgressLoaded = previewLoaded; consumer.previewProgressFailed = previewFailed;
          consumer.progressRecoveryState = autoRecoveryState;
          consumer.options.onProgress({loaded, failed, total:consumer.store.sequence.frameCount, previewLoaded, previewTotal, previewFailed, autoRecoveryState});
        }
      }
    };
    if (consumer.progressLoaded < 0 || urgent || typeof window.requestAnimationFrame !== 'function' || typeof window.cancelAnimationFrame !== 'function') defer(deliver);
    else consumer.progressFrame = window.requestAnimationFrame(deliver);
  }
  function enqueueRequest(store, key, priority, index, pack, preview = false) {
    const existing = store.requests.get(key);
    if (existing) { existing.priority = Math.min(existing.priority, priority); return existing.promise; }
    let resolve, reject;
    const promise = new Promise((ok, fail) => { resolve = ok; reject = fail; });
    const request = {key, index, pack, preview, priority, promise, resolve, reject, started:false, controller:null};
    store.requests.set(key, request); schedulePump();
    return promise;
  }
  function requestBlob(store, index, priority) {
    if (store.disposed) return Promise.reject(new Error('Frame store disposed'));
    if (store.blobs.has(index)) return Promise.resolve(store.blobs.get(index));
    if (store.errors.has(index)) return Promise.reject(store.errors.get(index));
    const pack = store.packByIndex && store.packByIndex[index];
    if (pack) {
      let waiter = store.frameWaiters.get(index);
      if (!waiter) {
        let resolve, reject;
        const promise = new Promise((ok, fail) => { resolve = ok; reject = fail; });
        waiter = {promise, resolve, reject}; store.frameWaiters.set(index, waiter);
      }
      void enqueueRequest(store, pack.source, priority, index, pack).catch(() => {});
      return waiter.promise;
    }
    return enqueueRequest(store, index, priority, index, null).then(() => {
      if (store.disposed || !store.blobs.has(index)) throw new Error('Frame store disposed');
      return store.blobs.get(index);
    });
  }
  async function digest(store, bytes) {
    const result = await store.subtle.digest('SHA-256', bytes);
    return Array.from(new Uint8Array(result), byte => byte.toString(16).padStart(2, '0')).join('');
  }
  function webpPayload(bytes) {
    const view = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength);
    return bytes.length >= 12 && bytes[0] === 82 && bytes[1] === 73 && bytes[2] === 70 && bytes[3] === 70
      && bytes[8] === 87 && bytes[9] === 69 && bytes[10] === 66 && bytes[11] === 80 && view.getUint32(4, true) + 8 === bytes.length;
  }
  function publishBlob(store, index, blob, generation, preview = false) {
    if (!current(store, generation)) throw new Error('Frame store disposed');
    const blobs = preview ? store.preview.blobs : store.blobs;
    if (!blobs.has(index)) blobs.set(index, blob);
    const waiter = !preview && store.frameWaiters.get(index);
    if (waiter) { store.frameWaiters.delete(index); waiter.resolve(blob); }
    for (const consumer of store.consumers) {
      // Another consumer's verified request can satisfy this exact target.
      if (!preview && consumer.target === index) consumer.rangeRecoveryState = '';
      scheduleProgress(consumer);
      if (preview || consumer.target === index) scheduleRender(consumer);
    }
    schedulePump();
  }
  function packTable(pack, bytes) {
    const view = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength);
    if (bytes.length < 12 || 'ORBF0001'.split('').some((char, index) => bytes[index] !== char.charCodeAt(0))) throw new Error('Invalid frame pack magic');
    const count = view.getUint32(8, true), tableLength = 12 + count * 8;
    if (count !== pack.indices.length || tableLength > bytes.length) throw new Error('Invalid frame pack table count');
    let offset = tableLength;
    const rows = [];
    for (let row = 0; row < count; row++) {
      const index = view.getUint32(12 + row * 8, true), length = view.getUint32(16 + row * 8, true);
      if (index !== pack.indices[row] || length < 12 || offset + length > pack.byteLength
        || pack.frameBytes && length !== pack.frameBytes[row]) throw new Error('Invalid frame pack table row');
      rows.push({index, offset, length}); offset += length;
    }
    if (offset !== pack.byteLength) throw new Error('Trailing frame pack bytes');
    return rows;
  }
  async function unpack(store, pack, buffer) {
    if (buffer.byteLength !== pack.byteLength) throw new Error('Frame pack byte length mismatch');
    const hash = await digest(store, buffer);
    if (hash !== pack.sha256) throw new Error('Frame pack SHA-256 mismatch');
    const bytes = new Uint8Array(buffer), rows = packTable(pack, bytes);
    for (let row = 0; row < rows.length; row++) {
      const item = rows[row], payload = bytes.subarray(item.offset, item.offset + item.length);
      if (!webpPayload(payload)) throw new Error('Invalid frame pack WebP payload');
      if (pack.frameSha256 && await digest(store, payload) !== pack.frameSha256[row]) throw new Error('Frame payload SHA-256 mismatch');
    }
    return rows.map(row => [row.index, new Blob([new Uint8Array(buffer, row.offset, row.length)], {type:'image/webp'})]);
  }
  async function streamPack(store, request, response, generation) {
    const pack = request.pack, bytes = new Uint8Array(pack.byteLength), reader = response.body.getReader();
    const tableLength = 12 + pack.indices.length * 8;
    let received = 0, rows = null, next = 0, complete = false;
    request.reader = reader;
    armPreviewIdle(store, request, generation);
    try {
      for (;;) {
        const chunk = await transportRead(reader);
        if (!current(store, generation)) throw new Error('Frame store disposed');
        if (request.previewIdleTimeout) throw recoveryFailure('Frame pack body stalled for eight seconds', 'body-idle');
        if (chunk.done) break;
        if (!(chunk.value instanceof Uint8Array) || received + chunk.value.byteLength > pack.byteLength) throw new Error('Frame pack byte length mismatch');
        if (chunk.value.byteLength) armPreviewIdle(store, request, generation);
        bytes.set(chunk.value, received); received += chunk.value.byteLength;
        // The entire table is bound before even the first payload is published.
        if (!rows && received >= tableLength) rows = packTable(pack, bytes.subarray(0, received));
        while (rows && next < rows.length && received >= rows[next].offset + rows[next].length) {
          const row = rows[next], payload = bytes.subarray(row.offset, row.offset + row.length);
          if (!webpPayload(payload)) throw new Error('Invalid frame pack WebP payload');
          if (await digest(store, payload) !== pack.frameSha256[next]) throw new Error('Frame payload SHA-256 mismatch');
          publishBlob(store, row.index, new Blob([payload], {type:'image/webp'}), generation, request.preview); next++;
        }
      }
      if (received !== pack.byteLength || !rows || next !== rows.length) throw new Error('Truncated frame pack');
      if (await digest(store, bytes) !== pack.sha256) throw new Error('Frame pack SHA-256 mismatch');
      if (!current(store, generation)) throw new Error('Frame store disposed');
      complete = true;
    } finally {
      clearPreviewIdle(request);
      request.reader = null;
      if (!complete) { try { void Promise.resolve(reader.cancel()).catch(() => {}); } catch (_) {} }
      try { reader.releaseLock(); } catch (_) {}
    }
  }
  const connection = navigator.connection;
  function readDemandOnly() {
    // A readable current-page preview is sufficient on every connection.
    // Detailed frames follow the selected angle; a fast link is not consent to
    // fetch every surrounding angle while the reader is idle.
    return true;
  }
  let pagePreviewReady = true, demandOnly = readDemandOnly();
  connection?.addEventListener?.('change', () => {
    const next = readDemandOnly();
    if (next === demandOnly) return;
    demandOnly = next;
    for (const store of stores.values()) {
      if (!demandOnly) armFullPacks(store, 3500);
      else {
        if (store.bulkDelay > 0) {
          clearTimeout(store.bulkTimer);
          store.bulkDue = 0;
          store.bulkDelay = 0;
        }
        if (store.bulkAllowed === 'idle') store.bulkAllowed = null;
      }
    }
    schedulePump();
    document.dispatchEvent(new Event('comic-hd-budget-change'));
  });
  function setPagePreviewReady(ready) {
    if (pagePreviewReady === ready) return;
    pagePreviewReady = ready;
    if (ready) {
      for (const store of stores.values()) {
        if (store.preview?.finished) armFullPacks(store, 3500);
      }
      schedulePump();
    }
  }
  function armFullPacks(store, delay) {
    if (!pagePreviewReady || store.disposed || !store.preview?.finished || store.preview.failed || delay && demandOnly) return;
    if (store.bulkAllowed) {
      if (!delay) store.bulkAllowed = 'demand';
      return;
    }
    const due = Date.now() + delay;
    if (store.bulkDue && store.bulkDue <= due && (delay || !store.bulkDelay)) return;
    clearTimeout(store.bulkTimer);
    store.bulkDue = due;
    store.bulkDelay = delay;
    store.bulkTimer = setTimeout(() => {
      store.bulkDue = 0;
      store.bulkDelay = 0;
      if (store.disposed || delay && demandOnly) return;
      store.bulkAllowed = delay ? 'idle' : 'demand';
      schedulePump();
    }, delay);
  }
  function nextFetch() {
    let choice = null;
    const previewsPending = Array.from(stores.values()).some(store => store.preview && !store.preview.finished && !store.preview.failed);
    for (const store of stores.values()) {
      const active = Array.from(store.requests.values()).filter(request => request.started).length;
      const demandedPacks = new Set();
      // A verified panel can use idle slots for its current angle while another
      // preview streams. Initial angle 0 is demand too. Re-derive live targets
      // so a previously promoted seek cannot admit stale or background packs.
      if (store.preview && store.preview.finished && !store.preview.failed && !store.preview.errors.size) {
        for (const consumer of store.consumers) {
          if (!consumer.disposed && consumer.target > 0 && !store.blobs.has(consumer.target) && !store.errors.has(consumer.target))
            demandedPacks.add(store.packByIndex[consumer.target]);
        }
      }
      for (const request of store.requests.values()) {
        // A failed preview keeps its verified rows and explicit manual retry.
        // Failure is never consent to download the queued complete HD set.
        if (!request.preview && store.preview?.failed && demandOnly) continue;
        if (!request.preview && store.preview && !store.preview.failed && !store.preview.errors.size) {
          // A whole-pack fallback is limited to a live selected target. Queued
          // neighbors, frame0/reset and other panels never open a background set.
          if (demandOnly && !demandedPacks.has(request.pack)) continue;
          // A real seek can fall back to its exact pack if Range is unavailable,
          // without starting the surrounding angles or other panels' full packs.
          const exactFallback = !pagePreviewReady && request.priority === 0 && store.rangeUnsupported
            && [...store.consumers].some(consumer => !consumer.disposed && consumer.target > 0
              && !store.blobs.has(consumer.target) && store.packByIndex?.[consumer.target] === request.pack);
          if (!exactFallback && (!pagePreviewReady || !store.bulkAllowed
              || (!store.seekQuiet || rangePending) && fetchPending > 0)) continue;
        }
        // Equal-priority work takes a free slot from the least-served panel.
        // One panel's surrounding views must not monopolize another's first view.
        if (!request.started && (!previewsPending || request.preview
          || request.priority === 0 && demandedPacks.has(request.pack)) && (!choice || request.priority < choice.request.priority
          || request.priority === choice.request.priority && active < choice.active)) choice = {store, request, active};
      }
    }
    return choice;
  }
  async function fetchRequest(store, request, generation) {
    const recoveryKey = `asset:${request.key}`;
    for (;;) {
      request.controller = new AbortController(); request.deliveryResponse = null; request.previewIdleTimeout = false;
      try {
        if (!current(store, generation)) throw recoveryCancelled();
        const init = {signal:request.controller.signal};
        if (request.pack) init.cache = store.recoveryTried.has(recoveryKey) ? 'reload' : 'force-cache';
        let response;
        try {
          const warmed = request.preview && !store.recoveryTried.has(recoveryKey) && request.pack
            && window.ComicNextPageWarmup?.preview(request.pack.source, request.pack.sha256);
          if (warmed) response = warmed;
          else if (request.pack && typeof window.ComicAssetDelivery?.fetch === 'function')
            response = await window.ComicAssetDelivery.fetch(request.pack.source, request.pack.sha256, init);
          else response = await fetch(request.pack ? `${request.pack.source}?sha256=${request.pack.sha256}` : store.sequence.frames[request.index], init);
        } catch (error) {
          if (error instanceof TypeError && !request.controller.signal.aborted)
            throw recoveryFailure('Frame request transport failed', 'transport', error);
          throw error;
        }
        request.deliveryResponse = response;
        if (!current(store, generation)) throw recoveryCancelled();
        if (!response.ok) throw Object.assign(new Error(`Frame ${request.pack ? 'pack' : 'image'} HTTP ${response.status}`),
          {recoveryKind:'http', recoveryRetryable:response.status >= 500 && response.status <= 599});
        let result;
        if (request.pack && request.pack.frameBytes && response.body && typeof response.body.getReader === 'function')
          result = await streamPack(store, request, response, generation);
        else {
          let body;
          try { body = request.pack ? await response.arrayBuffer() : await response.blob(); }
          catch (error) {
            if (error instanceof TypeError && !request.controller.signal.aborted)
              throw recoveryFailure('Frame body transport failed', 'body-transport', error);
            throw error;
          }
          result = request.pack ? await unpack(store, request.pack, body) : body;
        }
        if (!current(store, generation)) throw recoveryCancelled();
        if (request.pack) {
          if (result) for (const [index, blob] of result) publishBlob(store, index, blob, generation, request.preview);
          if (request.preview) {
            store.preview.finished = true;
            armFullPacks(store, 3500);
            for (const consumer of store.consumers) scheduleSettledRange(consumer);
          }
        } else {
          if (!result || result.size === 0) throw new Error('Frame image is empty');
          store.blobs.set(request.index, result);
        }
        setRecovery(store, recoveryKey, '');
        return;
      } catch (caught) {
        const error = request.previewIdleTimeout ? recoveryFailure('Frame pack body stalled for eight seconds', 'body-idle', caught) : caught;
        clearPreviewIdle(request);
        if (request.deliveryResponse && (retryable(error) || !request.controller.signal.aborted)
          && typeof window.ComicAssetDelivery?.markFailed === 'function')
          window.ComicAssetDelivery.markFailed(request.deliveryResponse, {transient:retryable(error)});
        if (retryable(error) && !store.recoveryTried.has(recoveryKey) && recoveryAllowed(store, generation)) {
          store.recoveryTried.add(recoveryKey); setRecovery(store, recoveryKey, 'retrying');
          try { await recoveryDelay(store, generation); }
          catch (_) { setRecovery(store, recoveryKey, ''); throw error; }
          continue;
        }
        setRecovery(store, recoveryKey, retryable(error) && store.recoveryTried.has(recoveryKey) ? 'exhausted' : '');
        throw error;
      }
    }
  }
  function pumpFetches() {
    while (fetchPending < MAX_FETCH_PENDING) {
      const next = nextFetch();
      if (!next) break;
      const {store, request} = next, generation = store.generation;
      request.started = true; fetchPending++;
      fetchRequest(store, request, generation).then(() => {
        request.resolve();
        for (const consumer of store.consumers) scheduleProgress(consumer);
      }).catch(error => {
        if (current(store, generation) && error?.recoveryKind !== 'cancelled') {
          // Keep all independently verified rows from either attempt.
          const blobs = request.preview ? store.preview.blobs : store.blobs, errors = request.preview ? store.preview.errors : store.errors;
          if (request.preview) store.preview.failed = true;
          for (const index of request.pack ? request.pack.indices : [request.index]) {
            if (blobs.has(index)) continue;
            errors.set(index, error);
            const waiter = !request.preview && store.frameWaiters.get(index);
            if (waiter) { store.frameWaiters.delete(index); waiter.reject(error); }
          }
          for (const consumer of store.consumers) {
            scheduleProgress(consumer);
            if (store.errors.has(consumer.target)) scheduleRender(consumer);
          }
        }
        request.reject(error);
      }).finally(() => {
        clearPreviewIdle(request);
        if (store.requests.get(request.key) === request) store.requests.delete(request.key);
        fetchPending--; schedulePump();
      });
    }
  }
  function neighbors(consumer) {
    const count = consumer.store.sequence.frameCount, index = consumer.target;
    const offsets = consumer.direction ? [1,2,3,4].map(step => step * consumer.direction) : [-1,1,-2,2];
    return [...new Set(offsets.map(offset => consumer.store.sequence.boundedOrbit
      ? Math.max(0,Math.min(count-1,index+offset)) : ((index + offset) % count + count) % count))].filter(value => value !== index);
  }
  // A settled requested angle can be verified independently from the same
  // immutable packet. Preview dragging remains uninterrupted while the normal
  // packet stream continues; unsupported ranges retain that existing stream.
  let rangePending = 0;
  function cancelSettledRange(consumer) {
    if (consumer.rangeTimer != null) clearTimeout(consumer.rangeTimer);
    consumer.rangeTimer = null;
    if (consumer.rangeController) consumer.rangeController.abort();
    consumer.rangeRecoveryState = '';
    scheduleProgress(consumer);
    consumer.rangeController = null; consumer.earlyRange = false;
  }
  const manualRangeLimit = 128 * 1024;
  let manualPageEpoch = 0;
  function allowEarlyManualRange(consumer, index) {
    const preview = consumer.store.preview;
    return demandOnly && consumer.manualTarget === index && consumer.ready && consumer.actualPreview
      && consumer.actualIndex > 0 && preview && !preview.errors.size && document.body.dataset.orbitInput !== 'gyro'
      && consumer.manualPageEpoch === manualPageEpoch
      && !document.querySelector('#panel-layer .panel-host:not([data-background-only="true"]):not([data-interaction-state="ready"])');
  }
  function clearManualSettle(consumer) {
    consumer.manualTarget = null;
    if (consumer.earlyRange && !consumer.store.preview?.finished) cancelSettledRange(consumer);
  }
  function clearCurrentManualSelections() {
    for (const store of stores.values()) for (const consumer of store.consumers) clearManualSettle(consumer);
  }
  function resetPageManualSelections() {
    manualPageEpoch++;
    clearCurrentManualSelections();
  }
  document.addEventListener('comic-orbit-input-change', () => {
    if (document.body.dataset.orbitInput === 'gyro') clearCurrentManualSelections();
  });
  function scheduleSettledRange(consumer) {
    const store = consumer.store, index = consumer.target;
    if (consumer.rangeTarget === index && (consumer.rangeTimer != null || consumer.rangeController || consumer.rangeRecoveryState === 'exhausted')) return;
    cancelSettledRange(consumer); consumer.rangeTarget = index;
    if (consumer.disposed || store.disposed || document.hidden || navigator.onLine === false || index === 0 || store.blobs.has(index) || store.rangeUnsupported
      || !store.preview || store.preview.failed || (!store.preview.finished && !allowEarlyManualRange(consumer,index))
      || !window.ComicAssetDelivery || typeof window.ComicAssetDelivery.fetchRange !== 'function') return;
    const pack = store.packByIndex && store.packByIndex[index], row = pack && pack.indices.indexOf(index);
    if (!pack || row < 0 || !pack.frameBytes || !pack.frameSha256
      || store.rangeTried && store.rangeTried.has(index)) return;
    if (!store.preview.finished && pack.frameBytes[row] > manualRangeLimit) return;
    consumer.earlyRange = !store.preview.finished;
    consumer.rangeTimer = setTimeout(() => {
      consumer.rangeTimer = null;
      if (consumer.disposed || store.disposed || document.hidden || navigator.onLine === false || consumer.target !== index || store.blobs.has(index) || rangePending) return;
      const early = !store.preview.finished;
      if (early && !allowEarlyManualRange(consumer,index)) return;
      const controller = new AbortController(), generation = store.generation;
      consumer.earlyRange = early;
      consumer.rangeController = controller; rangePending++;
      const offset = 12 + pack.indices.length * 8 + pack.frameBytes.slice(0,row).reduce((n,v) => n+v,0);
      const length = pack.frameBytes[row], end = offset + length - 1;
      let receivedFrame = false, invalid = false, failure = null;
      const recoveryKey = `range:${index}`;
      const wanted = () => !consumer.disposed && consumer.target === index && !store.blobs.has(index)
        && (!early || allowEarlyManualRange(consumer, index));
      const rejectRange = () => { invalid = true; if (!early) store.rangeUnsupported = true; };
      async function attempt() {
        let timedOut = false, result = null, reader = null, timer;
        const bodyController = new AbortController();
        const abort = () => bodyController.abort();
        controller.signal.addEventListener('abort', abort, {once:true});
        const arm = () => { clearTimeout(timer); timer = setTimeout(() => { timedOut = true; bodyController.abort();
          if (reader) { try { void Promise.resolve(reader.cancel()).catch(() => {}); } catch (_) {} }
        }, 8000); };
        arm();
        try {
          result = await window.ComicAssetDelivery.fetchRange(pack.source,pack.sha256,offset,end,
            {signal:bodyController.signal,cache:store.recoveryTried.has(recoveryKey)?'reload':'force-cache'});
          if (timedOut) throw recoveryFailure('Frame range response timed out', 'body-idle');
          if (!current(store,generation) || controller.signal.aborted || !wanted()) throw recoveryCancelled();
          if (!result) { rejectRange(); return; }
          const expectedRange = `bytes ${offset}-${end}/${pack.byteLength}`;
          if (result.status !== 206 || result.headers.get('Content-Range') !== expectedRange) {
            rejectRange(); try { if(result.body) await result.body.cancel(); } catch (_) {} return;
          }
          let raw;
          if (result.body && typeof result.body.getReader === 'function') {
            reader=result.body.getReader(); const bounded=new Uint8Array(length);let received=0,complete=false;
            try {
              for (;;) {
                const chunk=await transportRead(reader);
                if (timedOut) throw recoveryFailure('Frame range body stalled for eight seconds', 'body-idle');
                if (controller.signal.aborted || !current(store,generation) || !wanted()) throw recoveryCancelled();
                if (chunk.done) break;
                if (!(chunk.value instanceof Uint8Array) || received+chunk.value.byteLength>length) throw new Error('Frame range overflow');
                if (chunk.value.byteLength) arm();
                bounded.set(chunk.value,received);received+=chunk.value.byteLength;
              }
              if (received!==length) throw new Error('Frame range truncated');
              complete=true;raw=bounded.buffer;
            } finally {
              if(!complete)try{void Promise.resolve(reader.cancel()).catch(()=>{});}catch(_){}
              try{reader.releaseLock();}catch(_){}
            }
          } else raw=await result.arrayBuffer();
          if (timedOut) throw recoveryFailure('Frame range body stalled for eight seconds', 'body-idle');
          if (!current(store,generation) || controller.signal.aborted || !wanted()) throw recoveryCancelled();
          if (raw.byteLength !== length || !webpPayload(new Uint8Array(raw)) || await digest(store,raw) !== pack.frameSha256[row]) {
            rejectRange(); return;
          }
          if (current(store,generation) && !controller.signal.aborted && wanted()) {
            publishBlob(store,index,new Blob([raw],{type:'image/webp'}),generation);
            store.lastVerifiedRange = index; receivedFrame = true;
          }
        } catch (error) {
          if (timedOut && !controller.signal.aborted) throw recoveryFailure('Frame range stalled for eight seconds', 'body-idle', error);
          throw error;
        } finally { clearTimeout(timer); controller.signal.removeEventListener('abort', abort); }
      }
      (async () => {
        for (;;) {
          try { await attempt(); consumer.rangeRecoveryState = ''; scheduleProgress(consumer); return; }
          catch (error) {
            if (retryable(error) && !store.recoveryTried.has(recoveryKey) && recoveryAllowed(store,generation) && !controller.signal.aborted && wanted()) {
              store.recoveryTried.add(recoveryKey); consumer.rangeRecoveryState = 'retrying'; scheduleProgress(consumer);
              try { await recoveryDelay(store,generation,controller.signal,wanted); }
              catch (_) { consumer.rangeRecoveryState = ''; scheduleProgress(consumer); return; }
              continue;
            }
            failure = error;
            consumer.rangeRecoveryState = retryable(error) && store.recoveryTried.has(recoveryKey) && !controller.signal.aborted ? 'exhausted' : '';
            scheduleProgress(consumer);
            // A transient failure preserves the usable preview and does not
            // trigger a whole-pack fallback. A manual retry owns a fresh store.
            if (!retryable(error) && error?.recoveryKind !== 'cancelled' && !controller.signal.aborted && current(store,generation)) rejectRange();
            return;
          }
        }
      })().finally(() => {
        rangePending--;
        if (!controller.signal.aborted && current(store,generation)) {
          if (!early || receivedFrame || failure) {
            if (!store.rangeTried) store.rangeTried = new Set();
            store.rangeTried.add(index);
          } else if (consumer.manualTarget === index) consumer.manualTarget = null;
          if (invalid && store.rangeUnsupported) armFullPacks(store, 0);
        }
        if (consumer.rangeController === controller) { consumer.rangeController = null; consumer.earlyRange = false; }
        schedulePump();
        for (const activeStore of stores.values()) for (const other of activeStore.consumers) scheduleSettledRange(other);
      });
    },120);
  }

  function requestDemand(consumer) {
    scheduleSettledRange(consumer);
    if (!consumer.store.sequence.packs) return;
    void requestBlob(consumer.store, consumer.target, 0).catch(() => {});
    for (const index of neighbors(consumer)) void requestBlob(consumer.store, index, 1).catch(() => {});
  }
  function wantedFrame(consumer, index = consumer.target) {
    const store = consumer.store, preview = store.preview;
    if (store.blobs.has(index) || !store.sequence.packs || !preview) return {index, preview:false};
    // Native front/reset must never reveal an unrelated approximate angle.
    if (index === 0) return preview.blobs.has(0) && !preview.errors.has(0) ? {index:0, preview:true} : {index:0, preview:false};
    let nearest = null, distance = Infinity;
    for (const candidate of preview.blobs.keys()) {
      if (preview.errors.has(candidate)) continue;
      const delta = Math.abs(candidate - index);
      const gap = store.sequence.boundedOrbit ? delta : Math.min(delta, store.sequence.frameCount - delta);
      if (gap < distance || gap === distance && candidate < nearest) { nearest = candidate; distance = gap; }
    }
    return nearest === null ? {index, preview:false} : {index:nearest, preview:true};
  }
  function nextDecode() {
    // Derive demand from live consumers instead of accumulating stale seek promises.
    for (const store of stores.values()) {
      for (const consumer of store.consumers) {
        const {index, preview} = wantedFrame(consumer), key = pendingKey(index, preview);
        const blobs = preview ? store.preview.blobs : store.blobs, errors = preview ? store.preview.errors : store.errors;
        if ((consumer.actualIndex !== index || consumer.actualPreview !== preview) && !lru.has(keyFor(store, index, preview)) && !store.pending.has(key) && !errors.has(index)
          && (!store.sequence.packs || blobs.has(index))) return {store, index, preview, priority:0};
      }
    }
    for (const store of stores.values()) {
      for (const consumer of store.consumers) {
        for (const target of neighbors(consumer)) {
          const {index, preview} = wantedFrame(consumer, target), key = pendingKey(index, preview);
          const blobs = preview ? store.preview.blobs : store.blobs, errors = preview ? store.preview.errors : store.errors;
          if (consumer.prefetched.has(key)) continue;
          // Network waiters must not occupy the four bitmap-decode slots: a
          // freshly verified demanded frame can arrive before its neighbors.
          if (store.sequence.packs && !blobs.has(index)) continue;
          consumer.prefetched.add(key);
          if (!lru.has(keyFor(store, index, preview)) && !store.pending.has(key) && !errors.has(index)) return {store, index, preview, priority:1};
        }
      }
    }
    return null;
  }
  function pumpDecodes() {
    while (decodePending < MAX_DECODE_PENDING) {
      const next = nextDecode();
      if (!next) break;
      const {store, index, preview, priority} = next, generation = store.generation, key = pendingKey(index, preview);
      // Reserve capacity before createImageBitmap, so even its late result never
      // makes the live decoded bitmap count exceed24.
      while (lru.size + decodePending >= MAX_BITMAPS) evictOldest();
      store.pending.add(key); decodePending++;
      (preview ? Promise.resolve(store.preview.blobs.get(index)) : requestBlob(store, index, priority)).then(blob => {
        if (!current(store, generation)) return null;
        return createImageBitmap(blob);
      }).then(bitmap => {
        if (!bitmap) return;
        if (!current(store, generation)) { bitmap.close(); return; }
        const dimensions = preview ? store.preview.spec : store.sequence;
        if (bitmap.width !== dimensions.width || bitmap.height !== dimensions.height) {
          bitmap.close(); throw new Error('Frame dimensions do not match the bound media');
        }
        lru.set(keyFor(store, index, preview), {store, index, preview, bitmap});
        for (const consumer of store.consumers) {
          const wanted = wantedFrame(consumer);
          if (wanted.index === index && wanted.preview === preview) scheduleRender(consumer);
        }
      }).catch(error => {
        if (!current(store, generation)) return;
        (preview ? store.preview.errors : store.errors).set(index, error);
        for (const consumer of store.consumers) {
          scheduleProgress(consumer);
          if (preview || consumer.target === index) scheduleRender(consumer);
        }
      }).finally(() => {
        store.pending.delete(key); decodePending--; schedulePump();
      });
    }
  }
  // Only one small, short-lived visual snapshot may exist across the reader.
  let qualityTransition = null;
  function stopQualityTransition(owner) {
    const current = qualityTransition;
    if (!current || owner && current.owner !== owner) return;
    qualityTransition = null;
    clearTimeout(current.timer);
    current.animation.onfinish = null; current.animation.oncancel = null;
    current.animation.cancel();
    current.canvas.remove(); current.canvas.width = 0; current.canvas.height = 0;
  }
  function beginQualityTransition(consumer, preview) {
    const canvas = consumer.canvas;
    if (preview || !consumer.actualPreview || consumer.actualTarget !== consumer.target ||
        consumer.verifiedSparseRGBA || consumer.store.sequence.transparentFrameCrop ||
        !canvas.isConnected || canvas.hidden || document.hidden || typeof canvas.animate !== 'function' ||
        window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return;
    const rect = canvas.getBoundingClientRect();
    if (!(rect.width > 0 && rect.height > 0)) return;
    stopQualityTransition();
    const ghost = document.createElement('canvas');
    const scale = Math.min(1, 720 / Math.max(canvas.width, canvas.height));
    ghost.width = Math.max(1, Math.round(canvas.width * scale));
    ghost.height = Math.max(1, Math.round(canvas.height * scale));
    const context = ghost.getContext('2d');
    if (!context) return;
    try { context.drawImage(canvas, 0, 0, ghost.width, ghost.height); } catch (_) { return; }
    ghost.className = canvas.className + ' panel-quality-transition';
    ghost.style.cssText = canvas.style.cssText;
    ghost.style.pointerEvents = 'none'; ghost.style.opacity = '1';
    ghost.setAttribute('aria-hidden','true');
    canvas.after(ghost);
    const animation = ghost.animate([{opacity:1},{opacity:0}], {duration:100,easing:'ease-out'});
    const record = {owner:consumer,canvas:ghost,animation,timer:null}; qualityTransition = record;
    const finish = () => { if (qualityTransition === record) stopQualityTransition(consumer); };
    animation.onfinish = finish; animation.oncancel = finish;
    record.timer = setTimeout(finish, 180);
  }
  function scheduleRender(consumer) {
    if (consumer.disposed || consumer.renderScheduled) return;
    consumer.renderScheduled = true;
    defer(() => {
      consumer.renderScheduled = false;
      if (consumer.disposed || consumer.store.disposed) return;
      const {index, preview} = wantedFrame(consumer), bitmap = peek(consumer.store, index, preview);
      if (!bitmap) {
        const error = !preview && consumer.store.errors.get(index);
        if (error && consumer.errorVersion !== consumer.version) {
          consumer.errorVersion = consumer.version;
          if (typeof consumer.options.onError === 'function') consumer.options.onError(error);
        }
        schedulePump(); return;
      }
      try {
        try { beginQualityTransition(consumer, preview); } catch (_) { stopQualityTransition(consumer); }
        if (consumer.verifiedSparseRGBA) consumer.context.clearRect(0,0,consumer.canvas.width,consumer.canvas.height);
        const crop=!preview && consumer.store.sequence.transparentFrameCrop;
        if (crop) consumer.context.drawImage(bitmap,crop.x,crop.y,crop.width,crop.height);
        else if (consumer.editorialFraming && consumer.editorialFraming.scaleAt(index)>1) {
          const q=consumer.editorialFraming.sourceRect(index,bitmap.width,bitmap.height);
          consumer.context.imageSmoothingQuality='high';
          consumer.context.drawImage(bitmap,q.x,q.y,q.width,q.height,0,0,consumer.canvas.width,consumer.canvas.height);
        } else consumer.context.drawImage(bitmap, 0, 0, consumer.canvas.width, consumer.canvas.height);
      }
      catch (error) {
        if (typeof consumer.options.onError === 'function') consumer.options.onError(error);
        return;
      }
      consumer.actualIndex = index; consumer.actualPreview = preview; consumer.actualTarget = consumer.target;
      if (consumer.manualTarget === consumer.target) scheduleSettledRange(consumer);
      const sequence = consumer.store.sequence, firstReady = !consumer.ready;
      consumer.ready = true;
      if (firstReady && typeof consumer.options.onReady === 'function') consumer.options.onReady({frameCount:sequence.frameCount, width:sequence.width, height:sequence.height, sourceWidth:sequence.sourceWidth, sourceHeight:sequence.sourceHeight, duration:sequence.duration, preview});
      const wanted = wantedFrame(consumer);
      if (!consumer.disposed && wanted.index === index && wanted.preview === preview && typeof consumer.options.onFrame === 'function') consumer.options.onFrame({index, targetIndex:consumer.target, preview, currentTime:index / sequence.frameCount * sequence.duration, duration:sequence.duration, percent:index / sequence.frameCount * 100});
      schedulePump();
    });
  }
  function retainComplete(store) {
    // Keep only finished, independently verified compressed frames. A fresh
    // live store owns future callbacks; disposed async work is never revived.
    if (!store.sequence.packs) return;
    const completeHD = !store.requests.size && !store.errors.size && store.blobs.size === store.sequence.frameCount;
    const sizeOf = blobs => Array.from(blobs.values()).reduce((sum, blob) => sum + blob.size, 0);
    let bytes = completeHD ? sizeOf(store.blobs) : 0;
    let blobs = new Map(), preview = null, lastVerifiedRange = null;
    if (Number.isSafeInteger(bytes) && bytes > 0 && bytes <= MAX_RETAINED_BYTES) {
      blobs = new Map(store.blobs);
    } else {
      // A large HD set must not evict its own much smaller verified preview.
      const small = store.preview;
      if (!small || !small.finished || small.failed || small.errors.size
        || small.blobs.size !== small.spec.indices.length
        || !small.spec.indices.every(index => small.blobs.has(index))) return;
      bytes = sizeOf(small.blobs);
      if (!Number.isSafeInteger(bytes) || bytes <= 0 || bytes > MAX_RETAINED_BYTES) return;
      preview = {spec:small.spec, blobs:new Map(small.blobs)};
      // Keep only the last independently verified single-angle Range with the
      // complete preview. It stays under the existing total/store LRU limits.
      const index = store.lastVerifiedRange, angle = store.blobs.get(index);
      if (angle && angle.size <= MAX_RETAINED_RANGE_BYTES && bytes + angle.size <= MAX_RETAINED_BYTES && !store.errors.has(index)) {
        blobs.set(index,angle);
        bytes += angle.size;
        lastVerifiedRange = index;
      }
    }
    const old = retained.get(store.key);
    if (old) { retainedBytes -= old.bytes; retained.delete(store.key); }
    retained.set(store.key, {bytes, blobs, preview, lastVerifiedRange}); retainedBytes += bytes;
    while (retained.size > MAX_RETAINED_STORES || retainedBytes > MAX_RETAINED_BYTES) {
      const key = retained.keys().next().value;
      retainedBytes -= retained.get(key).bytes; retained.delete(key);
    }
  }
  function disposeStore(store) {
    retainComplete(store);
    clearTimeout(store.bulkTimer);
    clearTimeout(store.seekTimer);
    store.disposed = true; store.generation++;
    for (const cancel of [...store.recoveryCancels]) cancel();
    store.recoveryStates.clear();
    if (stores.get(store.key) === store) stores.delete(store.key);
    for (const [key, entry] of lru) if (entry.store === store) { entry.bitmap.close(); lru.delete(key); }
    for (const request of store.requests.values()) {
      clearPreviewIdle(request);
      if (request.controller) request.controller.abort();
      if (request.reader) { try { void Promise.resolve(request.reader.cancel()).catch(() => {}); } catch (_) {} }
      request.reject(new Error('Frame store disposed'));
    }
    for (const waiter of store.frameWaiters.values()) waiter.reject(new Error('Frame store disposed'));
    store.frameWaiters.clear();
    store.requests.clear(); store.blobs.clear(); store.errors.clear(); store.pending.clear();
    if (store.preview) { store.preview.blobs.clear(); store.preview.errors.clear(); }
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
    canvas.width = sequence.transparentFrameCrop ? sequence.sourceWidth : sequence.width;
    canvas.height = sequence.transparentFrameCrop ? sequence.sourceHeight : sequence.height;
    canvas.setAttribute('aria-hidden', 'true');
    const previewSequence = boundPreview(panel, page, sequence);
    const key = JSON.stringify([sequence.boundedOrbit, sequence.mediaSha256, sequence.videoSource, sequence.frameCount, sequence.sourceWidth, sequence.sourceHeight, sequence.width, sequence.height, sequence.duration, sequence.frames, sequence.packs, previewSequence]);
    let store = stores.get(key);
    if (!store) {
      const warm = retained.get(key);
      if (warm) { retained.delete(key); retainedBytes -= warm.bytes; }
      const packByIndex = sequence.packs ? new Array(sequence.frameCount) : null;
      if (packByIndex) for (const pack of sequence.packs) for (const index of pack.indices) packByIndex[index] = pack;
      const completeHD = warm && warm.blobs.size === sequence.frameCount;
      const preview = !completeHD && previewSequence ? {spec:warm && warm.preview ? warm.preview.spec : previewSequence,
        blobs:new Map(warm && warm.preview ? warm.preview.blobs : []), errors:new Map(), finished:!!(warm && warm.preview), failed:false} : null;
      store = {key, id:++serial, sequence, preview, packByIndex, recoveryTried:new Set(), recoveryStates:new Map(), recoveryCancels:new Set(), lastVerifiedRange:warm?.lastVerifiedRange ?? null, subtle:sequence.packs ? window.crypto.subtle : null, generation:0, disposed:false, consumers:new Set(), blobs:warm ? new Map(warm.blobs) : new Map(), frameWaiters:new Map(), requests:new Map(), pending:new Set(), errors:new Map()};
      stores.set(key, store);
      if (preview && preview.finished) armFullPacks(store, 3500);
      if (preview && !preview.finished) void enqueueRequest(store, preview.spec.pack.source, -2, 0, preview.spec.pack, true).catch(() => {});
      // Compressed images are small and reusable; decode only the requested/nearby frames.
      if (sequence.packs) {
        // Demand and its neighbors do not necessarily touch every interleaved
        // pack (for example 162 frames only touches three of the four packs).
        // Queue complete coverage once; live demand below promotes its own work.
        for (const pack of sequence.packs) if (!pack.indices.every(index => store.blobs.has(index))) void enqueueRequest(store, pack.source, 2, pack.indices[0], pack).catch(() => {});
      } else for (let index = 0; index < sequence.frameCount; index++) void requestBlob(store, index, 2).catch(() => {});
    }
    const consumer = {store, canvas, context, options, editorialFraming:window.ComicPanelPlayer?.editorialViewFraming?.(panel,page)||null, verifiedSparseRGBA:(window.ComicPanelPlayer?.isTransparentStompLayer(panel,page)===true || window.ComicPanelPlayer?.isTransparentCryLayer(panel,page)===true), target:0, actualIndex:-1, actualPreview:false, ready:false, disposed:false, direction:0, version:0, errorVersion:-1, prefetched:new Set(), renderScheduled:false, progressScheduled:false, progressFrame:null, progressVersion:0, progressLoaded:-1, progressFailed:-1, progressRecoveryState:null, rangeRecoveryState:'', previewProgressLoaded:-1, previewProgressFailed:-1, manualTarget:null, earlyRange:false, manualPageEpoch};
    store.consumers.add(consumer);
    function setPercent(percent) {
      if (consumer.disposed || !Number.isFinite(Number(percent))) return;
      const next = Math.min(sequence.frameCount - 1, Math.floor(Math.max(0, Math.min(100, Number(percent))) / 100 * sequence.frameCount + 1e-9));
      if (next !== consumer.target) {
        stopQualityTransition(consumer);
        clearManualSettle(consumer);
        store.seekQuiet = false;
        clearTimeout(store.seekTimer);
        store.seekTimer = setTimeout(() => {
          store.seekQuiet = true;
          // A verified or in-flight angle already serves this gesture.
          // Keep the preview's normal reading window for surrounding angles.
          if (!store.blobs.has(next) && consumer.rangeTimer == null && !consumer.rangeController)
            armFullPacks(store, 0);
          schedulePump();
        }, 210);
        let delta = next - consumer.target;
        if (!sequence.boundedOrbit && Math.abs(delta) > sequence.frameCount / 2) delta += delta > 0 ? -sequence.frameCount : sequence.frameCount;
        consumer.direction = Math.sign(delta); consumer.target = next; consumer.version++; consumer.prefetched.clear();
      }
      requestDemand(consumer); scheduleRender(consumer); schedulePump();
    }
    function reset() {
      if (consumer.disposed) return;
      stopQualityTransition(consumer);
      consumer.version++; consumer.direction = 0; consumer.prefetched.clear();
      setPercent(0);
    }
    function destroy() {
      if (consumer.disposed) return;
      stopQualityTransition(consumer);
      cancelSettledRange(consumer);
      consumer.disposed = true; consumer.ready = false; store.consumers.delete(consumer);
      consumer.progressVersion++;
      if (consumer.progressFrame !== null) window.cancelAnimationFrame(consumer.progressFrame);
      consumer.progressFrame = null; consumer.progressScheduled = false;
      canvas.width = 0; canvas.height = 0;
      if (!store.consumers.size) disposeStore(store);
    }
    // Includes cache hits: no callback can run until the caller has assigned its handle.
    scheduleProgress(consumer); requestDemand(consumer); scheduleRender(consumer); schedulePump();
    return Object.freeze({canvas, setPercent, reset, destroy,
      // An explicit manual retry starts a fresh budget for only this failed
      // angle. Keep the shared store and every healthy consumer/canvas alive.
      get rangeRecoveryExhausted() { return consumer.rangeRecoveryState === 'exhausted'; },
      retryFailedRange() {
        if (consumer.disposed || consumer.rangeRecoveryState !== 'exhausted'
          || !store.preview?.finished || store.preview.failed || !recoveryAllowed(store, store.generation)) return false;
        const index = consumer.target;
        store.recoveryTried.delete(`range:${index}`); store.rangeTried?.delete(index);
        consumer.rangeRecoveryState = ''; consumer.rangeTarget = null;
        scheduleProgress(consumer); scheduleSettledRange(consumer); schedulePump();
        return true;
      },
      settleManual() {
        if (consumer.disposed || !demandOnly || consumer.store.preview?.finished) return;
        consumer.manualTarget = consumer.target;
        scheduleSettledRange(consumer);
      },
      clearManualSettle:() => clearManualSettle(consumer),
      get currentTime() { return consumer.actualIndex < 0 ? 0 : consumer.actualIndex / sequence.frameCount * sequence.duration; },
      get index() { return consumer.actualIndex; }, get ready() { return consumer.ready; }});
  }
  function firstPreview(page, config, maxBytes) {
    const api = window.ComicPanelPlayer, seen = new Set();
    if (!api) return null;
    for (const parent of page.panels || []) {
      if (!api.displayable(parent, page)) continue;
      const regions = api.interactionRegions(parent, page);
      if (api.requiresInteractionLayout(parent) && !regions.length) continue;
      const overrides = regions.length ? api.regionMediaOverrides(parent, page) || [] : [];
      const panels = regions.length ? regions.map(region => overrides.find(item => item.region.id === region.id)?.panel || parent) : [parent];
      for (const panel of panels) {
        if (seen.has(panel.id) || !api.displayable(panel, page)) continue;
        seen.add(panel.id);
        const sequence = boundSequence(panel, page, config);
        const preview = sequence && boundPreview(panel, page, sequence, config);
        if (preview && preview.pack.byteLength <= maxBytes) return preview;
      }
    }
    return null;
  }
  async function verifyPreview(preview, bytes) {
    // The regular pack parser verifies its table, whole body and every WebP row.
    await unpack({subtle:window.crypto.subtle}, preview.pack, bytes);
  }
  window.OrbitFrameCache = Object.freeze({create, setPagePreviewReady, resetPageManualSelections, firstPreview, verifyPreview, isDemandOnly:() => demandOnly});
})();
