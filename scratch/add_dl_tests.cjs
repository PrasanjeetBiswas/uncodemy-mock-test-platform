const fs = require('fs');
const path = require('path');

const newTests = [
  {
    "id": "dl-test-01",
    "seriesId": "deep-learning",
    "title": "Deep Learning Fundamentals",
    "durationMinutes": 30,
    "totalQuestions": 30,
    "passingPercentage": 40
  },
  {
    "id": "dl-test-02",
    "seriesId": "deep-learning",
    "title": "Neural Network Architectures",
    "durationMinutes": 40,
    "totalQuestions": 35,
    "passingPercentage": 45
  },
  {
    "id": "dl-test-03",
    "seriesId": "deep-learning",
    "title": "Advanced Deep Learning & Applications",
    "durationMinutes": 45,
    "totalQuestions": 40,
    "passingPercentage": 50
  }
];

const filepath = path.join(__dirname, '../src/data/tests.js');
let content = fs.readFileSync(filepath, 'utf8');

content = content.trim();
if (content.endsWith('];')) {
  content = content.slice(0, -2);
} else if (content.endsWith(']')) {
  content = content.slice(0, -1);
}

content += ',\n' + newTests.map(t => JSON.stringify(t, null, 2)).join(',\n') + '\n];\n';

fs.writeFileSync(filepath, content, 'utf8');
console.log('Added ' + newTests.length + ' dl tests to tests.js');
