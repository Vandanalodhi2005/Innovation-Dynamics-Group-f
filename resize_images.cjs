const sharp = require('sharp');
const path = require('path');

const imagesToResize = [
  { src: 'public/homeImage/img5.webp', width: 400, height: 400 }, // Ink & Toner (displayed 176x176)
  { src: 'public/homeImage/img2.webp', width: 600, height: 400 }, // Office (displayed 264x176)
  { src: 'public/logo/hp-partner.png', width: 250, height: 125 }  // HP Logo (displayed 114x56)
];

async function resize() {
  for (const img of imagesToResize) {
    const inputPath = path.join('d:', 'TechnoSky_Official', 'InnovationDynamicsGroup', 'frontend', img.src);
    const outputPath = inputPath.replace(/(\.[^.]+)$/, '_resized$1');
    
    try {
      await sharp(inputPath)
        .resize(img.width, img.height, { fit: 'inside' })
        .toFile(outputPath);
      console.log(`Resized: ${img.src} -> ${outputPath}`);
    } catch (err) {
      console.error(`Error resizing ${img.src}:`, err);
    }
  }
}

resize();
