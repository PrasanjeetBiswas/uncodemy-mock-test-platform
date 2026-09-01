const fs = require('fs');

// 1. Fix Selects in AllTests.jsx
let allTests = fs.readFileSync('src/pages/AllTests.jsx', 'utf8');
allTests = allTests.replace('<select className={styles.selectBox} defaultValue="all">', '<select className={styles.selectBox} defaultValue="all" aria-label="Filter by level">');
allTests = allTests.replace('<select className={styles.selectBox} defaultValue="all">', '<select className={styles.selectBox} defaultValue="all" aria-label="Filter by test type">');
allTests = allTests.replace('<select \n                className={styles.selectBox} \n                value={sortBy}', '<select \n                className={styles.selectBox} \n                value={sortBy}\n                aria-label="Sort courses"');
fs.writeFileSync('src/pages/AllTests.jsx', allTests);

// 2. Fix Selects in MyAttempts.jsx
let myAttempts = fs.readFileSync('src/pages/MyAttempts.jsx', 'utf8');
myAttempts = myAttempts.replace('<select \n              className={styles.selectBox} \n              value={filterCourse}', '<select \n              className={styles.selectBox} \n              value={filterCourse}\n              aria-label="Filter by course"');
myAttempts = myAttempts.replace('<select \n              className={styles.selectBox}\n              value={filterStatus}', '<select \n              className={styles.selectBox}\n              value={filterStatus}\n              aria-label="Filter by status"');
myAttempts = myAttempts.replace('<select className={styles.selectBox}>', '<select className={styles.selectBox} aria-label="Sort attempts">');
fs.writeFileSync('src/pages/MyAttempts.jsx', myAttempts);

// 3. Fix uncodemy-navbar.js link
let nav = fs.readFileSync('public/uncodemy-navbar.js', 'utf8');
nav = nav.replace('<a href="tel:+918800023723">', '<a href="tel:+918800023723" aria-label="Call Support">');
fs.writeFileSync('public/uncodemy-navbar.js', nav);

// 4. Fix CSS Color Contrasts
let courseCardCss = fs.readFileSync('src/components/courses/CourseCard.module.css', 'utf8');
// Fix popular badge: foreground `#d97706` -> `#92400e` (darker orange/brown)
courseCardCss = courseCardCss.replace('color: #d97706;', 'color: #92400e;');
// Fix CTA button: it's `#ff5421` text on white. Let's make it `#e63900` or `#d03801` for better contrast
courseCardCss = courseCardCss.replace('color: #ff5421;', 'color: #d03801;'); 
courseCardCss = courseCardCss.replace('color: var(--primary);', 'color: #d03801; /* accessibility override */');
fs.writeFileSync('src/components/courses/CourseCard.module.css', courseCardCss);

let footerCss = fs.readFileSync('src/components/layout/Footer.css', 'utf8');
// copyright text: `#696969` on `#101010` -> `#a1a1aa` (gray-400)
footerCss = footerCss.replace('color: #696969;', 'color: #a1a1aa;');
// CTA link: `#ff561f` background with white text. `#ff561f` -> `#d03801`
footerCss = footerCss.replace('background-color: #ff561f;', 'background-color: #d03801;');
footerCss = footerCss.replace('background: #ff561f;', 'background: #d03801;');
fs.writeFileSync('src/components/layout/Footer.css', footerCss);

console.log('Fixed accessibility issues!');
