const fs = require('fs');
let nav = fs.readFileSync('public/uncodemy-navbar.js', 'utf8');
nav = nav.replace('<img class="abhay-brand-logo" src="/img/logo.png" alt="UnCodemy" />', '<img class="abhay-brand-logo" src="/img/logo.png" alt="Uncodemy Logo" width="150" height="50" />');
fs.writeFileSync('public/uncodemy-navbar.js', nav);
console.log('Fixed navbar image');
