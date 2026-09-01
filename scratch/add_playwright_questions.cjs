const fs = require('fs');

const questions = [
  {
    "testId": "playwright-test-01",
    "question": "What is Playwright?",
    "options": [
      "A Microsoft open-source end-to-end testing framework",
      "A Google testing framework",
      "A performance testing tool",
      "A database management tool"
    ],
    "correctOption": 0,
    "explanation": "Playwright is Microsoft's open-source end-to-end testing framework that runs across Chromium, Firefox, and WebKit.[reference:37]"
  },
  {
    "testId": "playwright-test-01",
    "question": "Which browsers does Playwright support?",
    "options": [
      "Chromium, Firefox, and WebKit",
      "Chrome, Safari, and Edge",
      "Only Chromium",
      "All browsers including Internet Explorer"
    ],
    "correctOption": 0,
    "explanation": "Playwright supports Chromium, Firefox, and WebKit, enabling cross-browser testing with a single API.[reference:38]"
  },
  {
    "testId": "playwright-test-01",
    "question": "Which programming languages does Playwright support?",
    "options": [
      "TypeScript, Python, .NET, and Java",
      "Only TypeScript",
      "Only JavaScript",
      "TypeScript and Python only"
    ],
    "correctOption": 0,
    "explanation": "Playwright runs in TypeScript, Python, .NET, and Java, making it accessible to a wide range of developers.[reference:39]"
  },
  {
    "testId": "playwright-test-01",
    "question": "What is auto-waiting in Playwright?",
    "options": [
      "Playwright automatically waits for elements to be ready before performing actions",
      "A manual wait function",
      "A sleep function",
      "A polling mechanism"
    ],
    "correctOption": 0,
    "explanation": "Auto-waiting is a built-in feature where Playwright waits for elements to be actionable prior to performing actions, eliminating flaky timeouts.[reference:40]"
  },
  {
    "testId": "playwright-test-01",
    "question": "What are the three basic parts of a Playwright test?",
    "options": [
      "Navigate, interact, and assert",
      "Open, click, and close",
      "Setup, execute, and teardown",
      "Connect, query, and display"
    ],
    "correctOption": 0,
    "explanation": "A basic Playwright test has three parts: navigate (go to a page), interact (perform actions), and assert (verify expectations).[reference:41]"
  },
  {
    "testId": "playwright-test-01",
    "question": "Which of the following is a key advantage of Playwright over Selenium?",
    "options": [
      "Built-in auto-waiting and faster execution",
      "Better community support",
      "Supports more browsers",
      "Has been around longer"
    ],
    "correctOption": 0,
    "explanation": "Playwright offers built-in auto-waiting and faster execution by communicating directly with browsers via a modern API.[reference:42][reference:43]"
  },
  {
    "testId": "playwright-test-01",
    "question": "How does Playwright communicate with browsers?",
    "options": [
      "Using a modern API with WebSockets",
      "Using HTTP requests",
      "Using JSON-RPC",
      "Using REST API"
    ],
    "correctOption": 0,
    "explanation": "Playwright communicates directly with browsers using a modern API, reducing the 'back-and-forth' time compared to Selenium's HTTP-based approach.[reference:44]"
  },
  {
    "testId": "playwright-test-01",
    "question": "What is the default timeout for Playwright assertions?",
    "options": ["5 seconds", "10 seconds", "30 seconds", "1 second"],
    "correctOption": 0,
    "explanation": "By default, the timeout for Playwright assertions is set to 5 seconds.[reference:45]"
  },
  {
    "testId": "playwright-test-01",
    "question": "Which of the following is NOT a feature of Playwright?",
    "options": [
      "Auto-waiting",
      "Network interception",
      "Built-in Selenium Grid",
      "Shadow DOM support"
    ],
    "correctOption": 2,
    "explanation": "Playwright does not have a built-in Selenium Grid. It offers its own features like auto-waiting, network interception, and shadow DOM support.[reference:46]"
  },
  {
    "testId": "playwright-test-01",
    "question": "What is the purpose of fixtures in Playwright?",
    "options": [
      "To set up reusable test environments and dependencies",
      "To assert test results",
      "To locate elements on the page",
      "To handle errors"
    ],
    "correctOption": 0,
    "explanation": "Fixtures in Playwright help create clean test environments by setting up reusable dependencies and configurations.[reference:47]"
  },
  {
    "testId": "playwright-test-01",
    "question": "Which of the following statements is true about Playwright's auto-waiting?",
    "options": [
      "It waits for elements to be actionable before performing actions",
      "It uses fixed sleep times",
      "It only works for assertions, not actions",
      "It can be disabled globally only"
    ],
    "correctOption": 0,
    "explanation": "Auto-waiting ensures that elements are actionable (visible, enabled, stable) before Playwright performs actions on them.[reference:48]"
  },
  {
    "testId": "playwright-test-01",
    "question": "What is the significance of Playwright's 'web-first' assertions?",
    "options": [
      "They wait and retry until the expected condition is met",
      "They only work on web applications",
      "They are faster than regular assertions",
      "They don't require any waiting"
    ],
    "correctOption": 0,
    "explanation": "Web-first assertions are designed to wait and retry until the expected condition is met, eliminating flaky timeouts and racy checks.[reference:49][reference:50]"
  },
  {
    "testId": "playwright-test-01",
    "question": "Which company developed Playwright?",
    "options": ["Microsoft", "Google", "Mozilla", "Apple"],
    "correctOption": 0,
    "explanation": "Playwright was developed by Microsoft and is an open-source project.[reference:51]"
  },
  {
    "testId": "playwright-test-01",
    "question": "What is the purpose of the `npx playwright install` command?",
    "options": [
      "To download and install browser binaries for Playwright",
      "To install Playwright npm package",
      "To run Playwright tests",
      "To generate test reports"
    ],
    "correctOption": 0,
    "explanation": "The `npx playwright install` command downloads the required browser binaries (Chromium, Firefox, WebKit) for Playwright.[reference:52]"
  },
  {
    "testId": "playwright-test-01",
    "question": "What is the difference between Playwright and Puppeteer?",
    "options": [
      "Playwright supports multiple browsers; Puppeteer is Chromium-only",
      "Puppeteer supports multiple browsers; Playwright is Chromium-only",
      "Both are the same",
      "Playwright is for Python only"
    ],
    "correctOption": 0,
    "explanation": "Playwright extends Puppeteer's approach by adding multi-browser support (Chromium, Firefox, WebKit) and cross-language compatibility.[reference:53]"
  },
  {
    "testId": "playwright-test-01",
    "question": "Which Playwright feature allows testing on mobile device emulation?",
    "options": [
      "Device emulation via browser contexts",
      "Mobile-specific browser",
      "Appium integration",
      "Mobile Safari only"
    ],
    "correctOption": 0,
    "explanation": "Playwright supports device emulation through browser contexts, allowing testing on mobile devices like iPhone and iPad."
  },
  {
    "testId": "playwright-test-01",
    "question": "What is the recommended way to install Playwright in a new project?",
    "options": [
      "npm init playwright@latest",
      "npm install playwright",
      "pip install playwright",
      "npx create-playwright"
    ],
    "correctOption": 0,
    "explanation": "The recommended way to get started is `npm init playwright@latest`, which sets up the project with necessary dependencies and configuration."
  },
  {
    "testId": "playwright-test-01",
    "question": "Which of the following is a benefit of Playwright's auto-waiting?",
    "options": [
      "Reduces test flakiness by eliminating manual waits",
      "Increases test execution speed",
      "Allows testing on more browsers",
      "Simplifies test syntax"
    ],
    "correctOption": 0,
    "explanation": "Auto-waiting reduces flakiness by automatically waiting for elements to be ready, eliminating the need for manual `sleep` or `waitFor` calls.[reference:54]"
  },
  {
    "testId": "playwright-test-02",
    "question": "What is the central piece of Playwright's element finding mechanism?",
    "options": ["Locators API", "CSS Selectors", "XPath", "DOM queries"],
    "correctOption": 0,
    "explanation": "Locators are the central piece of Playwright's auto-waiting and retry-ability, representing a way to find element(s) on the page.[reference:55][reference:56]"
  },
  {
    "testId": "playwright-test-02",
    "question": "Which locator strategy is considered the most resilient in Playwright?",
    "options": ["getByRole()", "CSS selectors", "XPath", "getByTestId()"],
    "correctOption": 0,
    "explanation": "Role-based locators using `getByRole()` are the most resilient locator strategy in Playwright because they focus on semantic HTML elements.[reference:57]"
  },
  {
    "testId": "playwright-test-02",
    "question": "Which locator is best for finding form fields in Playwright?",
    "options": ["getByLabel()", "getByRole()", "getByPlaceholder()", "getByTestId()"],
    "correctOption": 0,
    "explanation": "`getByLabel()` is great for form fields because it finds elements by their associated label text.[reference:58]"
  },
  {
    "testId": "playwright-test-02",
    "question": "Which locator would you use to find an element by its `data-testid` attribute?",
    "options": ["getByTestId()", "getByRole()", "getByText()", "getByLabel()"],
    "correctOption": 0,
    "explanation": "`getByTestId()` is used to locate elements by their `data-testid` attribute, which is a recommended practice for test-specific attributes.[reference:59]"
  },
  {
    "testId": "playwright-test-02",
    "question": "Which of the following is recommended over CSS selectors in Playwright?",
    "options": ["Role-based locators like getByRole()", "XPath", "Tag-based selectors", "ID selectors"],
    "correctOption": 0,
    "explanation": "Playwright recommends using role-based locators (`getByRole`, `getByLabel`, `getByText`) over CSS selectors for better resilience.[reference:60]"
  },
  {
    "testId": "playwright-test-02",
    "question": "What is the purpose of chained locators in Playwright?",
    "options": [
      "To combine multiple selectors in sequence for precise element location",
      "To chain multiple test steps",
      "To connect multiple pages",
      "To combine assertions"
    ],
    "correctOption": 0,
    "explanation": "Chained selectors combine multiple selectors in sequence to precisely locate nested or complex element structures.[reference:61]"
  },
  {
    "testId": "playwright-test-02",
    "question": "Which locator would you use to find an element by its placeholder text?",
    "options": ["getByPlaceholder()", "getByLabel()", "getByText()", "getByRole()"],
    "correctOption": 0,
    "explanation": "`getByPlaceholder()` is specifically designed to locate form fields by their placeholder attribute.[reference:62]"
  },
  {
    "testId": "playwright-test-02",
    "question": "What is the recommended approach for handling dynamic elements in Playwright?",
    "options": [
      "Use Playwright's built-in locators with auto-waiting",
      "Use Thread.sleep()",
      "Use explicit wait functions",
      "Use polling loops"
    ],
    "correctOption": 0,
    "explanation": "Playwright's built-in locators with auto-waiting automatically handle dynamic elements without manual waits.[reference:63]"
  },
  {
    "testId": "playwright-test-02",
    "question": "Which of the following is NOT a recommended locator strategy?",
    "options": [
      "getByRole()",
      "XPath based on DOM position",
      "getByTestId()",
      "getByLabel()"
    ],
    "correctOption": 1,
    "explanation": "XPath expressions based on DOM position are brittle and not recommended. Use attribute-based or semantic locators instead.[reference:64]"
  },
  {
    "testId": "playwright-test-02",
    "question": "How do you filter locators to find visible elements only in Playwright?",
    "options": [
      "Using locator.filter({ has: ... }) with visible: true",
      "Using CSS :visible selector",
      "Using XPath visibility checks",
      "Using getByVisible()"
    ],
    "correctOption": 0,
    "explanation": "Playwright provides locator filtering options to select elements that are visible, which helps target the correct element in complex DOMs.[reference:65]"
  },
  {
    "testId": "playwright-test-02",
    "question": "What is the purpose of `first()` and `nth()` methods on a locator?",
    "options": [
      "To select specific elements from a locator that matches multiple elements",
      "To find the first occurrence of an element",
      "To count elements",
      "To filter elements by text"
    ],
    "correctOption": 0,
    "explanation": "`first()` and `nth()` allow you to select specific elements when a locator matches multiple elements, but they should be used sparingly.[reference:66]"
  },
  {
    "testId": "playwright-test-02",
    "question": "Which of the following is a best practice for writing locators in Playwright?",
    "options": [
      "Use `data-testid` attributes for test-specific locators",
      "Use CSS class names that change frequently",
      "Use XPath based on DOM structure",
      "Use index-based selectors"
    ],
    "correctOption": 0,
    "explanation": "Using `data-testid` attributes is a best practice because it separates test concerns from UI design and is more resilient to changes.[reference:67]"
  },
  {
    "testId": "playwright-test-02",
    "question": "How do you locate elements inside Shadow DOM in Playwright?",
    "options": [
      "Playwright natively supports Shadow DOM traversal",
      "Using special Shadow DOM selectors",
      "Using XPath",
      "Using JavaScript execution"
    ],
    "correctOption": 0,
    "explanation": "Playwright provides native support for Shadow DOM traversal, allowing you to locate and interact with elements inside Shadow DOM without extra effort.[reference:68]"
  },
  {
    "testId": "playwright-test-03",
    "question": "How do you perform a click action in Playwright?",
    "options": ["await locator.click()", "await locator.press()", "await locator.select()", "await locator.activate()"],
    "correctOption": 0,
    "explanation": "The `click()` method is used to click on an element. Playwright waits for the element to be actionable before clicking.[reference:69]"
  },
  {
    "testId": "playwright-test-03",
    "question": "Which assertion checks if an element is visible on the page?",
    "options": ["expect(locator).toBeVisible()", "expect(locator).toBePresent()", "expect(locator).toExist()", "expect(locator).toBeDisplayed()"],
    "correctOption": 0,
    "explanation": "`toBeVisible()` is a web-first assertion that waits for the element to be visible on the page.[reference:70]"
  },
  {
    "testId": "playwright-test-03",
    "question": "How do you assert that an element has specific text in Playwright?",
    "options": [
      "expect(locator).toHaveText('text')",
      "expect(locator).toBe('text')",
      "expect(locator).toContain('text')",
      "expect(locator).text()"
    ],
    "correctOption": 0,
    "explanation": "`toHaveText()` is the recommended assertion for checking text content on an element.[reference:71]"
  },
  {
    "testId": "playwright-test-03",
    "question": "What does `expect(locator).toBeDisabled()` check?",
    "options": [
      "That the element is disabled",
      "That the element is enabled",
      "That the element is hidden",
      "That the element is checked"
    ],
    "correctOption": 0,
    "explanation": "`toBeDisabled()` asserts that the element is in a disabled state and cannot be interacted with.[reference:72]"
  },
  {
    "testId": "playwright-test-03",
    "question": "How do you fill a text input field in Playwright?",
    "options": ["await locator.fill('text')", "await locator.type('text')", "await locator.input('text')", "await locator.setText('text')"],
    "correctOption": 0,
    "explanation": "The `fill()` method is used to set the value of a text input field, clearing any existing text first."
  },
  {
    "testId": "playwright-test-03",
    "question": "What is the difference between `fill()` and `type()` in Playwright?",
    "options": [
      "fill() sets the value immediately; type() simulates typing character by character",
      "type() sets the value immediately; fill() simulates typing",
      "Both do the same thing",
      "fill() is for checkboxes; type() is for text fields"
    ],
    "correctOption": 0,
    "explanation": "`fill()` sets the field value instantly, while `type()` simulates real user typing with keypress events."
  },
  {
    "testId": "playwright-test-03",
    "question": "Which assertion checks that a checkbox is checked?",
    "options": ["expect(locator).toBeChecked()", "expect(locator).isChecked()", "expect(locator).toBeSelected()", "expect(locator).toBeEnabled()"],
    "correctOption": 0,
    "explanation": "`toBeChecked()` asserts that a checkbox or radio button is checked."
  },
  {
    "testId": "playwright-test-03",
    "question": "How do you hover over an element in Playwright?",
    "options": ["await locator.hover()", "await locator.mouseOver()", "await locator.moveTo()", "await locator.focus()"],
    "correctOption": 0,
    "explanation": "The `hover()` method moves the mouse over the element, triggering hover effects.[reference:73]"
  },
  {
    "testId": "playwright-test-03",
    "question": "What are soft assertions in Playwright?",
    "options": [
      "Assertions that don't stop test execution on failure",
      "Assertions that are optional",
      "Assertions that only run in debug mode",
      "Assertions that are slower"
    ],
    "correctOption": 0,
    "explanation": "Soft assertions allow the test to continue even if an assertion fails, collecting all failures at the end.[reference:74]"
  },
  {
    "testId": "playwright-test-03",
    "question": "Which method is used to check a checkbox in Playwright?",
    "options": ["await locator.check()", "await locator.click()", "await locator.select()", "await locator.toggle()"],
    "correctOption": 0,
    "explanation": "The `check()` method is specifically designed for checking checkboxes and radio buttons.[reference:75]"
  },
  {
    "testId": "playwright-test-03",
    "question": "How do you assert that an element contains specific text?",
    "options": [
      "expect(locator).toContainText('text')",
      "expect(locator).toHaveText('text')",
      "expect(locator).toBe('text')",
      "expect(locator).toMatchText('text')"
    ],
    "correctOption": 0,
    "explanation": "`toContainText()` checks that the element contains the specified text, not necessarily the exact match."
  },
  {
    "testId": "playwright-test-03",
    "question": "What is the purpose of the `expect` function in Playwright?",
    "options": [
      "To make assertions about the state of the application",
      "To locate elements on the page",
      "To perform actions on elements",
      "To navigate between pages"
    ],
    "correctOption": 0,
    "explanation": "The `expect` function is used to make assertions, verifying that the application state matches expectations.[reference:76]"
  },
  {
    "testId": "playwright-test-03",
    "question": "Which method is used to double-click an element?",
    "options": ["await locator.dblclick()", "await locator.click({ clickCount: 2 })", "await locator.doubleClick()", "await locator.click() twice"],
    "correctOption": 1,
    "explanation": "You can double-click by passing `{ clickCount: 2 }` to the `click()` method."
  },
  {
    "testId": "playwright-test-03",
    "question": "How do you press a specific key on the keyboard in Playwright?",
    "options": ["await page.keyboard.press('Enter')", "await page.keyboard.type('Enter')", "await page.press('Enter')", "await page.keyboard.click('Enter')"],
    "correctOption": 0,
    "explanation": "The `keyboard.press()` method simulates pressing a key on the keyboard."
  },
  {
    "testId": "playwright-test-03",
    "question": "What is the default behavior of Playwright when an assertion fails?",
    "options": [
      "The test fails immediately and stops execution",
      "The test continues with a warning",
      "The test retries automatically",
      "The test is marked as skipped"
    ],
    "correctOption": 0,
    "explanation": "By default, when an assertion fails, the test fails immediately and stops execution (unless using soft assertions)."
  },
  {
    "testId": "playwright-test-03",
    "question": "Which assertion checks if an element is attached to the DOM?",
    "options": ["expect(locator).toBeAttached()", "expect(locator).toBeVisible()", "expect(locator).toBePresent()", "expect(locator).toExist()"],
    "correctOption": 0,
    "explanation": "`toBeAttached()` asserts that the element is present in the DOM, regardless of visibility.[reference:77]"
  },
  {
    "testId": "playwright-test-04",
    "question": "What is the Page Object Model (POM) pattern in Playwright?",
    "options": [
      "A pattern that encapsulates page interactions into reusable classes",
      "A type of locator",
      "A test runner configuration",
      "A debugging tool"
    ],
    "correctOption": 0,
    "explanation": "POM encapsulates page interactions into reusable classes, making tests more maintainable and readable.[reference:78]"
  },
  {
    "testId": "playwright-test-04",
    "question": "What is the main benefit of using Page Object Model in Playwright?",
    "options": [
      "Reduces test maintenance time by 40-60%",
      "Makes tests run faster",
      "Eliminates the need for assertions",
      "Simplifies test setup"
    ],
    "correctOption": 0,
    "explanation": "POM reduces test maintenance time by 40-60% by centralizing page interactions when UI changes occur.[reference:79]"
  },
  {
    "testId": "playwright-test-04",
    "question": "What is a browser context in Playwright?",
    "options": [
      "An isolated environment that simulates a new browser session",
      "A single browser tab",
      "A test suite configuration",
      "A browser profile"
    ],
    "correctOption": 0,
    "explanation": "A browser context is an isolated environment that simulates a new browser session, allowing parallel test execution."
  },
  {
    "testId": "playwright-test-04",
    "question": "How do you run tests in parallel in Playwright?",
    "options": [
      "Using the `--workers` flag or configuration",
      "Using separate test files only",
      "Using multiple browsers only",
      "Using `--parallel` flag"
    ],
    "correctOption": 0,
    "explanation": "Playwright supports parallel test execution using the `--workers` flag or by configuring workers in the Playwright config file.[reference:80]"
  },
  {
    "testId": "playwright-test-04",
    "question": "What is the purpose of tracing in Playwright?",
    "options": [
      "To record test execution for debugging",
      "To trace network requests",
      "To trace element locations",
      "To generate test reports"
    ],
    "correctOption": 0,
    "explanation": "Tracing records test execution, including screenshots and DOM snapshots, for debugging flaky tests.[reference:81]"
  },
  {
    "testId": "playwright-test-04",
    "question": "Which feature does Playwright support for network testing?",
    "options": ["Network interception and mocking", "Network speed testing", "Network load testing", "Network security testing"],
    "correctOption": 0,
    "explanation": "Playwright fully supports network interception and mocking, allowing you to test API responses and offline scenarios.[reference:82]"
  },
  {
    "testId": "playwright-test-04",
    "question": "What is the recommended practice for keeping locators in a Page Object Model?",
    "options": [
      "Keep locators inside the page object as a single source of truth",
      "Define locators directly in tests",
      "Keep locators in a separate file",
      "Use CSS selectors only"
    ],
    "correctOption": 0,
    "explanation": "Best practice is to keep locators in page objects as a single source of truth for maintainability.[reference:83]"
  },
  {
    "testId": "playwright-test-04",
    "question": "What should you avoid when designing Page Object Model methods?",
    "options": [
      "Including assertions in page methods",
      "Returning new page objects on navigation",
      "Using descriptive method names",
      "Exposing elements for custom assertions"
    ],
    "correctOption": 0,
    "explanation": "Page methods should not include assertions; keep assertions in the test files to separate concerns.[reference:84]"
  },
  {
    "testId": "playwright-test-04",
    "question": "What is the purpose of the `--headed` flag in Playwright?",
    "options": [
      "To run tests with the browser window visible",
      "To run tests in headless mode",
      "To generate test reports",
      "To run tests in debug mode"
    ],
    "correctOption": 0,
    "explanation": "The `--headed` flag runs tests with the browser window visible, useful for debugging and visual verification."
  },
  {
    "testId": "playwright-test-04",
    "question": "How do you enable video recording in Playwright?",
    "options": [
      "Using the `video` option in browser context configuration",
      "Using `--video` flag",
      "Using `recordVideo()` method",
      "Using `saveVideo()` method"
    ],
    "correctOption": 0,
    "explanation": "Video recording is enabled by setting the `video` option in the browser context configuration."
  },
  {
    "testId": "playwright-test-04",
    "question": "What is the purpose of `test.use()` in Playwright?",
    "options": [
      "To set configuration for a specific test or test file",
      "To use a test fixture",
      "To set global configuration",
      "To define test hooks"
    ],
    "correctOption": 0,
    "explanation": "`test.use()` allows you to set configuration options (like browser, viewport, etc.) for a specific test or test file."
  },
  {
    "testId": "playwright-test-04",
    "question": "How do you handle authentication in a Playwright test suite?",
    "options": [
      "Using `test.beforeEach` with login steps or storage state",
      "Using session cookies only",
      "Using basic authentication only",
      "Using test.beforeAll"
    ],
    "correctOption": 0,
    "explanation": "Authentication is typically handled using `test.beforeEach` for login steps or by saving and reusing storage state.[reference:85]"
  },
  {
    "testId": "playwright-test-04",
    "question": "What is a recommended practice for naming Page Object Model methods?",
    "options": [
      "Use descriptive names that describe user actions",
      "Use short abbreviated names",
      "Use generic names like 'click'",
      "Use implementation-specific names"
    ],
    "correctOption": 0,
    "explanation": "POM methods should have descriptive names that describe user actions (e.g., `login()`, `searchFor()`).[reference:86]"
  },
  {
    "testId": "playwright-test-04",
    "question": "How do you run Playwright tests on different browsers?",
    "options": [
      "Using projects configuration in playwright.config.js",
      "Using `--browser` flag",
      "Using separate test files",
      "Using environment variables"
    ],
    "correctOption": 0,
    "explanation": "Projects configuration in `playwright.config.js` allows you to define and run tests on different browsers and devices.[reference:87]"
  },
  {
    "testId": "playwright-test-04",
    "question": "What is the purpose of code generation in Playwright?",
    "options": [
      "To record user actions and generate test code",
      "To generate test reports",
      "To generate locators",
      "To generate configuration files"
    ],
    "correctOption": 0,
    "explanation": "Playwright's code generation tool (`npx playwright codegen`) records user interactions and generates test code."
  }
];

let questionsFile = fs.readFileSync('src/data/questions.js', 'utf8');

const endBraceIndex = questionsFile.lastIndexOf('];');
if (endBraceIndex !== -1 && !questionsFile.includes('"playwright-test-01"')) {
  const injectionString = ',\n' + questions.map(q => JSON.stringify(q, null, 2)).join(',\n') + '\n];';
  questionsFile = questionsFile.substring(0, endBraceIndex) + injectionString;
  fs.writeFileSync('src/data/questions.js', questionsFile);
  console.log('Questions added successfully for playwright');
} else {
  console.log('Questions for playwright already exist or file format unexpected');
}
