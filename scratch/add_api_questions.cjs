const fs = require('fs');
const path = require('path');

const newQuestions = [
  {
    "testId": "api-test-01",
    "question": "What does API stand for?",
    "options": [
      "Application Programming Interface",
      "Advanced Programming Integration",
      "Application Protocol Interface",
      "Automated Program Interface"
    ],
    "correctOption": 0,
    "explanation": "API stands for Application Programming Interface, which allows different software applications to communicate with each other."
  },
  {
    "testId": "api-test-01",
    "question": "Which of the following is a valid HTTP method?",
    "options": ["FETCH", "SEND", "GET", "RECEIVE"],
    "correctOption": 2,
    "explanation": "GET is a standard HTTP method used to retrieve data from a server. FETCH, SEND, and RECEIVE are not standard HTTP methods."
  },
  {
    "testId": "api-test-01",
    "question": "What is the primary purpose of API testing?",
    "options": [
      "To test the user interface of the application",
      "To verify the functionality, reliability, and security of APIs",
      "To test the database schema",
      "To test the network infrastructure"
    ],
    "correctOption": 1,
    "explanation": "API testing focuses on verifying that APIs work correctly, including functionality, performance, security, and data validation."
  },
  {
    "testId": "api-test-01",
    "question": "What is a REST API?",
    "options": [
      "An API that follows Representational State Transfer principles",
      "An API that uses only SOAP protocols",
      "An API that requires no authentication",
      "An API that only works with XML data"
    ],
    "correctOption": 0,
    "explanation": "REST (Representational State Transfer) is an architectural style for designing networked applications, using standard HTTP methods and stateless communication."
  },
  {
    "testId": "api-test-01",
    "question": "What is the difference between SOAP and REST?",
    "options": [
      "SOAP is a protocol; REST is an architectural style",
      "REST is a protocol; SOAP is an architectural style",
      "Both are protocols",
      "Both are architectural styles"
    ],
    "correctOption": 0,
    "explanation": "SOAP (Simple Object Access Protocol) is a protocol with strict standards. REST (Representational State Transfer) is an architectural style that is more flexible."
  },
  {
    "testId": "api-test-01",
    "question": "Which status code indicates a successful request?",
    "options": ["200", "300", "400", "500"],
    "correctOption": 0,
    "explanation": "Status code 200 (OK) indicates that the request was successful. 300s are redirections, 400s are client errors, and 500s are server errors."
  },
  {
    "testId": "api-test-01",
    "question": "What is a JSON payload in API requests?",
    "options": [
      "The data sent in the body of an HTTP request or response formatted as JSON",
      "The URL of the API endpoint",
      "The HTTP headers",
      "The query parameters"
    ],
    "correctOption": 0,
    "explanation": "A JSON payload is the data sent in the request or response body, formatted using JSON (JavaScript Object Notation)."
  },
  {
    "testId": "api-test-01",
    "question": "Which of the following is NOT a valid content type for API requests?",
    "options": ["application/json", "application/xml", "text/html", "application/pdf"],
    "correctOption": 3,
    "explanation": "application/json, application/xml, and text/html are common API content types. application/pdf is rarely used in API payloads."
  },
  {
    "testId": "api-test-01",
    "question": "What is the purpose of the `Accept` header in an HTTP request?",
    "options": [
      "To specify the format the client wants in the response",
      "To specify the format of the request body",
      "To authenticate the client",
      "To specify the user agent"
    ],
    "correctOption": 0,
    "explanation": "The `Accept` header tells the server what content types the client can understand, such as application/json or application/xml."
  },
  {
    "testId": "api-test-01",
    "question": "What is the difference between a 400 and 500 status code?",
    "options": [
      "400 is a client error; 500 is a server error",
      "500 is a client error; 400 is a server error",
      "Both are client errors",
      "Both are server errors"
    ],
    "correctOption": 0,
    "explanation": "4xx status codes (e.g., 400 Bad Request) indicate client-side errors. 5xx status codes (e.g., 500 Internal Server Error) indicate server-side errors."
  },
  {
    "testId": "api-test-01",
    "question": "Which tool is commonly used for manual API testing?",
    "options": ["Selenium", "Postman", "Jenkins", "Eclipse"],
    "correctOption": 1,
    "explanation": "Postman is one of the most popular tools for manual and automated API testing, allowing users to send requests and inspect responses."
  },
  {
    "testId": "api-test-01",
    "question": "What is a query parameter in an API request?",
    "options": [
      "A key-value pair appended to the URL after '?'",
      "A header sent in the request",
      "A field in the request body",
      "A cookie sent with the request"
    ],
    "correctOption": 0,
    "explanation": "Query parameters are key-value pairs added to the end of the URL after a '?' to filter or modify the request."
  },
  {
    "testId": "api-test-01",
    "question": "What is the role of the response body in API testing?",
    "options": [
      "It contains the data returned by the server",
      "It contains the HTTP status code",
      "It contains the request headers",
      "It contains the URL"
    ],
    "correctOption": 0,
    "explanation": "The response body contains the payload or data returned by the server, usually in JSON or XML format."
  },
  {
    "testId": "api-test-01",
    "question": "What is an endpoint in API terminology?",
    "options": [
      "The URL where the API can be accessed",
      "The body of the request",
      "The HTTP method used",
      "The authentication token"
    ],
    "correctOption": 0,
    "explanation": "An endpoint is a specific URL (URI) where an API can be accessed and defines where resources are located."
  },
  {
    "testId": "api-test-01",
    "question": "What is the HTTP method used to create a new resource?",
    "options": ["GET", "POST", "PUT", "DELETE"],
    "correctOption": 1,
    "explanation": "POST is used to create a new resource on the server."
  },
  {
    "testId": "api-test-01",
    "question": "What is the difference between API testing and UI testing?",
    "options": [
      "API testing tests the business logic layer; UI testing tests the presentation layer",
      "API testing tests the presentation layer; UI testing tests the business logic",
      "Both test the same layer",
      "API testing is manual; UI testing is automated"
    ],
    "correctOption": 0,
    "explanation": "API testing focuses on the application's business logic and data layer, while UI testing focuses on the user interface and user experience."
  },
  {
    "testId": "api-test-01",
    "question": "Which status code means 'Resource Not Found'?",
    "options": ["400", "404", "500", "403"],
    "correctOption": 1,
    "explanation": "404 Not Found indicates that the requested resource could not be found on the server."
  },
  {
    "testId": "api-test-01",
    "question": "What is an API schema?",
    "options": [
      "A document that defines the structure, endpoints, and data types of an API",
      "A type of database",
      "A programming language",
      "An authentication mechanism"
    ],
    "correctOption": 0,
    "explanation": "An API schema (like OpenAPI/Swagger) documents the API structure, endpoints, parameters, and data types."
  },
  {
    "testId": "api-test-01",
    "question": "Which of the following is a best practice for API endpoint naming?",
    "options": [
      "Use plural nouns for resources (e.g., /users)",
      "Use verbs for actions (e.g., /getUsers)",
      "Use random strings",
      "Use uppercase letters"
    ],
    "correctOption": 0,
    "explanation": "Best practice is to use plural nouns for resources (e.g., /users, /products) and let HTTP methods define the action."
  },
  {
    "testId": "api-test-01",
    "question": "What is data-driven API testing?",
    "options": [
      "Testing the API with multiple sets of input data",
      "Testing the database",
      "Testing with random data",
      "Testing only with valid data"
    ],
    "correctOption": 0,
    "explanation": "Data-driven API testing uses multiple sets of input data (from files or databases) to validate the API's behavior under various conditions."
  },
  {
    "testId": "api-test-01",
    "question": "Which of the following is NOT a typical API test case?",
    "options": [
      "Verifying the HTTP status code",
      "Checking the response time",
      "Testing the UI layout",
      "Validating the response body format"
    ],
    "correctOption": 2,
    "explanation": "Testing the UI layout is part of UI testing, not API testing. API tests focus on status codes, response data, and performance."
  },
  {
    "testId": "api-test-01",
    "question": "What is the purpose of an API contract?",
    "options": [
      "To define the expected behavior and data structure between client and server",
      "To sign a legal agreement",
      "To manage project budgets",
      "To define the UI design"
    ],
    "correctOption": 0,
    "explanation": "An API contract defines the expected behavior, endpoints, request/response formats, and error codes between the API provider and consumer."
  },
  {
    "testId": "api-test-01",
    "question": "What is error code 503?",
    "options": [
      "Service Unavailable",
      "Internal Server Error",
      "Bad Gateway",
      "Gateway Timeout"
    ],
    "correctOption": 0,
    "explanation": "503 Service Unavailable indicates that the server is temporarily unable to handle the request, often due to overload or maintenance."
  },
  {
    "testId": "api-test-01",
    "question": "What is GraphQL?",
    "options": [
      "A query language for APIs that allows clients to request specific data",
      "A type of database",
      "An authentication protocol",
      "A programming language"
    ],
    "correctOption": 0,
    "explanation": "GraphQL is a query language for APIs that enables clients to request exactly the data they need, reducing over-fetching and under-fetching."
  },
  {
    "testId": "api-test-01",
    "question": "What is the difference between a path parameter and a query parameter?",
    "options": [
      "Path parameters are part of the URL path; query parameters are after '?'",
      "Query parameters are part of the path; path parameters are after '?'",
      "Both are after '?'",
      "Both are part of the path"
    ],
    "correctOption": 0,
    "explanation": "Path parameters are embedded in the URL path (e.g., /users/123), while query parameters are appended after '?' (e.g., /users?page=1)."
  },
  {
    "testId": "api-test-01",
    "question": "What is the purpose of the `Content-Type` header in an API request?",
    "options": [
      "To specify the format of the request body",
      "To specify the format of the response",
      "To authenticate the client",
      "To specify the user agent"
    ],
    "correctOption": 0,
    "explanation": "The `Content-Type` header tells the server what media type (e.g., application/json) is being sent in the request body."
  },
  {
    "testId": "api-test-01",
    "question": "What is mocking in API testing?",
    "options": [
      "Simulating API responses without actually calling the real API",
      "Testing the API in production",
      "Using real API requests",
      "Testing the API with invalid data"
    ],
    "correctOption": 0,
    "explanation": "Mocking creates simulated API responses to test the client or system when the real API is unavailable or incomplete."
  },
  {
    "testId": "api-test-01",
    "question": "Which status code is used for a successful POST request that creates a new resource?",
    "options": ["200", "201", "204", "202"],
    "correctOption": 1,
    "explanation": "201 Created indicates that the request was successful and a new resource was created."
  },
  {
    "testId": "api-test-01",
    "question": "What is the role of `POST` in RESTful APIs?",
    "options": [
      "To create a new resource",
      "To retrieve a resource",
      "To update a resource",
      "To delete a resource"
    ],
    "correctOption": 0,
    "explanation": "In RESTful APIs, POST is used to create a new resource on the server."
  },
  {
    "testId": "api-test-01",
    "question": "What is a 'bug' in the context of API testing?",
    "options": [
      "Any deviation between actual API behavior and expected behavior",
      "A syntax error in the code",
      "A user interface glitch",
      "A network issue"
    ],
    "correctOption": 0,
    "explanation": "In API testing, a bug is any deviation in the API's actual behavior (response, status, data) from the documented or expected behavior."
  },
  {
    "testId": "api-test-02",
    "question": "Which HTTP method is idempotent?",
    "options": ["POST", "GET", "PATCH", "None of the above"],
    "correctOption": 1,
    "explanation": "GET is idempotent, meaning multiple identical requests produce the same result without side effects. POST is not idempotent."
  },
  {
    "testId": "api-test-02",
    "question": "What does the PUT method do in REST APIs?",
    "options": [
      "Updates an existing resource or creates it if it doesn't exist",
      "Partially updates an existing resource",
      "Deletes a resource",
      "Retrieves a resource"
    ],
    "correctOption": 0,
    "explanation": "PUT is used to update an entire resource. If the resource doesn't exist, it may create it (depending on the API)."
  },
  {
    "testId": "api-test-02",
    "question": "What is the difference between PUT and PATCH?",
    "options": [
      "PUT updates the entire resource; PATCH partially updates the resource",
      "PATCH updates the entire resource; PUT partially updates",
      "Both update the entire resource",
      "Both partially update the resource"
    ],
    "correctOption": 0,
    "explanation": "PUT replaces the entire resource with the new data provided. PATCH applies partial updates to specific fields."
  },
  {
    "testId": "api-test-02",
    "question": "Which status code means 'Unauthorized'?",
    "options": ["401", "403", "400", "405"],
    "correctOption": 0,
    "explanation": "401 Unauthorized indicates that authentication is required and has failed or not been provided."
  },
  {
    "testId": "api-test-02",
    "question": "What is the difference between 401 and 403 status codes?",
    "options": [
      "401 means authentication failed; 403 means authentication succeeded but access is forbidden",
      "403 means authentication failed; 401 means access is forbidden",
      "Both mean authentication failed",
      "Both mean access is forbidden"
    ],
    "correctOption": 0,
    "explanation": "401 Unauthorized means the user is not authenticated. 403 Forbidden means the user is authenticated but does not have permission to access the resource."
  },
  {
    "testId": "api-test-02",
    "question": "Which HTTP method is used to delete a resource?",
    "options": ["REMOVE", "DELETE", "CLEAR", "ERASE"],
    "correctOption": 1,
    "explanation": "DELETE is the standard HTTP method used to remove a resource from the server."
  },
  {
    "testId": "api-test-02",
    "question": "What is Basic Authentication in APIs?",
    "options": [
      "A simple authentication scheme using base64-encoded username and password",
      "A token-based authentication",
      "A certificate-based authentication",
      "An OAuth 2.0 authentication"
    ],
    "correctOption": 0,
    "explanation": "Basic Authentication sends the username and password as a base64-encoded string in the Authorization header."
  },
  {
    "testId": "api-test-02",
    "question": "What is OAuth 2.0 used for?",
    "options": [
      "Authorization and delegated access to resources",
      "Basic authentication",
      "API key management",
      "Session management"
    ],
    "correctOption": 0,
    "explanation": "OAuth 2.0 is an authorization framework that allows third-party applications to access user resources without sharing credentials."
  },
  {
    "testId": "api-test-02",
    "question": "What is a Bearer token?",
    "options": [
      "An access token sent in the Authorization header to identify the client",
      "A username and password",
      "An API key sent as a query parameter",
      "A session cookie"
    ],
    "correctOption": 0,
    "explanation": "A Bearer token is an access token used in the Authorization header (e.g., 'Bearer <token>') to authenticate requests."
  },
  {
    "testId": "api-test-02",
    "question": "Which status code indicates a redirection?",
    "options": ["200", "301", "400", "500"],
    "correctOption": 1,
    "explanation": "301 Moved Permanently is a redirection status code. 2xx are success, 4xx client errors, 5xx server errors."
  },
  {
    "testId": "api-test-02",
    "question": "What is the purpose of the `Authorization` header?",
    "options": [
      "To provide credentials for the server to authenticate the client",
      "To specify the content type",
      "To specify the user agent",
      "To specify the expected response format"
    ],
    "correctOption": 0,
    "explanation": "The Authorization header contains credentials, such as Bearer tokens or Basic Auth credentials, to authenticate the client."
  },
  {
    "testId": "api-test-02",
    "question": "What does 204 No Content status code mean?",
    "options": [
      "The request was successful but there is no content to return",
      "The request failed",
      "The resource was created",
      "The server encountered an error"
    ],
    "correctOption": 0,
    "explanation": "204 No Content indicates the request was successful but the server is not returning any content in the response body."
  },
  {
    "testId": "api-test-02",
    "question": "What is a JSON Web Token (JWT)?",
    "options": [
      "An open standard for securely transmitting information between parties as a JSON object",
      "A type of database",
      "An API testing tool",
      "A programming framework"
    ],
    "correctOption": 0,
    "explanation": "JWT is an open standard used to securely transmit information between parties as a compact, self-contained JSON object, often used for authentication."
  },
  {
    "testId": "api-test-02",
    "question": "Which status code means 'Bad Request'?",
    "options": ["400", "401", "404", "403"],
    "correctOption": 0,
    "explanation": "400 Bad Request indicates that the server cannot process the request due to malformed syntax or invalid parameters."
  },
  {
    "testId": "api-test-02",
    "question": "What is the purpose of CORS in API testing?",
    "options": [
      "Cross-Origin Resource Sharing allows browsers to access resources from different origins",
      "A method for encoding data",
      "A type of authentication",
      "A data format"
    ],
    "correctOption": 0,
    "explanation": "CORS (Cross-Origin Resource Sharing) is a mechanism that allows restricted resources on a web page to be requested from another domain."
  },
  {
    "testId": "api-test-02",
    "question": "What does the HEAD method do?",
    "options": [
      "Retrieves the headers of a resource without the body",
      "Retrieves the entire resource",
      "Updates the resource",
      "Deletes the resource"
    ],
    "correctOption": 0,
    "explanation": "HEAD is similar to GET but only retrieves the headers, not the response body, useful for checking metadata."
  },
  {
    "testId": "api-test-02",
    "question": "Which status code means 'Method Not Allowed'?",
    "options": ["405", "404", "403", "400"],
    "correctOption": 0,
    "explanation": "405 Method Not Allowed indicates that the HTTP method used is not supported for the requested endpoint."
  },
  {
    "testId": "api-test-02",
    "question": "What is an API key?",
    "options": [
      "A unique identifier used to authenticate an application or user to an API",
      "A password for the database",
      "A type of HTTP method",
      "A response status code"
    ],
    "correctOption": 0,
    "explanation": "An API key is a unique code used to identify and authenticate applications or users accessing an API."
  },
  {
    "testId": "api-test-02",
    "question": "What is the difference between stateful and stateless APIs?",
    "options": [
      "Stateless APIs do not store session state between requests; stateful APIs maintain state",
      "Stateful APIs do not store state; stateless APIs maintain state",
      "Both store state",
      "Both do not store state"
    ],
    "correctOption": 0,
    "explanation": "REST APIs are typically stateless, meaning each request contains all necessary information. Stateful APIs maintain session state between requests."
  },
  {
    "testId": "api-test-02",
    "question": "What does status code 201 indicate?",
    "options": ["Created", "OK", "Accepted", "No Content"],
    "correctOption": 0,
    "explanation": "201 Created indicates that the request was successful and a new resource was created as a result."
  },
  {
    "testId": "api-test-02",
    "question": "What is cookie-based authentication?",
    "options": [
      "Authentication using session cookies stored in the browser",
      "Authentication using API keys",
      "Authentication using JWT tokens",
      "Authentication using Basic Auth"
    ],
    "correctOption": 0,
    "explanation": "Cookie-based authentication uses cookies to maintain session state after the user logs in, common in traditional web apps."
  },
  {
    "testId": "api-test-02",
    "question": "Which of the following is NOT a valid HTTP method?",
    "options": ["GET", "POST", "SUBSCRIBE", "DELETE"],
    "correctOption": 2,
    "explanation": "SUBSCRIBE is not a standard HTTP method. Standard methods include GET, POST, PUT, PATCH, DELETE, HEAD, and OPTIONS."
  },
  {
    "testId": "api-test-02",
    "question": "What is the purpose of the `OPTIONS` method in HTTP?",
    "options": [
      "To retrieve the communication options supported by the server",
      "To create a new resource",
      "To delete a resource",
      "To update a resource"
    ],
    "correctOption": 0,
    "explanation": "OPTIONS is used to describe the communication options available for the target resource (e.g., allowed methods and CORS headers)."
  },
  {
    "testId": "api-test-02",
    "question": "What is the purpose of a refresh token in OAuth 2.0?",
    "options": [
      "To obtain a new access token without requiring user re-authentication",
      "To authenticate the user for the first time",
      "To log the user out",
      "To change the user's password"
    ],
    "correctOption": 0,
    "explanation": "A refresh token is used to obtain a new access token when the current access token expires, without user interaction."
  },
  {
    "testId": "api-test-02",
    "question": "Which status code indicates a server error?",
    "options": ["400", "404", "500", "301"],
    "correctOption": 2,
    "explanation": "500 Internal Server Error indicates a server-side issue. 400s are client errors, 301 is a redirection."
  },
  {
    "testId": "api-test-02",
    "question": "What is the difference between API authentication and authorization?",
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
    "testId": "api-test-02",
    "question": "What is a session token?",
    "options": [
      "A temporary identifier used to maintain a user's session state",
      "A permanent API key",
      "An HTTP status code",
      "A response header"
    ],
    "correctOption": 0,
    "explanation": "A session token is a temporary identifier exchanged between client and server to maintain state during a session."
  },
  {
    "testId": "api-test-02",
    "question": "Which of the following is true about REST APIs?",
    "options": [
      "They are stateless",
      "They maintain session state on the server",
      "They require SOAP protocol",
      "They only work with XML data"
    ],
    "correctOption": 0,
    "explanation": "REST APIs are stateless, meaning each request contains all the information needed, and no client context is stored on the server between requests."
  },
  {
    "testId": "api-test-03",
    "question": "Which tool is widely used for API testing and exploration?",
    "options": ["Postman", "Selenium", "Jenkins", "Eclipse"],
    "correctOption": 0,
    "explanation": "Postman is one of the most popular tools for API testing, offering features for sending requests, inspecting responses, and creating automated tests."
  },
  {
    "testId": "api-test-03",
    "question": "What is a Postman Collection?",
    "options": [
      "A group of saved API requests and their configurations",
      "A type of database",
      "A test report",
      "An authentication method"
    ],
    "correctOption": 0,
    "explanation": "A Postman Collection is a group of saved API requests, including their parameters, headers, and pre-scripts, organized for easy reuse."
  },
  {
    "testId": "api-test-03",
    "question": "What are Postman Environment Variables used for?",
    "options": [
      "To manage different configurations (e.g., development, staging, production)",
      "To store test results",
      "To log API responses",
      "To manage authentication"
    ],
    "correctOption": 0,
    "explanation": "Environment variables allow you to switch between different configurations (like dev/prod URLs) without changing the request manually."
  },
  {
    "testId": "api-test-03",
    "question": "What is the purpose of Postman's `pm` object?",
    "options": [
      "To write test scripts and assertions in Postman",
      "To send HTTP requests",
      "To authenticate users",
      "To generate reports"
    ],
    "correctOption": 0,
    "explanation": "`pm` is a Postman object used to write pre-request and test scripts, including assertions and environment variable management."
  },
  {
    "testId": "api-test-03",
    "question": "Which of the following is a Java-based API testing framework?",
    "options": ["REST Assured", "Postman", "Newman", "Pytest"],
    "correctOption": 0,
    "explanation": "REST Assured is a Java-based framework for testing RESTful APIs, providing a fluent interface for requests and assertions."
  },
  {
    "testId": "api-test-03",
    "question": "What is Newman in the context of API testing?",
    "options": [
      "A command-line tool to run Postman collections",
      "A Java testing framework",
      "A Python testing library",
      "A cloud-based API testing service"
    ],
    "correctOption": 0,
    "explanation": "Newman is a command-line runner for Postman collections, allowing integration with CI/CD pipelines."
  },
  {
    "testId": "api-test-03",
    "question": "What is the purpose of assertions in API test scripts?",
    "options": [
      "To validate that the API response meets expected conditions",
      "To send requests",
      "To manage environments",
      "To generate random data"
    ],
    "correctOption": 0,
    "explanation": "Assertions check that the actual API response (status, body, headers) matches the expected criteria, determining test pass/fail."
  },
  {
    "testId": "api-test-03",
    "question": "Which tool can be used for load testing APIs?",
    "options": ["JMeter", "Postman", "REST Assured", "Selenium"],
    "correctOption": 0,
    "explanation": "Apache JMeter is widely used for load and performance testing of APIs, simulating multiple concurrent users."
  },
  {
    "testId": "api-test-03",
    "question": "What is the benefit of using data-driven testing in APIs?",
    "options": [
      "It allows running the same test with multiple data sets",
      "It reduces the number of test scripts",
      "It improves API performance",
      "It automatically generates test cases"
    ],
    "correctOption": 0,
    "explanation": "Data-driven testing separates test logic from test data, allowing the same test script to be executed with various input values."
  },
  {
    "testId": "api-test-03",
    "question": "What is API mocking used for in testing?",
    "options": [
      "To simulate API responses when the real API is unavailable",
      "To test the API in production",
      "To improve API security",
      "To increase API performance"
    ],
    "correctOption": 0,
    "explanation": "Mocking creates simulated API responses to test applications when the real API is not ready, unstable, or unavailable."
  },
  {
    "testId": "api-test-03",
    "question": "Which of the following is a popular tool for API contract testing?",
    "options": ["Pact", "Postman", "JMeter", "Selenium"],
    "correctOption": 0,
    "explanation": "Pact is a popular tool for consumer-driven contract testing, ensuring provider and consumer expectations align."
  },
  {
    "testId": "api-test-03",
    "question": "What is the purpose of a test suite in API testing?",
    "options": [
      "To group multiple test cases for organized execution",
      "To store test data",
      "To manage test environments",
      "To generate reports"
    ],
    "correctOption": 0,
    "explanation": "A test suite is a collection of test cases grouped together to verify a specific API or functional area."
  },
  {
    "testId": "api-test-03",
    "question": "Which of the following is a valid assertion in Postman?",
    "options": [
      "pm.response.to.have.status(200)",
      "pm.expect.status(200)",
      "assert.status(200)",
      "check.status(200)"
    ],
    "correctOption": 0,
    "explanation": "`pm.response.to.have.status(200)` is a valid Chai-style assertion in Postman to verify the response status code."
  },
  {
    "testId": "api-test-03",
    "question": "What is the purpose of pre-request scripts in Postman?",
    "options": [
      "To set up data or variables before the request is sent",
      "To validate the response after the request is sent",
      "To generate test reports",
      "To manage environment configurations"
    ],
    "correctOption": 0,
    "explanation": "Pre-request scripts are executed before the request is sent, allowing you to set dynamic variables, headers, or data."
  },
  {
    "testId": "api-test-03",
    "question": "What is an API documentation tool that generates interactive documentation?",
    "options": ["Swagger/OpenAPI", "Postman", "JMeter", "REST Assured"],
    "correctOption": 0,
    "explanation": "Swagger (OpenAPI) is used to generate interactive API documentation, allowing users to explore and test endpoints directly."
  },
  {
    "testId": "api-test-03",
    "question": "What is parameterization in API testing?",
    "options": [
      "The process of using external data for test inputs",
      "The process of hardcoding values",
      "The process of writing test scripts",
      "The process of generating reports"
    ],
    "correctOption": 0,
    "explanation": "Parameterization involves using external data sources (CSV, Excel, DB) to provide test inputs, making tests reusable and data-driven."
  },
  {
    "testId": "api-test-03",
    "question": "What is stubbing in API testing?",
    "options": [
      "Replacing the actual API implementation with a predefined response",
      "Testing the API in a staging environment",
      "Running tests in parallel",
      "Generating random data"
    ],
    "correctOption": 0,
    "explanation": "Stubbing simulates specific API responses, allowing testing of client applications without a fully functional backend."
  },
  {
    "testId": "api-test-03",
    "question": "What is the purpose of CI/CD integration in API testing?",
    "options": [
      "To automatically run API tests on code changes",
      "To manually run tests",
      "To generate reports on demand",
      "To deploy the application"
    ],
    "correctOption": 0,
    "explanation": "CI/CD integration ensures API tests are executed automatically whenever code changes are pushed, providing rapid feedback."
  },
  {
    "testId": "api-test-03",
    "question": "Which of the following is a Python library for API testing?",
    "options": ["Requests", "Selenium", "JUnit", "TestNG"],
    "correctOption": 0,
    "explanation": "The 'requests' library is a popular Python package for making HTTP requests and testing APIs."
  },
  {
    "testId": "api-test-03",
    "question": "What is the purpose of API test automation?",
    "options": [
      "To execute API tests automatically, reducing manual effort and increasing test coverage",
      "To eliminate manual testing completely",
      "To write test cases",
      "To design APIs"
    ],
    "correctOption": 0,
    "explanation": "API test automation reduces manual effort, enables frequent execution, and increases test coverage for regression and functional testing."
  },
  {
    "testId": "api-test-03",
    "question": "What is a test harness in API testing?",
    "options": [
      "The infrastructure that supports the execution of automated API tests",
      "A type of API",
      "A test data file",
      "A test case management tool"
    ],
    "correctOption": 0,
    "explanation": "A test harness provides the runtime environment and tools needed to execute automated API tests."
  },
  {
    "testId": "api-test-03",
    "question": "Which of the following is a best practice for organizing Postman collections?",
    "options": [
      "Organize requests by API resource (e.g., Users, Products) and use folders",
      "Place all requests in a single folder",
      "Use random names for requests",
      "Avoid using folders"
    ],
    "correctOption": 0,
    "explanation": "Organizing requests by resource with folders improves maintainability and readability."
  },
  {
    "testId": "api-test-03",
    "question": "What is a request body in API testing?",
    "options": [
      "The data sent to the server in the request",
      "The data returned by the server",
      "The URL of the endpoint",
      "The HTTP headers"
    ],
    "correctOption": 0,
    "explanation": "The request body contains the data sent to the server, typically in JSON or XML format, for POST, PUT, and PATCH requests."
  },
  {
    "testId": "api-test-03",
    "question": "What is the purpose of a response validator in API testing?",
    "options": [
      "To check that the response data matches the expected schema and values",
      "To send the request",
      "To manage headers",
      "To handle authentication"
    ],
    "correctOption": 0,
    "explanation": "A response validator verifies the response status, headers, and body content against expected criteria."
  },
  {
    "testId": "api-test-03",
    "question": "Which of the following is a mock API service?",
    "options": ["Mockoon", "Postman", "JMeter", "REST Assured"],
    "correctOption": 0,
    "explanation": "Mockoon is a desktop tool for creating mock APIs to simulate responses without a real backend."
  },
  {
    "testId": "api-test-03",
    "question": "What is the benefit of using a BDD framework (e.g., Cucumber) for API testing?",
    "options": [
      "It allows writing test cases in natural language for better collaboration",
      "It improves API performance",
      "It reduces test execution time",
      "It automatically fixes bugs"
    ],
    "correctOption": 0,
    "explanation": "BDD frameworks enable writing tests in plain English (Gherkin), improving communication between developers, testers, and business stakeholders."
  },
  {
    "testId": "api-test-03",
    "question": "What is the purpose of a test run in API testing?",
    "options": [
      "To execute a set of test cases and collect results",
      "To write test cases",
      "To design APIs",
      "To manage test data"
    ],
    "correctOption": 0,
    "explanation": "A test run executes a collection of test cases and captures the results to assess API quality."
  },
  {
    "testId": "api-test-03",
    "question": "What is the difference between GET and POST in terms of caching?",
    "options": [
      "GET responses can be cached; POST responses are generally not cached",
      "POST responses can be cached; GET responses are generally not cached",
      "Both can be cached",
      "Both cannot be cached"
    ],
    "correctOption": 0,
    "explanation": "GET requests are often cacheable because they retrieve data without side effects. POST requests are typically not cached because they modify server state."
  },
  {
    "testId": "api-test-04",
    "question": "What is GraphQL primarily used for?",
    "options": [
      "Allowing clients to request specific data fields from an API",
      "Creating REST APIs",
      "Testing API performance",
      "Authenticating API requests"
    ],
    "correctOption": 0,
    "explanation": "GraphQL is a query language for APIs that enables clients to request exactly the data they need, reducing over-fetching and under-fetching."
  },
  {
    "testId": "api-test-04",
    "question": "What is the difference between a GraphQL query and a mutation?",
    "options": [
      "Query reads data; mutation modifies data",
      "Mutation reads data; query modifies data",
      "Both read data",
      "Both modify data"
    ],
    "correctOption": 0,
    "explanation": "GraphQL queries are used for fetching (reading) data, while mutations are used for modifying (creating, updating, deleting) data."
  },
  {
    "testId": "api-test-04",
    "question": "What is WebSocket used for?",
    "options": [
      "Full-duplex communication over a single TCP connection",
      "Sending HTTP requests",
      "Querying databases",
      "Testing APIs"
    ],
    "correctOption": 0,
    "explanation": "WebSocket enables real-time, bidirectional communication between client and server over a persistent connection."
  },
  {
    "testId": "api-test-04",
    "question": "What is the difference between REST and GraphQL?",
    "options": [
      "GraphQL allows clients to request specific data; REST has fixed endpoints",
      "REST allows clients to request specific data; GraphQL has fixed endpoints",
      "Both allow specific data requests",
      "Both have fixed endpoints"
    ],
    "correctOption": 0,
    "explanation": "GraphQL uses a single endpoint and allows clients to specify exactly what data they need. REST has multiple endpoints with fixed data structures."
  },
  {
    "testId": "api-test-04",
    "question": "What is OAuth 2.0 primarily used for?",
    "options": [
      "Delegated authorization and secure access to resources",
      "Basic authentication",
      "API mocking",
      "Load testing"
    ],
    "correctOption": 0,
    "explanation": "OAuth 2.0 is a framework for delegated authorization, allowing applications to access resources on behalf of users without sharing credentials."
  },
  {
    "testId": "api-test-04",
    "question": "What is API security testing?",
    "options": [
      "Testing to identify vulnerabilities like injections, broken authentication, and data exposure",
      "Testing the performance of the API",
      "Testing the functionality of the API",
      "Testing the API documentation"
    ],
    "correctOption": 0,
    "explanation": "API security testing identifies vulnerabilities in APIs to protect against attacks such as injection, broken authentication, and sensitive data exposure."
  },
  {
    "testId": "api-test-04",
    "question": "Which of the following is a common API security vulnerability?",
    "options": [
      "SQL Injection",
      "Slow response time",
      "Invalid status code",
      "Missing response body"
    ],
    "correctOption": 0,
    "explanation": "SQL Injection is a common security vulnerability where attackers can execute arbitrary SQL queries on the database through the API."
  },
  {
    "testId": "api-test-04",
    "question": "What is rate limiting in APIs?",
    "options": [
      "Restricting the number of API requests a client can make in a given time period",
      "Increasing API response speed",
      "Limiting the size of the response body",
      "Restricting API functionality"
    ],
    "correctOption": 0,
    "explanation": "Rate limiting controls the number of API requests a client can make within a time window to prevent abuse and ensure fair usage."
  },
  {
    "testId": "api-test-04",
    "question": "What is the purpose of SSL/TLS in API communication?",
    "options": [
      "To encrypt data transmitted between client and server for security",
      "To compress data",
      "To cache responses",
      "To authenticate users"
    ],
    "correctOption": 0,
    "explanation": "SSL/TLS provides secure, encrypted communication between the client and server, protecting data from interception."
  },
  {
    "testId": "api-test-04",
    "question": "What is API versioning?",
    "options": [
      "Managing multiple versions of an API to handle changes without breaking existing clients",
      "Updating the API documentation",
      "Testing different API environments",
      "Changing the API URL"
    ],
    "correctOption": 0,
    "explanation": "API versioning allows new features or changes to be released without breaking existing clients, often using URL paths or headers."
  },
  {
    "testId": "api-test-04",
    "question": "Which of the following is a GraphQL testing tool?",
    "options": ["GraphQL Playground", "Postman", "Rest Assured", "All of the above"],
    "correctOption": 3,
    "explanation": "GraphQL Playground, Postman (with GraphQL support), and REST Assured (with extensions) can all be used for GraphQL testing."
  },
  {
    "testId": "api-test-04",
    "question": "What is a microservices architecture?",
    "options": [
      "A design where an application is composed of small, independent services communicating via APIs",
      "A monolithic application structure",
      "A type of database",
      "A programming language"
    ],
    "correctOption": 0,
    "explanation": "Microservices architecture structures an application as a collection of loosely coupled, independently deployable services that communicate via APIs."
  },
  {
    "testId": "api-test-04",
    "question": "What is contract testing in microservices?",
    "options": [
      "Testing that the interactions between services meet the agreed contract",
      "Testing the performance of services",
      "Testing the user interface",
      "Testing the database schema"
    ],
    "correctOption": 0,
    "explanation": "Contract testing verifies that the API consumer and provider agree on the expected request/response contracts, ensuring compatibility."
  },
  {
    "testId": "api-test-04",
    "question": "What is the OWASP API Security Top 10?",
    "options": [
      "A list of the top 10 API security risks",
      "A list of the top 10 testing tools",
      "A list of the top 10 programming languages",
      "A list of the top 10 API design patterns"
    ],
    "correctOption": 0,
    "explanation": "OWASP API Security Top 10 is a standard awareness document for the most critical API security risks, helping teams prioritize security."
  },
  {
    "testId": "api-test-04",
    "question": "What is the difference between REST and WebSocket?",
    "options": [
      "REST is request-response; WebSocket is full-duplex persistent connection",
      "WebSocket is request-response; REST is full-duplex",
      "Both are request-response",
      "Both are full-duplex"
    ],
    "correctOption": 0,
    "explanation": "REST uses a request-response model over HTTP. WebSocket establishes a persistent, bidirectional connection for real-time communication."
  },
  {
    "testId": "api-test-04",
    "question": "What is the purpose of a load balancer in API infrastructure?",
    "options": [
      "To distribute incoming API requests across multiple servers for performance",
      "To authenticate API requests",
      "To cache API responses",
      "To compress API data"
    ],
    "correctOption": 0,
    "explanation": "A load balancer distributes incoming API traffic across multiple servers to ensure high availability and performance."
  },
  {
    "testId": "api-test-04",
    "question": "What is an API gateway?",
    "options": [
      "A single entry point that routes, authorizes, and manages API requests",
      "A tool for testing APIs",
      "A type of database",
      "A programming language"
    ],
    "correctOption": 0,
    "explanation": "An API gateway acts as a single entry point for API requests, providing routing, authentication, rate limiting, and logging."
  },
  {
    "testId": "api-test-04",
    "question": "Which of the following is a non-functional API testing type?",
    "options": ["Functional Testing", "Performance Testing", "Integration Testing", "Unit Testing"],
    "correctOption": 1,
    "explanation": "Performance testing (load, stress, spike) is a non-functional testing type that evaluates how well the API performs under different conditions."
  },
  {
    "testId": "api-test-04",
    "question": "What is the difference between RESTful API and Web API?",
    "options": [
      "RESTful APIs follow REST constraints; Web APIs are a broader category that may or may not be RESTful",
      "Web APIs follow REST constraints; RESTful APIs are broader",
      "Both are the same",
      "RESTful APIs are for SOAP; Web APIs are for REST"
    ],
    "correctOption": 0,
    "explanation": "Web API is a general term for any API accessible over the web. A RESTful API specifically follows REST architectural constraints."
  },
  {
    "testId": "api-test-04",
    "question": "What is the purpose of API monitoring?",
    "options": [
      "To continuously check API availability, performance, and correctness in production",
      "To write API tests",
      "To design API contracts",
      "To manage API documentation"
    ],
    "correctOption": 0,
    "explanation": "API monitoring proactively checks API health in production to detect outages, performance degradation, and errors."
  },
  {
    "testId": "api-test-04",
    "question": "What is a 'black-box' API test?",
    "options": [
      "Testing the API without knowledge of the internal code or implementation",
      "Testing the API with knowledge of the internal code",
      "Testing only the user interface",
      "Testing only the database"
    ],
    "correctOption": 0,
    "explanation": "Black-box API testing focuses on inputs and outputs without knowing the internal logic of the API, based solely on requirements."
  },
  {
    "testId": "api-test-04",
    "question": "What is a 'white-box' API test?",
    "options": [
      "Testing the API with knowledge of the internal code and logic",
      "Testing without knowledge of the internal code",
      "Testing only the external behavior",
      "Testing the database only"
    ],
    "correctOption": 0,
    "explanation": "White-box API testing examines the internal logic and code structure of the API to verify paths, data flow, and error handling."
  },
  {
    "testId": "api-test-04",
    "question": "What is the purpose of a health check endpoint?",
    "options": [
      "To monitor if the API is up and running without executing complex logic",
      "To authenticate users",
      "To retrieve user data",
      "To update the database"
    ],
    "correctOption": 0,
    "explanation": "Health check endpoints (e.g., /health) are used to verify if the API is up and responsive, essential for monitoring and load balancers."
  },
  {
    "testId": "api-test-04",
    "question": "What is the difference between SOAP and REST in terms of data format?",
    "options": [
      "SOAP typically uses XML; REST typically uses JSON or XML",
      "SOAP uses JSON; REST uses XML",
      "Both use XML only",
      "Both use JSON only"
    ],
    "correctOption": 0,
    "explanation": "SOAP strictly uses XML for messages. REST supports multiple formats, with JSON being the most common, though XML is also used."
  },
  {
    "testId": "api-test-04",
    "question": "What is gRPC?",
    "options": [
      "A high-performance RPC framework using Protocol Buffers",
      "A REST API tool",
      "A SQL database",
      "A GraphQL client"
    ],
    "correctOption": 0,
    "explanation": "gRPC is a high-performance, open-source RPC framework that uses HTTP/2 and Protocol Buffers for efficient communication."
  },
  {
    "testId": "api-test-04",
    "question": "What is the concept of idempotency in HTTP methods?",
    "options": [
      "Making multiple identical requests produce the same result as a single request",
      "Making requests that never fail",
      "Making requests that always create new resources",
      "Making requests that are never cached"
    ],
    "correctOption": 0,
    "explanation": "Idempotent methods (GET, PUT, DELETE) can be called multiple times without changing the server state beyond the first request."
  },
  {
    "testId": "api-test-04",
    "question": "Which of the following is a tool for API performance testing?",
    "options": ["JMeter", "Postman", "REST Assured", "Pact"],
    "correctOption": 0,
    "explanation": "Apache JMeter is a popular tool for load and performance testing of APIs."
  },
  {
    "testId": "api-test-04",
    "question": "What is the purpose of API documentation for testing?",
    "options": [
      "To provide the expected behavior, endpoints, and data formats for test creation",
      "To replace testing",
      "To authenticate users",
      "To monitor performance"
    ],
    "correctOption": 0,
    "explanation": "API documentation is the primary source for understanding what the API should do, enabling accurate test case design."
  },
  {
    "testId": "api-test-04",
    "question": "What is a 'side effect' in the context of API testing?",
    "options": [
      "An unintended change in the system state caused by an API request",
      "A performance issue",
      "A security vulnerability",
      "A response header"
    ],
    "correctOption": 0,
    "explanation": "A side effect occurs when an API request unintentionally alters the system state, such as modifying data not related to the request."
  },
  {
    "testId": "api-test-04",
    "question": "What is the benefit of continuous API testing?",
    "options": [
      "To catch issues early in the development cycle and provide rapid feedback",
      "To eliminate all defects",
      "To replace manual testing entirely",
      "To reduce development time"
    ],
    "correctOption": 0,
    "explanation": "Continuous API testing integrates testing into the CI/CD pipeline, catching defects early and providing immediate feedback to developers."
  },
  {
    "testId": "api-test-04",
    "question": "What is the difference between SOAP 1.1 and SOAP 1.2?",
    "options": [
      "SOAP 1.2 uses less protocol overhead and has better extensibility than SOAP 1.1",
      "SOAP 1.2 is slower than SOAP 1.1",
      "SOAP 1.1 uses JSON; SOAP 1.2 uses XML",
      "There is no difference"
    ],
    "correctOption": 0,
    "explanation": "SOAP 1.2 provides improvements in extensibility, flexibility, and reduced protocol overhead compared to SOAP 1.1."
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
console.log('Added ' + newQuestions.length + ' API questions to questions.js');
