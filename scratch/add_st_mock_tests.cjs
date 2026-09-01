const fs = require('fs');
const path = require('path');

const newTests = [
  {
    "id": "st-mock-test-01",
    "seriesId": "st-full-mock",
    "title": "Software Testing Mock Test - Fundamentals & Core Concepts",
    "durationMinutes": 30,
    "totalQuestions": 30,
    "passingPercentage": 40
  },
  {
    "id": "st-mock-test-02",
    "seriesId": "st-full-mock",
    "title": "Software Testing Mock Test - Advanced Techniques & Automation",
    "durationMinutes": 40,
    "totalQuestions": 35,
    "passingPercentage": 45
  },
  {
    "id": "st-mock-test-03",
    "seriesId": "st-full-mock",
    "title": "Software Testing Mock Test - Comprehensive Capstone",
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
console.log('Added ' + newTests.length + ' full mock tests to tests.js');
