const fs = require('fs');

const subjects = [
  {
    id: "core-java",
    courseId: "java",
    title: "Core Java",
    description: "Master Java fundamentals, OOP concepts, and essential core features.",
    stats: {
      totalTests: 8,
      totalQuestions: "260+",
      difficulty: "Beginner to Advanced",
      updatedDate: "Aug 2026"
    },
    about: {
      description: "Comprehensive coverage of Core Java from syntax and OOP to Multithreading and Java 8+ features.",
      skills: ["OOP", "Data Types", "Exception Handling", "Multithreading", "Streams API"],
      idealFor: ["Java Developers", "Software Engineers", "Backend Developers"]
    }
  },
  {
    id: "collections",
    courseId: "java",
    title: "Collections Framework",
    description: "Deep dive into Java Collections: Lists, Sets, Maps, and Queues.",
    stats: {
      totalTests: 4,
      totalQuestions: "120+",
      difficulty: "Intermediate",
      updatedDate: "Aug 2026"
    },
    about: {
      description: "Master the Java Collections Framework, choosing the right data structures, and understanding their internal workings.",
      skills: ["ArrayList", "HashMap", "HashSet", "TreeSet", "Iterators"],
      idealFor: ["Java Developers", "Interview Candidates"]
    }
  },
  {
    id: "jdbc",
    courseId: "java",
    title: "JDBC & Advanced Java",
    description: "Database connectivity and advanced Java concepts.",
    stats: {
      totalTests: 3,
      totalQuestions: "90+",
      difficulty: "Advanced",
      updatedDate: "Aug 2026"
    },
    about: {
      description: "Learn how to connect Java applications to databases using JDBC and master advanced enterprise concepts.",
      skills: ["JDBC", "SQL Integration", "Connection Pooling", "Transactions"],
      idealFor: ["Backend Developers", "Enterprise Java Developers"]
    }
  }
];

let testSeriesFile = fs.readFileSync('src/data/testSeries.js', 'utf8');
const endBraceIndexTS = testSeriesFile.lastIndexOf('];');
if (endBraceIndexTS !== -1 && !testSeriesFile.includes('"core-java"')) {
  const injectionString = ',\n' + subjects.map(s => JSON.stringify(s, null, 2)).join(',\n') + '\n];';
  testSeriesFile = testSeriesFile.substring(0, endBraceIndexTS) + injectionString;
  fs.writeFileSync('src/data/testSeries.js', testSeriesFile);
  console.log('Java subjects added successfully to testSeries');
} else {
  console.log('Java subjects already exist or file format unexpected');
}

// Append java tests to tests.js
const missingTests = [
  {
    "id": "java-test-01",
    "seriesId": "core-java",
    "courseId": "java",
    "title": "Java Basics & Syntax",
    "durationMinutes": 30,
    "totalQuestions": 30,
    "passingPercentage": 40
  },
  {
    "id": "java-test-02",
    "seriesId": "core-java",
    "courseId": "java",
    "title": "Object-Oriented Programming (OOP) Concepts",
    "durationMinutes": 30,
    "totalQuestions": 30,
    "passingPercentage": 40
  },
  {
    "id": "java-test-03",
    "seriesId": "core-java",
    "courseId": "java",
    "title": "Data Types, Variables & Operators",
    "durationMinutes": 35,
    "totalQuestions": 35,
    "passingPercentage": 45
  },
  {
    "id": "java-test-04",
    "seriesId": "core-java",
    "courseId": "java",
    "title": "Strings, Arrays & Collections",
    "durationMinutes": 35,
    "totalQuestions": 35,
    "passingPercentage": 45
  },
  {
    "id": "java-test-05",
    "seriesId": "core-java",
    "courseId": "java",
    "title": "Exception Handling & Input/Output",
    "durationMinutes": 35,
    "totalQuestions": 35,
    "passingPercentage": 45
  },
  {
    "id": "java-test-06",
    "seriesId": "core-java",
    "courseId": "java",
    "title": "Multithreading & Concurrency",
    "durationMinutes": 35,
    "totalQuestions": 35,
    "passingPercentage": 45
  },
  {
    "id": "java-test-07",
    "seriesId": "core-java",
    "courseId": "java",
    "title": "Lambda Expressions & Streams API",
    "durationMinutes": 30,
    "totalQuestions": 30,
    "passingPercentage": 40
  },
  {
    "id": "java-test-08",
    "seriesId": "core-java",
    "courseId": "java",
    "title": "Advanced Java Features & Best Practices",
    "durationMinutes": 35,
    "totalQuestions": 35,
    "passingPercentage": 45
  }
];

let testsFile = fs.readFileSync('src/data/tests.js', 'utf8');
const endBraceIndex = testsFile.lastIndexOf('];');

if (endBraceIndex !== -1 && !testsFile.includes('"java-test-01"')) {
  const injectionString = ',\n' + missingTests.map(t => JSON.stringify(t, null, 2)).join(',\n') + '\n];';
  testsFile = testsFile.substring(0, endBraceIndex) + injectionString;
  fs.writeFileSync('src/data/tests.js', testsFile);
  console.log('Successfully injected java tests into tests.js array!');
} else {
  console.log('Tests already exist or tests.js is not an array ending in ];');
}
