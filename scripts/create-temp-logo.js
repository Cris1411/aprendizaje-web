const sharp = require('sharp');
const path = require('path');

const size = 512;
const logoPath = path.join(process.cwd(), 'src', 'assets', 'logo.png');

// Crear un logo temporal con un gradiente y texto
sharp({
  create: {
    width: size,
    height: size,
    channels: 4,
    background: { r: 41, g: 128, b: 185, alpha: 1 }
  }
})
.composite([{
  input: {
    text: {
      text: 'AW',
      font: 'Arial',
      fontSize: 200,
      rgba: true
    }
  },
  gravity: 'center'
}])
.png()
.toFile(logoPath)
.then(() => console.log('Logo temporal creado'))
.catch(err => console.error('Error creando logo:', err));
