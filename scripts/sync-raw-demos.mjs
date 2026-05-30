import { cp, mkdir, rm } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const publicDir = path.join(root, 'public');
const rawDemos = [
  'gimnasio-cai',
  'hospital-veterinario-san-vicente',
  'floristeria-tropical-garden',
];

await mkdir(publicDir, { recursive: true });

for (const demo of rawDemos) {
  const from = path.join(root, demo);
  const to = path.join(publicDir, demo);
  if (!existsSync(from)) {
    throw new Error(`No existe la demo raw requerida: ${from}`);
  }
  await rm(to, { recursive: true, force: true });
  await cp(from, to, { recursive: true, force: true });
  console.log(`raw demo sync: ${demo} -> public/${demo}`);
}
