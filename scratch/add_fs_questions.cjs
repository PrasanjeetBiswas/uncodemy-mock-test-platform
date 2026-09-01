const fs = require('fs');
const path = require('path');

const newQuestions = [
  {
    "testId": "fs-mock-01",
    "question": "What is the purpose of the <head> tag in HTML?",
    "options": [
      "To contain metadata and document information",
      "To define the main content of the page",
      "To create a navigation menu",
      "To display a footer"
    ],
    "correctOption": 0,
    "explanation": "The <head> tag contains meta-information about the document, such as title, styles, and scripts."
  },
  {
    "testId": "fs-mock-01",
    "question": "Which CSS property is used to change the font size?",
    "options": ["font-size", "text-size", "font-style", "size"],
    "correctOption": 0,
    "explanation": "font-size controls the size of the text."
  },
  {
    "testId": "fs-mock-01",
    "question": "What is the correct way to declare a variable in JavaScript?",
    "options": ["var x;", "let x;", "const x;", "All of the above"],
    "correctOption": 3,
    "explanation": "All three are valid ways to declare variables in modern JavaScript."
  },
  {
    "testId": "fs-mock-01",
    "question": "Which SQL command is used to retrieve data?",
    "options": ["SELECT", "INSERT", "UPDATE", "DELETE"],
    "correctOption": 0,
    "explanation": "SELECT is used to query data from a database."
  },
  {
    "testId": "fs-mock-01",
    "question": "What is the difference between `let` and `const`?",
    "options": [
      "let allows reassignment; const does not",
      "const allows reassignment; let does not",
      "Both allow reassignment",
      "Both are block-scoped, but const is immutable"
    ],
    "correctOption": 0,
    "explanation": "`let` variables can be reassigned; `const` variables cannot be reassigned after declaration."
  },
  {
    "testId": "fs-mock-01",
    "question": "Which HTTP method is used to update a resource?",
    "options": ["GET", "POST", "PUT", "DELETE"],
    "correctOption": 2,
    "explanation": "PUT is used to update or replace a resource."
  },
  {
    "testId": "fs-mock-01",
    "question": "What is a primary key in a relational database?",
    "options": [
      "A column that uniquely identifies each row",
      "A column that allows NULL values",
      "A column that references another table",
      "A column that stores large text"
    ],
    "correctOption": 0,
    "explanation": "A primary key uniquely identifies each record and cannot be NULL."
  },
  {
    "testId": "fs-mock-01",
    "question": "What is the DOM in web development?",
    "options": [
      "Document Object Model, an API for HTML/XML documents",
      "A database management system",
      "A server-side framework",
      "A CSS preprocessor"
    ],
    "correctOption": 0,
    "explanation": "The DOM is a programming interface for web documents, representing the page structure as a tree of objects."
  },
  {
    "testId": "fs-mock-01",
    "question": "Which of the following is a NoSQL database?",
    "options": ["MySQL", "PostgreSQL", "MongoDB", "Oracle"],
    "correctOption": 2,
    "explanation": "MongoDB is a document-oriented NoSQL database."
  },
  {
    "testId": "fs-mock-01",
    "question": "What is an API?",
    "options": [
      "Application Programming Interface",
      "Advanced Program Integration",
      "Automated Process Interface",
      "Application Protocol Interaction"
    ],
    "correctOption": 0,
    "explanation": "API stands for Application Programming Interface, enabling software components to communicate."
  },
  {
    "testId": "fs-mock-01",
    "question": "Which HTML tag is used to create an unordered list?",
    "options": ["<ul>", "<ol>", "<li>", "<list>"],
    "correctOption": 0,
    "explanation": "<ul> defines an unordered (bulleted) list."
  },
  {
    "testId": "fs-mock-01",
    "question": "What is the box model in CSS?",
    "options": [
      "A model that describes the spacing around elements",
      "A layout technique",
      "A grid system",
      "A JavaScript library"
    ],
    "correctOption": 0,
    "explanation": "The box model consists of margin, border, padding, and content."
  },
  {
    "testId": "fs-mock-01",
    "question": "Which command is used to initialize a new Node.js project?",
    "options": ["npm init", "npm start", "npm install", "node init"],
    "correctOption": 0,
    "explanation": "npm init creates a package.json file."
  },
  {
    "testId": "fs-mock-01",
    "question": "What is the purpose of `process.env` in Node.js?",
    "options": [
      "To access environment variables",
      "To read command-line arguments",
      "To get the current working directory",
      "To exit the process"
    ],
    "correctOption": 0,
    "explanation": "process.env is an object containing environment variables."
  },
  {
    "testId": "fs-mock-01",
    "question": "What is CORS?",
    "options": [
      "Cross-Origin Resource Sharing, a mechanism for allowing cross-domain requests",
      "A data format",
      "A JavaScript library",
      "A CSS framework"
    ],
    "correctOption": 0,
    "explanation": "CORS is a security feature implemented by browsers to allow or restrict cross-origin requests."
  },
  {
    "testId": "fs-mock-01",
    "question": "Which HTTP status code means 'Not Found'?",
    "options": ["400", "404", "500", "301"],
    "correctOption": 1,
    "explanation": "404 Not Found indicates the requested resource could not be found."
  },
  {
    "testId": "fs-mock-01",
    "question": "What is a React component?",
    "options": [
      "A reusable UI piece that can have its own state and props",
      "A function that returns HTML",
      "A class that extends React.Component",
      "All of the above"
    ],
    "correctOption": 3,
    "explanation": "Components are the building blocks of React UIs, can be functional or class-based."
  },
  {
    "testId": "fs-mock-01",
    "question": "What is the purpose of `useState` in React?",
    "options": [
      "To add state to functional components",
      "To handle side effects",
      "To manage context",
      "To memoize values"
    ],
    "correctOption": 0,
    "explanation": "useState is a React hook for managing local state in functional components."
  },
  {
    "testId": "fs-mock-01",
    "question": "Which SQL keyword is used to sort results?",
    "options": ["ORDER BY", "GROUP BY", "HAVING", "WHERE"],
    "correctOption": 0,
    "explanation": "ORDER BY sorts the result set."
  },
  {
    "testId": "fs-mock-01",
    "question": "What is the difference between `==` and `===` in JavaScript?",
    "options": [
      "=== checks value and type; == only checks value with coercion",
      "== checks type; === checks value",
      "Both are the same",
      "=== is for objects, == is for primitives"
    ],
    "correctOption": 0,
    "explanation": "=== is strict equality without type coercion."
  },
  {
    "testId": "fs-mock-01",
    "question": "Which npm command is used to install dependencies?",
    "options": ["npm install", "npm i", "Both A and B", "npm get"],
    "correctOption": 2,
    "explanation": "Both `npm install` and `npm i` install dependencies."
  },
  {
    "testId": "fs-mock-01",
    "question": "What is a view in SQL?",
    "options": [
      "A virtual table based on a SELECT query",
      "A physical table",
      "An index",
      "A stored procedure"
    ],
    "correctOption": 0,
    "explanation": "A view is a virtual table that doesn't store data; it presents the result of a query."
  },
  {
    "testId": "fs-mock-01",
    "question": "What is the event loop in Node.js?",
    "options": [
      "A mechanism that handles asynchronous operations",
      "A loop for iterating over arrays",
      "A synchronous loop",
      "A timer"
    ],
    "correctOption": 0,
    "explanation": "The event loop enables non-blocking I/O by managing callbacks."
  },
  {
    "testId": "fs-mock-01",
    "question": "What is the purpose of the `async` keyword?",
    "options": [
      "To declare an asynchronous function that returns a Promise",
      "To create a synchronous function",
      "To import modules",
      "To export functions"
    ],
    "correctOption": 0,
    "explanation": "async functions always return a Promise."
  },
  {
    "testId": "fs-mock-01",
    "question": "Which CSS layout is best for creating a responsive grid?",
    "options": ["Flexbox", "Grid", "Float", "Position"],
    "correctOption": 1,
    "explanation": "CSS Grid is designed for two-dimensional layouts, making it ideal for responsive grids."
  },
  {
    "testId": "fs-mock-01",
    "question": "What is a foreign key?",
    "options": [
      "A key that links to the primary key in another table",
      "A key that is unique",
      "A key that can be NULL",
      "A key that is composite"
    ],
    "correctOption": 0,
    "explanation": "A foreign key enforces referential integrity between two tables."
  },
  {
    "testId": "fs-mock-01",
    "question": "What is a package manager?",
    "options": [
      "A tool for managing external libraries and dependencies",
      "A tool for compiling code",
      "A tool for designing UI",
      "A tool for testing"
    ],
    "correctOption": 0,
    "explanation": "Package managers like npm and yarn help install and manage dependencies."
  },
  {
    "testId": "fs-mock-01",
    "question": "What is the output of `console.log(2 + '2')` in JavaScript?",
    "options": ["4", "'22'", "22", "Error"],
    "correctOption": 1,
    "explanation": "When adding a number and a string, JavaScript converts the number to a string and concatenates."
  },
  {
    "testId": "fs-mock-01",
    "question": "What is the role of middleware in Express.js?",
    "options": [
      "To handle requests and responses",
      "To manage database connections",
      "To render views",
      "To start the server"
    ],
    "correctOption": 0,
    "explanation": "Middleware functions have access to the request and response objects and can modify them."
  },
  {
    "testId": "fs-mock-01",
    "question": "Which of the following is a version control system?",
    "options": ["Git", "SVN", "Mercurial", "All of the above"],
    "correctOption": 3,
    "explanation": "Git, SVN, and Mercurial are all version control systems."
  },
  {
    "testId": "fs-mock-02",
    "question": "What is the purpose of `key` prop in React lists?",
    "options": [
      "To help React identify which items changed",
      "To style list items",
      "To set the list order",
      "To bind event handlers"
    ],
    "correctOption": 0,
    "explanation": "Keys give elements a stable identity, optimizing updates."
  },
  {
    "testId": "fs-mock-02",
    "question": "Which CSS selector selects all elements with a specific class?",
    "options": [".classname", "#id", "element", "*"],
    "correctOption": 0,
    "explanation": "Class selectors start with a dot."
  },
  {
    "testId": "fs-mock-02",
    "question": "What is JSX?",
    "options": [
      "A syntax extension for React that allows HTML-like code in JavaScript",
      "A JavaScript framework",
      "A CSS preprocessor",
      "A testing tool"
    ],
    "correctOption": 0,
    "explanation": "JSX allows you to write UI components in a syntax similar to HTML."
  },
  {
    "testId": "fs-mock-02",
    "question": "What is the default display value of a `<div>`?",
    "options": ["block", "inline", "inline-block", "flex"],
    "correctOption": 0,
    "explanation": "div is a block-level element."
  },
  {
    "testId": "fs-mock-02",
    "question": "Which React hook is used for side effects?",
    "options": ["useEffect", "useState", "useRef", "useContext"],
    "correctOption": 0,
    "explanation": "useEffect handles side effects like data fetching."
  },
  {
    "testId": "fs-mock-02",
    "question": "How do you center a block element horizontally in CSS?",
    "options": ["margin: 0 auto;", "text-align: center;", "display: center;", "align: center"],
    "correctOption": 0,
    "explanation": "`margin: 0 auto;` on a block with a fixed width centers it."
  },
  {
    "testId": "fs-mock-02",
    "question": "What is the virtual DOM in React?",
    "options": [
      "A lightweight representation of the real DOM",
      "The actual DOM",
      "A React component",
      "A state management system"
    ],
    "correctOption": 0,
    "explanation": "The virtual DOM is an in-memory copy of the real DOM used for efficient updates."
  },
  {
    "testId": "fs-mock-02",
    "question": "Which CSS property creates rounded corners?",
    "options": ["border-radius", "corner-radius", "rounded", "border-curve"],
    "correctOption": 0,
    "explanation": "border-radius defines the roundness of corners."
  },
  {
    "testId": "fs-mock-02",
    "question": "What is a controlled component in React?",
    "options": [
      "A component whose value is controlled by React state",
      "A component without state",
      "A component that uses context",
      "A component that uses refs"
    ],
    "correctOption": 0,
    "explanation": "In controlled components, form data is handled by React state."
  },
  {
    "testId": "fs-mock-02",
    "question": "What is the purpose of `useRef` in React?",
    "options": [
      "To get a mutable reference to a DOM element or value",
      "To manage state",
      "To handle side effects",
      "To create context"
    ],
    "correctOption": 0,
    "explanation": "useRef creates a mutable ref object that persists across renders."
  },
  {
    "testId": "fs-mock-02",
    "question": "Which of the following is a CSS preprocessor?",
    "options": ["Sass", "Less", "Stylus", "All of the above"],
    "correctOption": 3,
    "explanation": "Sass, Less, and Stylus are all CSS preprocessors."
  },
  {
    "testId": "fs-mock-02",
    "question": "What is the difference between `React.memo` and `useMemo`?",
    "options": [
      "React.memo memoizes a component; useMemo memoizes a value",
      "useMemo memoizes a component; React.memo memoizes a value",
      "Both memoize values",
      "Both memoize components"
    ],
    "correctOption": 0,
    "explanation": "React.memo is for component memoization; useMemo is for value memoization."
  },
  {
    "testId": "fs-mock-02",
    "question": "What is the default flex-direction in Flexbox?",
    "options": ["row", "column", "row-reverse", "column-reverse"],
    "correctOption": 0,
    "explanation": "The default is row."
  },
  {
    "testId": "fs-mock-02",
    "question": "Which CSS property is used to make an element fixed relative to the viewport?",
    "options": ["position: fixed", "position: sticky", "position: absolute", "position: relative"],
    "correctOption": 0,
    "explanation": "fixed positions the element relative to the viewport."
  },
  {
    "testId": "fs-mock-02",
    "question": "What is the purpose of React Router?",
    "options": [
      "To handle routing and navigation in React apps",
      "To manage state",
      "To fetch data",
      "To handle forms"
    ],
    "correctOption": 0,
    "explanation": "React Router is a library for client-side routing."
  },
  {
    "testId": "fs-mock-02",
    "question": "What does `npm run build` typically do in a React app?",
    "options": [
      "Builds the production bundle",
      "Starts the development server",
      "Runs tests",
      "Installs dependencies"
    ],
    "correctOption": 0,
    "explanation": "`npm run build` creates an optimized production build."
  },
  {
    "testId": "fs-mock-02",
    "question": "What is the use of `exact` prop in React Router?",
    "options": [
      "To ensure that the route only matches when the path is exactly the same",
      "To enable exact matching of query parameters",
      "To make the route case-sensitive",
      "To enable nested routes"
    ],
    "correctOption": 0,
    "explanation": "exact ensures the route matches only the exact path."
  },
  {
    "testId": "fs-mock-02",
    "question": "Which of the following is a valid React event handler?",
    "options": ["onClick", "onClick", "onclick", "click"],
    "correctOption": 0,
    "explanation": "React uses camelCase event names like onClick."
  },
  {
    "testId": "fs-mock-02",
    "question": "What is the purpose of `Context` in React?",
    "options": [
      "To share state across the component tree without prop drilling",
      "To manage local state",
      "To handle side effects",
      "To optimize performance"
    ],
    "correctOption": 0,
    "explanation": "Context provides a way to pass data through the component tree."
  },
  {
    "testId": "fs-mock-02",
    "question": "Which CSS grid property defines column sizes?",
    "options": ["grid-template-columns", "grid-template-rows", "grid-column", "grid-area"],
    "correctOption": 0,
    "explanation": "grid-template-columns defines the columns of the grid."
  },
  {
    "testId": "fs-mock-02",
    "question": "What is the purpose of `lazy` in React?",
    "options": [
      "To lazy load components for code splitting",
      "To debounce event handlers",
      "To delay state updates",
      "To cache data"
    ],
    "correctOption": 0,
    "explanation": "React.lazy allows dynamic import of components to reduce initial bundle size."
  },
  {
    "testId": "fs-mock-03",
    "question": "Which module is used to create a server in Node.js?",
    "options": ["http", "fs", "path", "os"],
    "correctOption": 0,
    "explanation": "The http module is used to build HTTP servers."
  },
  {
    "testId": "fs-mock-03",
    "question": "What is the purpose of `body-parser` in Express?",
    "options": [
      "To parse incoming request bodies",
      "To parse query strings",
      "To parse cookies",
      "To log requests"
    ],
    "correctOption": 0,
    "explanation": "body-parser parses JSON, urlencoded, and other request body formats."
  },
  {
    "testId": "fs-mock-03",
    "question": "Which method is used to get the current working directory in Node.js?",
    "options": ["process.cwd()", "__dirname", "fs.cwd()", "os.cwd()"],
    "correctOption": 0,
    "explanation": "process.cwd() returns the current working directory."
  },
  {
    "testId": "fs-mock-03",
    "question": "What is the difference between `fs.readFile` and `fs.readFileSync`?",
    "options": [
      "readFile is asynchronous; readFileSync is synchronous",
      "readFileSync is asynchronous; readFile is synchronous",
      "Both are asynchronous",
      "Both are synchronous"
    ],
    "correctOption": 0,
    "explanation": "readFile is non-blocking; readFileSync blocks the event loop."
  },
  {
    "testId": "fs-mock-03",
    "question": "How do you export a module in Node.js?",
    "options": ["module.exports", "exports", "export", "Both A and B"],
    "correctOption": 3,
    "explanation": "Both module.exports and exports can export module contents."
  },
  {
    "testId": "fs-mock-03",
    "question": "Which package is used for environment variables in Node.js?",
    "options": ["dotenv", "env", "config", "process.env"],
    "correctOption": 0,
    "explanation": "dotenv is used to load environment variables from a .env file."
  },
  {
    "testId": "fs-mock-03",
    "question": "What is the difference between `app.get` and `app.use` in Express?",
    "options": [
      "app.get handles GET requests; app.use handles all HTTP methods",
      "app.use handles GET; app.get handles all",
      "Both handle all methods",
      "Both only handle GET"
    ],
    "correctOption": 0,
    "explanation": "app.get is specific to GET; app.use is for middleware that can handle any method."
  },
  {
    "testId": "fs-mock-03",
    "question": "Which method is used to start an Express server?",
    "options": ["app.listen()", "app.start()", "app.run()", "app.serve()"],
    "correctOption": 0,
    "explanation": "app.listen() starts the server and listens on a port."
  },
  {
    "testId": "fs-mock-03",
    "question": "What is a middleware in Express?",
    "options": [
      "A function that has access to request and response objects",
      "A route handler",
      "A database connection",
      "A static file server"
    ],
    "correctOption": 0,
    "explanation": "Middleware functions can modify request/response and pass control to the next function."
  },
  {
    "testId": "fs-mock-03",
    "question": "What is the purpose of `next()` in Express middleware?",
    "options": [
      "To pass control to the next middleware",
      "To end the request-response cycle",
      "To throw an error",
      "To send a response"
    ],
    "correctOption": 0,
    "explanation": "Calling next() invokes the next middleware in the chain."
  },
  {
    "testId": "fs-mock-03",
    "question": "Which module is used for path manipulation in Node.js?",
    "options": ["path", "fs", "url", "os"],
    "correctOption": 0,
    "explanation": "The path module provides utilities for working with file paths."
  },
  {
    "testId": "fs-mock-03",
    "question": "What is a Promise in JavaScript/Node.js?",
    "options": [
      "An object representing the eventual completion of an asynchronous operation",
      "A synchronous function",
      "A callback",
      "A thread"
    ],
    "correctOption": 0,
    "explanation": "Promises are a modern way to handle asynchronous operations."
  },
  {
    "testId": "fs-mock-03",
    "question": "Which of the following is a valid way to handle errors in Express?",
    "options": [
      "Error-handling middleware",
      "try/catch",
      "Using promises with catch",
      "All of the above"
    ],
    "correctOption": 3,
    "explanation": "All methods can be used to handle errors in Express."
  },
  {
    "testId": "fs-mock-03",
    "question": "What is `express.static` used for?",
    "options": [
      "To serve static files (like HTML, CSS, JS)",
      "To parse JSON",
      "To handle authentication",
      "To log requests"
    ],
    "correctOption": 0,
    "explanation": "express.static serves files from a directory."
  },
  {
    "testId": "fs-mock-03",
    "question": "Which package is commonly used for logging HTTP requests in Express?",
    "options": ["morgan", "winston", "log4js", "pino"],
    "correctOption": 0,
    "explanation": "Morgan is a popular HTTP request logger middleware."
  },
  {
    "testId": "fs-mock-03",
    "question": "What is the difference between `require` and `import` in Node.js?",
    "options": [
      "require is CommonJS; import is ES modules",
      "import is CommonJS; require is ES modules",
      "Both are the same",
      "require works in browsers, import in Node"
    ],
    "correctOption": 0,
    "explanation": "require is synchronous and used in Node.js; import is asynchronous and used in ES modules."
  },
  {
    "testId": "fs-mock-03",
    "question": "How do you handle uncaught exceptions in Node.js?",
    "options": [
      "process.on('uncaughtException', handler)",
      "try/catch",
      "domain",
      "All of the above"
    ],
    "correctOption": 0,
    "explanation": "The recommended way is to use process.on('uncaughtException')."
  },
  {
    "testId": "fs-mock-03",
    "question": "Which method is used to parse JSON in Express?",
    "options": ["express.json()", "bodyParser.json()", "Both A and B", "express.parseJSON()"],
    "correctOption": 2,
    "explanation": "Both express.json() and body-parser are used; express.json() is built-in in newer versions."
  },
  {
    "testId": "fs-mock-03",
    "question": "What is the purpose of the `cors` middleware?",
    "options": [
      "To enable Cross-Origin Resource Sharing",
      "To enable debugging",
      "To compress responses",
      "To parse cookies"
    ],
    "correctOption": 0,
    "explanation": "cors enables cross-origin requests."
  },
  {
    "testId": "fs-mock-03",
    "question": "Which of the following is a Node.js core module?",
    "options": ["fs", "http", "path", "All of the above"],
    "correctOption": 3,
    "explanation": "fs, http, and path are all built-in core modules."
  },
  {
    "testId": "fs-mock-03",
    "question": "What is the event loop?",
    "options": [
      "A loop that handles asynchronous callbacks",
      "A loop that iterates over arrays",
      "A loop that processes files",
      "A loop that creates threads"
    ],
    "correctOption": 0,
    "explanation": "The event loop is the core of Node.js's non-blocking I/O."
  },
  {
    "testId": "fs-mock-03",
    "question": "Which command runs a Node.js file?",
    "options": ["node filename.js", "npm run filename.js", "node start filename.js", "npm start filename.js"],
    "correctOption": 0,
    "explanation": "The `node` command is used to execute a JavaScript file."
  },
  {
    "testId": "fs-mock-03",
    "question": "What is `npm init` used for?",
    "options": [
      "To create a package.json file",
      "To install dependencies",
      "To start a server",
      "To run tests"
    ],
    "correctOption": 0,
    "explanation": "npm init creates a new package.json file."
  },
  {
    "testId": "fs-mock-04",
    "question": "What is ACID?",
    "options": [
      "Atomicity, Consistency, Isolation, Durability",
      "Accuracy, Consistency, Integrity, Durability",
      "Atomicity, Completeness, Isolation, Dependability",
      "All of the above"
    ],
    "correctOption": 0,
    "explanation": "ACID properties ensure reliable processing of database transactions."
  },
  {
    "testId": "fs-mock-04",
    "question": "Which SQL join returns all rows from the left table and matching from the right?",
    "options": ["LEFT JOIN", "INNER JOIN", "RIGHT JOIN", "FULL JOIN"],
    "correctOption": 0,
    "explanation": "LEFT JOIN returns all rows from the left table, with NULLs on the right if no match."
  },
  {
    "testId": "fs-mock-04",
    "question": "What is a primary key?",
    "options": [
      "Uniquely identifies each row and cannot be NULL",
      "Allows duplicates",
      "Can be NULL",
      "References another table"
    ],
    "correctOption": 0,
    "explanation": "A primary key must be unique and non-NULL."
  },
  {
    "testId": "fs-mock-04",
    "question": "Which command creates a table in SQL?",
    "options": ["CREATE TABLE", "CREATE DATABASE", "ALTER TABLE", "DROP TABLE"],
    "correctOption": 0,
    "explanation": "CREATE TABLE defines a new table."
  },
  {
    "testId": "fs-mock-04",
    "question": "What is a foreign key?",
    "options": [
      "A key that references the primary key of another table",
      "A unique key",
      "A key that allows NULL",
      "A composite key"
    ],
    "correctOption": 0,
    "explanation": "Foreign keys enforce referential integrity between tables."
  },
  {
    "testId": "fs-mock-04",
    "question": "Which aggregate function counts rows?",
    "options": ["COUNT(*)", "SUM", "AVG", "MAX"],
    "correctOption": 0,
    "explanation": "COUNT(*) returns the number of rows."
  },
  {
    "testId": "fs-mock-04",
    "question": "What is normalization?",
    "options": [
      "Organizing data to reduce redundancy",
      "Adding redundancy for performance",
      "Encrypting data",
      "Indexing data"
    ],
    "correctOption": 0,
    "explanation": "Normalization minimizes redundancy and dependency."
  },
  {
    "testId": "fs-mock-04",
    "question": "What is a NoSQL database?",
    "options": [
      "A non-relational database with flexible schema",
      "A relational database",
      "A graph database",
      "A file system"
    ],
    "correctOption": 0,
    "explanation": "NoSQL databases are non-relational and often schema-less."
  },
  {
    "testId": "fs-mock-04",
    "question": "Which MongoDB method inserts a document?",
    "options": ["insertOne()", "insert()", "add()", "save()"],
    "correctOption": 0,
    "explanation": "insertOne() inserts a single document."
  },
  {
    "testId": "fs-mock-04",
    "question": "What is an index in a database?",
    "options": [
      "A data structure that improves query performance",
      "A constraint",
      "A relationship",
      "A backup"
    ],
    "correctOption": 0,
    "explanation": "Indexes speed up data retrieval."
  },
  {
    "testId": "fs-mock-04",
    "question": "Which clause is used to filter groups in SQL?",
    "options": ["HAVING", "WHERE", "GROUP BY", "ORDER BY"],
    "correctOption": 0,
    "explanation": "HAVING filters aggregated groups."
  },
  {
    "testId": "fs-mock-04",
    "question": "What is a transaction?",
    "options": [
      "A sequence of operations performed as a single unit",
      "A single query",
      "A backup",
      "An index"
    ],
    "correctOption": 0,
    "explanation": "Transactions group operations that must be all committed or rolled back."
  },
  {
    "testId": "fs-mock-04",
    "question": "Which statement is used to delete data from a table?",
    "options": ["DELETE FROM", "DROP TABLE", "TRUNCATE", "REMOVE"],
    "correctOption": 0,
    "explanation": "DELETE FROM removes rows based on a condition."
  },
  {
    "testId": "fs-mock-04",
    "question": "What is a collection in MongoDB?",
    "options": [
      "A group of documents",
      "A database",
      "A single document",
      "An index"
    ],
    "correctOption": 0,
    "explanation": "Collections store documents."
  },
  {
    "testId": "fs-mock-04",
    "question": "What is the difference between `DELETE` and `TRUNCATE`?",
    "options": [
      "DELETE is DML and can be rolled back; TRUNCATE is DDL and cannot be rolled back in some DBs",
      "TRUNCATE is DML; DELETE is DDL",
      "Both are the same",
      "DELETE removes all rows; TRUNCATE can have WHERE"
    ],
    "correctOption": 0,
    "explanation": "DELETE is logged row by row; TRUNCATE drops and re-creates the table."
  },
  {
    "testId": "fs-mock-04",
    "question": "What is a view in SQL?",
    "options": [
      "A virtual table based on a query",
      "A physical table",
      "An index",
      "A stored procedure"
    ],
    "correctOption": 0,
    "explanation": "A view is a virtual table that does not store data."
  },
  {
    "testId": "fs-mock-04",
    "question": "What is the CAP theorem?",
    "options": [
      "Consistency, Availability, Partition tolerance",
      "Consistency, Atomicity, Partition tolerance",
      "Concurrency, Availability, Partition tolerance",
      "Consistency, Availability, Performance"
    ],
    "correctOption": 0,
    "explanation": "CAP theorem states that a distributed system can only guarantee two of three."
  },
  {
    "testId": "fs-mock-04",
    "question": "Which operator is used for pattern matching in SQL?",
    "options": ["LIKE", "IN", "BETWEEN", "EXISTS"],
    "correctOption": 0,
    "explanation": "LIKE is used with wildcards for pattern matching."
  },
  {
    "testId": "fs-mock-04",
    "question": "What is a shard in MongoDB?",
    "options": [
      "A subset of data distributed across servers",
      "A backup",
      "An index",
      "A replica"
    ],
    "correctOption": 0,
    "explanation": "Sharding distributes data across multiple machines for scalability."
  },
  {
    "testId": "fs-mock-05",
    "question": "What is REST?",
    "options": [
      "Representational State Transfer, an architectural style for APIs",
      "A programming language",
      "A database",
      "A frontend framework"
    ],
    "correctOption": 0,
    "explanation": "REST is an architectural style for designing networked applications."
  },
  {
    "testId": "fs-mock-05",
    "question": "Which HTTP method is idempotent?",
    "options": ["GET", "POST", "PUT", "DELETE"],
    "correctOption": 0,
    "explanation": "GET, PUT, and DELETE are idempotent; POST is not."
  },
  {
    "testId": "fs-mock-05",
    "question": "What is the purpose of `fetch` API?",
    "options": [
      "To make HTTP requests",
      "To manipulate the DOM",
      "To handle events",
      "To create a WebSocket"
    ],
    "correctOption": 0,
    "explanation": "fetch is a modern API for making network requests."
  },
  {
    "testId": "fs-mock-05",
    "question": "What is CORS?",
    "options": [
      "Cross-Origin Resource Sharing",
      "A security vulnerability",
      "A data format",
      "A JavaScript library"
    ],
    "correctOption": 0,
    "explanation": "CORS allows cross-origin requests."
  },
  {
    "testId": "fs-mock-05",
    "question": "Which status code means 'Created'?",
    "options": ["201", "200", "204", "202"],
    "correctOption": 0,
    "explanation": "201 Created indicates a new resource was created."
  },
  {
    "testId": "fs-mock-05",
    "question": "What is a WebSocket?",
    "options": [
      "A full-duplex communication protocol",
      "A request-response protocol",
      "A RESTful API",
      "A database"
    ],
    "correctOption": 0,
    "explanation": "WebSocket enables persistent, bidirectional communication."
  },
  {
    "testId": "fs-mock-05",
    "question": "What is JWT?",
    "options": [
      "JSON Web Token, used for authentication",
      "A database",
      "A CSS framework",
      "A type of API"
    ],
    "correctOption": 0,
    "explanation": "JWT is a compact token for securely transmitting information."
  },
  {
    "testId": "fs-mock-05",
    "question": "Which header is used to send the JWT token?",
    "options": ["Authorization", "Authentication", "X-Access-Token", "Bearer"],
    "correctOption": 0,
    "explanation": "The Authorization header with 'Bearer <token>' is common."
  },
  {
    "testId": "fs-mock-05",
    "question": "What is the difference between `axios` and `fetch`?",
    "options": [
      "axios automatically transforms JSON; fetch requires manual handling",
      "fetch has more features than axios",
      "axios is deprecated",
      "fetch is only for Node.js"
    ],
    "correctOption": 0,
    "explanation": "axios provides automatic JSON parsing and request/response interceptors."
  },
  {
    "testId": "fs-mock-05",
    "question": "What is rate limiting in APIs?",
    "options": [
      "Limiting the number of requests a client can make",
      "Limiting the size of requests",
      "Limiting the response time",
      "Limiting the number of concurrent connections"
    ],
    "correctOption": 0,
    "explanation": "Rate limiting prevents abuse by controlling request frequency."
  },
  {
    "testId": "fs-mock-05",
    "question": "Which method is used to handle preflight requests in CORS?",
    "options": ["OPTIONS", "HEAD", "GET", "POST"],
    "correctOption": 0,
    "explanation": "Preflight requests use the OPTIONS method."
  },
  {
    "testId": "fs-mock-05",
    "question": "What is the purpose of a query parameter?",
    "options": [
      "To send data in the URL for filtering or sorting",
      "To set the response format",
      "To authenticate the user",
      "To specify headers"
    ],
    "correctOption": 0,
    "explanation": "Query parameters are key-value pairs appended to the URL after '?'."
  },
  {
    "testId": "fs-mock-05",
    "question": "Which of the following is a RESTful API design principle?",
    "options": [
      "Use nouns for resources",
      "Use verbs for resources",
      "Use only GET and POST",
      "Store state on the server"
    ],
    "correctOption": 0,
    "explanation": "REST uses nouns (e.g., /users) and HTTP methods to act on them."
  },
  {
    "testId": "fs-mock-05",
    "question": "What is the purpose of `async`/`await` in API calls?",
    "options": [
      "To write asynchronous code that looks synchronous",
      "To make synchronous code asynchronous",
      "To handle errors",
      "To create promises"
    ],
    "correctOption": 0,
    "explanation": "async/await simplifies promise handling."
  },
  {
    "testId": "fs-mock-05",
    "question": "Which tool is commonly used to test APIs manually?",
    "options": ["Postman", "Selenium", "Jest", "Webpack"],
    "correctOption": 0,
    "explanation": "Postman is a popular API testing tool."
  },
  {
    "testId": "fs-mock-05",
    "question": "What is GraphQL?",
    "options": [
      "A query language for APIs",
      "A database",
      "A frontend library",
      "A testing framework"
    ],
    "correctOption": 0,
    "explanation": "GraphQL allows clients to request specific data."
  },
  {
    "testId": "fs-mock-05",
    "question": "What is the role of an API gateway?",
    "options": [
      "To route requests, handle authentication, and rate limiting",
      "To store data",
      "To render views",
      "To compile code"
    ],
    "correctOption": 0,
    "explanation": "An API gateway acts as a single entry point for APIs."
  },
  {
    "testId": "fs-mock-06",
    "question": "What is the purpose of `useReducer` in React?",
    "options": [
      "To manage complex state logic",
      "To handle side effects",
      "To manage context",
      "To memoize values"
    ],
    "correctOption": 0,
    "explanation": "useReducer is an alternative to useState for complex state transitions."
  },
  {
    "testId": "fs-mock-06",
    "question": "What is the difference between `useMemo` and `useCallback`?",
    "options": [
      "useMemo memoizes a value; useCallback memoizes a function",
      "useCallback memoizes a value; useMemo memoizes a function",
      "Both memoize functions",
      "Both memoize values"
    ],
    "correctOption": 0,
    "explanation": "useMemo returns a memoized value; useCallback returns a memoized function."
  },
  {
    "testId": "fs-mock-06",
    "question": "What is the purpose of `React.memo`?",
    "options": [
      "To memoize a component to prevent unnecessary re-renders",
      "To memoize a value",
      "To memoize a function",
      "To create a new component"
    ],
    "correctOption": 0,
    "explanation": "React.memo is a higher-order component that skips rendering if props haven't changed."
  },
  {
    "testId": "fs-mock-06",
    "question": "What is a custom hook?",
    "options": [
      "A function that starts with 'use' and calls other hooks",
      "A built-in hook",
      "A class component",
      "A component that returns JSX"
    ],
    "correctOption": 0,
    "explanation": "Custom hooks encapsulate reusable stateful logic."
  },
  {
    "testId": "fs-mock-06",
    "question": "What is the virtual DOM and how does it improve performance?",
    "options": [
      "A lightweight copy of the DOM used to calculate differences for efficient updates",
      "The actual DOM with additional features",
      "A memory cache for DOM elements",
      "A rendering engine"
    ],
    "correctOption": 0,
    "explanation": "The virtual DOM enables React to batch updates and minimize costly DOM manipulations."
  },
  {
    "testId": "fs-mock-06",
    "question": "Which lifecycle method in class components is used for side effects?",
    "options": ["componentDidMount", "componentDidUpdate", "componentWillUnmount", "All of the above"],
    "correctOption": 3,
    "explanation": "All these methods can handle side effects at different stages."
  },
  {
    "testId": "fs-mock-06",
    "question": "What is the purpose of `useRef`?",
    "options": [
      "To persist values across renders without causing re-renders",
      "To manage state",
      "To handle side effects",
      "To create context"
    ],
    "correctOption": 0,
    "explanation": "useRef returns a mutable object that persists for the component's lifetime."
  },
  {
    "testId": "fs-mock-06",
    "question": "What is the role of `context` in React?",
    "options": [
      "To provide a way to pass data through the component tree",
      "To manage local state",
      "To handle events",
      "To optimize performance"
    ],
    "correctOption": 0,
    "explanation": "Context allows data to be passed without prop drilling."
  },
  {
    "testId": "fs-mock-06",
    "question": "What is the difference between `Element` and `Component` in React?",
    "options": [
      "Elements are plain objects describing UI; Components are functions/classes that return elements",
      "Components are plain objects; Elements are functions",
      "Both are the same",
      "Elements are only for JSX"
    ],
    "correctOption": 0,
    "explanation": "Elements are immutable, while components are reusable and can have state."
  },
  {
    "testId": "fs-mock-06",
    "question": "What is the purpose of `useLayoutEffect`?",
    "options": [
      "To run code after DOM mutations but before the browser repaint",
      "To run code after the repaint",
      "To run code once",
      "To run code on the server"
    ],
    "correctOption": 0,
    "explanation": "useLayoutEffect is useful for measuring DOM layout and making synchronous updates."
  },
  {
    "testId": "fs-mock-06",
    "question": "Which of the following is a valid rule for hooks?",
    "options": [
      "Hooks must be called at the top level, not inside loops or conditions",
      "Hooks can be called conditionally",
      "Hooks must be called in class components",
      "Hooks are only for state"
    ],
    "correctOption": 0,
    "explanation": "React relies on the order of hooks, so they must be called unconditionally."
  },
  {
    "testId": "fs-mock-06",
    "question": "What is the purpose of `React.lazy` and `Suspense`?",
    "options": [
      "To lazy load components for code splitting",
      "To handle errors",
      "To manage state",
      "To handle side effects"
    ],
    "correctOption": 0,
    "explanation": "React.lazy enables dynamic imports; Suspense handles the loading state."
  },
  {
    "testId": "fs-mock-06",
    "question": "What is the difference between `useState` and `useReducer`?",
    "options": [
      "useReducer is for complex state logic; useState is for simple state",
      "useState is for arrays; useReducer is for objects",
      "Both are for simple state",
      "Both are for complex state"
    ],
    "correctOption": 0,
    "explanation": "useReducer is more suitable when state logic is complex or involves multiple sub-values."
  },
  {
    "testId": "fs-mock-06",
    "question": "What is a higher-order component (HOC)?",
    "options": [
      "A function that takes a component and returns a new component",
      "A component that has higher priority",
      "A component that uses hooks",
      "A component that is exported"
    ],
    "correctOption": 0,
    "explanation": "HOCs are used to reuse component logic."
  },
  {
    "testId": "fs-mock-06",
    "question": "What is the purpose of `useImperativeHandle`?",
    "options": [
      "To customize the instance value exposed to parent components via ref",
      "To manage state",
      "To handle side effects",
      "To memoize values"
    ],
    "correctOption": 0,
    "explanation": "useImperativeHandle is used with forwardRef to control the exposed ref."
  },
  {
    "testId": "fs-mock-07",
    "question": "Which library is commonly used for hashing passwords in Node.js?",
    "options": ["bcrypt", "crypto", "jwt", "argon2"],
    "correctOption": 0,
    "explanation": "bcrypt is widely used for password hashing."
  },
  {
    "testId": "fs-mock-07",
    "question": "What is the purpose of `helmet` middleware in Express?",
    "options": [
      "To set security headers",
      "To parse JSON",
      "To compress responses",
      "To log requests"
    ],
    "correctOption": 0,
    "explanation": "Helmet helps protect against common web vulnerabilities."
  },
  {
    "testId": "fs-mock-07",
    "question": "What is the difference between authentication and authorization?",
    "options": [
      "Authentication verifies identity; authorization determines access",
      "Authorization verifies identity; authentication determines access",
      "Both are the same",
      "Authentication is for users; authorization is for data"
    ],
    "correctOption": 0,
    "explanation": "Authentication confirms who you are; authorization decides what you can do."
  },
  {
    "testId": "fs-mock-07",
    "question": "What is JWT used for?",
    "options": [
      "Securely transmitting information between parties",
      "Encrypting data",
      "Storing sessions",
      "Database queries"
    ],
    "correctOption": 0,
    "explanation": "JWT is a compact, URL-safe token for authentication and data exchange."
  },
  {
    "testId": "fs-mock-07",
    "question": "Which package is used to validate input in Express?",
    "options": ["express-validator", "joi", "yup", "All of the above"],
    "correctOption": 3,
    "explanation": "All are popular validation libraries."
  },
  {
    "testId": "fs-mock-07",
    "question": "What is the purpose of a session?",
    "options": [
      "To store user-specific data across requests",
      "To store global data",
      "To cache data",
      "To log data"
    ],
    "correctOption": 0,
    "explanation": "Sessions allow the server to maintain state for a user."
  },
  {
    "testId": "fs-mock-07",
    "question": "What is the difference between `https` and `http` in Node.js?",
    "options": [
      "https uses SSL/TLS encryption; http does not",
      "http uses encryption; https does not",
      "Both are the same",
      "https is faster"
    ],
    "correctOption": 0,
    "explanation": "https provides secure communication over TLS/SSL."
  },
  {
    "testId": "fs-mock-07",
    "question": "What is the principle of least privilege?",
    "options": [
      "Users should have the minimum level of access necessary",
      "Users should have full access",
      "Access is determined by seniority",
      "Access is unlimited"
    ],
    "correctOption": 0,
    "explanation": "It's a security best practice to restrict permissions."
  },
  {
    "testId": "fs-mock-07",
    "question": "Which of the following is a security vulnerability?",
    "options": ["SQL Injection", "XSS", "CSRF", "All of the above"],
    "correctOption": 3,
    "explanation": "All are common web application vulnerabilities."
  },
  {
    "testId": "fs-mock-07",
    "question": "How do you prevent SQL Injection?",
    "options": [
      "Using parameterized queries",
      "Using string concatenation",
      "Using dynamic SQL",
      "Using stored procedures"
    ],
    "correctOption": 0,
    "explanation": "Parameterized queries separate SQL logic from data to prevent injection."
  },
  {
    "testId": "fs-mock-07",
    "question": "What is the purpose of `cors` middleware?",
    "options": [
      "To enable cross-origin requests",
      "To set security headers",
      "To parse JSON",
      "To log requests"
    ],
    "correctOption": 0,
    "explanation": "CORS controls which origins can access the API."
  },
  {
    "testId": "fs-mock-07",
    "question": "What is the role of `express-session`?",
    "options": [
      "To manage session data on the server",
      "To parse cookies",
      "To authenticate users",
      "To compress responses"
    ],
    "correctOption": 0,
    "explanation": "express-session stores session data server-side."
  },
  {
    "testId": "fs-mock-07",
    "question": "Which environment variable is often used to define the port in Node.js?",
    "options": ["PORT", "NODE_PORT", "SERVER_PORT", "HTTP_PORT"],
    "correctOption": 0,
    "explanation": "PORT is the conventional environment variable for the server port."
  },
  {
    "testId": "fs-mock-07",
    "question": "What is a brute force attack?",
    "options": [
      "Attempting many login combinations to gain access",
      "A DDoS attack",
      "A SQL injection attack",
      "A MITM attack"
    ],
    "correctOption": 0,
    "explanation": "Brute force tries every possible combination."
  },
  {
    "testId": "fs-mock-07",
    "question": "How can you mitigate brute force attacks?",
    "options": [
      "Rate limiting",
      "CAPTCHA",
      "Account lockout",
      "All of the above"
    ],
    "correctOption": 3,
    "explanation": "All measures reduce the risk of brute force."
  },
  {
    "testId": "fs-mock-07",
    "question": "What is XSS (Cross-Site Scripting)?",
    "options": [
      "Injecting malicious scripts into web pages",
      "Stealing cookies",
      "A network attack",
      "A server-side attack"
    ],
    "correctOption": 0,
    "explanation": "XSS occurs when untrusted data is rendered without sanitization."
  },
  {
    "testId": "fs-mock-08",
    "question": "What is the purpose of unit testing?",
    "options": [
      "To test individual components in isolation",
      "To test the entire system",
      "To test user interface",
      "To test database"
    ],
    "correctOption": 0,
    "explanation": "Unit tests focus on the smallest testable units of code."
  },
  {
    "testId": "fs-mock-08",
    "question": "Which testing framework is commonly used in JavaScript?",
    "options": ["Jest", "Mocha", "Jasmine", "All of the above"],
    "correctOption": 3,
    "explanation": "All are popular testing frameworks."
  },
  {
    "testId": "fs-mock-08",
    "question": "What is the purpose of continuous integration (CI)?",
    "options": [
      "To automatically build and test code on every push",
      "To deploy code automatically",
      "To manage databases",
      "To monitor performance"
    ],
    "correctOption": 0,
    "explanation": "CI ensures that code changes are integrated and tested frequently."
  },
  {
    "testId": "fs-mock-08",
    "question": "What is the purpose of Docker in the development lifecycle?",
    "options": [
      "To containerize applications for consistent environments",
      "To version control code",
      "To test APIs",
      "To manage databases"
    ],
    "correctOption": 0,
    "explanation": "Docker provides isolated containers that run the same across environments."
  },
  {
    "testId": "fs-mock-08",
    "question": "Which tool is often used for load testing?",
    "options": ["JMeter", "Postman", "Selenium", "Jest"],
    "correctOption": 0,
    "explanation": "JMeter is a tool for load and performance testing."
  },
  {
    "testId": "fs-mock-08",
    "question": "What is a mock in testing?",
    "options": [
      "A simulated object that mimics the behavior of a real one",
      "A real database",
      "A production environment",
      "A test fixture"
    ],
    "correctOption": 0,
    "explanation": "Mocks are used to isolate the unit under test."
  },
  {
    "testId": "fs-mock-08",
    "question": "What is continuous deployment?",
    "options": [
      "Automatically deploying code to production after passing tests",
      "Deploying manually",
      "Deploying only once",
      "Deploying to staging only"
    ],
    "correctOption": 0,
    "explanation": "CD (Continuous Deployment) automates the release process."
  },
  {
    "testId": "fs-mock-08",
    "question": "Which of the following is a code quality metric?",
    "options": ["Test coverage", "Number of dependencies", "Cyclomatic complexity", "All of the above"],
    "correctOption": 3,
    "explanation": "All are used to assess code quality."
  },
  {
    "testId": "fs-mock-08",
    "question": "What is the purpose of `package.json`?",
    "options": [
      "To list project dependencies and scripts",
      "To define the server configuration",
      "To store environment variables",
      "To hold test results"
    ],
    "correctOption": 0,
    "explanation": "package.json is the manifest file for Node.js projects."
  },
  {
    "testId": "fs-mock-08",
    "question": "What is a smoke test?",
    "options": [
      "A preliminary test to check critical functionality",
      "A full regression test",
      "A performance test",
      "A security test"
    ],
    "correctOption": 0,
    "explanation": "Smoke testing ensures the build is stable enough for further testing."
  },
  {
    "testId": "fs-mock-08",
    "question": "Which command runs tests in many Node.js projects?",
    "options": ["npm test", "npm run test", "npm test", "Both A and C"],
    "correctOption": 3,
    "explanation": "Both 'npm test' and 'npm run test' are used."
  },
  {
    "testId": "fs-mock-08",
    "question": "What is the purpose of linters (e.g., ESLint)?",
    "options": [
      "To enforce code style and find potential bugs",
      "To compile code",
      "To run tests",
      "To deploy applications"
    ],
    "correctOption": 0,
    "explanation": "Linters analyze source code for style and errors."
  },
  {
    "testId": "fs-mock-08",
    "question": "What is the difference between `devDependencies` and `dependencies`?",
    "options": [
      "devDependencies are for development; dependencies are for production",
      "dependencies are for development; devDependencies are for production",
      "Both are for production",
      "Both are for development"
    ],
    "correctOption": 0,
    "explanation": "devDependencies are not needed in production."
  },
  {
    "testId": "fs-mock-09",
    "question": "What is the MERN stack?",
    "options": [
      "MongoDB, Express, React, Node.js",
      "MySQL, Express, React, Node.js",
      "MongoDB, Express, Ruby, Node.js",
      "MongoDB, Ember, React, Node.js"
    ],
    "correctOption": 0,
    "explanation": "MERN is a popular full-stack JavaScript stack."
  },
  {
    "testId": "fs-mock-09",
    "question": "What is the purpose of `useEffect` dependency array?",
    "options": [
      "To specify which values trigger the effect",
      "To specify the initial state",
      "To specify the cleanup function",
      "To specify the return value"
    ],
    "correctOption": 0,
    "explanation": "The effect runs when any dependency changes."
  },
  {
    "testId": "fs-mock-09",
    "question": "Which SQL keyword is used to rename a column in the result?",
    "options": ["AS", "ALIAS", "RENAME", "COLUMN"],
    "correctOption": 0,
    "explanation": "AS creates an alias for the column."
  },
  {
    "testId": "fs-mock-09",
    "question": "What is the difference between `map()` and `forEach()` in JavaScript?",
    "options": [
      "map() returns a new array; forEach() does not",
      "forEach() returns a new array; map() does not",
      "Both return a new array",
      "Neither returns a new array"
    ],
    "correctOption": 0,
    "explanation": "map() creates a new array, forEach() just iterates."
  },
  {
    "testId": "fs-mock-09",
    "question": "Which HTTP status code means 'Internal Server Error'?",
    "options": ["500", "400", "404", "503"],
    "correctOption": 0,
    "explanation": "500 is a server-side error."
  },
  {
    "testId": "fs-mock-09",
    "question": "What is the purpose of `class` in CSS?",
    "options": [
      "To select elements by class name",
      "To select elements by ID",
      "To select elements by tag",
      "To apply styles to the entire page"
    ],
    "correctOption": 0,
    "explanation": "Class selectors (.) target elements with that class."
  },
  {
    "testId": "fs-mock-09",
    "question": "What is the purpose of the `redirect` method in Express?",
    "options": ["res.redirect()", "app.redirect()", "req.redirect()", "next.redirect()"],
    "correctOption": 0,
    "explanation": "res.redirect() sends a 302 response to a different URL."
  },
  {
    "testId": "fs-mock-09",
    "question": "Which of the following is a JavaScript data type?",
    "options": ["string", "number", "boolean", "All of the above"],
    "correctOption": 3,
    "explanation": "All are primitive data types."
  },
  {
    "testId": "fs-mock-09",
    "question": "What is the purpose of `react-router-dom`?",
    "options": [
      "To handle routing in React apps",
      "To manage state",
      "To handle forms",
      "To fetch data"
    ],
    "correctOption": 0,
    "explanation": "It provides routing components like BrowserRouter and Route."
  },
  {
    "testId": "fs-mock-09",
    "question": "What is a stored procedure?",
    "options": [
      "Precompiled SQL code stored in the database",
      "A view",
      "An index",
      "A trigger"
    ],
    "correctOption": 0,
    "explanation": "Stored procedures are reusable SQL code blocks."
  },
  {
    "testId": "fs-mock-09",
    "question": "Which module is used to create a WebSocket server in Node.js?",
    "options": ["ws", "socket.io", "websocket", "All of the above"],
    "correctOption": 3,
    "explanation": "All three libraries can create WebSocket servers."
  },
  {
    "testId": "fs-mock-09",
    "question": "What is the purpose of `process.exit()`?",
    "options": [
      "To terminate the Node.js process",
      "To restart the process",
      "To log an error",
      "To close a file"
    ],
    "correctOption": 0,
    "explanation": "It ends the current process."
  },
  {
    "testId": "fs-mock-09",
    "question": "Which command is used to install a specific package version?",
    "options": ["npm install package@version", "npm install package version", "npm install -v package", "npm install --ver package"],
    "correctOption": 0,
    "explanation": "The format is package@version."
  },
  {
    "testId": "fs-mock-09",
    "question": "What is the difference between `res.send` and `res.json` in Express?",
    "options": [
      "res.json always sets Content-Type: application/json; res.send infers type",
      "res.send always sets JSON; res.json infers",
      "Both are identical",
      "res.json is deprecated"
    ],
    "correctOption": 0,
    "explanation": "res.json forces JSON; res.send uses type inference."
  },
  {
    "testId": "fs-mock-09",
    "question": "Which of the following is a CSS framework?",
    "options": ["Bootstrap", "Tailwind", "Materialize", "All of the above"],
    "correctOption": 3,
    "explanation": "All are CSS frameworks."
  },
  {
    "testId": "fs-mock-10",
    "question": "You have an e-commerce app with a product catalog. Which database is most suitable for storing product attributes that vary?",
    "options": [
      "MongoDB (document store)",
      "PostgreSQL (relational)",
      "Redis (key-value)",
      "Cassandra (column-family)"
    ],
    "correctOption": 0,
    "explanation": "MongoDB's flexible schema is ideal for variable product attributes."
  },
  {
    "testId": "fs-mock-10",
    "question": "Your API is being abused by too many requests. How do you mitigate this?",
    "options": [
      "Implement rate limiting",
      "Increase server resources",
      "Use caching",
      "Disable the API"
    ],
    "correctOption": 0,
    "explanation": "Rate limiting restricts the number of requests per user."
  },
  {
    "testId": "fs-mock-10",
    "question": "A user is not authenticated and tries to access a protected route. What status code should be returned?",
    "options": ["401", "403", "404", "400"],
    "correctOption": 0,
    "explanation": "401 Unauthorized indicates missing or invalid authentication."
  },
  {
    "testId": "fs-mock-10",
    "question": "You need to display a list of users with pagination. Which approach is most efficient?",
    "options": [
      "Fetch all users and paginate client-side",
      "Use LIMIT and OFFSET in SQL query",
      "Fetch all and filter in memory",
      "Use a cache"
    ],
    "correctOption": 1,
    "explanation": "Database-side pagination is more efficient for large datasets."
  },
  {
    "testId": "fs-mock-10",
    "question": "Your React app is re-rendering too often. How can you optimize it?",
    "options": [
      "Use React.memo",
      "Use useMemo and useCallback",
      "Use PureComponent",
      "All of the above"
    ],
    "correctOption": 3,
    "explanation": "All these techniques help prevent unnecessary re-renders."
  },
  {
    "testId": "fs-mock-10",
    "question": "You have a Node.js app that uses a lot of CPU-intensive operations. How can you improve performance?",
    "options": [
      "Use cluster module to fork multiple workers",
      "Use child processes",
      "Use worker threads",
      "All of the above"
    ],
    "correctOption": 3,
    "explanation": "All methods can be used to parallelize CPU-bound tasks."
  },
  {
    "testId": "fs-mock-10",
    "question": "You are designing a REST API for a blog. Which endpoint is appropriate for fetching a single post?",
    "options": ["/posts/:id", "/getPost?id=:id", "/post/:id", "/posts?id=:id"],
    "correctOption": 0,
    "explanation": "RESTful design uses nouns and IDs as path parameters."
  },
  {
    "testId": "fs-mock-10",
    "question": "You need to implement a real-time chat feature. Which technology would you use?",
    "options": ["WebSocket", "HTTP polling", "Server-Sent Events", "All of the above"],
    "correctOption": 3,
    "explanation": "All can be used for real-time, but WebSocket is most common for chat."
  },
  {
    "testId": "fs-mock-10",
    "question": "You have an authentication system using JWTs. What is the risk if the JWT is stolen?",
    "options": [
      "An attacker can impersonate the user",
      "The token can be used to reset passwords",
      "The token can be used to delete data",
      "The token can be used to change user roles"
    ],
    "correctOption": 0,
    "explanation": "A stolen JWT allows the attacker to act as the user."
  },
  {
    "testId": "fs-mock-10",
    "question": "How would you securely store passwords?",
    "options": [
      "Hash with bcrypt and a salt",
      "Store in plain text",
      "Encrypt with AES",
      "Use base64 encoding"
    ],
    "correctOption": 0,
    "explanation": "bcrypt with salt is a standard secure practice."
  },
  {
    "testId": "fs-mock-10",
    "question": "You have a large file to send to the client. How can you improve the response time?",
    "options": [
      "Use streaming",
      "Send the whole file at once",
      "Compress the file",
      "Use a CDN"
    ],
    "correctOption": 0,
    "explanation": "Streaming sends data in chunks, reducing memory usage and perceived delay."
  },
  {
    "testId": "fs-mock-10",
    "question": "You want to add caching to your API. Which type of caching is most appropriate?",
    "options": [
      "Redis caching for frequently accessed data",
      "Browser caching for static assets",
      "Database caching",
      "All of the above"
    ],
    "correctOption": 3,
    "explanation": "Different caching layers are used based on the data type."
  },
  {
    "testId": "fs-mock-10",
    "question": "You are deploying a Node.js app to production. What environment variable should you set?",
    "options": ["NODE_ENV=production", "NODE_ENV=prod", "NODE_ENV=development", "NODE_ENV=prod"],
    "correctOption": 0,
    "explanation": "NODE_ENV=production is standard for production."
  },
  {
    "testId": "fs-mock-10",
    "question": "You want to implement a search feature in your app. Which database is best for full-text search?",
    "options": ["Elasticsearch", "MongoDB", "PostgreSQL", "Redis"],
    "correctOption": 0,
    "explanation": "Elasticsearch is specialized for full-text search."
  },
  {
    "testId": "fs-mock-10",
    "question": "You have a React component that accepts many props. How can you reduce re-renders?",
    "options": [
      "Use React.memo and pass only necessary props",
      "Use useMemo",
      "Use useCallback",
      "All of the above"
    ],
    "correctOption": 3,
    "explanation": "All techniques help optimize component performance."
  },
  {
    "testId": "fs-mock-10",
    "question": "You need to perform a complex join of three tables in SQL. Which join should you use?",
    "options": [
      "Multiple INNER JOINs",
      "LEFT JOINs",
      "FULL JOINs",
      "CROSS JOIN"
    ],
    "correctOption": 0,
    "explanation": "Multiple INNER JOINs are standard for combining tables."
  },
  {
    "testId": "fs-mock-11",
    "question": "Describe the design of a full-stack application for a todo app with user authentication. Which stack would you choose?",
    "options": [
      "React, Node.js, Express, MongoDB (MERN)",
      "React, Django, PostgreSQL",
      "Vue, Rails, MySQL",
      "All are valid"
    ],
    "correctOption": 0,
    "explanation": "MERN is a common full-stack JavaScript choice, but others are also valid."
  },
  {
    "testId": "fs-mock-11",
    "question": "In the above todo app, how would you structure the database?",
    "options": [
      "Users collection with todos embedded",
      "Users and todos separate with foreign key",
      "Todos collection with user reference",
      "Any of the above depending on needs"
    ],
    "correctOption": 3,
    "explanation": "Both normalized and embedded designs are possible; the choice depends on access patterns."
  },
  {
    "testId": "fs-mock-11",
    "question": "What is the role of JWT in the authentication flow?",
    "options": [
      "To generate a token upon login and send it with subsequent requests",
      "To store the user's password",
      "To encrypt the entire request",
      "To manage sessions"
    ],
    "correctOption": 0,
    "explanation": "JWT is used for stateless authentication."
  },
  {
    "testId": "fs-mock-11",
    "question": "You have a React app that consumes a REST API. How do you manage state for authenticated user data?",
    "options": [
      "Use Context API or Redux",
      "Use local state in the component",
      "Use sessionStorage",
      "Use cookies"
    ],
    "correctOption": 0,
    "explanation": "Context or Redux is used for global state like user data."
  },
  {
    "testId": "fs-mock-11",
    "question": "How do you handle form submission in React with validation?",
    "options": [
      "Use controlled components and validate on submit",
      "Use uncontrolled components",
      "Use form libraries like Formik",
      "Both A and C"
    ],
    "correctOption": 3,
    "explanation": "Controlled components or libraries like Formik are standard."
  },
  {
    "testId": "fs-mock-11",
    "question": "You want to add a new todo. What HTTP method and endpoint would you use?",
    "options": ["POST /todos", "PUT /todos", "GET /todos", "DELETE /todos"],
    "correctOption": 0,
    "explanation": "POST is used to create a new resource."
  },
  {
    "testId": "fs-mock-11",
    "question": "What status code should the server return on successful todo creation?",
    "options": ["201", "200", "204", "201"],
    "correctOption": 0,
    "explanation": "201 Created is appropriate for successful creation."
  },
  {
    "testId": "fs-mock-11",
    "question": "How would you handle errors when the user tries to add a todo with missing fields?",
    "options": [
      "Return 400 Bad Request with error messages",
      "Ignore and proceed",
      "Return 500 Internal Server Error",
      "Return 404 Not Found"
    ],
    "correctOption": 0,
    "explanation": "400 indicates a client-side validation error."
  },
  {
    "testId": "fs-mock-11",
    "question": "What is the role of `useEffect` for fetching todos after a user logs in?",
    "options": [
      "To trigger the fetch when the user state changes",
      "To fetch data on every render",
      "To fetch data only on mount",
      "To handle side effects only on unmount"
    ],
    "correctOption": 0,
    "explanation": "useEffect with dependency on user triggers fetch on login."
  },
  {
    "testId": "fs-mock-11",
    "question": "How do you implement delete todo functionality?",
    "options": [
      "DELETE /todos/:id",
      "POST /todos/:id/delete",
      "PUT /todos/:id",
      "PATCH /todos/:id"
    ],
    "correctOption": 0,
    "explanation": "DELETE is used to remove a resource by ID."
  },
  {
    "testId": "fs-mock-11",
    "question": "What security measures would you take for this todo app?",
    "options": [
      "Use HTTPS, helmet middleware, input validation, rate limiting",
      "Ignore security in development",
      "Use HTTP only",
      "Allow all CORS"
    ],
    "correctOption": 0,
    "explanation": "Security best practices include HTTPS, helmet, validation, and rate limiting."
  },
  {
    "testId": "fs-mock-11",
    "question": "How would you test the API endpoints for the todo app?",
    "options": [
      "Use Jest and Supertest",
      "Use Postman manually",
      "Use Selenium",
      "Use Cypress"
    ],
    "correctOption": 0,
    "explanation": "Supertest with Jest is common for testing Express APIs."
  },
  {
    "testId": "fs-mock-11",
    "question": "What is the role of a database index in the todo app?",
    "options": [
      "To speed up queries on user_id or todo_id",
      "To enforce uniqueness",
      "To enforce foreign key",
      "All of the above"
    ],
    "correctOption": 0,
    "explanation": "Indexes improve query performance."
  },
  {
    "testId": "fs-mock-11",
    "question": "You want to deploy the todo app on a cloud platform. Which platform would you use?",
    "options": [
      "Heroku, AWS, Azure, or any cloud",
      "Only AWS",
      "Only Heroku",
      "Only localhost"
    ],
    "correctOption": 0,
    "explanation": "Multiple cloud platforms support Node.js deployment."
  },
  {
    "testId": "fs-mock-11",
    "question": "What environment variables should you configure for the deployment?",
    "options": [
      "Database connection string, JWT secret, port",
      "Only the port",
      "Only the secret",
      "No variables needed"
    ],
    "correctOption": 0,
    "explanation": "Sensitive configs like DB_URI and JWT_SECRET must be set."
  },
  {
    "testId": "fs-mock-11",
    "question": "How do you ensure the app is always running in production?",
    "options": [
      "Use a process manager like PM2",
      "Use node directly",
      "Use nodemon",
      "Use forever"
    ],
    "correctOption": 0,
    "explanation": "PM2 is a production process manager that restarts on failure."
  },
  {
    "testId": "fs-mock-11",
    "question": "What would you use for logging in production?",
    "options": [
      "Winston or Pino",
      "console.log",
      "No logging",
      "Debug module"
    ],
    "correctOption": 0,
    "explanation": "Structured logging libraries are used in production."
  },
  {
    "testId": "fs-mock-11",
    "question": "How can you improve the performance of the todo API for many concurrent users?",
    "options": [
      "Add a cache layer (Redis)",
      "Use database read replicas",
      "Optimize queries with indexes",
      "All of the above"
    ],
    "correctOption": 3,
    "explanation": "Caching, replicas, and indexes all improve scalability."
  },
  {
    "testId": "fs-mock-11",
    "question": "You notice that the todo app is slow during peak hours. What is the first step to diagnose?",
    "options": [
      "Monitor CPU and memory usage",
      "Increase server size",
      "Add more servers",
      "Rewrite the app"
    ],
    "correctOption": 0,
    "explanation": "Monitoring helps identify bottlenecks before scaling."
  },
  {
    "testId": "fs-mock-11",
    "question": "What is the benefit of using Docker for the todo app?",
    "options": [
      "Consistent environment across development, testing, and production",
      "Faster performance",
      "Easier debugging",
      "Automatic scaling"
    ],
    "correctOption": 0,
    "explanation": "Docker provides containerization for consistency."
  },
  {
    "testId": "fs-mock-11",
    "question": "You have to update the todo app with a new feature. What is the recommended deployment strategy?",
    "options": [
      "Blue-green deployment or canary deployment",
      "Directly update production",
      "Take down the app, update, restart",
      "No strategy needed"
    ],
    "correctOption": 0,
    "explanation": "Blue-green or canary reduce downtime and risk."
  },
  {
    "testId": "fs-mock-11",
    "question": "How would you handle database schema changes during deployment?",
    "options": [
      "Use database migrations (e.g., with Sequelize or Mongoose migration tools)",
      "Delete the database and recreate",
      "Make changes manually",
      "Ignore schema changes"
    ],
    "correctOption": 0,
    "explanation": "Migrations allow version-controlled schema updates."
  }
];

const filepath = path.join(__dirname, '../src/data/questions.js');
let content = fs.readFileSync(filepath, 'utf8');

content = content.trim();
if (content.endsWith('];')) {
  content = content.slice(0, -2);
} else if (content.endsWith(']')) {
  content = content.slice(0, -1);
}

content += ',\n' + newQuestions.map(q => JSON.stringify(q, null, 2)).join(',\n') + '\n];\n';

fs.writeFileSync(filepath, content, 'utf8');
console.log('Added ' + newQuestions.length + ' fs questions to questions.js');
