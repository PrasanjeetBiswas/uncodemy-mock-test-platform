const fs = require('fs');

// Add subject to subjects.js
let subjectsFile = fs.readFileSync('src/data/subjects.js', 'utf8');
const newSubjectStr = '  { id: "java-mock", courseId: "java", title: "Java Full Mock Test", testsCount: 3, icon: "GraduationCap", color: "#E76F00" },\n';
subjectsFile = subjectsFile.replace(
  '{ id: "jdbc", courseId: "java", title: "JDBC & Advanced", testsCount: 3, icon: "Database", color: "#00758F" },',
  '{ id: "jdbc", courseId: "java", title: "JDBC & Advanced", testsCount: 3, icon: "Database", color: "#00758F" },\n' + newSubjectStr
);
fs.writeFileSync('src/data/subjects.js', subjectsFile);
console.log('Added java-mock to subjects.js');

// Add series to testSeries.js
let testSeriesFile = fs.readFileSync('src/data/testSeries.js', 'utf8');
// Assuming the last one was jdbc, let's find 'jdbc' and append java-mock
const javaMockSeries = `  {
    "id": "java-mock",
    "courseId": "java",
    "title": "Java Full Mock Test",
    "description": "Comprehensive mock tests covering Core Java, Collections, and JDBC for interview preparation.",
    "testsCount": 3,
    "icon": "GraduationCap",
    "color": "#E76F00"
  },
`;

const insertIndex = testSeriesFile.lastIndexOf(']');
if (insertIndex !== -1 && !testSeriesFile.includes('"java-mock"')) {
  // It's a JSON array format (or roughly similar). Let's just insert it before the last ]
  // we might need to add a comma if the previous element doesn't have one, but typically it does or doesn't in a JS file.
  // Actually, testSeries.js is export const testSeries = [ ... ]; Let's be careful.
  let content = testSeriesFile.substring(0, insertIndex);
  if (content.trim().endsWith('}')) {
    content += ',\n' + javaMockSeries + '];';
  } else {
    content += javaMockSeries + '];';
  }
  fs.writeFileSync('src/data/testSeries.js', content);
  console.log('Added java-mock to testSeries.js');
}

// Add tests to tests.js
const missingTests = [
  {
    "id": "java-mock-01",
    "seriesId": "java-mock",
    "courseId": "java",
    "title": "Java Full Mock Test - Fundamentals & Core Concepts",
    "durationMinutes": 35,
    "totalQuestions": 35,
    "passingPercentage": 45
  },
  {
    "id": "java-mock-02",
    "seriesId": "java-mock",
    "courseId": "java",
    "title": "Java Full Mock Test - Advanced Concepts & Collections",
    "durationMinutes": 40,
    "totalQuestions": 40,
    "passingPercentage": 50
  },
  {
    "id": "java-mock-03",
    "seriesId": "java-mock",
    "courseId": "java",
    "title": "Java Full Mock Test - Enterprise & Comprehensive",
    "durationMinutes": 45,
    "totalQuestions": 45,
    "passingPercentage": 55
  }
];

let testsFile = fs.readFileSync('src/data/tests.js', 'utf8');
const endBraceIndex = testsFile.lastIndexOf('];');

if (endBraceIndex !== -1 && !testsFile.includes('"java-mock-01"')) {
  const injectionString = ',\n' + missingTests.map(t => JSON.stringify(t, null, 2)).join(',\n') + '\n];';
  testsFile = testsFile.substring(0, endBraceIndex) + injectionString;
  fs.writeFileSync('src/data/tests.js', testsFile);
  console.log('Successfully injected java mock tests into tests.js array!');
} else {
  console.log('Tests already exist or tests.js is not an array ending in ];');
}

// Write questions
// (Will do questions in a separate command to avoid length issues)
