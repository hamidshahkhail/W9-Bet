#!/usr/bin/env node
import { readdir, rename, unlink, stat } from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";
import sharp from "sharp";

const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");

const JOBS = [
  {
    dir: "public/images/Blog",
    width: 1200,
    height: 675,
    quality: 70,
  },
  {
    dir: "public/images",
    files: ["W9-Bet-Game.webp", "W9-Bet-Money-Game.webp", "W9-Bet-Pakistan.webp", "W9Bet-Download.webp"],
    width: 1024,
    height: 576,
    quality: 75,
  },
  {
    dir: "public/images",
    files: ["w9-bet-pakistan-gaming-logo.webp", "w9-bet-pakistan-logo-banner.webp"],
    width: null,
    height: null,
    quality: 82,
  },
];

async function optimizeFile(filePath, { width, height, quality }) {
  const input = sharp(filePath);
  const meta = await input.metadata();
  let pipeline = input;

  if (width && height && (meta.width > width || meta.height > height)) {
    pipeline = pipeline.resize(width, height, { fit: "inside", withoutEnlargement: true });
  }

  const temp = `${filePath}.opt.webp`;
  await pipeline.webp({ quality, effort: 5 }).toFile(temp);

  const before = await stat(filePath);
  const after = await stat(temp);
  await unlink(filePath);
  await rename(temp, filePath);

  console.log(
    `${path.basename(filePath)}: ${meta.width}x${meta.height} → saved ${Math.round((1 - after.size / before.size) * 100)}% (${Math.round(before.size / 1024)}KB → ${Math.round(after.size / 1024)}KB)`,
  );
}

for (const job of JOBS) {
  const dir = path.join(ROOT, job.dir);
  const files = job.files ?? (await readdir(dir)).filter((f) => f.endsWith(".webp"));
  for (const file of files) {
    await optimizeFile(path.join(dir, file), job);
  }
}
