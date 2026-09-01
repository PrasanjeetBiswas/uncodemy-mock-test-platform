const fs = require('fs');

const newTests = [
  {
    "id": "nlp-test-01",
    "courseId": "artificial-intelligence",
    "seriesId": "nlp",
    "title": "NLP Fundamentals & Text Preprocessing",
    "durationMinutes": 30,
    "totalQuestions": 30,
    "passingPercentage": 40
  },
  {
    "id": "nlp-test-02",
    "courseId": "artificial-intelligence",
    "seriesId": "nlp",
    "title": "Traditional NLP & Classical Techniques",
    "durationMinutes": 30,
    "totalQuestions": 30,
    "passingPercentage": 40
  },
  {
    "id": "nlp-test-03",
    "courseId": "artificial-intelligence",
    "seriesId": "nlp",
    "title": "Modern NLP - Deep Learning, Transformers & LLMs",
    "durationMinutes": 30,
    "totalQuestions": 30,
    "passingPercentage": 40
  }
];

let testsFile = fs.readFileSync('src/data/tests.js', 'utf8');
const testsEndIndex = testsFile.lastIndexOf('];');

if (testsEndIndex !== -1 && !testsFile.includes('"nlp-test-01"')) {
  const injectionString = ',\n' + newTests.map(t => JSON.stringify(t, null, 2)).join(',\n') + '\n];';
  testsFile = testsFile.substring(0, testsEndIndex) + injectionString;
  fs.writeFileSync('src/data/tests.js', testsFile);
  console.log('Injected NLP tests into tests.js');
} else {
  console.log('NLP tests already exist or tests.js format is wrong.');
}
