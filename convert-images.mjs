import sharp from 'sharp';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.join(__dirname, 'public');

const images = [
  // img5.jpg — the biggest offender (1.2MB, 2500x2500) → resize to 1200px wide
  {
    input:  path.join(publicDir, 'homeImage/img5.jpg'),
    output: path.join(publicDir, 'homeImage/img5.webp'),
    resize: { width: 1200, withoutEnlargement: true },
  },
  // Also convert all other homeImages
  {
    input:  path.join(publicDir, 'homeImage/img1.jpg'),
    output: path.join(publicDir, 'homeImage/img1.webp'),
    resize: { width: 800, withoutEnlargement: true },
  },
  {
    input:  path.join(publicDir, 'homeImage/img2.jpg'),
    output: path.join(publicDir, 'homeImage/img2.webp'),
    resize: { width: 800, withoutEnlargement: true },
  },
  {
    input:  path.join(publicDir, 'homeImage/img3.jpg'),
    output: path.join(publicDir, 'homeImage/img3.webp'),
    resize: { width: 800, withoutEnlargement: true },
  },
  {
    input:  path.join(publicDir, 'homeImage/img4.jpg'),
    output: path.join(publicDir, 'homeImage/img4.webp'),
    resize: { width: 800, withoutEnlargement: true },
  },
  {
    input:  path.join(publicDir, 'homeImage/img6.jpg'),
    output: path.join(publicDir, 'homeImage/img6.webp'),
    resize: { width: 800, withoutEnlargement: true },
  },
  // hero-right.png
  {
    input:  path.join(publicDir, 'hero/hero-right.png'),
    output: path.join(publicDir, 'hero/hero-right.webp'),
    resize: { width: 700, withoutEnlargement: true },
  },
  // Other hero images
  {
    input:  path.join(publicDir, 'hero/premium_printer_hero.png'),
    output: path.join(publicDir, 'hero/premium_printer_hero.webp'),
    resize: { width: 700, withoutEnlargement: true },
  },
];

console.log('🔄 Converting images to WebP...\n');

for (const img of images) {
  try {
    const info = await sharp(img.input)
      .resize(img.resize)
      .webp({ quality: 82, effort: 5 })
      .toFile(img.output);

    const inputStats = (await import('fs')).statSync(img.input);
    const savings = ((inputStats.size - info.size) / inputStats.size * 100).toFixed(1);
    console.log(`✅ ${path.basename(img.input)} → ${path.basename(img.output)}`);
    console.log(`   ${(inputStats.size/1024).toFixed(0)} KB → ${(info.size/1024).toFixed(0)} KB  (saved ${savings}%)\n`);
  } catch (err) {
    console.error(`❌ Failed to convert ${img.input}: ${err.message}`);
  }
}

console.log('✨ Done! All images converted to WebP.');
