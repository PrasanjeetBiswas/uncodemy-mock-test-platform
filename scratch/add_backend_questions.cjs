const fs = require('fs');
const path = require('path');

const newQuestions = [
  {
    "testId": "node-test-01",
    "question": "Which engine does Node.js use to execute JavaScript?",
    "options": ["SpiderMonkey", "V8", "Chakra", "JavaScriptCore"],
    "correctOption": 1,
    "explanation": "Node.js uses the V8 JavaScript engine, originally developed by Google for Chrome."
  },
  {
    "testId": "node-test-01",
    "question": "Which of the following is a global object in Node.js?",
    "options": ["window", "document", "global", "self"],
    "correctOption": 2,
    "explanation": "In Node.js, the global object is `global`, unlike browsers where it is `window`."
  },
  {
    "testId": "node-test-01",
    "question": "How do you include a module in Node.js?",
    "options": ["import", "include", "require", "load"],
    "correctOption": 2,
    "explanation": "Node.js uses the `require()` function to include modules (CommonJS)."
  },
  {
    "testId": "node-test-01",
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
    "testId": "node-test-01",
    "question": "Which core module is used for file system operations in Node.js?",
    "options": ["fs", "path", "os", "http"],
    "correctOption": 0,
    "explanation": "The `fs` (file system) module provides methods for interacting with the file system."
  },
  {
    "testId": "node-test-01",
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
    "testId": "node-test-01",
    "question": "Which method is used to read a file asynchronously in Node.js?",
    "options": ["fs.readFileSync()", "fs.readFile()", "fs.read()", "fs.readAsync()"],
    "correctOption": 1,
    "explanation": "`fs.readFile()` reads a file asynchronously; `fs.readFileSync()` is synchronous."
  },
  {
    "testId": "node-test-01",
    "question": "What is the purpose of the `path` module?",
    "options": [
      "To manipulate file and directory paths in a cross-platform way",
      "To read environment variables",
      "To handle HTTP requests",
      "To create child processes"
    ],
    "correctOption": 0,
    "explanation": "The `path` module provides utilities for working with file and directory paths."
  },
  {
    "testId": "node-test-01",
    "question": "Which global variable contains the current module's filename?",
    "options": ["__filename", "__dirname", "module.filename", "process.cwd()"],
    "correctOption": 0,
    "explanation": "`__filename` is a global variable that contains the absolute path of the current module file."
  },
  {
    "testId": "node-test-01",
    "question": "What does `process.cwd()` return?",
    "options": [
      "The current working directory of the Node.js process",
      "The directory of the current script",
      "The home directory",
      "The root directory"
    ],
    "correctOption": 0,
    "explanation": "`process.cwd()` returns the current working directory from which the Node.js process was started."
  },
  {
    "testId": "node-test-01",
    "question": "How do you handle uncaught exceptions in Node.js?",
    "options": [
      "Using `process.on('uncaughtException', callback)`",
      "Using `try/catch`",
      "Using `unhandledRejection`",
      "Using `process.on('error')`"
    ],
    "correctOption": 0,
    "explanation": "`process.on('uncaughtException')` is used to catch uncaught exceptions; however, it's not recommended as it can leave the application in an inconsistent state."
  },
  {
    "testId": "node-test-01",
    "question": "Which of the following is a Buffer in Node.js?",
    "options": [
      "A class for handling binary data",
      "A module for buffering streams",
      "A global object for caching",
      "A type of array"
    ],
    "correctOption": 0,
    "explanation": "Buffer is a built-in class for handling binary data directly in Node.js."
  },
  {
    "testId": "node-test-01",
    "question": "What is the difference between `require` and `import` in Node.js?",
    "options": [
      "require is CommonJS, import is ES modules",
      "import is CommonJS, require is ES modules",
      "Both are the same",
      "require works only in browsers"
    ],
    "correctOption": 0,
    "explanation": "Node.js supports both CommonJS (`require`) and ES modules (`import`). `require` is synchronous, `import` is asynchronous."
  },
  {
    "testId": "node-test-01",
    "question": "Which method is used to create a new child process in Node.js?",
    "options": ["child_process.spawn()", "child_process.exec()", "child_process.fork()", "All of the above"],
    "correctOption": 3,
    "explanation": "All three methods create child processes: `spawn`, `exec`, and `fork` for different use cases."
  },
  {
    "testId": "node-test-01",
    "question": "What does the `os` module provide?",
    "options": [
      "Operating system-related utilities",
      "File system operations",
      "Network operations",
      "Process management"
    ],
    "correctOption": 0,
    "explanation": "The `os` module provides information about the operating system (CPU, memory, network interfaces)."
  },
  {
    "testId": "node-test-01",
    "question": "What is `process.env` used for?",
    "options": [
      "To access environment variables",
      "To set environment variables",
      "Both A and B",
      "To read command-line arguments"
    ],
    "correctOption": 2,
    "explanation": "`process.env` is an object that holds the user environment variables; you can both read and write to it."
  },
  {
    "testId": "node-test-01",
    "question": "Which of the following is a core module for creating HTTP servers?",
    "options": ["http", "net", "url", "All of the above"],
    "correctOption": 0,
    "explanation": "The `http` module is the primary core module for building HTTP servers and clients."
  },
  {
    "testId": "node-test-01",
    "question": "What is the output of `typeof require` in Node.js?",
    "options": ["'function'", "'object'", "'undefined'", "'string'"],
    "correctOption": 0,
    "explanation": "`require` is a function, so `typeof require` returns `'function'`."
  },
  {
    "testId": "node-test-01",
    "question": "How do you check if a file exists in Node.js?",
    "options": ["fs.existsSync()", "fs.access()", "fs.stat()", "All of the above"],
    "correctOption": 3,
    "explanation": "All these methods can be used to check file existence. `fs.exists` is deprecated, but `fs.existsSync` and `fs.access` are common."
  },
  {
    "testId": "node-test-01",
    "question": "What is the purpose of `console.time()` and `console.timeEnd()`?",
    "options": [
      "To measure the time taken for a block of code",
      "To log timestamps",
      "To set timers",
      "To create a new timer"
    ],
    "correctOption": 0,
    "explanation": "`console.time` and `console.timeEnd` are used to benchmark code execution time."
  },
  {
    "testId": "node-test-01",
    "question": "Which module is used to compress/decompress data?",
    "options": ["zlib", "crypto", "stream", "path"],
    "correctOption": 0,
    "explanation": "The `zlib` module provides compression and decompression utilities using gzip and deflate algorithms."
  },
  {
    "testId": "node-test-01",
    "question": "What is the difference between `path.join()` and `path.resolve()`?",
    "options": [
      "join concatenates without resolving; resolve resolves absolute paths",
      "resolve concatenates; join resolves",
      "Both are the same",
      "join is for arrays; resolve for strings"
    ],
    "correctOption": 0,
    "explanation": "`path.join` simply concatenates path segments; `path.resolve` resolves to an absolute path."
  },
  {
    "testId": "node-test-01",
    "question": "Which global is used to stop the event loop?",
    "options": ["process.exit()", "process.kill()", "process.abort()", "process.disconnect()"],
    "correctOption": 0,
    "explanation": "`process.exit()` terminates the Node.js process and exits the event loop."
  },
  {
    "testId": "node-test-01",
    "question": "What is the `URL` module used for?",
    "options": [
      "To parse and format URLs",
      "To create HTTP requests",
      "To manage domain names",
      "To handle query strings"
    ],
    "correctOption": 0,
    "explanation": "The `URL` module provides utilities for URL parsing and formatting."
  },
  {
    "testId": "node-test-01",
    "question": "Which of the following is NOT a Node.js core module?",
    "options": ["http", "fs", "axios", "path"],
    "correctOption": 2,
    "explanation": "`axios` is a third-party library, not a core module. The rest are core modules."
  },
  {
    "testId": "node-test-01",
    "question": "What does the `--inspect` flag do when running a Node.js script?",
    "options": [
      "Enables debugging via Chrome DevTools",
      "Enables verbose logging",
      "Enables profiling",
      "Enables watch mode"
    ],
    "correctOption": 0,
    "explanation": "The `--inspect` flag starts the Node.js inspector for debugging with Chrome DevTools."
  },
  {
    "testId": "node-test-01",
    "question": "How can you set a custom module search path?",
    "options": ["NODE_PATH", "MODULE_PATH", "PATH", "MODULE_DIR"],
    "correctOption": 0,
    "explanation": "The `NODE_PATH` environment variable can be used to specify additional directories to search for modules."
  },
  {
    "testId": "node-test-01",
    "question": "What is `util.promisify()` used for?",
    "options": [
      "To convert a callback-based function to a promise-based one",
      "To convert a promise to a callback",
      "To create a utility function",
      "To inspect objects"
    ],
    "correctOption": 0,
    "explanation": "`util.promisify` takes a function that uses the error-first callback pattern and returns a function that returns a Promise."
  },
  {
    "testId": "node-test-01",
    "question": "Which property of the `process` object returns the version of Node.js?",
    "options": ["process.version", "process.nodeVersion", "process.versions", "process.env"],
    "correctOption": 0,
    "explanation": "`process.version` returns a string containing the Node.js version number."
  },
  {
    "testId": "node-test-01",
    "question": "What is the main event loop in Node.js?",
    "options": [
      "A mechanism that handles asynchronous operations",
      "A thread for synchronous code",
      "A loop for iterating over arrays",
      "A timer mechanism"
    ],
    "correctOption": 0,
    "explanation": "The event loop is the core of Node.js's non-blocking I/O, handling asynchronous callbacks."
  },
  {
    "testId": "node-test-02",
    "question": "Which of the following is NOT an asynchronous pattern in Node.js?",
    "options": ["Callbacks", "Promises", "Synchronous loops", "Async/Await"],
    "correctOption": 2,
    "explanation": "Synchronous loops are blocking and do not use async patterns."
  },
  {
    "testId": "node-test-02",
    "question": "What is the purpose of the `nextTick` function?",
    "options": [
      "To schedule a function to run in the next tick of the event loop, before I/O events",
      "To schedule a function to run after all I/O events",
      "To schedule a function to run immediately",
      "To schedule a function to run on the next event cycle"
    ],
    "correctOption": 0,
    "explanation": "`process.nextTick()` schedules a callback to be invoked in the same phase after the current operation completes, before I/O events."
  },
  {
    "testId": "node-test-02",
    "question": "What is the difference between `setImmediate` and `process.nextTick`?",
    "options": [
      "nextTick runs before I/O events; setImmediate runs after I/O events",
      "setImmediate runs before I/O; nextTick runs after",
      "Both are the same",
      "nextTick is deprecated"
    ],
    "correctOption": 0,
    "explanation": "`process.nextTick()` runs in the same phase, while `setImmediate()` runs in the check phase (after I/O)."
  },
  {
    "testId": "node-test-02",
    "question": "How do you create a Promise in Node.js?",
    "options": [
      "new Promise((resolve, reject) => { ... })",
      "Promise.create(...)",
      "Promise.resolve(...)",
      "new AsyncFunction(...)"
    ],
    "correctOption": 0,
    "explanation": "The Promise constructor takes a function with `resolve` and `reject` arguments."
  },
  {
    "testId": "node-test-02",
    "question": "What does `Promise.all()` do?",
    "options": [
      "Waits for all promises to resolve and returns an array of results",
      "Waits for the first promise to resolve",
      "Waits for all promises to settle (resolve or reject)",
      "Creates a new promise"
    ],
    "correctOption": 0,
    "explanation": "`Promise.all` takes an array of promises and returns a promise that resolves with an array of all results when all succeed."
  },
  {
    "testId": "node-test-02",
    "question": "What is the output of `console.log('start'); setTimeout(() => console.log('timeout'), 0); console.log('end');`?",
    "options": ["start, end, timeout", "start, timeout, end", "timeout, start, end", "start, end"],
    "correctOption": 0,
    "explanation": "`setTimeout` with 0 delay is scheduled as a timer callback; it runs after the main synchronous code (start, end)."
  },
  {
    "testId": "node-test-02",
    "question": "Which event is emitted when a process is about to exit?",
    "options": ["exit", "beforeExit", "uncaughtException", "SIGINT"],
    "correctOption": 1,
    "explanation": "`beforeExit` is emitted when the event loop is empty and the process is about to exit. `exit` is emitted after the event loop is empty."
  },
  {
    "testId": "node-test-02",
    "question": "What is the role of `async` functions?",
    "options": [
      "They always return a Promise",
      "They run synchronously",
      "They block the event loop",
      "They are used for synchronous code"
    ],
    "correctOption": 0,
    "explanation": "`async` functions always return a Promise and allow the use of `await` inside."
  },
  {
    "testId": "node-test-02",
    "question": "How do you handle errors in a Promise chain?",
    "options": [".catch()", ".error()", ".then(null, callback)", "Both A and C"],
    "correctOption": 3,
    "explanation": "You can catch errors using `.catch()` or the second argument of `.then()`."
  },
  {
    "testId": "node-test-02",
    "question": "What is the purpose of `util.promisify()`?",
    "options": [
      "To convert a callback-based function to a Promise-based function",
      "To convert a Promise to a callback",
      "To create a utility for debugging",
      "To inspect objects"
    ],
    "correctOption": 0,
    "explanation": "`util.promisify` is a standard way to create a promise-returning version of a function that uses the error-first callback pattern."
  },
  {
    "testId": "node-test-02",
    "question": "Which of the following is true about EventEmitters?",
    "options": [
      "They allow multiple listeners to be registered for an event",
      "They only support one listener per event",
      "They are used only for errors",
      "They are obsolete"
    ],
    "correctOption": 0,
    "explanation": "EventEmitters support multiple listeners for the same event and are widely used for handling asynchronous events."
  },
  {
    "testId": "node-test-02",
    "question": "How do you emit a custom event using EventEmitter?",
    "options": ["eventEmitter.emit('eventName')", "eventEmitter.fire('eventName')", "eventEmitter.trigger('eventName')", "eventEmitter.dispatch('eventName')"],
    "correctOption": 0,
    "explanation": "The `emit()` method is used to emit an event."
  },
  {
    "testId": "node-test-02",
    "question": "What is the `util.promisify` method commonly used for?",
    "options": [
      "To convert functions that use callback style to return Promises",
      "To convert Promises to callbacks",
      "To promisify a Promise",
      "To create a utility function"
    ],
    "correctOption": 0,
    "explanation": "It is used to promisify error-first callback functions."
  },
  {
    "testId": "node-test-02",
    "question": "What is a `Stream` in Node.js?",
    "options": [
      "An abstraction for reading/writing data sequentially",
      "A buffer for data",
      "A type of event emitter",
      "A pipeline for HTTP requests"
    ],
    "correctOption": 0,
    "explanation": "Streams are objects that let you read data from a source or write data to a destination in a continuous fashion."
  },
  {
    "testId": "node-test-02",
    "question": "Which method is used to pipe data from a readable stream to a writable stream?",
    "options": [".pipe()", ".send()", ".transfer()", ".flow()"],
    "correctOption": 0,
    "explanation": "`.pipe()` is the method to pipe output from one stream to another."
  },
  {
    "testId": "node-test-02",
    "question": "What is the purpose of the `finished` function from `stream` module?",
    "options": [
      "To detect when a stream is no longer readable/writable",
      "To finish writing to a stream",
      "To close a stream",
      "To check if a stream is finished"
    ],
    "correctOption": 0,
    "explanation": "`stream.finished` is used to detect the end of a stream, handling cleanup."
  },
  {
    "testId": "node-test-02",
    "question": "How do you handle unhandled promise rejections in Node.js?",
    "options": [
      "Using `process.on('unhandledRejection', callback)`",
      "Using `process.on('uncaughtException')`",
      "Using `try/catch` around every promise",
      "Using `async/await`"
    ],
    "correctOption": 0,
    "explanation": "`process.on('unhandledRejection')` is the standard way to catch unhandled rejections."
  },
  {
    "testId": "node-test-02",
    "question": "What does `async`/`await` simplify?",
    "options": [
      "Promise handling by making asynchronous code look synchronous",
      "Callback handling",
      "Error handling only",
      "Synchronous code execution"
    ],
    "correctOption": 0,
    "explanation": "async/await makes it easier to write and read asynchronous code that uses Promises."
  },
  {
    "testId": "node-test-02",
    "question": "What is the event loop's order of phases?",
    "options": [
      "timers, pending callbacks, idle, prepare, poll, check, close",
      "check, timers, poll, close",
      "timers, poll, check, close",
      "poll, timers, check"
    ],
    "correctOption": 0,
    "explanation": "The Node.js event loop phases are: timers, pending callbacks, idle/prepare, poll, check, close callbacks."
  },
  {
    "testId": "node-test-02",
    "question": "What is the difference between `setTimeout` and `setInterval`?",
    "options": [
      "setTimeout runs once after delay; setInterval runs repeatedly",
      "setInterval runs once; setTimeout runs repeatedly",
      "Both run once",
      "Both run repeatedly"
    ],
    "correctOption": 0,
    "explanation": "`setTimeout` executes once after the specified delay, while `setInterval` executes repeatedly at the specified interval."
  },
  {
    "testId": "node-test-02",
    "question": "How can you create a promise that resolves after a delay?",
    "options": [
      "new Promise((resolve) => setTimeout(resolve, ms))",
      "Promise.delay(ms)",
      "setTimeout(() => Promise.resolve(), ms)",
      "Promise.sleep(ms)"
    ],
    "correctOption": 0,
    "explanation": "A common pattern: `new Promise(resolve => setTimeout(resolve, ms))` creates a promise that resolves after `ms` milliseconds."
  },
  {
    "testId": "node-test-02",
    "question": "What is the purpose of `Promise.race()`?",
    "options": [
      "Resolves or rejects as soon as any promise settles",
      "Waits for all promises to settle",
      "Returns a promise that resolves when all succeed",
      "Rejects if any promise rejects"
    ],
    "correctOption": 0,
    "explanation": "`Promise.race()` returns a promise that settles with the result of the first settled promise (resolve or reject)."
  },
  {
    "testId": "node-test-03",
    "question": "How do you create an Express application?",
    "options": ["const app = express()", "const app = new Express()", "const app = Express.create()", "const app = require('express')"],
    "correctOption": 0,
    "explanation": "After requiring express, you call it as a function to create an app instance."
  },
  {
    "testId": "node-test-03",
    "question": "Which method is used to handle GET requests in Express?",
    "options": ["app.get()", "app.use()", "app.post()", "app.route()"],
    "correctOption": 0,
    "explanation": "`app.get()` is used to define a route handler for HTTP GET requests."
  },
  {
    "testId": "node-test-03",
    "question": "How do you access query string parameters in Express?",
    "options": ["req.query", "req.params", "req.body", "req.param"],
    "correctOption": 0,
    "explanation": "`req.query` contains the parsed query string parameters."
  },
  {
    "testId": "node-test-03",
    "question": "How do you access route parameters in Express (e.g., /users/:id)?",
    "options": ["req.params", "req.query", "req.body", "req.param"],
    "correctOption": 0,
    "explanation": "`req.params` is an object containing the route parameters (e.g., id)."
  },
  {
    "testId": "node-test-03",
    "question": "Which Express method is used to serve static files?",
    "options": ["express.static()", "app.static()", "app.serve()", "express.serveStatic()"],
    "correctOption": 0,
    "explanation": "`express.static` is a built-in middleware to serve static assets like images, CSS, JavaScript."
  },
  {
    "testId": "node-test-03",
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
    "testId": "node-test-03",
    "question": "How do you add middleware that runs for every request?",
    "options": ["app.use(middleware)", "app.get(middleware)", "app.all(middleware)", "app.use('/', middleware)"],
    "correctOption": 0,
    "explanation": "`app.use()` without a specific path runs the middleware for every request."
  },
  {
    "testId": "node-test-03",
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
    "testId": "node-test-03",
    "question": "How do you handle 404 errors in Express?",
    "options": [
      "Add a middleware at the end that sends a 404 response",
      "Use app.error()",
      "Use try/catch",
      "Use app.notFound()"
    ],
    "correctOption": 0,
    "explanation": "A catch-all middleware for unmatched routes (usually after all other routes) is used to return 404."
  },
  {
    "testId": "node-test-03",
    "question": "Which package is commonly used for logging in Express?",
    "options": ["morgan", "winston", "express-logger", "All of the above"],
    "correctOption": 3,
    "explanation": "Morgan is a popular HTTP request logger middleware; Winston is a general logging library."
  },
  {
    "testId": "node-test-03",
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
    "testId": "node-test-03",
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
    "testId": "node-test-03",
    "question": "How do you set HTTP status codes in Express?",
    "options": ["res.status(200)", "res.statusCode = 200", "res.sendStatus(200)", "All of the above"],
    "correctOption": 3,
    "explanation": "You can use `res.status(200).send(...)`, `res.statusCode = 200`, or `res.sendStatus(200)`."
  },
  {
    "testId": "node-test-03",
    "question": "Which method is used to parse JSON request bodies in Express?",
    "options": ["express.json()", "bodyParser.json()", "express.bodyParser()", "Both A and B"],
    "correctOption": 3,
    "explanation": "Both `express.json()` (built-in) and `body-parser` (older) can parse JSON; newer Express includes it."
  },
  {
    "testId": "node-test-03",
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
    "testId": "node-test-03",
    "question": "How do you create a route group in Express?",
    "options": [
      "Using express.Router()",
      "Using app.group()",
      "Using app.route()",
      "Using app.use()"
    ],
    "correctOption": 0,
    "explanation": "`express.Router()` allows you to create modular, mountable route handlers."
  },
  {
    "testId": "node-test-03",
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
    "testId": "node-test-03",
    "question": "Which of the following is NOT a valid Express middleware?",
    "options": ["express.static", "express.json", "express.urlencoded", "express.session"],
    "correctOption": 3,
    "explanation": "`express.session` is not built-in; you need `express-session` separately."
  },
  {
    "testId": "node-test-03",
    "question": "How do you capture URL parameters with a specific pattern?",
    "options": ["/users/:id(\\d+)", "/users/:id([0-9]+)", "/users/:id:int", "Both A and B"],
    "correctOption": 3,
    "explanation": "Express supports regex constraints in route parameters, e.g., `/:id(\\d+)` or `/:id([0-9]+)`."
  },
  {
    "testId": "node-test-03",
    "question": "What is the difference between `app.get()` and `app.use()`?",
    "options": [
      "app.get() only handles GET; app.use() handles all HTTP methods",
      "app.use() only handles GET; app.get() handles all",
      "Both handle all methods",
      "app.use() is for middleware, app.get() for routes"
    ],
    "correctOption": 0,
    "explanation": "`app.get` is a specific method for GET; `app.use` can handle any method and is commonly used for middleware."
  },
  {
    "testId": "node-test-03",
    "question": "Which middleware is used to parse form data (urlencoded) in Express?",
    "options": ["express.urlencoded()", "bodyParser.urlencoded()", "Both A and B", "express.form()"],
    "correctOption": 2,
    "explanation": "Both `express.urlencoded()` (built-in) and `body-parser` (older) can parse URL-encoded form bodies."
  },
  {
    "testId": "node-test-03",
    "question": "What does `app.set('view engine', 'ejs')` do?",
    "options": [
      "Sets the view engine for rendering templates",
      "Sets the environment variable",
      "Sets a custom setting",
      "Enables CORS"
    ],
    "correctOption": 0,
    "explanation": "This sets EJS as the template engine for rendering views."
  },
  {
    "testId": "node-test-03",
    "question": "How do you render a view in Express?",
    "options": ["res.render('view', data)", "res.view('view', data)", "res.sendFile('view')", "app.render('view')"],
    "correctOption": 0,
    "explanation": "`res.render()` renders a view template and sends the HTML response."
  },
  {
    "testId": "node-test-04",
    "question": "Which package is commonly used for MongoDB in Node.js?",
    "options": ["mongoose", "mongodb", "mongo-client", "Both A and B"],
    "correctOption": 3,
    "explanation": "Both the official `mongodb` driver and the ODM `mongoose` are used; Mongoose is more popular for modeling."
  },
  {
    "testId": "node-test-04",
    "question": "What is the role of Mongoose schema?",
    "options": [
      "To define the structure of documents and provide validation",
      "To create a new database",
      "To manage connections",
      "To run aggregation queries"
    ],
    "correctOption": 0,
    "explanation": "A Mongoose schema defines the fields, types, validation, and methods for a collection."
  },
  {
    "testId": "node-test-04",
    "question": "How do you connect to MongoDB using Mongoose?",
    "options": ["mongoose.connect(uri)", "mongoose.createConnection(uri)", "new mongoose.Connection(uri)", "Both A and B"],
    "correctOption": 3,
    "explanation": "`mongoose.connect()` is the standard way; `createConnection` is used for multiple connections."
  },
  {
    "testId": "node-test-04",
    "question": "Which method is used to find documents in Mongoose?",
    "options": ["find()", "findOne()", "findById()", "All of the above"],
    "correctOption": 3,
    "explanation": "Mongoose provides several query methods for finding documents."
  },
  {
    "testId": "node-test-04",
    "question": "What is the difference between `save()` and `create()` in Mongoose?",
    "options": [
      "create() creates a new document and saves; save() is called on an existing model instance",
      "save() creates and saves; create() is called on instance",
      "Both are identical",
      "create() is deprecated"
    ],
    "correctOption": 0,
    "explanation": "`Model.create()` is a static method that creates and saves one or more documents; `document.save()` saves an existing document instance."
  },
  {
    "testId": "node-test-04",
    "question": "Which query is used to update a document in Mongoose?",
    "options": ["updateOne()", "findByIdAndUpdate()", "updateMany()", "All of the above"],
    "correctOption": 3,
    "explanation": "Mongoose provides multiple update methods."
  },
  {
    "testId": "node-test-04",
    "question": "What is the purpose of `pre` and `post` hooks in Mongoose?",
    "options": [
      "To execute middleware before or after certain operations (e.g., save, find)",
      "To define routes",
      "To validate data",
      "To connect to the database"
    ],
    "correctOption": 0,
    "explanation": "Mongoose middleware (hooks) allow you to run functions before/after lifecycle events."
  },
  {
    "testId": "node-test-04",
    "question": "Which SQL ORM is commonly used with Node.js?",
    "options": ["Sequelize", "TypeORM", "Prisma", "All of the above"],
    "correctOption": 3,
    "explanation": "Sequelize, TypeORM, and Prisma are all popular ORMs for SQL databases."
  },
  {
    "testId": "node-test-04",
    "question": "How do you define a model in Sequelize?",
    "options": [
      "sequelize.define('modelName', attributes, options)",
      "new Model(...)",
      "createModel('modelName')",
      "sequelize.model('modelName')"
    ],
    "correctOption": 0,
    "explanation": "`sequelize.define` is used to define a model with its attributes."
  },
  {
    "testId": "node-test-04",
    "question": "What is the purpose of `sync()` in Sequelize?",
    "options": [
      "To synchronize models with the database (create tables)",
      "To connect to the database",
      "To run migrations",
      "To drop tables"
    ],
    "correctOption": 0,
    "explanation": "`sync()` creates the table for the model if it doesn't exist."
  },
  {
    "testId": "node-test-04",
    "question": "Which method is used to find all records in Sequelize?",
    "options": ["findAll()", "find()", "all()", "getAll()"],
    "correctOption": 0,
    "explanation": "`Model.findAll()` retrieves all rows matching the query options."
  },
  {
    "testId": "node-test-04",
    "question": "How do you define a one-to-many relationship in Sequelize?",
    "options": [
      "Model.belongsTo() and Model.hasMany()",
      "Model.hasOne() and Model.belongsTo()",
      "Model.belongsToMany()",
      "Model.hasMany() and Model.hasOne()"
    ],
    "correctOption": 0,
    "explanation": "`hasMany()` and `belongsTo()` define a one-to-many relationship."
  },
  {
    "testId": "node-test-04",
    "question": "What is the purpose of database migrations?",
    "options": [
      "To manage database schema changes in a version-controlled manner",
      "To seed data",
      "To create indexes",
      "To optimize queries"
    ],
    "correctOption": 0,
    "explanation": "Migrations are scripts that apply changes to the database schema over time, often used with ORMs."
  },
  {
    "testId": "node-test-04",
    "question": "How do you execute raw SQL in Sequelize?",
    "options": ["sequelize.query()", "sequelize.execute()", "sequelize.sql()", "sequelize.raw()"],
    "correctOption": 0,
    "explanation": "`sequelize.query()` allows you to execute custom SQL queries."
  },
  {
    "testId": "node-test-04",
    "question": "What is the role of connection pooling?",
    "options": [
      "To manage a pool of database connections for performance",
      "To limit the number of concurrent connections",
      "To handle database errors",
      "Both A and B"
    ],
    "correctOption": 3,
    "explanation": "Connection pooling reuses connections to improve performance and limits the number of active connections."
  },
  {
    "testId": "node-test-04",
    "question": "Which method is used to close a Mongoose connection?",
    "options": ["mongoose.disconnect()", "mongoose.close()", "mongoose.connection.close()", "mongoose.end()"],
    "correctOption": 2,
    "explanation": "`mongoose.connection.close()` properly closes the MongoDB connection."
  },
  {
    "testId": "node-test-04",
    "question": "What is an index in a database?",
    "options": [
      "A data structure that improves query performance",
      "A constraint for uniqueness",
      "A relationship between tables",
      "A stored procedure"
    ],
    "correctOption": 0,
    "explanation": "An index is a data structure that speeds up data retrieval operations."
  },
  {
    "testId": "node-test-04",
    "question": "How do you add an index in Mongoose?",
    "options": ["schema.index({ field: 1 })", "model.index()", "schema.addIndex()", "Both A and B"],
    "correctOption": 0,
    "explanation": "You can define an index using `schema.index()` or by setting `index: true` on a field."
  },
  {
    "testId": "node-test-04",
    "question": "What is the purpose of `populate()` in Mongoose?",
    "options": [
      "To replace references with the actual documents",
      "To populate an array",
      "To insert data",
      "To delete data"
    ],
    "correctOption": 0,
    "explanation": "`populate()` is used to automatically replace document references with the referenced documents."
  },
  {
    "testId": "node-test-05",
    "question": "What is JSON Web Token (JWT) used for?",
    "options": [
      "Authentication and information exchange",
      "Data encryption",
      "File storage",
      "Database querying"
    ],
    "correctOption": 0,
    "explanation": "JWT is a compact, URL-safe token used for authentication and securely transmitting information."
  },
  {
    "testId": "node-test-05",
    "question": "Which library is commonly used to hash passwords in Node.js?",
    "options": ["bcrypt", "crypto", "jwt", "argon2"],
    "correctOption": 0,
    "explanation": "bcrypt is a popular library for hashing passwords with salt."
  },
  {
    "testId": "node-test-05",
    "question": "What is the purpose of `helmet` middleware in Express?",
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
    "testId": "node-test-05",
    "question": "What is CORS in the context of Node.js backend?",
    "options": [
      "Cross-Origin Resource Sharing, a mechanism to allow restricted resources from different origins",
      "A security vulnerability",
      "A data format",
      "A type of middleware"
    ],
    "correctOption": 0,
    "explanation": "CORS is a security feature implemented by browsers; the backend must enable it using headers or middleware."
  },
  {
    "testId": "node-test-05",
    "question": "How do you parse cookies in Express?",
    "options": ["cookie-parser", "express.cookie()", "body-parser", "express-session"],
    "correctOption": 0,
    "explanation": "`cookie-parser` middleware is used to parse Cookie header and populate `req.cookies`."
  },
  {
    "testId": "node-test-05",
    "question": "What is a session in web applications?",
    "options": [
      "A way to store user-specific data across requests",
      "A database connection",
      "A type of cookie",
      "An authentication token"
    ],
    "correctOption": 0,
    "explanation": "Sessions allow the server to maintain state for a user across multiple HTTP requests."
  },
  {
    "testId": "node-test-05",
    "question": "Which package is used for session management in Express?",
    "options": ["express-session", "session", "cookie-session", "Both A and C"],
    "correctOption": 3,
    "explanation": "`express-session` and `cookie-session` are both used; `express-session` stores session data on the server."
  },
  {
    "testId": "node-test-05",
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
    "testId": "node-test-05",
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
    "testId": "node-test-05",
    "question": "What is rate limiting in backend APIs?",
    "options": [
      "Limiting the number of requests a client can make in a given time",
      "Limiting the size of requests",
      "Limiting the response time",
      "Limiting the number of concurrent connections"
    ],
    "correctOption": 0,
    "explanation": "Rate limiting helps prevent abuse and ensures fair usage of API resources."
  },
  {
    "testId": "node-test-05",
    "question": "Which package is commonly used for rate limiting in Express?",
    "options": ["express-rate-limit", "rate-limit", "express-throttle", "express-limit"],
    "correctOption": 0,
    "explanation": "`express-rate-limit` is a popular middleware for rate limiting."
  },
  {
    "testId": "node-test-05",
    "question": "What is the difference between authentication and authorization?",
    "options": [
      "Authentication verifies identity; authorization determines access",
      "Authorization verifies identity; authentication determines access",
      "Both are the same",
      "Authentication is for users; authorization is for data"
    ],
    "correctOption": 0,
    "explanation": "Authentication is the process of verifying who you are; authorization is about what you are allowed to do."
  },
  {
    "testId": "node-test-05",
    "question": "How do you implement OAuth2 in Node.js?",
    "options": [
      "Using libraries like passport-oauth2, oauth2-server, or google-auth-library",
      "Using JWT only",
      "Using basic auth",
      "Using session cookies"
    ],
    "correctOption": 0,
    "explanation": "There are several libraries and strategies for implementing OAuth2 with popular providers."
  },
  {
    "testId": "node-test-05",
    "question": "What is the purpose of `crypto` module?",
    "options": [
      "To provide cryptographic functionality (hashing, encryption, random bytes)",
      "To parse JSON",
      "To manage file systems",
      "To create HTTP servers"
    ],
    "correctOption": 0,
    "explanation": "The `crypto` module provides various cryptographic operations."
  },
  {
    "testId": "node-test-05",
    "question": "What is a common secure practice for storing passwords?",
    "options": [
      "Hashing with a salt using bcrypt",
      "Storing in plain text",
      "Encrypting with AES",
      "Using base64 encoding"
    ],
    "correctOption": 0,
    "explanation": "bcrypt hashing with salt is a standard secure practice for password storage."
  },
  {
    "testId": "node-test-05",
    "question": "Which header is used to send JWT from client to server?",
    "options": ["Authorization", "Authentication", "X-Access-Token", "Bearer"],
    "correctOption": 0,
    "explanation": "The `Authorization` header with the `Bearer` scheme is commonly used for JWT."
  },
  {
    "testId": "node-test-05",
    "question": "What is the purpose of `express-session`?",
    "options": [
      "To manage session data on the server",
      "To parse cookies",
      "To handle authentication",
      "To compress responses"
    ],
    "correctOption": 0,
    "explanation": "`express-session` creates a session for each user and stores session data on the server."
  },
  {
    "testId": "node-test-06",
    "question": "Which library is commonly used for WebSocket communication in Node.js?",
    "options": ["socket.io", "ws", "websocket", "All of the above"],
    "correctOption": 3,
    "explanation": "Socket.io, ws, and websocket are all popular libraries for WebSocket support."
  },
  {
    "testId": "node-test-06",
    "question": "What is the difference between HTTP and WebSocket?",
    "options": [
      "HTTP is request-response; WebSocket is full-duplex persistent connection",
      "WebSocket is request-response; HTTP is full-duplex",
      "Both are request-response",
      "Both are full-duplex"
    ],
    "correctOption": 0,
    "explanation": "HTTP is stateless and follows a request-response model; WebSocket allows persistent, bidirectional communication."
  },
  {
    "testId": "node-test-06",
    "question": "How do you handle WebSocket connections with Socket.io?",
    "options": [
      "io.on('connection', (socket) => { ... })",
      "socket.on('connect', ...)",
      "io.connect(...)",
      "Both A and B"
    ],
    "correctOption": 0,
    "explanation": "The server listens for `connection` events and each socket instance is used for communication."
  },
  {
    "testId": "node-test-06",
    "question": "Which testing framework is commonly used for Node.js applications?",
    "options": ["Jest", "Mocha", "Jasmine", "All of the above"],
    "correctOption": 3,
    "explanation": "Jest, Mocha, and Jasmine are all widely used for testing Node.js applications."
  },
  {
    "testId": "node-test-06",
    "question": "What is the purpose of `supertest` in testing Express apps?",
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
    "testId": "node-test-06",
    "question": "What is the role of environment variables in deployment?",
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
    "testId": "node-test-06",
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
    "testId": "node-test-06",
    "question": "What is Node.js cluster module used for?",
    "options": [
      "To create child processes that share the same port, enabling multi-core scaling",
      "To create a single-threaded app",
      "To manage database connections",
      "To create a cluster of servers"
    ],
    "correctOption": 0,
    "explanation": "The cluster module allows you to fork multiple workers to utilize multiple CPU cores."
  },
  {
    "testId": "node-test-06",
    "question": "Which logging library is commonly used with Express?",
    "options": ["winston", "morgan", "pino", "All of the above"],
    "correctOption": 3,
    "explanation": "Winston, Morgan, and Pino are all popular logging libraries in the Node.js ecosystem."
  },
  {
    "testId": "node-test-06",
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
    "testId": "node-test-06",
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
    "testId": "node-test-06",
    "question": "What is `mock` in testing?",
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
    "testId": "node-test-06",
    "question": "How do you enable logging in a Node.js application?",
    "options": ["Using `console.log`", "Using a logging library like Winston", "Using `debug`", "All of the above"],
    "correctOption": 3,
    "explanation": "You can use console methods, but structured logging with libraries like Winston is recommended for production."
  },
  {
    "testId": "node-test-06",
    "question": "What is the purpose of a health check endpoint in an API?",
    "options": [
      "To verify if the service is running and responsive",
      "To perform a full system check",
      "To return detailed metrics",
      "To authenticate users"
    ],
    "correctOption": 0,
    "explanation": "Health checks (e.g., /health) are used by monitoring tools to check if the application is alive."
  },
  {
    "testId": "node-test-06",
    "question": "Which tool can be used for load testing a Node.js app?",
    "options": ["Artillery", "K6", "Apache Bench", "All of the above"],
    "correctOption": 3,
    "explanation": "There are several load testing tools, including Artillery, K6, and Apache Bench."
  },
  {
    "testId": "node-test-06",
    "question": "What is the purpose of `--max-old-space-size` flag in Node.js?",
    "options": [
      "To set the maximum memory size for the V8 heap",
      "To enable debugging",
      "To set the maximum number of threads",
      "To limit CPU usage"
    ],
    "correctOption": 0,
    "explanation": "This flag controls the maximum heap size to prevent memory overflow."
  },
  {
    "testId": "node-test-06",
    "question": "How can you profile a Node.js application?",
    "options": [
      "Using `node --inspect` and Chrome DevTools",
      "Using `node --prof`",
      "Using `clinic` or `0x`",
      "All of the above"
    ],
    "correctOption": 3,
    "explanation": "There are various profiling tools, including built-in flags and third-party packages."
  },
  {
    "testId": "node-test-06",
    "question": "What is the advantage of using a process manager like PM2 in production?",
    "options": [
      "It provides zero-downtime reloads",
      "It monitors process health",
      "It supports clustered mode",
      "All of the above"
    ],
    "correctOption": 3,
    "explanation": "PM2 offers features like auto-restart, zero-downtime reload, and load balancing across workers."
  },
  {
    "testId": "node-test-06",
    "question": "Which of the following is a recommended practice for deploying Node.js apps?",
    "options": [
      "Use environment variables for configuration",
      "Use a process manager",
      "Set NODE_ENV to production",
      "All of the above"
    ],
    "correctOption": 3,
    "explanation": "All these practices improve security, performance, and manageability."
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
console.log('Added ' + newQuestions.length + ' backend questions to questions.js');
