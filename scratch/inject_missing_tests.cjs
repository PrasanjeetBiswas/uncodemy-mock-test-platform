const fs = require('fs');

const missingTests = [
  // SEO
  {
    "id": "seo-test-01",
    "seriesId": "seo",
    "courseId": "digital-marketing",
    "title": "SEO Fundamentals & Search Engine Mechanics",
    "durationMinutes": 30,
    "totalQuestions": 30,
    "passingPercentage": 40
  },
  {
    "id": "seo-test-02",
    "seriesId": "seo",
    "courseId": "digital-marketing",
    "title": "Keyword Research & Content Strategy",
    "durationMinutes": 30,
    "totalQuestions": 30,
    "passingPercentage": 40
  },
  {
    "id": "seo-test-03",
    "seriesId": "seo",
    "courseId": "digital-marketing",
    "title": "On-Page SEO & Content Optimization",
    "durationMinutes": 35,
    "totalQuestions": 35,
    "passingPercentage": 45
  },
  {
    "id": "seo-test-04",
    "seriesId": "seo",
    "courseId": "digital-marketing",
    "title": "Off-Page SEO & Link Building",
    "durationMinutes": 35,
    "totalQuestions": 35,
    "passingPercentage": 45
  },
  {
    "id": "seo-test-05",
    "seriesId": "seo",
    "courseId": "digital-marketing",
    "title": "Technical SEO, Analytics & Advanced Topics",
    "durationMinutes": 40,
    "totalQuestions": 40,
    "passingPercentage": 50
  },
  // Social Media
  {
    "id": "smm-test-01",
    "seriesId": "social-media",
    "courseId": "digital-marketing",
    "title": "Social Media Marketing Fundamentals",
    "durationMinutes": 30,
    "totalQuestions": 30,
    "passingPercentage": 40
  },
  {
    "id": "smm-test-02",
    "seriesId": "social-media",
    "courseId": "digital-marketing",
    "title": "Content Strategy & Platform Management",
    "durationMinutes": 30,
    "totalQuestions": 30,
    "passingPercentage": 40
  },
  {
    "id": "smm-test-03",
    "seriesId": "social-media",
    "courseId": "digital-marketing",
    "title": "Social Media Advertising & Analytics",
    "durationMinutes": 35,
    "totalQuestions": 35,
    "passingPercentage": 45
  },
  {
    "id": "smm-test-04",
    "seriesId": "social-media",
    "courseId": "digital-marketing",
    "title": "Advanced SMM & Influencer Marketing",
    "durationMinutes": 35,
    "totalQuestions": 35,
    "passingPercentage": 45
  },
  // Ads
  {
    "id": "ads-test-01",
    "seriesId": "ads",
    "courseId": "digital-marketing",
    "title": "Google Ads Fundamentals",
    "durationMinutes": 30,
    "totalQuestions": 30,
    "passingPercentage": 40
  },
  {
    "id": "ads-test-02",
    "seriesId": "ads",
    "courseId": "digital-marketing",
    "title": "Facebook & Meta Ads Fundamentals",
    "durationMinutes": 30,
    "totalQuestions": 30,
    "passingPercentage": 40
  },
  {
    "id": "ads-test-03",
    "seriesId": "ads",
    "courseId": "digital-marketing",
    "title": "Google Ads Advanced & Optimization",
    "durationMinutes": 35,
    "totalQuestions": 35,
    "passingPercentage": 45
  },
  {
    "id": "ads-test-04",
    "seriesId": "ads",
    "courseId": "digital-marketing",
    "title": "Facebook Ads Advanced & Strategy",
    "durationMinutes": 35,
    "totalQuestions": 35,
    "passingPercentage": 45
  },
  // DM Full Mock
  {
    "id": "dm-mock-01",
    "seriesId": "dm-full-mock",
    "courseId": "digital-marketing",
    "title": "Digital Marketing Mock Test - Fundamentals & Core Channels",
    "durationMinutes": 40,
    "totalQuestions": 40,
    "passingPercentage": 50
  },
  {
    "id": "dm-mock-02",
    "seriesId": "dm-full-mock",
    "courseId": "digital-marketing",
    "title": "Digital Marketing Mock Test - Advanced Strategies & Analytics",
    "durationMinutes": 45,
    "totalQuestions": 45,
    "passingPercentage": 55
  },
  // Playwright
  {
    "id": "playwright-test-01",
    "seriesId": "playwright",
    "courseId": "playwright-automation",
    "title": "Playwright Fundamentals & Core Concepts",
    "durationMinutes": 30,
    "totalQuestions": 30,
    "passingPercentage": 40
  },
  {
    "id": "playwright-test-02",
    "seriesId": "playwright",
    "courseId": "playwright-automation",
    "title": "Locators & Element Selection",
    "durationMinutes": 30,
    "totalQuestions": 30,
    "passingPercentage": 40
  },
  {
    "id": "playwright-test-03",
    "seriesId": "playwright",
    "courseId": "playwright-automation",
    "title": "Actions, Assertions & Interactions",
    "durationMinutes": 35,
    "totalQuestions": 35,
    "passingPercentage": 45
  },
  {
    "id": "playwright-test-04",
    "seriesId": "playwright",
    "courseId": "playwright-automation",
    "title": "Advanced Features & Best Practices",
    "durationMinutes": 35,
    "totalQuestions": 35,
    "passingPercentage": 45
  },
  // Adv Automation
  {
    "id": "adv-auto-test-01",
    "seriesId": "adv-automation",
    "courseId": "playwright-automation",
    "title": "Advanced Automation - Framework Design & Architecture",
    "durationMinutes": 35,
    "totalQuestions": 35,
    "passingPercentage": 45
  },
  {
    "id": "adv-auto-test-02",
    "seriesId": "adv-automation",
    "courseId": "playwright-automation",
    "title": "Advanced Automation - API Testing & Automation",
    "durationMinutes": 35,
    "totalQuestions": 35,
    "passingPercentage": 45
  },
  {
    "id": "adv-auto-test-03",
    "seriesId": "adv-automation",
    "courseId": "playwright-automation",
    "title": "Advanced Automation - Mobile & Cross-Platform Testing",
    "durationMinutes": 30,
    "totalQuestions": 30,
    "passingPercentage": 40
  },
  {
    "id": "adv-auto-test-04",
    "seriesId": "adv-automation",
    "courseId": "playwright-automation",
    "title": "Advanced Automation - Performance, Security & Non-Functional",
    "durationMinutes": 35,
    "totalQuestions": 35,
    "passingPercentage": 45
  },
  {
    "id": "adv-auto-test-05",
    "seriesId": "adv-automation",
    "courseId": "playwright-automation",
    "title": "Advanced Automation - CI/CD, DevOps & Test Strategy",
    "durationMinutes": 35,
    "totalQuestions": 35,
    "passingPercentage": 45
  },
  // Playwright Full Mock
  {
    "id": "pw-mock-01",
    "seriesId": "pw-full-mock",
    "courseId": "playwright-automation",
    "title": "Playwright Full Mock Test - Fundamentals & Core Features",
    "durationMinutes": 35,
    "totalQuestions": 35,
    "passingPercentage": 45
  },
  {
    "id": "pw-mock-02",
    "seriesId": "pw-full-mock",
    "courseId": "playwright-automation",
    "title": "Playwright Full Mock Test - Advanced & Comprehensive",
    "durationMinutes": 40,
    "totalQuestions": 40,
    "passingPercentage": 50
  }
];

let testsFile = fs.readFileSync('src/data/tests.js', 'utf8');
const endBraceIndex = testsFile.lastIndexOf('];');

if (endBraceIndex !== -1 && !testsFile.includes('"seo-test-01"')) {
  const injectionString = ',\n' + missingTests.map(t => JSON.stringify(t, null, 2)).join(',\n') + '\n];';
  testsFile = testsFile.substring(0, endBraceIndex) + injectionString;
  fs.writeFileSync('src/data/tests.js', testsFile);
  console.log('Successfully injected all missing tests into tests.js array!');
} else {
  console.log('Tests already exist or tests.js is not an array ending in ];');
}
