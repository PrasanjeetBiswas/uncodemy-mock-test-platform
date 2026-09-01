const fs = require('fs');
const path = require('path');

const newTests = [
  {
    "id": "dataviz-test-01",
    "seriesId": "data-visualization",
    "title": "Data Visualization Fundamentals & Chart Types",
    "durationMinutes": 30,
    "totalQuestions": 30,
    "passingPercentage": 40
  },
  {
    "id": "dataviz-test-02",
    "seriesId": "data-visualization",
    "title": "Design Principles & Visualization Tools",
    "durationMinutes": 45,
    "totalQuestions": 40,
    "passingPercentage": 50
  },
  {
    "id": "dataviz-test-03",
    "seriesId": "data-visualization",
    "title": "Dashboard Design, Storytelling & Advanced Topics",
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
console.log('Added ' + newTests.length + ' dataviz tests to tests.js');
