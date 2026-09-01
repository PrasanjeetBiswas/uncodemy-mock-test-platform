const fs = require('fs');

const tests = [
  {
    "id": "smm-test-01",
    "title": "Social Media Marketing Fundamentals",
    "durationMinutes": 30,
    "totalQuestions": 30,
    "passingPercentage": 40
  },
  {
    "id": "smm-test-02",
    "title": "Content Strategy & Platform Management",
    "durationMinutes": 30,
    "totalQuestions": 30,
    "passingPercentage": 40
  },
  {
    "id": "smm-test-03",
    "title": "Social Media Advertising & Analytics",
    "durationMinutes": 35,
    "totalQuestions": 35,
    "passingPercentage": 45
  },
  {
    "id": "smm-test-04",
    "title": "Advanced SMM & Influencer Marketing",
    "durationMinutes": 35,
    "totalQuestions": 35,
    "passingPercentage": 45
  }
];

let testsFile = fs.readFileSync('src/data/tests.js', 'utf8');

if (!testsFile.includes('"social-media":')) {
  const injectionString = `\n  "social-media": ${JSON.stringify(tests, null, 4)},\n`;
  testsFile = testsFile.replace('export const tests = {', 'export const tests = {' + injectionString);
  fs.writeFileSync('src/data/tests.js', testsFile);
  console.log('Tests added successfully for smm');
} else {
  console.log('Tests for smm already exist');
}
