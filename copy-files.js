import fs from 'fs';
import path from 'path';

console.log('============================================');
console.log(' Copying Firebase Component Files');
console.log('============================================\n');

// Session files directory
const sessionDir = 'C:\\Users\\ambho\\.copilot\\session-state\\dae297e9-b228-4051-9a64-b398d223dbce\\files';

// Files to copy
const files = [
  { from: 'firebase.ts', to: 'src/config/firebase.ts' },
  { from: 'AuthContext.tsx', to: 'src/components/auth/AuthContext.tsx' },
  { from: 'ProtectedRoute.tsx', to: 'src/components/auth/ProtectedRoute.tsx' },
  { from: 'Login.tsx', to: 'src/components/auth/Login.tsx' },
  { from: 'AdminPanel.tsx', to: 'src/components/admin/AdminPanel.tsx' }
];

let success = 0;
let failed = 0;

files.forEach(file => {
  const source = path.join(sessionDir, file.from);
  const dest = file.to;
  
  try {
    if (fs.existsSync(source)) {
      const content = fs.readFileSync(source, 'utf8');
      fs.writeFileSync(dest, content, 'utf8');
      console.log(`✓ Copied: ${file.from} → ${dest}`);
      success++;
    } else {
      console.log(`✗ Source not found: ${source}`);
      failed++;
    }
  } catch (error) {
    console.log(`✗ Failed to copy ${file.from}: ${error.message}`);
    failed++;
  }
});

console.log('\n============================================');
console.log(` Copied ${success} files successfully`);
if (failed > 0) {
  console.log(` ${failed} files failed`);
}
console.log('============================================\n');

if (success === files.length) {
  console.log('✓ All component files copied!');
  console.log('\nNext steps:');
  console.log('1. Run: npm install react-router-dom');
  console.log('2. Update main.tsx (see instructions below)');
  console.log('3. Update App.tsx (see APP_TSX_CHANGES.md)');
} else {
  console.log('⚠ Some files failed to copy.');
  console.log('Please copy them manually from:');
  console.log(sessionDir);
}
