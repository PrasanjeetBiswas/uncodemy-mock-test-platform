const fs = require('fs');
const path = require('path');

const newTests = [
  {
    "id": "ds-mock-test-01",
    "seriesId": "ds-full-mock",
    "title": "Data Science Mock Test - Fundamentals & Data Preprocessing",
    "durationMinutes": 30,
    "totalQuestions": 30,
    "passingPercentage": 40
  },
  {
    "id": "ds-mock-test-02",
    "seriesId": "ds-full-mock",
    "title": "Data Science Mock Test - Statistics & Exploratory Data Analysis",
    "durationMinutes": 40,
    "totalQuestions": 35,
    "passingPercentage": 45
  },
  {
    "id": "ds-mock-test-03",
    "seriesId": "ds-full-mock",
    "title": "Data Science Mock Test - Machine Learning & Modeling",
    "durationMinutes": 45,
    "totalQuestions": 40,
    "passingPercentage": 50
  },
  {
    "id": "ds-mock-test-04",
    "seriesId": "ds-full-mock",
    "title": "Data Science Mock Test - Deep Learning & Advanced Topics",
    "durationMinutes": 40,
    "totalQuestions": 35,
    "passingPercentage": 45
  },
  {
    "id": "ds-mock-test-05",
    "seriesId": "ds-full-mock",
    "title": "Data Science Mock Test - Comprehensive Capstone",
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
console.log('Added ' + newTests.length + ' ds-full-mock tests to tests.js');
