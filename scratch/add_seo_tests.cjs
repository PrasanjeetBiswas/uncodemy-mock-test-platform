const fs = require('fs');

const tests = [
  {
    "id": "seo-test-01",
    "title": "SEO Fundamentals & Search Engine Mechanics",
    "durationMinutes": 30,
    "totalQuestions": 30,
    "passingPercentage": 40
  },
  {
    "id": "seo-test-02",
    "title": "Keyword Research & Content Strategy",
    "durationMinutes": 30,
    "totalQuestions": 30,
    "passingPercentage": 40
  },
  {
    "id": "seo-test-03",
    "title": "On-Page SEO & Content Optimization",
    "durationMinutes": 35,
    "totalQuestions": 35,
    "passingPercentage": 45
  },
  {
    "id": "seo-test-04",
    "title": "Off-Page SEO & Link Building",
    "durationMinutes": 35,
    "totalQuestions": 35,
    "passingPercentage": 45
  },
  {
    "id": "seo-test-05",
    "title": "Technical SEO, Analytics & Advanced Topics",
    "durationMinutes": 40,
    "totalQuestions": 40,
    "passingPercentage": 50
  }
];

let testsFile = fs.readFileSync('src/data/tests.js', 'utf8');

// The tests in tests.js are structured as: export const tests = { "excel": [...], "sql": [...] };
// We need to inject "seo": tests into it.

if (!testsFile.includes('"seo":')) {
  const injectionString = `\n  "seo": ${JSON.stringify(tests, null, 4)},\n`;
  testsFile = testsFile.replace('export const tests = {', 'export const tests = {' + injectionString);
  fs.writeFileSync('src/data/tests.js', testsFile);
  console.log('Tests added successfully for seo');
} else {
  console.log('Tests for seo already exist');
}
