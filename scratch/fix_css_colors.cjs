const fs = require('fs');

let courseCardCss = fs.readFileSync('src/components/courses/CourseCard.module.css', 'utf8');
courseCardCss = courseCardCss.replace(/color: #D97706;/g, 'color: #92400e;');
courseCardCss = courseCardCss.replace(/color: var\(--color-primary\);/g, 'color: #d03801;');
courseCardCss = courseCardCss.replace(/rgba\(255, 84, 33/g, 'rgba(208, 56, 1)');
fs.writeFileSync('src/components/courses/CourseCard.module.css', courseCardCss);

let footerCss = fs.readFileSync('src/components/layout/Footer.css', 'utf8');
footerCss = footerCss.replace(/color: #696969/g, 'color: #a1a1aa');
footerCss = footerCss.replace(/background-color: #ff561f/g, 'background-color: #d03801');
footerCss = footerCss.replace(/background: #ff561f/g, 'background: #d03801');
fs.writeFileSync('src/components/layout/Footer.css', footerCss);

console.log('Fixed CSS colors');
