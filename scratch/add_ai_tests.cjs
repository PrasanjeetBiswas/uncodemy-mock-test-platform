const fs = require('fs');

const newTests = [
  {
    "id": "ai-test-01",
    "courseId": "artificial-intelligence",
    "seriesId": "ai-concepts",
    "title": "AI Fundamentals & Key Concepts",
    "durationMinutes": 30,
    "totalQuestions": 30,
    "passingPercentage": 40
  },
  {
    "id": "ai-test-02",
    "courseId": "artificial-intelligence",
    "seriesId": "ai-concepts",
    "title": "Machine Learning & Deep Learning Basics",
    "durationMinutes": 30,
    "totalQuestions": 30,
    "passingPercentage": 40
  },
  {
    "id": "ai-test-03",
    "courseId": "artificial-intelligence",
    "seriesId": "ai-concepts",
    "title": "Neural Networks & Architectures",
    "durationMinutes": 30,
    "totalQuestions": 30,
    "passingPercentage": 40
  },
  {
    "id": "ai-test-04",
    "courseId": "artificial-intelligence",
    "seriesId": "ai-concepts",
    "title": "NLP, Computer Vision & AI Ethics",
    "durationMinutes": 30,
    "totalQuestions": 30,
    "passingPercentage": 40
  }
];

let testsFile = fs.readFileSync('src/data/tests.js', 'utf8');
const testsEndIndex = testsFile.lastIndexOf('];');

if (testsEndIndex !== -1 && !testsFile.includes('"ai-test-01"')) {
  const injectionString = ',\n' + newTests.map(t => JSON.stringify(t, null, 2)).join(',\n') + '\n];';
  testsFile = testsFile.substring(0, testsEndIndex) + injectionString;
  fs.writeFileSync('src/data/tests.js', testsFile);
  console.log('Injected AI tests into tests.js');
} else {
  console.log('AI tests already exist or tests.js format is wrong.');
}
