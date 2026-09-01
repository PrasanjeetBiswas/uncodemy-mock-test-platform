const fs = require('fs');
const path = require('path');

const newTests = [
  {
    "id": "db-test-01",
    "seriesId": "databases",
    "title": "Database Fundamentals & Relational Concepts",
    "durationMinutes": 30,
    "totalQuestions": 30,
    "passingPercentage": 40
  },
  {
    "id": "db-test-02",
    "seriesId": "databases",
    "title": "SQL Queries & Joins",
    "durationMinutes": 30,
    "totalQuestions": 30,
    "passingPercentage": 40
  },
  {
    "id": "db-test-03",
    "seriesId": "databases",
    "title": "Advanced SQL (Window Functions, CTEs, Indexes, Transactions)",
    "durationMinutes": 35,
    "totalQuestions": 35,
    "passingPercentage": 45
  },
  {
    "id": "db-test-04",
    "seriesId": "databases",
    "title": "NoSQL Fundamentals (MongoDB & Document Databases)",
    "durationMinutes": 35,
    "totalQuestions": 35,
    "passingPercentage": 45
  },
  {
    "id": "db-test-05",
    "seriesId": "databases",
    "title": "Advanced NoSQL & Database Comparison",
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
console.log('Added ' + newTests.length + ' db tests to tests.js');
