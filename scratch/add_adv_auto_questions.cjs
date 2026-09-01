const fs = require('fs');

const questions = [
  {
    "testId": "adv-auto-test-01",
    "question": "What are the three main types of test automation frameworks based on the test automation pyramid?",
    "options": [
      "Unit, Integration, End-to-End",
      "UI, API, Unit",
      "Functional, Performance, Security",
      "Smoke, Regression, Acceptance"
    ],
    "correctOption": 0,
    "explanation": "The test automation pyramid recommends having a large number of fast unit tests, fewer integration tests, and the fewest end-to-end UI tests."
  },
  {
    "testId": "adv-auto-test-01",
    "question": "What is the primary difference between a Data-Driven Framework and a Keyword-Driven Framework?",
    "options": [
      "Data-Driven uses external data sources; Keyword-Driven uses action keywords",
      "Keyword-Driven uses external data; Data-Driven uses action keywords",
      "Both are the same",
      "Data-Driven is for API testing; Keyword-Driven is for UI testing"
    ],
    "correctOption": 0,
    "explanation": "Data-Driven frameworks separate test logic from test data using external sources. Keyword-Driven frameworks represent test steps as action keywords."
  },
  {
    "testId": "adv-auto-test-01",
    "question": "What design pattern is commonly used to create scalable and maintainable test automation frameworks?",
    "options": ["Page Object Model", "Singleton", "Factory", "All of the above"],
    "correctOption": 3,
    "explanation": "Multiple design patterns are used in scalable frameworks: Page Object Model for UI abstraction, Singleton for managing driver instances, and Factory for creating page objects."
  },
  {
    "testId": "adv-auto-test-01",
    "question": "What is the purpose of a test data management strategy in automation?",
    "options": [
      "To ensure test data is available, relevant, and isolated",
      "To generate random data",
      "To reduce test execution time",
      "To eliminate the need for assertions"
    ],
    "correctOption": 0,
    "explanation": "Test data management ensures that test data is available, relevant, and isolated, preventing tests from affecting each other."
  },
  {
    "testId": "adv-auto-test-01",
    "question": "What is the 'self-healing' capability in modern test automation tools?",
    "options": [
      "The ability to automatically recover tests when locators change",
      "The ability to fix test code automatically",
      "The ability to heal the application under test",
      "The ability to heal test data"
    ],
    "correctOption": 0,
    "explanation": "Self-healing tests can automatically update locators when the application UI changes, reducing maintenance effort."
  },
  {
    "testId": "adv-auto-test-01",
    "question": "Which design pattern is used to ensure only one instance of a WebDriver is created during test execution?",
    "options": ["Singleton Pattern", "Factory Pattern", "Page Object Pattern", "Decorator Pattern"],
    "correctOption": 0,
    "explanation": "The Singleton pattern ensures that only one instance of a class (like WebDriver) is created and shared across tests."
  },
  {
    "testId": "adv-auto-test-01",
    "question": "What is the main advantage of modularizing test automation code?",
    "options": [
      "Improved maintainability and reusability",
      "Faster test execution",
      "Simpler test data",
      "Less code overall"
    ],
    "correctOption": 0,
    "explanation": "Modular design improves maintainability and reusability by organizing code into independent, manageable modules."
  },
  {
    "testId": "adv-auto-test-01",
    "question": "What is a common approach for handling dynamic elements in UI automation?",
    "options": [
      "Using explicit waits with ExpectedConditions",
      "Using Thread.sleep",
      "Using hardcoded delays",
      "Using implicit waits only"
    ],
    "correctOption": 0,
    "explanation": "Explicit waits with ExpectedConditions are the recommended approach for handling dynamic elements in modern automation."
  },
  {
    "testId": "adv-auto-test-01",
    "question": "Which of the following is NOT a recommended practice for automation framework design?",
    "options": [
      "Using meaningful and consistent naming conventions",
      "Hardcoding test data in test scripts",
      "Implementing logging and reporting",
      "Using version control for test scripts"
    ],
    "correctOption": 1,
    "explanation": "Hardcoding test data in test scripts is not recommended as it reduces maintainability and reusability."
  },
  {
    "testId": "adv-auto-test-01",
    "question": "What is the purpose of a test execution report in an automation framework?",
    "options": [
      "To provide visibility into test results and failures",
      "To replace manual testing",
      "To generate test data",
      "To create test cases"
    ],
    "correctOption": 0,
    "explanation": "Test reports provide visibility into test execution results, helping teams understand the health of the application."
  },
  {
    "testId": "adv-auto-test-01",
    "question": "What is the difference between a test automation framework and a test automation tool?",
    "options": [
      "A framework provides guidelines and practices; a tool is a software application",
      "A tool provides guidelines; a framework is a software application",
      "Both are the same",
      "Frameworks are only for UI testing; tools are for API testing"
    ],
    "correctOption": 0,
    "explanation": "A test automation framework is a set of guidelines, practices, and reusable components. A tool is the software used to execute tests."
  },
  {
    "testId": "adv-auto-test-01",
    "question": "What is the purpose of the Factory design pattern in test automation?",
    "options": [
      "To create objects without specifying the exact class",
      "To ensure only one instance exists",
      "To separate test logic from test data",
      "To handle exceptions"
    ],
    "correctOption": 0,
    "explanation": "The Factory pattern provides a way to create objects without specifying the exact class, which is useful for creating page objects."
  },
  {
    "testId": "adv-auto-test-01",
    "question": "What is a Hybrid Framework in test automation?",
    "options": [
      "A combination of Data-Driven and Keyword-Driven frameworks",
      "A framework that combines UI and API testing",
      "A framework that combines multiple programming languages",
      "A framework that combines manual and automated testing"
    ],
    "correctOption": 0,
    "explanation": "A Hybrid Framework combines Data-Driven and Keyword-Driven approaches to leverage the benefits of both."
  },
  {
    "testId": "adv-auto-test-01",
    "question": "How do you handle environment-specific configurations in a test automation framework?",
    "options": [
      "Using configuration files or environment variables",
      "Hardcoding URLs in test scripts",
      "Using separate test suites for each environment",
      "Using conditional statements"
    ],
    "correctOption": 0,
    "explanation": "Using configuration files (e.g., config.json, .env) or environment variables is the recommended approach."
  },
  {
    "testId": "adv-auto-test-02",
    "question": "What is the difference between REST and SOAP APIs?",
    "options": [
      "REST is architectural style; SOAP is a protocol",
      "SOAP is architectural style; REST is a protocol",
      "Both are protocols",
      "Both are architectural styles"
    ],
    "correctOption": 0,
    "explanation": "REST is an architectural style using HTTP methods; SOAP is a protocol with strict standards and XML-based messaging."
  },
  {
    "testId": "adv-auto-test-02",
    "question": "Which tool is commonly used for Java-based REST API automation?",
    "options": ["REST Assured", "Postman", "Selenium", "JMeter"],
    "correctOption": 0,
    "explanation": "REST Assured is a popular Java library for testing and validating REST APIs."
  },
  {
    "testId": "adv-auto-test-02",
    "question": "What is contract testing in APIs?",
    "options": [
      "Testing that the API provider and consumer agree on the expected request/response",
      "Testing the API performance",
      "Testing the API security",
      "Testing the API documentation"
    ],
    "correctOption": 0,
    "explanation": "Contract testing ensures that the API provider and consumer have a shared understanding of the expected interactions."
  },
  {
    "testId": "adv-auto-test-02",
    "question": "Which tool is commonly used for contract testing?",
    "options": ["Pact", "Postman", "REST Assured", "JMeter"],
    "correctOption": 0,
    "explanation": "Pact is a popular tool for consumer-driven contract testing between API providers and consumers."
  },
  {
    "testId": "adv-auto-test-02",
    "question": "What is the difference between API testing and API automation?",
    "options": [
      "API testing is manual validation; API automation is scripted execution",
      "Both are manual",
      "Both are automated",
      "API testing is for SOAP; API automation is for REST"
    ],
    "correctOption": 0,
    "explanation": "API testing involves manual validation of API behavior; API automation uses scripts to execute test cases automatically."
  },
  {
    "testId": "adv-auto-test-02",
    "question": "Which of the following is a GraphQL testing tool?",
    "options": ["GraphQL Playground", "Postman", "Apollo", "All of the above"],
    "correctOption": 3,
    "explanation": "GraphQL Playground, Postman (with GraphQL support), and Apollo Studio can all be used for GraphQL testing."
  },
  {
    "testId": "adv-auto-test-02",
    "question": "How do you handle authentication in API automation?",
    "options": [
      "Using OAuth2 or JWT tokens in request headers",
      "Using Basic Auth only",
      "Using API keys only",
      "All of the above"
    ],
    "correctOption": 0,
    "explanation": "Authentication in API automation typically uses tokens (JWT, OAuth2) or API keys in the Authorization header."
  },
  {
    "testId": "adv-auto-test-02",
    "question": "What is the purpose of JSON Schema validation in API testing?",
    "options": [
      "To validate the structure and data types of the JSON response",
      "To validate the response time",
      "To validate the status code",
      "To validate the request headers"
    ],
    "correctOption": 0,
    "explanation": "JSON Schema validation ensures that the API response follows the expected structure and data types."
  },
  {
    "testId": "adv-auto-test-02",
    "question": "What is API mocking?",
    "options": [
      "Simulating API responses without calling the real API",
      "Testing the API in production",
      "Recording API requests",
      "Generating API documentation"
    ],
    "correctOption": 0,
    "explanation": "API mocking simulates API responses to test the client when the real API is unavailable or incomplete."
  },
  {
    "testId": "adv-auto-test-02",
    "question": "How do you handle dynamic responses in API testing (e.g., timestamp, generated IDs)?",
    "options": [
      "Using regular expressions or JSONPath to extract and validate",
      "Ignoring dynamic fields",
      "Hardcoding expected values",
      "Using static responses"
    ],
    "correctOption": 0,
    "explanation": "Dynamic responses are handled by extracting values using JSONPath or regular expressions and validating them appropriately."
  },
  {
    "testId": "adv-auto-test-02",
    "question": "What is the difference between `POST` and `PUT` in REST APIs?",
    "options": [
      "POST creates a new resource; PUT updates or creates a resource at a specific URI",
      "PUT creates a new resource; POST updates a resource",
      "Both create a new resource",
      "Both update a resource"
    ],
    "correctOption": 0,
    "explanation": "POST creates a new resource, while PUT updates an existing resource or creates it at a specific URI (idempotent)."
  },
  {
    "testId": "adv-auto-test-02",
    "question": "What is the role of Postman in API automation?",
    "options": [
      "To send requests, validate responses, and create collections",
      "To only send GET requests",
      "To only generate documentation",
      "To replace REST Assured"
    ],
    "correctOption": 0,
    "explanation": "Postman is a comprehensive API testing tool for sending requests, validating responses, and creating automated test collections."
  },
  {
    "testId": "adv-auto-test-03",
    "question": "What is Appium?",
    "options": [
      "A mobile automation testing framework",
      "A web automation tool",
      "A performance testing tool",
      "A security testing tool"
    ],
    "correctOption": 0,
    "explanation": "Appium is an open-source mobile automation testing framework that supports both Android and iOS applications."
  },
  {
    "testId": "adv-auto-test-03",
    "question": "Which driver does Appium use for Android testing?",
    "options": ["UIAutomator2", "XCUITest", "Espresso", "UiAutomator"],
    "correctOption": 0,
    "explanation": "Appium uses UIAutomator2 (the recommended driver) for Android testing, built on Google's UIAutomator framework."
  },
  {
    "testId": "adv-auto-test-03",
    "question": "Which driver does Appium use for iOS testing?",
    "options": ["XCUITest", "UIAutomator2", "Espresso", "WebDriverAgent"],
    "correctOption": 0,
    "explanation": "Appium uses XCUITest for iOS testing, which is Apple's official UI testing framework."
  },
  {
    "testId": "adv-auto-test-03",
    "question": "What are Desired Capabilities in Appium?",
    "options": [
      "Key-value pairs that define the test environment and configuration",
      "A type of locator",
      "A test result format",
      "A reporting tool"
    ],
    "correctOption": 0,
    "explanation": "Desired Capabilities are key-value pairs that tell Appium how to configure the test environment (device, platform, app)."
  },
  {
    "testId": "adv-auto-test-03",
    "question": "What is the difference between testing on real devices and emulators?",
    "options": [
      "Real devices provide accurate hardware behavior; emulators are software simulations",
      "Emulators are more accurate than real devices",
      "Both are equally accurate",
      "Real devices are only for iOS; emulators are only for Android"
    ],
    "correctOption": 0,
    "explanation": "Real devices provide accurate hardware and OS behavior; emulators simulate the environment but can have performance differences."
  },
  {
    "testId": "adv-auto-test-03",
    "question": "Which tool is commonly used for cloud-based mobile testing?",
    "options": ["BrowserStack", "Sauce Labs", "LambdaTest", "All of the above"],
    "correctOption": 3,
    "explanation": "BrowserStack, Sauce Labs, and LambdaTest are popular cloud platforms for mobile and web testing on real devices."
  },
  {
    "testId": "adv-auto-test-03",
    "question": "How do you handle gestures in Appium?",
    "options": [
      "Using the TouchAction or MultiTouchAction classes",
      "Using click() method",
      "Using sendKeys() method",
      "Using JavaScriptExecutor"
    ],
    "correctOption": 0,
    "explanation": "Appium provides TouchAction and MultiTouchAction classes for handling gestures like swipe, tap, and zoom."
  },
  {
    "testId": "adv-auto-test-03",
    "question": "What is a hybrid app in mobile testing?",
    "options": [
      "An app that combines native and web components",
      "An app that runs on multiple platforms",
      "An app that uses only web components",
      "An app that uses only native components"
    ],
    "correctOption": 0,
    "explanation": "Hybrid apps combine native components with web views, allowing testing with both Appium (native) and web automation tools."
  },
  {
    "testId": "adv-auto-test-03",
    "question": "Which of the following is a mobile automation testing challenge?",
    "options": [
      "Handling app lifecycle and inter-app communication",
      "Handling keyboard inputs only",
      "Testing only on emulators",
      "Testing without an app"
    ],
    "correctOption": 0,
    "explanation": "Mobile automation challenges include handling app lifecycle, inter-app communication, and device-specific behaviors."
  },
  {
    "testId": "adv-auto-test-03",
    "question": "What is the purpose of the `implicitly_wait` method in Appium?",
    "options": [
      "To set a global timeout for finding elements",
      "To wait for a specific element only",
      "To pause execution for debugging",
      "To wait for page load"
    ],
    "correctOption": 0,
    "explanation": "Implicit wait sets a default timeout for all element find operations in Appium."
  },
  {
    "testId": "adv-auto-test-04",
    "question": "What is load testing in performance testing?",
    "options": [
      "Testing the application under expected user loads",
      "Testing the application with maximum load to find breaking point",
      "Testing a single user transaction",
      "Testing the application with no load"
    ],
    "correctOption": 0,
    "explanation": "Load testing simulates expected user loads to ensure the application meets performance requirements."
  },
  {
    "testId": "adv-auto-test-04",
    "question": "What is the difference between load testing and stress testing?",
    "options": [
      "Load testing simulates expected load; stress testing pushes beyond limits",
      "Stress testing simulates expected load; load testing pushes beyond limits",
      "Both simulate expected load",
      "Both push beyond limits"
    ],
    "correctOption": 0,
    "explanation": "Load testing verifies performance under normal conditions; stress testing finds the breaking point under extreme conditions."
  },
  {
    "testId": "adv-auto-test-04",
    "question": "Which tool is commonly used for performance testing of web applications?",
    "options": ["JMeter", "Postman", "Selenium", "Appium"],
    "correctOption": 0,
    "explanation": "Apache JMeter is a widely used open-source tool for performance and load testing of web applications."
  },
  {
    "testId": "adv-auto-test-04",
    "question": "What is the difference between JMeter and k6?",
    "options": [
      "JMeter is GUI-based and complex; k6 is script-based and lightweight",
      "k6 is GUI-based; JMeter is script-based",
      "Both are GUI-based",
      "Both are script-based"
    ],
    "correctOption": 0,
    "explanation": "JMeter provides a GUI and is more complex; k6 is a lightweight, script-based tool for modern performance testing."
  },
  {
    "testId": "adv-auto-test-04",
    "question": "What is the purpose of spike testing in performance testing?",
    "options": [
      "To test the application's behavior during sudden increases in load",
      "To test the application under normal load",
      "To test the application with no load",
      "To test the application for memory leaks"
    ],
    "correctOption": 0,
    "explanation": "Spike testing checks how the application handles sudden, sharp increases in load."
  },
  {
    "testId": "adv-auto-test-04",
    "question": "What is the OWASP Top 10?",
    "options": [
      "A list of the top 10 web application security risks",
      "A list of the top 10 performance testing tools",
      "A list of the top 10 automation frameworks",
      "A list of the top 10 programming languages"
    ],
    "correctOption": 0,
    "explanation": "OWASP Top 10 is a standard awareness document for the most critical web application security risks."
  },
  {
    "testId": "adv-auto-test-04",
    "question": "What is the difference between SAST and DAST?",
    "options": [
      "SAST is static code analysis; DAST is dynamic application security testing",
      "DAST is static; SAST is dynamic",
      "Both are static",
      "Both are dynamic"
    ],
    "correctOption": 0,
    "explanation": "SAST (Static Application Security Testing) analyzes source code; DAST (Dynamic Application Security Testing) tests running applications."
  },
  {
    "testId": "adv-auto-test-04",
    "question": "What is visual testing in automation?",
    "options": [
      "Comparing UI screenshots against expected baselines",
      "Testing the visual acuity of users",
      "Testing the color contrast of the UI",
      "Testing the font size only"
    ],
    "correctOption": 0,
    "explanation": "Visual testing uses image comparison to detect visual regressions in the user interface."
  },
  {
    "testId": "adv-auto-test-04",
    "question": "Which of the following is a key performance testing metric?",
    "options": ["Response time", "Throughput", "Error rate", "All of the above"],
    "correctOption": 3,
    "explanation": "Response time, throughput, and error rate are all key performance metrics."
  },
  {
    "testId": "adv-auto-test-04",
    "question": "What is accessibility testing in automation?",
    "options": [
      "Testing that the application is usable by people with disabilities",
      "Testing the application's availability",
      "Testing the application's access control",
      "Testing the application's performance"
    ],
    "correctOption": 0,
    "explanation": "Accessibility testing ensures that the application is usable by people with disabilities, following standards like WCAG."
  },
  {
    "testId": "adv-auto-test-04",
    "question": "Which tool is commonly used for security testing?",
    "options": ["Burp Suite", "JMeter", "Selenium", "Postman"],
    "correctOption": 0,
    "explanation": "Burp Suite is a widely used tool for web application security testing."
  },
  {
    "testId": "adv-auto-test-04",
    "question": "What is the difference between a performance test and a functional test?",
    "options": [
      "Performance tests evaluate speed and stability; functional tests validate business logic",
      "Functional tests evaluate speed; performance tests validate logic",
      "Both validate business logic",
      "Both evaluate speed"
    ],
    "correctOption": 0,
    "explanation": "Performance tests focus on speed, scalability, and stability; functional tests validate correct business behavior."
  },
  {
    "testId": "adv-auto-test-05",
    "question": "What does CI/CD stand for?",
    "options": [
      "Continuous Integration and Continuous Delivery/Deployment",
      "Continuous Improvement and Continuous Development",
      "Continuous Integration and Continuous Design",
      "Continuous Innovation and Continuous Deployment"
    ],
    "correctOption": 0,
    "explanation": "CI/CD stands for Continuous Integration and Continuous Delivery/Deployment, a key DevOps practice."
  },
  {
    "testId": "adv-auto-test-05",
    "question": "How do you integrate automated tests into a CI/CD pipeline?",
    "options": [
      "By configuring the pipeline to run tests automatically on code changes",
      "By running tests manually after deployment",
      "By running tests only on weekends",
      "By not running tests in the pipeline"
    ],
    "correctOption": 0,
    "explanation": "Automated tests should be configured to run automatically as part of the CI/CD pipeline on every code change."
  },
  {
    "testId": "adv-auto-test-05",
    "question": "What is the role of a test environment in CI/CD?",
    "options": [
      "To provide a stable and isolated environment for automated test execution",
      "To replace the production environment",
      "To store test data only",
      "To run manual tests only"
    ],
    "correctOption": 0,
    "explanation": "Test environments provide an isolated, stable environment for automated test execution in the CI/CD pipeline."
  },
  {
    "testId": "adv-auto-test-05",
    "question": "What is the purpose of parallel test execution in CI/CD?",
    "options": [
      "To reduce overall test execution time",
      "To increase test coverage",
      "To improve test quality",
      "To eliminate all test failures"
    ],
    "correctOption": 0,
    "explanation": "Parallel execution runs multiple tests simultaneously, significantly reducing the time needed for test execution."
  },
  {
    "testId": "adv-auto-test-05",
    "question": "What is a flaky test?",
    "options": [
      "A test that passes and fails intermittently without code changes",
      "A test that always passes",
      "A test that always fails",
      "A test that is not automated"
    ],
    "correctOption": 0,
    "explanation": "Flaky tests are tests that produce inconsistent results, passing and failing intermittently without actual changes to the code."
  },
  {
    "testId": "adv-auto-test-05",
    "question": "How do you handle flaky tests in a CI/CD pipeline?",
    "options": [
      "Implement retry mechanisms and investigate root causes",
      "Ignore them",
      "Remove them from the pipeline",
      "Run them only on weekends"
    ],
    "correctOption": 0,
    "explanation": "Flaky tests should be retried and investigated to identify and fix the root causes."
  },
  {
    "testId": "adv-auto-test-05",
    "question": "What is shift-left testing?",
    "options": [
      "Moving testing activities earlier in the development lifecycle",
      "Moving testing activities to the right (later)",
      "Removing testing from the lifecycle",
      "Testing only at the end"
    ],
    "correctOption": 0,
    "explanation": "Shift-left testing involves starting testing activities earlier in the development cycle to find defects sooner."
  },
  {
    "testId": "adv-auto-test-05",
    "question": "What is the purpose of a test strategy document?",
    "options": [
      "To define the overall testing approach, objectives, and scope",
      "To list all test cases",
      "To report test results",
      "To manage the project timeline"
    ],
    "correctOption": 0,
    "explanation": "A test strategy defines the overall approach, objectives, scope, and policies for testing at the organizational level."
  },
  {
    "testId": "adv-auto-test-05",
    "question": "Which of the following is a tool commonly used for CI/CD pipelines?",
    "options": ["Jenkins", "GitLab CI", "GitHub Actions", "All of the above"],
    "correctOption": 3,
    "explanation": "Jenkins, GitLab CI, and GitHub Actions are all popular tools for CI/CD pipeline implementation."
  },
  {
    "testId": "adv-auto-test-05",
    "question": "What is the purpose of test reports in a CI/CD pipeline?",
    "options": [
      "To provide visibility into test results and quality metrics",
      "To replace manual testing",
      "To generate test data",
      "To create test cases"
    ],
    "correctOption": 0,
    "explanation": "Test reports provide visibility into test execution results and quality metrics, helping teams make informed decisions."
  },
  {
    "testId": "adv-auto-test-05",
    "question": "What is Infrastructure as Code (IaC) in DevOps?",
    "options": [
      "Managing and provisioning infrastructure through code",
      "Writing code for testing",
      "Managing code repositories",
      "Writing code for automation"
    ],
    "correctOption": 0,
    "explanation": "IaC manages and provisions computing infrastructure through machine-readable definition files, rather than physical hardware configuration."
  },
  {
    "testId": "adv-auto-test-05",
    "question": "Which tool is commonly used for containerization in DevOps?",
    "options": ["Docker", "Kubernetes", "Podman", "All of the above"],
    "correctOption": 3,
    "explanation": "Docker, Kubernetes, and Podman are all containerization and container orchestration tools used in DevOps."
  },
  {
    "testId": "adv-auto-test-05",
    "question": "What is a quality gate in a CI/CD pipeline?",
    "options": [
      "A checkpoint that ensures quality criteria are met before proceeding",
      "A type of firewall",
      "A code review process",
      "A deployment strategy"
    ],
    "correctOption": 0,
    "explanation": "A quality gate is a checkpoint in the pipeline where defined quality criteria (e.g., test pass rate, code coverage) must be met."
  },
  {
    "testId": "adv-auto-test-05",
    "question": "How do you ensure test environment consistency across different stages?",
    "options": [
      "Using containerization and infrastructure as code",
      "Using manual configuration",
      "Using separate environments for each stage",
      "Using the same environment for all stages"
    ],
    "correctOption": 0,
    "explanation": "Containerization (Docker) and Infrastructure as Code ensure consistency across environments by defining them in code."
  }
];

let questionsFile = fs.readFileSync('src/data/questions.js', 'utf8');
const endBraceIndex = questionsFile.lastIndexOf('];');
if (endBraceIndex !== -1 && !questionsFile.includes('"adv-auto-test-01"')) {
  const injectionString = ',\n' + questions.map(q => JSON.stringify(q, null, 2)).join(',\n') + '\n];';
  questionsFile = questionsFile.substring(0, endBraceIndex) + injectionString;
  fs.writeFileSync('src/data/questions.js', questionsFile);
  console.log('Questions added successfully for adv-automation');
} else {
  console.log('Questions for adv-automation already exist or file format unexpected');
}
