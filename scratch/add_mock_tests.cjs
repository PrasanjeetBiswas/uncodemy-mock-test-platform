const fs = require('fs');
const path = require('path');

const newTests = [
  {
    "id": "mock-test-01",
    "seriesId": "full-mock-tests",
    "title": "Data Analytics Mock Test - Fundamentals",
    "durationMinutes": 30,
    "totalQuestions": 30,
    "passingPercentage": 40
  },
  {
    "id": "mock-test-02",
    "seriesId": "full-mock-tests",
    "title": "Data Analytics Mock Test - Core Concepts",
    "durationMinutes": 40,
    "totalQuestions": 35,
    "passingPercentage": 45
  },
  {
    "id": "mock-test-03",
    "seriesId": "full-mock-tests",
    "title": "Data Analytics Mock Test - Advanced Techniques",
    "durationMinutes": 50,
    "totalQuestions": 40,
    "passingPercentage": 50
  },
  {
    "id": "mock-test-04",
    "seriesId": "full-mock-tests",
    "title": "Data Analytics Mock Test - Visualization & BI",
    "durationMinutes": 40,
    "totalQuestions": 35,
    "passingPercentage": 45
  },
  {
    "id": "mock-test-05",
    "seriesId": "full-mock-tests",
    "title": "Data Analytics Mock Test - Comprehensive Capstone",
    "durationMinutes": 55,
    "totalQuestions": 45,
    "passingPercentage": 55
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
console.log('Added ' + newTests.length + ' mock tests to tests.js');
