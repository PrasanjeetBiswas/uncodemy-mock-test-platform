const fs = require('fs');
const path = require('path');

const newTests = [
  {
    "id": "api-test-01",
    "seriesId": "api-testing",
    "title": "API Testing Fundamentals",
    "durationMinutes": 30,
    "totalQuestions": 30,
    "passingPercentage": 40
  },
  {
    "id": "api-test-02",
    "seriesId": "api-testing",
    "title": "HTTP Methods, Status Codes & Authentication",
    "durationMinutes": 30,
    "totalQuestions": 30,
    "passingPercentage": 40
  },
  {
    "id": "api-test-03",
    "seriesId": "api-testing",
    "title": "API Testing Tools & Techniques",
    "durationMinutes": 35,
    "totalQuestions": 35,
    "passingPercentage": 45
  },
  {
    "id": "api-test-04",
    "seriesId": "api-testing",
    "title": "Advanced API Testing (GraphQL, WebSocket, Security)",
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
console.log('Added ' + newTests.length + ' API tests to tests.js');
