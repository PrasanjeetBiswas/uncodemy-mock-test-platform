const fs = require('fs');
const path = require('path');

const newTests = [
  {
    "id": "python-test-01",
    "courseId": "data-analytics",
    "seriesId": "python",
    "title": "Python Basics, Syntax & Data Types",
    "code": "UC-DA-PY-01",
    "questionsCount": 30,
    "durationMinutes": 30,
    "negativeMarking": "No Negative Marking",
    "isPopular": true,
    "passingPercentage": 40
  },
  {
    "id": "python-test-02",
    "courseId": "data-analytics",
    "seriesId": "python",
    "title": "Control Flow & Loops",
    "code": "UC-DA-PY-02",
    "questionsCount": 30,
    "durationMinutes": 30,
    "negativeMarking": "No Negative Marking",
    "isPopular": false,
    "passingPercentage": 40
  },
  {
    "id": "python-test-03",
    "courseId": "data-analytics",
    "seriesId": "python",
    "title": "Functions & Scope",
    "code": "UC-DA-PY-03",
    "questionsCount": 40,
    "durationMinutes": 45,
    "negativeMarking": "No Negative Marking",
    "isPopular": true,
    "passingPercentage": 50
  },
  {
    "id": "python-test-04",
    "courseId": "data-analytics",
    "seriesId": "python",
    "title": "Data Structures (Lists, Tuples, Dictionaries, Sets)",
    "code": "UC-DA-PY-04",
    "questionsCount": 40,
    "durationMinutes": 45,
    "negativeMarking": "No Negative Marking",
    "isPopular": true,
    "passingPercentage": 50
  },
  {
    "id": "python-test-05",
    "courseId": "data-analytics",
    "seriesId": "python",
    "title": "String Operations & File Handling",
    "code": "UC-DA-PY-05",
    "questionsCount": 35,
    "durationMinutes": 40,
    "negativeMarking": "No Negative Marking",
    "isPopular": false,
    "passingPercentage": 45
  },
  {
    "id": "python-test-06",
    "courseId": "data-analytics",
    "seriesId": "python",
    "title": "Object-Oriented Programming (OOP)",
    "code": "UC-DA-PY-06",
    "questionsCount": 40,
    "durationMinutes": 45,
    "negativeMarking": "No Negative Marking",
    "isPopular": true,
    "passingPercentage": 50
  },
  {
    "id": "python-test-07",
    "courseId": "data-analytics",
    "seriesId": "python",
    "title": "Modules, Packages & Error Handling",
    "code": "UC-DA-PY-07",
    "questionsCount": 35,
    "durationMinutes": 40,
    "negativeMarking": "No Negative Marking",
    "isPopular": false,
    "passingPercentage": 45
  },
  {
    "id": "python-test-08",
    "courseId": "data-analytics",
    "seriesId": "python",
    "title": "Advanced Python & Libraries",
    "code": "UC-DA-PY-08",
    "questionsCount": 45,
    "durationMinutes": 60,
    "negativeMarking": "No Negative Marking",
    "isPopular": true,
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
console.log('Added 8 python tests to tests.js');
