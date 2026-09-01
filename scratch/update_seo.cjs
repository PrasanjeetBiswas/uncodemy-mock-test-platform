const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf8');

const headInsert = `
    <meta name="description" content="Uncodemy Mock Tests - Master IT skills with our comprehensive mock tests in Data Science, Data Analytics, Full Stack Development, Software Testing, MERN, Java, and Artificial Intelligence. Prepare for placements and interviews." />
    <meta name="keywords" content="Uncodemy, mock tests, IT training, coding tests, software testing, data science, full stack, MERN, AI, Java, placement preparation" />
    <meta name="author" content="Uncodemy" />
    <link rel="canonical" href="https://uncodemy.com/mock-tests" />

    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://uncodemy.com/mock-tests" />
    <meta property="og:title" content="Uncodemy Mock Tests - Evaluate Your IT Skills" />
    <meta property="og:description" content="Practice mock tests for Data Analytics, Full Stack, Software Testing, AI, and more. Boost your placement chances with Uncodemy." />
    <meta property="og:image" content="https://uncodemy.com/img/logo.png" />

    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content="https://uncodemy.com/mock-tests" />
    <meta property="twitter:title" content="Uncodemy Mock Tests - Evaluate Your IT Skills" />
    <meta property="twitter:description" content="Practice mock tests for Data Analytics, Full Stack, Software Testing, AI, and more. Boost your placement chances with Uncodemy." />
    <meta property="twitter:image" content="https://uncodemy.com/img/logo.png" />

    <!-- AEO / GEO Structured Data (JSON-LD) -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "EducationalOrganization",
      "name": "Uncodemy",
      "url": "https://uncodemy.com/",
      "logo": "https://uncodemy.com/img/logo.png",
      "description": "Uncodemy offers top-tier IT training and mock tests for Software Testing, Data Science, Data Analytics, Full Stack Web Development, AI, Java, and MERN stack. We prepare students for guaranteed placements.",
      "sameAs": [
        "https://api.whatsapp.com/send?phone=918800023723"
      ],
      "offers": {
        "@type": "Offer",
        "name": "Mock Test Platform",
        "category": "Educational Assessment",
        "description": "Comprehensive mock tests designed to evaluate and improve technical skills for placement preparation."
      }
    }
    </script>
`;

if (!html.includes('Uncodemy Mock Tests - Master IT skills')) {
  html = html.replace('<title>Uncodemy Mock Tests</title>', '<title>Uncodemy Mock Tests | IT Training & Placement Preparation</title>\n' + headInsert);
  fs.writeFileSync('index.html', html);
  console.log('Updated index.html with SEO/AEO/GEO tags');
} else {
  console.log('SEO tags already present.');
}
