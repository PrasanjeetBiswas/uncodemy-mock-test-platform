const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');
html = html.replace(/<link rel="preload" as="style" href="\/All\.css" \/>\s*/g, '');
html = html.replace(/<link rel="stylesheet" href="\/All\.css" media="print" onload="this\.media='all'" \/>\s*<noscript><link rel="stylesheet" href="\/All\.css" \/><\/noscript>\s*/g, '');
fs.writeFileSync('index.html', html);
console.log('Removed All.css from index.html');
