const fs = require('fs');

const tests = [
  {
    "id": "dm-mock-01",
    "title": "Digital Marketing Mock Test - Fundamentals & Core Channels",
    "durationMinutes": 40,
    "totalQuestions": 40,
    "passingPercentage": 50
  },
  {
    "id": "dm-mock-02",
    "title": "Digital Marketing Mock Test - Advanced Strategies & Analytics",
    "durationMinutes": 45,
    "totalQuestions": 45,
    "passingPercentage": 55
  }
];

let testsFile = fs.readFileSync('src/data/tests.js', 'utf8');

if (!testsFile.includes('"dm-full-mock":')) {
  const injectionString = `\n  "dm-full-mock": ${JSON.stringify(tests, null, 4)},\n`;
  testsFile = testsFile.replace('export const tests = {', 'export const tests = {' + injectionString);
  fs.writeFileSync('src/data/tests.js', testsFile);
  console.log('Tests added successfully for dm-full-mock');
} else {
  console.log('Tests for dm-full-mock already exist');
}
