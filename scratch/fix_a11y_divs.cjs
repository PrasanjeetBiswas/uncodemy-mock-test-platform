const fs = require('fs');

// Fix UnlockTest.jsx
let unlock = fs.readFileSync('src/pages/UnlockTest.jsx', 'utf8');
unlock = unlock.replace(
  '<div className={styles.backBtn} onClick={() => navigate(-1)}>',
  '<div className={styles.backBtn} onClick={() => navigate(-1)} role="button" tabIndex={0} onKeyDown={(e) => { if(e.key === \'Enter\' || e.key === \' \') navigate(-1); }} aria-label="Go Back">'
);
fs.writeFileSync('src/pages/UnlockTest.jsx', unlock);

// Fix Footer.jsx div acting as button
let footer = fs.readFileSync('src/components/layout/Footer.jsx', 'utf8');
footer = footer.replace(
  "<div className=\"nav-item center\" onClick={() => console.log('showForm clicked')}>",
  "<div className=\"nav-item center\" onClick={() => console.log('showForm clicked')} role=\"button\" tabIndex={0} aria-label=\"Show Form\" onKeyDown={(e) => { if(e.key === 'Enter' || e.key === ' ') console.log('showForm clicked'); }}>"
);
fs.writeFileSync('src/components/layout/Footer.jsx', footer);

console.log('Fixed Agentic Browsing a11y issues in divs');
