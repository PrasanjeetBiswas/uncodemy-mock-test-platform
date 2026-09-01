const fs = require('fs');
const path = require('path');

const newQuestions = [
  {
    "testId": "st-mock-test-01",
    "question": "What is the primary purpose of software testing?",
    "options": [
      "To ensure the software is free from all defects",
      "To verify that the software meets the specified requirements",
      "To improve the user interface design",
      "To increase the development speed"
    ],
    "correctOption": 1,
    "explanation": "The primary purpose of testing is to verify that the software meets the specified requirements and to detect defects, though it cannot guarantee zero defects."
  },
  {
    "testId": "st-mock-test-01",
    "question": "Which of the following is NOT a testing principle?",
    "options": [
      "Testing shows the presence of defects, not their absence",
      "Exhaustive testing is possible",
      "Defects cluster together",
      "Testing is context-dependent"
    ],
    "correctOption": 1,
    "explanation": "Exhaustive testing (testing all possible inputs) is impossible in practice. The other three are established testing principles."
  },
  {
    "testId": "st-mock-test-01",
    "question": "In the V-Model, which testing level corresponds to the requirements phase?",
    "options": ["Unit Testing", "Integration Testing", "System Testing", "Acceptance Testing"],
    "correctOption": 3,
    "explanation": "In the V-Model, acceptance testing is planned during the requirements phase to verify that the system meets user needs."
  },
  {
    "testId": "st-mock-test-01",
    "question": "What is the difference between verification and validation?",
    "options": [
      "Verification checks if the product is built correctly; validation checks if the correct product is built",
      "Validation checks if the product is built correctly; verification checks if the correct product is built",
      "Both are the same",
      "Verification is done by testers; validation is done by developers"
    ],
    "correctOption": 0,
    "explanation": "Verification ensures the product conforms to specifications. Validation ensures the product meets user expectations."
  },
  {
    "testId": "st-mock-test-01",
    "question": "Which test design technique divides input data into groups that are expected to behave similarly?",
    "options": ["Boundary Value Analysis", "Equivalence Partitioning", "Decision Table Testing", "State Transition Testing"],
    "correctOption": 1,
    "explanation": "Equivalence Partitioning groups input data into equivalence classes where each class should produce the same result."
  },
  {
    "testId": "st-mock-test-01",
    "question": "For a field that accepts numbers from 1 to 100, which values would you test with boundary value analysis?",
    "options": ["0, 1, 2, 99, 100, 101", "50, 100", "1, 100 only", "All numbers from 1 to 100"],
    "correctOption": 0,
    "explanation": "Boundary value analysis tests the boundaries: invalid lower (0), valid lower edges (1, 2), valid upper edges (99, 100), and invalid upper (101)."
  },
  {
    "testId": "st-mock-test-01",
    "question": "What is a 'showstopper' defect?",
    "options": [
      "A defect that prevents the software from performing critical functionality",
      "A cosmetic defect that does not affect functionality",
      "A defect that is easy to fix",
      "A defect that can be deferred to the next release"
    ],
    "correctOption": 0,
    "explanation": "A showstopper is a critical defect that blocks core functionality, making the software unusable and preventing further testing or release."
  },
  {
    "testId": "st-mock-test-01",
    "question": "What is static testing?",
    "options": [
      "Testing without executing the code, such as reviews and inspections",
      "Testing by executing the code",
      "Testing the performance of the application",
      "Testing the user interface"
    ],
    "correctOption": 0,
    "explanation": "Static testing finds defects in documents and code without executing it, using reviews, walkthroughs, and inspections."
  },
  {
    "testId": "st-mock-test-01",
    "question": "Which of the following is a functional testing type?",
    "options": ["Performance Testing", "Security Testing", "Unit Testing", "Usability Testing"],
    "correctOption": 2,
    "explanation": "Unit testing verifies the functionality of individual units. Performance, security, and usability are non-functional testing types."
  },
  {
    "testId": "st-mock-test-01",
    "question": "What is the difference between severity and priority of a defect?",
    "options": [
      "Severity is the impact on the system; priority is the urgency to fix",
      "Priority is the impact; severity is the urgency",
      "Both are the same",
      "Severity is set by testers; priority is set by developers"
    ],
    "correctOption": 0,
    "explanation": "Severity indicates how critical the defect is to the application. Priority indicates how quickly it needs to be fixed based on business needs."
  },
  {
    "testId": "st-mock-test-01",
    "question": "What is the typical defect lifecycle?",
    "options": [
      "New → Assigned → In Progress → Fixed → Verified → Closed",
      "New → Fixed → Closed",
      "New → Assigned → Closed",
      "New → Verified → Closed"
    ],
    "correctOption": 0,
    "explanation": "A typical defect lifecycle includes stages from discovery (New) through assignment, fixing, verification, and closure."
  },
  {
    "testId": "st-mock-test-01",
    "question": "Which of the following is an example of a non-functional testing type?",
    "options": ["Integration Testing", "System Testing", "Load Testing", "Unit Testing"],
    "correctOption": 2,
    "explanation": "Load testing evaluates how the system performs under load. The others are functional testing types."
  },
  {
    "testId": "st-mock-test-01",
    "question": "What is the role of a test plan?",
    "options": [
      "To document the scope, approach, resources, and schedule of testing activities",
      "To list all test cases",
      "To report defects",
      "To design the test environment"
    ],
    "correctOption": 0,
    "explanation": "A test plan is a comprehensive document that describes the objectives, scope, strategy, resources, and schedule for testing."
  },
  {
    "testId": "st-mock-test-01",
    "question": "What is the difference between smoke testing and sanity testing?",
    "options": [
      "Smoke testing is broad and shallow; sanity testing is narrow and deep",
      "Sanity testing is broad and shallow; smoke testing is narrow and deep",
      "Both are the same",
      "Smoke testing is automated; sanity testing is manual"
    ],
    "correctOption": 0,
    "explanation": "Smoke testing checks critical functionality broadly; sanity testing is a focused check of specific functionality after minor changes."
  },
  {
    "testId": "st-mock-test-01",
    "question": "What is the purpose of regression testing?",
    "options": [
      "To ensure that new changes do not break existing functionality",
      "To test new features only",
      "To test the complete application from scratch",
      "To test the user interface"
    ],
    "correctOption": 0,
    "explanation": "Regression testing verifies that changes (bug fixes, enhancements) do not negatively impact existing features."
  },
  {
    "testId": "st-mock-test-01",
    "question": "Which of the following is a black-box testing technique?",
    "options": ["Statement Coverage", "Decision Coverage", "Equivalence Partitioning", "Path Testing"],
    "correctOption": 2,
    "explanation": "Equivalence Partitioning is a black-box testing technique based on input/output behavior. The others are white-box techniques."
  },
  {
    "testId": "st-mock-test-01",
    "question": "What is the primary advantage of using a decision table in testing?",
    "options": [
      "It helps test complex business rules with multiple conditions",
      "It reduces the number of test cases",
      "It automatically generates test data",
      "It is only used for regression testing"
    ],
    "correctOption": 0,
    "explanation": "Decision tables systematically list all combinations of conditions and actions, making them effective for complex business logic."
  },
  {
    "testId": "st-mock-test-01",
    "question": "What is the difference between a test case and a test scenario?",
    "options": [
      "A test case is a detailed set of steps with expected results; a test scenario is a high-level test objective",
      "A test scenario is detailed; a test case is high-level",
      "Both are the same",
      "Test cases are for manual testing; scenarios are for automation"
    ],
    "correctOption": 0,
    "explanation": "A test scenario is a high-level description of what to test, while a test case provides detailed execution steps and expected outcomes."
  },
  {
    "testId": "st-mock-test-01",
    "question": "What is the purpose of a test exit criteria?",
    "options": [
      "To define the conditions under which testing is considered complete",
      "To define the start of testing",
      "To define the test environment",
      "To define the test strategy"
    ],
    "correctOption": 0,
    "explanation": "Exit criteria specify the conditions that must be met before testing can stop, such as test coverage, defect resolution, and pass rates."
  },
  {
    "testId": "st-mock-test-01",
    "question": "In the Agile testing approach, when is testing typically performed?",
    "options": [
      "Continuously throughout each sprint",
      "Only at the end of the project",
      "Only during the planning phase",
      "Only after all coding is done"
    ],
    "correctOption": 0,
    "explanation": "Agile testing is integrated into each sprint, with testers collaborating with developers from the start to ensure quality."
  },
  {
    "testId": "st-mock-test-01",
    "question": "What is the purpose of a test environment?",
    "options": [
      "To provide the hardware, software, and data needed for test execution",
      "To store test results",
      "To manage defects",
      "To write test cases"
    ],
    "correctOption": 0,
    "explanation": "The test environment replicates the production setup to allow accurate testing of the application."
  },
  {
    "testId": "st-mock-test-01",
    "question": "Which of the following is a static testing technique?",
    "options": ["Unit Testing", "Integration Testing", "Walkthrough", "Usability Testing"],
    "correctOption": 2,
    "explanation": "A walkthrough is a static testing technique where team members review a document or code without executing it."
  },
  {
    "testId": "st-mock-test-01",
    "question": "What is the role of a test manager?",
    "options": [
      "To plan, monitor, and control testing activities",
      "To write test cases",
      "To execute tests",
      "To fix defects"
    ],
    "correctOption": 0,
    "explanation": "A test manager is responsible for overall test planning, resource allocation, and management of the testing process."
  },
  {
    "testId": "st-mock-test-01",
    "question": "What is the difference between a bug and an issue?",
    "options": [
      "A bug is a defect in the code; an issue can be a bug, enhancement, or task",
      "An issue is a defect; a bug is an enhancement",
      "Both are the same",
      "Bugs are found by testers; issues are found by users"
    ],
    "correctOption": 0,
    "explanation": "A bug refers specifically to a defect in the software. An issue is a broader term that can include bugs, feature requests, tasks, etc."
  },
  {
    "testId": "st-mock-test-01",
    "question": "What is risk-based testing?",
    "options": [
      "Prioritizing testing based on the likelihood and impact of potential risks",
      "Testing only high-risk features",
      "Testing all features equally",
      "Avoiding testing"
    ],
    "correctOption": 0,
    "explanation": "Risk-based testing focuses testing efforts on areas with the highest risk to maximize defect detection and quality."
  },
  {
    "testId": "st-mock-test-01",
    "question": "Which status code indicates 'Bad Request' in HTTP?",
    "options": ["400", "401", "403", "404"],
    "correctOption": 0,
    "explanation": "400 Bad Request indicates that the server cannot process the request due to malformed syntax or invalid parameters."
  },
  {
    "testId": "st-mock-test-01",
    "question": "What is the difference between a test plan and a test strategy?",
    "options": [
      "A test plan is project-specific; a test strategy is a high-level organization-wide approach",
      "A test strategy is project-specific; a test plan is organization-wide",
      "Both are the same",
      "Test plans are for manual testing; test strategies are for automation"
    ],
    "correctOption": 0,
    "explanation": "A test strategy defines the overall testing approach at an organizational level. A test plan applies that strategy to a specific project."
  },
  {
    "testId": "st-mock-test-01",
    "question": "What is the 'Pareto Principle' in testing?",
    "options": [
      "80% of defects are found in 20% of the modules",
      "20% of defects are found in 80% of the modules",
      "Defects are evenly distributed",
      "Defects are only in new features"
    ],
    "correctOption": 0,
    "explanation": "The Pareto Principle suggests that a small number of modules contain most of the defects, helping focus testing efforts."
  },
  {
    "testId": "st-mock-test-01",
    "question": "What is the first step in the test process?",
    "options": ["Test Execution", "Test Planning", "Test Analysis", "Test Closure"],
    "correctOption": 2,
    "explanation": "Test analysis is the first step, where testers understand the test basis and identify what needs to be tested."
  },
  {
    "testId": "st-mock-test-02",
    "question": "What is the Page Object Model (POM) in automation testing?",
    "options": [
      "A design pattern that creates objects for each page, encapsulating UI elements and actions",
      "A model for storing test data",
      "A type of test framework",
      "A reporting tool"
    ],
    "correctOption": 0,
    "explanation": "POM is a design pattern that improves test maintainability by centralizing page-specific elements and methods."
  },
  {
    "testId": "st-mock-test-02",
    "question": "Which Selenium WebDriver method is used to locate an element by its ID?",
    "options": ["driver.findElement(By.id())", "driver.findElement(By.ID())", "driver.findElement(By.id())", "driver.findElement(By.ID())"],
    "correctOption": 0,
    "explanation": "The correct method is `driver.findElement(By.id(\"id\"))` using the By.id locator."
  },
  {
    "testId": "st-mock-test-02",
    "question": "What is the main advantage of using the Page Object Model (POM) in Selenium?",
    "options": [
      "It reduces code duplication and improves maintainability",
      "It makes tests run faster",
      "It eliminates the need for locators",
      "It works only with Java"
    ],
    "correctOption": 0,
    "explanation": "POM centralizes UI element definitions, reducing duplication and making tests easier to maintain when the UI changes."
  },
  {
    "testId": "st-mock-test-02",
    "question": "Which TestNG annotation is used to run a method before each test method?",
    "options": ["@BeforeMethod", "@BeforeTest", "@BeforeClass", "@BeforeSuite"],
    "correctOption": 0,
    "explanation": "`@BeforeMethod` executes before each `@Test` method, ideal for setup actions like browser initialization."
  },
  {
    "testId": "st-mock-test-02",
    "question": "What is the purpose of `@DataProvider` in TestNG?",
    "options": [
      "To supply test data to a test method",
      "To configure test dependencies",
      "To define test groups",
      "To set test priority"
    ],
    "correctOption": 0,
    "explanation": "`@DataProvider` allows data-driven testing by providing multiple sets of data to a test method."
  },
  {
    "testId": "st-mock-test-02",
    "question": "Which method is used to click an element in Selenium WebDriver?",
    "options": ["element.click()", "element.press()", "element.select()", "element.submit()"],
    "correctOption": 0,
    "explanation": "The `click()` method simulates a mouse click on the element."
  },
  {
    "testId": "st-mock-test-02",
    "question": "What is the difference between `driver.close()` and `driver.quit()`?",
    "options": [
      "close() closes the current window; quit() closes all windows and ends the session",
      "quit() closes the current window; close() closes all windows",
      "Both close the current window",
      "Both close all windows"
    ],
    "correctOption": 0,
    "explanation": "`close()` closes the current browser tab/window, while `quit()` terminates the WebDriver session and all open windows."
  },
  {
    "testId": "st-mock-test-02",
    "question": "Which tool is widely used for API testing?",
    "options": ["Postman", "Selenium", "JMeter", "Eclipse"],
    "correctOption": 0,
    "explanation": "Postman is one of the most popular tools for API testing, providing a rich interface for sending requests and validating responses."
  },
  {
    "testId": "st-mock-test-02",
    "question": "What is a REST API?",
    "options": [
      "An API that follows Representational State Transfer principles using HTTP methods",
      "An API that uses only SOAP protocol",
      "An API that requires no authentication",
      "An API that only uses XML"
    ],
    "correctOption": 0,
    "explanation": "REST APIs are stateless, resource-based APIs that use standard HTTP methods like GET, POST, PUT, DELETE."
  },
  {
    "testId": "st-mock-test-02",
    "question": "Which HTTP status code indicates 'Created'?",
    "options": ["200", "201", "204", "202"],
    "correctOption": 1,
    "explanation": "201 Created indicates that a new resource was successfully created as a result of the request."
  },
  {
    "testId": "st-mock-test-02",
    "question": "What is the purpose of assertions in API testing?",
    "options": [
      "To validate that the response matches expected conditions",
      "To send the request",
      "To manage headers",
      "To handle authentication"
    ],
    "correctOption": 0,
    "explanation": "Assertions verify the response status, headers, and body against expected results to determine pass/fail."
  },
  {
    "testId": "st-mock-test-02",
    "question": "Which tool is commonly used for performance testing of APIs?",
    "options": ["JMeter", "Postman", "Selenium", "Pact"],
    "correctOption": 0,
    "explanation": "Apache JMeter is designed for load and performance testing of APIs and web applications."
  },
  {
    "testId": "st-mock-test-02",
    "question": "What is OAuth 2.0 used for?",
    "options": [
      "Delegated authorization to access resources on behalf of users",
      "Basic authentication",
      "API mocking",
      "Load testing"
    ],
    "correctOption": 0,
    "explanation": "OAuth 2.0 is an authorization framework that allows applications to obtain limited access to user accounts without sharing passwords."
  },
  {
    "testId": "st-mock-test-02",
    "question": "What is the purpose of the `Authorization` header in HTTP?",
    "options": [
      "To provide credentials for the server to authenticate the client",
      "To specify the content type",
      "To specify the expected response format",
      "To specify the user agent"
    ],
    "correctOption": 0,
    "explanation": "The Authorization header contains credentials like Bearer tokens or Basic Auth to authenticate the client."
  },
  {
    "testId": "st-mock-test-02",
    "question": "Which of the following is a best practice for test automation?",
    "options": [
      "Automate repetitive and stable test cases",
      "Automate all tests including exploratory",
      "Automate only once and never update",
      "Automate before the code is stable"
    ],
    "correctOption": 0,
    "explanation": "Automating repetitive, stable test cases (like regression tests) provides the best ROI. Exploratory tests are best left manual."
  },
  {
    "testId": "st-mock-test-02",
    "question": "What is the purpose of a continuous integration (CI) pipeline in testing?",
    "options": [
      "To automatically build and test code on every change",
      "To manually run tests",
      "To deploy applications",
      "To manage test data"
    ],
    "correctOption": 0,
    "explanation": "CI pipelines automatically execute tests on code changes, providing rapid feedback and preventing regressions."
  },
  {
    "testId": "st-mock-test-02",
    "question": "Which of the following is a performance testing type?",
    "options": ["Unit Testing", "Integration Testing", "Stress Testing", "Functional Testing"],
    "correctOption": 2,
    "explanation": "Stress testing is a non-functional testing type that evaluates the system's behavior under extreme conditions."
  },
  {
    "testId": "st-mock-test-02",
    "question": "What is the difference between load testing and stress testing?",
    "options": [
      "Load testing simulates expected user load; stress testing pushes beyond limits to find breaking point",
      "Stress testing simulates expected load; load testing pushes beyond limits",
      "Both simulate expected load",
      "Both push beyond limits"
    ],
    "correctOption": 0,
    "explanation": "Load testing verifies performance under normal/expected conditions. Stress testing tests the limits to see when the system fails."
  },
  {
    "testId": "st-mock-test-02",
    "question": "What is a security vulnerability in API testing?",
    "options": [
      "An SQL injection point",
      "A slow response time",
      "An invalid status code",
      "A missing response header"
    ],
    "correctOption": 0,
    "explanation": "SQL Injection is a common API security vulnerability where attackers execute malicious SQL queries."
  },
  {
    "testId": "st-mock-test-02",
    "question": "What is the purpose of API rate limiting?",
    "options": [
      "To restrict the number of requests a client can make in a given time",
      "To increase response speed",
      "To limit the response size",
      "To restrict API functionality"
    ],
    "correctOption": 0,
    "explanation": "Rate limiting prevents abuse and ensures fair usage by limiting the number of API calls per client."
  },
  {
    "testId": "st-mock-test-02",
    "question": "Which of the following is a valid Selenium WebDriver locator strategy?",
    "options": ["By.xpath", "By.cssSelector", "By.className", "All of the above"],
    "correctOption": 3,
    "explanation": "Selenium WebDriver supports various locator strategies including xpath, cssSelector, className, id, name, linkText, etc."
  },
  {
    "testId": "st-mock-test-02",
    "question": "What is the role of a test automation framework?",
    "options": [
      "To provide guidelines and reusable components for creating and maintaining tests",
      "To execute tests only",
      "To generate test data",
      "To replace manual testing entirely"
    ],
    "correctOption": 0,
    "explanation": "A framework provides standards, structure, and reusable utilities, making automation more efficient and maintainable."
  },
  {
    "testId": "st-mock-test-02",
    "question": "Which of the following is an example of a white-box testing technique?",
    "options": ["Equivalence Partitioning", "Boundary Value Analysis", "Statement Coverage", "Decision Table Testing"],
    "correctOption": 2,
    "explanation": "Statement coverage is a white-box technique that ensures each line of code is executed at least once."
  },
  {
    "testId": "st-mock-test-02",
    "question": "What is the purpose of a test harness?",
    "options": [
      "To provide the infrastructure for executing tests, including setup and reporting",
      "To write test cases",
      "To design test scripts",
      "To manage test data"
    ],
    "correctOption": 0,
    "explanation": "A test harness supplies the runtime environment and tools needed to run automated tests."
  },
  {
    "testId": "st-mock-test-02",
    "question": "What is the difference between `findElement` and `findElements` in Selenium?",
    "options": [
      "findElement returns the first matching element; findElements returns a list of all matching elements",
      "findElements returns the first; findElement returns all",
      "Both return the first",
      "Both return all"
    ],
    "correctOption": 0,
    "explanation": "`findElement` throws an exception if no element is found. `findElements` returns an empty list if none found."
  },
  {
    "testId": "st-mock-test-02",
    "question": "Which status code means 'Unauthorized' in HTTP?",
    "options": ["401", "403", "400", "405"],
    "correctOption": 0,
    "explanation": "401 Unauthorized indicates that authentication is required and has failed or not been provided."
  },
  {
    "testId": "st-mock-test-02",
    "question": "What is the concept of 'continuous testing' in DevOps?",
    "options": [
      "Running automated tests as part of the CI/CD pipeline for rapid feedback",
      "Testing only at the end",
      "Testing only manually",
      "Testing in isolation"
    ],
    "correctOption": 0,
    "explanation": "Continuous testing integrates testing into the pipeline, ensuring immediate feedback on code changes."
  },
  {
    "testId": "st-mock-test-02",
    "question": "Which of the following is a non-functional testing type?",
    "options": ["Unit Testing", "Integration Testing", "Usability Testing", "System Testing"],
    "correctOption": 2,
    "explanation": "Usability testing evaluates how user-friendly the system is, which is non-functional. Unit, integration, and system testing are functional."
  },
  {
    "testId": "st-mock-test-02",
    "question": "What is the purpose of a defect triage meeting?",
    "options": [
      "To prioritize and assign defects for resolution",
      "To write test cases",
      "To plan the next release",
      "To test the software"
    ],
    "correctOption": 0,
    "explanation": "Defect triage meetings review and prioritize defects based on severity and impact."
  },
  {
    "testId": "st-mock-test-03",
    "question": "You are testing an e-commerce checkout process. Which is the most critical test case?",
    "options": [
      "Verify that the payment gateway returns a success response after a valid transaction",
      "Test that the order confirmation email is formatted correctly",
      "Check the visual alignment of the checkout button",
      "Test the total price calculation with multiple items"
    ],
    "correctOption": 0,
    "explanation": "Payment success is critical for business. If payment fails, the business loses revenue, making it the most important test."
  },
  {
    "testId": "st-mock-test-03",
    "question": "In an Agile team, when should testers be involved in the planning phase?",
    "options": [
      "From the beginning, to understand requirements and design test strategies",
      "Only after development is complete",
      "Only during the sprint review",
      "Only when the code is ready for testing"
    ],
    "correctOption": 0,
    "explanation": "Testers should participate in planning to influence quality, create test strategies, and identify risks early."
  },
  {
    "testId": "st-mock-test-03",
    "question": "What is the primary goal of exploratory testing?",
    "options": [
      "To discover defects by simultaneously learning and testing without pre-scripted cases",
      "To execute predefined test scripts",
      "To automate regression tests",
      "To test the user interface"
    ],
    "correctOption": 0,
    "explanation": "Exploratory testing relies on the tester's skill and intuition to find defects in real-time without formal test cases."
  },
  {
    "testId": "st-mock-test-03",
    "question": "Which of the following is a good test automation candidate?",
    "options": [
      "Regression test suite that runs every build",
      "Exploratory test suite",
      "Usability tests",
      "Ad-hoc tests"
    ],
    "correctOption": 0,
    "explanation": "Regression tests are repetitive and stable, making them ideal candidates for automation to save time and ensure consistency."
  },
  {
    "testId": "st-mock-test-03",
    "question": "What is the role of a test lead in a testing project?",
    "options": [
      "To lead the testing team, define strategy, and ensure quality",
      "To write all test cases",
      "To execute all tests",
      "To fix defects"
    ],
    "correctOption": 0,
    "explanation": "A test lead oversees the testing team, sets direction, coordinates with stakeholders, and ensures testing objectives are met."
  },
  {
    "testId": "st-mock-test-03",
    "question": "Which metric is most useful for measuring test effectiveness?",
    "options": ["Defect Detection Percentage (DDP)", "Number of test cases written", "Test execution time", "Number of testers"],
    "correctOption": 0,
    "explanation": "DDP measures the percentage of defects found during testing versus total defects, indicating how effective testing is."
  },
  {
    "testId": "st-mock-test-03",
    "question": "What is the purpose of a test summary report?",
    "options": [
      "To provide an overview of testing activities, results, and risks to stakeholders",
      "To list all test cases",
      "To track defects only",
      "To plan future tests"
    ],
    "correctOption": 0,
    "explanation": "A test summary report communicates key outcomes, coverage, defects, and recommendations for release readiness."
  },
  {
    "testId": "st-mock-test-03",
    "question": "When should you stop testing?",
    "options": [
      "When the exit criteria defined in the test plan are met",
      "When the time runs out",
      "When all testers are busy",
      "When management decides"
    ],
    "correctOption": 0,
    "explanation": "Testing should stop based on objective exit criteria such as test coverage, defect resolution, and business risks."
  },
  {
    "testId": "st-mock-test-03",
    "question": "What is the difference between a regression test and a smoke test?",
    "options": [
      "Regression test is comprehensive; smoke test is a quick check of critical functionality",
      "Smoke test is comprehensive; regression test is a quick check",
      "Both are comprehensive",
      "Both are quick checks"
    ],
    "correctOption": 0,
    "explanation": "Smoke testing is a shallow, broad check of core features. Regression testing is a full, deep verification that changes haven't broken anything."
  },
  {
    "testId": "st-mock-test-03",
    "question": "What is the concept of 'shift-left testing'?",
    "options": [
      "Testing earlier in the development lifecycle",
      "Testing only at the end",
      "Shifting testing to the right",
      "Removing testing"
    ],
    "correctOption": 0,
    "explanation": "Shift-left testing involves starting testing activities as early as possible, reducing defect costs and improving quality."
  },
  {
    "testId": "st-mock-test-03",
    "question": "Which of the following is a risk associated with test automation?",
    "options": [
      "High maintenance costs due to application changes",
      "Automated tests never fail",
      "Automation reduces test coverage",
      "Automation increases manual effort"
    ],
    "correctOption": 0,
    "explanation": "As the application changes, automated tests must be updated, which can become expensive and time-consuming."
  },
  {
    "testId": "st-mock-test-03",
    "question": "What is the role of a quality analyst (QA) in an agile team?",
    "options": [
      "To ensure quality is built in through collaboration and testing throughout the sprint",
      "To test only at the end of each sprint",
      "To write all code",
      "To manage the product backlog"
    ],
    "correctOption": 0,
    "explanation": "In agile, QA collaborates with developers and product owners from the start, testing continuously and advocating for quality."
  },
  {
    "testId": "st-mock-test-03",
    "question": "What is the purpose of a test charter in exploratory testing?",
    "options": [
      "To guide the tester's session with a mission and scope",
      "To list all test cases",
      "To automate tests",
      "To report defects"
    ],
    "correctOption": 0,
    "explanation": "A test charter defines the objective, area to explore, and timebox for an exploratory testing session."
  },
  {
    "testId": "st-mock-test-03",
    "question": "Which of the following is an ethical concern in software testing?",
    "options": [
      "Ignoring defects to meet deadlines",
      "Testing only on Windows",
      "Using open-source tools",
      "Automating all tests"
    ],
    "correctOption": 0,
    "explanation": "Ethical testing involves reporting all defects truthfully, even if it impacts schedules. Ignoring defects is unethical."
  },
  {
    "testId": "st-mock-test-03",
    "question": "What is the difference between a stub and a driver in integration testing?",
    "options": [
      "A stub is called by the module under test; a driver calls the module under test",
      "A driver is called by the module; a stub calls the module",
      "Both are the same",
      "Stubs are for top-down; drivers are for bottom-up"
    ],
    "correctOption": 0,
    "explanation": "Stubs simulate lower-level modules (called by the tested module). Drivers simulate higher-level modules (calling the tested module)."
  },
  {
    "testId": "st-mock-test-03",
    "question": "Which of the following is a factor in determining test automation ROI?",
    "options": [
      "Test execution frequency",
      "Number of manual testers",
      "Project budget",
      "All of the above"
    ],
    "correctOption": 3,
    "explanation": "ROI depends on how often tests are run, the cost of manual testing vs. automation, and the project budget."
  },
  {
    "testId": "st-mock-test-03",
    "question": "What is the purpose of a test data management strategy?",
    "options": [
      "To ensure that test data is available, relevant, and secure",
      "To write test scripts",
      "To design test cases",
      "To report defects"
    ],
    "correctOption": 0,
    "explanation": "Test data management ensures the right data is available for testing, while maintaining data privacy and integrity."
  },
  {
    "testId": "st-mock-test-03",
    "question": "What is the difference between a test environment and a production environment?",
    "options": [
      "Test environment is isolated and used for testing; production is live for end users",
      "Production is isolated; test is live",
      "Both are the same",
      "Test environment is more secure"
    ],
    "correctOption": 0,
    "explanation": "The test environment is configured to mimic production but is used for testing purposes; production is the live system."
  },
  {
    "testId": "st-mock-test-03",
    "question": "Which of the following is a key skill for a software tester?",
    "options": [
      "Communication and attention to detail",
      "Only coding skills",
      "Only design skills",
      "Only management skills"
    ],
    "correctOption": 0,
    "explanation": "Testers need strong communication to report defects clearly and attention to detail to find subtle issues."
  },
  {
    "testId": "st-mock-test-03",
    "question": "What is the purpose of a test run in a test management tool?",
    "options": [
      "To execute a set of test cases and record results",
      "To write test cases",
      "To design test plans",
      "To manage defects"
    ],
    "correctOption": 0,
    "explanation": "A test run is the execution of a collection of test cases, capturing pass/fail status and defects."
  },
  {
    "testId": "st-mock-test-03",
    "question": "What is the concept of 'test debt'",
    "options": [
      "The accumulation of untested or poorly tested areas due to time pressure",
      "The cost of automation tools",
      "The number of defects found",
      "The number of test cases written"
    ],
    "correctOption": 0,
    "explanation": "Test debt refers to the technical debt in testing, where testing is postponed or skipped, increasing future risk."
  },
  {
    "testId": "st-mock-test-03",
    "question": "Which of the following is a common challenge in test automation?",
    "options": [
      "Flaky tests that fail intermittently",
      "Tests that never fail",
      "Tests that run too fast",
      "Tests that require no maintenance"
    ],
    "correctOption": 0,
    "explanation": "Flaky tests are a major challenge where tests fail randomly, reducing trust in automation and requiring investigation."
  },
  {
    "testId": "st-mock-test-03",
    "question": "What is the purpose of a traceability matrix?",
    "options": [
      "To map requirements to test cases to ensure full coverage",
      "To track defects",
      "To track test execution",
      "To manage test data"
    ],
    "correctOption": 0,
    "explanation": "A requirements traceability matrix (RTM) links each requirement to its corresponding test cases, ensuring all requirements are covered."
  },
  {
    "testId": "st-mock-test-03",
    "question": "What is the difference between a test script and a test suite?",
    "options": [
      "A test script is a single automated test; a test suite is a collection of scripts",
      "A test suite is a single test; a script is a collection",
      "Both are the same",
      "Test scripts are manual; test suites are automated"
    ],
    "correctOption": 0,
    "explanation": "A test script is a single test (manual or automated). A test suite is a group of test scripts organized for execution."
  },
  {
    "testId": "st-mock-test-03",
    "question": "What is the role of a test environment administrator?",
    "options": [
      "To maintain and configure test environments",
      "To write test cases",
      "To execute tests",
      "To manage defects"
    ],
    "correctOption": 0,
    "explanation": "The environment admin ensures the test environment is stable, correctly configured, and available for testers."
  },
  {
    "testId": "st-mock-test-03",
    "question": "Which of the following is a benefit of using a risk-based testing approach?",
    "options": [
      "It focuses testing on areas with the highest business impact",
      "It reduces test execution time",
      "It eliminates all defects",
      "It guarantees 100% coverage"
    ],
    "correctOption": 0,
    "explanation": "Risk-based testing prioritizes testing efforts on high-risk areas, maximizing defect detection where it matters most."
  },
  {
    "testId": "st-mock-test-03",
    "question": "What is the purpose of a test estimation technique?",
    "options": [
      "To predict the time, effort, and resources needed for testing",
      "To estimate the number of defects",
      "To estimate the quality of the software",
      "To estimate the number of test cases"
    ],
    "correctOption": 0,
    "explanation": "Test estimation helps in planning and resource allocation by predicting the testing effort required."
  },
  {
    "testId": "st-mock-test-03",
    "question": "What is the difference between a test case and a test script?",
    "options": [
      "A test case is a documented set of conditions and expected results; a test script is the executable version (manual or automated)",
      "A test script is documented; a test case is executable",
      "Both are the same",
      "Test cases are for automation; test scripts are for manual"
    ],
    "correctOption": 0,
    "explanation": "A test case is the specification of what to test. A test script is the implementation (could be manual steps or code)."
  },
  {
    "testId": "st-mock-test-03",
    "question": "Which of the following is a key performance indicator (KPI) for testing?",
    "options": [
      "Defect detection rate",
      "Number of test cases written",
      "Number of testers",
      "Project budget"
    ],
    "correctOption": 0,
    "explanation": "Defect detection rate measures how many defects are found in testing vs. total, indicating testing effectiveness."
  },
  {
    "testId": "st-mock-test-03",
    "question": "What is the concept of 'test-first' development?",
    "options": [
      "Writing test cases before writing the code (TDD)",
      "Writing code before tests",
      "Testing after deployment",
      "Testing only at the end"
    ],
    "correctOption": 0,
    "explanation": "Test-driven development (TDD) requires writing tests first to guide coding and ensure the code meets requirements."
  },
  {
    "testId": "st-mock-test-03",
    "question": "What is the purpose of a test review?",
    "options": [
      "To inspect test artifacts for errors and improvements",
      "To execute tests",
      "To fix defects",
      "To deploy the software"
    ],
    "correctOption": 0,
    "explanation": "Test reviews find defects in test plans, cases, and scripts, improving quality before execution."
  },
  {
    "testId": "st-mock-test-03",
    "question": "Which of the following is a non-technical skill important for testers?",
    "options": [
      "Communication and collaboration",
      "Programming languages",
      "Database knowledge",
      "Tool expertise"
    ],
    "correctOption": 0,
    "explanation": "Communication is crucial for testers to articulate defects, collaborate with developers, and report to stakeholders."
  },
  {
    "testId": "st-mock-test-03",
    "question": "What is the purpose of a test execution report?",
    "options": [
      "To summarize the results of test execution, including pass/fail and defects",
      "To list all test cases",
      "To plan future tests",
      "To design test strategies"
    ],
    "correctOption": 0,
    "explanation": "A test execution report provides a snapshot of testing progress and outcomes to stakeholders."
  },
  {
    "testId": "st-mock-test-03",
    "question": "What is the difference between a bug and a feature request?",
    "options": [
      "A bug is unintended behavior; a feature request is a desired new functionality",
      "A feature request is a bug; a bug is a feature",
      "Both are defects",
      "Both are enhancements"
    ],
    "correctOption": 0,
    "explanation": "A bug is something that doesn't work as intended, while a feature request is a request to add new functionality."
  },
  {
    "testId": "st-mock-test-03",
    "question": "Which of the following is true about test automation in an agile environment?",
    "options": [
      "Automation should be part of the definition of done for user stories",
      "Automation is only needed for regression",
      "Automation is optional",
      "Automation replaces all manual testing"
    ],
    "correctOption": 0,
    "explanation": "In agile, automation is encouraged to ensure continuous quality, and tests are often automated as part of each story."
  },
  {
    "testId": "st-mock-test-03",
    "question": "What is the purpose of a test coverage matrix?",
    "options": [
      "To track which requirements have been tested and to what extent",
      "To list all defects",
      "To track test execution time",
      "To manage test data"
    ],
    "correctOption": 0,
    "explanation": "A test coverage matrix ensures traceability and helps identify gaps in test coverage."
  },
  {
    "testId": "st-mock-test-03",
    "question": "Which of the following is a common pitfall in test automation?",
    "options": [
      "Automating tests that are frequently changing",
      "Automating stable regression tests",
      "Using a framework",
      "Running tests in CI/CD"
    ],
    "correctOption": 0,
    "explanation": "Automating frequently changing tests leads to high maintenance costs and is not recommended."
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
console.log('Added ' + newQuestions.length + ' mock questions to questions.js');
