const fs = require('fs');

// Fix Footer.jsx
let footerContent = fs.readFileSync('src/components/layout/Footer.jsx', 'utf8');
footerContent = footerContent.replace(/\/Assets\/Uncodemy logo-10\.png/g, '/img/logo.webp');
footerContent = footerContent.replace(/\/images\//g, '/img/');
footerContent = footerContent.replace(/\.png/g, '.webp');
footerContent = footerContent.replace(/\.jpeg/g, '.webp');
footerContent = footerContent.replace(/\.jpg/g, '.webp');
fs.writeFileSync('src/components/layout/Footer.jsx', footerContent);

// Fix uncodemy-navbar.js
let navContent = fs.readFileSync('public/uncodemy-navbar.js', 'utf8');
navContent = navContent.replace(/"images\//g, '"/img/');
navContent = navContent.replace(/'images\//g, "'/img/");
navContent = navContent.replace(/src="images\//g, 'src="/img/');
navContent = navContent.replace(/\.png/g, '.webp');
navContent = navContent.replace(/\.jpeg/g, '.webp');
navContent = navContent.replace(/\.jpg/g, '.webp');
fs.writeFileSync('public/uncodemy-navbar.js', navContent);

console.log('Fixed image paths');
