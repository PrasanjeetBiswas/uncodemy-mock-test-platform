const fs = require('fs');
const path = require('path');

const newTests = [
  {
    "id": "statistics-test-01",
    "seriesId": "statistics",
    "title": "Descriptive Statistics & Probability",
    "durationMinutes": 30,
    "totalQuestions": 30,
    "passingPercentage": 40
  },
  {
    "id": "statistics-test-02",
    "seriesId": "statistics",
    "title": "Inferential Statistics & Hypothesis Testing",
    "durationMinutes": 45,
    "totalQuestions": 40,
    "passingPercentage": 50
  },
  {
    "id": "statistics-test-03",
    "seriesId": "statistics",
    "title": "Regression, ANOVA & Advanced Topics",
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
console.log('Added ' + newTests.length + ' statistics tests to tests.js');
