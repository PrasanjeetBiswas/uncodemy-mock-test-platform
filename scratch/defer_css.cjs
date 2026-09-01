const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');
html = html.replace('<link rel="stylesheet" href="/All.css" />', '<link rel="stylesheet" href="/All.css" media="print" onload="this.media=\'all\'" />\n    <noscript><link rel="stylesheet" href="/All.css" /></noscript>');
fs.writeFileSync('index.html', html);
console.log('Deferred All.css');
