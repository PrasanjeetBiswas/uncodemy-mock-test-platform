const fs = require('fs');
let css = fs.readFileSync('public/All.css', 'utf8');
css = css.replace(/0,300;0,400.*display=swap'\);\n?/, '');
css = css.replace(/400;500.*display=swap'\);\n?/, '');
fs.writeFileSync('public/All.css', css);
console.log('Fixed All.css syntax error!');
