const fs = require('fs');
const path = require('path');

const newTests = [
  {
    "id": "business-analytics-test-01",
    "seriesId": "business-analytics",
    "title": "Business Analytics Fundamentals & Descriptive Analytics",
    "durationMinutes": 30,
    "totalQuestions": 30,
    "passingPercentage": 40
  },
  {
    "id": "business-analytics-test-02",
    "seriesId": "business-analytics",
    "title": "Predictive & Prescriptive Analytics",
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
console.log('Added ' + newTests.length + ' business analytics tests to tests.js');
