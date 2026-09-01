const fs = require('fs');

const questions = [
  {
    "testId": "java-mock-01",
    "question": "Which of the following is the correct signature of the main method in Java?",
    "options": [
      "public static void main(String[] args)",
      "public void main(String[] args)",
      "static public void main(String[] args)",
      "Both A and C are valid"
    ],
    "correctOption": 3,
    "explanation": "The main method must be public, static, void, and accept String[] args. Both A and C are valid signatures."
  },
  {
    "testId": "java-mock-01",
    "question": "What is the size of a `double` data type in Java?",
    "options": ["32 bits", "64 bits", "128 bits", "16 bits"],
    "correctOption": 1,
    "explanation": "A `double` is a 64-bit IEEE 754 floating-point number."
  },
  {
    "testId": "java-mock-01",
    "question": "Which of the following is NOT an OOP principle?",
    "options": ["Encapsulation", "Inheritance", "Polymorphism", "Compilation"],
    "correctOption": 3,
    "explanation": "The four main OOP principles are Encapsulation, Inheritance, Polymorphism, and Abstraction. Compilation is not an OOP principle."
  },
  {
    "testId": "java-mock-01",
    "question": "What is the output of `System.out.println(10 / 3)`?",
    "options": ["3.33", "3", "3.0", "4"],
    "correctOption": 1,
    "explanation": "Integer division truncates the decimal part. 10 / 3 = 3."
  },
  {
    "testId": "java-mock-01",
    "question": "Which keyword is used to inherit a class in Java?",
    "options": ["extends", "implements", "inherits", "super"],
    "correctOption": 0,
    "explanation": "`extends` is used for class inheritance. `implements` is for interfaces."
  },
  {
    "testId": "java-mock-01",
    "question": "What is the default value of a `boolean` in Java?",
    "options": ["true", "false", "null", "0"],
    "correctOption": 1,
    "explanation": "The default value of a boolean is 'false'."
  },
  {
    "testId": "java-mock-01",
    "question": "What is method overloading?",
    "options": [
      "Multiple methods with the same name but different parameters",
      "Multiple methods with the same name and parameters",
      "A method that overrides a superclass method",
      "A method that is static"
    ],
    "correctOption": 0,
    "explanation": "Method overloading allows multiple methods with the same name but different parameter lists."
  },
  {
    "testId": "java-mock-01",
    "question": "Which access modifier allows access only within the same class?",
    "options": ["private", "protected", "public", "default"],
    "correctOption": 0,
    "explanation": "The `private` modifier restricts access to only within the same class."
  },
  {
    "testId": "java-mock-01",
    "question": "What is the output of `System.out.println(\"Hello\" + 5 + 3)`?",
    "options": ["Hello53", "Hello8", "Hello5 3", "Error"],
    "correctOption": 0,
    "explanation": "String concatenation works left to right: \"Hello\" + 5 = \"Hello5\", then + 3 = \"Hello53\"."
  },
  {
    "testId": "java-mock-01",
    "question": "What is the purpose of the `this` keyword?",
    "options": [
      "To refer to the current object instance",
      "To refer to the parent class",
      "To call a static method",
      "To create a new object"
    ],
    "correctOption": 0,
    "explanation": "`this` refers to the current object instance, used to differentiate instance variables from parameters."
  },
  {
    "testId": "java-mock-01",
    "question": "Which of the following is a valid Java identifier?",
    "options": ["_myVar", "2var", "my-var", "my var"],
    "correctOption": 0,
    "explanation": "Identifiers can start with a letter, underscore (_), or dollar sign ($). They cannot start with a number or contain spaces."
  },
  {
    "testId": "java-mock-01",
    "question": "What is a constructor in Java?",
    "options": [
      "A special method that initializes objects when they are created",
      "A method that destroys objects",
      "A method that is called at the end of the program",
      "A method that is static"
    ],
    "correctOption": 0,
    "explanation": "Constructors are special methods called when an object is instantiated to initialize its state."
  },
  {
    "testId": "java-mock-01",
    "question": "What is the difference between `==` and `.equals()` for String objects?",
    "options": [
      "== compares references; .equals() compares content",
      ".equals() compares references; == compares content",
      "Both compare references",
      "Both compare content"
    ],
    "correctOption": 0,
    "explanation": "For objects, `==` checks if both variables refer to the same object. `.equals()` compares the content."
  },
  {
    "testId": "java-mock-01",
    "question": "Which of the following is a primitive data type?",
    "options": ["int", "Integer", "String", "Object"],
    "correctOption": 0,
    "explanation": "int is a primitive type. Integer, String, and Object are reference types."
  },
  {
    "testId": "java-mock-01",
    "question": "What is the output of `System.out.println(5 % 2)`?",
    "options": ["1", "2", "2.5", "0"],
    "correctOption": 0,
    "explanation": "The modulus operator returns the remainder: 5 % 2 = 1."
  },
  {
    "testId": "java-mock-01",
    "question": "Which of the following is NOT a Java keyword?",
    "options": ["final", "static", "enum", "global"],
    "correctOption": 3,
    "explanation": "'global' is not a Java keyword. final, static, and enum are valid keywords."
  },
  {
    "testId": "java-mock-01",
    "question": "What is the default value of a `String` reference?",
    "options": ["\"\"", "null", "undefined", "0"],
    "correctOption": 1,
    "explanation": "Reference types default to `null` if not explicitly initialized."
  },
  {
    "testId": "java-mock-01",
    "question": "What does the `final` keyword mean for a variable?",
    "options": [
      "The variable cannot be reassigned",
      "The variable can be changed at any time",
      "The variable is static",
      "The variable is private"
    ],
    "correctOption": 0,
    "explanation": "A final variable is a constant that cannot be reassigned after initialization."
  },
  {
    "testId": "java-mock-01",
    "question": "Which of the following is a valid way to create an array in Java?",
    "options": ["int[] arr = new int[5];", "int arr[] = new int[5];", "int arr[5];", "Both A and B"],
    "correctOption": 3,
    "explanation": "Both `int[] arr` and `int arr[]` are valid syntax for declaring arrays."
  },
  {
    "testId": "java-mock-01",
    "question": "What is the difference between a `while` loop and a `do-while` loop?",
    "options": [
      "do-while executes at least once; while checks condition first",
      "while executes at least once; do-while checks condition first",
      "Both execute at least once",
      "Both check condition first"
    ],
    "correctOption": 0,
    "explanation": "`do-while` executes the body first then checks the condition, guaranteeing at least one execution."
  },
  {
    "testId": "java-mock-01",
    "question": "Which package is automatically imported in every Java file?",
    "options": ["java.lang", "java.util", "java.io", "java.math"],
    "correctOption": 0,
    "explanation": "The `java.lang` package is automatically imported. Classes like String, System, and Math are in this package."
  },
  {
    "testId": "java-mock-02",
    "question": "Is a String in Java mutable or immutable?",
    "options": ["Immutable", "Mutable", "Partially mutable", "Depends on version"],
    "correctOption": 0,
    "explanation": "String objects are immutable in Java, meaning their state cannot be changed after creation."
  },
  {
    "testId": "java-mock-02",
    "question": "Which class is used for mutable strings in a thread-safe manner?",
    "options": ["String", "StringBuffer", "StringBuilder", "StringWriter"],
    "correctOption": 1,
    "explanation": "StringBuffer is thread-safe (synchronized) and mutable. StringBuilder is not thread-safe but faster."
  },
  {
    "testId": "java-mock-02",
    "question": "What is the output of `\"abc\".substring(1, 3)`?",
    "options": ["bc", "abc", "ab", "b"],
    "correctOption": 0,
    "explanation": "substring(1, 3) returns characters from index 1 to 2 (3 is exclusive). 'b'(1) + 'c'(2) = 'bc'."
  },
  {
    "testId": "java-mock-02",
    "question": "Which method is used to convert a String to a char array?",
    "options": ["toCharArray()", "getChars()", "chars()", "toArray()"],
    "correctOption": 0,
    "explanation": "`String.toCharArray()` converts a string to a char array."
  },
  {
    "testId": "java-mock-02",
    "question": "Which List implementation is best for frequent random access?",
    "options": ["ArrayList", "LinkedList", "Vector", "Stack"],
    "correctOption": 0,
    "explanation": "ArrayList provides O(1) random access, making it best for frequent get/set operations."
  },
  {
    "testId": "java-mock-02",
    "question": "Which Set implementation maintains insertion order?",
    "options": ["HashSet", "LinkedHashSet", "TreeSet", "EnumSet"],
    "correctOption": 1,
    "explanation": "LinkedHashSet maintains insertion order while providing HashSet performance."
  },
  {
    "testId": "java-mock-02",
    "question": "Which Map implementation maintains sorted order by keys?",
    "options": ["HashMap", "LinkedHashMap", "TreeMap", "Hashtable"],
    "correctOption": 2,
    "explanation": "TreeMap maintains keys in sorted order (natural or custom comparator)."
  },
  {
    "testId": "java-mock-02",
    "question": "What is the difference between HashMap and Hashtable?",
    "options": [
      "HashMap is not synchronized; Hashtable is synchronized",
      "Hashtable allows null keys; HashMap does not",
      "HashMap is synchronized; Hashtable is not",
      "Both are synchronized"
    ],
    "correctOption": 0,
    "explanation": "HashMap is not synchronized and allows one null key. Hashtable is synchronized and does not allow null keys."
  },
  {
    "testId": "java-mock-02",
    "question": "Which collection does NOT allow duplicate elements?",
    "options": ["ArrayList", "HashSet", "LinkedList", "HashMap"],
    "correctOption": 1,
    "explanation": "HashSet (and Set interface) does not allow duplicate elements."
  },
  {
    "testId": "java-mock-02",
    "question": "What is the default initial capacity of an ArrayList?",
    "options": ["10", "16", "8", "32"],
    "correctOption": 0,
    "explanation": "The default initial capacity of an ArrayList is 10 elements."
  },
  {
    "testId": "java-mock-02",
    "question": "What is the difference between `checked` and `unchecked` exceptions?",
    "options": [
      "Checked exceptions are checked at compile-time; unchecked at runtime",
      "Unchecked are checked at compile-time; checked at runtime",
      "Both are checked at compile-time",
      "Both are checked at runtime"
    ],
    "correctOption": 0,
    "explanation": "Checked exceptions (e.g., IOException) are checked by the compiler. Unchecked exceptions (e.g., NullPointerException) occur at runtime."
  },
  {
    "testId": "java-mock-02",
    "question": "What is the purpose of the `finally` block?",
    "options": [
      "To execute code regardless of whether an exception occurs",
      "To catch exceptions",
      "To throw exceptions",
      "To define a custom exception"
    ],
    "correctOption": 0,
    "explanation": "The `finally` block always executes, whether an exception occurs or not, typically used for cleanup."
  },
  {
    "testId": "java-mock-02",
    "question": "Which keyword is used to manually throw an exception?",
    "options": ["throw", "throws", "try", "catch"],
    "correctOption": 0,
    "explanation": "The `throw` keyword is used to explicitly throw an exception. `throws` is used in method declarations."
  },
  {
    "testId": "java-mock-02",
    "question": "What is a thread in Java?",
    "options": [
      "A lightweight process that runs concurrently with others",
      "A method that runs sequentially",
      "A class that handles exceptions",
      "A type of memory management"
    ],
    "correctOption": 0,
    "explanation": "A thread is the smallest unit of execution that can run concurrently with other threads."
  },
  {
    "testId": "java-mock-02",
    "question": "Which two ways can you create a thread in Java?",
    "options": [
      "Extending Thread class or implementing Runnable interface",
      "Extending Runnable or implementing Thread",
      "Only extending Thread",
      "Only implementing Runnable"
    ],
    "correctOption": 0,
    "explanation": "Threads can be created by extending the Thread class or implementing the Runnable interface."
  },
  {
    "testId": "java-mock-02",
    "question": "What is the purpose of the `synchronized` keyword?",
    "options": [
      "To ensure only one thread can access the resource at a time",
      "To make a method faster",
      "To handle exceptions",
      "To create new threads"
    ],
    "correctOption": 0,
    "explanation": "The `synchronized` keyword ensures mutual exclusion, allowing only one thread to access a block or method at a time."
  },
  {
    "testId": "java-mock-02",
    "question": "What is a lambda expression in Java?",
    "options": [
      "An anonymous function that can be passed as a parameter",
      "A class that implements an interface",
      "A method that returns a value",
      "A type of variable"
    ],
    "correctOption": 0,
    "explanation": "Lambda expressions are anonymous functions used to implement functional interfaces concisely."
  },
  {
    "testId": "java-mock-02",
    "question": "Which Stream API operation is used to transform each element?",
    "options": ["map()", "filter()", "reduce()", "forEach()"],
    "correctOption": 0,
    "explanation": "`map()` applies a function to each element and returns a new stream of transformed elements."
  },
  {
    "testId": "java-mock-02",
    "question": "Which Stream operation filters elements based on a condition?",
    "options": ["filter()", "map()", "reduce()", "collect()"],
    "correctOption": 0,
    "explanation": "`filter()` returns a new stream containing only elements that satisfy the given predicate."
  },
  {
    "testId": "java-mock-03",
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
    "testId": "java-mock-03",
    "question": "Which method is used to execute a SELECT query in JDBC?",
    "options": ["executeQuery()", "executeUpdate()", "execute()", "executeSelect()"],
    "correctOption": 0,
    "explanation": "`executeQuery()` is used to execute SELECT queries and returns a ResultSet."
  },
  {
    "testId": "java-mock-03",
    "question": "What is the difference between Statement and PreparedStatement?",
    "options": [
      "PreparedStatement is precompiled and prevents SQL injection; Statement is not",
      "Statement is precompiled; PreparedStatement is not",
      "Both are precompiled",
      "Neither is precompiled"
    ],
    "correctOption": 0,
    "explanation": "PreparedStatement is precompiled, offers better performance, and prevents SQL injection using parameterized queries."
  },
  {
    "testId": "java-mock-03",
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
    "testId": "java-mock-03",
    "question": "Which method is used to commit a transaction in JDBC?",
    "options": ["connection.commit()", "connection.save()", "connection.execute()", "connection.finish()"],
    "correctOption": 0,
    "explanation": "`commit()` permanently saves all changes made in the current transaction."
  },
  {
    "testId": "java-mock-03",
    "question": "What is a Servlet in Java?",
    "options": [
      "A Java class that handles HTTP requests and responses on the server side",
      "A Java class that runs in the browser",
      "A Java class that connects to the database",
      "A Java class that creates HTML pages"
    ],
    "correctOption": 0,
    "explanation": "Servlets are Java classes that handle HTTP requests and generate dynamic web content on the server."
  },
  {
    "testId": "java-mock-03",
    "question": "What is the Servlet lifecycle order?",
    "options": [
      "init() → service() → destroy()",
      "service() → init() → destroy()",
      "destroy() → init() → service()",
      "init() → destroy() → service()"
    ],
    "correctOption": 0,
    "explanation": "The lifecycle is: init() (initialization), service() (handling requests), destroy() (cleanup)."
  },
  {
    "testId": "java-mock-03",
    "question": "Which method is called when a GET request is sent to a Servlet?",
    "options": ["doGet()", "doPost()", "service()", "handleRequest()"],
    "correctOption": 2,
    "explanation": "The `service()` method receives requests and delegates to doGet() or doPost() based on the HTTP method."
  },
  {
    "testId": "java-mock-03",
    "question": "What is the purpose of `HttpSession`?",
    "options": [
      "To maintain state across multiple requests from the same user",
      "To store database connections",
      "To handle file uploads",
      "To send responses"
    ],
    "correctOption": 0,
    "explanation": "HttpSession maintains user state across multiple requests, commonly used for authentication and shopping carts."
  },
  {
    "testId": "java-mock-03",
    "question": "How do you get an existing session in a Servlet?",
    "options": [
      "request.getSession(false)",
      "request.getSession(true)",
      "request.getSession()",
      "Both A and C are valid"
    ],
    "correctOption": 3,
    "explanation": "`getSession(false)` returns null if no session exists. `getSession()` or `getSession(true)` creates a new session if none exists."
  },
  {
    "testId": "java-mock-03",
    "question": "What is a JSP?",
    "options": [
      "A technology for creating dynamic web content with HTML and Java",
      "A server-side Java class",
      "A database connection",
      "A JavaScript framework"
    ],
    "correctOption": 0,
    "explanation": "JSP allows embedding Java code in HTML pages to generate dynamic web content."
  },
  {
    "testId": "java-mock-03",
    "question": "What is the JSTL (JSP Standard Tag Library)?",
    "options": [
      "A collection of reusable JSP tags for common tasks like iteration and formatting",
      "A JavaScript library",
      "A CSS framework",
      "A database library"
    ],
    "correctOption": 0,
    "explanation": "JSTL provides standard tags for common tasks like conditionals, iteration, and formatting in JSP pages."
  },
  {
    "testId": "java-mock-03",
    "question": "What is a Filter in Java Servlet?",
    "options": [
      "An object that intercepts requests and responses to perform pre/post processing",
      "A class that handles database connections",
      "A type of servlet",
      "A JSP component"
    ],
    "correctOption": 0,
    "explanation": "Filters intercept requests before they reach the servlet and responses after they leave, used for logging and authentication."
  },
  {
    "testId": "java-mock-03",
    "question": "What is the MVC design pattern?",
    "options": [
      "Model-View-Controller, which separates data, presentation, and business logic",
      "Model-View-Controller, a database pattern",
      "Model-View-Controller, a deployment pattern",
      "Model-View-Controller, a network pattern"
    ],
    "correctOption": 0,
    "explanation": "MVC separates the application into Model (data/business logic), View (presentation), and Controller (request handling)."
  },
  {
    "testId": "java-mock-03",
    "question": "What is the DAO (Data Access Object) pattern?",
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
    "testId": "java-mock-03",
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
    "testId": "java-mock-03",
    "question": "What is a WAR file in Java web applications?",
    "options": [
      "Web Application Archive, a packaged web application",
      "Web Archive Resource",
      "Wide Area Resource",
      "Web Application Resource"
    ],
    "correctOption": 0,
    "explanation": "WAR (Web Application Archive) is a JAR file that contains servlets, JSPs, HTML, and other resources for a web application."
  },
  {
    "testId": "java-mock-03",
    "question": "What is the purpose of `web.xml`?",
    "options": [
      "To configure servlets, filters, listeners, and URL mappings for a web application",
      "To configure database connections",
      "To configure JSP pages",
      "To configure logging"
    ],
    "correctOption": 0,
    "explanation": "`web.xml` is the deployment descriptor for Java web applications, defining servlet mappings, filters, and initialization parameters."
  },
  {
    "testId": "java-mock-03",
    "question": "What is generics in Java?",
    "options": [
      "Type safety mechanism that allows classes to operate on different types",
      "A generic class that can be instantiated",
      "A type of collection",
      "A type of interface"
    ],
    "correctOption": 0,
    "explanation": "Generics enable classes, interfaces, and methods to operate on parameterized types, providing compile-time type safety."
  },
  {
    "testId": "java-mock-03",
    "question": "What is the purpose of the `@Override` annotation?",
    "options": [
      "To indicate a method is overriding a superclass method",
      "To indicate a method is abstract",
      "To make a method final",
      "To mark a method as deprecated"
    ],
    "correctOption": 0,
    "explanation": "`@Override` tells the compiler that the annotated method is intended to override a method from the superclass."
  },
  {
    "testId": "java-mock-03",
    "question": "What is a CallableStatement used for in JDBC?",
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
    "testId": "java-mock-03",
    "question": "What is the purpose of connection pooling?",
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
    "testId": "java-mock-03",
    "question": "What is the difference between `RequestDispatcher.forward()` and `sendRedirect()`?",
    "options": [
      "forward() is server-side; redirect() is client-side and changes the URL",
      "redirect() is server-side; forward() is client-side",
      "Both are server-side",
      "Both are client-side"
    ],
    "correctOption": 0,
    "explanation": "forward() transfers control to another resource on the server without changing the URL. sendRedirect() sends a response to navigate to a new URL."
  },
  {
    "testId": "java-mock-03",
    "question": "Which of the following is a valid session management technique?",
    "options": ["HttpSession", "URL rewriting", "Hidden form fields", "All of the above"],
    "correctOption": 3,
    "explanation": "Session management can be done using HttpSession (cookies), URL rewriting, and hidden form fields."
  },
  {
    "testId": "java-mock-03",
    "question": "What is a DTO (Data Transfer Object)?",
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
    "testId": "java-mock-03",
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
    "testId": "java-mock-03",
    "question": "Which method in ResultSet is used to get the value of a column by name?",
    "options": [
      "getString(columnName)",
      "getValue(columnName)",
      "get(columnName)",
      "getByName(columnName)"
    ],
    "correctOption": 0,
    "explanation": "ResultSet provides getXXX() methods (e.g., getString(), getInt()) that accept column names as parameters."
  },
  {
    "testId": "java-mock-03",
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
    "testId": "java-mock-03",
    "question": "What is the `@WebServlet` annotation used for?",
    "options": [
      "To declare a servlet and its URL mapping",
      "To declare a filter",
      "To declare a listener",
      "To declare a JSP"
    ],
    "correctOption": 0,
    "explanation": "`@WebServlet` is used to define a servlet and its URL patterns without requiring `web.xml` configuration."
  },
  {
    "testId": "java-mock-03",
    "question": "What is a batch update in JDBC?",
    "options": [
      "Executing multiple SQL statements together in one batch",
      "Executing one statement at a time",
      "Processing data in batches from a ResultSet",
      "Processing images in bulk"
    ],
    "correctOption": 0,
    "explanation": "Batch processing allows executing multiple SQL statements as a batch, reducing database round trips."
  },
  {
    "testId": "java-mock-03",
    "question": "What does `executeBatch()` return in JDBC?",
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
    "testId": "java-mock-03",
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
    "testId": "java-mock-03",
    "question": "What is a Listener in Servlets?",
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
    "testId": "java-mock-03",
    "question": "Which of the following is a valid JDBC URL format for MySQL?",
    "options": [
      "jdbc:mysql://localhost:3306/mydb",
      "mysql://localhost:3306/mydb",
      "jdbc:mysql:localhost:3306/mydb",
      "mysql:jdbc://localhost:3306/mydb"
    ],
    "correctOption": 0,
    "explanation": "The correct format is `jdbc:mysql://host:port/database`."
  },
  {
    "testId": "java-mock-03",
    "question": "What is the difference between `prepareStatement()` and `createStatement()`?",
    "options": [
      "prepareStatement() is precompiled and prevents SQL injection; createStatement() is not",
      "createStatement() is precompiled; prepareStatement() is not",
      "Both are precompiled",
      "Neither is precompiled"
    ],
    "correctOption": 0,
    "explanation": "prepareStatement() returns a PreparedStatement that is precompiled and prevents SQL injection."
  },
  {
    "testId": "java-mock-03",
    "question": "What is a Savepoint in JDBC?",
    "options": [
      "A marker within a transaction that can be used to rollback to a specific point",
      "A point where the transaction ends",
      "A point where the transaction starts",
      "A database backup point"
    ],
    "correctOption": 0,
    "explanation": "Savepoints allow partial rollback within a transaction, returning to a specific point without rolling back the entire transaction."
  }
];

let questionsFile = fs.readFileSync('src/data/questions.js', 'utf8');
const endBraceIndexQ = questionsFile.lastIndexOf('];');

if (endBraceIndexQ !== -1 && !questionsFile.includes('"java-mock-01"')) {
  const injectionString = ',\n' + questions.map(q => JSON.stringify(q, null, 2)).join(',\n') + '\n];';
  questionsFile = questionsFile.substring(0, endBraceIndexQ) + injectionString;
  fs.writeFileSync('src/data/questions.js', questionsFile);
  console.log('Successfully injected java mock questions into questions.js array!');
} else {
  console.log('Questions already exist or questions.js is not an array ending in ];');
}
