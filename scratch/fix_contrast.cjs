const fs = require('fs');
let css = fs.readFileSync('public/All.css', 'utf8');

// Fix lime pill
css = css.replace(/\.abhay-lime-pill\s*{[^}]*}/g, '.abhay-lime-pill { background: var(--lime); color: #000; font-weight: 900; }');

// Fix orange button if any
css = css.replace(/--orange:\s*#[a-f0-9]+;/gi, '--orange: #d1350e;'); 

// Ensure blue has white text
css = css.replace(/\.abhay-blue-pill\s*{[^}]*}/g, '.abhay-blue-pill { background: var(--blue); color: #fff; font-weight: 900; }');

fs.writeFileSync('public/All.css', css);
console.log('Fixed contrast');
