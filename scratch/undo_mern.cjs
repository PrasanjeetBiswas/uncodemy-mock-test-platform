const fs = require('fs');

let testsStr = fs.readFileSync('src/data/tests.js', 'utf8');
const tOriginal = testsStr;
const tExport = testsStr.replace('export const tests = ', '').replace(/;\s*$/, '');
const testsArr = eval(tExport);
const testsFiltered = testsArr.filter(t => !t.id.startsWith('mern-'));
fs.writeFileSync('src/data/tests.js', 'export const tests = ' + JSON.stringify(testsFiltered, null, 2) + ';\n');

let qStr = fs.readFileSync('src/data/questions.js', 'utf8');
const qExport = qStr.replace('export const questions = ', '').replace(/;\s*$/, '');
const qArr = eval(qExport);
const qFiltered = qArr.filter(q => !q.testId.startsWith('mern-'));
fs.writeFileSync('src/data/questions.js', 'export const questions = ' + JSON.stringify(qFiltered, null, 2) + ';\n');

console.log("Undo complete.");
