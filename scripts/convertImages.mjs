import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const publicDir = path.join(__dirname, '..', 'public');

async function convertImages() {
  const files = fs.readdirSync(publicDir);
  let count = 0;
  for (const file of files) {
    if (file.match(/\.(jpg|jpeg|png)$/i)) {
      const ext = path.extname(file);
      const base = path.basename(file, ext);
      const inPath = path.join(publicDir, file);
      const outPath = path.join(publicDir, `${base}.webp`);
      
      try {
        await sharp(inPath).webp({ quality: 80 }).toFile(outPath);
        console.log(`Converted: ${file} -> ${base}.webp`);
        // Delete original file
        fs.unlinkSync(inPath);
        count++;
      } catch (err) {
        console.error(`Error converting ${file}:`, err);
      }
    }
  }
  console.log(`Successfully converted ${count} images to WebP.`);
}

convertImages().catch(console.error);
