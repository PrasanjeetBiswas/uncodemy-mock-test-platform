const fs = require('fs');
const path = require('path');

const newTests = [
  {
    "id": "node-test-01",
    "seriesId": "backend",
    "title": "Node.js Fundamentals & Core Modules",
    "durationMinutes": 30,
    "totalQuestions": 30,
    "passingPercentage": 40
  },
  {
    "id": "node-test-02",
    "seriesId": "backend",
    "title": "Asynchronous Programming & Event Loop",
    "durationMinutes": 30,
    "totalQuestions": 30,
    "passingPercentage": 40
  },
  {
    "id": "node-test-03",
    "seriesId": "backend",
    "title": "Express.js Basics & Routing",
    "durationMinutes": 35,
    "totalQuestions": 35,
    "passingPercentage": 45
  },
  {
    "id": "node-test-04",
    "seriesId": "backend",
    "title": "Database Integration (MongoDB & SQL)",
    "durationMinutes": 35,
    "totalQuestions": 35,
    "passingPercentage": 45
  },
  {
    "id": "node-test-05",
    "seriesId": "backend",
    "title": "Authentication, Security & Validation",
    "durationMinutes": 35,
    "totalQuestions": 35,
    "passingPercentage": 45
  },
  {
    "id": "node-test-06",
    "seriesId": "backend",
    "title": "Advanced Backend: Testing, WebSocket, Deployment & Performance",
    "durationMinutes": 35,
    "totalQuestions": 35,
    "passingPercentage": 45
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
console.log('Added ' + newTests.length + ' backend tests to tests.js');
