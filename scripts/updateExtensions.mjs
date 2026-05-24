import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const fileToUpdate = path.join(__dirname, '..', 'src', 'app', 'services', 'page.tsx');

let content = fs.readFileSync(fileToUpdate, 'utf8');
content = content.replace(/\.jpg/g, '.webp');
content = content.replace(/\.png/g, '.webp');

fs.writeFileSync(fileToUpdate, content, 'utf8');
console.log('Updated extensions in src/app/services/page.tsx');
