import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const imageDir = path.resolve(process.cwd(), "public/images");
const supportedExtensions = new Set([".jpg", ".jpeg", ".webp"]);
const maxWidth = 1600;
const webpQuality = 72;
const avifQuality = 58;

const files = fs
  .readdirSync(imageDir)
  .filter((file) => supportedExtensions.has(path.extname(file).toLowerCase()))
  .map((file) => path.join(imageDir, file));

let webpBytes = 0;
let avifBytes = 0;

for (const filePath of files) {
  const ext = path.extname(filePath).toLowerCase();
  const targetPath = filePath.replace(/\.(jpg|jpeg|webp)$/i, ".webp");
  const avifPath = filePath.replace(/\.(jpg|jpeg|webp)$/i, ".avif");
  const inputBuffer = fs.readFileSync(filePath);

  const pipeline = sharp(inputBuffer).resize({ width: maxWidth, withoutEnlargement: true });
  const optimizedBuffer = await pipeline
    .clone()
    .webp({ quality: webpQuality, effort: 6 })
    .toBuffer();
  const avifBuffer = await pipeline
    .clone()
    .avif({ quality: avifQuality, effort: 6 })
    .toBuffer();

  fs.writeFileSync(targetPath, optimizedBuffer);
  fs.writeFileSync(avifPath, avifBuffer);

  if (ext !== ".webp") {
    fs.unlinkSync(filePath);
  }

  webpBytes += fs.statSync(targetPath).size;
  avifBytes += fs.statSync(avifPath).size;
}

console.log(
  `Optimized ${files.length} images in ${imageDir}. ` +
    `Generated ${(webpBytes / 1024).toFixed(1)} KB WebP and ${(avifBytes / 1024).toFixed(1)} KB AVIF.`,
);
