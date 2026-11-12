(() => {
  'use strict';
  const SHA = /^[a-f0-9]{64}$/i;
  const passed = value => value && value.status === 'passed' && Array.isArray(value.evidence) && value.evidence.length > 0;
  const positive = value => Number.isFinite(value) && value > 0;
  const localPath = value => typeof value === 'string' && !/^(?:[a-z]+:|[\\/])|(?:^|[\\/])\.\.(?:[\\/]|$)/i.test(value) && value.length > 0;
  function rectValid(rect, width, height) {
    return rect && Number.isFinite(rect.x) && Number.isFinite(rect.y) && rect.x >= 0 && rect.y >= 0 && positive(rect.width) && positive(rect.height) && rect.x + rect.width <= width && rect.y + rect.height <= height;
  }
  function viewPhaseMapping(panel, page) {
    const spec = panel && panel.viewPhaseMap, media = panel && panel.actualMedia;
    const clamp = value => Number.isFinite(Number(value)) ? Math.max(0, Math.min(100, Number(value))) : 0;
    const identity = {enabled:false, toMedia:clamp, toPhase:clamp};
    if (!spec || !media || spec.schemaVersion !== 1 || spec.kind !== 'reviewed-native-camera-phase'
      || spec.sourcePageSha256 !== page.sha256 || spec.mediaSha256 !== media.sha256
      || spec.frameCount !== media.frameCount || !Array.isArray(spec.points)
      || spec.points.length < 2 || spec.points.length > 128) return identity;
    const points = spec.points;
    if (!points.every((p, i) => Array.isArray(p) && p.length === 2
      && p.every(v => Number.isFinite(v) && v >= 0 && v <= 100)
      && (!i || p[0] > points[i-1][0] && p[1] > points[i-1][1]))
      || points[0][0] !== 0 || points[0][1] !== 0
      || points[points.length-1][0] !== 100 || points[points.length-1][1] !== 100) return identity;
    // Re-map only the user's view-control phase. The video and frame cache keep
    // every real source frame; no image is interpolated or manufactured here.
    const convert = (value, from, to) => {
      const v = clamp(value);
      for (let i = 1; i < points.length; i++) if (v <= points[i][from]) {
        const a = points[i-1], b = points[i];
        return a[to] + (v-a[from]) / (b[from]-a[from]) * (b[to]-a[to]);
      }
      return 100;
    };
    return {enabled:true, toMedia:value => convert(value, 0, 1), toPhase:value => convert(value, 1, 0)};
  }
  function taskIdentified(panel, page, verification, media) {
    const task = panel.task;
    if (!task) return false;
    if (task.identityKind !== 'provider-output-asset') return !!task.id;
    const receipt = verification.taskOutput || {};
    // A real output asset identifies its provider media; it is not a fabricated job ID.
    // The reviewed media record binds that original file to the final five-second file.
    return task.id === null && Number.isSafeInteger(task.outputAssetId) && task.outputAssetId > 0
      && SHA.test(task.outputMediaSha256 || '') && passed(receipt)
      && receipt.outputAssetId === task.outputAssetId && receipt.outputMediaSha256 === task.outputMediaSha256
      && receipt.sourcePageSha256 === page.sha256
      && verification.media.sourceMediaSha256 === task.outputMediaSha256
      && verification.media.mediaSha256 === media.sha256;
  }
  function legacyEligible(panel, page) {
    if (!panel || panel.quality !== 'passed' || panel.method !== 'lora' || !localPath(panel.video)) return false;
    const v = panel.verification || {}, media = panel.actualMedia || {}, mapping = panel.contentMapping || {};
    if (![v.weightLoad, v.media, v.spatial, v.bounds, v.textProtection, mapping].every(passed)) return false;
    if (v.bounds.sourcePageSha256 !== page.sha256 || v.spatial.sourcePageSha256 !== page.sha256 || v.textProtection.sourcePageSha256 !== page.sha256) return false;
    if (!panel.weight || !SHA.test(panel.weight.sha256 || '') || !SHA.test(media.sha256 || '') || !taskIdentified(panel, page, v, media)) return false;
    if (!positive(media.width) || !positive(media.height) || !positive(media.frameCount) || !positive(media.fps) || !positive(media.duration)) return false;
    if (Math.abs(media.duration - 5) > .02 || !rectValid(panel.bounds, page.width, page.height) || !rectValid(mapping.videoRect, media.width, media.height)) return false;
    const b = panel.bounds, r = mapping.videoRect;
    if (Math.abs((b.width / b.height) / (r.width / r.height) - 1) > .003) return false;
    if (panel.mask && panel.protectionOverlay) return false;
    if (panel.protectionOverlay) {
      const overlay = panel.protectionOverlay;
      return localPath(overlay.source) && /\.png$/i.test(overlay.source) && !/%/.test(overlay.source) && overlay.coordinateSpace === 'source-panel'
        && Number.isInteger(overlay.width) && Number.isInteger(overlay.height) && overlay.width === b.width && overlay.height === b.height
        && SHA.test(overlay.sha256 || '') && overlay.sourcePageSha256 === page.sha256
        && passed(v.mask) && v.mask.sourcePageSha256 === page.sha256 && v.mask.maskSha256 === overlay.sha256;
    }
    if (panel.mask) return localPath(panel.mask) && passed(v.mask) && v.mask.sourcePageSha256 === page.sha256;
    return v.textProtection.originalTextOverlap === false && v.textProtection.originalFrameOverlap === false;
  }
  function sourceBound(panel, page) {
    if (!panel || !localPath(panel.video) || !rectValid(panel.bounds, page.width, page.height)) return false;
    const m = panel.actualMedia || {}, overlay = panel.protectionOverlay || {};
    const mapping = panel.contentMapping || {};
    if (mapping.artworkRect && (!rectValid(mapping.artworkRect, panel.bounds.width, panel.bounds.height)
      || mapping.sourcePageSha256 !== page.sha256 || !Array.isArray(mapping.backgroundColor)
      || mapping.backgroundColor.length !== 3 || !mapping.backgroundColor.every(x => Number.isInteger(x) && x >= 0 && x <= 255))) return false;
    return [m.width, m.height, m.frameCount, m.fps, m.duration].every(positive) && SHA.test(m.sha256 || '')
      && localPath(overlay.source) && overlay.coordinateSpace === 'source-panel'
      && overlay.width === panel.bounds.width && overlay.height === panel.bounds.height
      && overlay.sourcePageSha256 === page.sha256 && SHA.test(overlay.sha256 || '');
  }
  function eligible(panel, page) {
    if (legacyEligible(panel, page)) return true;
    if (!sourceBound(panel, page) || panel.quality !== 'passed') return false;
    const v = panel.verification || {};
    return [v.media, v.spatial, v.bounds, v.textProtection, v.runtime].every(passed)
      && [v.media, v.spatial, v.bounds, v.textProtection, v.runtime].every(x => x.sourcePageSha256 === page.sha256 && x.mediaSha256 === panel.actualMedia.sha256);
  }
  // P39 changes caption RGB within a reviewed mask. Keep its honest audit tag;
  // only this exact proof/media/source/alpha/frame/geometry binding may display.
  const q117P39CaptionPin = Object.freeze({"pageId":"page-039","sourcePage":39,"pageSha256":"dea7d74f84665d733b19e61f75766a9d253f290a373d32f2d6b7e0e2a30db9d4","pageWidth":1600,"pageHeight":2000,"panelId":"page-039-panel-01","quality":"review-candidate","video":"videos-5s/page-039-eighteen-bridges-compact-c8a2e65683ad.mp4","sourceCrop":"source-panels/page-039-panel-01.png","sourceCropSha256":"8343fdbcc37530b1c1cd5a37b3c1d5c2b73abc57c0724249c6d0d920910d7e3c","bounds":{"x":0,"y":0,"width":1600,"height":2000},"actualMedia":{"width":986,"height":932,"frameCount":240,"fps":48.0,"fpsRational":"48/1","duration":5.0,"sha256":"c8a2e65683ad81cb0f41f16b09ecc787f04075e3000fd7bc0624f86e7f2886a2","codec":"h264","audio":false,"sizeBytes":2176128},"contentMapping":{"mode":"entire-video-contained-no-crop","sourcePageSha256":"dea7d74f84665d733b19e61f75766a9d253f290a373d32f2d6b7e0e2a30db9d4","videoRect":{"x":0,"y":0,"width":986,"height":932},"artworkRect":{"x":55,"y":350,"width":1490,"height":1410},"backgroundColor":[255,255,255],"edgeExtension":{"schemaVersion":1,"mode":"current-frame-edges","sourcePageSha256":"dea7d74f84665d733b19e61f75766a9d253f290a373d32f2d6b7e0e2a30db9d4","mediaSha256":"c8a2e65683ad81cb0f41f16b09ecc787f04075e3000fd7bc0624f86e7f2886a2","sourceWidth":986,"sourceHeight":932,"artworkRect":{"x":55,"y":350,"width":1490,"height":1410},"publicationProofSha256":"adf8edf8f1791d26e7539f70443c127a96c34aabab0f493a43c57fc9aa748b58"},"layoutMeaning":"Complete raw986x932 video/raw800x756 cache contained uniformly in source1490x1410 artRect. Internal rounding top/bottom1px uses nativeedge; outer sidegutters use actual CURRENT-frame edges under sourceRGBA header/footer/strictframe; no staleactor strip, newwhitebar, covercrop or unequal-axis scale."},"protectionOverlay":{"source":"publication/q109-sixteen-caption-cutout-3a3e17d57dc166c2.png","sha256":"3a3e17d57dc166c2fa28113383061658184ea1398b7602a5255fe54bacc0393e","width":1600,"height":2000,"coordinateSpace":"source-panel","sourcePageSha256":"dea7d74f84665d733b19e61f75766a9d253f290a373d32f2d6b7e0e2a30db9d4"},"rotationLetteringOverlay":{"source":"publication/q109-sixteen-original-English-e786354da8d7fee8.png","sha256":"e786354da8d7fee87976ca47d4c1c6af070b7d0985c1984bd8d5540facf5fca5","width":1600,"height":2000,"coordinateSpace":"source-panel","sourcePageSha256":"dea7d74f84665d733b19e61f75766a9d253f290a373d32f2d6b7e0e2a30db9d4","mediaSha256":"c8a2e65683ad81cb0f41f16b09ecc787f04075e3000fd7bc0624f86e7f2886a2","frameCount":240,"hiddenNativeFrameRanges":[],"translationAwareSeparateLayer":true},"rotationPresentation":{"fullPanel":false,"hidePrintedText":false},"candidateSourceAudit":{"status":"passed-caption-mask-only-source-pixel-audit","sourcePageSha256":"dea7d74f84665d733b19e61f75766a9d253f290a373d32f2d6b7e0e2a30db9d4","sourceCropSHA256":"8343fdbcc37530b1c1cd5a37b3c1d5c2b73abc57c0724249c6d0d920910d7e3c","mediaSha256":"c8a2e65683ad81cb0f41f16b09ecc787f04075e3000fd7bc0624f86e7f2886a2","overlaySha256":"3a3e17d57dc166c2fa28113383061658184ea1398b7602a5255fe54bacc0393e","letteringSha256":"e786354da8d7fee87976ca47d4c1c6af070b7d0985c1984bd8d5540facf5fca5","proofSource":"qa/q109/sixteen-caption-source-pixel-proof.json","proofSha256":"3cd3613b80b5ae5c37a0f9a4bc395825c983cdf20d7a1f640b9b39a1cdf88dcd","sourceOutsideCaptionMasksRGBAExact":true,"staticSourceJPEGUnchanged":true,"allNativeFramesRetained":false,"retainedGeometryPublicationProofSha256":"adf8edf8f1791d26e7539f70443c127a96c34aabab0f493a43c57fc9aa748b58","rootCurrentCaptionLayerAllFramesReviewed":false,"nativeCaptionSamplesPerLanguage":3,"currentOverlayAllRGBExactToOld":false,"allOriginalAlphaBytesExact":true,"strictFrameAndExteriorPaperRGBAExact":true,"priorQ21ProofScope":"historical-original-overlay-and-retained-geometry-input-only","p039LocalMotionProofSHA256":"49fbb5080c9ba2ac84a457d32b097f3893a5bf3da7b0a59461e61b407d91ae26","p039CompactFallbackProofSHA256":"adf8edf8f1791d26e7539f70443c127a96c34aabab0f493a43c57fc9aa748b58"},"captionTransparencyAudit":{"schemaVersion":1,"scope":"Only these non-brand caption fields during activity; all Just Cuz brand pixels and original mapping retained.","proofSource":"qa/q109/sixteen-caption-source-pixel-proof.json","proofSha256":"3cd3613b80b5ae5c37a0f9a4bc395825c983cdf20d7a1f640b9b39a1cdf88dcd","targetBox":{"x":116,"y":80,"width":1368,"height":260},"oldProtectionSha256":"786f3ff716e2f772df068ab0db25a3e07d1f3574f337bfa86d204530a8632c7f","newProtectionSha256":"3a3e17d57dc166c2fa28113383061658184ea1398b7602a5255fe54bacc0393e","EnglishGlyphSha256":"e786354da8d7fee87976ca47d4c1c6af070b7d0985c1984bd8d5540facf5fca5","outsideCleanupMaskRGBAExact":true,"allBrandRGBAExact":true,"EnglishNativeSampleCompositeRGBAExact":true,"staticSourceFitPatchesStringsStylesExact":true,"browserVerified":false,"historicalSourceAudit":{"status":"passed-source-pixels-only","sourcePageSha256":"dea7d74f84665d733b19e61f75766a9d253f290a373d32f2d6b7e0e2a30db9d4","sourceCropSHA256":"8343fdbcc37530b1c1cd5a37b3c1d5c2b73abc57c0724249c6d0d920910d7e3c","mediaSha256":"609063b95fd0600ecae44df086cf8c09ad20be665efcf1c6ba49cf61e5004754","overlaySha256":"786f3ff716e2f772df068ab0db25a3e07d1f3574f337bfa86d204530a8632c7f","publicationProofSha256":"cd3b34528ed58ef371cbf55e590bea5ac00fd89ca42523c796bff6e325f23f70","sourceCaptionCoordinatesUnchanged":true,"sourceVisibleRGBMismatch":0,"all240NativeFramesRetained":true,"rootAll240PublicationActuallyViewed":true,"fullOrbitQualityAccepted":false,"evidence":["qa/refine21/039-publication-v1/immutable-publication-proof-r21v1.json","qa/refine21/039-publication-v1/root-39-publication-review.json"]},"historicalSourceAuditScope":"Q21 verifies the historical original source overlay and retained input media/geometry, not all-RGB identity of this new non-English cleaned overlay.","sourcePixelIdentity":{"currentOverlayAllRGBExactToOld":false,"sourceRGBChangedPixelsInsideOriginalEnglishGlyphMask":218861,"allOriginalAlphaBytesExact":true,"strictFrameAndExteriorPaperRGBAExact":true,"outsideCaptionMaskRGBAExact":true,"originalCyanHeaderAndWhiteFooterBandsRetained":true,"originalFeatherBackgroundFringePixelsRetained":91,"EnglishLayerRecompositionRGBAExact":true},"targetBoxes":[{"x":116,"y":80,"width":1368,"height":260},{"x":382,"y":1785,"width":826,"height":158}],"cleanupPlateBoxes":[{"x":116,"y":80,"width":1368,"height":260},{"x":382,"y":1785,"width":826,"height":158}],"preservedNonTextPolygon":[],"knownLimits":["Existing P25/P28 English caption source-pixel relocation is retained for English activity; translations retain their original existing static boxes and strings, including activity placement. Existing active text shadow and all typography/mapping remain unchanged.","P39 original full cyan header/white footer and source alpha feather remain intentional original source bands; only original English glyph RGB is cleaned inside the existing sourceFit masks. The 91 non-black partial-alpha fringe pixels remain exact. No source paper/frame or whole cyan band is cleared. Existing active text shadow and static typography remain unchanged."],"cleanupMode":"RGB-only-existing-sourceFit-glyph-mask-preserve-alpha","staticSourceFitBoxExpansion":false,"originalTypographyTranslations":[]}});
  function q117CaptionMaskSourceBound(panel, page) {
    const p = q117P39CaptionPin;
    return !!panel && !!page && window.COMIC_BOOK?.pages?.includes(page)
      && Array.isArray(page.panels) && page.panels.includes(panel) && page.id === p.pageId && page.sourcePage === p.sourcePage
      && page.sha256 === p.pageSha256 && page.width === p.pageWidth && page.height === p.pageHeight
      && panel.video === p.video && panel.sourceCrop === p.sourceCrop
      && panel.id === p.panelId && panel.quality === p.quality && panel.sourceCropSha256 === p.sourceCropSha256
      && ['bounds','actualMedia','contentMapping','protectionOverlay','rotationLetteringOverlay',
        'rotationPresentation','candidateSourceAudit','captionTransparencyAudit']
        .every(key => stableJSON(panel[key]) === stableJSON(p[key]));
  }
  // P26 alone: original cloud portals with independently timed CURRENT RGB.
  function sourceCloudPresentation(panel,page){
    const p=window.ComicPageModels?.pin(page,'p026-source-cloud'),s=panel?.sourceCloudPresentation;
    if(panel?.id!=='page-026-panel-01'||!p||!s||JSON.stringify(s)!==JSON.stringify(p)
      ||page?.sha256!==p.sourcePageSha256||panel.sourceCropSha256!==p.sourceCropSha256
      ||panel.actualMedia?.sha256!==p.mediaSha256||panel.actualMedia?.frameCount!==240
      ||panel.actualMedia?.width!==858||panel.actualMedia?.height!==1072||panel.actualMedia?.fps!==48||panel.actualMedia?.duration!==5
      ||panel.bounds?.x!==0||panel.bounds?.y!==0||panel.bounds?.width!==1600||panel.bounds?.height!==2000
      ||panel.protectionOverlay?.sha256!==p.overlaySha256||panel.rotationLetteringOverlay?.sha256!==p.englishGlyphSha256
      ||!sourceBound(panel,page))return null;
    const actual=interactionRegions(panel,page).map(r=>({id:r.id,artworkRect:r.artworkRect}));
    return JSON.stringify(actual)===JSON.stringify(p.actualRegions)?p:null;
  }
  const p026Bitmaps=new Map();
  function p026Acquire(spec){
    let record=p026Bitmaps.get(spec.sha256);
    if(!record){record={refs:0,value:null,promise:null};p026Bitmaps.set(spec.sha256,record);record.promise=(async()=>{
      const response=await fetch(spec.source+'?v='+spec.sha256.slice(0,16));if(!response.ok)throw Error('P26 mask unavailable');
      const bytes=await response.arrayBuffer(),digest=await crypto.subtle.digest('SHA-256',bytes),hex=Array.from(new Uint8Array(digest),n=>n.toString(16).padStart(2,'0')).join('');
      if(hex!==spec.sha256)throw Error('P26 mask SHA mismatch');
      const bitmap=await createImageBitmap(new Blob([bytes],{type:'image/png'}));
      if(bitmap.width!==spec.width||bitmap.height!==spec.height){bitmap.close();throw Error('P26 mask dimensions mismatch');}return bitmap;
    })().then(value=>{record.value=value;if(record.refs===0&&typeof value.close==='function')value.close();return value;}).catch(error=>{if(p026Bitmaps.get(spec.sha256)===record)p026Bitmaps.delete(spec.sha256);throw error;});}
    record.refs++;let released=false;
    return {promise:record.promise,release(){if(released)return;released=true;record.refs--;if(record.refs===0){if(p026Bitmaps.get(spec.sha256)===record)p026Bitmaps.delete(spec.sha256);if(typeof record.value?.close==='function')record.value.close();record.value=null;}}};
  }
  const p026TadaClip='polygon(evenodd,0% 0%,100% 0%,100% 100%,0% 100%,0% 0%,71.5% 16.5%,71.5% 27%,92.5% 27%,92.5% 16.5%,71.5% 16.5%,0% 0%)';
  function setSourceCloudActivity(panel,page,layer,regionId,active){
    if(!sourceCloudPresentation(panel,page)||regionId!=='cake-memory')return;
    // The original decoration is exact at rest. While its scene moves, retain
    // the native TADA only; the fixed source lettering must not duplicate it.
    for(const image of layer.querySelectorAll('.panel-protection-overlay')){
      if(image.dataset.fixedSourceProtection===panel.id)image.style.clipPath=active?p026TadaClip:'';
    }
  }
  function createSourceCloudPainter(spec,region,host,onReady){
    const r=spec.regions.find(q=>q.id===region.id),canvas=document.createElement('canvas');
    canvas.width=800;canvas.height=1000;canvas.className='panel-source-cloud-canvas';canvas.setAttribute('aria-hidden','true');
    Object.assign(canvas.style,{position:'absolute',inset:'0',width:'100%',height:'100%',maxWidth:'none',pointerEvents:'none',zIndex:'0'});host.append(canvas);
    host.style.clipPath=`polygon(${r.hitPolygon.map(([x,y])=>`${x/16}% ${y/20}%`).join(',')})`;
    host.dataset.sourceCloudPortal=r.id;
    let ready=false,disposed=false,mask=null,clean=null,lastSource=null,lastIndex=0,video=null,videoCallback=null;
    const context=canvas.getContext('2d'),scratch=document.createElement('canvas'),sc=scratch.getContext('2d');
    if(r.kind==='actor'){scratch.width=r.maskCell[0];scratch.height=r.maskCell[1];}
    else if(r.edgeBlendSourcePixels){scratch.width=800;scratch.height=1000;}
    const resources=(r.kind==='actor'?[p026Acquire(r.maskAtlas),p026Acquire(r.cleanplate)]:[p026Acquire(r.mask)]);
    const load=Promise.all(resources.map(resource=>resource.promise));
    load.then(images=>{if(disposed)return;mask=images[0];clean=images[1]||null;ready=true;host.dataset.sourceCloudReady='true';if(lastSource)paint(lastSource,lastIndex);onReady();}).catch(()=>{if(disposed)return;host.dataset.sourceCloudReady='failed';ready=false;onReady();});
    function paint(source,index){
      lastSource=source;lastIndex=Math.max(0,Math.min(239,Math.floor(index)||0));if(!ready||disposed)return;
      const sw=source.videoWidth||source.width,sh=source.videoHeight||source.height;if(!sw||!sh)return;
      context.clearRect(0,0,800,1000);context.save();context.scale(.5,.5);context.imageSmoothingEnabled=true;
      const [dx,dy,dw,dh]=r.drawRect;
      if(r.kind==='memory'){
        const [x,y,x1,y1]=r.nativeRect,sx=x/858*sw,sy=y/1072*sh,cw=(x1-x)/858*sw,ch=(y1-y)/1072*sh,q=r.sourcePlacement;
        context.drawImage(source,sx,sy,cw,ch,dx,dy,dw,dh);
        if(dx>q.x)context.drawImage(source,sx,sy,1,ch,q.x,dy,dx-q.x,dh);
        if(dx+dw<q.x+q.width)context.drawImage(source,sx+cw-1,sy,1,ch,dx+dw,dy,q.x+q.width-dx-dw,dh);
        if(dy>q.y)context.drawImage(source,sx,sy,cw,1,dx,q.y,dw,dy-q.y);
        if(dy+dh<q.y+q.height)context.drawImage(source,sx,sy+ch-1,cw,1,dx,dy+dh,dw,q.y+q.height-dy-dh);
        if(r.edgeBlendSourcePixels){
          // Only the edge strip and its first20 source-page px blend; the
          // complete native interior keeps its uniform scale and current RGB.
          const width=r.edgeBlendSourcePixels;
          for(const side of['left','right']){
            const left=side==='left'?dx:dx+dw-width,edge=side==='left'?sx:sx+cw-1;
            sc.clearRect(0,0,800,1000);sc.save();sc.scale(.5,.5);sc.drawImage(source,edge,sy,1,ch,left,dy,width,dh);
            const gradient=sc.createLinearGradient(left,0,left+width,0);gradient.addColorStop(0,side==='left'?'rgba(0,0,0,1)':'rgba(0,0,0,0)');gradient.addColorStop(1,side==='left'?'rgba(0,0,0,0)':'rgba(0,0,0,1)');
            sc.globalCompositeOperation='destination-in';sc.fillStyle=gradient;sc.fillRect(left,dy,width,dh);sc.restore();context.drawImage(scratch,0,0,1600,2000);
          }
        }
        context.globalCompositeOperation='destination-in';context.drawImage(mask,0,0,1600,2000);context.globalCompositeOperation='source-over';
      }else{
        context.drawImage(clean,0,0,1600,2000);
        const [x,y,x1,y1]=r.packCrop,[cw,ch]=r.maskCell,i=lastIndex;
        sc.clearRect(0,0,cw,ch);sc.drawImage(source,x/800*sw,y/1000*sh,(x1-x)/800*sw,(y1-y)/1000*sh,0,0,cw,ch);
        sc.globalCompositeOperation='destination-in';sc.drawImage(mask,(i%20)*cw,Math.floor(i/20)*ch,cw,ch,0,0,cw,ch);sc.globalCompositeOperation='source-over';context.drawImage(scratch,dx,dy,dw,dh);
      }
      context.restore();host.dataset.sourceCloudFrame=String(lastIndex);
    }
    function watchVideo(v){
      video=v;if(videoCallback!==null||!v.requestVideoFrameCallback)return;
      const next=(_now,meta)=>{videoCallback=null;if(disposed||v.paused)return;paint(v,Math.floor(meta.mediaTime*48+1e-6));videoCallback=v.requestVideoFrameCallback(next);};
      if(!v.paused)videoCallback=v.requestVideoFrameCallback(next);
    }
    return {canvas,get ready(){return ready;},paint,watchVideo,destroy(){disposed=true;if(video&&videoCallback!==null&&video.cancelVideoFrameCallback)video.cancelVideoFrameCallback(videoCallback);resources.forEach(resource=>resource.release());mask=null;clean=null;lastSource=null;video=null;canvas.width=0;canvas.height=0;scratch.width=0;scratch.height=0;}};
  }

  // Q190 is an exact source-presentation review, separate from native orbit acceptance.
  const q190TentPin = Object.freeze({"kind":"source-derived-local-presentation-review","proofSha256":"a9871f2c3a86fc9cf14d29ae293d835ee09447f881e5a5c8428573ca17871a8b","nativeInputSha256":"57f511da1f7db880ce9efd8b630efe1db74f3ea53ade232b9fa2ecfb63af7555","panelId":"page-062-panel-01-draft-062-tent","pageId":"page-062","sourcePageSha256":"75f589e58d0a0cad6c059c6048b6b0910b9bcffdec4e1e5690535e606c133d0b","sourceCropSha256":"e3ec79c62c8833876e395a80813f9b49bd1450a86c99b757aaacecb74fb05e3b","sourceCrop":"draft-source-panels/page-062-panel-01-draft-062-tent.png","bounds":{"x":575,"y":125,"width":510,"height":410},"artworkRect":{"x":0,"y":0,"width":510,"height":410},"videoRect":{"x":0,"y":0,"width":1020,"height":820},"backgroundColor":[194,237,249],"video":"videos-5s/page-062-tent-q190-a62c013cf5a6-5s.mp4","mediaSha256":"a62c013cf5a6ad7daf5505d3e23321084e409511e88f7aa823e69a54a0a11b26"});
  function q190SourceTentPresentation(panel, page) {
    const q = q190TentPin, r = panel?.sourceTentPresentation, m = panel?.actualMedia, c = panel?.contentMapping;
    const rect = (a,b) => a && ['x','y','width','height'].every(key => a[key] === b[key]);
    return !!(r && r.schemaVersion === 1 && r.kind === q.kind && r.proofSha256 === q.proofSha256
      && r.nativeInputSha256 === q.nativeInputSha256 && panel.id === q.panelId
      && page?.id === q.pageId && page.sourcePage === 62 && page.sha256 === q.sourcePageSha256
      && page.width === 1600 && page.height === 2000 && panel.quality === 'review-candidate'
      && panel.qualityAccepted === false && panel.video === q.video && panel.sourceCrop === q.sourceCrop
      && panel.sourceCropSha256 === q.sourceCropSha256 && !panel.protectionOverlay && !panel.mask
      && !panel.rotationTitleOverlay && !panel.rotationLetteringOverlay && !panel.regionMediaOverride
      && m?.sha256 === q.mediaSha256 && m.frameCount === 120 && m.fps === 24
      && m.width === 1020 && m.height === 820 && m.duration === 5 && m.codec === 'h264' && m.audio === false
      && rect(panel.bounds, q.bounds) && rect(c?.artworkRect,q.artworkRect) && rect(c?.videoRect,q.videoRect)
      && c.sourcePageSha256 === q.sourcePageSha256 && c.backgroundColor?.length === 3
      && c.backgroundColor.every((value,index) => value === q.backgroundColor[index]));
  }

  function displayable(panel, page) {
    if (panel?.sourceTentPresentation !== undefined) return q190SourceTentPresentation(panel,page);
    if(panel?.id==='page-026-panel-01'&&!sourceCloudPresentation(panel,page))return false;
    if (panel && panel.regionMediaOverride) return isBoundRegionMedia(panel,page);
    if (panel && !regionMediaOverrides(panel,page)) return false;
    // P39's honest mask-only audit must never fall through to generic acceptance.
    if (panel?.id === q117P39CaptionPin.panelId) return sourceBound(panel, page) && q117CaptionMaskSourceBound(panel, page);
    if(panel?.id==='page-033-panel-01')return sourceBound(panel,page)&&!!sourceScenePresentation(panel,page);
    if (eligible(panel, page)) return true;
    if (!sourceBound(panel, page)) return false;
    if (panel.quality === 'review-candidate') {
      const a = panel.candidateSourceAudit || {};
      return a.status === 'passed-source-pixels-only' && a.sourcePageSha256 === page.sha256 && a.overlaySha256 === panel.protectionOverlay.sha256;
    }
    if (panel.quality === 'reused-await-runtime') {
      const a = panel.retimingAudit || {};
      return a.status === 'passed-frame-identical-retiming' && a.mediaSha256 === panel.actualMedia.sha256 && a.sourcePageSha256 === page.sha256;
    }
    return false;
  }
  const regionTitles = Object.freeze({upper:'上方派送邀请', middle:'中间派送邀请', lower:'下方派送邀请', gasp:'两人惊讶的一幕', stomp:'Mandy跺脚，Bernie的反应', cry:'Mandy哭喊，Bernie的反应', 'bicycle-memory':'骑车回忆', 'cake-memory':'蛋糕回忆', 'rain-memory':'雨中帐篷回忆', 'thoughtful-mandy':'Mandy 想一想'});
  const externalLayoutPanelIds = new Set(["page-008-panel-01", "page-020-panel-01", "page-041-panel-01", "page-046-panel-01", "page-050-panel-01", "page-065-panel-01"]);
  const requiresInteractionLayout = panel => !!panel && externalLayoutPanelIds.has(panel.id);
  function externalInteractionLayout(panel, page) {
    const config = window.COMIC_INTERACTION_LAYOUTS;
    if (!config || config.schemaVersion !== 1 || config.coordinateSpace !== 'source-panel' || !Array.isArray(config.layouts)) return null;
    const matches = config.layouts.filter(item => item && item.panelId === panel.id);
    if (matches.length !== 1) return null;
    const entry = matches[0], v = entry.verification, overlay = panel.protectionOverlay;
    const evidenceBound = items => Array.isArray(items) && items.length > 0 && items.every(item => item && localPath(item.file) && SHA.test(item.sha256 || ''));
    if (entry.coordinateSpace !== 'source-panel' || entry.sourcePageSha256 !== page.sha256
      || entry.sourcePanelSha256 !== panel.sourceCropSha256 || entry.mediaSha256 !== panel.actualMedia.sha256
      || entry.videoSource !== panel.video || entry.overlaySha256 !== overlay.sha256
      || !entry.sourceBounds || !['x','y','width','height'].every(key => entry.sourceBounds[key] === panel.bounds[key])
      || !passed(v) || v.sourcePageSha256 !== page.sha256 || v.mediaSha256 !== panel.actualMedia.sha256
      || v.overlaySha256 !== overlay.sha256 || !evidenceBound(v.evidence) || !evidenceBound(entry.producerLayoutEvidence)
      || !entry.producerLayoutEvidence.every(item => panel.verification.bounds.evidence.includes(item.file))) return null;
    return entry;
  }
  function regionVisibleRects(region) {
    const q = region.artworkRect, c = region.topLeftCutout;
    if (!c) return [q];
    if (!c || Object.keys(c).sort().join(',') !== 'height,width' || !Number.isInteger(c.width) || !Number.isInteger(c.height)
      || c.width <= 0 || c.height <= 0 || c.width >= q.width || c.height >= q.height) return null;
    return [{x:q.x+c.width,y:q.y,width:q.width-c.width,height:c.height},
      {x:q.x,y:q.y+c.height,width:q.width,height:q.height-c.height}];
  }
  function baseInteractionRegions(panel, page) {
    // A timestamp-only conform preserves reviewed spatial coordinates. Validate
    // the original source-bound media and the explicit all-frame retiming proof;
    // never promote the new runtime or a generated replacement to accepted.
    let geometryPanel = panel;
    const prior = panel && panel.previousFourSecondMedia, audit = panel && panel.retimingAudit;
    if (!eligible(panel, page) && sourceBound(panel, page) && panel.quality === 'reused-await-runtime'
      && prior && prior.quality === 'passed' && audit && audit.status === 'passed-frame-identical-retiming'
      && audit.allDecodedFramesIdenticalInOrder === true && audit.mediaSha256 === panel.actualMedia.sha256
      && audit.sourcePageSha256 === page.sha256 && audit.sourceMediaSha256 === prior.actualMedia.sha256
      && prior.actualMedia.frameCount === panel.actualMedia.frameCount
      && prior.actualMedia.width === panel.actualMedia.width && prior.actualMedia.height === panel.actualMedia.height) {
      const original = {...panel, quality:prior.quality, video:prior.video, actualMedia:prior.actualMedia};
      if (eligible(original, page)) geometryPanel = original;
    }
    const bounds = geometryPanel && geometryPanel.verification && geometryPanel.verification.bounds;
    // A disclosed041 improvement may expose only its root-reviewed, source-bound
    // three windows while remaining a candidate. This does not grant eligibility
    // or change the acceptance gate for046 or any other panel.
    const candidateAudit = panel && panel.candidateSourceAudit, binding = candidateAudit && candidateAudit.independentLayout;
    const candidate041 = panel && panel.id === 'page-041-panel-01' && panel.quality === 'review-candidate'
      && sourceBound(panel, page) && candidateAudit.status === 'passed-source-pixels-only'
      && candidateAudit.sourcePageSha256 === page.sha256 && candidateAudit.overlaySha256 === panel.protectionOverlay.sha256
      && binding && binding.schemaVersion === 1 && binding.kind === 'root-reviewed-041-three-source-events'
      && binding.sourcePageSha256 === page.sha256 && binding.sourceCropSha256 === panel.sourceCropSha256
      && binding.mediaSha256 === panel.actualMedia.sha256 && binding.overlaySha256 === panel.protectionOverlay.sha256
      && binding.frameCount === panel.actualMedia.frameCount && binding.frameCount === 150
      && binding.rootReviewedAll450NativeAndPublicationFrames === true && binding.formalAccepted === false
      && Array.isArray(binding.nativeInputSha256) && binding.nativeInputSha256.length === 3
      && binding.nativeInputSha256.every(x => SHA.test(x)) && SHA.test(binding.guideReviewSha256 || '')
      && SHA.test(binding.publicationReviewSha256 || '') && SHA.test(binding.layoutProofSha256 || '');
    const geometryAllowed = eligible(geometryPanel, page) || candidate041;
    const external = geometryAllowed && requiresInteractionLayout(geometryPanel);
    const layout = external ? externalInteractionLayout(geometryPanel, page) : bounds && bounds.layout;
    if (!geometryAllowed || !passed(bounds) || bounds.sourcePageSha256 !== page.sha256
      || bounds.mediaSha256 !== geometryPanel.actualMedia.sha256 || !layout || layout.sourcePageSha256 !== page.sha256
      || !Array.isArray(external ? layout.regions : layout.subsceneRectangles)) return [];
    const regions = external ? layout.regions : layout.subsceneRectangles;
    if (candidate041 && (regions.map(r => r.id).join(',') !== 'gasp,stomp,cry'
      || !layout.candidateSourceBinding
      || layout.candidateSourceBinding.guideReviewSha256 !== binding.guideReviewSha256
      || !Array.isArray(layout.candidateSourceBinding.nativeInputSha256)
      || layout.candidateSourceBinding.nativeInputSha256.length !== 3
      || !binding.nativeInputSha256.every((sha, index) => sha === layout.candidateSourceBinding.nativeInputSha256[index])
      || !layout.producerLayoutEvidence.some(e => e.sha256 === binding.layoutProofSha256)
      || !layout.verification.evidence.some(e => e.sha256 === binding.publicationReviewSha256))) return [];
    if (regions.length < 2 || regions.length > 12) return [];
    const ids = new Set();
    for (const region of regions) {
      if (!region || typeof region.id !== 'string' || !/^[a-z0-9][a-z0-9_-]{0,63}$/i.test(region.id)
        || ids.has(region.id) || !rectValid(region.artworkRect, panel.bounds.width, panel.bounds.height)
        || external && (typeof region.title !== 'string' || !region.title.trim() || region.title.length > 80)) return [];
      if (!regionVisibleRects(region)) return [];
      ids.add(region.id);
    }
    for (let i = 0; i < regions.length; i++) {
      const a = regions[i].artworkRect;
      for (let j = i + 1; j < regions.length; j++) {
        const b = regions[j].artworkRect;
        if (regionVisibleRects(regions[i]).some(a => regionVisibleRects(regions[j]).some(b =>
          a.x < b.x + b.width && b.x < a.x + a.width && a.y < b.y + b.height && b.y < a.y + a.height))) return [];
      }
    }
    return regions.map(region => Object.freeze({id:region.id, title:external ? region.title : regionTitles[region.id] || '独立小画面', artworkRect:Object.freeze({...region.artworkRect}), ...(region.topLeftCutout ? {topLeftCutout:Object.freeze({...region.topLeftCutout})} : {})}))
      .sort((a, b) => a.artworkRect.y - b.artworkRect.y || a.artworkRect.x - b.artworkRect.x);
  }

  // Explicit014 child media remain candidates. They cannot inherit acceptance,
  // retiming, clocks, masks, or protection from the original121-frame parent.
  const regionMediaChildren = new WeakMap(), regionMediaParents = new WeakMap();
  const stableJSON = value => value && typeof value === 'object'
    ? Array.isArray(value) ? '[' + value.map(stableJSON).join(',') + ']'
      : '{' + Object.keys(value).sort().map(key => JSON.stringify(key)+':'+stableJSON(value[key])).join(',') + '}'
    : JSON.stringify(value);
  const deepFreeze = value => {
    if (value && typeof value === 'object' && !Object.isFrozen(value)) { Object.values(value).forEach(deepFreeze); Object.freeze(value); }
    return value;
  };
  const equalRect = (a,b) => !!a && !!b && ['x','y','width','height'].every(key => a[key] === b[key]);
  const containsRect = (a,b) => b.x >= a.x && b.y >= a.y && b.x+b.width <= a.x+a.width && b.y+b.height <= a.y+a.height;
  const intersectsRect = (a,b) => a.x < b.x+b.width && b.x < a.x+a.width && a.y < b.y+b.height && b.y < a.y+a.height;

  // Deliberately restricted to source014's reviewed sparse stomp publication.
  function validatedStompOverride(parent,page,item,base) {
    if (!item) return null;
    const b=item.binding,child=item.model,old=base.find(r=>r.id==='stomp');
    if (!b || !child || page.sha256!=='d54451a154ee9fecacced539013ed6ae5c56f41533d0d487e80d4bdf280b0030'
      || b.schemaVersion!==1 || b.kind!=='root-reviewed-014-stomp-sparse-rgba-v4'
      || b.parentPanelId!==parent.id || b.regionId!=='stomp' || b.childPanelId!=='page-014-panel-01-stomp'
      || b.sourcePageSha256!==page.sha256 || b.sourceCropSha256!==parent.sourceCropSha256
      || b.parentMediaSha256!==parent.actualMedia.sha256 || b.parentVideoSource!==parent.video || b.parentFrameCount!==121
      || b.frameCount!==120 || b.formalAccepted!==false || !b.all120NativeFramesPreservedInOrder || !b.all120RGBARecomposesApprovedV4
      || !old || !equalRect(b.originalRegionRect,old.artworkRect)
      || !equalRect(b.renderRect,{x:0,y:0,width:1600,height:2000})
      || !equalRect(b.inputRect,{x:590,y:434,width:855,height:760})
      || stableJSON(b.topLeftCutout)!=='{"height":339,"width":195}'
      || b.alphaMode!=='source-removal-union-current-foreground' || !SHA.test(b.alphaProofSha256||'') || !SHA.test(b.compositingProofSha256||'')
      || !b.parentExclusion || !localPath(b.parentExclusion.source) || !SHA.test(b.parentExclusion.sha256||'')
      || !Array.isArray(b.evidence) || b.evidence.length!==3 || !b.evidence.every(e=>localPath(e.file)&&SHA.test(e.sha256||''))
      || !b.evidence.some(e=>e.sha256===b.alphaProofSha256) || !b.evidence.some(e=>e.sha256===b.compositingProofSha256)) return null;
    const m=child.actualMedia,t=child.transparentLayer,marker=child.regionMediaOverride;
    if (!sourceBound(child,page) || child.id!==b.childPanelId || child.quality!=='review-candidate'
      || child.sourceCropSha256!==parent.sourceCropSha256 || !equalRect(child.bounds,parent.bounds)
      || child.video!==b.videoSource || !/\.webm$/i.test(child.video) || m.sha256!==b.mediaSha256
      || m.width!==1600 || m.height!==2000 || m.frameCount!==120 || m.fps!==24 || m.duration!==5 || m.alpha!==true
      || !marker || marker.schemaVersion!==1 || marker.parentPanelId!==parent.id || marker.regionId!=='stomp'
      || !t || t.schemaVersion!==1 || t.mode!==b.alphaMode || t.sourcePageSha256!==page.sha256 || t.mediaSha256!==m.sha256
      || t.frameCount!==120 || t.width!==1600 || t.height!==2000 || t.alphaProofSha256!==b.alphaProofSha256
      || !equalRect(child.contentMapping.videoRect,b.renderRect) || child.contentMapping.artworkRect!==undefined
      || !child.candidateSourceAudit || child.candidateSourceAudit.sourcePageSha256!==page.sha256
      || child.candidateSourceAudit.status!=='passed-source-pixels-only' || child.candidateSourceAudit.overlaySha256!==child.protectionOverlay.sha256
      || child.candidateSourceAudit.formalAccepted!==false || child.rotationPresentation?.hidePrintedText!==false
      || ['mask','frameCacheMapping','rotationTitleOverlay','rotationLetteringOverlay','bakedLetteringPolicy'].some(k=>child[k]!==undefined)) return null;
    return {panel:child,binding:b,region:{id:'stomp',title:old.title,artworkRect:{...b.inputRect},topLeftCutout:{...b.topLeftCutout},renderFullPageRGBA:true}};
  }
  const q66CryPin = deepFreeze({"binding":{"schemaVersion":1,"kind":"root-reviewed-014-cry-sparse-rgba-q66","parentPanelId":"page-014-panel-01","regionId":"cry","childPanelId":"page-014-panel-01-cry","sourcePageSha256":"d54451a154ee9fecacced539013ed6ae5c56f41533d0d487e80d4bdf280b0030","sourceCropSha256":"65ec67c2878306ea02df6b4e2f443c70c7a1aa823df00507f3b1b5bc92059d78","parentMediaSha256":"197cb072c779977e97ff0572181dfdc24fa26b5939e35c525ad8c0e0600c7084","parentVideoSource":"videos-5s/page-014-panel-01-ff8c4fba139f-5s.mp4","parentFrameCount":121,"mediaSha256":"00bec00f3278fa34ba622503ab5bda08f50a753fe07a08fa2089b02179318da1","videoSource":"videos-5s/page-014-cry-q66-paired120-00bec00f3278-5s.webm","frameCount":120,"nativeInputSha256":"fcf240e6af4a6bb7a29cad6edabb17e5029582eab2d25f596f5999604fab5f81","originalRegionRect":{"x":55,"y":1200,"width":735,"height":552},"inputRect":{"x":55,"y":1040,"width":1480,"height":720},"inputPolygon":[[55,1040],[590,1040],[590,1208],[1535,1208],[1535,1760],[55,1760]],"renderRect":{"x":0,"y":0,"width":1600,"height":2000},"alphaMode":"source-removal-union-current-foreground","alphaProofSha256":"a84e886872ffe84f4dc737d5a824ef772dc7610a8db406f10bff265bca144018","frameCropProofSha256":"5839ffa8a38d05712e84b5cc1670d9aa36fdbc4dd4c973c3d2de75ac1539ff38","frameCrop":{"schemaVersion":1,"kind":"source-panel-transparent-crop","panelId":"page-014-panel-01-cry","sourcePageSha256":"d54451a154ee9fecacced539013ed6ae5c56f41533d0d487e80d4bdf280b0030","sourceCropSha256":"65ec67c2878306ea02df6b4e2f443c70c7a1aa823df00507f3b1b5bc92059d78","mediaSha256":"00bec00f3278fa34ba622503ab5bda08f50a753fe07a08fa2089b02179318da1","frameCount":120,"sourceWidth":1600,"sourceHeight":2000,"x":175,"y":1077,"width":1324,"height":680,"proofSource":"qa/q66/page-014-cry-crop-proof.json","proofSha256":"5839ffa8a38d05712e84b5cc1670d9aa36fdbc4dd4c973c3d2de75ac1539ff38","all120FullCanvasRgbaExact":true},"all120NativeFramesPreservedInOrder":true,"rootReviewedNativeSource":true,"rootReviewedFinalComposite":false,"formalAccepted":false,"evidence":[{"file":"qa/q66/composition-proof.json","sha256":"a84e886872ffe84f4dc737d5a824ef772dc7610a8db406f10bff265bca144018"},{"file":"qa/q66/crop-proof.json","sha256":"5839ffa8a38d05712e84b5cc1670d9aa36fdbc4dd4c973c3d2de75ac1539ff38"}]},"model":{"id":"page-014-panel-01-cry","title":"Mandy哭喊与Bernie的反应（同景双人临时环绕）","sourceCropSha256":"65ec67c2878306ea02df6b4e2f443c70c7a1aa823df00507f3b1b5bc92059d78","bounds":{"x":0,"y":0,"width":1600,"height":2000},"quality":"review-candidate","method":"existing-Wan3-real-native-paired-orbit","video":"videos-5s/page-014-cry-q66-paired120-00bec00f3278-5s.webm","task":{"id":"20261105102103457252511","nodeId":"5844aab4-c96d-42fa-936d-3f23a223c654","model":"Wan 3.0","sourceMediaSha256":"fcf240e6af4a6bb7a29cad6edabb17e5029582eab2d25f596f5999604fab5f81","settledCredits":null},"actualMedia":{"width":1600,"height":2000,"frameCount":120,"fps":24,"fpsRational":"24/1","duration":5,"sha256":"00bec00f3278fa34ba622503ab5bda08f50a753fe07a08fa2089b02179318da1","codec":"vp9","alpha":true,"audio":false,"sizeBytes":16377060},"contentMapping":{"sourcePageSha256":"d54451a154ee9fecacced539013ed6ae5c56f41533d0d487e80d4bdf280b0030","videoRect":{"x":0,"y":0,"width":1600,"height":2000}},"protectionOverlay":{"source":"publication/page-014-cry-q66-original-lettering.png","sha256":"520d6b945a6b536c4d74492011246eed70bdbf76f36010fce4d94553c382111a","sourcePageSha256":"d54451a154ee9fecacced539013ed6ae5c56f41533d0d487e80d4bdf280b0030","coordinateSpace":"source-panel","width":1600,"height":2000},"regionMediaOverride":{"schemaVersion":1,"parentPanelId":"page-014-panel-01","regionId":"cry"},"rotationPresentation":{"hidePrintedText":false},"transparentLayer":{"schemaVersion":1,"mode":"source-removal-union-current-foreground","sourcePageSha256":"d54451a154ee9fecacced539013ed6ae5c56f41533d0d487e80d4bdf280b0030","mediaSha256":"00bec00f3278fa34ba622503ab5bda08f50a753fe07a08fa2089b02179318da1","frameCount":120,"width":1600,"height":2000,"alphaProofSha256":"a84e886872ffe84f4dc737d5a824ef772dc7610a8db406f10bff265bca144018"},"transparentFrameCrop":{"schemaVersion":1,"kind":"source-panel-transparent-crop","panelId":"page-014-panel-01-cry","sourcePageSha256":"d54451a154ee9fecacced539013ed6ae5c56f41533d0d487e80d4bdf280b0030","sourceCropSha256":"65ec67c2878306ea02df6b4e2f443c70c7a1aa823df00507f3b1b5bc92059d78","mediaSha256":"00bec00f3278fa34ba622503ab5bda08f50a753fe07a08fa2089b02179318da1","frameCount":120,"sourceWidth":1600,"sourceHeight":2000,"x":175,"y":1077,"width":1324,"height":680,"proofSource":"qa/q66/page-014-cry-crop-proof.json","proofSha256":"5839ffa8a38d05712e84b5cc1670d9aa36fdbc4dd4c973c3d2de75ac1539ff38","all120FullCanvasRgbaExact":true},"partialOrbit":{"loop":false,"complete360":false,"approxDegrees":270,"nativeFrameCount":120,"closureMissing":true},"candidateSourceAudit":{"status":"passed-source-pixels-only","sourcePageSha256":"d54451a154ee9fecacced539013ed6ae5c56f41533d0d487e80d4bdf280b0030","overlaySha256":"520d6b945a6b536c4d74492011246eed70bdbf76f36010fce4d94553c382111a","formalAccepted":false}}});
  function validatedCryOverride(parent,page,item,base) {
    const original=base.find(region=>region.id==='cry');
    if (!item || !original || stableJSON(item)!==stableJSON(q66CryPin)
      || page.id!=='page-014' || page.sha256!=='d54451a154ee9fecacced539013ed6ae5c56f41533d0d487e80d4bdf280b0030'
      || parent.id!=='page-014-panel-01' || parent.sourceCropSha256!=='65ec67c2878306ea02df6b4e2f443c70c7a1aa823df00507f3b1b5bc92059d78'
      || parent.actualMedia.sha256!=='197cb072c779977e97ff0572181dfdc24fa26b5939e35c525ad8c0e0600c7084'
      || parent.actualMedia.frameCount!==121 || parent.video!=='videos-5s/page-014-panel-01-ff8c4fba139f-5s.mp4'
      || !sourceBound(item.model,page) || item.model.quality!=='review-candidate'
      || item.model.id!=='page-014-panel-01-cry' || !equalRect(item.model.bounds,parent.bounds)
      || item.binding.regionId!=='cry' || !equalRect(item.binding.originalRegionRect,original.artworkRect)
      || !rectValid(item.binding.inputRect,parent.bounds.width,parent.bounds.height)
      || item.model.actualMedia.frameCount!==120 || item.model.actualMedia.duration!==5
      || item.model.actualMedia.width!==1600 || item.model.actualMedia.height!==2000
      || item.model.partialOrbit?.loop!==false || item.model.partialOrbit.complete360!==false) return null;
    return {panel:item.model,binding:item.binding,region:{id:'cry',title:original.title,
      artworkRect:{...item.binding.inputRect},renderFullPageRGBA:true,
      ...(Array.isArray(item.binding.inputPolygon) ? {inputPolygon:item.binding.inputPolygon} : {})}};
  }
  const q71P37Pin = Object.freeze({"pageId":"page-037","sourcePageSha256":"0d5779bef787ea954ff4cb248719b0b7dca1857869c4fb77c4b0207808503a6d","panelId":"page-037-panel-01","sourceCropSha256":"cadb1eae31d323d6ec966381dd452c3cc01ae90e8d2749fc63bc6c7a40b6a561","video":"videos-5s/page-037-h3-139-q71-0fa4c272942a-5s.mp4","mediaSha256":"0fa4c272942ac5eefefe1e08bcf88df9ef8cdf5eed5334353216152ae30e36c3","nativeInputSha256":"773916137859c01546be54f02ef98c5a6de824e5be0cf08344cd6fc9cb915611","proofSha256":"21be37346abca5b8702ac9b3c267ec0c79450edf1e23332b0752a2f80affc1c8"});
  function isBoundedOrbit(panel,page) {
    const q133Scene=sourceScenePresentation(panel,page);if(q133Scene)return q133Scene.fields.q133OrbitControl.loop===false;
    if (isTransparentCryLayer(panel,page)) return true;
    const p=q71P37Pin,a=panel?.candidateSourceAudit,m=panel?.actualMedia,o=panel?.partialOrbit;
    return !!(page?.id===p.pageId && page.sha256===p.sourcePageSha256 && panel?.id===p.panelId
      && panel.sourceCropSha256===p.sourceCropSha256 && panel.video===p.video && m?.sha256===p.mediaSha256
      && m.frameCount===124 && m.width===768 && m.height===768 && m.duration===5
      && panel.quality==='review-candidate' && displayable(panel,page) && sourceBound(panel,page) && o?.loop===false && o.complete360===false
      && panel.task?.nativeMediaSha256===p.nativeInputSha256 && a?.proofSha256===p.proofSha256);
  }

  function isTransparentCryLayer(panel,page) {
    return !!(panel && panel.id==='page-014-panel-01-cry' && panel.transparentLayer
      && panel.partialOrbit?.loop===false && panel.partialOrbit.complete360===false && isBoundRegionMedia(panel,page));
  }

  function isTransparentStompLayer(panel,page) {
    return !!(panel && panel.id==='page-014-panel-01-stomp' && panel.transparentLayer && isBoundRegionMedia(panel,page));
  }

  // Exact delivery alternatives for two existing source-bound transparent children.
  // Canonical RGBA proofs are historical; current distribution RGB is lossy.
  function q140TransparentEntryBinding(panel,page,entry) {
    const id=panel?.id;
    if (id!=='page-014-panel-01-stomp' && id!=='page-014-panel-01-cry') return true;
    const pin=window.ComicPageModels?.pin(page,'q140-transparent-delivery')?.[id];
    if (!pin) return false;
    if (page?.id!=='page-014' || page.sha256!=='d54451a154ee9fecacced539013ed6ae5c56f41533d0d487e80d4bdf280b0030') return false;
    return ['canonicalHD','deliveryHD','canonicalPreview','deliveryPreview'].some(k=>stableJSON(entry)===stableJSON(pin[k]));
  }
  // This optional transport crop removes only fully transparent padding.
  // It remains tied to the reviewed child, its native media and an all120-frame
  // canonical exact-RGBA reconstruction proof. Q140 separately pins lossy delivery
  // with byte-exact alpha. Static source coordinates never change.
  function transparentFrameCrop(panel,page,entry) {
    const spec=entry && entry.transparentFrameCrop,declared=panel && panel.transparentFrameCrop;
    if (spec===undefined && declared===undefined) return null;
    if (!spec || !declared || !(isTransparentStompLayer(panel,page) || isTransparentCryLayer(panel,page))
      || spec.schemaVersion!==1 || spec.kind!=='source-panel-transparent-crop'
      || stableJSON(spec)!==stableJSON(declared) || spec.panelId!==panel.id
      || spec.sourcePageSha256!==page.sha256 || spec.sourceCropSha256!==panel.sourceCropSha256
      || spec.mediaSha256!==panel.actualMedia.sha256 || spec.frameCount!==panel.actualMedia.frameCount
      || spec.sourceWidth!==panel.actualMedia.width || spec.sourceHeight!==panel.actualMedia.height
      || !localPath(spec.proofSource) || !SHA.test(spec.proofSha256||'') || spec.all120FullCanvasRgbaExact!==true
      || !['x','y','width','height'].every(k=>Number.isSafeInteger(spec[k]))
      || !rectValid(spec,spec.sourceWidth,spec.sourceHeight)
      || entry.width!==spec.width || entry.height!==spec.height
      || entry.sourcePageSha256!==page.sha256 || entry.mediaSha256!==spec.mediaSha256
      || entry.sourceWidth!==spec.sourceWidth || entry.sourceHeight!==spec.sourceHeight
      || entry.frameCount!==spec.frameCount || entry.videoSource!==panel.video) return false;
    const authority=regionMediaChildren.get(panel);
    const resolved=authority && regionMediaOverrides(authority.parent,page)?.find(item=>item.panel===panel);
    if (!resolved || resolved.binding.frameCropProofSha256!==spec.proofSha256
      || stableJSON(resolved.binding.frameCrop)!==stableJSON(spec)) return false;
    if (!q140TransparentEntryBinding(panel,page,entry)) return false;
    if (entry.distributionTextureAudit !== undefined) {
      const pin=window.ComicPageModels?.pin(page,'q140-transparent-delivery')?.[panel.id];
      if (!pin || stableJSON(entry)!==stableJSON(pin.deliveryHD)) return false;
      return deepFreeze({...spec,canonicalAll120FullCanvasRgbaExact:spec.all120FullCanvasRgbaExact,
        all120FullCanvasRgbaExact:false,canonicalCropProofHistoricalOnly:true,
        currentDeliveryRGBLossy:true,currentDeliveryAlphaExactToCanonical:true,
        currentDeliveryRGBAExactToCanonical:false,distributionTextureAudit:entry.distributionTextureAudit});
    }
    return deepFreeze({...spec});
  }

  function regionMediaOverrides(parent, page) {
    if (!parent) return [];
    const declared = parent.regionMediaOverrides, config = window.COMIC_INTERACTION_LAYOUTS;
    const anchors = config && Array.isArray(config.regionMediaOverrides)
      ? config.regionMediaOverrides.filter(item => item && item.binding && item.binding.parentPanelId === parent.id) : [];
    if (declared === undefined) return anchors.length ? null : [];
    const invalid = () => null;
    if (parent.id !== 'page-014-panel-01' || !page || page.id !== 'page-014'
      || !Array.isArray(page.panels) || !page.panels.includes(parent)
      || !sourceBound(parent,page) || !Array.isArray(declared) || ![1,2,3].includes(declared.length)
      || !config || config.schemaVersion !== 1 || !Array.isArray(config.regionMediaOverrides)) return invalid();
    if (anchors.length !== declared.length || stableJSON(declared) !== stableJSON(anchors)) return invalid();
    const item = declared.find(item=>item?.binding?.regionId==='gasp'), b = item && item.binding, child = item && item.model;
    const base = baseInteractionRegions(parent,page), old = base.find(item => item.id === 'gasp');
    if (!b || !child || base.length !== 3 || base.map(item => item.id).join(',') !== 'gasp,stomp,cry'
      || b.schemaVersion !== 1 || b.kind !== 'root-reviewed-014-gasp-independent-media'
      || b.parentPanelId !== parent.id || b.regionId !== 'gasp' || b.childPanelId !== 'page-014-panel-01-gasp'
      || b.sourcePageSha256 !== page.sha256 || b.sourceCropSha256 !== parent.sourceCropSha256
      || b.parentMediaSha256 !== parent.actualMedia.sha256 || b.parentVideoSource !== parent.video
      || b.parentFrameCount !== parent.actualMedia.frameCount || b.parentFrameCount !== 121
      || b.rootReviewedAll150PublicationFrames !== true || b.all150NativeFramesPreservedInOrder !== true
      || b.formalAccepted !== false || !equalRect(b.originalRegionRect,old.artworkRect)
      || !rectValid(b.regionRect,parent.bounds.width,parent.bounds.height) || !containsRect(b.regionRect,old.artworkRect)
      || base.some(item => item.id !== 'gasp' && intersectsRect(b.regionRect,item.artworkRect))) return invalid();
    const hashes = ['nativeInputSha256','publicationProofSha256','layoutProofSha256','titleFadeProofSha256','rootPublicationReviewSha256','guideReviewSha256'];
    if (!hashes.every(key => SHA.test(b[key] || '')) || !Array.isArray(b.evidence) || b.evidence.length !== 6
      || !b.evidence.every(item => item && localPath(item.file) && SHA.test(item.sha256 || ''))
      || new Set(b.evidence.map(item => item.file)).size !== 6
      || !hashes.slice(1).every(key => b.evidence.some(item => item.sha256 === b[key]))
      || !Array.isArray(b.allActualActorBounds) || b.allActualActorBounds.length !== 4
      || !b.allActualActorBounds.every(Number.isSafeInteger)) return invalid();
    const box=b.allActualActorBounds;
    if (!rectValid({x:box[0],y:box[1],width:box[2]-box[0],height:box[3]-box[1]},parent.bounds.width,parent.bounds.height)
      || !containsRect(b.regionRect,{x:box[0],y:box[1],width:box[2]-box[0],height:box[3]-box[1]})) return invalid();
    const m=child.actualMedia, marker=child.regionMediaOverride, title=child.bakedLetteringPolicy;
    if (child.id !== b.childPanelId || !marker || marker.schemaVersion !== 1 || marker.parentPanelId !== parent.id || marker.regionId !== b.regionId
      || !sourceBound(child,page) || child.quality !== 'review-candidate' || child.sourceCropSha256 !== parent.sourceCropSha256
      || !equalRect(child.bounds,parent.bounds) || child.video !== b.videoSource || m.sha256 !== b.mediaSha256
      || m.frameCount !== b.frameCount || m.frameCount !== 150 || m.width !== 864 || m.height !== 1080 || m.fps !== 30 || m.duration !== 5
      || ['retimingAudit','previousFourSecondMedia','viewPhaseMap','mask','frameCacheMapping','rotationTitleOverlay','rotationLetteringOverlay'].some(key => child[key] !== undefined)
      || !child.contentMapping || child.contentMapping.sourcePageSha256 !== page.sha256
      || !equalRect(child.contentMapping.videoRect,{x:0,y:0,width:m.width,height:m.height})
      || child.contentMapping.artworkRect !== undefined || child.contentMapping.edgeExtension !== undefined
      || !child.candidateSourceAudit || child.candidateSourceAudit.status !== 'passed-source-pixels-only'
      || child.candidateSourceAudit.sourcePageSha256 !== page.sha256 || child.candidateSourceAudit.overlaySha256 !== child.protectionOverlay.sha256
      || child.candidateSourceAudit.formalAccepted !== false || !child.rotationPresentation || child.rotationPresentation.hidePrintedText !== false
      || !title || title.kind !== 'baked-native-lettering-no-runtime-duplicate'
      || title.sourcePageSha256 !== page.sha256 || title.mediaSha256 !== m.sha256 || title.frameCount !== 150
      || title.coordinateSpace !== 'source-panel' || title.width !== child.bounds.width || title.height !== child.bounds.height
      || !localPath(title.sourceOriginalGlyph) || !SHA.test(title.sourceOriginalGlyphSha256 || '')
      || title.sourceOriginalGlyphSha256 !== b.titleGlyphSha256 || title.fadeProofSha256 !== b.titleFadeProofSha256
      || !Array.isArray(title.nativeFrameOpacity) || title.nativeFrameOpacity.length !== 150
      || !title.nativeFrameOpacity.every((value,index) => value === (index>=16 && index<=134 ? 0 : index>=12 && index<=15 ? (16-index)/5 : index>=135 && index<=138 ? (index-134)/5 : 1))
      || stableJSON(title.hiddenNativeFrameRanges) !== '[[16,134]]') return invalid();
    const stompItem=declared.find(item=>item?.binding?.regionId==='stomp');
    const stomp=stompItem ? validatedStompOverride(parent,page,stompItem,base) : null;
    const cryItem=declared.find(item=>item?.binding?.regionId==='cry');
    const cry=cryItem ? validatedCryOverride(parent,page,cryItem,base) : null;
    if (stompItem && !stomp || cryItem && !cry || cry && !stomp
      || declared.length!==1+Number(!!stomp)+Number(!!cry)
      || new Set(declared.map(item=>item?.binding?.regionId)).size!==declared.length) return invalid();
    // Cache only when both independent declarations and the source-bound parent
    // still match. Mutation after resolution invalidates existing child handles.
    const signature=stableJSON({declared,source:page.sha256,crop:parent.sourceCropSha256,video:parent.video,media:parent.actualMedia,base});
    const prior=regionMediaParents.get(parent);
    if (prior && prior.signature === signature && prior.page === page) return prior.items;
    const normalized=deepFreeze(JSON.parse(JSON.stringify(child)));
    const binding=deepFreeze(JSON.parse(JSON.stringify(b)));
    const region=deepFreeze({id:'gasp',title:old.title,artworkRect:{...b.regionRect}});
    const resolved=Object.freeze({panel:normalized,region,exclusionRect:region.artworkRect,binding});
    const additions=stomp ? [Object.freeze({panel:deepFreeze(JSON.parse(JSON.stringify(stomp.panel))),region:deepFreeze(stomp.region),binding:deepFreeze(JSON.parse(JSON.stringify(stomp.binding)))})] : [];
    if (cry) additions.push(Object.freeze({panel:deepFreeze(JSON.parse(JSON.stringify(cry.panel))),
      region:deepFreeze(cry.region),binding:deepFreeze(JSON.parse(JSON.stringify(cry.binding)))}));
    const items=Object.freeze([resolved,...additions]);
    for (const childItem of items) regionMediaChildren.set(childItem.panel,{parent,page,signature});
    regionMediaParents.set(parent,{page,signature,items});
    return items;
  }
  function isBoundRegionMedia(panel,page) {
    const authority=panel && regionMediaChildren.get(panel);
    if (!authority || authority.page !== page) return false;
    const current=regionMediaOverrides(authority.parent,page);
    return !!current && current.some(item => item.panel === panel);
  }
  function regionMediaCacheBinding(panel,page,entry) {
    const child=panel && panel.regionMediaOverride;
    const binding=entry && entry.regionMediaOverrideBinding;
    if (!child && binding === undefined) return true;
    if (!isBoundRegionMedia(panel,page)) return false;
    const authority=regionMediaChildren.get(panel);
    const items=regionMediaOverrides(authority.parent,page);
    return stableJSON(binding) === stableJSON(items.find(item=>item.panel===panel)?.binding)
      && q140TransparentEntryBinding(panel,page,entry);
  }
  function interactionRegions(panel,page) {
    if (panel && panel.regionMediaOverride) {
      if (!isBoundRegionMedia(panel,page)) return [];
      const authority=regionMediaChildren.get(panel);
      return [regionMediaOverrides(authority.parent,page).find(item=>item.panel===panel).region];
    }
    const base=baseInteractionRegions(panel,page);
    const items=regionMediaOverrides(panel,page);
    return items ? items.length ? base.map(region => items.find(item => item.region.id === region.id)?.region || region) : base : [];
  }
  function excludeRegionMedia(element,parent,page) {
    const items=regionMediaOverrides(parent,page);
    if (!items || !items.length) return;
    // All three Q66 source014 scenes have independent media. Its obsolete
    // parent cannot act as a grey-room backdrop or fixed old actor overlay.
    if (parent.id==='page-014-panel-01' && items.some(item=>item.region.id==='cry')) {
      element.hidden=true;element.style.display='none';return;
    }
    // Source014's old parent supplies only the existing lower cry group.
    // A full-page old-room backdrop would leak around the sparse stomp layer.
    if (parent.id==='page-014-panel-01' && items.some(item=>item.region.renderFullPageRGBA)
      && element.dataset.backgroundOnly==='true') {
      const b=parent.bounds,points=[[55,1050],[590,1050],[590,1200],[790,1200],[790,1208],[1535,1208],[1535,1752],[55,1752]];
      element.style.clipPath=`polygon(${points.map(([x,y])=>`${x/b.width*100}% ${y/b.height*100}%`).join(',')})`;
      element.dataset.cryBackdropScope=JSON.stringify({rects:[[55,1050,535,150],[55,1200,735,552],[790,1208,745,544]],sourcePageSha256:page.sha256});
      return;
    }
    // Full source outer contour followed by the same source-bound inner hole.
    // CSS evenodd clips the old background/protection, never the new actors.
    const q=items[0].exclusionRect,b=parent.bounds;
    const x=q.x/b.width*100,y=q.y/b.height*100,r=(q.x+q.width)/b.width*100,t=(q.y+q.height)/b.height*100;
    element.style.clipPath=`polygon(evenodd,0% 0%,100% 0%,100% 100%,0% 100%,0% 0%,${x}% ${y}%,${r}% ${y}%,${r}% ${t}%,${x}% ${t}%,${x}% ${y}%)`;
    element.dataset.regionMediaExclusion=JSON.stringify(q);
    const sparse=items.find(item=>item.region.id==='cry') || items.find(item=>item.region.renderFullPageRGBA);
    if (sparse) {
      const url=sparse.binding.parentExclusion.source;
      element.style.maskImage=`url("${url}")`;element.style.webkitMaskImage=element.style.maskImage;
      element.style.maskSize='100% 100%';element.style.webkitMaskSize='100% 100%';
      element.style.maskRepeat='no-repeat';element.style.webkitMaskRepeat='no-repeat';element.style.maskMode='alpha';
      element.dataset.sparseRegionExclusion=url;
    }
  }

  function protectionFallback(spec) {
    const packed = spec && window.COMIC_PROTECTION_FALLBACKS?.[spec.source];
    if (!packed || packed.originalSHA256 !== spec.sha256 || packed.width !== spec.width || packed.height !== spec.height ||
      !SHA.test(packed.sha256 || '') || packed.source !== `publication-png/protection-${packed.sha256}.png`) return spec;
    return {...spec, source:packed.source, sha256:packed.sha256};
  }

  function protectionSources(panel, page) {
    const spec = panel.protectionOverlay, assets = window.ComicPageModels?.protection?.(page);
    if (!spec) return [];
    const fallback = protectionFallback(spec).source;
    if (!assets || assets.schemaVersion !== 1 || assets.encoding !== 'webp-lossless-exact' || !Array.isArray(assets.entries)) return [fallback];
    const matches = assets.entries.filter(entry => entry && entry.panelId === panel.id);
    if (matches.length !== 1) return [fallback];
    const entry = matches[0];
    if (entry.sourcePageSha256 !== page.sha256 || entry.mediaSha256 !== panel.actualMedia.sha256 || entry.originalSource !== spec.source || entry.originalSha256 !== spec.sha256
      || entry.width !== spec.width || entry.height !== spec.height || !SHA.test(entry.sha256 || '') || !SHA.test(entry.rgbaSha256 || '')
      || typeof entry.source !== 'string' || !/^publication-webp\/[a-z\d][a-z\d._-]*\.webp$/i.test(entry.source)
      || !(entry.source.endsWith(`-${entry.sha256.slice(0, 12)}.webp`) || entry.source.endsWith(`-${entry.sha256}.webp`))) return [fallback];
    return [`${entry.source}?sha256=${entry.sha256}`, fallback];
  }
  // Recover a transient failure of the canonical protection image once per load.
  const protectionRecovery = new WeakMap();
  function cancelProtectionRecovery(image) {
    const job = protectionRecovery.get(image);
    if (!job) return;
    protectionRecovery.delete(image);
    job.abort();
    if (job.url) URL.revokeObjectURL(job.url);
  }

  function recoverProtectionImage(image, spec) {
    spec = protectionFallback(spec);
    if (!spec || !SHA.test(spec.sha256 || '') || !window.crypto?.subtle ||
        typeof URL.createObjectURL !== 'function') return null;
    const source = new URL(spec.source, document.baseURI);
    const extension = /\.(png|webp)$/i.exec(source.pathname)?.[1]?.toLowerCase();
    if (!extension || source.origin !== location.origin) return null;

    cancelProtectionRecovery(image);
    const controller = new AbortController();
    let stop;
    const cancelled = new Promise(resolve => { stop = resolve; });
    const abort = () => { controller.abort(); stop(null); };
    const job = {abort, url: null};
    protectionRecovery.set(image, job);
    const timer = setTimeout(abort, 15000);
    const work = (async () => {
      const response = await fetch(source, {cache: 'reload', signal: controller.signal, priority: 'high'});
      const limit = 12 * 1024 * 1024;
      if (!response.ok || Number(response.headers.get('content-length')) > limit) return null;
      const bytes = await response.arrayBuffer();
      if (!bytes.byteLength || bytes.byteLength > limit || controller.signal.aborted) return null;
      const digest = await crypto.subtle.digest('SHA-256', bytes);
      const actual = Array.from(new Uint8Array(digest), byte => byte.toString(16).padStart(2, '0')).join('');
      return actual === spec.sha256.toLowerCase() ? new Blob([bytes], {type: `image/${extension}`}) : null;
    })().catch(() => null);
    return Promise.race([work, cancelled]).then(blob => {
      if (protectionRecovery.get(image) !== job) return null;
      if (blob && !controller.signal.aborted) {
        try {
          job.url = URL.createObjectURL(blob);
          return job.url;
        } catch (_) {}
      }
      cancelProtectionRecovery(image);
      return null;
    }).finally(() => clearTimeout(timer));
  }

  function createFixedProtectionOverlay(panel, page, layer) {
    if (!sourceBound(panel, page)) return null;
    const textPresentation = panel.rotationPresentation || {};
    const hideText = typeof textPresentation.hidePrintedText === 'boolean' ? textPresentation.hidePrintedText
      : !!(window.COMIC_BOOK.rotationPolicy && window.COMIC_BOOK.rotationPolicy.hidePrintedTextDuringRotation);
    if (hideText) return null;
    const spec = panel.protectionOverlay, b = panel.bounds;
    const image = document.createElement('img');
    image.className = 'panel-protection-overlay'; image.alt = ''; image.draggable = false; image.setAttribute('aria-hidden', 'true');
    image.dataset.fixedSourceProtection = panel.id; image.width = spec.width; image.height = spec.height;
    Object.assign(image.style, {inset:'auto', left:`${b.x / page.width * 100}%`, top:`${b.y / page.height * 100}%`, width:`${b.width / page.width * 100}%`, height:`${b.height / page.height * 100}%`, zIndex:'2', opacity:'0'});
    excludeRegionMedia(image,panel,page);
    const sources = protectionSources(panel, page);
    let sourceIndex = 0, disposed = false, usingMask = false, recoveryUsed = false;
    image.fetchPriority = 'high'; image.decoding = 'async';
    const unavailable = (mayRecover = false) => {
      if (disposed) return;
      if (usingMask) {
        usingMask = false;
        window.ComicSourceMasks?.cancel(image);
        image.src = sources[0];
      } else if (++sourceIndex < sources.length) image.src = sources[sourceIndex];
      else {
        const pending = mayRecover && !recoveryUsed && recoverProtectionImage(image, spec);
        if (!pending) { cancelProtectionRecovery(image); image.remove(); return; }
        recoveryUsed = true;
        void pending.then(url => {
          if (disposed) return;
          if (url) image.src = url;
          else image.remove();
        });
      }
    };
    image.onload = () => { if (disposed) return; if (image.naturalWidth === spec.width && image.naturalHeight === spec.height) image.style.opacity = '1'; else unavailable(); };
    image.onerror = () => unavailable(true); layer.append(image);
    const pending = window.ComicSourceMasks?.load(panel, page, 'protectionOverlay', image);
    if (!pending) image.src = sources[0];
    else void pending.then(url => {
      if (disposed) return;
      usingMask = !!url;
      image.src = url || sources[0];
    });
    return {pause() {}, reset() {}, destroy() { disposed = true; cancelProtectionRecovery(image); window.ComicSourceMasks?.cancel(image); image.onload = null; image.onerror = null; image.removeAttribute('src'); image.remove(); }};
  }
  // A reviewed editorial whole-view crop. It is not a new camera or actor transform.
  const q94ViewPin = Object.freeze({"schemaVersion":1,"kind":"source-bound-whole-scene-safe-framing","panelId":"page-037-panel-01","sourcePageSha256":"0d5779bef787ea954ff4cb248719b0b7dca1857869c4fb77c4b0207808503a6d","mediaSha256":"0fa4c272942ac5eefefe1e08bcf88df9ef8cdf5eed5334353216152ae30e36c3","nativeInputSha256":"773916137859c01546be54f02ef98c5a6de824e5be0cf08344cd6fc9cb915611","frameCount":124,"proofSha256":"8f49025652f62480ce1ee5da789914a874cd79b2d18bc3bacaaf124d02f843ed","scales":[1.0,1.0,1.0,1.0,1.0,1.0,1.0,1.0,1.0,1.0,1.0,1.0,1.0,1.0,1.0,1.0,1.0,1.0,1.0,1.0,1.0,1.0,1.0,1.0,1.0026109660574412,1.0066109660574412,1.0106109660574412,1.0146109660574412,1.0186109660574412,1.0226109660574412,1.0266109660574412,1.0306109660574412,1.0346109660574412,1.0386109660574412,1.042610966057441,1.046610966057441,1.050610966057441,1.054610966057441,1.058610966057441,1.062610966057441,1.066610966057441,1.070610966057441,1.074610966057441,1.078605174423356,1.0825733952827792,1.0864588734129281,1.0901375591018676,1.0934099879015944,1.096054105165268,1.0979321101343684,1.099072672396896,1.099652256144023,1.0998943584795096,1.09997585988524,1.0999969188506669,1.1,1.1,1.1,1.1,1.1,1.1,1.1,1.1,1.1,1.1,1.1,1.1,1.1,1.1,1.1,1.1,1.1,1.1,1.0999911272165817,1.0999471618939967,1.099795103941,1.0993837452474495,1.0984879489935995,1.0968873002485953,1.0944879489936,1.0913837452474495,1.087795103941,1.0839471618939966,1.0799911272165814,1.0759999999999998,1.0719999999999998,1.0679999999999998,1.0639999999999998,1.0599999999999998,1.0559999999999998,1.0519999999999998,1.0479999999999998,1.0439999999999998,1.0399999999999998,1.036,1.032,1.028,1.024,1.02,1.016,1.012,1.008,1.004,1.0,1.0,1.0,1.0,1.0,1.0,1.0,1.0,1.0,1.0,1.0,1.0,1.0,1.0,1.0,1.0,1.0,1.0,1.0,1.0,1.0],"sourceCropSha256":"cadb1eae31d323d6ec966381dd452c3cc01ae90e8d2749fc63bc6c7a40b6a561","sourceOnlyProofSha256":"21be37346abca5b8702ac9b3c267ec0c79450edf1e23332b0752a2f80affc1c8"});
  function editorialViewFraming(panel,page) {
    const spec=panel?.editorialFraming,p=q94ViewPin;
    if (!isBoundedOrbit(panel,page) || panel?.id!==p.panelId || page?.sha256!==p.sourcePageSha256
      || panel.sourceCropSha256!==p.sourceCropSha256 || panel.actualMedia.sha256!==p.mediaSha256
      || panel.task?.nativeMediaSha256!==p.nativeInputSha256 || panel.candidateSourceAudit?.proofSha256!==p.sourceOnlyProofSha256
      || !spec || spec.schemaVersion!==1 || spec.kind!==p.kind || spec.panelId!==p.panelId
      || spec.sourcePageSha256!==p.sourcePageSha256 || spec.mediaSha256!==p.mediaSha256
      || spec.nativeInputSha256!==p.nativeInputSha256 || spec.frameCount!==124 || spec.proofSha256!==p.proofSha256
      || JSON.stringify(spec.scales)!==JSON.stringify(p.scales)) return null;
    const values=Object.freeze([...p.scales]);
    const scaleAt=index => values[Math.max(0,Math.min(123,Math.floor(Number(index)||0)))];
    return Object.freeze({scaleAt,sourceRect(index,width,height) {
      const scale=scaleAt(index),w=width/scale,h=height/scale;
      return {x:(width-w)/2,y:height-h,width:w,height:h,scale};
    }});
  }

  const q97P78ReferencePin=Object.freeze({"panelId":"page-078-panel-01","sourcePageSha256":"5eda866e5e8b7b23aa44756753f7d1de17145aec4d4caca39250b4485d6619ba","sourceCropSha256":"6b84592e731d09d6c298b085ce4c3ebca533bff46a9e8f22d5e2637d7b4ff64a","mediaSha256":"5c733921a058180fe2e5fb981ace0c8480787c1c8c0653417fa09cfe46974866","frameCount":300,"proofSha256":"e8dc7593d0eed36b07cbd424888a36e8b0a9e09b71bb4ce46e017a753aa1acd5"});
  function sourceReferenceFrameAtRest(panel,page) {
    const p=q97P78ReferencePin,s=panel?.sourceReferenceFrameAtRest,m=panel?.actualMedia;
    return !!(displayable(panel,page) && panel.id===p.panelId && page?.sha256===p.sourcePageSha256 && panel.sourceCropSha256===p.sourceCropSha256 && m?.sha256===p.mediaSha256 && m.frameCount===p.frameCount && panel.candidateSourceAudit?.proofSha256===p.proofSha256 && s?.schemaVersion===1 && s.kind==='source-reference-frame-at-rest' && s.referenceFrame===0 && s.firstActivityFrame===1 && s.proofSha256===p.proofSha256 && s.inputFramePayloadsAndTimingUnchanged===true);
  }
  // Only this reviewed P77 retiming may reuse the existing current-frame edge painter.
  // Its original quality/audit stay intact; no generic eligibility or media transform changes.
  const q122RetimedEdgePin = deepFreeze({"pageId":"page-077","sourcePageSha256":"0b0eaf03dc06e390bf1b664292048cb975e56c165f6bbd6631fd73c78ba76193","pageWidth":1600,"pageHeight":2000,"panelId":"page-077-panel-01","sourceCropSha256":"03b23a196093dc37b6fb05867fee3c8d5564dccf7bb8b7db2a42a73003013404","quality":"reused-await-runtime","video":"videos-5s/page-077-panel-01-a823ec3294cd-5s.mp4","bounds":{"x":0,"y":0,"width":1600,"height":980},"actualMedia":{"width":1108,"height":832,"frameCount":180,"fps":36.0,"fpsRational":"36/1","duration":5.0,"sha256":"37af19fb14b0ace71e9a02dcff2a1c4286926323121e0e02d00197d3f3de8a98","codec":"h264","audio":false,"sizeBytes":3097961},"contentMapping":{"mode":"entire-video-contained-no-crop","sourcePageSha256":"0b0eaf03dc06e390bf1b664292048cb975e56c165f6bbd6631fd73c78ba76193","videoRect":{"x":0,"y":0,"width":1108,"height":832},"artworkRect":{"x":30,"y":180,"width":1540,"height":770},"backgroundColor":[255,255,255],"edgeExtension":{"schemaVersion":1,"mode":"current-frame-edges","sourcePageSha256":"0b0eaf03dc06e390bf1b664292048cb975e56c165f6bbd6631fd73c78ba76193","mediaSha256":"37af19fb14b0ace71e9a02dcff2a1c4286926323121e0e02d00197d3f3de8a98","sourceWidth":1108,"sourceHeight":832,"artworkRect":{"x":30,"y":180,"width":1540,"height":770},"publicationProofSha256":"abaf7043ae07009193b209fbeec5d1f3412d4ca53e210e233b1295277be1614f"}},"rotationPresentation":{"hidePrintedText":false},"protectionOverlay":{"source":"publication/q115-caption-clean-8ad63b8f818a2669.png","width":1600,"height":980,"sha256":"8ad63b8f818a2669c860c08def180248852ec5bbe37eaada11efe58f2cc5d4d0","coordinateSpace":"source-panel","sourcePageSha256":"0b0eaf03dc06e390bf1b664292048cb975e56c165f6bbd6631fd73c78ba76193"},"rotationLetteringOverlay":{"source":"publication/q115-original-English-7ca8159cc6e8422f.png","sha256":"7ca8159cc6e8422f40389a0e4a5a392f8651a9ef545452d456e7bdb1eda96d0c","width":1600,"height":980,"coordinateSpace":"source-panel","sourcePageSha256":"0b0eaf03dc06e390bf1b664292048cb975e56c165f6bbd6631fd73c78ba76193","mediaSha256":"37af19fb14b0ace71e9a02dcff2a1c4286926323121e0e02d00197d3f3de8a98","frameCount":180,"hiddenNativeFrameRanges":[],"translationAwareSeparateLayer":true},"retimingAudit":{"status":"passed-frame-identical-retiming","mediaSha256":"37af19fb14b0ace71e9a02dcff2a1c4286926323121e0e02d00197d3f3de8a98","sourcePageSha256":"0b0eaf03dc06e390bf1b664292048cb975e56c165f6bbd6631fd73c78ba76193","sourceMediaSha256":"a823ec3294cde054ddce69bd128aa1b501ead32ddfaa7986895b035e3a942a63","allDecodedFramesIdenticalInOrder":true,"finalDurationSeconds":5,"evidence":["../refinement-20261027/refine11/retiming-proofs/page-077-panel-01.json"]}});
  function q122RetimedEdgeBinding(panel,page) {
    const p=q122RetimedEdgePin;
    return !!(panel && page && window.COMIC_BOOK?.pages?.includes(page)
      && page.id===p.pageId && page.sha256===p.sourcePageSha256
      && page.width===p.pageWidth && page.height===p.pageHeight
      && panel.id===p.panelId && panel.sourceCropSha256===p.sourceCropSha256
      && panel.quality===p.quality && panel.video===p.video
      && ['bounds','actualMedia','contentMapping','rotationPresentation','protectionOverlay',
        'rotationLetteringOverlay','retimingAudit'].every(k=>stableJSON(panel[k])===stableJSON(p[k]))
      && panel.mask===undefined && panel.frameCacheMapping===undefined
      && panel.viewPhaseMap===undefined && panel.editorialFraming===undefined);
  }
  function frameEdgeExtension(panel, page) {
    const spec = panel && panel.contentMapping && panel.contentMapping.edgeExtension;
    const rect = panel && panel.contentMapping && panel.contentMapping.artworkRect;
    const media = panel && panel.actualMedia, bounds = panel && panel.bounds;
    if (!spec || !displayable(panel, page) || (panel.quality !== 'review-candidate' && !q122RetimedEdgeBinding(panel,page))
      || spec.schemaVersion !== 1 || spec.mode !== 'current-frame-edges'
      || spec.sourcePageSha256 !== page.sha256 || spec.mediaSha256 !== media.sha256
      || spec.sourceWidth !== media.width || spec.sourceHeight !== media.height
      || !rectValid(rect, bounds.width, bounds.height)
      || !spec.artworkRect || !['x','y','width','height'].every(k => spec.artworkRect[k] === rect[k])
      || panel.rotationPresentation && panel.rotationPresentation.fullPanel
      || !SHA.test(spec.publicationProofSha256 || '')) return null;
    return Object.freeze({...rect});
  }
  // Q133 P33 only. The exact real-media pin is injected after native review.
  const p033ScenePin=deepFreeze({"pageId":"page-033","sourcePage":33,"pageSHA256":"6b1c5cc8e98bd9035e3ded0855f165b7c745e9ba3be7bc52c01146847ac18eff","pageWidth":1600,"pageHeight":2000,"panelId":"page-033-panel-01","quality":"review-candidate","video":"videos-4s/page-033-wan-q133-8e340c3c23cf-4s.mp4","sourceCrop":"source-panels/page-033-panel-01.png","sourceCropSha256":"ca2fee6aa8179f6cc16da4611341a550ca7799723d03c43ec6cbb1b7f1e295e5","fields":{"bounds":{"x":0,"y":0,"width":1600,"height":2000},"actualMedia":{"width":1034,"height":890,"frameCount":240,"fps":60.0,"fpsRational":"60/1","duration":4,"sha256":"8e340c3c23cfba0b2e01818dd1b2abf99be8fc41bcb82c39fd99bd135bd57f1b","codec":"h264","audio":false,"sizeBytes":18803809},"contentMapping":{"mode":"entire-video-contained-no-crop","sourcePageSha256":"6b1c5cc8e98bd9035e3ded0855f165b7c745e9ba3be7bc52c01146847ac18eff","videoRect":{"x":0,"y":0,"width":1034,"height":890},"artworkRect":{"x":45,"y":400,"width":1510,"height":1300},"backgroundColor":[255,255,255],"layoutMeaning":"Complete new reviewed native uniformly contained at one fixed transform in original1510x1300 artworkRect; no crop, stretch, edge fill or actor-specific transforms. Outside scene remains original source."},"rotationPresentation":{"hidePrintedText":false},"retimingAudit":{"status":"passed-frame-identical-retiming","sourcePageSha256":"6b1c5cc8e98bd9035e3ded0855f165b7c745e9ba3be7bc52c01146847ac18eff","sourceMediaSha256":"7a401a1e8e649b57edbe1f4616adbadc03bae211a4618a21ac36a1a734f97b57","mediaSha256":"8e340c3c23cfba0b2e01818dd1b2abf99be8fc41bcb82c39fd99bd135bd57f1b","allDecodedFramesIdenticalInOrder":true,"noReencoding":true,"evidence":["qa/q133/retiming-proof.json"]},"protectionOverlay":{"source":"publication/q133-p033-activity-sky-tip-2a121ed63339a1b4.png","width":1600,"height":2000,"sha256":"2a121ed63339a1b41fb9503af751fcf2a268b6467b4f6d1c2b55b07697e0031a","coordinateSpace":"source-panel","sourcePageSha256":"6b1c5cc8e98bd9035e3ded0855f165b7c745e9ba3be7bc52c01146847ac18eff"},"rotationLetteringOverlay":{"source":"publication/q109-sixteen-original-English-599eff211c9dc060.png","sha256":"599eff211c9dc0608bfb725fad296c8c2587b0ccc9f627b9c12705fa3fd8a0a8","width":1600,"height":2000,"coordinateSpace":"source-panel","sourcePageSha256":"6b1c5cc8e98bd9035e3ded0855f165b7c745e9ba3be7bc52c01146847ac18eff","mediaSha256":"8e340c3c23cfba0b2e01818dd1b2abf99be8fc41bcb82c39fd99bd135bd57f1b","frameCount":240,"hiddenNativeFrameRanges":[],"translationAwareSeparateLayer":true},"nativeSceneAudit":{"status":"root-reviewed-native-content-and-framing","nativeInputSha256":"7a401a1e8e649b57edbe1f4616adbadc03bae211a4618a21ac36a1a734f97b57","reviewSource":"qa/q133/root-native-quality-review.json","reviewSha256":"9befd7abb7c6ac17a4c6359f67f5692905808547b43593bb59541140cda298da","allNativeFramesReviewed":true,"sourceComicRGBIdentityClaimed":false},"q133OrbitControl":{"loop":true,"allNativeFramesRetained":true,"rootNativeFullOrbitReviewed":true,"rootAcceptedMotionScope":"complete-orbit"},"distributionTextureAudit":{"status":"verified-lossy-native-size-WebP-all240-indices-retained","proofSource":"qa/q138/lossy-delivery-encoding-audit.json","proofSha256":"7b6a7ed8d12cdadd5ae12488db6ce4521609e5ba83bba2d8cd8ffbc669374101","HDQuality":90,"HDMethod":4,"lossless":false,"currentHDDecodedRGBIdentityToNativeClaimed":false,"all240NativeIndicesRetainedInOrder":true},"activitySceneTipRepairAudit":{"status":"source-sky-clone-only-active-overlay-repair-proved","proofSource":"qa/q133/p033-active-source-tip-repair.json","proofSha256":"eb15475375ac2dedd5c8c2646e35ed042406e904b7b0ed7fbe326244b614e566","oldOverlaySha256":"8b137ce58f842cdc495d3c26ae3aadb896f61f921d8b0909304857088a801e21","newOverlaySha256":"2a121ed63339a1b41fb9503af751fcf2a268b6467b4f6d1c2b55b07697e0031a","maskSource":"qa/q133/p033-active-tip-repair-mask.png","maskSha256":"54e6da99b10fdffae2491e33457817b5c1beab6c8e8ac596c66129af60000a6f","activeOnly":true,"originalJPEGUnchanged":true}},"artworkRect":{"x":45,"y":400,"width":1510,"height":1300},"captions":{"p033-text-01":{"box":{"x":324,"y":77,"width":941,"height":86},"patch":"source-fit-assets/p033-text-01-glyph-only.png","patchSHA256":"05b8f040b3521721ab02bf1f1d26eb5bddb3381c454212a9ebbfbad96dd42d55"},"p033-text-02-line1":{"box":{"x":281,"y":177,"width":1037,"height":62},"patch":"source-fit-assets/p033-text-02-line1-glyph-only.png","patchSHA256":"7d736e8e34c7390dc1d647669f874b9c2104a6f412d3f7d618922fcc8592d0d9"},"p033-text-02-line2":{"box":{"x":268,"y":236,"width":1055,"height":63},"patch":"source-fit-assets/p033-text-02-line2-glyph-only.png","patchSHA256":"dba51bbc651b00f30776394fb7462e17c43043127758b31da4304eb675230ff6"},"p033-text-02-line3":{"box":{"x":380,"y":318,"width":848,"height":62},"patch":"source-fit-assets/p033-text-02-line3-glyph-only.png","patchSHA256":"1950d806478a836662d006e992800a263d1266c8fe4529aa91052a175add0f1d"},"p033-text-04":{"box":{"x":153,"y":1719,"width":1289,"height":211},"patch":"source-fit-assets/p033-text-04-glyph-only.png","patchSHA256":"33618efc62c0ee5b1b0c7fccca951f22c274ca0527497bba818cd0f849895ed8"}},"proofSource":"qa/q133/p033-static-scene-scope.json","proofSHA256":"27349fd0b51fa9a17b0e497259b4fb6510a4f820a5bb9fbc78e8d8ba09e206ce"});
  function sourceScenePresentation(panel,page){
    const p=p033ScenePin;if(!p)return null;
    if(!panel||!page||page.id!==p.pageId||page.sourcePage!==p.sourcePage||page.sha256!==p.pageSHA256||page.width!==p.pageWidth||page.height!==p.pageHeight||panel.id!==p.panelId||panel.quality!==p.quality||panel.video!==p.video||panel.sourceCrop!==p.sourceCrop||panel.sourceCropSha256!==p.sourceCropSha256||!sourceBound(panel,page)||!window.COMIC_BOOK.pages.includes(page)||!page.panels.includes(panel))return null;
    if(Object.keys(p.fields).some(k=>stableJSON(panel[k])!==stableJSON(p.fields[k])))return null;
    return p;
  }
  const q174CryCleanupPin = deepFreeze({"childPanelId":"page-014-panel-01-cry","regionId":"cry","sourcePageSHA256":"d54451a154ee9fecacced539013ed6ae5c56f41533d0d487e80d4bdf280b0030","mediaSHA256":"00bec00f3278fa34ba622503ab5bda08f50a753fe07a08fa2089b02179318da1","frameCount":120,"currentProtectionOverlaySHA256":"520d6b945a6b536c4d74492011246eed70bdbf76f36010fce4d94553c382111a","cleanPlateAsset":"publication/page-014-cry-q174-clean-plate.png","cleanPlateSHA256":"9a62e2864f9d45149025ce3d1d466e6f012f74cf9bec0fe26f8eb9b5aea23733","width":1600,"height":2000});
  function q174CryCleanupSpec(panel, page, region, verifiedCry) {
    const spec = q174CryCleanupPin;
    if (!verifiedCry || page.sourcePage !== 14 || page.sha256 !== spec.sourcePageSHA256
      || panel.id !== spec.childPanelId || region?.id !== spec.regionId
      || panel.actualMedia.sha256 !== spec.mediaSHA256 || panel.actualMedia.frameCount !== spec.frameCount
      || panel.protectionOverlay.sha256 !== spec.currentProtectionOverlaySHA256
      || panel.bounds.x !== 0 || panel.bounds.y !== 0
      || panel.bounds.width !== spec.width || panel.bounds.height !== spec.height) return null;
    return spec;
  }

  function create(panel, page, layer, controlsContainer, options = {}) {
    const backgroundOnly = options.backgroundOnly === true;
    const cloudSpec=sourceCloudPresentation(panel,page);
    const sceneSpec=sourceScenePresentation(panel,page);
    const transparentStomp = isTransparentStompLayer(panel,page);
    const transparentCry = isTransparentCryLayer(panel,page);
    const transparentPair = transparentStomp || transparentCry;
    const region = options.region ? interactionRegions(panel, page).find(item => item.id === options.region.id) : null;
    if (options.region && !region) throw new Error('Interaction region is not bound to the accepted source layout');
    const title = region ? `${panel.title || '漫画片段'} · ${region.title}` : panel.title || '漫画片段';
    const host = document.createElement('div'); host.className = 'panel-host is-fallback'; host.tabIndex = 0;
    host.style.opacity = '0';
    host.dataset.sourcePanelId = isBoundRegionMedia(panel,page) ? panel.regionMediaOverride.parentPanelId : panel.id;
    if (isBoundRegionMedia(panel,page)) host.dataset.regionMediaId = panel.id;
    if (region) { host.dataset.interactionRegion = region.id; host.dataset.interactionRect = JSON.stringify(region.artworkRect); }
    host.setAttribute('role', backgroundOnly ? 'presentation' : 'group');
    if (backgroundOnly) { host.dataset.backgroundOnly = 'true'; host.tabIndex = -1; host.style.pointerEvents = 'none'; host.setAttribute('aria-hidden', 'true'); }
    else host.setAttribute('aria-label', `${title}，左右拖动只转动这个小画面，双击或按 Home 还原原画`);
    const b = panel.bounds, r = panel.contentMapping.videoRect, m = panel.actualMedia;
    const presentation = panel.rotationPresentation || {};
    const phaseMapping = viewPhaseMapping(panel, page);
    const editorialFraming = editorialViewFraming(panel,page);
    const referenceFrameAtRest=sourceReferenceFrameAtRest(panel,page);
    const hidePrintedText = typeof presentation.hidePrintedText === 'boolean' ? presentation.hidePrintedText
      : !!(window.COMIC_BOOK.rotationPolicy && window.COMIC_BOOK.rotationPolicy.hidePrintedTextDuringRotation);
    if (hidePrintedText) host.dataset.textlessRotation = 'true';
    if (presentation.fullPanel) host.dataset.fullPanelRotation = 'true';
    Object.assign(host.style, {left:`${b.x / page.width * 100}%`, top:`${b.y / page.height * 100}%`, width:`${b.width / page.width * 100}%`, height:`${b.height / page.height * 100}%`});
    if (region && !transparentPair && !cloudSpec) {
      const q = region.artworkRect;
      // Keep the accepted full-panel video geometry; only this source-bound window receives input and is visible.
      if (region.topLeftCutout) {
        const c = region.topLeftCutout, points = [[q.x+c.width,q.y],[q.x+q.width,q.y],[q.x+q.width,q.y+q.height],
          [q.x,q.y+q.height],[q.x,q.y+c.height],[q.x+c.width,q.y+c.height]];
        host.style.clipPath = `polygon(${points.map(([x,y]) => `${x/b.width*100}% ${y/b.height*100}%`).join(',')})`;
      } else {
      host.style.clipPath = `inset(${q.y / b.height * 100}% ${(b.width - q.x - q.width) / b.width * 100}% ${(b.height - q.y - q.height) / b.height * 100}% ${q.x / b.width * 100}%)`;
      }
    }
    if (backgroundOnly) excludeRegionMedia(host,panel,page);
    const video = document.createElement('video'); video.className = 'panel-video'; video.muted = true; video.defaultMuted = true; video.playsInline = true; video.preload = 'none';
    // A source-bound frame cache can serve dragging without downloading the MP4.
    video.setAttribute('aria-hidden', 'true');
    video.tabIndex = -1; video.controls = false; video.dataset.sourcePanelId = panel.id;
    if (region) video.dataset.interactionRegion = region.id;
    if (backgroundOnly) video.dataset.backgroundOnly = 'true';
    Object.assign(video.style, {width:'100%', height:'100%', left:'0', top:'0', objectFit:panel.quality === 'review-candidate' && panel.draftVideoFit === 'cover' ? 'cover' : 'contain'});
    const artworkRect = panel.contentMapping.artworkRect;
    if (artworkRect && !cloudSpec) {
      const matte = document.createElement('div'); matte.className = 'panel-video-matte'; matte.setAttribute('aria-hidden', 'true');
      matte.style.background = `rgb(${panel.contentMapping.backgroundColor.join(',')})`; host.append(matte);
      if(sceneSpec)Object.assign(matte.style,{inset:'auto',left:`${artworkRect.x/b.width*100}%`,top:`${artworkRect.y/b.height*100}%`,width:`${artworkRect.width/b.width*100}%`,height:`${artworkRect.height/b.height*100}%`});
      Object.assign(video.style, {left:`${artworkRect.x / b.width * 100}%`, top:`${artworkRect.y / b.height * 100}%`, width:`${artworkRect.width / b.width * 100}%`, height:`${artworkRect.height / b.height * 100}%`});
    }
    // Extend only the current verified frame's boundary pixels behind the
    // original source frame. The video/cache itself keeps its complete aspect.
    const edgeRect = !region && !backgroundOnly && frameEdgeExtension(panel, page);
    let edgeCanvas = null, edgeContext = null, edgeCallback = null, edgeCallbackKind = null;
    if (edgeRect) {
      edgeCanvas = document.createElement('canvas');
      edgeCanvas.width = Math.max(1, Math.round(b.width / 2));
      edgeCanvas.height = Math.max(1, Math.round(b.height / 2));
      edgeCanvas.className = 'panel-current-edge-underlay';
      edgeCanvas.setAttribute('aria-hidden', 'true');
      Object.assign(edgeCanvas.style, {position:'absolute', inset:'0', width:'100%', height:'100%', maxWidth:'none', pointerEvents:'none'});
      try { edgeContext = edgeCanvas.getContext('2d'); } catch (_) {}
      if (edgeContext) host.append(edgeCanvas); else { edgeCanvas = null; }
    }
    if (presentation.fullPanel) Object.assign(video.style, {left:'0',top:'0',width:'100%',height:'100%',objectFit:presentation.fit || 'cover'});
    // The mask is expressed in video coordinates. Its transparent parts expose printed text in the unchanged original page below.
    if (panel.mask) { video.style.maskImage = `url("${panel.mask.replace(/"/g, '%22')}")`; video.style.webkitMaskImage = video.style.maskImage; video.style.maskSize = '100% 100%'; video.style.webkitMaskSize = '100% 100%'; video.style.maskMode = 'alpha'; video.style.maskRepeat = 'no-repeat'; video.style.webkitMaskRepeat = 'no-repeat'; }
    const overlaySpec = panel.protectionOverlay;
    let overlayImage = null;
    // Source-only cleanup belongs below the cry video and canvas, above the
    // unchanged printed page. The original lettering remains above the actors.
    const cryCleanup = q174CryCleanupSpec(panel, page, region, transparentCry);
    const cryCleanupImage = cryCleanup ? document.createElement('img') : null;
    if (cryCleanupImage) {
      cryCleanupImage.className = 'panel-cry-clean-plate';
      cryCleanupImage.alt = '';
      cryCleanupImage.hidden = true;
      cryCleanupImage.draggable = false;
      cryCleanupImage.setAttribute('aria-hidden', 'true');
      Object.assign(cryCleanupImage.style, {position:'absolute', inset:'0', width:'100%',
        height:'100%', maxWidth:'none', pointerEvents:'none'});
      host.append(cryCleanupImage);
    }
    host.append(video);
    if (overlaySpec) {
      overlayImage = document.createElement('img'); overlayImage.className = 'panel-protection-overlay'; overlayImage.alt = ''; overlayImage.draggable = false; overlayImage.hidden = true;
      overlayImage.width = overlaySpec.width; overlayImage.height = overlaySpec.height; overlayImage.setAttribute('aria-hidden', 'true'); host.append(overlayImage);
    }
    const titleSpec = panel.rotationTitleOverlay;
    if (titleSpec && titleSpec.sourcePageSha256 === page.sha256 && SHA.test(titleSpec.sha256 || '')
      && localPath(titleSpec.source) && titleSpec.coordinateSpace === 'source-panel'
      && titleSpec.width === b.width && titleSpec.height === b.height) {
      const titleImage = document.createElement('img'); titleImage.className = 'panel-rotation-title';
      titleImage.src = titleSpec.source; titleImage.alt = ''; titleImage.draggable = false;
      titleImage.setAttribute('aria-hidden','true'); host.append(titleImage);
    }
    // Optional source-bound lettering can fade only at reviewed native views
    // where it overlaps the moving subject; the original frame stays separate.
    const letteringSpec = panel.rotationLetteringOverlay;
    const letteringValid = letteringSpec && letteringSpec.sourcePageSha256 === page.sha256
      && letteringSpec.mediaSha256 === m.sha256 && letteringSpec.frameCount === m.frameCount
      && SHA.test(letteringSpec.sha256 || '') && localPath(letteringSpec.source)
      && letteringSpec.coordinateSpace === 'source-panel'
      && letteringSpec.width === b.width && letteringSpec.height === b.height
      && Array.isArray(letteringSpec.hiddenNativeFrameRanges)
      && letteringSpec.hiddenNativeFrameRanges.length <= 16
      && letteringSpec.hiddenNativeFrameRanges.every(q => Array.isArray(q) && q.length === 2
        && Number.isInteger(q[0]) && Number.isInteger(q[1]) && q[0] >= 0 && q[1] >= q[0] && q[1] < m.frameCount);
    let letteringImage = null;
    if (letteringValid) {
      letteringImage = document.createElement('img'); letteringImage.className = 'panel-rotation-lettering';
      letteringImage.alt = ''; letteringImage.draggable = false;
      letteringImage.setAttribute('aria-hidden', 'true'); host.append(letteringImage);
    }
    const cloudPainter=cloudSpec&&region?createSourceCloudPainter(cloudSpec,region,host,()=>updateAvailability()):null;
    if(cloudPainter&&overlayImage)overlayImage.style.clipPath=p026TadaClip;
    layer.append(host);
    const row = document.createElement('div'); row.className = 'panel-controls';
    const label = document.createElement('strong'); label.textContent = `${title}${panel.quality === 'review-candidate' ? ' · 草稿 · 待优化' : panel.quality === 'reused-await-runtime' ? ' · 沿用素材，五秒版复核中' : ''}`; row.dataset.panelId = panel.id; row.dataset.sourcePanelId = panel.id; row.dataset.quality = panel.quality;
    if (region) row.dataset.interactionRegion = region.id;
    const play = document.createElement('button'); play.type = 'button'; play.textContent = '播放';
    const resetButton = document.createElement('button'); resetButton.type = 'button'; resetButton.textContent = '复位';
    const slider = document.createElement('input'); slider.type = 'range'; slider.min = '0'; slider.max = '100'; slider.step = '.1'; slider.value = '0'; slider.setAttribute('aria-label', `${title}视频进度`);
    const progress = document.createElement('output'); progress.textContent = '0%';
    const notice = document.createElement('span'); notice.className = 'panel-notice'; notice.textContent = '正在准备画面…';
    const retry = document.createElement('button'); retry.type = 'button'; retry.textContent = '重新打开'; retry.hidden = true;
    row.append(label, play, resetButton, slider, progress, retry, notice);
    if (!backgroundOnly) controlsContainer.append(row);
    let disposed = false, metadata = false, decoded = false, loadFailed = false, seekFailed = false;
    let videoStarted = false, videoFailed = false, pendingPlay = false, playTarget = 0, videoMessage = '';
    let loadedFrames = 0, previewLoaded = 0, previewTotal = 0, previewFailed = 0, previewReady = false, previewActive = false;
    let frameLoadFailed = false, lastStatus = '', updatingAvailability = false;
    let backdropVisible = false, reportedActivity = false;
    let desired = null, issued = null, inFlight = false, timer = null, seekDispatch = null, seekDispatchStarted = 0, loadTimer = null, dragging = null, motion = null;
    let dragStartTime = null, sensorEpoch = -1, sensorPhase = null, manualSettlePending = false;
    let frameRenderer = null, frameMode = false, frameFailed = false, frameTime = 0, frameTargetPercent = null, frameRequestedAt = 0;
    let framePlaybackBlocked = false;
    let frameDraws = 0, frameChanges = 0, lastFrameIndex = -1, frameLatencyTotal = 0, frameLatencySamples = 0;
    let seekIssuedAt = 0, seekLatencyTotal = 0, seekCompletions = 0;
    let maskReady = !panel.mask && !overlaySpec, protectionLoader = null, protectionAttempt = 0, protectionTimer = null;
    let letteringReady = !letteringSpec, letteringTimer = null;
    let cryCleanupReady = !cryCleanup, cryCleanupLoaded = false;
    let cryCleanupRequest = null, cryCleanupURL = null, cryCleanupTimer = null;
    function releaseCryCleanup() {
      clearTimeout(cryCleanupTimer);
      cryCleanupTimer = null;
      cryCleanupRequest?.abort();
      cryCleanupRequest = null;
      if (cryCleanupURL) URL.revokeObjectURL(cryCleanupURL);
      cryCleanupURL = null;
      cryCleanupImage?.removeAttribute('src');
    }
    async function loadCryCleanup() {
      if (!cryCleanupImage || cryCleanupReady) return;
      releaseCryCleanup();
      const request = new AbortController();
      cryCleanupRequest = request;
      host.dataset.cryCleanPlate = 'loading';
      const current = () => !disposed && cryCleanupRequest === request;
      const useOriginalPresentation = () => {
        if (!current()) return;
        releaseCryCleanup();
        cryCleanupReady = true;
        host.dataset.cryCleanPlate = 'fallback';
        updateAvailability();
      };
      cryCleanupTimer = setTimeout(useOriginalPresentation, 15000);
      try {
        const response = await fetch(cryCleanup.cleanPlateAsset, {signal:request.signal});
        if (!response.ok) throw new Error('Clean plate unavailable');
        const bytes = await response.arrayBuffer();
        const hash = await crypto.subtle.digest('SHA-256', bytes);
        const hex = Array.from(new Uint8Array(hash), byte => byte.toString(16).padStart(2,'0')).join('');
        if (hex !== cryCleanup.cleanPlateSHA256) throw new Error('Clean plate integrity mismatch');
        if (!current()) return;
        cryCleanupURL = URL.createObjectURL(new Blob([bytes], {type:'image/png'}));
        cryCleanupImage.src = cryCleanupURL;
        await cryCleanupImage.decode();
        if (!current()) return;
        if (cryCleanupImage.naturalWidth !== cryCleanup.width || cryCleanupImage.naturalHeight !== cryCleanup.height)
          throw new Error('Clean plate dimensions mismatch');
        cryCleanupReady = true;
        cryCleanupLoaded = true;
        host.dataset.cryCleanPlate = 'ready';
        updateAvailability();
      } catch (_) {
        useOriginalPresentation();
      } finally {
        if (current()) {
          clearTimeout(cryCleanupTimer);
          cryCleanupTimer = null;
          cryCleanupRequest = null;
        }
      }
    }
    let letteringAttempt = 0;
    function loadLettering() {
      clearTimeout(letteringTimer);
      if (disposed || !letteringSpec) return;
      if (!letteringValid || !letteringImage) { failProtection('文字图层与原画记录不一致，已保留原画。'); return; }
      if (letteringImage.complete && letteringImage.naturalWidth === b.width && letteringImage.naturalHeight === b.height) { letteringReady = true; return; }
      cancelProtectionRecovery(letteringImage);
      letteringReady = false;
      const attempt = ++letteringAttempt;
      const current = () => !disposed && attempt === letteringAttempt;
      let usingMask = false, recoveryUsed = false;
      let imageSource = letteringSpec.source;
      if (page.sourcePage === 11 && letteringSpec.source === "publication/p011-english-transparent-b0455929e17d.png" &&
          letteringSpec.sha256 === "b0455929e17d1468c99f9290137fef7e1023601b16e4b11d3b507eff036d87ba" && b.width === 1600 && b.height === 2000) {
        imageSource = "publication-png/p011-english-2626369ff9e9.png?sha256=2626369ff9e97e34fe59ea681d4e64857b1fb874d500e2eb43f22bbb1d558231";
      }
      const setSource = url => {
        clearTimeout(letteringTimer);
        letteringTimer = setTimeout(() => { if (current() && !letteringReady) loadingSlow('原画文字仍在加载，可继续阅读原页。'); }, 15000);
        letteringImage.src = url;
      };
      const unavailable = (message, mayRecover = false) => {
        if (!current()) return;
        if (usingMask) {
          usingMask = false;
          window.ComicSourceMasks?.cancel(letteringImage);
          setSource(imageSource);
          return;
        }
        if (imageSource !== letteringSpec.source) {
          imageSource = letteringSpec.source;
          setSource(imageSource);
          return;
        }
        const pending = mayRecover && !recoveryUsed && recoverProtectionImage(letteringImage, letteringSpec);
        if (pending) {
          recoveryUsed = true;
          void pending.then(url => {
            if (!current()) return;
            if (url) setSource(url);
            else unavailable(message);
          });
          return;
        }
        clearTimeout(letteringTimer);
        cancelProtectionRecovery(letteringImage);
        failProtection(message);
      };
      letteringImage.onload = () => {
        if (!current()) return;
        letteringReady = letteringImage.naturalWidth === b.width && letteringImage.naturalHeight === b.height;
        if (!letteringReady) { unavailable('文字图层与原画尺寸不一致，已保留原画。'); return; }
        clearTimeout(letteringTimer);
        updateAvailability();
      };
      letteringImage.onerror = () => unavailable('原画文字图层未打开，已保留原画。请重新准备。', true);
      const pending = window.ComicSourceMasks?.load(panel, page, 'rotationLetteringOverlay', letteringImage);
      if (!pending) setSource(imageSource);
      else void pending.then(url => {
        if (!current()) return;
        usingMask = !!url;
        setSource(url || imageSource);
      });
    }
    function displayTime() { const time = frameMode ? frameTime : video.currentTime; return Number.isFinite(time) ? time : 0; }
    function cacheReady() { return !!(frameRenderer && !frameFailed && frameRenderer.ready); }
    function videoReady() { return videoStarted && metadata && decoded && !videoFailed; }
    function displayDuration() { return frameMode || !videoReady() ? m.duration : video.duration; }
    function protectedReady() { return !disposed && maskReady && letteringReady && cryCleanupReady && !loadFailed && (!cloudPainter||cloudPainter.ready); }
    function usable() { return protectedReady() && (cacheReady() || videoReady()); }
    function ranges(source = video.seekable) { const result = []; try { for (let i = 0; i < source.length; i++) result.push([source.start(i), source.end(i)]); } catch (_) {} return result; }
    function videoSeekReady() { return protectedReady() && videoReady() && !seekFailed && window.OrbitSeek.hasFullSeekRange(ranges(), video.duration); }
    function seekReady() { return protectedReady() && (cacheReady() || videoSeekReady()); }
    function publishStatus() {
      const state = loadFailed || !cacheReady() && (videoFailed || seekFailed) ? 'error' : seekReady() ? 'ready' : 'loading';
      const targetIndex = frameTargetPercent === null ? null : Math.min(m.frameCount - 1, Math.max(0, Math.floor(frameTargetPercent / 100 * m.frameCount + 1e-9)));
      const anglePending = !!(inFlight || desired !== null || !framePlaybackBlocked && frameRenderer && !frameFailed && targetIndex !== null && targetIndex !== lastFrameIndex);
      const detail = {panelId:panel.id, regionId:region ? region.id : null, interactionState:state, autoRecoveryState:host.dataset.autoRecoveryState || '', loadedFrames, totalFrames:m.frameCount, loadingFailed:frameLoadFailed, previewLoaded, previewTotal, previewFailed, previewReady, previewActive, anglePending};
      Object.assign(host.dataset, {interactionState:state, loadedFrames:String(loadedFrames), totalFrames:String(m.frameCount), loadingFailed:String(frameLoadFailed), previewLoaded:String(previewLoaded), previewTotal:String(previewTotal), previewFailed:String(previewFailed), previewReady:String(previewReady), previewActive:String(previewActive), anglePending:String(anglePending)});
      const status = JSON.stringify(detail);
      if (status === lastStatus) return;
      lastStatus = status;
      if (typeof CustomEvent === 'function') host.dispatchEvent(new CustomEvent('comic-panel-status', {bubbles:true, detail}));
    }
    function stopEdgeCallback() {
      if (edgeCallback === null) return;
      if (edgeCallbackKind === 'video' && typeof video.cancelVideoFrameCallback === 'function') video.cancelVideoFrameCallback(edgeCallback);
      else window.cancelAnimationFrame(edgeCallback);
      edgeCallback = null; edgeCallbackKind = null;
    }
    function paintEdgeFrame(source) {
      if (!edgeContext || !source || disposed) return;
      const inputWidth = source.videoWidth || source.width, inputHeight = source.videoHeight || source.height;
      if (!positive(inputWidth) || !positive(inputHeight)) return;
      const nativeIndex=Math.min(m.frameCount-1,Math.max(0,Math.floor(displayTime()/displayDuration()*m.frameCount+1e-9)));
      const framing=!frameMode && editorialFraming ? editorialFraming.sourceRect(nativeIndex,inputWidth,inputHeight) : {x:0,y:0,width:inputWidth,height:inputHeight,scale:1};
      const sw=framing.width,sh=framing.height;
      const scale = Math.min(edgeRect.width / sw, edgeRect.height / sh);
      const w = sw * scale, h = sh * scale;
      const x = edgeRect.x + (edgeRect.width - w) / 2, y = edgeRect.y + (edgeRect.height - h) / 2;
      const right = Math.max(0, b.width - x - w), bottom = Math.max(0, b.height - y - h);
      const draw = (sx, sy, iw, ih, dx, dy, ow, oh) => {
        if (ow > 0 && oh > 0) edgeContext.drawImage(source, framing.x+sx, framing.y+sy, iw, ih, dx, dy, ow, oh);
      };
      try {
        edgeContext.setTransform(edgeCanvas.width / b.width, 0, 0, edgeCanvas.height / b.height, 0, 0);
        edgeContext.clearRect(0, 0, b.width, b.height);
        draw(0, 0, sw, sh, x, y, w, h);
        draw(0, 0, 1, sh, 0, y, x, h);
        draw(sw - 1, 0, 1, sh, x + w, y, right, h);
        draw(0, 0, sw, 1, x, 0, w, y);
        draw(0, sh - 1, sw, 1, x, y + h, w, bottom);
        draw(0, 0, 1, 1, 0, 0, x, y);
        draw(sw - 1, 0, 1, 1, x + w, 0, right, y);
        draw(0, sh - 1, 1, 1, 0, y + h, x, bottom);
        draw(sw - 1, sh - 1, 1, 1, x + w, y + h, right, bottom);
        host.dataset.currentFrameEdges = 'painted';
        host.dataset.edgeFrameIndex = frameMode ? String(lastFrameIndex) : 'video';
      } catch (_) { host.dataset.currentFrameEdges = 'unavailable'; }
    }
    function scheduleEdgeVideoFrame() {
      if (!edgeContext || disposed || frameMode || video.paused || edgeCallback !== null) return;
      const tick = () => {
        edgeCallback = null;
        if (disposed || frameMode || video.paused) return;
        paintEdgeFrame(video); scheduleEdgeVideoFrame();
      };
      if (typeof video.requestVideoFrameCallback === 'function') {
        edgeCallbackKind = 'video'; edgeCallback = video.requestVideoFrameCallback(tick);
      } else {
        edgeCallbackKind = 'animation'; edgeCallback = window.requestAnimationFrame(tick);
      }
    }
    function updateActual() {
      // At rest, expose the byte-identical original page below; only the chosen moving view covers it.
      const ready = usable();
      const actualTime = displayTime();
      if (letteringImage) {
        const nativeIndex = Math.min(m.frameCount - 1, Math.max(0, frameMode && lastFrameIndex >= 0 ? lastFrameIndex : Math.floor(actualTime / displayDuration() * m.frameCount + 1e-9)));
        let opacity = 1;
        for (const q of letteringSpec.hiddenNativeFrameRanges) {
          if (nativeIndex >= q[0] && nativeIndex <= q[1]) opacity = Math.min(opacity,
            Math.max(0, 1 - (Math.min(nativeIndex - q[0], q[1] - nativeIndex) + 1) / 3));
        }
        letteringImage.style.opacity = String(opacity);
        host.dataset.printedLetteringOpacity = String(opacity);
      }
      const active = !backgroundOnly && ready && (actualTime > .002 || !video.paused) && (!referenceFrameAtRest || frameMode || Math.floor(actualTime/displayDuration()*m.frameCount+1e-9)>0);
      host.style.opacity = ready && (backgroundOnly ? backdropVisible && video.paused && actualTime === 0 : active) ? '1' : '0';
      if (cryCleanupImage) cryCleanupImage.hidden = !active || !cryCleanupLoaded;
      video.style.visibility = cloudPainter || frameMode || (editorialFraming && edgeContext) ? 'hidden' : '';
      if(cloudPainter){if(frameMode&&frameRenderer)cloudPainter.paint(frameRenderer.canvas,lastFrameIndex);else if(videoReady()){cloudPainter.paint(video,Math.floor(actualTime*48+1e-6));cloudPainter.watchVideo(video);}}
      if (editorialFraming) host.dataset.editorialViewScale=String(editorialFraming.scaleAt(Math.floor(actualTime/displayDuration()*m.frameCount+1e-9)));
      if (frameRenderer) frameRenderer.canvas.hidden = !!cloudPainter || !frameMode;
      if (edgeContext) {
        paintEdgeFrame(frameMode && frameRenderer ? frameRenderer.canvas : video);
        if (frameMode || video.paused) stopEdgeCallback(); else scheduleEdgeVideoFrame();
      }
      host.dataset.renderMode = frameMode ? 'frames' : 'video';
      host.dataset.displayTime = String(actualTime);
      if (!backgroundOnly && active !== reportedActivity) {
        reportedActivity = active;
        if (typeof options.onActivity === 'function') options.onActivity(active);
      }
      const duration = displayDuration();
      const value = phaseMapping.toPhase(actualTime / duration * 100);
      slider.value = String(value); progress.textContent = `${value.toFixed(1)}%`;
      slider.setAttribute('aria-valuetext', `${actualTime.toFixed(2)} 秒，共 ${duration.toFixed(2)} 秒`);
      play.textContent = pendingPlay ? '准备播放…' : video.paused ? '播放' : '暂停';
    }
    function updateAvailability() {
      if (disposed || updatingAvailability) return;
      updatingAvailability = true;
      try {
        const ready = usable();
        host.classList.toggle('is-fallback', !ready);
        play.disabled = !ready; resetButton.disabled = !ready; slider.disabled = !seekReady();
        host.tabIndex = !backgroundOnly && seekReady() ? 0 : -1;
        updateActual();
        if (ready) {
          notice.textContent = frameLoadFailed ? '部分环绕角度加载中断，已打开的画面仍可查看。请重新准备。' : videoMessage || (!seekReady() ? '当前浏览器尚不能拖动这段视频。可播放，或用本地预览入口重新打开。' : '');
          retry.hidden = !videoMessage && !frameLoadFailed && host.dataset.autoRecoveryState !== 'exhausted';
        }
        if (videoSeekReady() && desired !== null && !inFlight) issueSeek();
        tryStartPlayback();
        publishStatus();
      } finally { updatingAvailability = false; }
    }
    function mediaPause() { video.pause(); updateActual(); }
    function confirmDrag() {
      if (dragStartTime === null || !seekReady() || Math.abs(displayTime() - dragStartTime) < .01) return;
      dragStartTime = null;
      host.dispatchEvent(new Event('comic-panel-dragged', {bubbles:true}));
    }
    function clearPendingManualSettle() {
      manualSettlePending = false;
      document.removeEventListener('comic-orbit-input-change', clearPendingManualSettle);
    }
    function finishManualSettle() {
      const committed = manualSettlePending;
      clearPendingManualSettle();
      if (committed && !disposed && document.body.dataset.orbitInput !== 'gyro' && cacheReady()) frameRenderer.settleManual?.();
    }
    function cancelMotion() {
      clearPendingManualSettle();
      frameRenderer?.clearManualSettle?.();
      if (motion) motion.cancel(); dragging = null; dragStartTime = null;
      if (!frameFailed && frameRenderer) {
        frameTargetPercent = Math.max(0, Math.min(100, displayTime() / displayDuration() * 100));
        frameRequestedAt = 0;
        frameRenderer.setPercent(frameTargetPercent);
      }
    }
    function pause(clearQueued = true) { pendingPlay = false; framePlaybackBlocked = false; video.pause(); cancelMotion(); if (clearQueued) desired = null; updateAvailability(); }
    function failProtection(message) {
      loadFailed = true; maskReady = false; pause(false);
      clearTimeout(protectionTimer); notice.textContent = message; retry.hidden = false; updateAvailability();
    }
    function failVideo(message, seeking = false) {
      if (seeking) seekFailed = true; else videoFailed = true;
      pendingPlay = false; framePlaybackBlocked = false; inFlight = false; desired = null; issued = null;
      video.pause(); clearTimeout(timer); clearTimeout(loadTimer);
      videoMessage = cacheReady() ? '视频暂时无法播放，仍可拖动画面。可重新打开后再播放。' : message;
      if (cacheReady()) { frameMode = true; frameTime = frameRenderer.currentTime; }
      notice.textContent = videoMessage; retry.hidden = false; updateAvailability();
    }
    function loadingSlow(message) {
      // A slow network is not a failed asset. Keep the original visible until
      // the existing decode and protection checks actually finish.
      if (disposed || loadFailed || usable()) return;
      notice.textContent = message; retry.hidden = false; updateAvailability();
    }
    function issueSeek(flush = false) {
      if (disposed || inFlight || desired === null || !videoSeekReady()) return;
      const target = desired;
      if (!window.OrbitSeek.canSeekTo(ranges(), video.duration, target)) return;
      if (!flush && !window.OrbitSeek.canSeekTo(ranges(video.buffered), video.duration, target)) {
        if (seekDispatch === null) seekDispatchStarted = performance.now();
        clearTimeout(seekDispatch);
        seekDispatch = setTimeout(() => {
          seekDispatch = null; seekDispatchStarted = 0; issueSeek(true);
        }, Math.min(90, Math.max(0, 200 - (performance.now() - seekDispatchStarted))));
        return;
      }
      clearTimeout(seekDispatch); seekDispatch = null; seekDispatchStarted = 0;
      desired = null; issued = target;
      if (Math.abs(video.currentTime - target) < .002 && !video.seeking) { issued = null; if (frameFailed) frameMode = false; updateActual(); tryStartPlayback(); return; }
      inFlight = true;
      timer = setTimeout(() => {
        if (disposed || !inFlight) return;
        videoMessage = '所选视角仍在加载，可继续拖动或重新准备。';
        updateAvailability();
      }, 3000);
      try { seekIssuedAt = performance.now(); video.currentTime = target; }
      catch (_) { if (desired === null) desired = issued; failVideo('暂时无法定位，已保留最后选择的进度。请重新打开。', true); }
    }
    function requestPercent(percent) {
      if (disposed || backgroundOnly || !protectedReady()) return;
      pendingPlay = false;
      mediaPause();
      const mediaPercent = phaseMapping.toMedia(percent);
      frameTargetPercent = mediaPercent;
      framePlaybackBlocked = false;
      if (cacheReady()) {
        desired = null; issued = null; inFlight = false; clearTimeout(timer);
        frameRequestedAt = performance.now(); frameRenderer.setPercent(frameTargetPercent);
        updateAvailability(); return;
      }
      if (!videoReady()) { updateAvailability(); return; }
      const end = Math.max(0, video.duration - .001);
      desired = Math.max(0, Math.min(end, mediaPercent / 100 * video.duration));
      updateAvailability();
    }
    function reset() {
      clearTimeout(seekDispatch); seekDispatch = null; seekDispatchStarted = 0;
      sensorPhase = null; cancelMotion();
      if (inFlight && !cacheReady()) {
        clearTimeout(timer); inFlight = false; issued = null; desired = null; videoMessage = '';
      }
      requestPercent(0);
    }
    function setBackdropVisible(visible) {
      if (!backgroundOnly || disposed) return;
      backdropVisible = visible === true;
      video.pause();
      // This is an accepted front-layout backdrop, never a second linked orbit.
      if (videoReady() && video.currentTime !== 0) video.currentTime = 0;
      if (frameRenderer && !frameFailed) frameRenderer.reset();
      updateAvailability();
    }
    function loadProtection() {
      clearTimeout(protectionTimer);
      if (protectionLoader) {
        cancelProtectionRecovery(protectionLoader);
        window.ComicSourceMasks?.cancel(protectionLoader);
      }
      const attempt = ++protectionAttempt;
      maskReady = !panel.mask && !overlaySpec;
      if (overlayImage) overlayImage.hidden = true;
      if (maskReady) return;
      if (panel.mask && (!window.CSS || !(window.CSS.supports('mask-image', 'url("mask.png")') || window.CSS.supports('-webkit-mask-image', 'url("mask.png")')))) {
        failProtection('当前浏览器无法显示文字保护层，已保留原画。'); return;
      }
      const sources = overlaySpec ? protectionSources(panel, page) : [panel.mask];
      let sourceIndex = 0;
      const expectedWidth = overlaySpec ? overlaySpec.width : m.width;
      const expectedHeight = overlaySpec ? overlaySpec.height : m.height;
      const protection = overlayImage || new Image(); protectionLoader = protection;
      protection.fetchPriority = 'high'; protection.decoding = 'async';
      const current = () => !disposed && attempt === protectionAttempt;
      let usingMask = false, recoveryUsed = false;
      const setSource = url => {
        clearTimeout(protectionTimer);
        protectionTimer = setTimeout(() => { if (current()) loadingSlow('文字与格框保护层仍在加载，原画可继续阅读。'); }, 15000);
        protection.src = url;
      };
      const unavailable = (message, mayRecover = false) => {
        if (!current()) return;
        if (usingMask) {
          usingMask = false;
          window.ComicSourceMasks?.cancel(protection);
          setSource(sources[0]);
        } else if (++sourceIndex < sources.length) setSource(sources[sourceIndex]);
        else {
          const pending = mayRecover && !recoveryUsed && recoverProtectionImage(protection, overlaySpec);
          if (pending) {
            recoveryUsed = true;
            void pending.then(url => {
              if (!current()) return;
              if (url) setSource(url);
              else unavailable(message);
            });
            return;
          }
          cancelProtectionRecovery(protection);
          failProtection(message);
        }
      };
      protection.onload = () => {
        if (disposed || attempt !== protectionAttempt) return;
        clearTimeout(protectionTimer);
        if (protection.naturalWidth !== expectedWidth || protection.naturalHeight !== expectedHeight) { unavailable('保护层与原画不一致，已保留原画。'); return; }
        if (overlayImage) overlayImage.hidden = false;
        maskReady = true; updateAvailability();
      };
      protection.onerror = () => unavailable('文字与格框保护层未打开，已保留原画。请重新打开。', true);
      const pending = overlaySpec && window.ComicSourceMasks?.load(panel, page, 'protectionOverlay', protection);
      if (!pending) setSource(sources[0]);
      else void pending.then(url => {
        if (!current()) return;
        usingMask = !!url;
        setSource(url || sources[0]);
      });
    }
    function startVideoLoad(force = false) {
      if (disposed || loadFailed || videoStarted && !force) return;
      clearTimeout(seekDispatch); seekDispatch = null; seekDispatchStarted = 0;
      clearTimeout(loadTimer); clearTimeout(timer);
      videoStarted = true; metadata = false; decoded = false; videoFailed = false; seekFailed = false; inFlight = false; issued = null; videoMessage = '';
      const fallbackURL = window.ComicPagesOnly && window.ComicPagesOnly.videoURL(panel.video, m.sha256);
      if (!fallbackURL) { failVideo('这段备用视频未能打开，原画仍可阅读。'); return; }
      video.crossOrigin = 'anonymous'; video.preload = 'auto'; video.src = fallbackURL;
      loadTimer = setTimeout(() => loadingSlow('视频仍在加载，原画可继续阅读。'), 15000);
      video.load();
    }
    function startLoad() {
      if (disposed) return;
      const retryVideo = videoFailed || seekFailed || frameLoadFailed || inFlight;
      loadFailed = false; frameLoadFailed = false; pause();
      notice.textContent = '正在准备画面…'; retry.hidden = true; videoMessage = '';
      loadLettering();
      loadProtection();
      loadCryCleanup();
      if (!frameRenderer || frameFailed || retryVideo) startVideoLoad(retryVideo);
      updateAvailability();
    }
    function prepareFailedRetry() {
      if (disposed || host.dataset.interactionState !== 'error' && host.dataset.loadingFailed !== 'true' && host.dataset.autoRecoveryState !== 'exhausted') return null;
      if (host.dataset.autoRecoveryState === 'exhausted' && frameRenderer?.rangeRecoveryExhausted === true
        && typeof frameRenderer.retryFailedRange === 'function') {
        return () => {
          if (disposed || !frameRenderer?.retryFailedRange?.()) return;
          delete host.dataset.autoRecoveryState;
          frameLoadFailed = false; videoMessage = ''; retry.hidden = true;
          updateAvailability();
        };
      }
      if (frameRenderer && (frameLoadFailed || frameFailed || previewFailed > 0 || host.dataset.autoRecoveryState === 'exhausted')) {
        const target = frameTargetPercent !== null ? frameTargetPercent : displayTime() / displayDuration() * 100;
        pause();
        clearTimeout(seekDispatch); seekDispatch = null; seekDispatchStarted = 0;
        clearTimeout(timer); clearTimeout(loadTimer);
        desired = null; issued = null; inFlight = false;
        if (videoFailed || seekFailed) {
          videoStarted = false; metadata = false; decoded = false;
          video.removeAttribute('src'); video.load();
        }
        const old = frameRenderer;
        frameRenderer = null;
        old.destroy(); old.canvas.remove();
        delete host.dataset.autoRecoveryState;
        frameFailed = false; frameLoadFailed = false; loadedFrames = 0;
        previewLoaded = 0; previewTotal = 0; previewFailed = 0;
        previewReady = false; previewActive = false; frameMode = false;
        host.dataset.frameReady = 'false';
        // A disposed store retains only verified complete previews and a small
        // verified angle. Its replacement has fresh request/error ownership.
        return () => {
          if (disposed) return;
          loadFrames();
          if (frameRenderer) {
            frameTargetPercent = target;
            frameRenderer.setPercent(target);
            frameRenderer.settleManual?.();
            if (loadFailed) {
              loadFailed = false;
              loadLettering(); loadProtection(); loadCryCleanup();
            }
            videoMessage = ''; retry.hidden = true;
            updateAvailability();
          } else {
            startLoad();
          }
        };
      }
      // Non-frame failures retain the existing protection/video recovery.
      return () => { if (!disposed) startLoad(); };
    }
    function retryFailed() {
      const recover = prepareFailedRetry();
      if (!recover) return false;
      recover();
      return true;
    }
    function tryStartPlayback() {
      if (!pendingPlay || !protectedReady() || !videoReady() || seekFailed || inFlight) return;
      if (Math.abs(video.currentTime - playTarget) >= .002 || video.seeking) {
        if (desired === null) desired = playTarget;
        if (videoSeekReady()) issueSeek();
        return;
      }
      pendingPlay = false; desired = null; framePlaybackBlocked = true; frameMode = false;
      video.play().catch(() => { if (!disposed) failVideo('暂时无法播放，请重新打开。'); });
      updateActual();
    }
    video.addEventListener('loadedmetadata', () => {
      if (disposed || !videoStarted || videoFailed) return;
      if (!Number.isFinite(video.duration) || Math.abs(video.duration - m.duration) > .04 || video.videoWidth !== m.width || video.videoHeight !== m.height) {
        failVideo('这段文件与验收记录不一致，已保留原画。'); return;
      }
      metadata = true; updateAvailability();
    });
    video.addEventListener('loadeddata', () => { if (!disposed && videoStarted && !videoFailed) { decoded = true; clearTimeout(loadTimer); updateAvailability(); } });
    for (const event of ['progress', 'canplay', 'durationchange']) video.addEventListener(event, updateAvailability);
    video.addEventListener('seeked', () => {
      if (disposed || !videoStarted || videoFailed) return;
      const expected = issued;
      clearTimeout(timer); inFlight = false; issued = null;
      if (expected !== null) {
        seekCompletions++; seekLatencyTotal += Math.max(0, performance.now() - seekIssuedAt);
        host.dataset.seekCompletions = String(seekCompletions);
        host.dataset.seekLatencyMean = String(seekLatencyTotal / seekCompletions);
      }
      if (frameFailed) frameMode = false;
      updateActual();
      if (expected !== null && Math.abs(video.currentTime - expected) > .08) {
        if (desired === null) desired = expected;
        failVideo('视频没有到达所选位置，进度显示的是实际位置。请重新打开。', true); return;
      }
      if (expected !== null) { videoMessage = ''; confirmDrag(); }
      updateAvailability();
    });
    function loadFrames() {
      if (!window.OrbitFrameCache || new URLSearchParams(location.search).get('frames') === 'off') return;
      frameRenderer = window.OrbitFrameCache.create(panel, page, {
        onReady(actual) {
          if (disposed || frameFailed || !frameRenderer) return;
          host.dataset.frameReady = 'true';
          if (actual && actual.preview) previewReady = true;
          else loadedFrames = Math.max(loadedFrames, 1);
          updateAvailability();
        },
        onProgress(actual) {
          if (disposed || frameFailed || !actual || actual.total !== m.frameCount || !Number.isInteger(actual.loaded) || actual.loaded < 0 || actual.loaded > actual.total) return;
          const failed = actual.failed === undefined ? 0 : actual.failed;
          if (!Number.isInteger(failed) || failed < 0 || failed > actual.total) return;
          loadedFrames = Math.max(loadedFrames, actual.loaded);
          if (Number.isInteger(actual.previewLoaded) && Number.isInteger(actual.previewTotal) && actual.previewLoaded >= 0 && actual.previewTotal >= actual.previewLoaded) {
            previewLoaded = actual.previewLoaded; previewTotal = actual.previewTotal;
            previewFailed = Number.isInteger(actual.previewFailed) && actual.previewFailed >= 0 ? actual.previewFailed : 0;
          }
          if (actual.autoRecoveryState === 'retrying' || actual.autoRecoveryState === 'exhausted') host.dataset.autoRecoveryState = actual.autoRecoveryState;
          else delete host.dataset.autoRecoveryState;
          frameLoadFailed = loadedFrames < m.frameCount && (failed > 0 || actual.autoRecoveryState === 'exhausted');
          updateAvailability();
        },
        onFrame(actual) {
          if (disposed || frameFailed || framePlaybackBlocked || !video.paused) return;
          if (!frameMode) { desired = null; issued = null; inFlight = false; clearTimeout(timer); }
          frameMode = true; frameTime = actual.currentTime;
          previewActive = actual.preview === true;
          if (previewActive) previewReady = true;
          frameDraws++; if (actual.index !== lastFrameIndex) frameChanges++;
          lastFrameIndex = actual.index;
          if (transparentPair) refreshSparseHit();
          host.dataset.frameIndex = String(actual.index); host.dataset.frameDraws = String(frameDraws); host.dataset.frameChanges = String(frameChanges);
          if (frameRequestedAt) {
            const latency = Math.max(0, performance.now() - frameRequestedAt);
            frameLatencyTotal += latency; frameLatencySamples++;
            host.dataset.frameLatencyLast = String(latency); host.dataset.frameLatencyMean = String(frameLatencyTotal / frameLatencySamples);
            frameRequestedAt = 0;
          }
          confirmDrag();
          updateAvailability();
        },
        onError() {
          if (disposed) return;
          frameFailed = true; frameLoadFailed = false; previewActive = false; previewReady = false; host.dataset.frameReady = 'fallback';
          // A late cache callback must not rewind an already playing MP4.
          if (!framePlaybackBlocked) desired = backgroundOnly ? 0 : Math.min(m.duration - .001, frameTargetPercent !== null ? frameTargetPercent / 100 * m.duration : displayTime());
          frameMode = false;
          startVideoLoad(); updateAvailability();
        }
      });
      if (frameRenderer) {
        const canvas = frameRenderer.canvas;
        canvas.className = 'panel-video panel-frame-canvas'; canvas.style.cssText = video.style.cssText; canvas.hidden = true;
        host.insertBefore(canvas, video);
      }
    }
    loadFrames();

    // Transparent full-page rendering has an independent hit surface. The L
    // keeps the original pair draggable; frame alpha adds visible protrusions
    // so a hat entering gasp's empty rectangle still turns the visible actor.
    let sparseHitPath=null;
    if (transparentPair) {
      host.style.pointerEvents='none';host.dataset.transparentRegion=transparentCry ? 'source014-cry-q66' : 'source014-stomp-v4';
      const ns='http://www.w3.org/2000/svg',svg=document.createElementNS(ns,'svg'),defs=document.createElementNS(ns,'defs'),clip=document.createElementNS(ns,'clipPath');
      const id='stomp-hit-'+Math.random().toString(36).slice(2);clip.id=id;clip.setAttribute('clipPathUnits','objectBoundingBox');
      const baseHit=document.createElementNS(ns,'polygon'),q=region.artworkRect,c=region.topLeftCutout;
      const corners=transparentCry && Array.isArray(region.inputPolygon) ? region.inputPolygon
        : c ? [[q.x+c.width,q.y],[q.x+q.width,q.y],[q.x+q.width,q.y+q.height],[q.x,q.y+q.height],[q.x,q.y+c.height],[q.x+c.width,q.y+c.height]]
        : [[q.x,q.y],[q.x+q.width,q.y],[q.x+q.width,q.y+q.height],[q.x,q.y+q.height]];
      baseHit.setAttribute('points',corners.map(([x,y])=>`${x/b.width},${y/b.height}`).join(' '));
      sparseHitPath=document.createElementNS(ns,'path');clip.append(baseHit,sparseHitPath);defs.append(clip);svg.append(defs);
      Object.assign(svg.style,{position:'absolute',width:'0',height:'0',pointerEvents:'none'});svg.setAttribute('aria-hidden','true');host.append(svg);
      const hit=document.createElement('div');hit.className='panel-sparse-hit';hit.setAttribute('aria-hidden','true');
      Object.assign(hit.style,{position:'absolute',inset:'0',pointerEvents:'auto',touchAction:'none',clipPath:`url(#${id})`,zIndex:'10'});host.append(hit);
      host.dataset.inputRegionPolicy=transparentCry ? 'rect-plus-current-frame-alpha' : 'L-plus-current-frame-alpha';
    }
    function refreshSparseHit() {
      if (!sparseHitPath || !frameRenderer) return;
      try {
        const ca=frameRenderer.canvas,ctx=ca.getContext('2d');
        const crop=transparentCry && panel.transparentFrameCrop;
        const x0=crop ? crop.x : 590,y0=crop ? crop.y : 425,w=crop ? crop.width : 850,h=crop ? crop.height : 800;
        const data=ctx.getImageData(x0,y0,w,h).data,parts=[];
        for (let y=0;y<h;y+=4) {
          const yy=Math.min(h-1,y+2);let start=-1;
          for (let x=0;x<=w;x++) {
            const on=x<w && data[(yy*w+x)*4+3]>32;
            if (on && start<0) start=x;
            if (!on && start>=0) {const left=(x0+start)/b.width,right=(x0+x)/b.width,top=(y0+y)/b.height,bottom=(y0+Math.min(h,y+4))/b.height;parts.push(`M${left},${top}H${right}V${bottom}H${left}Z`);start=-1;}
          }
        }
        sparseHitPath.setAttribute('d',parts.join(''));host.dataset.alphaHitFrame=String(lastFrameIndex);
      } catch (_) { /* Base L remains usable if an optional alpha read fails. */ }
    }

    video.addEventListener('timeupdate', updateActual);
    for (const event of ['play', 'pause', 'ended']) video.addEventListener(event, updateActual);
    video.addEventListener('error', () => { if (!disposed && videoStarted) failVideo('这段视频暂时无法读取，已保留原画。请检查文件后重新打开。'); });
    if (!backgroundOnly) {
    host.dataset.motionState = 'idle';
    if (window.OrbitInertia && typeof window.OrbitInertia.create === 'function') {
      motion = window.OrbitInertia.create({onChange:requestPercent, loop:!isBoundedOrbit(panel,page), onState:state => { host.dataset.motionState = state; if (state === 'idle') finishManualSettle(); }});
    }
    play.addEventListener('click', () => {
      if (!usable()) return;
      if (!video.paused || pendingPlay) pause();
      else {
        const at = displayTime(); cancelMotion(); desired = null; clearTimeout(timer); inFlight = false; issued = null;
        playTarget = Math.min(m.duration - .001, at); pendingPlay = true; framePlaybackBlocked = true;
        startVideoLoad(videoFailed || seekFailed); updateAvailability();
      }
    });
    resetButton.addEventListener('click', reset);
    host.addEventListener('dblclick', event => { event.preventDefault(); reset(); });
    slider.addEventListener('input', () => { const percent = slider.value; cancelMotion(); requestPercent(percent); });
    retry.addEventListener('click', () => { if (!retryFailed()) startLoad(); });
    const bounded = isBoundedOrbit(panel,page);
    host.addEventListener('comic-phone-angle', event => {
      const {epoch, delta} = event.detail || {};
      if (document.body.dataset.pageGesture === 'pinch' || document.body.dataset.orbitInput !== 'gyro' || !seekReady() || !Number.isFinite(delta)) return;
      if (sensorEpoch !== epoch || sensorPhase === null) {
        cancelMotion();
        sensorEpoch = epoch;
        sensorPhase = phaseMapping.toPhase(displayTime() / displayDuration() * 100);
      }
      if (!delta) return;
      const next = sensorPhase + delta;
      sensorPhase = bounded ? Math.max(0, Math.min(100, next)) : ((next % 100) + 100) % 100;
      requestPercent(sensorPhase);
    });
    host.addEventListener('pointerdown', event => {
      if (dragging || document.body.dataset.pageGesture === 'pinch' || document.body.dataset.orbitInput === 'gyro' || !seekReady() || (event.pointerType === 'mouse' && event.button !== 0)) return;
      if (transparentPair) host.focus({preventScroll:true});
      const width = host.getBoundingClientRect().width * (region ? region.artworkRect.width / b.width : 1);
      pause();
      const startTime = displayTime();
      dragging = {id:event.pointerId, x:event.clientX, y:event.clientY, width, startTime,
        percent:phaseMapping.toPhase(startTime / displayDuration() * 100), travelled:false};
      host.setPointerCapture(event.pointerId);
      if (motion) motion.begin(dragging.percent, event.clientX, performance.now());
    });
    host.addEventListener('pointermove', event => {
      if (document.body.dataset.pageGesture === 'pinch' || !dragging || event.pointerId !== dragging.id) return;
      const dx = Math.abs(event.clientX - dragging.x), dy = Math.abs(event.clientY - dragging.y);
      if (!dragging.travelled && dx >= 8 && dx > dy) {
        dragging.travelled = true;
        dragStartTime = dragging.startTime;
      }
      if (motion) motion.move(event.clientX, dragging.width, performance.now());
      else requestPercent(dragging.percent + (event.clientX - dragging.x) / Math.max(1, dragging.width) * 100);
    });
    host.addEventListener('pointerup', event => {
      if (!dragging || event.pointerId !== dragging.id) return;
      manualSettlePending = event.isTrusted && dragging.travelled;
      if (manualSettlePending) document.addEventListener('comic-orbit-input-change', clearPendingManualSettle, {once:true});
      dragging = null;
      if (motion) motion.end(performance.now());
      else finishManualSettle();
    });
    for (const event of ['pointercancel', 'lostpointercapture']) host.addEventListener(event, event => {
      if (!dragging || event.pointerId !== dragging.id) return;
      cancelMotion();
    });
    host.addEventListener('keydown', event => {
      if (!seekReady()) return;
      const actual = phaseMapping.toPhase(displayTime() / displayDuration() * 100);
      if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
        if (document.body.dataset.orbitInput === 'gyro') return;
        event.preventDefault(); cancelMotion(); requestPercent(actual + (event.key === 'ArrowLeft' ? -2 : 2)); }
      else if (event.key === 'Home') { event.preventDefault(); reset(); }
    });
    }
    let observer = null;
    if ('IntersectionObserver' in window) { observer = new IntersectionObserver(entries => { if (!entries[0].isIntersecting) pause(); }); observer.observe(host); }
    startLoad();
    return {pause, reset, retryFailed, prepareFailedRetry, setBackdropVisible, destroy() { disposed = true; clearTimeout(seekDispatch); seekDispatch = null; seekDispatchStarted = 0; releaseCryCleanup(); if(cloudPainter)cloudPainter.destroy(); stopEdgeCallback(); if (edgeCanvas) { edgeCanvas.width = 0; edgeCanvas.height = 0; } pendingPlay = false; protectionAttempt++; clearTimeout(letteringTimer); if (letteringImage) { cancelProtectionRecovery(letteringImage); window.ComicSourceMasks?.cancel(letteringImage); letteringImage.onload = null; letteringImage.onerror = null; letteringImage.removeAttribute('src'); } if (motion) motion.destroy(); if (frameRenderer) frameRenderer.destroy(); dragging = null; video.pause(); updateActual(); clearTimeout(timer); clearTimeout(loadTimer); clearTimeout(protectionTimer); if (protectionLoader) { cancelProtectionRecovery(protectionLoader); window.ComicSourceMasks?.cancel(protectionLoader); protectionLoader.onload = null; protectionLoader.onerror = null; protectionLoader.removeAttribute('src'); } if (observer) observer.disconnect(); if (videoStarted) { video.removeAttribute('src'); video.load(); } host.remove(); row.remove(); }};
  }
  window.ComicPanelPlayer = Object.freeze({sourceScenePresentation,sourceCloudPresentation,setSourceCloudActivity,eligible, displayable, requiresInteractionLayout, interactionRegions, createFixedProtectionOverlay, viewPhaseMapping, frameEdgeExtension, regionMediaOverrides, isBoundRegionMedia, regionMediaCacheBinding, isTransparentStompLayer, isTransparentCryLayer, isBoundedOrbit, editorialViewFraming, sourceReferenceFrameAtRest, transparentFrameCrop, create});
})();
