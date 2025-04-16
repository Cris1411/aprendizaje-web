const sharp = require('sharp');
const fs = require('fs');
const path = require('path');
const toIco = require('to-ico');

const sizes = [16, 32, 64, 192, 512];
const sourceImage = path.join(process.cwd(), 'src', 'assets', 'logo.png');
const outputDir = path.join(process.cwd(), 'public');

// Asegurarse de que el directorio de salida existe
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Generar favicon.ico (múltiples tamaños en un archivo)
const faviconSizes = [16, 32, 64];
Promise.all(
  faviconSizes.map(size =>
    sharp(sourceImage)
      .resize(size, size)
      .toBuffer()
  )
).then(buffers => {

  toIco(buffers).then(buf => {
    fs.writeFileSync(path.join(outputDir, 'favicon.ico'), buf);
  });
});

// Generar PNGs para PWA
sizes.forEach(size => {
  sharp(sourceImage)
    .resize(size, size)
    .png()
    .toFile(path.join(outputDir, `logo${size}.png`))
    .then(info => console.log(`Generated ${size}x${size} icon`))
    .catch(err => console.error(`Error generating ${size}x${size} icon:`, err));
});
