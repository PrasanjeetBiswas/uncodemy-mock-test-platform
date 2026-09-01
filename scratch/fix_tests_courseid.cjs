const fs = require('fs');

let testsFile = fs.readFileSync('src/data/tests.js', 'utf8');
let subjectsFile = fs.readFileSync('src/data/subjects.js', 'utf8');

function extractJs(content, prefix) {
  const start = content.indexOf(prefix);
  let str = content.substring(start + prefix.length);
  if (str.endsWith(';')) str = str.slice(0, -1);
  else if (str.trim().endsWith(';')) str = str.trim().slice(0, -1);
  return eval('(' + str + ')');
}

const tests = extractJs(testsFile, 'export const tests = ');
const subjects = extractJs(subjectsFile, 'export const subjects = ');

const subjectMap = {};
subjects.forEach(s => {
  subjectMap[s.id] = s.courseId;
});

let modified = false;
tests.forEach(t => {
  if (!t.courseId && subjectMap[t.seriesId]) {
    t.courseId = subjectMap[t.seriesId];
    modified = true;
  }
});

if (modified) {
  const newTestsContent = 'export const tests = ' + JSON.stringify(tests, null, 2) + ';\n';
  fs.writeFileSync('src/data/tests.js', newTestsContent);
  console.log('Fixed missing courseIds in tests.js');
} else {
  console.log('No missing courseIds found.');
}
