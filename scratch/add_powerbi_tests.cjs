const fs = require('fs');
const path = require('path');

const newTests = [
  {
    "id": "powerbi-test-01",
    "courseId": "data-analytics",
    "seriesId": "power-bi",
    "title": "Power BI Basics & Data Import",
    "code": "UC-DA-PBI-01",
    "questionsCount": 30,
    "durationMinutes": 30,
    "negativeMarking": "No Negative Marking",
    "isPopular": true,
    "passingPercentage": 40
  },
  {
    "id": "powerbi-test-02",
    "courseId": "data-analytics",
    "seriesId": "power-bi",
    "title": "Data Modeling & Relationships",
    "code": "UC-DA-PBI-02",
    "questionsCount": 40,
    "durationMinutes": 45,
    "negativeMarking": "No Negative Marking",
    "isPopular": true,
    "passingPercentage": 50
  },
  {
    "id": "powerbi-test-03",
    "courseId": "data-analytics",
    "seriesId": "power-bi",
    "title": "DAX Fundamentals & Calculations",
    "code": "UC-DA-PBI-03",
    "questionsCount": 40,
    "durationMinutes": 45,
    "negativeMarking": "No Negative Marking",
    "isPopular": false,
    "passingPercentage": 50
  },
  {
    "id": "powerbi-test-04",
    "courseId": "data-analytics",
    "seriesId": "power-bi",
    "title": "Data Visualization & Reports",
    "code": "UC-DA-PBI-04",
    "questionsCount": 35,
    "durationMinutes": 40,
    "negativeMarking": "No Negative Marking",
    "isPopular": true,
    "passingPercentage": 45
  },
  {
    "id": "powerbi-test-05",
    "courseId": "data-analytics",
    "seriesId": "power-bi",
    "title": "Advanced DAX & Administration",
    "code": "UC-DA-PBI-05",
    "questionsCount": 45,
    "durationMinutes": 60,
    "negativeMarking": "No Negative Marking",
    "isPopular": false,
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
console.log('Added 5 power bi tests to tests.js');
