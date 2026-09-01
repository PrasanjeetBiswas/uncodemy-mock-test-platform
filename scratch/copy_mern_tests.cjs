const fs = require('fs');

// 1. Read tests.js
let testsFile = fs.readFileSync('src/data/tests.js', 'utf8');
const testsStr = testsFile.replace('export const tests = ', '').replace(/;\s*$/, '');
let tests = [];
try {
  tests = eval(testsStr);
} catch (e) {
  console.error("Error evaluating tests.js");
  process.exit(1);
}

// 2. Find Full Stack tests
const fsTests = tests.filter(t => t.courseId === 'full-stack-development');

const seriesMap = {
  'frontend': 'react',
  'backend': 'node-express',
  'databases': 'mongodb',
  'fs-full-mock': 'mern-full-mock'
};

const newTests = [];
const oldToNewTestId = {};

for (const t of fsTests) {
  const newId = 'mern-' + t.id;
  oldToNewTestId[t.id] = newId;
  
  newTests.push({
    ...t,
    id: newId,
    courseId: 'mern',
    seriesId: seriesMap[t.seriesId] || t.seriesId
  });
}

// Check if already injected
if (tests.some(t => t.id === newTests[0].id)) {
  console.log("MERN tests already exist!");
} else {
  const testsEndIndex = testsFile.lastIndexOf('];');
  const injectionStr = ',\n' + newTests.map(t => JSON.stringify(t, null, 2)).join(',\n') + '\n];';
  testsFile = testsFile.substring(0, testsEndIndex) + injectionStr;
  fs.writeFileSync('src/data/tests.js', testsFile);
  console.log(`Injected ${newTests.length} MERN tests into tests.js`);
}

// 3. Read questions.js
let questionsFile = fs.readFileSync('src/data/questions.js', 'utf8');
const questionsStr = questionsFile.replace('export const questions = ', '').replace(/;\s*$/, '');
let questions = [];
try {
  questions = eval(questionsStr);
} catch (e) {
  console.error("Error evaluating questions.js");
  process.exit(1);
}

const newQuestions = [];
for (const q of questions) {
  if (oldToNewTestId[q.testId]) {
    newQuestions.push({
      ...q,
      testId: oldToNewTestId[q.testId],
      id: 'mern-' + q.id
    });
  }
}

if (questions.some(q => q.testId === newTests[0].id)) {
  console.log("MERN questions already exist!");
} else {
  const qEndIndex = questionsFile.lastIndexOf('];');
  const qInjectionStr = ',\n' + newQuestions.map(q => JSON.stringify(q, null, 2)).join(',\n') + '\n];';
  questionsFile = questionsFile.substring(0, qEndIndex) + qInjectionStr;
  fs.writeFileSync('src/data/questions.js', questionsFile);
  console.log(`Injected ${newQuestions.length} MERN questions into questions.js`);
}

// Update subjects testsCount
let subjectsFile = fs.readFileSync('src/data/subjects.js', 'utf8');
// Replace counts manually
subjectsFile = subjectsFile.replace('{ id: "react", courseId: "mern", title: "React.js", testsCount: 6', '{ id: "react", courseId: "mern", title: "React.js", testsCount: 8');
subjectsFile = subjectsFile.replace('{ id: "node-express", courseId: "mern", title: "Node & Express", testsCount: 5', '{ id: "node-express", courseId: "mern", title: "Node & Express", testsCount: 6');
subjectsFile = subjectsFile.replace('{ id: "mongodb", courseId: "mern", title: "MongoDB", testsCount: 4', '{ id: "mongodb", courseId: "mern", title: "MongoDB", testsCount: 5');
subjectsFile = subjectsFile.replace('{ id: "mern-full-mock", courseId: "mern", title: "Full Mock Tests", testsCount: 10', '{ id: "mern-full-mock", courseId: "mern", title: "Full Mock Tests", testsCount: 11');
fs.writeFileSync('src/data/subjects.js', subjectsFile);
console.log("Updated subjects.js counts");
