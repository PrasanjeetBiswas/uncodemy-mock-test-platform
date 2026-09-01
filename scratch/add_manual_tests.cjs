const fs = require('fs');
const path = require('path');

const newTests = [
  {
    "id": "manual-test-01",
    "seriesId": "manual",
    "title": "Manual Testing Fundamentals",
    "durationMinutes": 30,
    "totalQuestions": 30,
    "passingPercentage": 40
  },
  {
    "id": "manual-test-02",
    "seriesId": "manual",
    "title": "Types of Testing & Testing Levels",
    "durationMinutes": 30,
    "totalQuestions": 30,
    "passingPercentage": 40
  },
  {
    "id": "manual-test-03",
    "seriesId": "manual",
    "title": "Test Design Techniques",
    "durationMinutes": 35,
    "totalQuestions": 35,
    "passingPercentage": 45
  },
  {
    "id": "manual-test-04",
    "seriesId": "manual",
    "title": "Software Development Life Cycle & Testing",
    "durationMinutes": 35,
    "totalQuestions": 35,
    "passingPercentage": 45
  },
  {
    "id": "manual-test-05",
    "seriesId": "manual",
    "title": "Test Management, Metrics & Defect Tracking",
    "durationMinutes": 40,
    "totalQuestions": 40,
    "passingPercentage": 50
  },
  {
    "id": "manual-test-06",
    "seriesId": "manual",
    "title": "Advanced Manual Testing & Automation Overview",
    "durationMinutes": 40,
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
console.log('Added ' + newTests.length + ' manual tests to tests.js');
