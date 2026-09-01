const fs = require('fs');
let s = fs.readFileSync('src/data/subjects.js', 'utf8');
s = s.replace(/"testsCount": 0,\n\s*"icon": "TerminalSquare"/g, '"testsCount": 8,\n      "icon": "TerminalSquare"');
fs.writeFileSync('src/data/subjects.js', s);
console.log('Fixed subjects.js');
