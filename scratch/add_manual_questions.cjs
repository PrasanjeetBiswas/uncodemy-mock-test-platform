const fs = require('fs');
const path = require('path');

const newQuestions = [
  {
    "testId": "manual-test-01",
    "question": "What is software testing?",
    "options": [
      "The process of executing a program to find bugs",
      "The process of evaluating a system to determine if it meets specified requirements",
      "The process of fixing defects in software",
      "The process of writing code"
    ],
    "correctOption": 1,
    "explanation": "Software testing is the process of evaluating and verifying that a software product or application does what it is supposed to do, ensuring it meets specified requirements."
  },
  {
    "testId": "manual-test-01",
    "question": "What is the difference between verification and validation?",
    "options": [
      "Verification checks if it is built right; validation checks if it is the right thing built",
      "Validation checks if it is built right; verification checks if it is the right thing built",
      "Both check if it is built right",
      "Both check if it is the right thing built"
    ],
    "correctOption": 0,
    "explanation": "Verification ensures the product is built according to specifications (Are we building the product right?). Validation ensures the product meets the user's needs (Are we building the right product?)."
  },
  {
    "testId": "manual-test-01",
    "question": "Which of the following is a testing principle?",
    "options": [
      "Testing shows the presence of defects, not their absence",
      "Testing can guarantee 100% defect-free software",
      "Testing is only needed at the end of development",
      "Testing is the same as debugging"
    ],
    "correctOption": 0,
    "explanation": "Testing can reveal the presence of defects but cannot prove that the software is completely defect-free. It reduces risk but doesn't eliminate it."
  },
  {
    "testId": "manual-test-01",
    "question": "What is the difference between an error, a defect, and a failure?",
    "options": [
      "Error is a mistake by a human; defect is in the software; failure occurs when software is executed",
      "Error is in the software; defect is a human mistake; failure is in the design",
      "They all mean the same thing",
      "Failure is a human mistake; error is in the software; defect is when executed"
    ],
    "correctOption": 0,
    "explanation": "Error: A human mistake made in the code or design. Defect (Bug): A flaw in the software that can cause it to behave incorrectly. Failure: The software does not perform its intended function when executed."
  },
  {
    "testId": "manual-test-01",
    "question": "What is a test case?",
    "options": [
      "A set of inputs and expected outputs to verify a specific functionality",
      "A report of all defects found",
      "A document that describes the test strategy",
      "A tool used for automation"
    ],
    "correctOption": 0,
    "explanation": "A test case is a set of conditions or variables under which a tester determines whether a system is working correctly, including inputs, expected outputs, and steps to execute."
  },
  {
    "testId": "manual-test-01",
    "question": "What is the first step in the test process?",
    "options": [
      "Test Execution",
      "Test Planning",
      "Test Analysis",
      "Test Closure"
    ],
    "correctOption": 2,
    "explanation": "The first step in the test process is Test Analysis, where you understand the test basis (requirements) and identify what needs to be tested."
  },
  {
    "testId": "manual-test-01",
    "question": "What is a test plan?",
    "options": [
      "A document that describes the scope, approach, resources, and schedule of testing activities",
      "A list of all test cases",
      "A report of test execution results",
      "A document that lists all bugs found"
    ],
    "correctOption": 0,
    "explanation": "A test plan documents the objectives, scope, strategy, resources, schedule, and deliverables for testing activities."
  },
  {
    "testId": "manual-test-01",
    "question": "What is static testing?",
    "options": [
      "Testing without executing the code (e.g., reviews, walkthroughs)",
      "Testing by executing the code",
      "Testing the performance of the application",
      "Testing the security of the application"
    ],
    "correctOption": 0,
    "explanation": "Static testing is performed without executing the code. It includes reviews, inspections, and walkthroughs of documents, code, and requirements."
  },
  {
    "testId": "manual-test-01",
    "question": "What is the difference between quality assurance (QA) and quality control (QC)?",
    "options": [
      "QA is process-oriented; QC is product-oriented",
      "QC is process-oriented; QA is product-oriented",
      "Both are product-oriented",
      "Both are process-oriented"
    ],
    "correctOption": 0,
    "explanation": "Quality Assurance (QA) is a proactive process that focuses on preventing defects by improving the development process. Quality Control (QC) is a reactive process that focuses on detecting defects in the final product."
  },
  {
    "testId": "manual-test-01",
    "question": "What is exploratory testing?",
    "options": [
      "Testing based on specification documents",
      "Testing without formal test cases, relying on the tester's experience and intuition",
      "Testing that follows a strict script",
      "Testing performed by automated tools"
    ],
    "correctOption": 1,
    "explanation": "Exploratory testing is an approach where testers actively explore the application without formal test cases, learning about the system as they test."
  },
  {
    "testId": "manual-test-01",
    "question": "What is the purpose of regression testing?",
    "options": [
      "To test new features",
      "To ensure that existing functionality still works after changes",
      "To test the user interface",
      "To test the database"
    ],
    "correctOption": 1,
    "explanation": "Regression testing is performed to ensure that changes (bug fixes, new features) do not negatively impact existing functionality."
  },
  {
    "testId": "manual-test-01",
    "question": "What is a test environment?",
    "options": [
      "The production server where users access the software",
      "The setup of hardware, software, and data required to run the test cases",
      "The file where test cases are stored",
      "The meeting room where testing is planned"
    ],
    "correctOption": 1,
    "explanation": "A test environment includes all the hardware, software, network, and data required to execute test cases effectively."
  },
  {
    "testId": "manual-test-01",
    "question": "What is a test suite?",
    "options": [
      "A collection of test cases organized to test a specific feature or module",
      "A single test case",
      "A bug report",
      "A test plan"
    ],
    "correctOption": 0,
    "explanation": "A test suite is a collection of test cases grouped together to test a specific functionality, module, or part of the application."
  },
  {
    "testId": "manual-test-01",
    "question": "What is the difference between quality and testing?",
    "options": [
      "Quality is the degree to which software meets requirements; testing is the process of verifying that",
      "Testing is the degree to which software meets requirements; quality is the process",
      "Both mean the same",
      "Quality is done by developers; testing is done by testers"
    ],
    "correctOption": 0,
    "explanation": "Quality is about how well the software meets user and business requirements. Testing is the process used to evaluate and verify quality."
  },
  {
    "testId": "manual-test-01",
    "question": "What is the role of a tester in the software development lifecycle?",
    "options": [
      "To write code for the application",
      "To find defects and ensure the software meets requirements",
      "To design the application architecture",
      "To manage the project schedule"
    ],
    "correctOption": 1,
    "explanation": "The primary role of a tester is to identify defects in the software and ensure that it meets the specified requirements before release."
  },
  {
    "testId": "manual-test-01",
    "question": "What is the 'Pareto Principle' in testing?",
    "options": [
      "80% of defects are found in 20% of the modules",
      "20% of defects are found in 80% of the modules",
      "All defects are evenly distributed",
      "Defects are found only in new features"
    ],
    "correctOption": 0,
    "explanation": "The Pareto Principle in testing suggests that approximately 80% of defects are found in only 20% of the modules, highlighting the need to focus testing on these areas."
  },
  {
    "testId": "manual-test-01",
    "question": "What is a 'showstopper' defect?",
    "options": [
      "A defect that prevents the application from performing critical functionality",
      "A cosmetic defect",
      "A defect found during exploratory testing",
      "A defect that is easy to fix"
    ],
    "correctOption": 0,
    "explanation": "A showstopper defect is a critical bug that blocks core functionality, making the software unusable and preventing further testing or release."
  },
  {
    "testId": "manual-test-01",
    "question": "What is test data?",
    "options": [
      "Data used as input to test cases",
      "Data used to write code",
      "Data used in production only",
      "Data stored in the database"
    ],
    "correctOption": 0,
    "explanation": "Test data is the data used to execute test cases, including both valid and invalid data to verify the application behaves correctly."
  },
  {
    "testId": "manual-test-01",
    "question": "What is the purpose of a test strategy?",
    "options": [
      "To define how testing will be performed at the organizational level",
      "To define the test cases",
      "To report test results",
      "To manage the project timeline"
    ],
    "correctOption": 0,
    "explanation": "A test strategy defines the overall approach, objectives, and policies for testing at an organizational or project level."
  },
  {
    "testId": "manual-test-01",
    "question": "What is the difference between a bug and a feature?",
    "options": [
      "A bug is unintended behavior; a feature is intended functionality",
      "A feature is unintended behavior; a bug is intended functionality",
      "Both are intended",
      "Both are unintended"
    ],
    "correctOption": 0,
    "explanation": "A bug is an error or flaw that causes the software to behave unexpectedly. A feature is a specific functionality that is designed and intended to be in the software."
  },
  {
    "testId": "manual-test-01",
    "question": "What is the goal of test execution?",
    "options": [
      "To execute test cases and compare actual results with expected results",
      "To write test cases",
      "To design test cases",
      "To deploy the application"
    ],
    "correctOption": 0,
    "explanation": "Test execution involves running the test cases and comparing the actual outcomes with the expected outcomes to identify failures."
  },
  {
    "testId": "manual-test-01",
    "question": "What is a 'test oracle'?",
    "options": [
      "A mechanism that determines the correct or expected outcome for a test",
      "A tool that automates test execution",
      "A person who writes test cases",
      "A defect tracking system"
    ],
    "correctOption": 0,
    "explanation": "A test oracle is a source of information that determines the expected results of a test, such as documented requirements or specifications."
  },
  {
    "testId": "manual-test-01",
    "question": "What is the difference between positive and negative testing?",
    "options": [
      "Positive testing checks valid inputs; negative testing checks invalid inputs",
      "Negative testing checks valid inputs; positive testing checks invalid inputs",
      "Positive testing finds defects; negative testing does not",
      "Both are the same"
    ],
    "correctOption": 0,
    "explanation": "Positive testing verifies that the software works correctly with valid inputs. Negative testing ensures the software handles invalid inputs gracefully."
  },
  {
    "testId": "manual-test-01",
    "question": "What is the 'cost of quality' in software testing?",
    "options": [
      "The cost of preventing, detecting, and correcting defects",
      "The cost of buying testing tools",
      "The salary of testers",
      "The cost of the test environment"
    ],
    "correctOption": 0,
    "explanation": "The cost of quality includes the cost of prevention (training, reviews), detection (testing), and correction (fixing defects). Investing in prevention reduces the overall cost."
  },
  {
    "testId": "manual-test-01",
    "question": "What is a 'test condition'?",
    "options": [
      "An item or event that can be verified by testing",
      "The expected output of a test",
      "The actual output of a test",
      "A defect report"
    ],
    "correctOption": 0,
    "explanation": "A test condition is a testable aspect of the software, derived from requirements, that needs to be verified."
  },
  {
    "testId": "manual-test-01",
    "question": "What is 'confirmation testing' (re-testing)?",
    "options": [
      "Testing to verify that a defect has been fixed",
      "Testing to verify that no new defects have been introduced",
      "Testing the entire application",
      "Testing the performance of the application"
    ],
    "correctOption": 0,
    "explanation": "Confirmation testing (re-testing) involves executing a test case that previously failed to verify that the defect has been fixed."
  },
  {
    "testId": "manual-test-01",
    "question": "What is the difference between a test script and a test scenario?",
    "options": [
      "A test script is a detailed step-by-step procedure; a test scenario is a high-level test objective",
      "A test scenario is a detailed procedure; a test script is a high-level objective",
      "Both are detailed procedures",
      "Both are high-level objectives"
    ],
    "correctOption": 0,
    "explanation": "A test scenario is a high-level description of what to test, while a test script is a detailed step-by-step procedure to execute."
  },
  {
    "testId": "manual-test-01",
    "question": "What is the purpose of a test exit criteria?",
    "options": [
      "To define when testing is complete",
      "To define when testing should start",
      "To define the test environment",
      "To define the test strategy"
    ],
    "correctOption": 0,
    "explanation": "Test exit criteria define the conditions that must be met before testing can be concluded, such as all test cases executed, defects resolved, and coverage achieved."
  },
  {
    "testId": "manual-test-01",
    "question": "What is the 'test pyramid' concept?",
    "options": [
      "A strategy that recommends more unit tests, fewer integration tests, and even fewer end-to-end tests",
      "A strategy that recommends equal numbers of all test types",
      "A strategy that recommends more end-to-end tests",
      "A strategy that avoids unit testing"
    ],
    "correctOption": 0,
    "explanation": "The test pyramid suggests having a large number of fast unit tests at the bottom, fewer integration tests in the middle, and the fewest end-to-end tests at the top."
  },
  {
    "testId": "manual-test-01",
    "question": "What is the difference between a 'defect' and a 'change request'?",
    "options": [
      "A defect is something that is broken; a change request is a requested enhancement or modification",
      "A change request is something broken; a defect is a requested enhancement",
      "Both are broken functionalities",
      "Both are enhancements"
    ],
    "correctOption": 0,
    "explanation": "A defect indicates that something is not working as specified. A change request is a request to modify the software for new or updated requirements."
  },
  {
    "testId": "manual-test-02",
    "question": "Which of the following is a functional testing type?",
    "options": [
      "Performance Testing",
      "Usability Testing",
      "Unit Testing",
      "Security Testing"
    ],
    "correctOption": 2,
    "explanation": "Unit testing is a functional testing type that verifies individual units or components of the software. Performance, usability, and security are non-functional testing types."
  },
  {
    "testId": "manual-test-02",
    "question": "What is black-box testing?",
    "options": [
      "Testing without knowledge of the internal structure or code",
      "Testing with knowledge of the internal code",
      "Testing the user interface only",
      "Testing the database only"
    ],
    "correctOption": 0,
    "explanation": "Black-box testing focuses on testing the functionality of the software without knowing its internal structure or code. It is based on requirements."
  },
  {
    "testId": "manual-test-02",
    "question": "What is white-box testing?",
    "options": [
      "Testing with knowledge of the internal code and structure",
      "Testing without knowledge of the internal code",
      "Testing only the user interface",
      "Testing by end users"
    ],
    "correctOption": 0,
    "explanation": "White-box testing (or glass-box testing) involves testing with knowledge of the internal code, structure, and logic of the application."
  },
  {
    "testId": "manual-test-02",
    "question": "What is integration testing?",
    "options": [
      "Testing the interactions between different components or modules",
      "Testing individual components in isolation",
      "Testing the complete application as a whole",
      "Testing the user interface"
    ],
    "correctOption": 0,
    "explanation": "Integration testing verifies the interactions and interfaces between different components or modules of the software."
  },
  {
    "testId": "manual-test-02",
    "question": "What is system testing?",
    "options": [
      "Testing the complete integrated system to verify it meets requirements",
      "Testing individual modules",
      "Testing interactions between components",
      "Testing by end users"
    ],
    "correctOption": 0,
    "explanation": "System testing tests the entire, fully integrated software system to ensure it meets the specified requirements and is ready for release."
  },
  {
    "testId": "manual-test-02",
    "question": "What is acceptance testing?",
    "options": [
      "Testing performed by end users to verify the system meets their needs",
      "Testing performed by developers",
      "Testing individual modules",
      "Testing the system performance"
    ],
    "correctOption": 0,
    "explanation": "Acceptance testing is performed by end users or clients to verify that the software meets their business requirements and is ready for production use."
  },
  {
    "testId": "manual-test-02",
    "question": "What is the difference between alpha and beta testing?",
    "options": [
      "Alpha testing is performed by internal teams; beta testing is performed by external users",
      "Beta testing is performed by internal teams; alpha testing is performed by external users",
      "Both are performed by external users",
      "Both are performed by internal teams"
    ],
    "correctOption": 0,
    "explanation": "Alpha testing is conducted by internal testing teams within the organization. Beta testing is conducted by a select group of external users or clients."
  },
  {
    "testId": "manual-test-02",
    "question": "Which of the following is a non-functional testing type?",
    "options": ["Unit Testing", "Integration Testing", "Performance Testing", "System Testing"],
    "correctOption": 2,
    "explanation": "Performance testing evaluates how well the software performs under specific conditions. Unit, integration, and system testing are functional testing types."
  },
  {
    "testId": "manual-test-02",
    "question": "What is smoke testing?",
    "options": [
      "Initial testing to verify critical functionality works before detailed testing",
      "Testing the entire application thoroughly",
      "Testing the performance of the application",
      "Testing the security of the application"
    ],
    "correctOption": 0,
    "explanation": "Smoke testing is a preliminary test to check if the critical features of the software work before proceeding with more detailed testing."
  },
  {
    "testId": "manual-test-02",
    "question": "What is sanity testing?",
    "options": [
      "Testing to verify that specific functionality works after minor changes",
      "Testing the complete application",
      "Testing the performance",
      "Testing the security"
    ],
    "correctOption": 0,
    "explanation": "Sanity testing is a narrow, focused test to verify that a specific feature or functionality works after a minor change or bug fix."
  },
  {
    "testId": "manual-test-02",
    "question": "What is regression testing?",
    "options": [
      "Testing to ensure that changes do not break existing functionality",
      "Testing new features",
      "Testing the application from scratch",
      "Testing the user interface"
    ],
    "correctOption": 0,
    "explanation": "Regression testing verifies that existing functionality still works correctly after changes, such as bug fixes, enhancements, or code updates."
  },
  {
    "testId": "manual-test-02",
    "question": "What is the difference between functional and non-functional testing?",
    "options": [
      "Functional testing verifies what the system does; non-functional testing verifies how the system performs",
      "Functional testing verifies performance; non-functional testing verifies functionality",
      "Both are the same",
      "Functional testing is manual; non-functional testing is automated"
    ],
    "correctOption": 0,
    "explanation": "Functional testing checks if the software works correctly according to requirements. Non-functional testing checks performance, usability, reliability, and other quality attributes."
  },
  {
    "testId": "manual-test-02",
    "question": "What is usability testing?",
    "options": [
      "Testing to evaluate how user-friendly the application is",
      "Testing the performance of the application",
      "Testing the security of the application",
      "Testing the functionality of the application"
    ],
    "correctOption": 0,
    "explanation": "Usability testing evaluates how easy and intuitive the software is for users to navigate and use."
  },
  {
    "testId": "manual-test-02",
    "question": "What is performance testing?",
    "options": [
      "Testing to evaluate the speed, responsiveness, and stability of the application",
      "Testing the functionality of the application",
      "Testing the security of the application",
      "Testing the user interface"
    ],
    "correctOption": 0,
    "explanation": "Performance testing verifies that the application responds quickly, handles the expected load, and remains stable under different conditions."
  },
  {
    "testId": "manual-test-02",
    "question": "What is load testing?",
    "options": [
      "Testing the application's performance under expected user loads",
      "Testing the application with maximum load to find breaking point",
      "Testing the application's functionality",
      "Testing the application's security"
    ],
    "correctOption": 0,
    "explanation": "Load testing checks how the application performs under normal and expected user loads to ensure it meets performance requirements."
  },
  {
    "testId": "manual-test-02",
    "question": "What is stress testing?",
    "options": [
      "Testing the application under extreme conditions to determine the breaking point",
      "Testing the application under normal conditions",
      "Testing the application's functionality",
      "Testing the application's security"
    ],
    "correctOption": 0,
    "explanation": "Stress testing pushes the application beyond normal limits to find its breaking point and see how it recovers from failure."
  },
  {
    "testId": "manual-test-02",
    "question": "What is security testing?",
    "options": [
      "Testing to identify vulnerabilities and ensure the application is protected from threats",
      "Testing the functionality of the application",
      "Testing the performance of the application",
      "Testing the user interface"
    ],
    "correctOption": 0,
    "explanation": "Security testing identifies vulnerabilities, weaknesses, and potential threats to ensure the application is secure and protected against attacks."
  },
  {
    "testId": "manual-test-02",
    "question": "What is the difference between a unit and a module?",
    "options": [
      "A unit is the smallest testable component; a module is a collection of units",
      "A module is the smallest testable component; a unit is a collection of modules",
      "Both are the same",
      "Units are for developers; modules are for testers"
    ],
    "correctOption": 0,
    "explanation": "A unit is the smallest testable part of software (like a function or method). A module is a collection of related units that perform a specific function."
  },
  {
    "testId": "manual-test-02",
    "question": "What is API testing?",
    "options": [
      "Testing the Application Programming Interface to verify functionality, reliability, and security",
      "Testing the user interface",
      "Testing the database",
      "Testing the performance"
    ],
    "correctOption": 0,
    "explanation": "API testing verifies the behavior, functionality, security, and reliability of APIs, often using automated tools."
  },
  {
    "testId": "manual-test-02",
    "question": "What is the difference between top-down and bottom-up integration testing?",
    "options": [
      "Top-down tests from the main module downward; bottom-up tests from sub-modules upward",
      "Top-down tests from sub-modules upward; bottom-up tests from the main module downward",
      "Both test from the main module",
      "Both test from sub-modules"
    ],
    "correctOption": 0,
    "explanation": "Top-down integration testing starts with the main control module and uses stubs for lower modules. Bottom-up starts with lower modules and uses drivers for higher modules."
  },
  {
    "testId": "manual-test-02",
    "question": "What is the purpose of unit testing?",
    "options": [
      "To test individual functions or components in isolation",
      "To test the complete application",
      "To test the user interface",
      "To test the performance"
    ],
    "correctOption": 0,
    "explanation": "Unit testing focuses on testing individual functions, methods, or components in isolation to ensure each works correctly."
  },
  {
    "testId": "manual-test-03",
    "question": "What is equivalence partitioning in test design?",
    "options": [
      "Dividing input data into equivalent classes where each class is expected to produce the same result",
      "Dividing input data into random groups",
      "Testing all possible input values",
      "Testing only valid inputs"
    ],
    "correctOption": 0,
    "explanation": "Equivalence partitioning divides input data into groups (classes) where each group is expected to behave similarly. Testing one value from each class is sufficient."
  },
  {
    "testId": "manual-test-03",
    "question": "What is boundary value analysis?",
    "options": [
      "Testing values at the edges or boundaries of equivalence classes",
      "Testing random values in the middle of equivalence classes",
      "Testing all possible values",
      "Testing only valid values"
    ],
    "correctOption": 0,
    "explanation": "Boundary value analysis tests values at the boundaries or edges of equivalence classes, where errors are most likely to occur."
  },
  {
    "testId": "manual-test-03",
    "question": "What is a decision table in test design?",
    "options": [
      "A table that shows combinations of inputs and their corresponding outputs",
      "A table that lists all test cases",
      "A table that shows the test schedule",
      "A table that shows the test environment"
    ],
    "correctOption": 0,
    "explanation": "A decision table (or cause-effect table) lists all possible combinations of conditions and their corresponding actions, useful for complex business rules."
  },
  {
    "testId": "manual-test-03",
    "question": "What is state transition testing?",
    "options": [
      "Testing how the system transitions between states based on events",
      "Testing only the initial state",
      "Testing only the final state",
      "Testing random states"
    ],
    "correctOption": 0,
    "explanation": "State transition testing verifies the behavior of the system as it moves between different states based on events or inputs."
  },
  {
    "testId": "manual-test-03",
    "question": "What is use case testing?",
    "options": [
      "Testing based on use cases to verify end-to-end business scenarios",
      "Testing based on technical specifications",
      "Testing based on code structure",
      "Testing based on performance requirements"
    ],
    "correctOption": 0,
    "explanation": "Use case testing uses use cases (scenarios of user interactions) to validate the software's behavior in realistic user workflows."
  },
  {
    "testId": "manual-test-03",
    "question": "What is exploratory testing?",
    "options": [
      "Testing without formal test cases, relying on the tester's skills and intuition",
      "Testing with a fixed set of test scripts",
      "Testing based on specifications only",
      "Testing using automated tools"
    ],
    "correctOption": 0,
    "explanation": "Exploratory testing is an approach where testers simultaneously learn about the system and design tests based on their discoveries, without pre-scripted test cases."
  },
  {
    "testId": "manual-test-03",
    "question": "What is error guessing in test design?",
    "options": [
      "A technique where testers use their experience to predict likely defects",
      "A technique where testers guess randomly",
      "A technique where testers use automated tools",
      "A technique based on specifications"
    ],
    "correctOption": 0,
    "explanation": "Error guessing is an experience-based technique where testers predict where defects are likely to occur based on their knowledge of the system and similar applications."
  },
  {
    "testId": "manual-test-03",
    "question": "When designing test cases, what is the minimum number of test cases needed for equivalence partitioning?",
    "options": [
      "One test case per equivalence class",
      "Two test cases per equivalence class",
      "All possible values",
      "No test cases are needed"
    ],
    "correctOption": 0,
    "explanation": "With equivalence partitioning, you only need to test one representative value from each equivalence class, as all values in that class should behave the same way."
  },
  {
    "testId": "manual-test-03",
    "question": "For a field that accepts values from 1 to 100, what values would you test using boundary value analysis?",
    "options": [
      "0, 1, 2, 99, 100, 101",
      "50, 100, 200",
      "1, 100 only",
      "All values from 1 to 100"
    ],
    "correctOption": 0,
    "explanation": "Boundary value analysis tests the boundaries: 0 (invalid lower boundary), 1 and 2 (valid lower boundaries), 99 and 100 (valid upper boundaries), and 101 (invalid upper boundary)."
  },
  {
    "testId": "manual-test-03",
    "question": "What is the purpose of test design techniques?",
    "options": [
      "To systematically create effective test cases to find defects",
      "To create random test cases",
      "To create test cases quickly without thought",
      "To avoid testing"
    ],
    "correctOption": 0,
    "explanation": "Test design techniques provide a systematic approach to create effective test cases that maximize the chance of finding defects."
  },
  {
    "testId": "manual-test-03",
    "question": "What is path testing in white-box testing?",
    "options": [
      "Testing all possible execution paths through the code",
      "Testing only the main path",
      "Testing only error paths",
      "Testing random paths"
    ],
    "correctOption": 0,
    "explanation": "Path testing aims to execute every possible path or branch through the code to ensure complete coverage of the logic."
  },
  {
    "testId": "manual-test-03",
    "question": "What is condition coverage?",
    "options": [
      "A white-box technique that tests all possible outcomes of each condition",
      "A black-box technique that tests all requirements",
      "A technique that tests all states",
      "A technique that tests all paths"
    ],
    "correctOption": 0,
    "explanation": "Condition coverage ensures that each condition in the code is evaluated to both true and false at least once during testing."
  },
  {
    "testId": "manual-test-03",
    "question": "What is the difference between decision coverage and branch coverage?",
    "options": [
      "Decision coverage tests each decision outcome; branch coverage tests each branch",
      "Branch coverage tests each decision; decision coverage tests each branch",
      "Both are the same",
      "Decision coverage is for white-box; branch coverage is for black-box"
    ],
    "correctOption": 2,
    "explanation": "Decision coverage and branch coverage are often used interchangeably. Both aim to execute every branch or decision point in the code at least once."
  },
  {
    "testId": "manual-test-03",
    "question": "What is the purpose of a test data set?",
    "options": [
      "To provide the necessary input values for executing test cases",
      "To store test results",
      "To store bug reports",
      "To store test cases"
    ],
    "correctOption": 0,
    "explanation": "Test data sets contain the input values used to execute test cases, including both valid and invalid data to cover different test scenarios."
  },
  {
    "testId": "manual-test-03",
    "question": "What is the difference between high-level and low-level test cases?",
    "options": [
      "High-level test cases are abstract and describe the test objective; low-level test cases are detailed step-by-step instructions",
      "High-level test cases are detailed; low-level test cases are abstract",
      "High-level test cases are for integration testing; low-level are for unit testing",
      "Both are the same"
    ],
    "correctOption": 0,
    "explanation": "High-level test cases describe what to test at a high level (test scenarios). Low-level test cases provide detailed, step-by-step execution instructions."
  },
  {
    "testId": "manual-test-03",
    "question": "What is the concept of 'test coverage'?",
    "options": [
      "The degree to which the software has been tested",
      "The degree to which the software has been developed",
      "The number of test cases written",
      "The number of defects found"
    ],
    "correctOption": 0,
    "explanation": "Test coverage measures how much of the software (requirements, code, paths) has been exercised by the tests, helping to assess testing completeness."
  },
  {
    "testId": "manual-test-03",
    "question": "Which test design technique is most effective for testing complex business rules with multiple conditions?",
    "options": ["Decision Table Testing", "Equivalence Partitioning", "Boundary Value Analysis", "State Transition Testing"],
    "correctOption": 0,
    "explanation": "Decision table testing is ideal for testing complex business rules with multiple conditions and combinations, ensuring all logical combinations are covered."
  },
  {
    "testId": "manual-test-03",
    "question": "What is a 'test scenario'?",
    "options": [
      "A high-level description of what to test",
      "A detailed set of steps to execute",
      "A test case with expected results",
      "A bug report"
    ],
    "correctOption": 0,
    "explanation": "A test scenario is a high-level description of a testable condition or functionality, which may cover multiple test cases."
  },
  {
    "testId": "manual-test-04",
    "question": "What is the V-Model in software testing?",
    "options": [
      "A model where testing activities are planned in parallel with development activities",
      "A model where testing is done only at the end",
      "A model where testing is done after deployment",
      "A model where testing is avoided"
    ],
    "correctOption": 0,
    "explanation": "The V-Model is a software development and testing model where each development phase has a corresponding testing phase, emphasizing early test planning."
  },
  {
    "testId": "manual-test-04",
    "question": "In the V-Model, what testing level corresponds to the requirements phase?",
    "options": ["Unit Testing", "Integration Testing", "System Testing", "Acceptance Testing"],
    "correctOption": 3,
    "explanation": "In the V-Model, the requirements phase corresponds to acceptance testing, where the system is verified against user requirements."
  },
  {
    "testId": "manual-test-04",
    "question": "What is the Waterfall model in SDLC?",
    "options": [
      "A sequential model where each phase must be completed before the next begins",
      "An iterative model where phases overlap",
      "A model where testing is continuous",
      "A model where development is skipped"
    ],
    "correctOption": 0,
    "explanation": "The Waterfall model is a sequential software development approach where each phase (requirements, design, development, testing) flows downward and must be fully completed before the next begins."
  },
  {
    "testId": "manual-test-04",
    "question": "What is the main difference between Waterfall and Agile methodologies in terms of testing?",
    "options": [
      "Testing is done at the end in Waterfall; testing is continuous in Agile",
      "Testing is continuous in Waterfall; testing is done at the end in Agile",
      "Both do testing at the end",
      "Both do continuous testing"
    ],
    "correctOption": 0,
    "explanation": "In Waterfall, testing occurs at the end of the development cycle. In Agile, testing is integrated throughout the development process, with testing performed in every sprint."
  },
  {
    "testId": "manual-test-04",
    "question": "What is the Agile testing approach?",
    "options": [
      "Testing that is integrated into every sprint and continuous throughout the development process",
      "Testing that is done only after development is complete",
      "Testing that is done by developers only",
      "Testing that is avoided"
    ],
    "correctOption": 0,
    "explanation": "Agile testing involves testers working alongside developers, with testing activities embedded in each sprint, promoting continuous feedback and faster delivery."
  },
  {
    "testId": "manual-test-04",
    "question": "What is the role of testing in the Software Development Life Cycle (SDLC)?",
    "options": [
      "To ensure the software meets quality standards and requirements throughout development",
      "To write the code",
      "To design the architecture",
      "To manage the project"
    ],
    "correctOption": 0,
    "explanation": "Testing in the SDLC ensures that the software meets the specified requirements, is free of critical defects, and maintains quality standards."
  },
  {
    "testId": "manual-test-04",
    "question": "What is 'shift-left testing'?",
    "options": [
      "Involving testing earlier in the development lifecycle",
      "Moving testing to the right (later in the lifecycle)",
      "Removing testing from the lifecycle",
      "Testing only at the end"
    ],
    "correctOption": 0,
    "explanation": "Shift-left testing means moving testing activities to earlier stages of the development cycle to find defects sooner, reducing cost and effort."
  },
  {
    "testId": "manual-test-04",
    "question": "What is the difference between verification and validation in the context of SDLC?",
    "options": [
      "Verification checks that the product is built correctly; validation checks that the correct product is built",
      "Validation checks that it is built correctly; verification checks that the correct product is built",
      "Both are the same",
      "Verification is done by testers; validation is done by developers"
    ],
    "correctOption": 0,
    "explanation": "Verification ensures the product conforms to specifications. Validation ensures the product meets the user's needs and expectations."
  },
  {
    "testId": "manual-test-04",
    "question": "What is a sprint in Agile methodology?",
    "options": [
      "A fixed time period (usually 1-4 weeks) during which a specific set of work is completed",
      "A meeting where testing is discussed",
      "A document describing the test strategy",
      "A tool used for testing"
    ],
    "correctOption": 0,
    "explanation": "A sprint is a time-boxed period in Agile where a team works on a defined set of tasks, typically lasting 1-4 weeks."
  },
  {
    "testId": "manual-test-04",
    "question": "What is regression testing in the context of iterative development?",
    "options": [
      "Re-running tests to ensure new changes do not break existing functionality",
      "Testing new features only",
      "Testing the complete application from scratch",
      "Testing only the user interface"
    ],
    "correctOption": 0,
    "explanation": "Regression testing is especially important in iterative development to ensure that new changes in each iteration do not introduce defects in existing functionality."
  },
  {
    "testId": "manual-test-04",
    "question": "What is a 'build' in software development?",
    "options": [
      "A compiled and deployable version of the software",
      "A test case",
      "A bug report",
      "A meeting schedule"
    ],
    "correctOption": 0,
    "explanation": "A build is a compiled, executable version of the software ready for testing and deployment."
  },
  {
    "testId": "manual-test-04",
    "question": "What is the purpose of a daily stand-up meeting in Agile?",
    "options": [
      "To communicate progress, challenges, and plan for the day",
      "To test the software",
      "To write test cases",
      "To review defects"
    ],
    "correctOption": 0,
    "explanation": "The daily stand-up is a short meeting where team members share what they worked on, what they plan to work on, and any blockers they face."
  },
  {
    "testId": "manual-test-04",
    "question": "What is the difference between a user story and a requirement?",
    "options": [
      "A user story is a high-level requirement from the user's perspective; a requirement is more detailed technical specification",
      "A user story is technical; a requirement is from the user's perspective",
      "Both are the same",
      "User stories are for developers only"
    ],
    "correctOption": 0,
    "explanation": "User stories are written from the user's perspective and focus on functionality and value. Requirements are more detailed technical specifications."
  },
  {
    "testId": "manual-test-04",
    "question": "What is the role of acceptance criteria in Agile testing?",
    "options": [
      "To define the conditions that must be met for a user story to be considered complete",
      "To define the test strategy",
      "To define the sprint goals",
      "To define the architecture"
    ],
    "correctOption": 0,
    "explanation": "Acceptance criteria are a set of conditions that a user story must satisfy to be accepted and completed, guiding both development and testing."
  },
  {
    "testId": "manual-test-04",
    "question": "What is the test strategy in Agile?",
    "options": [
      "A flexible approach that adapts to changes and focuses on continuous testing",
      "A rigid plan that never changes",
      "Testing only at the end",
      "Testing by developers only"
    ],
    "correctOption": 0,
    "explanation": "In Agile, the test strategy is flexible and iterative, focusing on continuous testing, automation, and feedback throughout the development process."
  },
  {
    "testId": "manual-test-04",
    "question": "What is the concept of 'continuous integration'?",
    "options": [
      "Automatically integrating code changes and running tests frequently",
      "Integrating code only at the end",
      "Avoiding code integration",
      "Testing without code integration"
    ],
    "correctOption": 0,
    "explanation": "Continuous Integration (CI) is the practice of automatically merging code changes into a shared repository and running tests frequently to detect issues early."
  },
  {
    "testId": "manual-test-04",
    "question": "What is the purpose of a release in Agile?",
    "options": [
      "To deliver a functional version of the software to users",
      "To test the software",
      "To plan the next sprint",
      "To write code"
    ],
    "correctOption": 0,
    "explanation": "A release is a planned delivery of a functional, tested version of the software to the user or production environment."
  },
  {
    "testId": "manual-test-04",
    "question": "What is the difference between smoke testing and sanity testing in SDLC?",
    "options": [
      "Smoke testing is broad and shallow; sanity testing is narrow and deep",
      "Sanity testing is broad and shallow; smoke testing is narrow and deep",
      "Both are the same",
      "Smoke testing is done before sanity testing"
    ],
    "correctOption": 0,
    "explanation": "Smoke testing is a broad but shallow test of critical functionality. Sanity testing is a narrow, focused test of specific functionality after changes."
  },
  {
    "testId": "manual-test-04",
    "question": "What is the purpose of a test-driven development (TDD) approach?",
    "options": [
      "Writing tests before the code is written to guide development",
      "Writing code before tests",
      "Writing tests after deployment",
      "Avoiding testing"
    ],
    "correctOption": 0,
    "explanation": "Test-Driven Development (TDD) involves writing test cases before writing the production code, guiding development and ensuring code meets requirements."
  },
  {
    "testId": "manual-test-04",
    "question": "What is the concept of 'continuous delivery'?",
    "options": [
      "The practice of keeping the software always in a deployable state",
      "Delivering software only at the end of the project",
      "Delivering software without testing",
      "Delivering software once a year"
    ],
    "correctOption": 0,
    "explanation": "Continuous Delivery (CD) is the practice of ensuring software is always in a state where it can be deployed to production at any time."
  },
  {
    "testId": "manual-test-05",
    "question": "What is the purpose of test estimation?",
    "options": [
      "To predict the time, effort, and resources required for testing",
      "To estimate the number of defects",
      "To estimate the quality of the software",
      "To estimate the number of test cases"
    ],
    "correctOption": 0,
    "explanation": "Test estimation predicts the time, effort, resources, and cost required to complete the testing activities."
  },
  {
    "testId": "manual-test-05",
    "question": "What is the defect lifecycle?",
    "options": [
      "The stages a defect goes through from discovery to closure",
      "The lifecycle of a test case",
      "The lifecycle of a project",
      "The lifecycle of a requirement"
    ],
    "correctOption": 0,
    "explanation": "The defect lifecycle describes the stages of a defect from its discovery (New) through resolution and verification to closure."
  },
  {
    "testId": "manual-test-05",
    "question": "What is the difference between severity and priority of a defect?",
    "options": [
      "Severity is the impact on the system; priority is the urgency to fix",
      "Priority is the impact on the system; severity is the urgency to fix",
      "Both are the same",
      "Severity is set by testers; priority is set by developers"
    ],
    "correctOption": 0,
    "explanation": "Severity indicates how severe the defect is on the system's functionality. Priority indicates how urgent it is to fix, based on business needs."
  },
  {
    "testId": "manual-test-05",
    "question": "What is a traceability matrix in testing?",
    "options": [
      "A document that maps test cases to requirements",
      "A document that tracks defects",
      "A document that tracks test execution",
      "A document that tracks the schedule"
    ],
    "correctOption": 0,
    "explanation": "A traceability matrix (RTM) maps test cases back to their corresponding requirements, ensuring all requirements are tested."
  },
  {
    "testId": "manual-test-05",
    "question": "What are the typical stages of defect lifecycle?",
    "options": [
      "New, Assigned, In Progress, Fixed, Verified, Closed",
      "New, Fixed, Closed",
      "New, Assigned, Closed",
      "New, Closed"
    ],
    "correctOption": 0,
    "explanation": "Typical defect lifecycle stages include: New → Assigned → In Progress → Fixed → Verified → Closed (or Reopened if verification fails)."
  },
  {
    "testId": "manual-test-05",
    "question": "What is the purpose of a test status report?",
    "options": [
      "To provide stakeholders with information about testing progress, coverage, and defects",
      "To write test cases",
      "To design test cases",
      "To track the project schedule"
    ],
    "correctOption": 0,
    "explanation": "A test status report communicates testing progress, results, defect status, and risks to stakeholders, enabling informed decision-making."
  },
  {
    "testId": "manual-test-05",
    "question": "What is a test metric?",
    "options": [
      "A quantitative measure used to evaluate testing activities and quality",
      "A qualitative assessment of testing",
      "A defect report",
      "A test case"
    ],
    "correctOption": 0,
    "explanation": "Test metrics are quantitative measurements that help evaluate testing progress, effectiveness, and quality, such as defect density and test coverage."
  },
  {
    "testId": "manual-test-05",
    "question": "What is the purpose of a test closure meeting?",
    "options": [
      "To review testing activities, lessons learned, and ensure all tasks are complete",
      "To start testing",
      "To write test cases",
      "To deploy the software"
    ],
    "correctOption": 0,
    "explanation": "A test closure meeting reviews the testing process, lessons learned, defects, and outcomes to ensure all activities are complete and documented."
  },
  {
    "testId": "manual-test-05",
    "question": "What is the difference between a test plan and a test schedule?",
    "options": [
      "A test plan describes what and how to test; a test schedule describes when",
      "A test schedule describes what and how; a test plan describes when",
      "Both are the same",
      "A test plan is for developers; a test schedule is for testers"
    ],
    "correctOption": 0,
    "explanation": "A test plan defines the scope, approach, and strategy. A test schedule defines the timeline and milestones for executing the test activities."
  },
  {
    "testId": "manual-test-05",
    "question": "What is the purpose of a defect triage meeting?",
    "options": [
      "To prioritize and assign defects for resolution",
      "To write defects",
      "To test the software",
      "To plan the next release"
    ],
    "correctOption": 0,
    "explanation": "A defect triage meeting reviews reported defects, prioritizes them based on severity and impact, and assigns them to appropriate developers for resolution."
  },
  {
    "testId": "manual-test-05",
    "question": "What is a risk-based testing approach?",
    "options": [
      "Prioritizing testing based on the likelihood and impact of potential risks",
      "Testing all features equally",
      "Testing only high-risk features",
      "Avoiding testing"
    ],
    "correctOption": 0,
    "explanation": "Risk-based testing identifies areas of high risk and focuses testing efforts on those areas to maximize defect detection and minimize risk."
  },
  {
    "testId": "manual-test-05",
    "question": "What are the key components of a good bug report?",
    "options": [
      "Clear title, steps to reproduce, expected results, actual results, severity, priority, environment",
      "Title only",
      "Only steps to reproduce",
      "Only the developer name"
    ],
    "correctOption": 0,
    "explanation": "A good bug report includes a clear summary, detailed steps to reproduce, expected and actual results, severity, priority, test environment, and attachments if needed."
  },
  {
    "testId": "manual-test-05",
    "question": "What is the purpose of test coverage metrics?",
    "options": [
      "To measure how much of the software has been tested",
      "To measure how many defects were found",
      "To measure the performance of the testers",
      "To measure the project timeline"
    ],
    "correctOption": 0,
    "explanation": "Test coverage metrics indicate the degree to which the software has been tested, helping assess testing completeness and identify untested areas."
  },
  {
    "testId": "manual-test-05",
    "question": "What is the difference between a 'showstopper' and a 'minor' defect?",
    "options": [
      "A showstopper prevents critical functionality; a minor defect has little impact",
      "A minor defect prevents critical functionality; a showstopper has little impact",
      "Both are critical",
      "Both are minor"
    ],
    "correctOption": 0,
    "explanation": "A showstopper defect blocks critical functionality and prevents the software from being used. A minor defect has minimal impact and can be deferred."
  },
  {
    "testId": "manual-test-05",
    "question": "What is the purpose of a test strategy document?",
    "options": [
      "To define the overall approach and policies for testing at the organizational level",
      "To list all test cases",
      "To report test results",
      "To manage the project timeline"
    ],
    "correctOption": 0,
    "explanation": "A test strategy document defines the overall testing approach, policies, and standards to be followed across the organization or project."
  },
  {
    "testId": "manual-test-05",
    "question": "What is the purpose of a test review?",
    "options": [
      "To inspect and evaluate test artifacts to identify issues and improve quality",
      "To execute tests",
      "To fix defects",
      "To deploy the software"
    ],
    "correctOption": 0,
    "explanation": "Test reviews are a form of static testing where test artifacts (test plans, test cases) are evaluated to find defects, improve quality, and ensure completeness."
  },
  {
    "testId": "manual-test-05",
    "question": "What is the purpose of a risk matrix in testing?",
    "options": [
      "To assess the likelihood and impact of potential risks to prioritize testing",
      "To list all test cases",
      "To list all defects",
      "To track the schedule"
    ],
    "correctOption": 0,
    "explanation": "A risk matrix helps assess risks by evaluating their likelihood and impact, enabling testers to prioritize and focus their efforts effectively."
  },
  {
    "testId": "manual-test-05",
    "question": "What is the defect density metric?",
    "options": [
      "The number of defects per unit of code (per KLOC or per module)",
      "The total number of defects",
      "The number of test cases",
      "The number of testers"
    ],
    "correctOption": 0,
    "explanation": "Defect density is a metric that measures the number of defects per thousand lines of code (KLOC) or per module, indicating code quality."
  },
  {
    "testId": "manual-test-05",
    "question": "What is the purpose of a retrospective meeting in testing?",
    "options": [
      "To reflect on the testing process and identify areas for improvement",
      "To plan the next sprint",
      "To review test cases",
      "To assign defects"
    ],
    "correctOption": 0,
    "explanation": "A retrospective meeting allows the testing team to reflect on what went well, what didn't, and identify improvements for future testing activities."
  },
  {
    "testId": "manual-test-05",
    "question": "What is the test environment setup plan?",
    "options": [
      "A plan that details the hardware, software, and data required for testing",
      "A plan that details the test cases",
      "A plan that details the defects",
      "A plan that details the project schedule"
    ],
    "correctOption": 0,
    "explanation": "The test environment setup plan describes the infrastructure (hardware, software, network, test data) needed to execute tests."
  },
  {
    "testId": "manual-test-06",
    "question": "What is the primary difference between manual and automated testing?",
    "options": [
      "Manual testing is performed by humans; automated testing uses tools to execute tests",
      "Automated testing is performed by humans; manual testing uses tools",
      "Both use tools",
      "Both are performed by humans"
    ],
    "correctOption": 0,
    "explanation": "Manual testing involves human testers executing test cases. Automated testing uses tools and scripts to execute test cases automatically."
  },
  {
    "testId": "manual-test-06",
    "question": "What are the advantages of automated testing over manual testing?",
    "options": [
      "Faster execution, repeatability, and ability to run more tests",
      "Automated testing is always better than manual",
      "Automated testing requires less effort to set up",
      "Automated testing finds more defects than manual testing"
    ],
    "correctOption": 0,
    "explanation": "Automated testing offers faster execution, repeatability, and the ability to run a large number of tests consistently, especially for regression testing."
  },
  {
    "testId": "manual-test-06",
    "question": "What type of testing is best suited for automation?",
    "options": [
      "Regression testing and repetitive tests",
      "Exploratory testing",
      "Usability testing",
      "Exploratory testing"
    ],
    "correctOption": 0,
    "explanation": "Automation is most effective for repetitive tests like regression testing, smoke testing, and data-driven tests that need to be run frequently."
  },
  {
    "testId": "manual-test-06",
    "question": "What is the Selenium tool used for?",
    "options": [
      "Automating web application testing",
      "Manual testing",
      "Database testing",
      "Performance testing"
    ],
    "correctOption": 0,
    "explanation": "Selenium is a popular open-source tool used for automating web application testing across different browsers and platforms."
  },
  {
    "testId": "manual-test-06",
    "question": "What is JIRA primarily used for in testing?",
    "options": [
      "Defect tracking and project management",
      "Automated testing",
      "Performance testing",
      "Usability testing"
    ],
    "correctOption": 0,
    "explanation": "JIRA is a widely used tool for tracking defects, managing projects, and organizing testing activities in software development."
  },
  {
    "testId": "manual-test-06",
    "question": "What is the difference between a test automation framework and a tool?",
    "options": [
      "A framework is a set of guidelines and practices; a tool is a software application",
      "A tool is a set of guidelines; a framework is a software application",
      "Both are the same",
      "Frameworks are only for manual testing"
    ],
    "correctOption": 0,
    "explanation": "A test automation framework is a set of guidelines, practices, and processes for automation. A tool is the software used to implement automation."
  },
  {
    "testId": "manual-test-06",
    "question": "What is the purpose of a test automation framework?",
    "options": [
      "To provide guidelines for creating maintainable and efficient automated tests",
      "To execute manual tests",
      "To design test cases",
      "To track defects"
    ],
    "correctOption": 0,
    "explanation": "A test automation framework provides structure, standards, and reusable components for creating and maintaining automated tests."
  },
  {
    "testId": "manual-test-06",
    "question": "What is API testing in the context of manual testing?",
    "options": [
      "Testing the API endpoints to verify functionality, data formats, and response codes",
      "Testing the user interface",
      "Testing the database",
      "Testing the performance"
    ],
    "correctOption": 0,
    "explanation": "API testing verifies that APIs work as expected, checking endpoints, request/response formats, status codes, and security."
  },
  {
    "testId": "manual-test-06",
    "question": "What is the difference between functional and non-functional automation?",
    "options": [
      "Functional automation verifies what the system does; non-functional automation verifies performance and scalability",
      "Functional automation verifies performance; non-functional verifies functionality",
      "Both are the same",
      "Functional automation is manual; non-functional is automated"
    ],
    "correctOption": 0,
    "explanation": "Functional automation tests business logic and functionality. Non-functional automation tests performance, load, security, and other quality attributes."
  },
  {
    "testId": "manual-test-06",
    "question": "What is the concept of data-driven testing?",
    "options": [
      "Using external data sources to drive test execution, separating test logic from test data",
      "Testing only the data",
      "Testing the database",
      "Testing without data"
    ],
    "correctOption": 0,
    "explanation": "Data-driven testing separates test logic from test data, allowing the same test script to run with multiple data sets from external sources."
  },
  {
    "testId": "manual-test-06",
    "question": "What is exploratory testing in the context of automation?",
    "options": [
      "Exploratory testing is primarily manual and is not automated",
      "Exploratory testing is automated",
      "Exploratory testing uses scripts",
      "Exploratory testing is done by developers only"
    ],
    "correctOption": 0,
    "explanation": "Exploratory testing is a manual testing technique that relies on the tester's skills and intuition, making it difficult to fully automate."
  },
  {
    "testId": "manual-test-06",
    "question": "What is the purpose of a test automation plan?",
    "options": [
      "To define the automation scope, approach, and objectives",
      "To define the manual testing scope",
      "To report defects",
      "To manage the project schedule"
    ],
    "correctOption": 0,
    "explanation": "A test automation plan outlines the automation strategy, scope, tools, resources, and success criteria for automation efforts."
  },
  {
    "testId": "manual-test-06",
    "question": "What is the difference between a stub and a driver in integration testing?",
    "options": [
      "A stub is called by the module under test; a driver calls the module under test",
      "A driver is called by the module; a stub calls the module",
      "Both are the same",
      "Stubs are for white-box testing; drivers are for black-box testing"
    ],
    "correctOption": 0,
    "explanation": "In integration testing, a stub is a dummy component that replaces a called module. A driver is a dummy component that calls the module under test."
  },
  {
    "testId": "manual-test-06",
    "question": "What is the purpose of a test case management tool?",
    "options": [
      "To create, organize, execute, and track test cases",
      "To automate test execution",
      "To write code",
      "To design the architecture"
    ],
    "correctOption": 0,
    "explanation": "Test case management tools help organize, execute, and track test cases, managing the entire testing process from planning to reporting."
  },
  {
    "testId": "manual-test-06",
    "question": "What is the concept of 'test automation pyramid'?",
    "options": [
      "A strategy suggesting more unit tests, fewer service/API tests, and even fewer UI tests",
      "A strategy with more UI tests at the base",
      "A strategy with equal numbers of all test types",
      "A strategy that avoids automation"
    ],
    "correctOption": 0,
    "explanation": "The test automation pyramid recommends having a large number of fast, reliable unit tests, fewer integration/API tests, and the fewest end-to-end UI tests."
  },
  {
    "testId": "manual-test-06",
    "question": "What is the purpose of mobile application testing?",
    "options": [
      "To verify the functionality, usability, and performance of mobile apps on various devices",
      "To test only the web version",
      "To test only the database",
      "To test only the performance"
    ],
    "correctOption": 0,
    "explanation": "Mobile application testing ensures that mobile apps work correctly across different devices, operating systems, screen sizes, and network conditions."
  },
  {
    "testId": "manual-test-06",
    "question": "What is the difference between manual and automated regression testing?",
    "options": [
      "Manual regression testing is time-consuming; automated regression testing is faster and repeatable",
      "Manual regression testing is faster; automated regression testing is slower",
      "Both are equally time-consuming",
      "Manual regression testing is always better"
    ],
    "correctOption": 0,
    "explanation": "Automated regression testing is significantly faster and more repeatable than manual regression testing, making it ideal for frequent changes."
  },
  {
    "testId": "manual-test-06",
    "question": "What is the purpose of a test harness?",
    "options": [
      "To provide the necessary infrastructure to execute automated tests",
      "To manually execute tests",
      "To report defects",
      "To design test cases"
    ],
    "correctOption": 0,
    "explanation": "A test harness (or test framework) provides the infrastructure for running automated tests, including initialization, cleanup, and reporting."
  },
  {
    "testId": "manual-test-06",
    "question": "What is the concept of 'continuous testing' in DevOps?",
    "options": [
      "Testing continuously throughout the CI/CD pipeline to provide rapid feedback",
      "Testing only at the end",
      "Testing only manually",
      "Testing in isolation"
    ],
    "correctOption": 0,
    "explanation": "Continuous testing involves automating tests and running them continuously as part of the CI/CD pipeline to provide instant feedback on code changes."
  },
  {
    "testId": "manual-test-06",
    "question": "What is the purpose of a smoke test suite in automation?",
    "options": [
      "To quickly verify critical functionality before proceeding with detailed testing",
      "To test all functionality",
      "To test only performance",
      "To test only the database"
    ],
    "correctOption": 0,
    "explanation": "Smoke test suites in automation run a subset of critical tests to ensure the build is stable before more extensive testing."
  },
  {
    "testId": "manual-test-06",
    "question": "What is the primary purpose of a test automation strategy?",
    "options": [
      "To ensure efficient and effective automation that reduces testing time and improves quality",
      "To replace manual testing completely",
      "To write test cases",
      "To manage defects"
    ],
    "correctOption": 0,
    "explanation": "A test automation strategy defines how automation will be used to improve efficiency, reduce manual effort, and ensure consistent testing."
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
console.log('Added ' + newQuestions.length + ' manual questions to questions.js');
