const fs = require('fs');

const newTests = JSON.parse(fs.readFileSync('scratch/new_python_tests.json', 'utf8'));
const newQuestions = JSON.parse(fs.readFileSync('scratch/new_python_questions.json', 'utf8'));

// 1. Update tests.js
let testsContent = fs.readFileSync('src/data/tests.js', 'utf8');
const allTests = eval(testsContent.replace('export const tests = ', ''));

// Filter out already added tests (idempotency)
const testsToAdd = newTests.filter(nt => !allTests.find(t => t.id === nt.id)).map((nt, i) => ({
  id: nt.id,
  courseId: 'python',
  seriesId: 'python-full-mock',
  title: nt.title,
  code: `UC-PY-MOCK-0${i+1}`,
  questionsCount: nt.totalQuestions,
  durationMinutes: nt.durationMinutes,
  negativeMarking: 'No Negative Marking',
  isPopular: i === 0,
  passingPercentage: nt.passingPercentage
}));

if (testsToAdd.length > 0) {
  const updatedTests = [...allTests, ...testsToAdd];
  fs.writeFileSync('src/data/tests.js', 'export const tests = ' + JSON.stringify(updatedTests, null, 2) + ';\n');
}

// 2. Update questions.js
let questionsContent = fs.readFileSync('src/data/questions.js', 'utf8');
const allQuestions = eval(questionsContent.replace('export const questions = ', ''));

const qsToAdd = newQuestions.map((nq, i) => ({
  id: `${nq.testId}-q${i + 1}-${Math.random().toString(36).substr(2, 9)}`,
  testId: nq.testId,
  question: nq.question,
  options: nq.options,
  correctOption: nq.correctOption,
  explanation: nq.explanation
}));

// Only add if not already present
if (!allQuestions.find(q => q.testId === newQuestions[0].testId)) {
  const updatedQuestions = [...allQuestions, ...qsToAdd];
  fs.writeFileSync('src/data/questions.js', 'export const questions = ' + JSON.stringify(updatedQuestions, null, 2) + ';\n');
}

// 3. Update subjects.js
let subjectsContent = fs.readFileSync('src/data/subjects.js', 'utf8');
const subjects = eval(subjectsContent.replace('export const subjects = ', ''));
if (!subjects.find(s => s.id === 'python-full-mock')) {
  subjects.push({
    id: "python-full-mock",
    courseId: "python",
    title: "Python Full Mock Tests",
    testsCount: 3,
    icon: "Layers",
    color: "#EF4444"
  });
  fs.writeFileSync('src/data/subjects.js', 'export const subjects = ' + JSON.stringify(subjects, null, 2) + ';\n');
}

// 4. Update testSeries.js
let seriesContent = fs.readFileSync('src/data/testSeries.js', 'utf8');
const testSeries = eval(seriesContent.replace('export const testSeries = ', ''));
if (!testSeries.find(s => s.id === 'python-full-mock')) {
  testSeries.push({
    id: "python-full-mock",
    courseId: "python",
    title: "Python Full Mock Test Series",
    description: "Comprehensive full-length mock tests for Python programming, covering everything from basics to advanced algorithms.",
    stats: {
      totalTests: 3,
      totalQuestions: "120+",
      difficulty: "Beginner to Advanced",
      updatedDate: "Aug 2026"
    },
    about: {
      description: "These full-length mock tests simulate the real examination environment. They are designed to test your end-to-end Python knowledge, speed, and accuracy.",
      skills: [
        "Core Python",
        "Data Structures & Algorithms",
        "Object-Oriented Programming",
        "Data Analysis (Pandas/NumPy)",
        "Problem Solving"
      ],
      idealFor: [
        "Certification Candidates",
        "Job Seekers",
        "Students preparing for placements"
      ]
    }
  });
  fs.writeFileSync('src/data/testSeries.js', 'export const testSeries = ' + JSON.stringify(testSeries, null, 2) + ';\n');
}

// 5. Update courses.js
let coursesContent = fs.readFileSync('src/data/courses.js', 'utf8');
let courses = eval(coursesContent.replace('export const courses = ', ''));
const pythonCourse = courses.find(c => c.id === 'python');
if (pythonCourse) {
  pythonCourse.stats.tests = (parseInt(pythonCourse.stats.tests) + 3).toString();
  pythonCourse.stats.questions = (parseInt(pythonCourse.stats.questions) + 35 + 40 + 45).toString();
  fs.writeFileSync('src/data/courses.js', 'export const courses = ' + JSON.stringify(courses, null, 2) + ';\n');
}

console.log('Successfully injected new Python full mock tests!');
