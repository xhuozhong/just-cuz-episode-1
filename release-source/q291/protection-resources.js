;
(() => {
  'use strict';

  const attempts = new WeakMap();
  const builds = new WeakMap();
  const rebuildDeadlineMs = 2400;

  async function digest(bytes) {
    const result = await crypto.subtle.digest('SHA-256', bytes);
    return Array.from(new Uint8Array(result), byte => byte.toString(16).padStart(2, '0')).join('');
  }

  function cancel(owner) {
    const attempt = attempts.get(owner);
    if (!attempt) return;
    attempts.delete(owner);
    attempt.stop(null);
    if (attempt.url) URL.revokeObjectURL(attempt.url);
    const build = attempt.build;
    if (--build.owners === 0) {
      builds.delete(attempt.entry);
      build.abort();
    }
  }

  async function rebuild(entry, image, signal) {
    const expected = new URL(entry.pageFile, document.baseURI).href;
    const reading = window.ComicReadingArtwork?.(entry.pageFile,entry.pageSHA256);
    const display = image?.currentSrc;
    const verifiedRoute = display === expected || (reading && display === new URL(reading, document.baseURI).href);
    const {x, y, width, height} = entry.bounds;
    if (!image?.complete || !verifiedRoute || x + width > image.naturalWidth ||
        y + height > image.naturalHeight) return null;

    const response = await fetch(`source-mask-assets/${entry.maskFile}?sha256=${entry.maskSHA256}`,
      {signal, cache: 'force-cache'});
    if (!response.ok) return null;
    const bytes = await response.arrayBuffer();
    if (bytes.byteLength !== entry.maskBytes || await digest(bytes) !== entry.maskSHA256 || signal.aborted) return null;

    const mask = await createImageBitmap(new Blob([bytes], {type: 'image/png'}));
    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    let context;
    try {
      if (signal.aborted || image.currentSrc !== display || mask.width !== width || mask.height !== height) return null;
      context = canvas.getContext('2d', {willReadFrequently: true});
      if (!context) return null;
      context.drawImage(image, x, y, width, height, 0, 0, width, height);
      context.globalCompositeOperation = 'destination-in';
      context.drawImage(mask, 0, 0);
    } finally {
      mask.close();
    }
    const rgba = context.getImageData(0, 0, width, height).data;
    if (await digest(rgba) !== entry.rgbaSHA256 || signal.aborted) return null;
    return new Promise((resolve, reject) => {
      const finish = blob => {
        signal.removeEventListener('abort', aborted);
        resolve(blob);
      };
      const aborted = () => finish(null);
      signal.addEventListener('abort', aborted, {once: true});
      try {
        canvas.toBlob(finish, 'image/png');
      } catch (error) {
        signal.removeEventListener('abort', aborted);
        reject(error);
      }
    });
  }

  function getBuild(entry) {
    const existing = builds.get(entry);
    if (existing) return existing;
    const controller = new AbortController();
    let stop;
    const interrupted = new Promise(resolve => { stop = resolve; });
    const abort = () => { controller.abort(); stop(null); };
    const deadline = setTimeout(abort, rebuildDeadlineMs);
    const image = document.getElementById('page-image');
    const work = rebuild(entry, image, controller.signal).catch(() => null);
    const promise = Promise.race([work, interrupted]).finally(() => clearTimeout(deadline));
    const build = {abort, promise, owners: 0};
    builds.set(entry, build);
    return build;
  }

  function load(panel, page, field, owner) {
    cancel(owner);
    if (!window.crypto?.subtle || typeof createImageBitmap !== 'function' || typeof URL.createObjectURL !== 'function') return null;
    const asset = panel[field], bounds = panel.bounds;
    const entries = window.COMIC_FRAME_SEQUENCES?.sourceMasks;
    if (!Array.isArray(entries)) return null;
    const entry = entries.find(row => row.panel === panel.id && row.field === field &&
      row.mediaSHA256 === panel.actualMedia?.sha256 && row.pageFile === page.source && row.pageSHA256 === page.sha256 &&
      row.assetFile === asset?.source && row.assetSHA256 === asset?.sha256 &&
      ['x', 'y', 'width', 'height'].every(key => row.bounds[key] === bounds?.[key]));
    if (!entry) return null;

    const build = getBuild(entry);
    build.owners++;
    const attempt = {entry, build, stop: null, url: null};
    const interrupted = new Promise(resolve => { attempt.stop = resolve; });
    attempts.set(owner, attempt);
    return Promise.race([build.promise, interrupted]).then(blob => {
      if (attempts.get(owner) !== attempt) return null;
      if (blob) {
        try {
          attempt.url = URL.createObjectURL(blob);
          return attempt.url;
        } catch (_) {}
      }
      cancel(owner);
      return null;
    });
  }

  window.ComicSourceMasks = Object.freeze({load, cancel});
})();

window.COMIC_PROTECTION_FALLBACKS = Object.freeze({"publication/q107f-caption-cutout-dfff05278ad39201.png":{"originalSHA256":"dfff05278ad3920197f3617ebc71dfea034c11cdca35b0c75a846065202fdadf","source":"publication-png/protection-a6e2b09d9a4d118e81d95a2837752ea7e83551ac12808caa02cabb7ef0705b6e.png","sha256":"a6e2b09d9a4d118e81d95a2837752ea7e83551ac12808caa02cabb7ef0705b6e","width":1600,"height":2000},"publication/q115-caption-clean-6a46b1f57cec552a.png":{"originalSHA256":"6a46b1f57cec552ab8566ea0e2d7b50e409a07f3fa40a87ae50f8e4b4a8bbd5e","source":"publication-png/protection-a2431c93935eeab46bbcbe6c14735c49218c4536c4766a9a4ab095fb085839cf.png","sha256":"a2431c93935eeab46bbcbe6c14735c49218c4536c4766a9a4ab095fb085839cf","width":1600,"height":2000},"publication/page-050-panel-01-native-glyphs-83ff8e27ca05.png":{"originalSHA256":"83ff8e27ca0506f320590adcec1b47f7ce2df40d0345b61ae7c173c7005ffb94","source":"publication-png/protection-f22a62458cc475d144130461d6535e3f1300cd12bb927ed0745901aa19de923d.png","sha256":"f22a62458cc475d144130461d6535e3f1300cd12bb927ed0745901aa19de923d","width":1600,"height":2000},"publication/q115-caption-clean-57ceb9454be3404b.png":{"originalSHA256":"57ceb9454be3404b671f56c71830eab13fb732fcf5616901af45f46df4879219","source":"publication-png/protection-5593f0f1b133becadc47a30c778f05d26af331dd1be9af2cf4867f7ba82c6c7d.png","sha256":"5593f0f1b133becadc47a30c778f05d26af331dd1be9af2cf4867f7ba82c6c7d","width":1600,"height":2000},"publication/q111s-caption-cutout-6a78fa7226272215.png":{"originalSHA256":"6a78fa7226272215dee37578c667d4a3604c1df4172d4ec3a08b36742c44032a","source":"publication-png/protection-386a924dced11f9195894e23b4a97fc3dfdceb83de245802ec78282133bf70e1.png","sha256":"386a924dced11f9195894e23b4a97fc3dfdceb83de245802ec78282133bf70e1","width":1600,"height":2000},"publication/q115-caption-clean-5490b0c95c720ca1.png":{"originalSHA256":"5490b0c95c720ca17f047c90c94fef924784c41b827ea67875c53d007747e34d","source":"publication-png/protection-0c954079d337344b38044b98dba54d602ac69de2beff96fdc4ade320143adcab.png","sha256":"0c954079d337344b38044b98dba54d602ac69de2beff96fdc4ade320143adcab","width":1600,"height":2000},"publication/q112-caption-cutout-d60b3e56c73d8acc.png":{"originalSHA256":"d60b3e56c73d8acc9ccc283aa28204617ba5fa00e20a35d9348272b7bcced972","source":"publication-png/protection-34ae463245a9bba42c6fbb639d91a8ac08fd220f370898bd57fb72d7a9042be4.png","sha256":"34ae463245a9bba42c6fbb639d91a8ac08fd220f370898bd57fb72d7a9042be4","width":1600,"height":2000},"publication/q107c-caption-cutout-5c2dde93ea8bfcb4.png":{"originalSHA256":"5c2dde93ea8bfcb4b9afe5de48711a1dbfa488d4ca567aa5f61b194996c1b26d","source":"publication-png/protection-7009b0be1924dda2a68280910b9536af8a142d3966382e0089659980c2dbd0d8.png","sha256":"7009b0be1924dda2a68280910b9536af8a142d3966382e0089659980c2dbd0d8","width":1600,"height":2000},"publication/q105-attribution-cutout-4d561dd17a1d1612.png":{"originalSHA256":"4d561dd17a1d16123465d83d5f7bd5ecda70158975b90f5eaf683ddef563e9a2","source":"publication-png/protection-05323f0cd20f651ad851a8299b0cd21fc5409c7a7c44ea41676e83c47d8923a2.png","sha256":"05323f0cd20f651ad851a8299b0cd21fc5409c7a7c44ea41676e83c47d8923a2","width":1600,"height":2000},"publication/q111s-caption-cutout-a24f762c5752f594.png":{"originalSHA256":"a24f762c5752f594a2b3e64fcaf93b45ef25b0538982150ae6cace304c4366ec","source":"publication-png/protection-e948b4ebae6da48720a8410fe739b39009ec6bd26df89a90b0f7d98b688bedd8.png","sha256":"e948b4ebae6da48720a8410fe739b39009ec6bd26df89a90b0f7d98b688bedd8","width":1600,"height":2000},"publication/page-063-panel-01-native-glyphs-e2362eed7c58.png":{"originalSHA256":"e2362eed7c58177e35aa203d8baa97c85ab35ef86412c870a02751adcbe66461","source":"publication-png/protection-0cbce01e56db24b9da3ad58d12c9c0fb00496ee7764eba529eaa2df16cabc3b4.png","sha256":"0cbce01e56db24b9da3ad58d12c9c0fb00496ee7764eba529eaa2df16cabc3b4","width":1600,"height":2000},"publication/page-046-panel-01-native-glyphs-cf3a2171276d.png":{"originalSHA256":"cf3a2171276d9b5adbaabb8204e7d85c545882bda63d185f95f9aba6abd9ab48","source":"publication-png/protection-e0367d34301f47a2d0a66d96e2ea7f95c8e980d6697873c7856567680da0a71d.png","sha256":"e0367d34301f47a2d0a66d96e2ea7f95c8e980d6697873c7856567680da0a71d","width":1600,"height":2000},"publication/q107f-caption-cutout-c1947e65a59f6150.png":{"originalSHA256":"c1947e65a59f61505335e698411c89e68fda1b909040589207aceaac65140f5e","source":"publication-png/protection-5f9ac5994e85d31cf42688bf1f7ac140b6945f3bc3cfd337bcfc3bf5c6ab9ba6.png","sha256":"5f9ac5994e85d31cf42688bf1f7ac140b6945f3bc3cfd337bcfc3bf5c6ab9ba6","width":1600,"height":2000},"publication/q111s-caption-cutout-534c7cd1c457baf4.png":{"originalSHA256":"534c7cd1c457baf460f27b4e93cb3ba05f8cbfb7d6ab1cffabb3f26c637d5409","source":"publication-png/protection-937e84ad4dfae1efc53ce3ec95f80d3c08e85e78ad14b168ccd3c2e94797d117.png","sha256":"937e84ad4dfae1efc53ce3ec95f80d3c08e85e78ad14b168ccd3c2e94797d117","width":1600,"height":1172},"publication/page-074-upper-q99-frame-6baf820188e0.png":{"originalSHA256":"6baf820188e07d4a1e63c42f53ed911543addca70e2697088caf7edf6a32412d","source":"publication-png/protection-19b5a9deb0e0ad103198ed6d6b662ec6b2b148fd33c50947f4f849a6a9d02cdd.png","sha256":"19b5a9deb0e0ad103198ed6d6b662ec6b2b148fd33c50947f4f849a6a9d02cdd","width":1600,"height":1160},"publication/q107c-caption-cutout-3fd5b379d5bbdd2b.png":{"originalSHA256":"3fd5b379d5bbdd2b017c0d2de1bd8d1ff7095ffa2898c60d100e175c659ad081","source":"publication-png/protection-604aab760371c205df91711a3d415836f7232ea64802ac04ef352d252d083ac2.png","sha256":"604aab760371c205df91711a3d415836f7232ea64802ac04ef352d252d083ac2","width":1600,"height":1115},"publication/q107f-caption-cutout-7fd1644b802d9915.png":{"originalSHA256":"7fd1644b802d99159931dba66aaf63371133d0f3d14b86eb400c4f94300fd5b6","source":"publication-png/protection-0317a2e0bf7a97368483268e1703903b9d04913df2d213e5dcc6a3a544e20d9a.png","sha256":"0317a2e0bf7a97368483268e1703903b9d04913df2d213e5dcc6a3a544e20d9a","width":1600,"height":1185},"publication/q112-caption-cutout-7225f9cb5a363e05.png":{"originalSHA256":"7225f9cb5a363e053a45f3d871aff98145e5942ebf89ba96a5442fad7322370c","source":"publication-png/protection-ea5fdc8177ea1e8a8b76ecc07159189e5ba09f87226f719cd9e7de58ed6a2d64.png","sha256":"ea5fdc8177ea1e8a8b76ecc07159189e5ba09f87226f719cd9e7de58ed6a2d64","width":1600,"height":980},"publication/q111e-caption-cutout-78d7199fc6c80ec4.png":{"originalSHA256":"78d7199fc6c80ec4d8188086543c55fd6ca80afa50303ca13e2e8d113871e0b9","source":"publication-png/protection-f3548dc0ebcda09b9ecae001a799f4bbe7a2b566ed475c7d20d20bf2153c6ed9.png","sha256":"f3548dc0ebcda09b9ecae001a799f4bbe7a2b566ed475c7d20d20bf2153c6ed9","width":1600,"height":2000},"publication/page-065-panel-01-native-1ffb25eabb7e.png":{"originalSHA256":"1ffb25eabb7e8282712f78ba6f5908045a3ba56a7197b98c8644a085b7414fe8","source":"publication-png/protection-9bea1a5cb8259f9708627b858f1d4a712b0f90a80f1c8f2fc01324e9f84a5dde.png","sha256":"9bea1a5cb8259f9708627b858f1d4a712b0f90a80f1c8f2fc01324e9f84a5dde","width":1600,"height":2000},"publication/q112-caption-cutout-5dee34079f69d327.png":{"originalSHA256":"5dee34079f69d327044d19ac7d50920fb7ffad0a782899578b9914417adf26a2","source":"publication-png/protection-3d3a2773619bd0aa8e9cff896065b2ff786a83f26b369717a87003caa9d70553.png","sha256":"3d3a2773619bd0aa8e9cff896065b2ff786a83f26b369717a87003caa9d70553","width":1600,"height":1185},"publication/q115-caption-clean-5d59b9d69637eed0.png":{"originalSHA256":"5d59b9d69637eed0ffbf72d8c04ea935b132e8d815de927c75759241655e5b93","source":"publication-png/protection-4a8581c6d7eb036297e8f7b582b901751d27d72856ab3ff4244b9c923093c628.png","sha256":"4a8581c6d7eb036297e8f7b582b901751d27d72856ab3ff4244b9c923093c628","width":1600,"height":1020}});
