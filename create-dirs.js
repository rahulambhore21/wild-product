import fs from 'fs';
import path from 'path';

console.log('============================================');
console.log(' Firebase Admin Panel Setup');
console.log('============================================\n');

// Create directories
const dirs = [
  'src/config',
  'src/components',
  'src/components/auth',
  'src/components/admin'
];

console.log('Creating directories...');
dirs.forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
    console.log(`✓ Created: ${dir}`);
  } else {
    console.log(`✓ Exists: ${dir}`);
  }
});

console.log('\n============================================');
console.log(' Directories created successfully!');
console.log('============================================\n');
console.log('Next: Run "node copy-files.js" to copy all component files');
