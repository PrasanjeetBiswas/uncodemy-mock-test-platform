const fs = require('fs');
const path = require('path');

const newTests = [
  {
    "id": "ml-test-01",
    "seriesId": "ml",
    "title": "Machine Learning Fundamentals",
    "durationMinutes": 30,
    "totalQuestions": 30,
    "passingPercentage": 40
  },
  {
    "id": "ml-test-02",
    "seriesId": "ml",
    "title": "Supervised Learning - Regression & Classification",
    "durationMinutes": 40,
    "totalQuestions": 35,
    "passingPercentage": 45
  },
  {
    "id": "ml-test-03",
    "seriesId": "ml",
    "title": "Unsupervised Learning & Dimensionality Reduction",
    "durationMinutes": 40,
    "totalQuestions": 35,
    "passingPercentage": 45
  },
  {
    "id": "ml-test-04",
    "seriesId": "ml",
    "title": "Model Evaluation, Validation & Optimization",
    "durationMinutes": 45,
    "totalQuestions": 40,
    "passingPercentage": 50
  },
  {
    "id": "ml-test-05",
    "seriesId": "ml",
    "title": "Neural Networks, Deep Learning & Advanced Topics",
    "durationMinutes": 45,
    "totalQuestions": 40,
    "passingPercentage": 50
  }
];

const filepath = path.join(__dirname, '../src/data/tests.js');
let content = fs.readFileSync(filepath, 'utf8');

content = content.trim();
if (content.endsWith('];')) {
  content = content.slice(0, -2);
} else if (content.endsWith(']')) {
  content = content.slice(0, -1);
}

content += ',\n' + newTests.map(t => JSON.stringify(t, null, 2)).join(',\n') + '\n];\n';

fs.writeFileSync(filepath, content, 'utf8');
console.log('Added ' + newTests.length + ' ml tests to tests.js');
