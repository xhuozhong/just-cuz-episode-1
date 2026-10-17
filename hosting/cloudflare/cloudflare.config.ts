import { defineConfig } from 'cf/config';

export default defineConfig({
  accountId: 'c09c8f971c8a32ca24a360de7fe7b9bf',
  worker: {
    name: 'just-cuz-episode-1-mirror',
    compatibilityDate: '2026-10-18',
    workersDev: true,
    previewUrls: false,
    assets: {
      htmlHandling: 'none',
      notFoundHandling: 'none',
      runWorkerFirst: false,
    },
  },
});
