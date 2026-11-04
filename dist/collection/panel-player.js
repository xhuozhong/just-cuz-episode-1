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
  function displayable(panel, page) {
    if (panel && panel.regionMediaOverride) return isBoundRegionMedia(panel,page);
    if (panel && !regionMediaOverrides(panel,page)) return false;
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
  function regionMediaOverrides(parent, page) {
    if (!parent) return [];
    const declared = parent.regionMediaOverrides, config = window.COMIC_INTERACTION_LAYOUTS;
    const anchors = config && Array.isArray(config.regionMediaOverrides)
      ? config.regionMediaOverrides.filter(item => item && item.binding && item.binding.parentPanelId === parent.id) : [];
    if (declared === undefined) return anchors.length ? null : [];
    const invalid = () => null;
    if (parent.id !== 'page-014-panel-01' || !page || page.id !== 'page-014'
      || !Array.isArray(page.panels) || !page.panels.includes(parent)
      || !sourceBound(parent,page) || !Array.isArray(declared) || declared.length !== 1
      || !config || config.schemaVersion !== 1 || !Array.isArray(config.regionMediaOverrides)) return invalid();
    if (anchors.length !== 1 || stableJSON(declared) !== stableJSON(anchors)) return invalid();
    const item = declared[0], b = item && item.binding, child = item && item.model;
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
    // Cache only when both independent declarations and the source-bound parent
    // still match. Mutation after resolution invalidates existing child handles.
    const signature=stableJSON({item,source:page.sha256,crop:parent.sourceCropSha256,video:parent.video,media:parent.actualMedia,base});
    const prior=regionMediaParents.get(parent);
    if (prior && prior.signature === signature && prior.page === page) return prior.items;
    const normalized=deepFreeze(JSON.parse(JSON.stringify(child)));
    const binding=deepFreeze(JSON.parse(JSON.stringify(b)));
    const region=deepFreeze({id:'gasp',title:old.title,artworkRect:{...b.regionRect}});
    const resolved=Object.freeze({panel:normalized,region,exclusionRect:region.artworkRect,binding});
    const items=Object.freeze([resolved]);
    regionMediaChildren.set(normalized,{parent,page,signature});
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
    return stableJSON(binding) === stableJSON(items[0].binding);
  }
  function interactionRegions(panel,page) {
    if (panel && panel.regionMediaOverride) {
      if (!isBoundRegionMedia(panel,page)) return [];
      const authority=regionMediaChildren.get(panel);
      return [regionMediaOverrides(authority.parent,page)[0].region];
    }
    const base=baseInteractionRegions(panel,page);
    const items=regionMediaOverrides(panel,page);
    return items ? items.length ? base.map(region => items.find(item => item.region.id === region.id)?.region || region) : base : [];
  }
  function excludeRegionMedia(element,parent,page) {
    const items=regionMediaOverrides(parent,page);
    if (!items || !items.length) return;
    // Full source outer contour followed by the same source-bound inner hole.
    // CSS evenodd clips the old background/protection, never the new actors.
    const q=items[0].exclusionRect,b=parent.bounds;
    const x=q.x/b.width*100,y=q.y/b.height*100,r=(q.x+q.width)/b.width*100,t=(q.y+q.height)/b.height*100;
    element.style.clipPath=`polygon(evenodd,0% 0%,100% 0%,100% 100%,0% 100%,0% 0%,${x}% ${y}%,${r}% ${y}%,${r}% ${t}%,${x}% ${t}%,${x}% ${y}%)`;
    element.dataset.regionMediaExclusion=JSON.stringify(q);
  }

  function protectionSources(panel, page) {
    const spec = panel.protectionOverlay, assets = window.COMIC_PROTECTION_RESOURCES;
    if (!spec || !assets || assets.schemaVersion !== 1 || assets.encoding !== 'webp-lossless-exact' || !Array.isArray(assets.entries)) return spec ? [spec.source] : [];
    const matches = assets.entries.filter(entry => entry && entry.panelId === panel.id);
    if (matches.length !== 1) return [spec.source];
    const entry = matches[0];
    if (entry.sourcePageSha256 !== page.sha256 || entry.mediaSha256 !== panel.actualMedia.sha256 || entry.originalSource !== spec.source || entry.originalSha256 !== spec.sha256
      || entry.width !== spec.width || entry.height !== spec.height || !SHA.test(entry.sha256 || '') || !SHA.test(entry.rgbaSha256 || '')
      || typeof entry.source !== 'string' || !/^publication-webp\/[a-z\d][a-z\d._-]*\.webp$/i.test(entry.source)
      || !(entry.source.endsWith(`-${entry.sha256.slice(0, 12)}.webp`) || entry.source.endsWith(`-${entry.sha256}.webp`))) return [spec.source];
    return [`${entry.source}?sha256=${entry.sha256}`, spec.source];
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
    let sourceIndex = 0, disposed = false;
    image.fetchPriority = 'high'; image.decoding = 'async';
    const unavailable = () => {
      if (disposed) return;
      if (++sourceIndex < sources.length) image.src = sources[sourceIndex];
      else image.remove();
    };
    image.onload = () => { if (disposed) return; if (image.naturalWidth === spec.width && image.naturalHeight === spec.height) image.style.opacity = '1'; else unavailable(); };
    image.onerror = unavailable; layer.append(image); image.src = sources[0];
    return {pause() {}, reset() {}, destroy() { disposed = true; image.onload = null; image.onerror = null; image.removeAttribute('src'); image.remove(); }};
  }
  function frameEdgeExtension(panel, page) {
    const spec = panel && panel.contentMapping && panel.contentMapping.edgeExtension;
    const rect = panel && panel.contentMapping && panel.contentMapping.artworkRect;
    const media = panel && panel.actualMedia, bounds = panel && panel.bounds;
    if (!spec || !displayable(panel, page) || panel.quality !== 'review-candidate'
      || spec.schemaVersion !== 1 || spec.mode !== 'current-frame-edges'
      || spec.sourcePageSha256 !== page.sha256 || spec.mediaSha256 !== media.sha256
      || spec.sourceWidth !== media.width || spec.sourceHeight !== media.height
      || !rectValid(rect, bounds.width, bounds.height)
      || !spec.artworkRect || !['x','y','width','height'].every(k => spec.artworkRect[k] === rect[k])
      || panel.rotationPresentation && panel.rotationPresentation.fullPanel
      || !SHA.test(spec.publicationProofSha256 || '')) return null;
    return Object.freeze({...rect});
  }
  function create(panel, page, layer, controlsContainer, options = {}) {
    const backgroundOnly = options.backgroundOnly === true;
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
    const hidePrintedText = typeof presentation.hidePrintedText === 'boolean' ? presentation.hidePrintedText
      : !!(window.COMIC_BOOK.rotationPolicy && window.COMIC_BOOK.rotationPolicy.hidePrintedTextDuringRotation);
    if (hidePrintedText) host.dataset.textlessRotation = 'true';
    if (presentation.fullPanel) host.dataset.fullPanelRotation = 'true';
    Object.assign(host.style, {left:`${b.x / page.width * 100}%`, top:`${b.y / page.height * 100}%`, width:`${b.width / page.width * 100}%`, height:`${b.height / page.height * 100}%`});
    if (region) {
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
    if (artworkRect) {
      const matte = document.createElement('div'); matte.className = 'panel-video-matte'; matte.setAttribute('aria-hidden', 'true');
      matte.style.background = `rgb(${panel.contentMapping.backgroundColor.join(',')})`; host.append(matte);
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
    let desired = null, issued = null, inFlight = false, timer = null, loadTimer = null, dragging = null, motion = null;
    let frameRenderer = null, frameMode = false, frameFailed = false, frameTime = 0, frameTargetPercent = null, frameRequestedAt = 0;
    let framePlaybackBlocked = false;
    let frameDraws = 0, frameChanges = 0, lastFrameIndex = -1, frameLatencyTotal = 0, frameLatencySamples = 0;
    let seekIssuedAt = 0, seekLatencyTotal = 0, seekCompletions = 0;
    let maskReady = !panel.mask && !overlaySpec, protectionLoader = null, protectionAttempt = 0, protectionTimer = null;
    let letteringReady = !letteringSpec, letteringTimer = null;
    function loadLettering() {
      clearTimeout(letteringTimer);
      if (disposed || !letteringSpec) return;
      if (!letteringValid || !letteringImage) { failProtection('文字图层与原画记录不一致，已保留原画。'); return; }
      if (letteringImage.complete && letteringImage.naturalWidth === b.width && letteringImage.naturalHeight === b.height) { letteringReady = true; return; }
      letteringReady = false;
      letteringImage.onload = () => {
        if (disposed) return;
        clearTimeout(letteringTimer);
        letteringReady = letteringImage.naturalWidth === b.width && letteringImage.naturalHeight === b.height;
        if (!letteringReady) { failProtection('文字图层与原画尺寸不一致，已保留原画。'); return; }
        updateAvailability();
      };
      letteringImage.onerror = () => { if (!disposed) { clearTimeout(letteringTimer); failProtection('原画文字图层未打开，已保留原画。请重新准备。'); } };
      letteringTimer = setTimeout(() => { if (!disposed && !letteringReady) loadingSlow('原画文字仍在加载，可继续阅读原页。'); }, 15000);
      letteringImage.src = letteringSpec.source;
    }
    function displayTime() { const time = frameMode ? frameTime : video.currentTime; return Number.isFinite(time) ? time : 0; }
    function cacheReady() { return !!(frameRenderer && !frameFailed && frameRenderer.ready); }
    function videoReady() { return videoStarted && metadata && decoded && !videoFailed; }
    function displayDuration() { return frameMode || !videoReady() ? m.duration : video.duration; }
    function protectedReady() { return !disposed && maskReady && letteringReady && !loadFailed; }
    function usable() { return protectedReady() && (cacheReady() || videoReady()); }
    function ranges() { const result = []; try { for (let i = 0; i < video.seekable.length; i++) result.push([video.seekable.start(i), video.seekable.end(i)]); } catch (_) {} return result; }
    function videoSeekReady() { return protectedReady() && videoReady() && !seekFailed && window.OrbitSeek.hasFullSeekRange(ranges(), video.duration); }
    function seekReady() { return protectedReady() && (cacheReady() || videoSeekReady()); }
    function publishStatus() {
      const state = loadFailed || !cacheReady() && (videoFailed || seekFailed) ? 'error' : seekReady() ? 'ready' : 'loading';
      const targetIndex = frameTargetPercent === null ? null : Math.min(m.frameCount - 1, Math.max(0, Math.floor(frameTargetPercent / 100 * m.frameCount + 1e-9)));
      const anglePending = !!(inFlight || desired !== null || !framePlaybackBlocked && frameRenderer && !frameFailed && targetIndex !== null && targetIndex !== lastFrameIndex);
      const detail = {panelId:panel.id, regionId:region ? region.id : null, interactionState:state, loadedFrames, totalFrames:m.frameCount, loadingFailed:frameLoadFailed, previewLoaded, previewTotal, previewFailed, previewReady, previewActive, anglePending};
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
      const sw = source.videoWidth || source.width, sh = source.videoHeight || source.height;
      if (!positive(sw) || !positive(sh)) return;
      const scale = Math.min(edgeRect.width / sw, edgeRect.height / sh);
      const w = sw * scale, h = sh * scale;
      const x = edgeRect.x + (edgeRect.width - w) / 2, y = edgeRect.y + (edgeRect.height - h) / 2;
      const right = Math.max(0, b.width - x - w), bottom = Math.max(0, b.height - y - h);
      const draw = (sx, sy, iw, ih, dx, dy, ow, oh) => {
        if (ow > 0 && oh > 0) edgeContext.drawImage(source, sx, sy, iw, ih, dx, dy, ow, oh);
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
      const active = !backgroundOnly && ready && (actualTime > .002 || !video.paused);
      host.style.opacity = ready && (backgroundOnly ? backdropVisible && video.paused && actualTime === 0 : active) ? '1' : '0';
      video.style.visibility = frameMode ? 'hidden' : '';
      if (frameRenderer) frameRenderer.canvas.hidden = !frameMode;
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
          retry.hidden = !videoMessage && !frameLoadFailed;
        }
        if (videoSeekReady() && desired !== null && !inFlight) issueSeek();
        tryStartPlayback();
        publishStatus();
      } finally { updatingAvailability = false; }
    }
    function mediaPause() { video.pause(); updateActual(); }
    function cancelMotion() {
      if (motion) motion.cancel(); dragging = null;
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
    function issueSeek() {
      if (disposed || inFlight || desired === null || !videoSeekReady()) return;
      const target = desired;
      if (!window.OrbitSeek.canSeekTo(ranges(), video.duration, target)) return;
      desired = null; issued = target;
      if (Math.abs(video.currentTime - target) < .002 && !video.seeking) { issued = null; if (frameFailed) frameMode = false; updateActual(); tryStartPlayback(); return; }
      inFlight = true;
      timer = setTimeout(() => {
        if (disposed || !inFlight) return;
        if (desired === null) desired = issued;
        failVideo('这次定位尚未完成，进度显示的是实际位置。可重新打开后继续。', true);
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
    function reset() { cancelMotion(); requestPercent(0); }
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
      const unavailable = message => {
        if (disposed || attempt !== protectionAttempt) return;
        if (++sourceIndex < sources.length) protection.src = sources[sourceIndex];
        else failProtection(message);
      };
      protection.onload = () => {
        if (disposed || attempt !== protectionAttempt) return;
        clearTimeout(protectionTimer);
        if (protection.naturalWidth !== expectedWidth || protection.naturalHeight !== expectedHeight) { unavailable('保护层与原画不一致，已保留原画。'); return; }
        if (overlayImage) overlayImage.hidden = false;
        maskReady = true; updateAvailability();
      };
      protection.onerror = () => unavailable('文字与格框保护层未打开，已保留原画。请重新打开。');
      protectionTimer = setTimeout(() => { if (!disposed && attempt === protectionAttempt) loadingSlow('文字与格框保护层仍在加载，原画可继续阅读。'); }, 15000);
      protection.src = sources[0];
    }
    function startVideoLoad(force = false) {
      if (disposed || loadFailed || videoStarted && !force) return;
      clearTimeout(loadTimer); clearTimeout(timer);
      videoStarted = true; metadata = false; decoded = false; videoFailed = false; seekFailed = false; inFlight = false; issued = null; videoMessage = '';
      video.preload = 'auto'; video.src = panel.video;
      loadTimer = setTimeout(() => loadingSlow('视频仍在加载，原画可继续阅读。'), 15000);
      video.load();
    }
    function startLoad() {
      if (disposed) return;
      const retryVideo = videoFailed || seekFailed || frameLoadFailed;
      loadFailed = false; frameLoadFailed = false; pause();
      notice.textContent = '正在准备画面…'; retry.hidden = true; videoMessage = '';
      loadLettering();
      loadProtection();
      if (!frameRenderer || frameFailed || retryVideo) startVideoLoad(retryVideo);
      updateAvailability();
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
      updateAvailability();
    });
    if (window.OrbitFrameCache && new URLSearchParams(location.search).get('frames') !== 'off') {
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
          frameLoadFailed = loadedFrames < m.frameCount && failed > 0;
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
          host.dataset.frameIndex = String(actual.index); host.dataset.frameDraws = String(frameDraws); host.dataset.frameChanges = String(frameChanges);
          if (frameRequestedAt) {
            const latency = Math.max(0, performance.now() - frameRequestedAt);
            frameLatencyTotal += latency; frameLatencySamples++;
            host.dataset.frameLatencyLast = String(latency); host.dataset.frameLatencyMean = String(frameLatencyTotal / frameLatencySamples);
            frameRequestedAt = 0;
          }
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
    video.addEventListener('timeupdate', updateActual);
    for (const event of ['play', 'pause', 'ended']) video.addEventListener(event, updateActual);
    video.addEventListener('error', () => { if (!disposed && videoStarted) failVideo('这段视频暂时无法读取，已保留原画。请检查文件后重新打开。'); });
    if (!backgroundOnly) {
    host.dataset.motionState = 'idle';
    if (window.OrbitInertia && typeof window.OrbitInertia.create === 'function') {
      motion = window.OrbitInertia.create({onChange:requestPercent, onState:state => { host.dataset.motionState = state; }});
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
    retry.addEventListener('click', startLoad);
    host.addEventListener('pointerdown', event => {
      if (!seekReady() || (event.pointerType === 'mouse' && event.button !== 0)) return;
      const width = host.getBoundingClientRect().width * (region ? region.artworkRect.width / b.width : 1);
      pause(); dragging = {id:event.pointerId, x:event.clientX, width, percent:phaseMapping.toPhase(displayTime() / displayDuration() * 100)}; host.setPointerCapture(event.pointerId);
      if (motion) motion.begin(dragging.percent, event.clientX, performance.now());
    });
    host.addEventListener('pointermove', event => {
      if (!dragging || event.pointerId !== dragging.id) return;
      if (motion) motion.move(event.clientX, dragging.width, performance.now());
      else requestPercent(dragging.percent + (event.clientX - dragging.x) / Math.max(1, dragging.width) * 100);
    });
    host.addEventListener('pointerup', event => {
      if (!dragging || event.pointerId !== dragging.id) return;
      dragging = null;
      if (motion) motion.end(performance.now());
    });
    for (const event of ['pointercancel', 'lostpointercapture']) host.addEventListener(event, event => {
      if (!dragging || event.pointerId !== dragging.id) return;
      cancelMotion();
    });
    host.addEventListener('keydown', event => {
      if (!seekReady()) return;
      const actual = phaseMapping.toPhase(displayTime() / displayDuration() * 100);
      if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') { event.preventDefault(); cancelMotion(); requestPercent(actual + (event.key === 'ArrowLeft' ? -2 : 2)); }
      else if (event.key === 'Home') { event.preventDefault(); reset(); }
    });
    }
    let observer = null;
    if ('IntersectionObserver' in window) { observer = new IntersectionObserver(entries => { if (!entries[0].isIntersecting) pause(); }); observer.observe(host); }
    startLoad();
    return {pause, reset, setBackdropVisible, destroy() { disposed = true; stopEdgeCallback(); if (edgeCanvas) { edgeCanvas.width = 0; edgeCanvas.height = 0; } pendingPlay = false; protectionAttempt++; clearTimeout(letteringTimer); if (letteringImage) { letteringImage.onload = null; letteringImage.onerror = null; letteringImage.removeAttribute('src'); } if (motion) motion.destroy(); if (frameRenderer) frameRenderer.destroy(); dragging = null; video.pause(); updateActual(); clearTimeout(timer); clearTimeout(loadTimer); clearTimeout(protectionTimer); if (protectionLoader) { protectionLoader.onload = null; protectionLoader.onerror = null; protectionLoader.removeAttribute('src'); } if (observer) observer.disconnect(); if (videoStarted) { video.removeAttribute('src'); video.load(); } host.remove(); row.remove(); }};
  }
  window.ComicPanelPlayer = Object.freeze({eligible, displayable, requiresInteractionLayout, interactionRegions, createFixedProtectionOverlay, viewPhaseMapping, frameEdgeExtension, regionMediaOverrides, isBoundRegionMedia, regionMediaCacheBinding, create});
})();
