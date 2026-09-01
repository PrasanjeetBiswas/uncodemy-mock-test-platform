const fs = require('fs');
const path = require('path');

const newTests = [
  {
    "id": "frontend-test-01",
    "seriesId": "frontend",
    "title": "HTML Fundamentals & Semantic Markup",
    "durationMinutes": 30,
    "totalQuestions": 30,
    "passingPercentage": 40
  },
  {
    "id": "frontend-test-02",
    "seriesId": "frontend",
    "title": "CSS Fundamentals & Styling",
    "durationMinutes": 30,
    "totalQuestions": 30,
    "passingPercentage": 40
  },
  {
    "id": "frontend-test-03",
    "seriesId": "frontend",
    "title": "JavaScript Essentials",
    "durationMinutes": 35,
    "totalQuestions": 35,
    "passingPercentage": 45
  },
  {
    "id": "frontend-test-04",
    "seriesId": "frontend",
    "title": "React Fundamentals & Components",
    "durationMinutes": 35,
    "totalQuestions": 35,
    "passingPercentage": 45
  },
  {
    "id": "frontend-test-05",
    "seriesId": "frontend",
    "title": "React State, Props & Lifecycle",
    "durationMinutes": 35,
    "totalQuestions": 35,
    "passingPercentage": 45
  },
  {
    "id": "frontend-test-06",
    "seriesId": "frontend",
    "title": "React Hooks & Advanced Patterns",
    "durationMinutes": 35,
    "totalQuestions": 35,
    "passingPercentage": 45
  },
  {
    "id": "frontend-test-07",
    "seriesId": "frontend",
    "title": "CSS Layout, Flexbox & Grid",
    "durationMinutes": 30,
    "totalQuestions": 30,
    "passingPercentage": 40
  },
  {
    "id": "frontend-test-08",
    "seriesId": "frontend",
    "title": "Frontend Performance & Best Practices",
    "durationMinutes": 30,
    "totalQuestions": 30,
    "passingPercentage": 40
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
console.log('Added ' + newTests.length + ' frontend tests to tests.js');
