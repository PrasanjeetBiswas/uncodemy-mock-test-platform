const fs = require('fs');

let allTests = fs.readFileSync('src/pages/AllTests.jsx', 'utf8');
if (!allTests.includes("import { useSEO } from '../hooks/useSEO';")) {
  allTests = "import { useSEO } from '../hooks/useSEO';\n" + allTests;
  fs.writeFileSync('src/pages/AllTests.jsx', allTests);
  console.log("Fixed AllTests.jsx");
}

let coursePage = fs.readFileSync('src/pages/CoursePage.jsx', 'utf8');
if (!coursePage.includes("import { useSEO } from '../hooks/useSEO';")) {
  coursePage = "import { useSEO } from '../hooks/useSEO';\n" + coursePage;
  fs.writeFileSync('src/pages/CoursePage.jsx', coursePage);
  console.log("Fixed CoursePage.jsx");
}

