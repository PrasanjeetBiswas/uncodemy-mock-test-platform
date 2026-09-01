const fs = require('fs');

const subjects = [
  {
    id: "seo",
    courseId: "digital-marketing",
    title: "SEO (Search Engine Optimization)",
    description: "Master On-page, Off-page, and Technical SEO to rank higher on search engines.",
    stats: {
      totalTests: 5,
      totalQuestions: "170+",
      difficulty: "Beginner to Advanced",
      updatedDate: "Aug 2026"
    },
    about: {
      description: "Learn how search engines work and how to optimize websites to drive organic traffic.",
      skills: ["Keyword Research", "On-Page SEO", "Off-Page SEO", "Technical SEO", "Local SEO"],
      idealFor: ["Marketers", "SEO Specialists", "Business Owners"]
    }
  },
  {
    id: "social-media",
    courseId: "digital-marketing",
    title: "Social Media Marketing",
    description: "Learn how to build brand awareness and engage audiences across social platforms.",
    stats: {
      totalTests: 4,
      totalQuestions: "130+",
      difficulty: "Intermediate",
      updatedDate: "Aug 2026"
    },
    about: {
      description: "Master organic and paid social media strategies on platforms like Facebook, Instagram, LinkedIn, and TikTok.",
      skills: ["Content Strategy", "Community Management", "Social Advertising", "Influencer Marketing"],
      idealFor: ["Social Media Managers", "Marketers", "Content Creators"]
    }
  },
  {
    id: "ads",
    courseId: "digital-marketing",
    title: "Google/FB Ads",
    description: "Master paid advertising campaigns on Google Ads and Meta Ads platforms.",
    stats: {
      totalTests: 4,
      totalQuestions: "130+",
      difficulty: "Advanced",
      updatedDate: "Aug 2026"
    },
    about: {
      description: "Learn how to create, manage, and optimize paid campaigns for maximum ROI.",
      skills: ["Google Ads", "Facebook Ads", "PPC", "Bidding Strategies", "Campaign Optimization"],
      idealFor: ["Performance Marketers", "Media Buyers", "Business Owners"]
    }
  },
  {
    id: "dm-full-mock",
    courseId: "digital-marketing",
    title: "Digital Marketing Full Mock Tests",
    description: "Comprehensive mock tests covering all aspects of Digital Marketing.",
    stats: {
      totalTests: 2,
      totalQuestions: "85+",
      difficulty: "Advanced",
      updatedDate: "Aug 2026"
    },
    about: {
      description: "Evaluate your overall digital marketing readiness with these full-length mock tests.",
      skills: ["SEO", "SMM", "PPC", "Email Marketing", "Analytics"],
      idealFor: ["Marketing Professionals", "Job Seekers"]
    }
  }
];

let testSeriesFile = fs.readFileSync('src/data/testSeries.js', 'utf8');

const endBraceIndex = testSeriesFile.lastIndexOf('];');
if (endBraceIndex !== -1 && !testSeriesFile.includes('"seo"')) {
  const injectionString = ',\n' + subjects.map(s => JSON.stringify(s, null, 2)).join(',\n') + '\n];';
  testSeriesFile = testSeriesFile.substring(0, endBraceIndex) + injectionString;
  fs.writeFileSync('src/data/testSeries.js', testSeriesFile);
  console.log('Subjects added successfully to testSeries');
} else {
  console.log('Subjects for dm already exist or file format unexpected');
}
