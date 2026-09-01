const fs = require('fs');

const newTests = [
  {
    "id": "ai-mock-01",
    "courseId": "artificial-intelligence",
    "seriesId": "ai-full-mock",
    "title": "AI Full Mock Test - Fundamentals & Machine Learning",
    "durationMinutes": 35,
    "totalQuestions": 35,
    "passingPercentage": 45
  },
  {
    "id": "ai-mock-02",
    "courseId": "artificial-intelligence",
    "seriesId": "ai-full-mock",
    "title": "AI Full Mock Test - Deep Learning & Neural Networks",
    "durationMinutes": 40,
    "totalQuestions": 40,
    "passingPercentage": 50
  },
  {
    "id": "ai-mock-03",
    "courseId": "artificial-intelligence",
    "seriesId": "ai-full-mock",
    "title": "AI Full Mock Test - Advanced AI (NLP, CV, Ethics)",
    "durationMinutes": 45,
    "totalQuestions": 45,
    "passingPercentage": 55
  }
];

let testsFile = fs.readFileSync('src/data/tests.js', 'utf8');
const testsEndIndex = testsFile.lastIndexOf('];');

if (testsEndIndex !== -1 && !testsFile.includes('"ai-mock-01"')) {
  const injectionString = ',\n' + newTests.map(t => JSON.stringify(t, null, 2)).join(',\n') + '\n];';
  testsFile = testsFile.substring(0, testsEndIndex) + injectionString;
  fs.writeFileSync('src/data/tests.js', testsFile);
  console.log('Injected AI Mock tests into tests.js');
} else {
  console.log('AI Mock tests already exist or tests.js format is wrong.');
}
