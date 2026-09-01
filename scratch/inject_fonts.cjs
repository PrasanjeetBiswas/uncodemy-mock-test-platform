const fs = require('fs');

const fontsHtml = `
    <!-- Preconnect to Google Fonts for performance -->
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    
    <!-- Asynchronously load Google Fonts -->
    <link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,400&family=Poppins:wght@300;400;500;600;700&display=swap" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,400&family=Poppins:wght@300;400;500;600;700&display=swap" media="print" onload="this.media='all'" />
    <noscript>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,400&family=Poppins:wght@300;400;500;600;700&display=swap" />
    </noscript>
`;

let html = fs.readFileSync('index.html', 'utf8');
if (!html.includes('preconnect')) {
  html = html.replace('<link rel="stylesheet" href="/All.css" />', fontsHtml + '\n    <link rel="preload" as="style" href="/All.css" />\n    <link rel="stylesheet" href="/All.css" />');
  fs.writeFileSync('index.html', html);
  console.log('Injected Google Fonts and preloads into index.html');
} else {
  console.log('Already injected.');
}
