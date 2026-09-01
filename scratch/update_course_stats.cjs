const fs = require('fs');

// Read files
let coursesFile = fs.readFileSync('src/data/courses.js', 'utf8');
let testsFile = fs.readFileSync('src/data/tests.js', 'utf8');
let questionsFile = fs.readFileSync('src/data/questions.js', 'utf8');

function extractJs(content, prefix) {
  const start = content.indexOf(prefix);
  let str = content.substring(start + prefix.length);
  if (str.endsWith(';')) str = str.slice(0, -1);
  else if (str.trim().endsWith(';')) str = str.trim().slice(0, -1);
  return eval('(' + str + ')');
}

const tests = extractJs(testsFile, 'export const tests = ');
const questions = extractJs(questionsFile, 'export const questions = ');
const courses = extractJs(coursesFile, 'export const courses = ');

// Calculate stats for each course
const courseStats = {};
courses.forEach(c => {
  courseStats[c.id] = { tests: 0, questions: 0 };
});

// A test belongs to a course (test.courseId)
tests.forEach(t => {
  if (courseStats[t.courseId]) {
    courseStats[t.courseId].tests += 1;
  }
});

// A question belongs to a test. We need test -> course mapping
const testCourseMap = {};
tests.forEach(t => {
  testCourseMap[t.id] = t.courseId;
});

questions.forEach(q => {
  const courseId = testCourseMap[q.testId];
  if (courseId && courseStats[courseId]) {
    courseStats[courseId].questions += 1;
  }
});

// Original placeholders
const originalCourses = [
  { id: "data-analytics", tests: "35+", questions: "500+" },
  { id: "data-science", tests: "20+", questions: "1000+" },
  { id: "software-testing", tests: "18+", questions: "900+" },
  { id: "full-stack-development", tests: "30+", questions: "1200+" },
  { id: "digital-marketing", tests: "15+", questions: "600+" },
  { id: "playwright-automation", tests: "12+", questions: "400+" },
  { id: "java", tests: "15+", questions: "1000+" },
  { id: "artificial-intelligence", tests: "10+", questions: "800+" },
  { id: "mern", tests: "25+", questions: "700+" }
];

// Update courses
courses.forEach(c => {
  const stat = courseStats[c.id];
  const orig = originalCourses.find(o => o.id === c.id);
  
  if (stat && stat.tests > 0) {
    c.stats.tests = stat.tests.toString();
    c.stats.questions = stat.questions.toString();
  } else if (orig) {
    // Revert to placeholder if 0
    c.stats.tests = orig.tests;
    c.stats.questions = orig.questions;
  }
});

// Save back to courses.js
const newCoursesContent = 'export const courses = ' + JSON.stringify(courses, null, 2) + ';\n';
fs.writeFileSync('src/data/courses.js', newCoursesContent);
console.log('Successfully updated courses.js with exact stats or placeholders!');
