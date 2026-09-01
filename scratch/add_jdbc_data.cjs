const fs = require('fs');

const missingTests = [
  {
    "id": "jdbc-test-01",
    "seriesId": "jdbc",
    "courseId": "java",
    "title": "JDBC Fundamentals & Database Connectivity",
    "durationMinutes": 30,
    "totalQuestions": 30,
    "passingPercentage": 40
  },
  {
    "id": "jdbc-test-02",
    "seriesId": "jdbc",
    "courseId": "java",
    "title": "Advanced JDBC & Database Operations",
    "durationMinutes": 30,
    "totalQuestions": 30,
    "passingPercentage": 40
  },
  {
    "id": "jdbc-test-03",
    "seriesId": "jdbc",
    "courseId": "java",
    "title": "Advanced Java - Servlets, JSP & Design Patterns",
    "durationMinutes": 35,
    "totalQuestions": 35,
    "passingPercentage": 45
  }
];

let testsFile = fs.readFileSync('src/data/tests.js', 'utf8');
const endBraceIndex = testsFile.lastIndexOf('];');

if (endBraceIndex !== -1 && !testsFile.includes('"jdbc-test-01"')) {
  const injectionString = ',\n' + missingTests.map(t => JSON.stringify(t, null, 2)).join(',\n') + '\n];';
  testsFile = testsFile.substring(0, endBraceIndex) + injectionString;
  fs.writeFileSync('src/data/tests.js', testsFile);
  console.log('Successfully injected jdbc tests into tests.js array!');
} else {
  console.log('Tests already exist or tests.js is not an array ending in ];');
}

const questions = [
  {
    "testId": "jdbc-test-01",
    "question": "What does JDBC stand for?",
    "options": [
      "Java Database Connectivity",
      "Java Data Binding Connection",
      "Java Development Bridge Connection",
      "Java Database Core"
    ],
    "correctOption": 0,
    "explanation": "JDBC stands for Java Database Connectivity, an API used to connect and execute queries with databases."
  },
  {
    "testId": "jdbc-test-01",
    "question": "Which of the following is NOT a type of JDBC driver?",
    "options": [
      "JDBC-ODBC Bridge Driver",
      "Native-API Driver",
      "Network Protocol Driver",
      "HTTP Driver"
    ],
    "correctOption": 3,
    "explanation": "The four types of JDBC drivers are: JDBC-ODBC Bridge, Native-API, Network Protocol, and Thin (Pure Java) Driver. HTTP Driver is not a valid JDBC driver type."
  },
  {
    "testId": "jdbc-test-01",
    "question": "Which class is used to load the JDBC driver and establish a connection?",
    "options": ["DriverManager", "Connection", "Statement", "ResultSet"],
    "correctOption": 0,
    "explanation": "DriverManager is the class that manages JDBC drivers and establishes database connections. You use `DriverManager.getConnection()` to get a Connection."
  },
  {
    "testId": "jdbc-test-01",
    "question": "What is the purpose of the `Class.forName()` method in JDBC?",
    "options": [
      "To load the JDBC driver class",
      "To create a connection to the database",
      "To execute a SQL query",
      "To close the connection"
    ],
    "correctOption": 0,
    "explanation": "`Class.forName()` loads the JDBC driver class into memory, which registers the driver with DriverManager (in older versions). In modern JDBC, this is often optional."
  },
  {
    "testId": "jdbc-test-01",
    "question": "Which method is used to create a Statement object in JDBC?",
    "options": [
      "connection.createStatement()",
      "connection.getStatement()",
      "connection.newStatement()",
      "statement.create()"
    ],
    "correctOption": 0,
    "explanation": "The `createStatement()` method on the Connection object is used to create a Statement object for executing SQL queries."
  },
  {
    "testId": "jdbc-test-01",
    "question": "Which of the following is used to execute a SELECT query in JDBC?",
    "options": [
      "executeQuery()",
      "executeUpdate()",
      "execute()",
      "executeSelect()"
    ],
    "correctOption": 0,
    "explanation": "`executeQuery()` is used to execute SELECT queries and returns a ResultSet. `executeUpdate()` is for INSERT, UPDATE, DELETE."
  },
  {
    "testId": "jdbc-test-01",
    "question": "What is the difference between Statement and PreparedStatement?",
    "options": [
      "PreparedStatement is precompiled and prevents SQL injection; Statement is not",
      "Statement is precompiled; PreparedStatement is not",
      "Both are precompiled",
      "Neither is precompiled"
    ],
    "correctOption": 0,
    "explanation": "PreparedStatement is precompiled, offers better performance for repeated queries, and prevents SQL injection by using parameterized queries."
  },
  {
    "testId": "jdbc-test-01",
    "question": "Which method of PreparedStatement is used to set a String parameter?",
    "options": ["setString()", "setText()", "setVarchar()", "setChar()"],
    "correctOption": 0,
    "explanation": "`setString()` is the method used to bind a String value to a parameter placeholder (?) in a PreparedStatement."
  },
  {
    "testId": "jdbc-test-01",
    "question": "What is SQL injection and how does PreparedStatement prevent it?",
    "options": [
      "SQL injection is an attack where malicious SQL is inserted; PreparedStatement uses parameterized queries to separate SQL from data",
      "SQL injection is a performance issue; PreparedStatement fixes it",
      "SQL injection is a database error; PreparedStatement ignores it",
      "SQL injection is a Java bug; PreparedStatement avoids it"
    ],
    "correctOption": 0,
    "explanation": "SQL injection occurs when user input is embedded directly into SQL statements. PreparedStatement uses parameterized queries that treat input as data, not executable code."
  },
  {
    "testId": "jdbc-test-01",
    "question": "What is the purpose of ResultSet in JDBC?",
    "options": [
      "To store the results of a query and provide access to the data",
      "To execute SQL statements",
      "To manage database connections",
      "To handle transactions"
    ],
    "correctOption": 0,
    "explanation": "ResultSet represents the result set of a database query, providing methods to access the retrieved data row by row."
  },
  {
    "testId": "jdbc-test-01",
    "question": "Which method is used to move the cursor to the next row in ResultSet?",
    "options": ["next()", "previous()", "first()", "last()"],
    "correctOption": 0,
    "explanation": "The `next()` method moves the cursor to the next row. It returns true if there is a next row, false otherwise."
  },
  {
    "testId": "jdbc-test-01",
    "question": "What is the purpose of the `close()` method on database objects?",
    "options": [
      "To release database resources and free connections",
      "To close the application",
      "To commit the transaction",
      "To rollback the transaction"
    ],
    "correctOption": 0,
    "explanation": "`close()` releases the resources held by database objects (Connection, Statement, ResultSet) to prevent memory leaks."
  },
  {
    "testId": "jdbc-test-01",
    "question": "What is the correct order of closing JDBC resources?",
    "options": [
      "ResultSet → Statement → Connection",
      "Connection → Statement → ResultSet",
      "Statement → ResultSet → Connection",
      "ResultSet → Connection → Statement"
    ],
    "correctOption": 0,
    "explanation": "The correct order is ResultSet first, then Statement, then Connection. Closing in the reverse order of creation avoids resource leaks."
  },
  {
    "testId": "jdbc-test-01",
    "question": "Which of the following is a valid JDBC connection URL format for MySQL?",
    "options": [
      "jdbc:mysql://localhost:3306/mydb",
      "mysql://localhost:3306/mydb",
      "jdbc:mysql:localhost:3306/mydb",
      "mysql:jdbc://localhost:3306/mydb"
    ],
    "correctOption": 0,
    "explanation": "The correct format is `jdbc:mysql://host:port/database`. Other databases have similar but slightly different formats."
  },
  {
    "testId": "jdbc-test-01",
    "question": "Which exception is thrown when a database connection cannot be established?",
    "options": ["SQLException", "IOException", "ClassNotFoundException", "NullPointerException"],
    "correctOption": 0,
    "explanation": "`SQLException` is thrown when there is a database access error or connection failure."
  },
  {
    "testId": "jdbc-test-01",
    "question": "What is the purpose of `DriverManager.getConnection()`?",
    "options": [
      "To establish a connection to the database",
      "To load the JDBC driver",
      "To execute a query",
      "To close a connection"
    ],
    "correctOption": 0,
    "explanation": "`DriverManager.getConnection()` is the method used to establish a connection to the database using a URL, username, and password."
  },
  {
    "testId": "jdbc-test-01",
    "question": "What is the difference between `executeUpdate()` and `executeQuery()`?",
    "options": [
      "executeQuery() returns ResultSet; executeUpdate() returns int (row count)",
      "executeUpdate() returns ResultSet; executeQuery() returns int",
      "Both return ResultSet",
      "Both return int"
    ],
    "correctOption": 0,
    "explanation": "executeQuery() is for SELECT statements and returns a ResultSet. executeUpdate() is for INSERT, UPDATE, DELETE and returns the number of rows affected."
  },
  {
    "testId": "jdbc-test-01",
    "question": "What is the purpose of `ResultSet.getMetaData()`?",
    "options": [
      "To retrieve metadata about the columns in the ResultSet",
      "To retrieve metadata about the database",
      "To retrieve metadata about the connection",
      "To retrieve metadata about the driver"
    ],
    "correctOption": 0,
    "explanation": "`ResultSet.getMetaData()` returns a ResultSetMetaData object that provides information about the columns (names, types, counts)."
  },
  {
    "testId": "jdbc-test-01",
    "question": "Which JDBC interface is used to execute stored procedures?",
    "options": ["CallableStatement", "PreparedStatement", "Statement", "StoredProcedure"],
    "correctOption": 0,
    "explanation": "CallableStatement is used to execute stored procedures in JDBC."
  },
  {
    "testId": "jdbc-test-01",
    "question": "What is the purpose of `ResultSet.TYPE_SCROLL_INSENSITIVE`?",
    "options": [
      "Allows scrolling in both directions and does not reflect changes in the database",
      "Allows scrolling only forward",
      "Reflects changes in the database",
      "Allows only forward scrolling"
    ],
    "correctOption": 0,
    "explanation": "TYPE_SCROLL_INSENSITIVE allows scrolling in both directions and does not reflect changes made to the database."
  },
  {
    "testId": "jdbc-test-01",
    "question": "Which method is used to get a database connection in a modern Java application?",
    "options": [
      "DriverManager.getConnection() or DataSource.getConnection()",
      "Connection.getDatabase()",
      "Database.getConnection()",
      "SQLManager.getConnection()"
    ],
    "correctOption": 0,
    "explanation": "JDBC provides two main ways: DriverManager (simpler) and DataSource (connection pooling, JNDI)."
  },
  {
    "testId": "jdbc-test-01",
    "question": "What is the purpose of `try-with-resources` in JDBC?",
    "options": [
      "To automatically close resources that implement AutoCloseable",
      "To catch SQL exceptions",
      "To execute queries in a transaction",
      "To prepare statements"
    ],
    "correctOption": 0,
    "explanation": "try-with-resources automatically closes resources (Connection, Statement, ResultSet) that implement AutoCloseable, reducing boilerplate code."
  },
  {
    "testId": "jdbc-test-01",
    "question": "Which method is used to get the number of rows affected by an UPDATE operation?",
    "options": [
      "executeUpdate() returns the row count",
      "getUpdateCount()",
      "getRowsAffected()",
      "getCount()"
    ],
    "correctOption": 0,
    "explanation": "`executeUpdate()` returns an int representing the number of rows affected by the INSERT, UPDATE, or DELETE statement."
  },
  {
    "testId": "jdbc-test-02",
    "question": "What is batch processing in JDBC?",
    "options": [
      "Executing multiple SQL statements together in one batch",
      "Executing one statement at a time",
      "Processing data in batches from a ResultSet",
      "Processing images in bulk"
    ],
    "correctOption": 0,
    "explanation": "Batch processing allows executing multiple SQL statements as a batch, reducing database round trips and improving performance."
  },
  {
    "testId": "jdbc-test-02",
    "question": "Which method is used to add a statement to a batch?",
    "options": ["addBatch()", "addToBatch()", "batchAdd()", "addStatement()"],
    "correctOption": 0,
    "explanation": "`addBatch()` adds a SQL statement to the batch, which is then executed with `executeBatch()`."
  },
  {
    "testId": "jdbc-test-02",
    "question": "What does `executeBatch()` return?",
    "options": [
      "An int[] containing the update counts for each statement in the batch",
      "An int representing total rows affected",
      "A ResultSet",
      "A boolean indicating success"
    ],
    "correctOption": 0,
    "explanation": "`executeBatch()` returns an array of ints, where each value is the row count for the corresponding statement in the batch."
  },
  {
    "testId": "jdbc-test-02",
    "question": "What is the purpose of `connection.setAutoCommit(false)`?",
    "options": [
      "To disable auto-commit and manually control transactions",
      "To enable auto-commit",
      "To close the connection",
      "To create a savepoint"
    ],
    "correctOption": 0,
    "explanation": "Setting auto-commit to false allows manual control of transactions using commit() and rollback()."
  },
  {
    "testId": "jdbc-test-02",
    "question": "Which method is used to commit a transaction in JDBC?",
    "options": ["connection.commit()", "connection.save()", "connection.execute()", "connection.finish()"],
    "correctOption": 0,
    "explanation": "`commit()` permanently saves all changes made in the current transaction."
  },
  {
    "testId": "jdbc-test-02",
    "question": "Which method is used to rollback a transaction?",
    "options": ["connection.rollback()", "connection.undo()", "connection.revert()", "connection.cancel()"],
    "correctOption": 0,
    "explanation": "`rollback()` undoes all changes made in the current transaction and reverts to the previous state."
  },
  {
    "testId": "jdbc-test-02",
    "question": "What is a Savepoint in JDBC?",
    "options": [
      "A marker within a transaction that can be used to rollback to a specific point",
      "A point where the transaction ends",
      "A point where the transaction starts",
      "A database backup point"
    ],
    "correctOption": 0,
    "explanation": "Savepoints allow partial rollback within a transaction, returning to a specific point without rolling back the entire transaction."
  },
  {
    "testId": "jdbc-test-02",
    "question": "Which method is used to create a Savepoint?",
    "options": [
      "connection.setSavepoint()",
      "connection.createSavepoint()",
      "connection.newSavepoint()",
      "connection.savepoint()"
    ],
    "correctOption": 0,
    "explanation": "`connection.setSavepoint()` creates a Savepoint object in the current transaction."
  },
  {
    "testId": "jdbc-test-02",
    "question": "What is a CallableStatement used for?",
    "options": [
      "To execute stored procedures",
      "To execute SELECT queries",
      "To execute batch updates",
      "To create database schemas"
    ],
    "correctOption": 0,
    "explanation": "CallableStatement is specifically designed to execute stored procedures in the database."
  },
  {
    "testId": "jdbc-test-02",
    "question": "Which method is used to register an OUT parameter for a stored procedure?",
    "options": [
      "registerOutParameter()",
      "setOutParameter()",
      "registerOutput()",
      "setOutput()"
    ],
    "correctOption": 0,
    "explanation": "`registerOutParameter()` is used to register an OUT parameter when calling a stored procedure."
  },
  {
    "testId": "jdbc-test-02",
    "question": "Which method is used to get the value of an OUT parameter from a stored procedure?",
    "options": [
      "CallableStatement.getXXX()",
      "CallableStatement.getOut()",
      "CallableStatement.getParameter()",
      "CallableStatement.getOutput()"
    ],
    "correctOption": 0,
    "explanation": "After executing the stored procedure, use the appropriate getXXX() method (e.g., getString(), getInt()) to retrieve OUT parameter values."
  },
  {
    "testId": "jdbc-test-02",
    "question": "What is the purpose of Connection Pooling?",
    "options": [
      "To reuse database connections and improve performance",
      "To create new connections every time",
      "To close all connections",
      "To make the application slower"
    ],
    "correctOption": 0,
    "explanation": "Connection pooling reuses existing connections, reducing the overhead of creating and destroying connections repeatedly."
  },
  {
    "testId": "jdbc-test-02",
    "question": "Which of the following is a popular connection pooling library?",
    "options": ["HikariCP", "Apache DBCP", "C3P0", "All of the above"],
    "correctOption": 3,
    "explanation": "HikariCP, Apache DBCP, and C3P0 are all popular connection pooling libraries for Java."
  },
  {
    "testId": "jdbc-test-02",
    "question": "What is DatabaseMetaData used for?",
    "options": [
      "To retrieve metadata about the database itself",
      "To retrieve metadata about ResultSet columns",
      "To execute queries",
      "To manage transactions"
    ],
    "correctOption": 0,
    "explanation": "DatabaseMetaData provides information about the database, such as driver version, database type, and supported features."
  },
  {
    "testId": "jdbc-test-02",
    "question": "What is ResultSetMetaData used for?",
    "options": [
      "To retrieve metadata about the columns in a ResultSet",
      "To retrieve metadata about the database",
      "To retrieve metadata about the connection",
      "To retrieve metadata about the driver"
    ],
    "correctOption": 0,
    "explanation": "ResultSetMetaData provides information about the columns in a ResultSet, including column names, types, and sizes."
  },
  {
    "testId": "jdbc-test-02",
    "question": "What is a RowSet in JDBC?",
    "options": [
      "A scrollable, updatable ResultSet that can be disconnected",
      "A type of Statement",
      "A type of Connection",
      "A type of Driver"
    ],
    "correctOption": 0,
    "explanation": "RowSet is a wrapper around ResultSet that provides additional features like scrolling, updating, and disconnected operation."
  },
  {
    "testId": "jdbc-test-02",
    "question": "What is the purpose of `ResultSet.isClosed()`?",
    "options": [
      "To check if the ResultSet is closed",
      "To close the ResultSet",
      "To check if the Connection is closed",
      "To check if the Statement is closed"
    ],
    "correctOption": 0,
    "explanation": "`isClosed()` checks if the ResultSet has been closed. It returns true if the ResultSet is closed."
  },
  {
    "testId": "jdbc-test-02",
    "question": "What is a BLOB in JDBC?",
    "options": [
      "Binary Large Object used to store large binary data (images, files) in the database",
      "Text Large Object",
      "A type of database connection",
      "A type of driver"
    ],
    "correctOption": 0,
    "explanation": "BLOB (Binary Large Object) is used to store large binary data like images, audio, and documents in the database."
  },
  {
    "testId": "jdbc-test-02",
    "question": "What is a CLOB in JDBC?",
    "options": [
      "Character Large Object used to store large text data",
      "Binary Large Object",
      "A type of ResultSet",
      "A type of Statement"
    ],
    "correctOption": 0,
    "explanation": "CLOB (Character Large Object) is used to store large text data like XML, JSON, and lengthy documents."
  },
  {
    "testId": "jdbc-test-03",
    "question": "What is a Servlet in Java?",
    "options": [
      "A Java class that handles HTTP requests and responses on the server side",
      "A Java class that runs in the browser",
      "A Java class that connects to the database",
      "A Java class that creates HTML pages"
    ],
    "correctOption": 0,
    "explanation": "Servlets are Java classes that extend the capabilities of servers, primarily used to handle HTTP requests and generate dynamic web content."
  },
  {
    "testId": "jdbc-test-03",
    "question": "What is the Servlet lifecycle order?",
    "options": [
      "init() → service() → destroy()",
      "service() → init() → destroy()",
      "destroy() → init() → service()",
      "init() → destroy() → service()"
    ],
    "correctOption": 0,
    "explanation": "The lifecycle of a servlet is: init() (initialization), service() (handling requests), destroy() (cleanup)."
  },
  {
    "testId": "jdbc-test-03",
    "question": "Which method is called when a request is sent to a Servlet?",
    "options": ["service()", "doGet()", "doPost()", "handleRequest()"],
    "correctOption": 0,
    "explanation": "The `service()` method receives requests and delegates to doGet(), doPost(), etc., based on the HTTP method."
  },
  {
    "testId": "jdbc-test-03",
    "question": "What is the difference between `doGet()` and `doPost()`?",
    "options": [
      "doGet() sends data via URL; doPost() sends data in the request body",
      "doPost() sends data via URL; doGet() sends data in the body",
      "Both send data via URL",
      "Both send data in the body"
    ],
    "correctOption": 0,
    "explanation": "doGet() appends parameters to the URL (visible), while doPost() sends parameters in the HTTP request body (hidden)."
  },
  {
    "testId": "jdbc-test-03",
    "question": "What is the purpose of `HttpServletRequest`?",
    "options": [
      "To provide access to client request data (parameters, headers, session)",
      "To send a response to the client",
      "To create a new session",
      "To invalidate a session"
    ],
    "correctOption": 0,
    "explanation": "HttpServletRequest represents the client request and provides methods to access request parameters, headers, and session information."
  },
  {
    "testId": "jdbc-test-03",
    "question": "What is the purpose of `HttpServletResponse`?",
    "options": [
      "To send a response back to the client",
      "To read request data",
      "To create a new session",
      "To manage cookies"
    ],
    "correctOption": 0,
    "explanation": "HttpServletResponse represents the server response and provides methods to set headers, status codes, and write response content."
  },
  {
    "testId": "jdbc-test-03",
    "question": "What is a `ServletContext`?",
    "options": [
      "A shared object that provides application-wide information",
      "A per-request object",
      "A per-session object",
      "A per-user object"
    ],
    "correctOption": 0,
    "explanation": "ServletContext is a shared object that provides application-wide information, such as initialization parameters and logging."
  },
  {
    "testId": "jdbc-test-03",
    "question": "What is a `HttpSession`?",
    "options": [
      "An object that maintains state across multiple requests from the same user",
      "An object for database connections",
      "An object for request handling",
      "An object for response writing"
    ],
    "correctOption": 0,
    "explanation": "HttpSession maintains state across multiple requests for the same user, commonly used for authentication and shopping carts."
  },
  {
    "testId": "jdbc-test-03",
    "question": "How do you get an existing session or create a new one?",
    "options": [
      "request.getSession()",
      "request.getSession(true)",
      "request.getSession(false)",
      "Both A and B are valid"
    ],
    "correctOption": 3,
    "explanation": "`getSession()` returns the current session or creates a new one. `getSession(true)` does the same. `getSession(false)` returns null if no session exists."
  },
  {
    "testId": "jdbc-test-03",
    "question": "What is a JSP (JavaServer Pages)?",
    "options": [
      "A technology for creating dynamic web content with HTML and Java",
      "A server-side Java class",
      "A database connection",
      "A JavaScript framework"
    ],
    "correctOption": 0,
    "explanation": "JSP is a technology that allows embedding Java code in HTML pages to generate dynamic web content."
  },
  {
    "testId": "jdbc-test-03",
    "question": "Which JSP directive is used to import packages?",
    "options": ["<%@ page import=\"...\" %>", "<%@ include=\"...\" %>", "<%@ taglib=\"...\" %>", "<%! ... %>"],
    "correctOption": 0,
    "explanation": "`<%@ page import=\"...\" %>` is used to import Java packages in a JSP page."
  },
  {
    "testId": "jdbc-test-03",
    "question": "What is the difference between JSP declaration (`<%!`) and scriptlet (`<%`)?",
    "options": [
      "Declaration defines variables/methods at class level; scriptlet contains code executed in the service method",
      "Scriptlet defines class-level methods; declaration contains service method code",
      "Both are the same",
      "Declaration is for imports; scriptlet is for HTML"
    ],
    "correctOption": 0,
    "explanation": "Declarations (`<%!`) define members of the generated servlet class. Scriptlets (`<%`) contain code executed in the _jspService() method."
  },
  {
    "testId": "jdbc-test-03",
    "question": "What is the JSTL (JSP Standard Tag Library)?",
    "options": [
      "A collection of reusable JSP tags for common tasks like iteration and formatting",
      "A JavaScript library",
      "A CSS framework",
      "A database library"
    ],
    "correctOption": 0,
    "explanation": "JSTL provides standard tags for common tasks like conditionals, iteration, formatting, and XML handling in JSP pages."
  },
  {
    "testId": "jdbc-test-03",
    "question": "What is the purpose of `<c:forEach>` in JSTL?",
    "options": [
      "To iterate over a collection",
      "To perform an if-else condition",
      "To format dates",
      "To import a page"
    ],
    "correctOption": 0,
    "explanation": "`<c:forEach>` is used to iterate over collections, arrays, or ranges in JSP pages."
  },
  {
    "testId": "jdbc-test-03",
    "question": "What is a Filter in Java Servlet?",
    "options": [
      "An object that intercepts requests and responses to perform pre/post processing",
      "A class that handles database connections",
      "A type of servlet",
      "A JSP component"
    ],
    "correctOption": 0,
    "explanation": "Filters intercept requests before they reach the servlet and responses after they leave, used for logging, authentication, and transformation."
  },
  {
    "testId": "jdbc-test-03",
    "question": "What is the purpose of a Listener in Servlets?",
    "options": [
      "To listen to events like session creation, context initialization, and attribute changes",
      "To handle HTTP requests",
      "To manage database connections",
      "To render JSP pages"
    ],
    "correctOption": 0,
    "explanation": "Listeners observe and respond to lifecycle events such as context initialization, session creation, and attribute changes."
  },
  {
    "testId": "jdbc-test-03",
    "question": "What is the MVC design pattern?",
    "options": [
      "Model-View-Controller, which separates data, presentation, and business logic",
      "Model-View-Controller, a database pattern",
      "Model-View-Controller, a deployment pattern",
      "Model-View-Controller, a network pattern"
    ],
    "correctOption": 0,
    "explanation": "MVC separates the application into Model (data/business logic), View (presentation), and Controller (request handling) components."
  },
  {
    "testId": "jdbc-test-03",
    "question": "What is the DAO (Data Access Object) design pattern?",
    "options": [
      "A pattern that abstracts database access and separates it from business logic",
      "A pattern for UI design",
      "A pattern for logging",
      "A pattern for error handling"
    ],
    "correctOption": 0,
    "explanation": "DAO abstracts database operations, providing a clean interface for data access while hiding implementation details."
  },
  {
    "testId": "jdbc-test-03",
    "question": "What is the DTO (Data Transfer Object) design pattern?",
    "options": [
      "A pattern that carries data between application layers without business logic",
      "A pattern for UI components",
      "A pattern for logging",
      "A pattern for security"
    ],
    "correctOption": 0,
    "explanation": "DTO is a simple object used to transfer data between layers, often with only getters, setters, and no business logic."
  },
  {
    "testId": "jdbc-test-03",
    "question": "What is the Singleton design pattern?",
    "options": [
      "Ensures a class has only one instance and provides a global access point",
      "Creates multiple instances of a class",
      "Creates a prototype for objects",
      "Creates a factory for objects"
    ],
    "correctOption": 0,
    "explanation": "Singleton restricts the instantiation of a class to a single instance, often used for connection pools and logging."
  },
  {
    "testId": "jdbc-test-03",
    "question": "What is the Factory design pattern?",
    "options": [
      "Creates objects without exposing the instantiation logic to the client",
      "Ensures only one instance of a class",
      "Defines a family of algorithms",
      "Decorates objects with additional functionality"
    ],
    "correctOption": 0,
    "explanation": "Factory pattern provides an interface for creating objects but allows subclasses to decide which class to instantiate."
  },
  {
    "testId": "jdbc-test-03",
    "question": "What is the purpose of a `web.xml` file?",
    "options": [
      "To configure servlets, filters, listeners, and URL mappings for a web application",
      "To configure database connections",
      "To configure JSP pages",
      "To configure logging"
    ],
    "correctOption": 0,
    "explanation": "`web.xml` is the deployment descriptor for Java web applications, defining servlet mappings, filters, listeners, and initialization parameters."
  },
  {
    "testId": "jdbc-test-03",
    "question": "What is the `@WebServlet` annotation?",
    "options": [
      "An annotation to declare a servlet and its URL mapping",
      "An annotation to declare a filter",
      "An annotation to declare a listener",
      "An annotation to declare a JSP"
    ],
    "correctOption": 0,
    "explanation": "`@WebServlet` is used to define a servlet and its URL patterns without requiring `web.xml` configuration."
  },
  {
    "testId": "jdbc-test-03",
    "question": "What is the purpose of `request.setAttribute()`?",
    "options": [
      "To store data in the request scope for use in JSP or forwarding",
      "To store data in the session",
      "To store data in the application",
      "To store data in the database"
    ],
    "correctOption": 0,
    "explanation": "`setAttribute()` stores data in the request scope, accessible from forwarded JSP pages or other servlets."
  },
  {
    "testId": "jdbc-test-03",
    "question": "What is the difference between `RequestDispatcher.forward()` and `sendRedirect()`?",
    "options": [
      "forward() is server-side; redirect() is client-side and changes the URL",
      "redirect() is server-side; forward() is client-side",
      "Both are server-side",
      "Both are client-side"
    ],
    "correctOption": 0,
    "explanation": "forward() transfers control to another resource on the server without changing the URL. sendRedirect() sends a response to the client to navigate to a new URL."
  },
  {
    "testId": "jdbc-test-03",
    "question": "Which of the following is a valid session management technique in Servlets?",
    "options": ["HttpSession", "URL rewriting", "Hidden form fields", "All of the above"],
    "correctOption": 3,
    "explanation": "Session management can be done using HttpSession (cookies), URL rewriting, and hidden form fields."
  },
  {
    "testId": "jdbc-test-03",
    "question": "What is the purpose of `response.setContentType()`?",
    "options": [
      "To set the MIME type of the response (e.g., text/html, application/json)",
      "To set the response status code",
      "To set the response headers",
      "To set the character encoding"
    ],
    "correctOption": 0,
    "explanation": "`setContentType()` specifies the content type of the response, telling the browser how to interpret the response data."
  },
  {
    "testId": "jdbc-test-03",
    "question": "What is a WAR file in Java web applications?",
    "options": [
      "Web Application Archive, a packaged web application",
      "Web Archive Resource",
      "Wide Area Resource",
      "Web Application Resource"
    ],
    "correctOption": 0,
    "explanation": "WAR (Web Application Archive) is a JAR file that contains servlets, JSPs, HTML, and other resources for a web application."
  }
];

let questionsFile = fs.readFileSync('src/data/questions.js', 'utf8');
const endBraceIndexQ = questionsFile.lastIndexOf('];');

if (endBraceIndexQ !== -1 && !questionsFile.includes('"jdbc-test-01"')) {
  const injectionString = ',\n' + questions.map(q => JSON.stringify(q, null, 2)).join(',\n') + '\n];';
  questionsFile = questionsFile.substring(0, endBraceIndexQ) + injectionString;
  fs.writeFileSync('src/data/questions.js', questionsFile);
  console.log('Successfully injected jdbc questions into questions.js array!');
} else {
  console.log('Questions already exist or questions.js is not an array ending in ];');
}
