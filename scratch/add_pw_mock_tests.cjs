const fs = require('fs');

const subjects = [
  {
    id: "pw-full-mock",
    courseId: "playwright-automation",
    title: "Playwright Full Mock Tests",
    description: "Comprehensive mock tests covering all aspects of Playwright Automation.",
    stats: {
      totalTests: 2,
      totalQuestions: "75",
      difficulty: "Advanced",
      updatedDate: "Aug 2026"
    },
    about: {
      description: "Evaluate your overall Playwright automation readiness with these full-length mock tests.",
      skills: ["Playwright", "E2E Testing", "Test Strategy"],
      idealFor: ["QA Engineers", "SDETs"]
    }
  }
];

let testSeriesFile = fs.readFileSync('src/data/testSeries.js', 'utf8');
const endBraceIndexTS = testSeriesFile.lastIndexOf('];');
if (endBraceIndexTS !== -1 && !testSeriesFile.includes('"pw-full-mock"')) {
  const injectionString = ',\n' + subjects.map(s => JSON.stringify(s, null, 2)).join(',\n') + '\n];';
  testSeriesFile = testSeriesFile.substring(0, endBraceIndexTS) + injectionString;
  fs.writeFileSync('src/data/testSeries.js', testSeriesFile);
  console.log('Subjects added successfully to testSeries');
} else {
  console.log('Subjects for pw-full-mock already exist or file format unexpected');
}

const tests = [
  {
    "id": "pw-mock-01",
    "title": "Playwright Full Mock Test - Fundamentals & Core Features",
    "durationMinutes": 35,
    "totalQuestions": 35,
    "passingPercentage": 45
  },
  {
    "id": "pw-mock-02",
    "title": "Playwright Full Mock Test - Advanced & Comprehensive",
    "durationMinutes": 40,
    "totalQuestions": 40,
    "passingPercentage": 50
  }
];

let testsFile = fs.readFileSync('src/data/tests.js', 'utf8');
if (!testsFile.includes('"pw-full-mock":')) {
  const injectionString = `\n  "pw-full-mock": ${JSON.stringify(tests, null, 4)},\n`;
  testsFile = testsFile.replace('export const tests = {', 'export const tests = {' + injectionString);
  fs.writeFileSync('src/data/tests.js', testsFile);
  console.log('Tests added successfully for pw-full-mock');
} else {
  console.log('Tests for pw-full-mock already exist');
}
