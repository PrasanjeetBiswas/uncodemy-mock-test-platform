const fs = require('fs');

let fileContent = fs.readFileSync('src/data/questions.js', 'utf8');

// The file should start with "export const questions = ["
const prefix = "export const questions = ";
const startIndex = fileContent.indexOf(prefix);

if (startIndex !== -1) {
  let jsonString = fileContent.substring(startIndex + prefix.length);
  if (jsonString.endsWith(';')) {
    jsonString = jsonString.slice(0, -1);
  } else if (jsonString.trim().endsWith(';')) {
    jsonString = jsonString.trim().slice(0, -1);
  }

  try {
    const questions = JSON.parse(jsonString);
    let modified = false;

    questions.forEach((q, idx) => {
      if (!q.id) {
        q.id = `${q.testId}-q${idx + 1}`;
        modified = true;
      }
    });

    if (modified) {
      const newContent = prefix + JSON.stringify(questions, null, 2) + ';\n';
      fs.writeFileSync('src/data/questions.js', newContent);
      console.log('Fixed missing IDs in questions.js');
    } else {
      console.log('No missing IDs found.');
    }
  } catch (err) {
    console.error('Failed to parse questions.js JSON:', err.message);
  }
} else {
  console.error('Could not find export const questions =');
}
