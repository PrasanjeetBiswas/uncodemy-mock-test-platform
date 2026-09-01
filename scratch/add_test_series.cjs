const fs = require('fs');

let content = fs.readFileSync('src/data/testSeries.js', 'utf8');
const testSeries = eval(content.replace('export const testSeries = ', ''));

if (!testSeries.find(ts => ts.id === 'python-core')) {
  testSeries.push({
    id: "python-core",
    courseId: "python",
    title: "Python Core Test Series",
    description: "Improve your Python skills with our structured mock tests.",
    stats: {
      tests: "8",
      questions: "231+",
      level: "Beginner to Advanced",
      updated: "Aug 2026"
    }
  });
  
  fs.writeFileSync('src/data/testSeries.js', 'export const testSeries = ' + JSON.stringify(testSeries, null, 2) + ';\n');
  console.log('Added python-core to testSeries.js');
} else {
  console.log('Already exists');
}
