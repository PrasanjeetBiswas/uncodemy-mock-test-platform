const fs = require('fs');

// 1. Update courses.js
let coursesContent = fs.readFileSync('src/data/courses.js', 'utf8');
const courses = eval(coursesContent.replace('export const courses = ', ''));

// Calculate stats for Python
let testsContent = fs.readFileSync('src/data/tests.js', 'utf8');
const allTests = eval(testsContent.replace('export const tests = ', ''));
const pythonTests = allTests.filter(t => t.courseId === 'data-analytics' && t.seriesId === 'python');
const totalQuestions = pythonTests.reduce((sum, t) => sum + (t.questionsCount || 0), 0);

if (!courses.find(c => c.id === 'python')) {
  courses.push({
    id: "python",
    title: "Python",
    description: "Master Python programming from basics to advanced concepts.",
    icon: "TerminalSquare",
    priority: "normal",
    stats: {
      tests: pythonTests.length.toString(),
      questions: totalQuestions.toString(),
      level: "Beginner to Advanced"
    },
    popular: false
  });
  fs.writeFileSync('src/data/courses.js', 'export const courses = ' + JSON.stringify(courses, null, 2) + ';\n');
}

// 2. Update subjects.js
let subjectsContent = fs.readFileSync('src/data/subjects.js', 'utf8');
const subjects = eval(subjectsContent.replace('export const subjects = ', ''));

if (!subjects.find(s => s.courseId === 'python' && s.id === 'python-core')) {
  subjects.push({
    id: "python-core",
    courseId: "python",
    title: "Python Core",
    testsCount: pythonTests.length,
    icon: "TerminalSquare",
    color: "#3776AB"
  });
  fs.writeFileSync('src/data/subjects.js', 'export const subjects = ' + JSON.stringify(subjects, null, 2) + ';\n');
}

// 3. Update tests.js & questions.js
let questionsContent = fs.readFileSync('src/data/questions.js', 'utf8');
const allQuestions = eval(questionsContent.replace('export const questions = ', ''));

let newTests = [];
let newQuestions = [];

pythonTests.forEach((t, i) => {
  const newTestId = `python-core-test-${i + 1}`;
  
  // Clone test
  let newTest = { ...t, id: newTestId, courseId: 'python', seriesId: 'python-core' };
  newTests.push(newTest);
  
  // Clone questions
  const tQuestions = allQuestions.filter(q => q.testId === t.id);
  tQuestions.forEach((q, qi) => {
    newQuestions.push({
      ...q,
      testId: newTestId,
      id: `${newTestId}-q${qi + 1}-${Math.random().toString(36).substr(2, 9)}` // Ensure unique global ID
    });
  });
});

// Append new tests
const existingNewTests = allTests.filter(t => t.courseId === 'python');
if (existingNewTests.length === 0) {
  const updatedTests = [...allTests, ...newTests];
  fs.writeFileSync('src/data/tests.js', 'export const tests = ' + JSON.stringify(updatedTests, null, 2) + ';\n');
  
  const updatedQuestions = [...allQuestions, ...newQuestions];
  fs.writeFileSync('src/data/questions.js', 'export const questions = ' + JSON.stringify(updatedQuestions, null, 2) + ';\n');
  console.log(`Added Python course with ${newTests.length} tests and ${newQuestions.length} questions.`);
} else {
  console.log('Python tests already exist.');
}
