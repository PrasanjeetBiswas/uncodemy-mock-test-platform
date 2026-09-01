const fs = require('fs');

const subjects = [
  {
    id: "adv-automation",
    courseId: "playwright-automation",
    title: "Advanced Automation & Frameworks",
    description: "Master framework design, API, Mobile, Performance and CI/CD.",
    stats: {
      totalTests: 5,
      totalQuestions: "175",
      difficulty: "Advanced",
      updatedDate: "Aug 2026"
    },
    about: {
      description: "Comprehensive topics covering Advanced Automation including Framework architecture, API Testing, Appium, JMeter, and DevOps.",
      skills: ["Framework Design", "API Automation", "Appium", "JMeter", "CI/CD"],
      idealFor: ["Automation Engineers", "SDETs", "Senior QA"]
    }
  }
];

let testSeriesFile = fs.readFileSync('src/data/testSeries.js', 'utf8');
const endBraceIndexTS = testSeriesFile.lastIndexOf('];');
if (endBraceIndexTS !== -1 && !testSeriesFile.includes('"adv-automation"')) {
  const injectionString = ',\n' + subjects.map(s => JSON.stringify(s, null, 2)).join(',\n') + '\n];';
  testSeriesFile = testSeriesFile.substring(0, endBraceIndexTS) + injectionString;
  fs.writeFileSync('src/data/testSeries.js', testSeriesFile);
  console.log('Subjects added successfully to testSeries');
} else {
  console.log('Subjects for adv-automation already exist or file format unexpected');
}

const tests = [
  {
    "id": "adv-auto-test-01",
    "title": "Advanced Automation - Framework Design & Architecture",
    "durationMinutes": 35,
    "totalQuestions": 35,
    "passingPercentage": 45
  },
  {
    "id": "adv-auto-test-02",
    "title": "Advanced Automation - API Testing & Automation",
    "durationMinutes": 35,
    "totalQuestions": 35,
    "passingPercentage": 45
  },
  {
    "id": "adv-auto-test-03",
    "title": "Advanced Automation - Mobile & Cross-Platform Testing",
    "durationMinutes": 30,
    "totalQuestions": 30,
    "passingPercentage": 40
  },
  {
    "id": "adv-auto-test-04",
    "title": "Advanced Automation - Performance, Security & Non-Functional",
    "durationMinutes": 35,
    "totalQuestions": 35,
    "passingPercentage": 45
  },
  {
    "id": "adv-auto-test-05",
    "title": "Advanced Automation - CI/CD, DevOps & Test Strategy",
    "durationMinutes": 35,
    "totalQuestions": 35,
    "passingPercentage": 45
  }
];

let testsFile = fs.readFileSync('src/data/tests.js', 'utf8');
if (!testsFile.includes('"adv-automation":')) {
  const injectionString = `\n  "adv-automation": ${JSON.stringify(tests, null, 4)},\n`;
  testsFile = testsFile.replace('export const tests = {', 'export const tests = {' + injectionString);
  fs.writeFileSync('src/data/tests.js', testsFile);
  console.log('Tests added successfully for adv-automation');
} else {
  console.log('Tests for adv-automation already exist');
}
