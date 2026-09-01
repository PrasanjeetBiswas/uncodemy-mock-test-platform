const fs = require('fs');

const mernMockTests = [
  {
    "id": "mern-mock-01",
    "courseId": "mern",
    "seriesId": "mern-full-mock",
    "title": "MERN Mock Test - MongoDB & Database Concepts",
    "durationMinutes": 30,
    "totalQuestions": 30,
    "passingPercentage": 40
  },
  {
    "id": "mern-mock-02",
    "courseId": "mern",
    "seriesId": "mern-full-mock",
    "title": "MERN Mock Test - Express.js & Backend API Development",
    "durationMinutes": 30,
    "totalQuestions": 30,
    "passingPercentage": 40
  },
  {
    "id": "mern-mock-03",
    "courseId": "mern",
    "seriesId": "mern-full-mock",
    "title": "MERN Mock Test - React Fundamentals & Components",
    "durationMinutes": 30,
    "totalQuestions": 30,
    "passingPercentage": 40
  },
  {
    "id": "mern-mock-04",
    "courseId": "mern",
    "seriesId": "mern-full-mock",
    "title": "MERN Mock Test - Node.js Core & Server-Side Development",
    "durationMinutes": 30,
    "totalQuestions": 30,
    "passingPercentage": 40
  },
  {
    "id": "mern-mock-05",
    "courseId": "mern",
    "seriesId": "mern-full-mock",
    "title": "MERN Mock Test - Integration & Full-Stack Development",
    "durationMinutes": 35,
    "totalQuestions": 35,
    "passingPercentage": 45
  },
  {
    "id": "mern-mock-06",
    "courseId": "mern",
    "seriesId": "mern-full-mock",
    "title": "MERN Mock Test - Authentication, Security & Middleware",
    "durationMinutes": 35,
    "totalQuestions": 35,
    "passingPercentage": 45
  },
  {
    "id": "mern-mock-07",
    "courseId": "mern",
    "seriesId": "mern-full-mock",
    "title": "MERN Mock Test - React Advanced: State, Hooks & Routing",
    "durationMinutes": 35,
    "totalQuestions": 35,
    "passingPercentage": 45
  },
  {
    "id": "mern-mock-08",
    "courseId": "mern",
    "seriesId": "mern-full-mock",
    "title": "MERN Mock Test - API Testing, Error Handling & Validation",
    "durationMinutes": 35,
    "totalQuestions": 35,
    "passingPercentage": 45
  },
  {
    "id": "mern-mock-09",
    "courseId": "mern",
    "seriesId": "mern-full-mock",
    "title": "MERN Mock Test - Deployment, DevOps & Performance",
    "durationMinutes": 35,
    "totalQuestions": 35,
    "passingPercentage": 45
  },
  {
    "id": "mern-mock-10",
    "courseId": "mern",
    "seriesId": "mern-full-mock",
    "title": "MERN Mock Test - Comprehensive Capstone",
    "durationMinutes": 40,
    "totalQuestions": 40,
    "passingPercentage": 50
  }
];

let testsFile = fs.readFileSync('src/data/tests.js', 'utf8');
const testsEndIndex = testsFile.lastIndexOf('];');

if (testsEndIndex !== -1 && !testsFile.includes('"mern-mock-01"')) {
  const injectionString = ',\n' + mernMockTests.map(t => JSON.stringify(t, null, 2)).join(',\n') + '\n];';
  testsFile = testsFile.substring(0, testsEndIndex) + injectionString;
  fs.writeFileSync('src/data/tests.js', testsFile);
  console.log('Injected MERN Mock tests into tests.js');
}

const rawQuestions = [
  {
    "testId": "mern-mock-01",
    "question": "What is MongoDB?",
    "options": [
      "A NoSQL document-oriented database",
      "A relational database",
      "A graph database",
      "A key-value store"
    ],
    "correctOption": 0,
    "explanation": "MongoDB is a NoSQL document-oriented database that stores data in flexible, JSON-like documents."
  },
  {
    "testId": "mern-mock-01",
    "question": "What is a collection in MongoDB?",
    "options": [
      "A group of documents, analogous to a table in SQL",
      "A single document",
      "A database",
      "An index"
    ],
    "correctOption": 0,
    "explanation": "A collection is a grouping of MongoDB documents, similar to a table in a relational database."
  },
  {
    "testId": "mern-mock-01",
    "question": "Which command is used to insert a single document in MongoDB?",
    "options": ["insertOne()", "insert()", "add()", "save()"],
    "correctOption": 0,
    "explanation": "The `insertOne()` method is used to insert a single document into a collection."
  },
  {
    "testId": "mern-mock-01",
    "question": "Which method is used to find all documents in a collection?",
    "options": ["find()", "findAll()", "getAll()", "list()"],
    "correctOption": 0,
    "explanation": "The `find()` method returns a cursor to all documents in a collection that match the query."
  },
  {
    "testId": "mern-mock-01",
    "question": "What does BSON stand for?",
    "options": ["Binary JSON", "Binary Serialized Object Notation", "Basic Structured Object Notation", "Byte Sequence Object Notation"],
    "correctOption": 0,
    "explanation": "BSON stands for Binary JSON, which is a binary-encoded serialization of JSON-like documents used by MongoDB."
  },
  {
    "testId": "mern-mock-01",
    "question": "What is an ObjectId in MongoDB?",
    "options": [
      "A 12-byte unique identifier automatically generated for the `_id` field",
      "A 24-byte identifier",
      "A string identifier",
      "A numeric identifier"
    ],
    "correctOption": 0,
    "explanation": "ObjectId is a 12-byte BSON type that is the default value for the `_id` field."
  },
  {
    "testId": "mern-mock-01",
    "question": "Which operator is used for equality in MongoDB?",
    "options": ["$eq", "$eq", "=", "=="],
    "correctOption": 0,
    "explanation": "The `$eq` operator is used for equality in MongoDB queries."
  },
  {
    "testId": "mern-mock-01",
    "question": "Which operator is used to check if a value is greater than a specified value?",
    "options": ["$gt", "$gte", "$lt", "$lte"],
    "correctOption": 0,
    "explanation": "`$gt` (greater than) matches documents where the field value is greater than the specified value."
  },
  {
    "testId": "mern-mock-01",
    "question": "What is the aggregation pipeline in MongoDB?",
    "options": [
      "A framework for data aggregation and transformation through multiple stages",
      "A query language",
      "An indexing mechanism",
      "A replication method"
    ],
    "correctOption": 0,
    "explanation": "The aggregation pipeline is a framework where documents pass through multiple stages like `$match`, `$group`, `$project`."
  },
  {
    "testId": "mern-mock-01",
    "question": "Which stage is used to filter documents in the aggregation pipeline?",
    "options": ["$match", "$filter", "$where", "$find"],
    "correctOption": 0,
    "explanation": "The `$match` stage filters documents, similar to the `find()` method."
  },
  {
    "testId": "mern-mock-01",
    "question": "Which stage is used to group documents in the aggregation pipeline?",
    "options": ["$group", "$sort", "$project", "$match"],
    "correctOption": 0,
    "explanation": "The `$group` stage groups documents by a specified key and performs aggregations like `$sum`, `$avg`."
  },
  {
    "testId": "mern-mock-01",
    "question": "What is the purpose of indexes in MongoDB?",
    "options": [
      "To improve query performance",
      "To enforce uniqueness",
      "To reduce storage space",
      "Both A and B"
    ],
    "correctOption": 3,
    "explanation": "Indexes improve query performance and can enforce uniqueness (unique index)."
  },
  {
    "testId": "mern-mock-01",
    "question": "Which command is used to create an index in MongoDB?",
    "options": ["createIndex()", "addIndex()", "newIndex()", "index()"],
    "correctOption": 0,
    "explanation": "The `createIndex()` method is used to create an index on a collection."
  },
  {
    "testId": "mern-mock-01",
    "question": "What is a replica set in MongoDB?",
    "options": [
      "A group of MongoDB servers that replicate data for high availability",
      "A backup system",
      "A clustering system for sharding",
      "A single MongoDB server"
    ],
    "correctOption": 0,
    "explanation": "A replica set provides redundancy and high availability by maintaining the same data across multiple nodes."
  },
  {
    "testId": "mern-mock-01",
    "question": "What is sharding in MongoDB?",
    "options": [
      "Distributing data across multiple servers for horizontal scaling",
      "Replicating data for high availability",
      "Indexing data for faster queries",
      "Compressing data"
    ],
    "correctOption": 0,
    "explanation": "Sharding distributes data across multiple servers to handle large datasets and high throughput."
  },
  {
    "testId": "mern-mock-01",
    "question": "How do you update multiple documents in MongoDB?",
    "options": ["updateMany()", "update()", "updateAll()", "modifyMany()"],
    "correctOption": 0,
    "explanation": "The `updateMany()` method updates all documents that match the filter criteria."
  },
  {
    "testId": "mern-mock-01",
    "question": "What is Mongoose in the MERN stack?",
    "options": [
      "An ODM (Object Data Modeling) library for MongoDB and Node.js",
      "A frontend framework",
      "A testing library",
      "A deployment tool"
    ],
    "correctOption": 0,
    "explanation": "Mongoose is an ODM library that provides a schema-based solution for modeling MongoDB data in Node.js."
  },
  {
    "testId": "mern-mock-01",
    "question": "What is a schema in Mongoose?",
    "options": [
      "A definition of the structure, data types, and validation for documents",
      "A collection in MongoDB",
      "A database connection",
      "A query method"
    ],
    "correctOption": 0,
    "explanation": "A Mongoose schema defines the fields, data types, validation, and methods for documents in a collection."
  },
  {
    "testId": "mern-mock-01",
    "question": "What is the purpose of `populate()` in Mongoose?",
    "options": [
      "To replace references with the actual documents",
      "To populate an array",
      "To insert data",
      "To delete data"
    ],
    "correctOption": 0,
    "explanation": "`populate()` automatically replaces document references with the referenced documents."
  },
  {
    "testId": "mern-mock-01",
    "question": "Which method is used to connect to MongoDB using Mongoose?",
    "options": ["mongoose.connect()", "mongoose.connection()", "mongoose.start()", "mongoose.open()"],
    "correctOption": 0,
    "explanation": "`mongoose.connect()` is used to establish a connection to the MongoDB database."
  },
  {
    "testId": "mern-mock-02",
    "question": "What is Express.js?",
    "options": [
      "A minimal and flexible Node.js web application framework",
      "A frontend library",
      "A database",
      "A testing framework"
    ],
    "correctOption": 0,
    "explanation": "Express.js is a lightweight Node.js framework for building web applications and RESTful APIs."
  },
  {
    "testId": "mern-mock-02",
    "question": "How do you create an Express application?",
    "options": ["const app = express()", "const app = new Express()", "const app = Express.create()", "const app = require('express')"],
    "correctOption": 0,
    "explanation": "After requiring express, you call it as a function to create an app instance."
  },
  {
    "testId": "mern-mock-02",
    "question": "Which method is used to handle GET requests in Express?",
    "options": ["app.get()", "app.use()", "app.post()", "app.route()"],
    "correctOption": 0,
    "explanation": "`app.get()` is used to define a route handler for HTTP GET requests."
  },
  {
    "testId": "mern-mock-02",
    "question": "How do you access query string parameters in Express?",
    "options": ["req.query", "req.params", "req.body", "req.param"],
    "correctOption": 0,
    "explanation": "`req.query` contains the parsed query string parameters."
  },
  {
    "testId": "mern-mock-02",
    "question": "How do you access route parameters in Express (e.g., /users/:id)?",
    "options": ["req.params", "req.query", "req.body", "req.param"],
    "correctOption": 0,
    "explanation": "`req.params` is an object containing the route parameters (e.g., id)."
  },
  {
    "testId": "mern-mock-02",
    "question": "Which Express method is used to serve static files?",
    "options": ["express.static()", "app.static()", "app.serve()", "express.serveStatic()"],
    "correctOption": 0,
    "explanation": "`express.static` is a built-in middleware to serve static assets like images, CSS, and JavaScript."
  },
  {
    "testId": "mern-mock-02",
    "question": "What is the purpose of middleware in Express?",
    "options": [
      "To execute functions that have access to the request and response objects",
      "To only handle errors",
      "To render views",
      "To start the server"
    ],
    "correctOption": 0,
    "explanation": "Middleware functions can execute any code, modify request/response, and end the request-response cycle."
  },
  {
    "testId": "mern-mock-02",
    "question": "How do you add middleware that runs for every request?",
    "options": ["app.use(middleware)", "app.get(middleware)", "app.all(middleware)", "app.use('/', middleware)"],
    "correctOption": 0,
    "explanation": "`app.use()` without a specific path runs the middleware for every request."
  },
  {
    "testId": "mern-mock-02",
    "question": "What does `next()` do in Express middleware?",
    "options": [
      "Passes control to the next middleware function",
      "Ends the request cycle",
      "Sends a response",
      "Throws an error"
    ],
    "correctOption": 0,
    "explanation": "Calling `next()` invokes the next middleware function in the stack."
  },
  {
    "testId": "mern-mock-02",
    "question": "How do you handle 404 errors in Express?",
    "options": [
      "Add a middleware at the end that sends a 404 response",
      "Use app.error()",
      "Use try/catch",
      "Use app.notFound()"
    ],
    "correctOption": 0,
    "explanation": "A catch-all middleware for unmatched routes is used to return 404."
  },
  {
    "testId": "mern-mock-02",
    "question": "Which package is commonly used for logging in Express?",
    "options": ["morgan", "winston", "express-logger", "All of the above"],
    "correctOption": 3,
    "explanation": "Morgan is a popular HTTP request logger middleware; Winston is a general logging library."
  },
  {
    "testId": "mern-mock-02",
    "question": "What is `res.send()` used for?",
    "options": [
      "To send a response of various types (string, object, buffer)",
      "To send only JSON",
      "To send HTML only",
      "To end the request"
    ],
    "correctOption": 0,
    "explanation": "`res.send()` can handle many types of responses; it automatically sets `Content-Type`."
  },
  {
    "testId": "mern-mock-02",
    "question": "What is the difference between `res.send()` and `res.json()`?",
    "options": [
      "res.json() always sends JSON; res.send() infers type",
      "res.send() sends only JSON; res.json() sends any",
      "Both are identical",
      "res.json() is deprecated"
    ],
    "correctOption": 0,
    "explanation": "`res.json()` explicitly converts the argument to JSON; `res.send()` uses type inference."
  },
  {
    "testId": "mern-mock-02",
    "question": "How do you set HTTP status codes in Express?",
    "options": ["res.status(200)", "res.statusCode = 200", "res.sendStatus(200)", "All of the above"],
    "correctOption": 3,
    "explanation": "You can use `res.status(200).send(...)`, `res.statusCode = 200`, or `res.sendStatus(200)`."
  },
  {
    "testId": "mern-mock-02",
    "question": "Which method is used to parse JSON request bodies in Express?",
    "options": ["express.json()", "bodyParser.json()", "Both A and B", "express.bodyParser()"],
    "correctOption": 2,
    "explanation": "Both `express.json()` (built-in) and `body-parser` (older) can parse JSON; newer Express includes it."
  },
  {
    "testId": "mern-mock-02",
    "question": "What is the purpose of `app.use(cors())`?",
    "options": [
      "To enable Cross-Origin Resource Sharing",
      "To compress responses",
      "To parse cookies",
      "To log requests"
    ],
    "correctOption": 0,
    "explanation": "The `cors` middleware enables CORS for cross-origin requests."
  },
  {
    "testId": "mern-mock-02",
    "question": "What is the role of `app.listen()`?",
    "options": [
      "To start the server and listen for incoming connections",
      "To stop the server",
      "To set up middleware",
      "To handle errors"
    ],
    "correctOption": 0,
    "explanation": "`app.listen()` binds and listens for connections on the specified host and port."
  },
  {
    "testId": "mern-mock-03",
    "question": "What is React?",
    "options": [
      "A JavaScript library for building user interfaces",
      "A full-stack framework",
      "A database management system",
      "A CSS preprocessor"
    ],
    "correctOption": 0,
    "explanation": "React is a declarative, component-based JavaScript library for building user interfaces."
  },
  {
    "testId": "mern-mock-03",
    "question": "What is JSX in React?",
    "options": [
      "A syntax extension that allows writing HTML-like code in JavaScript",
      "A JavaScript framework",
      "A CSS library",
      "A testing tool"
    ],
    "correctOption": 0,
    "explanation": "JSX is a syntax extension that enables you to write HTML-like code in JavaScript."
  },
  {
    "testId": "mern-mock-03",
    "question": "How do you pass data from a parent component to a child component?",
    "options": ["Via props", "Via state", "Via context", "Via refs"],
    "correctOption": 0,
    "explanation": "Props (short for properties) are the primary way to pass data down from parent to child components."
  },
  {
    "testId": "mern-mock-03",
    "question": "What is the purpose of the `key` prop in React lists?",
    "options": [
      "To help React identify which items have changed, are added, or are removed",
      "To style list items",
      "To set the list order",
      "To bind event handlers"
    ],
    "correctOption": 0,
    "explanation": "Keys give elements a stable identity, helping React optimize re-rendering when the list changes."
  },
  {
    "testId": "mern-mock-03",
    "question": "What is a React component?",
    "options": [
      "A reusable piece of UI that can have its own state and props",
      "A function that returns HTML",
      "A class that extends React.Component",
      "All of the above"
    ],
    "correctOption": 3,
    "explanation": "Components are the building blocks of React UIs, and can be functional or class-based."
  },
  {
    "testId": "mern-mock-03",
    "question": "What does `React.Fragment` do?",
    "options": [
      "It groups a list of children without adding extra DOM nodes",
      "It creates a new DOM element",
      "It applies styles to children",
      "It handles routing"
    ],
    "correctOption": 0,
    "explanation": "React.Fragment allows you to return multiple elements without wrapping them in an additional container element."
  },
  {
    "testId": "mern-mock-03",
    "question": "How do you define props in a functional component?",
    "options": [
      "They are passed as an argument to the component function",
      "They are defined inside the component",
      "They are set using useProps",
      "They are declared globally"
    ],
    "correctOption": 0,
    "explanation": "Props are received as the first argument in the component function."
  },
  {
    "testId": "mern-mock-03",
    "question": "What is the virtual DOM in React?",
    "options": [
      "A lightweight representation of the actual DOM that React uses to optimize updates",
      "The real DOM",
      "A React component",
      "A state management library"
    ],
    "correctOption": 0,
    "explanation": "React's virtual DOM is a copy of the actual DOM that allows efficient updates by calculating differences (diffing)."
  },
  {
    "testId": "mern-mock-03",
    "question": "How do you handle events in React?",
    "options": [
      "Using camelCase event names and passing functions as event handlers",
      "Using lowercase event names",
      "Using inline HTML attributes",
      "Using jQuery"
    ],
    "correctOption": 0,
    "explanation": "React uses camelCase event names (e.g., onClick) and expects a function as the handler."
  },
  {
    "testId": "mern-mock-03",
    "question": "What is the purpose of `React.createElement`?",
    "options": [
      "To create a React element object representing a DOM node or component",
      "To create a new component",
      "To render a component to the DOM",
      "To set up the React environment"
    ],
    "correctOption": 0,
    "explanation": "`React.createElement` creates an object describing the UI element, used behind the scenes in JSX."
  },
  {
    "testId": "mern-mock-03",
    "question": "What is the difference between a controlled and uncontrolled component?",
    "options": [
      "Controlled components have their value controlled by React state; uncontrolled components keep their own internal state",
      "Uncontrolled components are controlled by React; controlled ones are not",
      "Both are controlled by React",
      "Both keep their own state"
    ],
    "correctOption": 0,
    "explanation": "In controlled components, the input value is driven by React state; in uncontrolled components, the DOM itself manages the state."
  },
  {
    "testId": "mern-mock-03",
    "question": "What is the role of `ReactDOM.render()` in React 17 and earlier?",
    "options": [
      "To render a React component into the DOM",
      "To render a component on the server",
      "To create a new React application",
      "To update the state"
    ],
    "correctOption": 0,
    "explanation": "`ReactDOM.render()` is used to mount a React component into a DOM container."
  },
  {
    "testId": "mern-mock-04",
    "question": "What is Node.js?",
    "options": [
      "A JavaScript runtime built on Chrome's V8 engine",
      "A frontend framework",
      "A database",
      "A testing library"
    ],
    "correctOption": 0,
    "explanation": "Node.js is a JavaScript runtime environment that executes JavaScript code outside a web browser."
  },
  {
    "testId": "mern-mock-04",
    "question": "Which engine does Node.js use to execute JavaScript?",
    "options": ["V8", "SpiderMonkey", "Chakra", "JavaScriptCore"],
    "correctOption": 0,
    "explanation": "Node.js uses the V8 JavaScript engine, originally developed by Google for Chrome."
  },
  {
    "testId": "mern-mock-04",
    "question": "Which of the following is a global object in Node.js?",
    "options": ["window", "document", "global", "self"],
    "correctOption": 2,
    "explanation": "In Node.js, the global object is `global`, unlike browsers where it is `window`."
  },
  {
    "testId": "mern-mock-04",
    "question": "How do you include a module in Node.js?",
    "options": ["import", "include", "require", "load"],
    "correctOption": 2,
    "explanation": "Node.js uses the `require()` function to include modules (CommonJS)."
  },
  {
    "testId": "mern-mock-04",
    "question": "What is the purpose of `module.exports`?",
    "options": [
      "To export functions and objects from a module for use in other files",
      "To import external modules",
      "To define a new module",
      "To run a module"
    ],
    "correctOption": 0,
    "explanation": "`module.exports` is used to define what a module exports and makes available to other files."
  },
  {
    "testId": "mern-mock-04",
    "question": "Which core module is used for file system operations in Node.js?",
    "options": ["fs", "path", "os", "http"],
    "correctOption": 0,
    "explanation": "The `fs` (file system) module provides methods for interacting with the file system."
  },
  {
    "testId": "mern-mock-04",
    "question": "Which method is used to read a file asynchronously in Node.js?",
    "options": ["fs.readFile()", "fs.readFileSync()", "fs.read()", "fs.readAsync()"],
    "correctOption": 0,
    "explanation": "`fs.readFile()` reads a file asynchronously; `fs.readFileSync()` is synchronous."
  },
  {
    "testId": "mern-mock-04",
    "question": "What is the output of `console.log(process.argv)`?",
    "options": [
      "Prints an array of command-line arguments",
      "Prints the current process ID",
      "Prints the environment variables",
      "Prints the platform"
    ],
    "correctOption": 0,
    "explanation": "`process.argv` returns an array containing the command-line arguments passed to the Node.js process."
  },
  {
    "testId": "mern-mock-04",
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
    "testId": "mern-mock-04",
    "question": "Which module is used to create a server in Node.js?",
    "options": ["http", "fs", "path", "os"],
    "correctOption": 0,
    "explanation": "The http module is used to build HTTP servers."
  },
  {
    "testId": "mern-mock-04",
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
    "testId": "mern-mock-04",
    "question": "What is a Promise in Node.js?",
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
    "testId": "mern-mock-04",
    "question": "Which command is used to initialize a new Node.js project?",
    "options": ["npm init", "npm start", "npm install", "node init"],
    "correctOption": 0,
    "explanation": "npm init creates a package.json file."
  },
  {
    "testId": "mern-mock-04",
    "question": "Which package is used for environment variables in Node.js?",
    "options": ["dotenv", "env", "config", "process.env"],
    "correctOption": 0,
    "explanation": "dotenv is used to load environment variables from a .env file."
  },
  {
    "testId": "mern-mock-05",
    "question": "What is the MERN stack?",
    "options": [
      "MongoDB, Express.js, React, Node.js",
      "MySQL, Express.js, React, Node.js",
      "MongoDB, Express.js, Ruby, Node.js",
      "MongoDB, Ember, React, Node.js"
    ],
    "correctOption": 0,
    "explanation": "MERN stands for MongoDB, Express.js, React, and Node.js — a full-stack JavaScript development stack."
  },
  {
    "testId": "mern-mock-05",
    "question": "How do you connect React to a Node.js backend?",
    "options": [
      "Using HTTP requests with fetch or axios",
      "Using direct database queries from React",
      "Using server-side rendering only",
      "Using WebSockets only"
    ],
    "correctOption": 0,
    "explanation": "React communicates with the backend through HTTP requests (fetch, axios) to interact with REST APIs."
  },
  {
    "testId": "mern-mock-05",
    "question": "What is CORS and why is it needed in MERN applications?",
    "options": [
      "Cross-Origin Resource Sharing allows frontend and backend on different origins to communicate",
      "A security tool",
      "A database connector",
      "A frontend library"
    ],
    "correctOption": 0,
    "explanation": "CORS is a mechanism that allows resources to be requested from a different origin, essential when frontend and backend are hosted separately."
  },
  {
    "testId": "mern-mock-05",
    "question": "How do you install the `cors` middleware in an Express app?",
    "options": ["npm install cors", "npm install cors-middleware", "npm i cors", "Both A and C"],
    "correctOption": 3,
    "explanation": "`npm install cors` (or `npm i cors`) installs the CORS middleware package."
  },
  {
    "testId": "mern-mock-05",
    "question": "Which method is commonly used to fetch data from an API in React?",
    "options": ["fetch()", "axios.get()", "Both A and B", "request()"],
    "correctOption": 2,
    "explanation": "Both `fetch()` (native) and `axios.get()` (third-party library) are commonly used to fetch data from APIs in React."
  },
  {
    "testId": "mern-mock-05",
    "question": "What is the role of environment variables in MERN applications?",
    "options": [
      "To configure application settings without changing code",
      "To store database data",
      "To write code",
      "To deploy the app"
    ],
    "correctOption": 0,
    "explanation": "Environment variables allow configuration of settings like database URLs and API keys without modifying code."
  },
  {
    "testId": "mern-mock-05",
    "question": "What is the purpose of the `proxy` key in React's package.json?",
    "options": [
      "To forward API requests to the backend during development",
      "To set the deployment URL",
      "To configure the database",
      "To set environment variables"
    ],
    "correctOption": 0,
    "explanation": "The `proxy` key in package.json allows the React development server to proxy API requests to the backend, avoiding CORS issues in development."
  },
  {
    "testId": "mern-mock-05",
    "question": "What is the flow of data in a MERN application?",
    "options": [
      "React (frontend) → Express API → MongoDB → Express API → React",
      "MongoDB → React → Express → MongoDB",
      "Express → React → MongoDB",
      "React → MongoDB → Express"
    ],
    "correctOption": 0,
    "explanation": "React sends HTTP requests to Express API, which interacts with MongoDB, then sends the response back to React."
  },
  {
    "testId": "mern-mock-05",
    "question": "Which command is used to start both frontend and backend concurrently?",
    "options": ["npm run dev", "npm start", "node index.js", "npm run build"],
    "correctOption": 0,
    "explanation": "`npm run dev` typically runs both frontend and backend using tools like `concurrently`."
  },
  {
    "testId": "mern-mock-05",
    "question": "What is the role of React Router in a MERN application?",
    "options": [
      "To handle client-side routing and navigation",
      "To connect to the database",
      "To serve static files",
      "To handle authentication"
    ],
    "correctOption": 0,
    "explanation": "React Router is used for client-side routing and navigation in React applications."
  },
  {
    "testId": "mern-mock-05",
    "question": "What is an API endpoint in the context of MERN?",
    "options": [
      "A specific URL that the backend exposes to handle requests",
      "A component in React",
      "A database table",
      "A CSS file"
    ],
    "correctOption": 0,
    "explanation": "An API endpoint is a specific URL pattern that the Express backend exposes to handle incoming requests (e.g., GET /api/users)."
  },
  {
    "testId": "mern-mock-05",
    "question": "How do you handle state management in React for large applications?",
    "options": ["Redux", "Context API", "Zustand", "All of the above"],
    "correctOption": 3,
    "explanation": "Redux, Context API, and Zustand are all popular state management solutions for React."
  },
  {
    "testId": "mern-mock-05",
    "question": "What is `concurrently` used for in MERN projects?",
    "options": [
      "To run multiple npm scripts simultaneously",
      "To connect to the database",
      "To handle authentication",
      "To deploy the app"
    ],
    "correctOption": 0,
    "explanation": "`concurrently` is a package that allows running multiple commands (like frontend and backend) at the same time."
  },
  {
    "testId": "mern-mock-06",
    "question": "What is JWT (JSON Web Token) used for in MERN applications?",
    "options": [
      "For authentication and authorization",
      "For database queries",
      "For frontend styling",
      "For server configuration"
    ],
    "correctOption": 0,
    "explanation": "JWT is a compact token used for securely transmitting information between parties, commonly used for user authentication and authorization."
  },
  {
    "testId": "mern-mock-06",
    "question": "Which library is commonly used to hash passwords in Node.js?",
    "options": ["bcrypt", "crypto", "jwt", "argon2"],
    "correctOption": 0,
    "explanation": "bcrypt is a popular library for hashing passwords with salt."
  },
  {
    "testId": "mern-mock-06",
    "question": "What is the purpose of `express-session`?",
    "options": [
      "To manage session data on the server",
      "To parse cookies",
      "To authenticate users",
      "To compress responses"
    ],
    "correctOption": 0,
    "explanation": "`express-session` creates a session for each user and stores session data on the server."
  },
  {
    "testId": "mern-mock-06",
    "question": "What is the difference between authentication and authorization?",
    "options": [
      "Authentication verifies identity; authorization determines what access is allowed",
      "Authorization verifies identity; authentication determines access",
      "Both verify identity",
      "Both determine access"
    ],
    "correctOption": 0,
    "explanation": "Authentication confirms who you are (identity). Authorization determines what actions you are permitted to perform (permissions)."
  },
  {
    "testId": "mern-mock-06",
    "question": "What is the purpose of the `helmet` middleware in Express?",
    "options": [
      "To secure the app by setting various HTTP headers",
      "To parse JSON",
      "To compress responses",
      "To log requests"
    ],
    "correctOption": 0,
    "explanation": "Helmet helps protect against well-known web vulnerabilities by setting security headers."
  },
  {
    "testId": "mern-mock-06",
    "question": "What is the purpose of rate limiting in APIs?",
    "options": [
      "To limit the number of requests a client can make in a given time",
      "To limit the size of requests",
      "To limit the response time",
      "To limit the number of concurrent connections"
    ],
    "correctOption": 0,
    "explanation": "Rate limiting helps prevent abuse and ensures fair usage of API resources."
  },
  {
    "testId": "mern-mock-06",
    "question": "Which package is commonly used for rate limiting in Express?",
    "options": ["express-rate-limit", "rate-limit", "express-throttle", "express-limit"],
    "correctOption": 0,
    "explanation": "`express-rate-limit` is a popular middleware for rate limiting."
  },
  {
    "testId": "mern-mock-06",
    "question": "How do you parse cookies in Express?",
    "options": ["cookie-parser", "express.cookie()", "body-parser", "express-session"],
    "correctOption": 0,
    "explanation": "`cookie-parser` middleware is used to parse Cookie header and populate `req.cookies`."
  },
  {
    "testId": "mern-mock-06",
    "question": "What is the recommended way to store sensitive environment variables?",
    "options": [
      "In a `.env` file ignored by version control",
      "In the code",
      "In the database",
      "In a public file"
    ],
    "correctOption": 0,
    "explanation": "`.env` files with `dotenv` are a standard way to store environment-specific variables securely."
  },
  {
    "testId": "mern-mock-06",
    "question": "What is a CSRF attack and how can it be prevented?",
    "options": [
      "Cross-Site Request Forgery — prevented using CSRF tokens",
      "A type of SQL injection",
      "A DDoS attack",
      "A brute force attack"
    ],
    "correctOption": 0,
    "explanation": "CSRF is an attack where unauthorized commands are transmitted from a user the web application trusts, prevented using CSRF tokens."
  },
  {
    "testId": "mern-mock-06",
    "question": "What is the role of `jsonwebtoken` package in MERN?",
    "options": [
      "To create and verify JWT tokens",
      "To hash passwords",
      "To parse JSON",
      "To compress responses"
    ],
    "correctOption": 0,
    "explanation": "The `jsonwebtoken` package is used to sign, verify, and decode JWT tokens."
  },
  {
    "testId": "mern-mock-07",
    "question": "Which hook is used to add state to a functional component in React?",
    "options": ["useState", "useEffect", "useContext", "useReducer"],
    "correctOption": 0,
    "explanation": "`useState` is the hook that adds local state to functional components."
  },
  {
    "testId": "mern-mock-07",
    "question": "Which hook is used to perform side effects in functional components?",
    "options": ["useEffect", "useState", "useRef", "useLayoutEffect"],
    "correctOption": 0,
    "explanation": "`useEffect` handles side effects like data fetching, subscriptions, and DOM manipulation."
  },
  {
    "testId": "mern-mock-07",
    "question": "How do you implement componentDidMount behavior with hooks?",
    "options": ["useEffect(() => {}, [])", "useEffect(() => {}, [deps])", "useEffect(() => {})", "useMount(() => {})"],
    "correctOption": 0,
    "explanation": "Passing an empty dependency array to `useEffect` makes it run only once after mount."
  },
  {
    "testId": "mern-mock-07",
    "question": "What is the purpose of `useContext`?",
    "options": [
      "To access the value of a React context",
      "To create a new context",
      "To manage state globally",
      "To pass props deeply"
    ],
    "correctOption": 0,
    "explanation": "`useContext` is used to read and subscribe to a context value created by `React.createContext()`."
  },
  {
    "testId": "mern-mock-07",
    "question": "What is the difference between `useMemo` and `useCallback`?",
    "options": [
      "useMemo memoizes a value; useCallback memoizes a function",
      "useCallback memoizes a value; useMemo memoizes a function",
      "Both memoize values",
      "Both memoize functions"
    ],
    "correctOption": 0,
    "explanation": "`useMemo` caches the result of a computation; `useCallback` caches the function itself."
  },
  {
    "testId": "mern-mock-07",
    "question": "What is a custom hook?",
    "options": [
      "A function that starts with 'use' and can call other hooks",
      "A built-in hook",
      "A class component",
      "A component that returns JSX"
    ],
    "correctOption": 0,
    "explanation": "Custom hooks are reusable functions that encapsulate stateful logic and can use built-in hooks."
  },
  {
    "testId": "mern-mock-07",
    "question": "Which hook is used to get a mutable reference to a DOM element?",
    "options": ["useRef", "useState", "useEffect", "useMemo"],
    "correctOption": 0,
    "explanation": "`useRef` returns a mutable object whose `.current` property persists across renders and can hold a DOM element reference."
  },
  {
    "testId": "mern-mock-07",
    "question": "How do you simulate componentWillUnmount with hooks?",
    "options": ["Return a cleanup function from useEffect", "Use useUnmount", "Use componentWillUnmount", "Use useCleanup"],
    "correctOption": 0,
    "explanation": "The function returned from `useEffect` runs on unmount, serving as cleanup."
  },
  {
    "testId": "mern-mock-07",
    "question": "What is the purpose of `useLayoutEffect`?",
    "options": [
      "To run after DOM mutations but before the browser repaint, for measuring DOM changes",
      "To run after the browser repaint",
      "To run only once",
      "To run on server"
    ],
    "correctOption": 0,
    "explanation": "`useLayoutEffect` fires synchronously after DOM mutations, useful for reading layout and DOM updates."
  },
  {
    "testId": "mern-mock-07",
    "question": "What is the purpose of `React.memo`?",
    "options": [
      "To memoize a component, preventing re-renders unless props change",
      "To memoize a function",
      "To create a new component",
      "To handle side effects"
    ],
    "correctOption": 0,
    "explanation": "`React.memo` is a higher-order component that skips rendering if the props haven't changed."
  },
  {
    "testId": "mern-mock-07",
    "question": "What is the role of React Router's `BrowserRouter`?",
    "options": [
      "To provide routing context using HTML5 history API",
      "To connect to the database",
      "To handle authentication",
      "To serve static files"
    ],
    "correctOption": 0,
    "explanation": "`BrowserRouter` uses HTML5 history API to keep the UI in sync with the URL."
  },
  {
    "testId": "mern-mock-07",
    "question": "How do you navigate programmatically in React Router v6?",
    "options": ["useNavigate()", "history.push()", "this.props.history.push()", "useHistory()"],
    "correctOption": 0,
    "explanation": "In React Router v6, `useNavigate()` is used to programmatically navigate."
  },
  {
    "testId": "mern-mock-08",
    "question": "Which testing library is commonly used for unit testing React components?",
    "options": ["Jest", "Mocha", "Chai", "All of the above"],
    "correctOption": 3,
    "explanation": "Jest, Mocha, and Chai are all popular testing libraries that can be used with React."
  },
  {
    "testId": "mern-mock-08",
    "question": "What is the purpose of `supertest` in Node.js testing?",
    "options": [
      "To make HTTP assertions and test routes",
      "To unit test functions",
      "To mock database calls",
      "To test WebSockets"
    ],
    "correctOption": 0,
    "explanation": "supertest allows you to send HTTP requests to your Express app and assert the responses."
  },
  {
    "testId": "mern-mock-08",
    "question": "Which package is used for input validation in Express?",
    "options": ["express-validator", "joi", "yup", "All of the above"],
    "correctOption": 3,
    "explanation": "express-validator, Joi, and Yup are all popular validation libraries for Express."
  },
  {
    "testId": "mern-mock-08",
    "question": "What is the purpose of error handling middleware in Express?",
    "options": [
      "To catch and handle errors in a centralized location",
      "To parse JSON",
      "To compress responses",
      "To log requests"
    ],
    "correctOption": 0,
    "explanation": "Error handling middleware centralizes error management, providing consistent responses for errors."
  },
  {
    "testId": "mern-mock-08",
    "question": "How do you create a custom error class in Node.js?",
    "options": [
      "Extend the built-in Error class",
      "Create a new object",
      "Use try/catch",
      "Use the throw keyword"
    ],
    "correctOption": 0,
    "explanation": "Custom error classes are created by extending the built-in Error class, allowing for custom error types."
  },
  {
    "testId": "mern-mock-08",
    "question": "What is the difference between a unit test and an integration test?",
    "options": [
      "Unit tests test individual components in isolation; integration tests test interactions between components",
      "Integration tests test individual components; unit tests test interactions",
      "Both test components in isolation",
      "Both test interactions"
    ],
    "correctOption": 0,
    "explanation": "Unit tests focus on small pieces of code; integration tests verify that multiple components work together."
  },
  {
    "testId": "mern-mock-08",
    "question": "What is the purpose of `mock` in testing?",
    "options": [
      "A simulated object that mimics the behavior of real objects",
      "A real database connection",
      "A production environment",
      "A test fixture"
    ],
    "correctOption": 0,
    "explanation": "Mocks are used to replace dependencies with controlled replacements for testing."
  },
  {
    "testId": "mern-mock-08",
    "question": "What is the purpose of `express-validator`?",
    "options": [
      "To validate and sanitize input data",
      "To parse JSON",
      "To handle file uploads",
      "To log errors"
    ],
    "correctOption": 0,
    "explanation": "express-validator provides validation and sanitization middleware for Express routes."
  },
  {
    "testId": "mern-mock-08",
    "question": "How do you write a simple test case in Jest?",
    "options": ["test('description', () => {})", "it('description', () => {})", "Both A and B", "assert()"],
    "correctOption": 2,
    "explanation": "Both `test` and `it` are used to define a test case in Jest."
  },
  {
    "testId": "mern-mock-09",
    "question": "What is a process manager like PM2 used for?",
    "options": [
      "To manage and keep Node.js processes alive, enable auto-restart, and load balancing",
      "To bundle the code",
      "To compile TypeScript",
      "To run database migrations"
    ],
    "correctOption": 0,
    "explanation": "PM2 is a process manager that can run Node.js apps in the background, monitor them, and restart if they crash."
  },
  {
    "testId": "mern-mock-09",
    "question": "Which environment variable should be set to 'production' in a production deployment?",
    "options": ["NODE_ENV", "NODE_ENV=production", "APP_ENV", "Both A and B"],
    "correctOption": 3,
    "explanation": "Setting `NODE_ENV=production` is a common practice to optimize performance and enable production-specific features."
  },
  {
    "testId": "mern-mock-09",
    "question": "What is the purpose of a reverse proxy like Nginx in front of Node.js?",
    "options": [
      "To handle static file serving, load balancing, and SSL termination",
      "To replace Node.js",
      "To compile Node.js code",
      "To manage dependencies"
    ],
    "correctOption": 0,
    "explanation": "A reverse proxy sits between clients and the Node.js server, improving performance and security."
  },
  {
    "testId": "mern-mock-09",
    "question": "What is the purpose of environment variables in deployment?",
    "options": [
      "To configure application settings without changing code",
      "To secure the application",
      "To manage dependencies",
      "To define the environment"
    ],
    "correctOption": 0,
    "explanation": "Environment variables allow you to separate configuration from code, making it easy to change settings for different environments."
  },
  {
    "testId": "mern-mock-09",
    "question": "Which tool can be used for load testing a MERN application?",
    "options": ["Artillery", "K6", "Apache Bench", "All of the above"],
    "correctOption": 3,
    "explanation": "Artillery, K6, and Apache Bench are all load testing tools."
  },
  {
    "testId": "mern-mock-09",
    "question": "What is the purpose of `npm run build` in a React application?",
    "options": [
      "To create an optimized production bundle",
      "To start the development server",
      "To run tests",
      "To install dependencies"
    ],
    "correctOption": 0,
    "explanation": "`npm run build` creates an optimized production build for deployment."
  },
  {
    "testId": "mern-mock-09",
    "question": "How can you optimize a React application's performance?",
    "options": [
      "Using code splitting with React.lazy and Suspense",
      "Using memoization with useMemo and useCallback",
      "Using React.memo",
      "All of the above"
    ],
    "correctOption": 3,
    "explanation": "Code splitting, memoization, and React.memo are all performance optimization techniques."
  },
  {
    "testId": "mern-mock-09",
    "question": "What is the purpose of a CDN in web application deployment?",
    "options": [
      "To reduce latency by serving assets from geographically closer servers",
      "To reduce the size of assets",
      "To increase the number of assets",
      "To automatically compress images"
    ],
    "correctOption": 0,
    "explanation": "CDNs distribute content across many global servers, speeding up delivery."
  },
  {
    "testId": "mern-mock-10",
    "question": "What is the first step in building a MERN application?",
    "options": [
      "Define the project requirements and architecture",
      "Write the React components",
      "Set up the database",
      "Deploy the application"
    ],
    "correctOption": 0,
    "explanation": "The first step in building a MERN application is to define the project requirements and plan the architecture."
  },
  {
    "testId": "mern-mock-10",
    "question": "What is the role of the model in the MVC pattern used with MERN?",
    "options": [
      "To define the data structure and interact with the database",
      "To handle user interface",
      "To control the application logic",
      "To serve static files"
    ],
    "correctOption": 0,
    "explanation": "In the MVC pattern, the model defines the data structure and interacts with the database (using Mongoose in MERN)."
  },
  {
    "testId": "mern-mock-10",
    "question": "What is the role of the controller in the MVC pattern?",
    "options": [
      "To handle requests and responses, and coordinate between model and view",
      "To define the data structure",
      "To handle user interface",
      "To serve static files"
    ],
    "correctOption": 0,
    "explanation": "The controller handles incoming requests, interacts with the model, and returns the appropriate response."
  },
  {
    "testId": "mern-mock-10",
    "question": "What is the role of the view in MVC when using MERN?",
    "options": [
      "To render the user interface (React components)",
      "To define the data structure",
      "To handle requests and responses",
      "To serve static files"
    ],
    "correctOption": 0,
    "explanation": "In MERN, the view is the React frontend that renders the user interface."
  },
  {
    "testId": "mern-mock-10",
    "question": "How do you handle user authentication in a MERN application?",
    "options": [
      "Using JWT tokens with bcrypt for password hashing",
      "Using session cookies",
      "Using OAuth",
      "All of the above"
    ],
    "correctOption": 3,
    "explanation": "MERN applications can use JWT, session cookies, or OAuth for authentication."
  },
  {
    "testId": "mern-mock-10",
    "question": "What is the purpose of `express.json()` middleware?",
    "options": [
      "To parse JSON request bodies",
      "To serve static files",
      "To handle errors",
      "To log requests"
    ],
    "correctOption": 0,
    "explanation": "`express.json()` is a built-in middleware that parses incoming JSON request bodies."
  },
  {
    "testId": "mern-mock-10",
    "question": "What is the purpose of `mongoose.connect()`?",
    "options": [
      "To establish a connection to the MongoDB database",
      "To create a new collection",
      "To insert a document",
      "To close the connection"
    ],
    "correctOption": 0,
    "explanation": "`mongoose.connect()` establishes a connection to the MongoDB database."
  },
  {
    "testId": "mern-mock-10",
    "question": "How do you handle environment variables in a MERN application?",
    "options": [
      "Using a `.env` file with the `dotenv` package",
      "Hardcoding them in the code",
      "Using a JSON configuration file",
      "Using environment variables in the OS"
    ],
    "correctOption": 0,
    "explanation": "Using a `.env` file with `dotenv` is the standard way to manage environment variables."
  },
  {
    "testId": "mern-mock-10",
    "question": "What is the role of the `_id` field in MongoDB?",
    "options": [
      "It uniquely identifies a document in a collection",
      "It stores the document's creation date",
      "It stores the document's size",
      "It is optional and can be omitted"
    ],
    "correctOption": 0,
    "explanation": "The `_id` field is a unique identifier for each document in a collection."
  },
  {
    "testId": "mern-mock-10",
    "question": "What is the purpose of `useEffect` in React when fetching data from an API?",
    "options": [
      "To fetch data when the component mounts or dependencies change",
      "To update the state",
      "To render the component",
      "To handle errors"
    ],
    "correctOption": 0,
    "explanation": "`useEffect` is used to perform side effects like data fetching when the component mounts or when specified dependencies change."
  },
  {
    "testId": "mern-mock-10",
    "question": "What is the purpose of `axios` in MERN applications?",
    "options": [
      "To make HTTP requests from the frontend to the backend API",
      "To manage state",
      "To handle routing",
      "To render components"
    ],
    "correctOption": 0,
    "explanation": "`axios` is a popular library for making HTTP requests from the frontend to the backend API."
  },
  {
    "testId": "mern-mock-10",
    "question": "What is the difference between `res.send()` and `res.json()` in Express?",
    "options": [
      "res.json() always sends JSON; res.send() infers type",
      "res.send() sends only JSON; res.json() sends any",
      "Both are identical",
      "res.json() is deprecated"
    ],
    "correctOption": 0,
    "explanation": "`res.json()` explicitly converts the argument to JSON; `res.send()` uses type inference."
  },
  {
    "testId": "mern-mock-10",
    "question": "What is the purpose of `mongoose.Schema`?",
    "options": [
      "To define the structure, data types, and validation for documents",
      "To create a new collection",
      "To insert a document",
      "To close the connection"
    ],
    "correctOption": 0,
    "explanation": "A Mongoose schema defines the fields, data types, validation, and methods for documents in a collection."
  }
];

const questions = rawQuestions.map((q, index) => {
  return {
    ...q,
    id: `${q.testId}-q${index + 1}`
  };
});

let questionsFile = fs.readFileSync('src/data/questions.js', 'utf8');
const questionsEndIndex = questionsFile.lastIndexOf('];');

if (questionsEndIndex !== -1 && !questionsFile.includes('"mern-mock-01-q1"')) {
  const injectionString = ',\n' + questions.map(q => JSON.stringify(q, null, 2)).join(',\n') + '\n];';
  questionsFile = questionsFile.substring(0, questionsEndIndex) + injectionString;
  fs.writeFileSync('src/data/questions.js', questionsFile);
  console.log('Injected MERN Mock questions into questions.js');
}

// Ensure subjects.js for MERN full mock reflects 10 tests.
let subjectsFile = fs.readFileSync('src/data/subjects.js', 'utf8');
subjectsFile = subjectsFile.replace('{ id: "mern-full-mock", courseId: "mern", title: "Full Mock Tests", testsCount: 0', '{ id: "mern-full-mock", courseId: "mern", title: "Full Mock Tests", testsCount: 10');
fs.writeFileSync('src/data/subjects.js', subjectsFile);
console.log("Updated subjects.js for MERN Full Mock");

