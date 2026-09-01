const fs = require('fs');
const path = require('path');

const newTests = [
  {
    "id": "fs-mock-01",
    "seriesId": "fs-full-mock",
    "title": "Full Stack Mock Test 01: Fundamentals",
    "durationMinutes": 30,
    "totalQuestions": 30,
    "passingPercentage": 40
  },
  {
    "id": "fs-mock-02",
    "seriesId": "fs-full-mock",
    "title": "Full Stack Mock Test 02: Frontend Development",
    "durationMinutes": 30,
    "totalQuestions": 30,
    "passingPercentage": 40
  },
  {
    "id": "fs-mock-03",
    "seriesId": "fs-full-mock",
    "title": "Full Stack Mock Test 03: Backend Development",
    "durationMinutes": 35,
    "totalQuestions": 35,
    "passingPercentage": 45
  },
  {
    "id": "fs-mock-04",
    "seriesId": "fs-full-mock",
    "title": "Full Stack Mock Test 04: Database Management",
    "durationMinutes": 35,
    "totalQuestions": 35,
    "passingPercentage": 45
  },
  {
    "id": "fs-mock-05",
    "seriesId": "fs-full-mock",
    "title": "Full Stack Mock Test 05: API & Integration",
    "durationMinutes": 35,
    "totalQuestions": 35,
    "passingPercentage": 45
  },
  {
    "id": "fs-mock-06",
    "seriesId": "fs-full-mock",
    "title": "Full Stack Mock Test 06: Advanced Frontend",
    "durationMinutes": 35,
    "totalQuestions": 35,
    "passingPercentage": 45
  },
  {
    "id": "fs-mock-07",
    "seriesId": "fs-full-mock",
    "title": "Full Stack Mock Test 07: Advanced Backend & Security",
    "durationMinutes": 35,
    "totalQuestions": 35,
    "passingPercentage": 45
  },
  {
    "id": "fs-mock-08",
    "seriesId": "fs-full-mock",
    "title": "Full Stack Mock Test 08: DevOps & Testing",
    "durationMinutes": 30,
    "totalQuestions": 30,
    "passingPercentage": 40
  },
  {
    "id": "fs-mock-09",
    "seriesId": "fs-full-mock",
    "title": "Full Stack Mock Test 09: Comprehensive Review",
    "durationMinutes": 40,
    "totalQuestions": 40,
    "passingPercentage": 50
  },
  {
    "id": "fs-mock-10",
    "seriesId": "fs-full-mock",
    "title": "Full Stack Mock Test 10: Scenario-Based",
    "durationMinutes": 40,
    "totalQuestions": 40,
    "passingPercentage": 50
  },
  {
    "id": "fs-mock-11",
    "seriesId": "fs-full-mock",
    "title": "Full Stack Mock Test 11: Capstone",
    "durationMinutes": 45,
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
console.log('Added ' + newTests.length + ' fs tests to tests.js');
