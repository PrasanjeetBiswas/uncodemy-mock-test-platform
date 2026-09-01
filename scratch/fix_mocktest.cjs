const fs = require('fs');
let content = fs.readFileSync('src/pages/MockTest.jsx', 'utf8');

content = content.replace(
  'onClick={() => goToQuestion(index)}',
  'onClick={() => goToQuestion(index)} aria-label={`Go to question ${index + 1}`}'
);

fs.writeFileSync('src/pages/MockTest.jsx', content);
console.log('Fixed MockTest.jsx accessibility');
