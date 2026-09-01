const fs = require('fs');

function replaceFileContent(filePath, replacements) {
  let content = fs.readFileSync(filePath, 'utf8');
  for (const [search, replace] of Object.entries(replacements)) {
    // We want to be careful not to replace parts of random words, but since these are very specific IDs with quotes, we can target them
    content = content.replace(new RegExp(`"id": "${search}"`, 'g'), `"id": "${replace}"`);
    content = content.replace(new RegExp(`"seriesId": "${search}"`, 'g'), `"seriesId": "${replace}"`);
  }
  fs.writeFileSync(filePath, content);
  console.log(`Updated ${filePath}`);
}

const replacements = {
  "playwright": "playwright-basics",
  "adv-automation": "playwright-advanced",
  "pw-full-mock": "playwright-full"
};

replaceFileContent('src/data/testSeries.js', replacements);
replaceFileContent('src/data/tests.js', replacements);

console.log('Fixed IDs to match subjects.js');
