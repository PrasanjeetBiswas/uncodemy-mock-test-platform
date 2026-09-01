const fs = require('fs');
let navContent = fs.readFileSync('public/uncodemy-navbar.js', 'utf8');
navContent = navContent.replace(/src="\/img\/logo\.webp"/g, 'src="/img/logo.png"');
fs.writeFileSync('public/uncodemy-navbar.js', navContent);
console.log('Fixed navbar logo');
