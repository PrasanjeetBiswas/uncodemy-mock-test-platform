const fs = require('fs');
const path = require('path');

const newTests = [
  {
    "id": "excel-test-01",
    "courseId": "data-analytics",
    "seriesId": "excel",
    "title": "Excel Basics, Navigation & Formatting",
    "code": "UC-DA-EXCEL-01",
    "questionsCount": 30,
    "durationMinutes": 30,
    "negativeMarking": "No Negative Marking",
    "isPopular": true,
    "passingPercentage": 40
  },
  {
    "id": "excel-test-02",
    "courseId": "data-analytics",
    "seriesId": "excel",
    "title": "Formulas, Functions & Lookups",
    "code": "UC-DA-EXCEL-02",
    "questionsCount": 40,
    "durationMinutes": 45,
    "negativeMarking": "No Negative Marking",
    "isPopular": true,
    "passingPercentage": 50
  },
  {
    "id": "excel-test-03",
    "courseId": "data-analytics",
    "seriesId": "excel",
    "title": "Data Management & Validation",
    "code": "UC-DA-EXCEL-03",
    "questionsCount": 40,
    "durationMinutes": 45,
    "negativeMarking": "No Negative Marking",
    "isPopular": false,
    "passingPercentage": 50
  },
  {
    "id": "excel-test-04",
    "courseId": "data-analytics",
    "seriesId": "excel",
    "title": "Charts, PivotTables & Visualization",
    "code": "UC-DA-EXCEL-04",
    "questionsCount": 35,
    "durationMinutes": 40,
    "negativeMarking": "No Negative Marking",
    "isPopular": true,
    "passingPercentage": 45
  },
  {
    "id": "excel-test-05",
    "courseId": "data-analytics",
    "seriesId": "excel",
    "title": "Macros, VBA & Automation",
    "code": "UC-DA-EXCEL-05",
    "questionsCount": 45,
    "durationMinutes": 60,
    "negativeMarking": "No Negative Marking",
    "isPopular": false,
    "passingPercentage": 55
  }
];

const filepath = path.join(__dirname, '../src/data/tests.js');
let content = fs.readFileSync(filepath, 'utf8');

// Find the export const tests = [ ... ]
// Assuming the file ends with ] or ];
content = content.trim();
if (content.endsWith('];')) {
  content = content.slice(0, -2);
} else if (content.endsWith(']')) {
  content = content.slice(0, -1);
}

content += ',\n' + newTests.map(t => JSON.stringify(t, null, 2)).join(',\n') + '\n];\n';

fs.writeFileSync(filepath, content, 'utf8');
console.log('Added 5 excel tests to tests.js');
