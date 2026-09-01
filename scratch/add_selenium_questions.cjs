const fs = require('fs');
const path = require('path');

const newQuestions = [
  {
    "testId": "selenium-test-01",
    "question": "What is Selenium primarily used for?",
    "options": ["Unit testing", "Performance testing", "Automation testing of web applications", "Security testing"],
    "correctOption": 2,
    "explanation": "Selenium is a widely used open-source tool for automating web applications across different browsers and platforms.[reference:7]"
  },
  {
    "testId": "selenium-test-01",
    "question": "Which of the following is NOT a component of Selenium?",
    "options": ["Selenium WebDriver", "Selenium IDE", "Selenium Grid", "Selenium Server"],
    "correctOption": 3,
    "explanation": "Selenium Server is not a separate component. The main components are Selenium WebDriver, Selenium IDE, and Selenium Grid.[reference:8]"
  },
  {
    "testId": "selenium-test-01",
    "question": "What is the primary objective of implementing test automation?",
    "options": [
      "To reduce the cost of manual testing",
      "To increase the speed and efficiency of testing",
      "To eliminate the need for human testers entirely",
      "To replace the test development phase"
    ],
    "correctOption": 1,
    "explanation": "The primary objective of test automation is to increase the speed and efficiency of testing, enabling faster feedback and more frequent executions.[reference:9]"
  },
  {
    "testId": "selenium-test-01",
    "question": "How do manual and automated testing complement each other?",
    "options": [
      "Automated testing can completely replace manual testing for all types of tests",
      "Manual testing is used only for functional testing, automated only for non-functional",
      "Automated testing is ideal for repetitive tasks; manual testing is better for exploratory testing",
      "Manual and automated testing cannot be used together"
    ],
    "correctOption": 2,
    "explanation": "Automated testing excels at repetitive, regression tasks, while manual testing is more effective for exploratory, usability, and ad-hoc testing.[reference:10]"
  },
  {
    "testId": "selenium-test-01",
    "question": "Which of the following is a key technical success factor for a test automation project?",
    "options": [
      "Ensuring the testing environment is stable and consistent",
      "Prioritising manual testing as automation may be unreliable",
      "Prioritising test coverage over automation maintenance",
      "Automatically logging defects through automation"
    ],
    "correctOption": 0,
    "explanation": "A stable and consistent testing environment is crucial for reliable test automation results.[reference:11]"
  },
  {
    "testId": "selenium-test-01",
    "question": "In Test Automation Architecture (TAA), what is the primary role of Selenium WebDriver?",
    "options": [
      "Storing test execution results in a centralized system",
      "Interacting with the browser to simulate user actions",
      "Generating test scripts in a low-code format",
      "Scripting unit tests for backend services"
    ],
    "correctOption": 1,
    "explanation": "Selenium WebDriver's primary role is to interact with the browser and simulate real user actions like clicking, typing, and navigation.[reference:12]"
  },
  {
    "testId": "selenium-test-01",
    "question": "Which statement correctly highlights characteristics of Selenium WebDriver?",
    "options": [
      "It enables cross-browser testing but lacks support for advanced user interactions",
      "It offers extensive browser compatibility but requires tools for managing browser-specific behaviors",
      "It automates mobile applications directly without extra tools",
      "It struggles with executing tests on headless browsers"
    ],
    "correctOption": 1,
    "explanation": "Selenium WebDriver supports multiple browsers, but browser-specific behaviors and configurations may require additional handling.[reference:13]"
  },
  {
    "testId": "selenium-test-01",
    "question": "What is the difference between Selenium IDE and Selenium WebDriver?",
    "options": [
      "IDE is a record-and-playback tool; WebDriver is a programming framework for advanced automation",
      "IDE is for advanced scripting; WebDriver is for recording",
      "Both are record-and-playback tools",
      "Both are programming frameworks"
    ],
    "correctOption": 0,
    "explanation": "Selenium IDE is a record-and-playback browser extension for simple automation. Selenium WebDriver is a programming framework that provides more control and flexibility.[reference:14]"
  },
  {
    "testId": "selenium-test-01",
    "question": "Which of the following is a limitation of test automation?",
    "options": [
      "Automation can find all defects",
      "Automation requires no maintenance",
      "Automation cannot replace human judgment for exploratory testing",
      "Automation works for all types of applications"
    ],
    "correctOption": 2,
    "explanation": "Automation cannot replace human judgment, especially for exploratory testing, usability, and complex scenarios that require human intuition."
  },
  {
    "testId": "selenium-test-01",
    "question": "What is Selenium Grid used for?",
    "options": [
      "Record-and-playback of test scripts",
      "Parallel execution of tests across different browsers and machines",
      "Writing test scripts in Java",
      "Managing test data"
    ],
    "correctOption": 1,
    "explanation": "Selenium Grid enables parallel test execution on multiple browsers and operating systems, significantly reducing test execution time.[reference:15]"
  },
  {
    "testId": "selenium-test-01",
    "question": "What is the difference between verification and validation in automation?",
    "options": [
      "Verification checks if the product is built correctly; validation checks if the correct product is built",
      "Verification is done by automation; validation is done manually",
      "Both are the same",
      "Verification is for functionality; validation is for performance"
    ],
    "correctOption": 0,
    "explanation": "Verification ensures the product conforms to specifications, while validation ensures the product meets user needs and expectations."
  },
  {
    "testId": "selenium-test-01",
    "question": "Which of the following is NOT a benefit of test automation?",
    "options": [
      "Faster test execution",
      "Improved test accuracy",
      "Complete elimination of manual testing",
      "Early detection of defects"
    ],
    "correctOption": 2,
    "explanation": "Test automation reduces manual effort but does not completely eliminate the need for manual testing, especially for exploratory and usability testing."
  },
  {
    "testId": "selenium-test-01",
    "question": "What is the purpose of metric collection in automation?",
    "options": [
      "To track test execution progress and quality metrics",
      "To write test cases",
      "To design test scripts",
      "To deploy the application"
    ],
    "correctOption": 0,
    "explanation": "Metric collection helps track testing progress, effectiveness, and quality metrics like pass/fail rates and defect density.[reference:16]"
  },
  {
    "testId": "selenium-test-01",
    "question": "What is the recommended approach when selecting a test automation tool?",
    "options": [
      "Choose the most expensive tool",
      "Evaluate based on application technology, team skills, and project requirements",
      "Choose the tool with the most features",
      "Always choose open-source tools"
    ],
    "correctOption": 1,
    "explanation": "Tool selection should be based on application technology, team expertise, project requirements, and budget constraints."
  },
  {
    "testId": "selenium-test-01",
    "question": "Which of the following best describes 'test automation framework'?",
    "options": [
      "A set of guidelines and practices for creating automated tests",
      "A tool for recording test scripts",
      "A programming language for automation",
      "A database for storing test results"
    ],
    "correctOption": 0,
    "explanation": "A test automation framework provides guidelines, standards, and reusable components for creating and maintaining automated tests."
  },
  {
    "testId": "selenium-test-01",
    "question": "What is the role of assertions in test automation?",
    "options": [
      "To verify expected conditions and validate test outcomes",
      "To navigate to a URL",
      "To click on elements",
      "To enter text into fields"
    ],
    "correctOption": 0,
    "explanation": "Assertions validate that the actual behavior matches the expected behavior, determining whether a test passes or fails."
  },
  {
    "testId": "selenium-test-01",
    "question": "What is the advantage of automating regression tests?",
    "options": [
      "It ensures new changes do not break existing functionality",
      "It finds all new defects",
      "It eliminates the need for code reviews",
      "It replaces unit testing"
    ],
    "correctOption": 0,
    "explanation": "Automated regression tests verify that existing functionality remains intact after changes, providing quick feedback on potential regressions."
  },
  {
    "testId": "selenium-test-01",
    "question": "What is the difference between a test script and a test case?",
    "options": [
      "A test script is the automated code; a test case is the manual documentation of steps and expected results",
      "Both are the same",
      "A test case is automated; a test script is manual",
      "Test scripts are for developers; test cases are for testers"
    ],
    "correctOption": 0,
    "explanation": "A test case is a documented set of conditions and expected results. A test script is the automated implementation of a test case."
  },
  {
    "testId": "selenium-test-01",
    "question": "Which type of testing is most suitable for automation?",
    "options": ["Exploratory testing", "Usability testing", "Regression testing", "Ad-hoc testing"],
    "correctOption": 2,
    "explanation": "Regression testing is highly suitable for automation as it involves repetitive execution of the same test cases after each change."
  },
  {
    "testId": "selenium-test-01",
    "question": "What is the purpose of a test harness in automation?",
    "options": [
      "To provide the infrastructure for executing automated tests",
      "To write test cases",
      "To design test scripts",
      "To manage test data"
    ],
    "correctOption": 0,
    "explanation": "A test harness provides the necessary infrastructure including setup, execution, and reporting for automated tests."
  },
  {
    "testId": "selenium-test-01",
    "question": "What is the concept of 'continuous testing'?",
    "options": [
      "Testing continuously throughout the CI/CD pipeline",
      "Testing only at the end of development",
      "Testing only manually",
      "Testing in isolation"
    ],
    "correctOption": 0,
    "explanation": "Continuous testing involves running automated tests as part of the CI/CD pipeline to provide rapid feedback on code changes."
  },
  {
    "testId": "selenium-test-01",
    "question": "Which of the following is a technical risk in test automation?",
    "options": [
      "High maintenance effort due to application changes",
      "Lack of manual testers",
      "Limited project budget",
      "Poor communication skills"
    ],
    "correctOption": 0,
    "explanation": "High maintenance effort due to frequent application changes is a significant technical risk in test automation projects."
  },
  {
    "testId": "selenium-test-01",
    "question": "What is the purpose of a test automation strategy?",
    "options": [
      "To define the approach, scope, and objectives for automation",
      "To write test scripts",
      "To execute test cases",
      "To report defects"
    ],
    "correctOption": 0,
    "explanation": "A test automation strategy defines the overall approach, scope, tools, and success criteria for automation efforts."
  },
  {
    "testId": "selenium-test-01",
    "question": "What is the difference between a smoke test and a full regression test?",
    "options": [
      "Smoke test is a broad but shallow test of critical functionality; regression test is comprehensive",
      "Smoke test is comprehensive; regression test is shallow",
      "Both are the same",
      "Smoke test is automated; regression test is manual"
    ],
    "correctOption": 0,
    "explanation": "Smoke testing is a preliminary check of critical functionality, while regression testing is a comprehensive verification of all functionality."
  },
  {
    "testId": "selenium-test-01",
    "question": "What is the role of logging in test automation?",
    "options": [
      "To capture test execution details for debugging and reporting",
      "To write test scripts",
      "To design test cases",
      "To manage test data"
    ],
    "correctOption": 0,
    "explanation": "Logging captures test execution details, errors, and debug information, aiding in troubleshooting and reporting."
  },
  {
    "testId": "selenium-test-01",
    "question": "What is the advantage of using a data-driven testing approach?",
    "options": [
      "It separates test logic from test data, allowing multiple data sets to be used",
      "It eliminates the need for test scripts",
      "It requires less maintenance",
      "It works only for small applications"
    ],
    "correctOption": 0,
    "explanation": "Data-driven testing separates test logic from test data, allowing the same test script to run with multiple data sets."
  },
  {
    "testId": "selenium-test-01",
    "question": "What is the 'test automation pyramid'?",
    "options": [
      "A strategy recommending more unit tests, fewer integration tests, and even fewer UI tests",
      "A strategy recommending more UI tests at the base",
      "A strategy with equal numbers of all test types",
      "A strategy that avoids automation"
    ],
    "correctOption": 0,
    "explanation": "The test automation pyramid recommends a large number of fast unit tests, fewer integration tests, and the fewest end-to-end UI tests."
  },
  {
    "testId": "selenium-test-01",
    "question": "Which of the following is true about self-healing tests?",
    "options": [
      "Test maintenance is no longer required as self-healing tests correct all locators",
      "Test maintenance is still required on locators that were both corrected and not corrected",
      "Test maintenance is optional when self-healing tests are in place",
      "Self-healing tests eliminate the need for any maintenance"
    ],
    "correctOption": 1,
    "explanation": "Even with self-healing tests, maintenance is still required on locators that were both corrected and not corrected by the framework.[reference:17]"
  },
  {
    "testId": "selenium-test-02",
    "question": "Which method is used to locate an element using WebDriver?",
    "options": ["driver.findObject()", "driver.locate()", "driver.findElement()", "driver.getElement()"],
    "correctOption": 2,
    "explanation": "`driver.findElement()` is the correct method used to locate a web element in Selenium WebDriver.[reference:18]"
  },
  {
    "testId": "selenium-test-02",
    "question": "What is the difference between `findElement()` and `findElements()`?",
    "options": [
      "findElement() returns the first matching element; findElements() returns all matching elements as a list",
      "findElement() returns all elements; findElements() returns one element",
      "Both return one element",
      "Both return all elements"
    ],
    "correctOption": 0,
    "explanation": "`findElement()` returns the first WebElement that matches the locator. `findElements()` returns a List of all matching WebElements.[reference:19]"
  },
  {
    "testId": "selenium-test-02",
    "question": "What happens if `findElement()` does not find any matching element?",
    "options": ["Returns null", "Returns an empty list", "Throws NoSuchElementException", "Throws NullPointerException"],
    "correctOption": 2,
    "explanation": "If no element is found, `findElement()` throws a `NoSuchElementException`."
  },
  {
    "testId": "selenium-test-02",
    "question": "Which method is used to click on a web element in Selenium?",
    "options": ["click()", "press()", "select()", "submit()"],
    "correctOption": 0,
    "explanation": "The `click()` method is used to simulate a mouse click on a web element.[reference:20]"
  },
  {
    "testId": "selenium-test-02",
    "question": "Which method is used to enter text into an input field?",
    "options": ["sendKeys()", "setText()", "enterText()", "type()"],
    "correctOption": 0,
    "explanation": "The `sendKeys()` method is used to simulate typing text into an input field or text area.[reference:21]"
  },
  {
    "testId": "selenium-test-02",
    "question": "What is the difference between `get()` and `navigate().to()`?",
    "options": [
      "get() waits for the page to load; navigate().to() does not wait",
      "navigate().to() waits; get() does not wait",
      "Both are identical in functionality",
      "get() is for URLs; navigate().to() is for file paths"
    ],
    "correctOption": 0,
    "explanation": "The `get()` method waits for the page to fully load, while `navigate().to()` does not wait for page load and can also be used with navigation history.[reference:22]"
  },
  {
    "testId": "selenium-test-02",
    "question": "How do you navigate back in browser history using Selenium?",
    "options": ["driver.navigate().back()", "driver.back()", "driver.goBack()", "driver.history().back()"],
    "correctOption": 0,
    "explanation": "The `driver.navigate().back()` method simulates clicking the browser's back button."
  },
  {
    "testId": "selenium-test-02",
    "question": "How do you refresh a page in Selenium?",
    "options": ["driver.navigate().refresh()", "driver.refresh()", "driver.reload()", "driver.navigate().reload()"],
    "correctOption": 0,
    "explanation": "The `driver.navigate().refresh()` method refreshes the current page."
  },
  {
    "testId": "selenium-test-02",
    "question": "What is the difference between `close()` and `quit()`?",
    "options": [
      "close() closes the current window/tab; quit() closes all windows/tabs and ends the WebDriver session",
      "close() closes all windows; quit() closes the current window",
      "Both close the current window",
      "Both close all windows"
    ],
    "correctOption": 0,
    "explanation": "`close()` closes the current browser window/tab. `quit()` closes all windows/tabs and terminates the WebDriver session.[reference:23]"
  },
  {
    "testId": "selenium-test-02",
    "question": "Which method is used to get the title of the current page?",
    "options": ["driver.getTitle()", "driver.title()", "driver.getPageTitle()", "driver.getPage()"],
    "correctOption": 0,
    "explanation": "`driver.getTitle()` returns the title of the current page as a String.[reference:24]"
  },
  {
    "testId": "selenium-test-02",
    "question": "Which method is used to get the current URL?",
    "options": ["driver.getCurrentUrl()", "driver.getURL()", "driver.currentUrl()", "driver.getPageUrl()"],
    "correctOption": 0,
    "explanation": "`driver.getCurrentUrl()` returns the URL of the current page as a String."
  },
  {
    "testId": "selenium-test-02",
    "question": "How do you maximize the browser window in Selenium?",
    "options": ["driver.manage().window().maximize()", "driver.maximize()", "driver.window().maximize()", "driver.manage().maximize()"],
    "correctOption": 0,
    "explanation": "The `driver.manage().window().maximize()` method maximizes the current browser window."
  },
  {
    "testId": "selenium-test-02",
    "question": "What is a WebDriverWait in Selenium?",
    "options": [
      "An explicit wait that waits for a specific condition on an element",
      "An implicit wait that applies globally",
      "A fixed sleep time",
      "A wait that never times out"
    ],
    "correctOption": 0,
    "explanation": "WebDriverWait is an explicit wait that waits for a specific condition (e.g., element visibility) to be met before proceeding."
  },
  {
    "testId": "selenium-test-02",
    "question": "What is the difference between implicit and explicit wait?",
    "options": [
      "Implicit wait applies globally to all findElement() calls; explicit wait is for specific conditions on specific elements",
      "Explicit wait applies globally; implicit wait is for specific elements",
      "Both are the same",
      "Implicit wait is for visibility; explicit wait is for clickability"
    ],
    "correctOption": 0,
    "explanation": "Implicit wait is set globally and applies to all `findElement()` calls. Explicit wait is defined for specific elements and conditions."
  },
  {
    "testId": "selenium-test-02",
    "question": "How do you switch to a new window or tab in Selenium?",
    "options": [
      "driver.switchTo().window(windowHandle)",
      "driver.switchToWindow(windowHandle)",
      "driver.setWindow(windowHandle)",
      "driver.goToWindow(windowHandle)"
    ],
    "correctOption": 0,
    "explanation": "The `driver.switchTo().window(windowHandle)` method switches the focus to a specific window or tab."
  },
  {
    "testId": "selenium-test-02",
    "question": "What is a TimeoutException in Selenium?",
    "options": [
      "Thrown when a wait condition is not met within the specified time",
      "Thrown when an element is not found",
      "Thrown when a browser crashes",
      "Thrown when the script is terminated"
    ],
    "correctOption": 0,
    "explanation": "TimeoutException is thrown when a wait condition (implicit or explicit) is not satisfied within the configured timeout period.[reference:25]"
  },
  {
    "testId": "selenium-test-02",
    "question": "How do you handle SSL certificate warnings in Selenium?",
    "options": [
      "By using browser options or capabilities to accept certificates",
      "By clicking on the warning message",
      "By ignoring the warning",
      "SSL warnings cannot be handled"
    ],
    "correctOption": 0,
    "explanation": "SSL certificate warnings are typically handled by configuring browser options or capabilities to accept or ignore insecure certificates.[reference:26]"
  },
  {
    "testId": "selenium-test-02",
    "question": "How do you handle a pop-up alert in Selenium?",
    "options": [
      "driver.switchTo().alert().accept()",
      "driver.alert().accept()",
      "driver.switchToAlert().accept()",
      "driver.getAlert().accept()"
    ],
    "correctOption": 0,
    "explanation": "The `driver.switchTo().alert()` method is used to switch to an alert, and `accept()` or `dismiss()` is used to handle it.[reference:27]"
  },
  {
    "testId": "selenium-test-02",
    "question": "What is the purpose of `driver.getPageSource()`?",
    "options": [
      "To get the HTML source of the current page",
      "To get the page title",
      "To get the page URL",
      "To get the page screenshot"
    ],
    "correctOption": 0,
    "explanation": "`driver.getPageSource()` returns the HTML source of the current page as a String.[reference:28]"
  },
  {
    "testId": "selenium-test-02",
    "question": "Which method is used to take a screenshot in Selenium WebDriver?",
    "options": ["((TakesScreenshot)driver).getScreenshotAs()", "driver.screenshot()", "driver.takeScreenshot()", "TakesScreenshot.capture()"],
    "correctOption": 0,
    "explanation": "`((TakesScreenshot)driver).getScreenshotAs()` is the correct way to capture a screenshot in Selenium WebDriver."
  },
  {
    "testId": "selenium-test-03",
    "question": "Which of the following is the fastest locator strategy in Selenium?",
    "options": ["XPath", "CSS Selector", "ID", "ClassName"],
    "correctOption": 2,
    "explanation": "ID is generally the fastest and most reliable locator strategy because it is unique and directly accessible."
  },
  {
    "testId": "selenium-test-03",
    "question": "What is the correct CSS selector to select an element with id='username'?",
    "options": ["#username", ".username", "username", "*username"],
    "correctOption": 0,
    "explanation": "In CSS selectors, `#` is used to select an element by its ID attribute. `#username` selects the element with id='username'."
  },
  {
    "testId": "selenium-test-03",
    "question": "What is the correct CSS selector to select all elements with class='btn'?",
    "options": ["#btn", ".btn", "btn", "*btn"],
    "correctOption": 1,
    "explanation": "In CSS selectors, `.` is used to select elements by class name. `.btn` selects all elements with class='btn'."
  },
  {
    "testId": "selenium-test-03",
    "question": "What is the correct XPath to select a button with text 'Submit'?",
    "options": ["//button[text()='Submit']", "//button[@text='Submit']", "/button[text()='Submit']", "button[text()='Submit']"],
    "correctOption": 0,
    "explanation": "`//button[text()='Submit']` selects the button element whose exact text is 'Submit'."
  },
  {
    "testId": "selenium-test-03",
    "question": "What is the difference between relative and absolute XPath?",
    "options": [
      "Relative XPath starts from any node (//); absolute XPath starts from the root (/)",
      "Absolute XPath starts from any node; relative XPath starts from the root",
      "Both start from the root",
      "Both start from any node"
    ],
    "correctOption": 0,
    "explanation": "Absolute XPath starts from the root node with a single slash (/). Relative XPath starts from any node with a double slash (//) and is more robust."
  },
  {
    "testId": "selenium-test-03",
    "question": "Which CSS selector would select the second `<li>` element inside a `<ul>` with id='menu'?",
    "options": ["#menu li:nth-child(2)", "#menu li:nth-of-type(2)", "ul#menu li:nth-child(2)", "All of the above"],
    "correctOption": 3,
    "explanation": "All of these selectors correctly target the second `<li>` element inside the `<ul>` with id='menu'.[reference:29]"
  },
  {
    "testId": "selenium-test-03",
    "question": "Which XPath expression selects all `<book>` elements regardless of their position in the document?",
    "options": ["//book", "/book", "./book", "book"],
    "correctOption": 0,
    "explanation": "`//book` selects all `<book>` elements anywhere in the document using relative XPath.[reference:30]"
  },
  {
    "testId": "selenium-test-03",
    "question": "What is the correct CSS selector to select an element with class 'A4Q_'?",
    "options": [".A4Q_", "#A4Q_", "A4Q_", "*A4Q_"],
    "correctOption": 0,
    "explanation": "In CSS selectors, `.` is used for class selection. `.A4Q_` selects elements with class='A4Q_'.[reference:31]"
  },
  {
    "testId": "selenium-test-03",
    "question": "Which of the following is a valid XPath axis?",
    "options": ["following-sibling", "parent", "child", "All of the above"],
    "correctOption": 3,
    "explanation": "XPath axes include following-sibling, parent, child, ancestor, descendant, preceding, and many others for navigating the DOM tree."
  },
  {
    "testId": "selenium-test-03",
    "question": "How do you select an element with a specific attribute value using XPath?",
    "options": ["//element[@attribute='value']", "//element[attribute='value']", "/element[@attribute='value']", "element[@attribute='value']"],
    "correctOption": 0,
    "explanation": "`//element[@attribute='value']` selects elements with a specific attribute value using relative XPath."
  },
  {
    "testId": "selenium-test-03",
    "question": "Which of the following is a valid CSS selector to select an element with both class 'btn' and id 'submit'?",
    "options": ["#submit.btn", ".btn#submit", "btn#submit", "Both A and B"],
    "correctOption": 3,
    "explanation": "Both `#submit.btn` and `.btn#submit` are valid CSS selectors that combine ID and class selectors."
  },
  {
    "testId": "selenium-test-03",
    "question": "What is the correct CSS selector to select all elements with class 'highlight' that are inside a `<div>`?",
    "options": ["div .highlight", "div.highlight", ".highlight div", "div > .highlight"],
    "correctOption": 0,
    "explanation": "`div .highlight` selects all elements with class 'highlight' that are descendants of any `<div>` element."
  },
  {
    "testId": "selenium-test-03",
    "question": "Which locator strategy is most prone to breaking when the application changes?",
    "options": ["ID", "ClassName", "Absolute XPath", "CSS Selector"],
    "correctOption": 2,
    "explanation": "Absolute XPath is most fragile because it depends on the exact DOM structure, which is prone to change."
  },
  {
    "testId": "selenium-test-03",
    "question": "What is the purpose of the `contains()` function in XPath?",
    "options": [
      "To select elements whose attribute value contains a specific substring",
      "To check if an element contains a child element",
      "To select elements with exact text match",
      "To combine two conditions"
    ],
    "correctOption": 0,
    "explanation": "`contains(@attribute, 'value')` is used to select elements where the attribute value contains the specified substring."
  },
  {
    "testId": "selenium-test-03",
    "question": "Which XPath expression selects the parent of a button with text 'Submit'?",
    "options": ["//button[text()='Submit']/parent::*", "//button[text()='Submit']/..", "Both A and B", "None of the above"],
    "correctOption": 2,
    "explanation": "Both `parent::*` and `..` select the parent of the current node in XPath."
  },
  {
    "testId": "selenium-test-03",
    "question": "What is the difference between `//` and `.//` in XPath?",
    "options": [
      "// selects from the document root; .// selects from the current context node",
      ".// selects from the document root; // selects from the current context node",
      "Both select from the document root",
      "Both select from the current context node"
    ],
    "correctOption": 0,
    "explanation": "`//` starts searching from the document root, while `.//` starts searching from the current context node (relative path)."
  },
  {
    "testId": "selenium-test-03",
    "question": "Which CSS selector is equivalent to `//input[@type='text']`?",
    "options": ["input[type='text']", "input.text", "input#text", "input[type=text]"],
    "correctOption": 0,
    "explanation": "`input[type='text']` is the CSS selector equivalent to the XPath `//input[@type='text']`."
  },
  {
    "testId": "selenium-test-03",
    "question": "What is the purpose of the `last()` function in XPath?",
    "options": [
      "To select the last element in a node set",
      "To get the last attribute of an element",
      "To get the last child of an element",
      "To check if an element is the last child"
    ],
    "correctOption": 0,
    "explanation": "`last()` in XPath returns the last position in a node set, e.g., `(//div)[last()]` selects the last `<div>` element."
  },
  {
    "testId": "selenium-test-03",
    "question": "Which of the following is a valid By locator strategy in Selenium?",
    "options": ["By.id", "By.name", "By.className", "All of the above"],
    "correctOption": 3,
    "explanation": "Selenium supports multiple By strategies including id, name, className, tagName, linkText, partialLinkText, cssSelector, and xpath."
  },
  {
    "testId": "selenium-test-04",
    "question": "What is the Page Object Model (POM) in Selenium?",
    "options": [
      "A design pattern that creates objects for each page to encapsulate UI elements and actions",
      "A model for storing test data",
      "A type of test framework",
      "A reporting tool"
    ],
    "correctOption": 0,
    "explanation": "Page Object Model is a design pattern that creates a class for each page, encapsulating UI elements and actions, improving maintainability.[reference:32]"
  },
  {
    "testId": "selenium-test-04",
    "question": "What is the main advantage of using Page Object Model?",
    "options": [
      "It reduces code duplication and improves maintainability",
      "It makes tests run faster",
      "It eliminates the need for locators",
      "It works only with Java"
    ],
    "correctOption": 0,
    "explanation": "POM reduces code duplication by centralizing UI element definitions and actions, making tests easier to maintain."
  },
  {
    "testId": "selenium-test-04",
    "question": "Which TestNG annotation is used to run a method before each test method?",
    "options": ["@BeforeMethod", "@BeforeTest", "@BeforeClass", "@BeforeSuite"],
    "correctOption": 0,
    "explanation": "`@BeforeMethod` executes before each `@Test` method in the class.[reference:33]"
  },
  {
    "testId": "selenium-test-04",
    "question": "Which TestNG annotation is used to run a method after all tests in a class have run?",
    "options": ["@AfterClass", "@AfterMethod", "@AfterTest", "@AfterSuite"],
    "correctOption": 0,
    "explanation": "`@AfterClass` executes after all test methods in the current class have been executed.[reference:34]"
  },
  {
    "testId": "selenium-test-04",
    "question": "What is the purpose of `@DataProvider` in TestNG?",
    "options": [
      "To provide test data to a test method",
      "To provide test configuration",
      "To provide test dependencies",
      "To provide test execution order"
    ],
    "correctOption": 0,
    "explanation": "`@DataProvider` in TestNG is used to supply test data to test methods, enabling data-driven testing.[reference:35]"
  },
  {
    "testId": "selenium-test-04",
    "question": "Which TestNG attribute is used to make a test method depend on another test method?",
    "options": ["dependsOnMethods", "dependsOn", "dependsOnTest", "dependsOnGroups"],
    "correctOption": 0,
    "explanation": "`dependsOnMethods` is the TestNG attribute used to specify that a test method depends on another test method.[reference:36]"
  },
  {
    "testId": "selenium-test-04",
    "question": "What is a Data-Driven Test in Selenium?",
    "options": [
      "A test that uses test data stored outside the test script",
      "A test that tests the database",
      "A test that uses hardcoded data",
      "A test that drives the browser"
    ],
    "correctOption": 0,
    "explanation": "A Data-Driven Test uses test data stored externally (like Excel, CSV, or databases) to drive test execution.[reference:37]"
  },
  {
    "testId": "selenium-test-04",
    "question": "What is the purpose of the TestNG `priority` attribute?",
    "options": [
      "To specify the execution order of test methods",
      "To specify the priority of bug fixes",
      "To specify test data priority",
      "To specify test class priority"
    ],
    "correctOption": 0,
    "explanation": "The `priority` attribute in TestNG determines the order in which test methods are executed (lower numbers first).[reference:38]"
  },
  {
    "testId": "selenium-test-04",
    "question": "Which of the following is NOT a valid attribute of the `@Test` annotation in TestNG?",
    "options": ["alwaysRun", "dataProvider", "neverRun", "priority"],
    "correctOption": 2,
    "explanation": "`neverRun` is not a valid attribute of the `@Test` annotation. Valid attributes include `alwaysRun`, `dataProvider`, and `priority`.[reference:39]"
  },
  {
    "testId": "selenium-test-04",
    "question": "What is the purpose of `Assert` in TestNG?",
    "options": [
      "To verify expected conditions and validate test outcomes",
      "To navigate to a URL",
      "To click on elements",
      "To enter text into fields"
    ],
    "correctOption": 0,
    "explanation": "Assertions in TestNG are used to verify that actual results match expected results, determining test pass/fail status."
  },
  {
    "testId": "selenium-test-04",
    "question": "What is the difference between `SoftAssert` and `HardAssert` in TestNG?",
    "options": [
      "HardAssert stops execution on failure; SoftAssert continues execution and collects failures",
      "SoftAssert stops execution; HardAssert continues",
      "Both stop execution on failure",
      "Both continue execution on failure"
    ],
    "correctOption": 0,
    "explanation": "HardAssert stops test execution immediately on failure. SoftAssert continues execution and reports all failures at the end using `assertAll()`.[reference:40]"
  },
  {
    "testId": "selenium-test-04",
    "question": "What is the purpose of `Groups` in TestNG?",
    "options": [
      "To categorize test methods for selective execution",
      "To group test data",
      "To group test classes",
      "To group test suites"
    ],
    "correctOption": 0,
    "explanation": "TestNG Groups allow test methods to be categorized, enabling selective execution of specific groups like 'smoke', 'regression', etc.[reference:41]"
  },
  {
    "testId": "selenium-test-04",
    "question": "What is the purpose of parallel execution in TestNG?",
    "options": [
      "To run tests in parallel to reduce execution time",
      "To run tests sequentially",
      "To run tests on different browsers only",
      "To run tests on different machines only"
    ],
    "correctOption": 0,
    "explanation": "Parallel execution in TestNG runs multiple test methods or classes simultaneously, significantly reducing overall test execution time.[reference:42]"
  },
  {
    "testId": "selenium-test-04",
    "question": "What is a Maven dependency in Selenium projects?",
    "options": [
      "A library or JAR file required for the project, defined in pom.xml",
      "A test script",
      "A test data file",
      "A configuration file"
    ],
    "correctOption": 0,
    "explanation": "Maven dependencies are external libraries required by the project, defined in the `pom.xml` file.[reference:43]"
  },
  {
    "testId": "selenium-test-04",
    "question": "What is the purpose of a `testng.xml` file?",
    "options": [
      "To configure and execute TestNG test suites",
      "To store test data",
      "To store test reports",
      "To configure Maven"
    ],
    "correctOption": 0,
    "explanation": "`testng.xml` is a configuration file used to define and execute TestNG test suites, including groups, classes, and parameters."
  },
  {
    "testId": "selenium-test-04",
    "question": "What is the purpose of `@Factory` in TestNG?",
    "options": [
      "To create multiple instances of a test class with different data",
      "To create test data",
      "To create test reports",
      "To create test suites"
    ],
    "correctOption": 0,
    "explanation": "`@Factory` in TestNG is used to create multiple instances of a test class, often used with `@DataProvider` for data-driven testing."
  },
  {
    "testId": "selenium-test-04",
    "question": "What is the recommended approach for maintaining test scripts?",
    "options": [
      "Regularly review and update locators and logic as the application changes",
      "Never update test scripts",
      "Only update scripts when they fail",
      "Rewrite all scripts after each release"
    ],
    "correctOption": 0,
    "explanation": "Test scripts should be regularly reviewed and updated to keep them aligned with application changes, reducing maintenance effort."
  },
  {
    "testId": "selenium-test-04",
    "question": "What is the probe effect in performance testing using Selenium?",
    "options": [
      "The use of machine resources by multiple test instances affects performance metrics",
      "The execution of multiple Selenium sessions impacts the system functionality",
      "The execution of multiple sessions may bring the test environment down",
      "All of the above"
    ],
    "correctOption": 3,
    "explanation": "The probe effect refers to how the automation tool's resource usage and multiple sessions can impact performance metrics and the system under test.[reference:44]"
  },
  {
    "testId": "selenium-test-04",
    "question": "What information is typically found on a Selenium automation report?",
    "options": [
      "Machine identification, browser version, and actual results of failed steps",
      "Only the test name",
      "Only the pass/fail status",
      "Only the execution time"
    ],
    "correctOption": 0,
    "explanation": "Automation reports typically include machine identification, browser version, and detailed results of failed steps for debugging.[reference:45]"
  },
  {
    "testId": "selenium-test-05",
    "question": "Which statement is NOT true about Selenium 4 architecture?",
    "options": [
      "Selenium 4 has bidirectional communication between browser drivers and browsers",
      "Language binding and Selenium client form the client side of the architecture",
      "EdgeDriver is part of the language binding in Selenium 4",
      "Selenium 4 is based on a client-server architecture"
    ],
    "correctOption": 2,
    "explanation": "EdgeDriver is a browser controller, not part of the language binding. Selenium 4 introduces bidirectional communication (BiDi) between drivers and browsers.[reference:46]"
  },
  {
    "testId": "selenium-test-05",
    "question": "What is true about headless test automation in Selenium?",
    "options": [
      "It is used to keep resource consumption low",
      "It does not require a browser to be installed",
      "It can only be used on OS without a user interface",
      "It adds additional security features"
    ],
    "correctOption": 0,
    "explanation": "Headless test automation is primarily used for resource optimization, reducing processing capacity and memory usage.[reference:47]"
  },
  {
    "testId": "selenium-test-05",
    "question": "What is the purpose of the WebDriverManager library?",
    "options": [
      "To automatically download and manage browser drivers",
      "To manage test data",
      "To manage test reports",
      "To manage test execution"
    ],
    "correctOption": 0,
    "explanation": "WebDriverManager automatically downloads and sets up the required browser drivers, simplifying Selenium setup."
  },
  {
    "testId": "selenium-test-05",
    "question": "What is a Fluent Wait in Selenium?",
    "options": [
      "A flexible wait that defines the timeout and polling interval, ignoring specific exceptions",
      "A fixed wait that never times out",
      "An implicit wait that applies globally",
      "A wait that only works for visibility"
    ],
    "correctOption": 0,
    "explanation": "Fluent Wait is a flexible explicit wait that defines the maximum timeout, polling interval, and exceptions to ignore."
  },
  {
    "testId": "selenium-test-05",
    "question": "How do you handle an element inside an iFrame in Selenium?",
    "options": [
      "driver.switchTo().frame() before interacting with the element",
      "driver.findElement() directly works on iFrame elements",
      "Use XPath to directly locate the element",
      "iFrame elements cannot be interacted with"
    ],
    "correctOption": 0,
    "explanation": "To interact with elements inside an iFrame, you must first switch to the iFrame using `driver.switchTo().frame()`.[reference:48][reference:49]"
  },
  {
    "testId": "selenium-test-05",
    "question": "What is the purpose of `driver.switchTo().defaultContent()`?",
    "options": [
      "To switch back to the main page from an iFrame",
      "To switch to a new window",
      "To switch to an alert",
      "To switch to the default browser"
    ],
    "correctOption": 0,
    "explanation": "`driver.switchTo().defaultContent()` switches focus back to the main page after interacting with an iFrame."
  },
  {
    "testId": "selenium-test-05",
    "question": "How do you handle a dropdown with `<select>` tag in Selenium?",
    "options": [
      "Using the Select class with methods like selectByVisibleText()",
      "Using findElement() and click()",
      "Using sendKeys()",
      "Using JavaScriptExecutor"
    ],
    "correctOption": 0,
    "explanation": "The Select class in Selenium provides methods like `selectByVisibleText()`, `selectByIndex()`, and `selectByValue()` to handle dropdowns.[reference:50]"
  },
  {
    "testId": "selenium-test-05",
    "question": "What is the purpose of JavaScriptExecutor in Selenium?",
    "options": [
      "To execute JavaScript code in the browser for advanced interactions",
      "To write test scripts",
      "To locate elements",
      "To handle alerts"
    ],
    "correctOption": 0,
    "explanation": "JavaScriptExecutor allows executing JavaScript code in the browser, useful for scrolling, highlighting, and other advanced interactions.[reference:51]"
  },
  {
    "testId": "selenium-test-05",
    "question": "What is the purpose of Selenium Grid in Selenium 4?",
    "options": [
      "To distribute and parallelize test execution across multiple machines and browsers",
      "To record test scripts",
      "To generate test reports",
      "To manage test data"
    ],
    "correctOption": 0,
    "explanation": "Selenium Grid enables parallel execution of tests across multiple machines, browsers, and operating systems.[reference:52]"
  },
  {
    "testId": "selenium-test-05",
    "question": "What is the advantage of using Docker with Selenium?",
    "options": [
      "To create isolated and consistent test environments",
      "To write test scripts",
      "To generate test reports",
      "To manage test data"
    ],
    "correctOption": 0,
    "explanation": "Docker allows creating isolated, consistent test environments with pre-configured browsers and Selenium Grid nodes."
  },
  {
    "testId": "selenium-test-05",
    "question": "What is the purpose of `@Listeners` in TestNG?",
    "options": [
      "To listen to test events and perform custom actions like logging or reporting",
      "To listen to network events",
      "To listen to browser events",
      "To listen to data changes"
    ],
    "correctOption": 0,
    "explanation": "TestNG Listeners allow custom actions to be performed on test events like test start, test success, test failure, etc., for logging and reporting."
  },
  {
    "testId": "selenium-test-05",
    "question": "What is the recommended method to set up Selenium WebDriver for Java in Eclipse?",
    "options": [
      "Use Maven to add Selenium Java dependencies to the pom.xml file",
      "Download JAR files manually",
      "Use the Eclipse marketplace",
      "Use the command line"
    ],
    "correctOption": 0,
    "explanation": "The recommended approach is to use Maven to manage Selenium dependencies by adding them to the `pom.xml` file.[reference:53]"
  },
  {
    "testId": "selenium-test-05",
    "question": "What is the purpose of the `RemoteWebDriver` class?",
    "options": [
      "To execute tests on a remote Selenium Grid or cloud service",
      "To execute tests locally",
      "To record test scripts",
      "To generate test reports"
    ],
    "correctOption": 0,
    "explanation": "`RemoteWebDriver` is used to connect to a Selenium Grid or cloud service for remote test execution.[reference:54]"
  },
  {
    "testId": "selenium-test-05",
    "question": "How do you handle dynamic elements that load after page load?",
    "options": [
      "Using explicit waits like WebDriverWait with ExpectedConditions",
      "Using Thread.sleep()",
      "Using implicit wait only",
      "Refresh the page"
    ],
    "correctOption": 0,
    "explanation": "Explicit waits with ExpectedConditions are the recommended way to handle dynamically loading elements.[reference:55]"
  },
  {
    "testId": "selenium-test-05",
    "question": "What is the purpose of the `ExpectedConditions` class?",
    "options": [
      "To define common conditions for explicit waits like visibility, clickability, etc.",
      "To define test data",
      "To define test reports",
      "To define test scripts"
    ],
    "correctOption": 0,
    "explanation": "`ExpectedConditions` provides common conditions like `visibilityOfElementLocated`, `elementToBeClickable`, and `presenceOfElementLocated` for explicit waits.[reference:56]"
  },
  {
    "testId": "selenium-test-05",
    "question": "What is the difference between `driver.get()` and `driver.navigate().to()`?",
    "options": [
      "get() loads a page and waits; navigate().to() loads a page without waiting",
      "navigate().to() waits; get() does not wait",
      "Both wait for page load",
      "Both do not wait for page load"
    ],
    "correctOption": 0,
    "explanation": "`get()` waits for the page to fully load. `navigate().to()` loads the page but does not wait for full load, and also supports navigation history.[reference:57]"
  },
  {
    "testId": "selenium-test-05",
    "question": "What is the purpose of `@Parameters` in TestNG?",
    "options": [
      "To pass parameters from testng.xml to test methods",
      "To define test data",
      "To define test dependencies",
      "To define test groups"
    ],
    "correctOption": 0,
    "explanation": "`@Parameters` in TestNG is used to pass parameters defined in the `testng.xml` file to test methods."
  },
  {
    "testId": "selenium-test-05",
    "question": "What is the difference between `@BeforeTest` and `@BeforeClass`?",
    "options": [
      "@BeforeTest runs before all tests in the <test> tag; @BeforeClass runs before all methods in the class",
      "@BeforeClass runs before all tests in the <test> tag; @BeforeTest runs before all methods in the class",
      "Both run before all tests",
      "Both run before each test"
    ],
    "correctOption": 0,
    "explanation": "`@BeforeTest` executes before all test methods in the `<test>` tag in `testng.xml`. `@BeforeClass` executes before all test methods in the current class.[reference:58]"
  },
  {
    "testId": "selenium-test-05",
    "question": "Which of the following is a valid browser driver in Selenium?",
    "options": ["ChromeDriver", "FirefoxDriver", "SafariDriver", "All of the above"],
    "correctOption": 3,
    "explanation": "Selenium supports ChromeDriver, FirefoxDriver, SafariDriver, EdgeDriver, and other browser drivers.[reference:59]"
  },
  {
    "testId": "selenium-test-05",
    "question": "What is the purpose of the `Actions` class in Selenium?",
    "options": [
      "To perform advanced user interactions like drag-and-drop, double-click, and hover",
      "To handle alerts",
      "To handle iFrames",
      "To locate elements"
    ],
    "correctOption": 0,
    "explanation": "The Actions class provides methods for complex user interactions such as drag-and-drop, double-click, mouse hover, and key combinations."
  },
  {
    "testId": "selenium-test-05",
    "question": "How do you perform a double-click in Selenium?",
    "options": [
      "new Actions(driver).doubleClick(element).perform()",
      "element.doubleClick()",
      "driver.doubleClick(element)",
      "element.click() twice"
    ],
    "correctOption": 0,
    "explanation": "Double-click is performed using the Actions class: `new Actions(driver).doubleClick(element).perform()`."
  },
  {
    "testId": "selenium-test-05",
    "question": "How do you move to an element (hover) in Selenium?",
    "options": [
      "new Actions(driver).moveToElement(element).perform()",
      "element.hover()",
      "driver.moveToElement(element)",
      "element.moveTo()"
    ],
    "correctOption": 0,
    "explanation": "Hovering over an element is performed using the Actions class: `new Actions(driver).moveToElement(element).perform()`."
  },
  {
    "testId": "selenium-test-05",
    "question": "What is the difference between `findElement()` and `getElement()`?",
    "options": [
      "findElement() is the correct Selenium method; getElement() is not a valid WebDriver method",
      "getElement() is the correct Selenium method; findElement() is not valid",
      "Both are valid Selenium methods",
      "Both are not valid Selenium methods"
    ],
    "correctOption": 0,
    "explanation": "`findElement()` is the correct Selenium WebDriver method. `getElement()` is not a valid WebDriver method.[reference:60]"
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
console.log('Added ' + newQuestions.length + ' selenium questions to questions.js');
