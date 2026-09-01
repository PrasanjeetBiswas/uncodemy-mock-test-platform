const fs = require('fs');

const tests = [
  {
    "id": "ads-test-01",
    "title": "Google Ads Fundamentals",
    "durationMinutes": 30,
    "totalQuestions": 30,
    "passingPercentage": 40
  },
  {
    "id": "ads-test-02",
    "title": "Facebook & Meta Ads Fundamentals",
    "durationMinutes": 30,
    "totalQuestions": 30,
    "passingPercentage": 40
  },
  {
    "id": "ads-test-03",
    "title": "Google Ads Advanced & Optimization",
    "durationMinutes": 35,
    "totalQuestions": 35,
    "passingPercentage": 45
  },
  {
    "id": "ads-test-04",
    "title": "Facebook Ads Advanced & Strategy",
    "durationMinutes": 35,
    "totalQuestions": 35,
    "passingPercentage": 45
  }
];

let testsFile = fs.readFileSync('src/data/tests.js', 'utf8');

if (!testsFile.includes('"ads":')) {
  const injectionString = `\n  "ads": ${JSON.stringify(tests, null, 4)},\n`;
  testsFile = testsFile.replace('export const tests = {', 'export const tests = {' + injectionString);
  fs.writeFileSync('src/data/tests.js', testsFile);
  console.log('Tests added successfully for ads');
} else {
  console.log('Tests for ads already exist');
}
