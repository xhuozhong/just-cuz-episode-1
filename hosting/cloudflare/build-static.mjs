import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { loadAndParseConfig } from '@cloudflare/config';
import { cleanBuildOutputDir, readBuildOutput, writeAssets, writeRootConfig, writeWorkerConfig } from '@cloudflare/build-output-utils';

const projectRoot = path.dirname(fileURLToPath(import.meta.url));
const sourceDirectory = path.join(projectRoot, 'public-v8');
const context = { isPreview:false, mode:undefined };
const maxFileBytes = 25 * 1024 * 1024;
const sha = bytes => createHash('sha256').update(bytes).digest('hex');
const relativeName = file => path.relative(sourceDirectory, file).split(path.sep).join('/');

async function inventory(directory, result=[]) {
  for (const entry of await fs.readdir(directory, { withFileTypes:true })) {
    const file = path.join(directory, entry.name);
    assert(!entry.isSymbolicLink(), 'Mirror assets cannot contain symbolic links');
    if (entry.isDirectory()) await inventory(file, result);
    else {
      assert(entry.isFile(), 'Mirror assets must be ordinary files');
      const relative = relativeName(file);
      const packet = relative.match(/^packets\/([a-f0-9]{64})\.orbf$/);
      assert(packet || ['delivery-probe.bin', '_headers'].includes(relative), `Unexpected mirror asset: ${relative}`);
      const bytes = await fs.readFile(file);
      assert(bytes.length > 0 && bytes.length <= maxFileBytes, `Asset exceeds the free-tier file limit: ${relative}`);
      const checksum = sha(bytes);
      if (packet) {
        assert.equal(checksum, packet[1], `Content-addressed packet SHA mismatch: ${relative}`);
        assert.equal(bytes.subarray(0,4).toString('ascii'), 'ORBF', `Invalid packet signature: ${relative}`);
      }
      result.push({ relative, bytes:bytes.length, sha256:checksum });
    }
  }
  return result;
}

// The SDK only clears .cloudflare/output. Check its resolved ancestors before cleanup.
async function verifyOutputLocation() {
  for (const relative of ['.cloudflare', '.cloudflare/output', '.cloudflare/output/v0']) {
    const target = path.resolve(projectRoot, relative);
    assert(!path.relative(projectRoot, target).startsWith('..') && target !== projectRoot);
    try {
      const info = await fs.lstat(target);
      assert(!info.isSymbolicLink(), `Build output must not be a symbolic link: ${relative}`);
      assert.equal(path.relative(target, await fs.realpath(target)), '', `Build output resolves outside its directory: ${relative}`);
    } catch (error) {
      if (error.code !== 'ENOENT') throw error;
    }
  }
}

const parsed = await loadAndParseConfig(path.join(projectRoot, 'cloudflare.config.ts'), context);
if (!parsed.result.success) throw parsed.result.error;
const { worker, containers, ...settings } = parsed.result.data;
assert(worker && worker.entrypoint === undefined, 'The asset mirror must have no Worker entrypoint');
assert(!containers?.length && !Object.keys(worker.env || {}).length && !Object.keys(worker.exports || {}).length, 'The asset mirror must have no runtime bindings or containers');
assert.equal(worker.assets?.runWorkerFirst, false, 'Static assets must be served without running a Worker first');
try { assert((await fs.stat(sourceDirectory)).isDirectory()); }
catch (error) { throw new Error('public-v8 is not prepared; run prepare_assets.py first', { cause:error }); }
const assets = await inventory(sourceDirectory);
assert(assets.length <= 20000, 'Mirror exceeds the free-tier asset count');
assert(assets.some(asset => asset.relative === '_headers') && assets.some(asset => asset.relative === 'delivery-probe.bin'), 'Mirror headers and line probe are required');
assert(assets.some(asset => asset.relative.startsWith('packets/')), 'Mirror contains no ORBF packets');

await verifyOutputLocation();
await cleanBuildOutputDir(projectRoot);
await writeRootConfig(projectRoot, settings, context);
await writeAssets({ root:projectRoot, sourceDirectory });
await writeWorkerConfig({ root:projectRoot, config:worker });
const output = await readBuildOutput(projectRoot);
const deployed = output.workers.default;
assert(deployed.assetsDir && !deployed.bundleDir && !deployed.config.manifest, 'Build output must contain only static assets');
for (const asset of assets) {
  const copied = await fs.readFile(path.join(deployed.assetsDir, asset.relative));
  assert.equal(copied.length, asset.bytes);
  assert.equal(sha(copied), asset.sha256, `Build output changed asset bytes: ${asset.relative}`);
}
console.log(JSON.stringify({ workerName:deployed.config.name, assetFiles:assets.length,
  packetFiles:assets.filter(asset => asset.relative.startsWith('packets/')).length,
  bytes:assets.reduce((sum, asset) => sum + asset.bytes, 0), assetDirectory:deployed.assetsDir,
  workerEntrypoint:null, runtimeBindings:0, allCopiedHashesMatch:true }, null, 2));
