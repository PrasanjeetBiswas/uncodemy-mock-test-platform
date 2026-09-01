const fs = require('fs');

const subjects = [
  {
    id: "playwright",
    courseId: "playwright-automation",
    title: "Playwright Automation Tests",
    description: "End-to-end testing tests using the Playwright framework.",
    stats: {
      totalTests: 4,
      totalQuestions: "130",
      difficulty: "Beginner to Advanced",
      updatedDate: "Aug 2026"
    },
    about: {
      description: "Master End-to-End test automation using Microsoft Playwright.",
      skills: ["Playwright", "E2E Testing", "Locators", "Assertions", "Page Object Model"],
      idealFor: ["QA Engineers", "Automation Testers", "SDETs"]
    }
  }
];

let testSeriesFile = fs.readFileSync('src/data/testSeries.js', 'utf8');
const endBraceIndexTS = testSeriesFile.lastIndexOf('];');
if (endBraceIndexTS !== -1 && !testSeriesFile.includes('"playwright"')) {
  const injectionString = ',\n' + subjects.map(s => JSON.stringify(s, null, 2)).join(',\n') + '\n];';
  testSeriesFile = testSeriesFile.substring(0, endBraceIndexTS) + injectionString;
  fs.writeFileSync('src/data/testSeries.js', testSeriesFile);
  console.log('Subjects added successfully to testSeries');
} else {
  console.log('Subjects for playwright already exist or file format unexpected');
}

const tests = [
  {
    "id": "playwright-test-01",
    "title": "Playwright Fundamentals & Core Concepts",
    "durationMinutes": 30,
    "totalQuestions": 30,
    "passingPercentage": 40
  },
  {
    "id": "playwright-test-02",
    "title": "Locators & Element Selection",
    "durationMinutes": 30,
    "totalQuestions": 30,
    "passingPercentage": 40
  },
  {
    "id": "playwright-test-03",
    "title": "Actions, Assertions & Interactions",
    "durationMinutes": 35,
    "totalQuestions": 35,
    "passingPercentage": 45
  },
  {
    "id": "playwright-test-04",
    "title": "Advanced Features & Best Practices",
    "durationMinutes": 35,
    "totalQuestions": 35,
    "passingPercentage": 45
  }
];

let testsFile = fs.readFileSync('src/data/tests.js', 'utf8');
if (!testsFile.includes('"playwright":')) {
  const injectionString = `\n  "playwright": ${JSON.stringify(tests, null, 4)},\n`;
  testsFile = testsFile.replace('export const tests = {', 'export const tests = {' + injectionString);
  fs.writeFileSync('src/data/tests.js', testsFile);
  console.log('Tests added successfully for playwright');
} else {
  console.log('Tests for playwright already exist');
}
