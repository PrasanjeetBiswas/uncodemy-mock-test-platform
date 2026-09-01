const fs = require('fs');
let js = fs.readFileSync('public/uncodemy-navbar.js', 'utf8');

// Remove ensureStylesLoaded completely because All.css is handled by Vite
js = js.replace(/var REQUIRED_STYLES = \[[\s\S]*?\];/, '');
js = js.replace(/function ensureStylesLoaded\(\) \{[\s\S]*?\}/, '');
js = js.replace(/ensureStylesLoaded\(\);/, '');

fs.writeFileSync('public/uncodemy-navbar.js', js);
console.log('Removed dynamic CSS loading from navbar');
