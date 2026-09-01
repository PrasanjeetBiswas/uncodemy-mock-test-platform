const fs = require('fs');

let content = fs.readFileSync('src/data/testSeries.js', 'utf8');
const testSeries = eval(content.replace('export const testSeries = ', ''));

const pythonCore = testSeries.find(ts => ts.id === 'python-core');
if (pythonCore) {
  pythonCore.stats = {
    "totalTests": 8,
    "totalQuestions": "231+",
    "difficulty": "Beginner to Advanced",
    "updatedDate": "Aug 2026"
  };
  pythonCore.about = {
    "description": "This series covers essential Python programming concepts, from basic syntax to advanced topics like OOP and Error Handling.",
    "skills": [
      "Python Basics",
      "Control Flow",
      "Data Structures",
      "Functions",
      "Object-Oriented Programming",
      "File Handling"
    ],
    "idealFor": [
      "Beginners",
      "Students",
      "Job Seekers"
    ]
  };
  
  fs.writeFileSync('src/data/testSeries.js', 'export const testSeries = ' + JSON.stringify(testSeries, null, 2) + ';\n');
  console.log('Fixed python-core testSeries structure');
} else {
  console.log('Not found');
}
