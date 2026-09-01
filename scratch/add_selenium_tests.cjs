const fs = require('fs');
const path = require('path');

const newTests = [
  {
    "id": "selenium-test-01",
    "seriesId": "selenium",
    "title": "Selenium Fundamentals & Automation Concepts",
    "durationMinutes": 30,
    "totalQuestions": 30,
    "passingPercentage": 40
  },
  {
    "id": "selenium-test-02",
    "seriesId": "selenium",
    "title": "Selenium WebDriver & Browser Interactions",
    "durationMinutes": 30,
    "totalQuestions": 30,
    "passingPercentage": 40
  },
  {
    "id": "selenium-test-03",
    "seriesId": "selenium",
    "title": "Locators & Element Identification",
    "durationMinutes": 35,
    "totalQuestions": 35,
    "passingPercentage": 45
  },
  {
    "id": "selenium-test-04",
    "seriesId": "selenium",
    "title": "Advanced Selenium & Test Frameworks",
    "durationMinutes": 35,
    "totalQuestions": 35,
    "passingPercentage": 45
  },
  {
    "id": "selenium-test-05",
    "seriesId": "selenium",
    "title": "Selenium 4 & Comprehensive Scenario",
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
console.log('Added ' + newTests.length + ' selenium tests to tests.js');
