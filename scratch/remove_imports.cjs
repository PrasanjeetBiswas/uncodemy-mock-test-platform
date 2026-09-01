const fs = require('fs');
let css = fs.readFileSync('public/All.css', 'utf8');
css = css.replace(/@import url\('https:\/\/fonts.googleapis.com[^;]+;\n?/g, '');
fs.writeFileSync('public/All.css', css);
console.log('Removed @import from All.css');
