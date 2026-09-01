const fs = require('fs');

// Update AllTests.jsx
let allTests = fs.readFileSync('src/pages/AllTests.jsx', 'utf8');
if (!allTests.includes('useSEO')) {
  allTests = allTests.replace("import React, { useState } from 'react';", "import React, { useState } from 'react';\nimport { useSEO } from '../hooks/useSEO';");
  allTests = allTests.replace('const AllTests = () => {', 'const AllTests = () => {\n  useSEO({ title: "Home", description: "Explore comprehensive mock tests across Data Science, Full Stack, Software Testing, AI, and more." });\n');
  fs.writeFileSync('src/pages/AllTests.jsx', allTests);
}

// Update CoursePage.jsx
let coursePage = fs.readFileSync('src/pages/CoursePage.jsx', 'utf8');
if (!coursePage.includes('useSEO')) {
  coursePage = coursePage.replace("import { useParams, Link, useNavigate } from 'react-router-dom';", "import { useParams, Link, useNavigate } from 'react-router-dom';\nimport { useSEO } from '../hooks/useSEO';");
  
  // Inside the component after getting the course:
  coursePage = coursePage.replace('  if (!course) {', '  useSEO({ title: course ? `${course.title} Mock Tests` : "Course Not Found", description: course ? course.description : "" });\n\n  if (!course) {');
  fs.writeFileSync('src/pages/CoursePage.jsx', coursePage);
}

// Update MockTest.jsx
let mockTest = fs.readFileSync('src/pages/MockTest.jsx', 'utf8');
if (!mockTest.includes('useSEO')) {
  mockTest = mockTest.replace("import { useParams, useNavigate } from 'react-router-dom';", "import { useParams, useNavigate } from 'react-router-dom';\nimport { useSEO } from '../hooks/useSEO';");
  mockTest = mockTest.replace('  const test = tests.find(t => t.id === testId);', '  const test = tests.find(t => t.id === testId);\n  useSEO({ title: test ? `Taking ${test.title}` : "Mock Test", description: test ? `Take the mock test for ${test.title} at Uncodemy.` : "" });');
  fs.writeFileSync('src/pages/MockTest.jsx', mockTest);
}

console.log('Dynamic SEO added to key pages!');
