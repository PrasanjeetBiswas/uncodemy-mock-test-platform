const fs = require('fs');
let c = fs.readFileSync('src/data/courses.js', 'utf8');
c = c.replace(/"tests": "0",\n\s*"questions": "0"/g, '"tests": "8",\n      "questions": "231"');
fs.writeFileSync('src/data/courses.js', c);
console.log('Fixed python stats');
