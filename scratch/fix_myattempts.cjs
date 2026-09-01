const fs = require('fs');
let content = fs.readFileSync('src/pages/MyAttempts.jsx', 'utf8');

content = content.replace(
  '<button className={styles.pageBtn} disabled><ChevronLeft size={16}/></button>',
  '<button className={styles.pageBtn} disabled aria-label="Previous Page"><ChevronLeft size={16}/></button>'
);
content = content.replace(
  '<button className={styles.pageBtn}><ChevronRight size={16}/></button>',
  '<button className={styles.pageBtn} aria-label="Next Page"><ChevronRight size={16}/></button>'
);

fs.writeFileSync('src/pages/MyAttempts.jsx', content);
console.log('Fixed MyAttempts.jsx pagination buttons');
