const fs = require('fs');

const questions = [
  {
    "testId": "pw-mock-01",
    "question": "Which command creates a new Playwright project with all dependencies?",
    "options": [
      "npm init playwright@latest",
      "npm install playwright",
      "npx playwright install",
      "npm create playwright"
    ],
    "correctOption": 0,
    "explanation": "`npm init playwright@latest` is the official command to scaffold a new Playwright project with all dependencies and configuration."
  },
  {
    "testId": "pw-mock-01",
    "question": "What are the three browsers that Playwright supports by default?",
    "options": [
      "Chromium, Firefox, WebKit",
      "Chrome, Firefox, Safari",
      "Chromium, Firefox, Safari",
      "Edge, Firefox, WebKit"
    ],
    "correctOption": 0,
    "explanation": "Playwright supports Chromium (the open-source foundation for Chrome), Firefox, and WebKit (the engine behind Safari)."
  },
  {
    "testId": "pw-mock-01",
    "question": "How do you install the browser binaries for Playwright?",
    "options": [
      "npx playwright install",
      "npm install playwright-browsers",
      "npx playwright install-browsers",
      "npm run install-browsers"
    ],
    "correctOption": 0,
    "explanation": "`npx playwright install` downloads and installs the required browser binaries for Chromium, Firefox, and WebKit."
  },
  {
    "testId": "pw-mock-01",
    "question": "What is the default timeout for Playwright test assertions?",
    "options": ["5 seconds", "10 seconds", "30 seconds", "1 second"],
    "correctOption": 0,
    "explanation": "The default timeout for Playwright assertions is 5 seconds, configurable in the test configuration."
  },
  {
    "testId": "pw-mock-01",
    "question": "Which of the following is the most resilient locator strategy in Playwright?",
    "options": [
      "getByRole()",
      "CSS selectors",
      "XPath",
      "getByTestId()"
    ],
    "correctOption": 0,
    "explanation": "`getByRole()` is the most resilient locator strategy because it focuses on semantic HTML elements and accessibility attributes."
  },
  {
    "testId": "pw-mock-01",
    "question": "What is the recommended locator for finding an element by its 'data-testid' attribute?",
    "options": ["getByTestId()", "getByRole()", "getByText()", "getByLabel()"],
    "correctOption": 0,
    "explanation": "`getByTestId()` is specifically designed to locate elements using the `data-testid` attribute, a best practice for test-specific selectors."
  },
  {
    "testId": "pw-mock-01",
    "question": "Which assertion checks if an element is visible on the page?",
    "options": [
      "expect(locator).toBeVisible()",
      "expect(locator).toBePresent()",
      "expect(locator).toExist()",
      "expect(locator).toBeDisplayed()"
    ],
    "correctOption": 0,
    "explanation": "`toBeVisible()` is a web-first assertion that waits for the element to be visible on the page."
  },
  {
    "testId": "pw-mock-01",
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
    "testId": "pw-mock-01",
    "question": "What does `expect(locator).toBeDisabled()` check?",
    "options": [
      "That the element is disabled",
      "That the element is enabled",
      "That the element is hidden",
      "That the element is checked"
    ],
    "correctOption": 0,
    "explanation": "`toBeDisabled()` asserts that the element is in a disabled state and cannot be interacted with."
  },
  {
    "testId": "pw-mock-01",
    "question": "Which assertion checks that a checkbox or radio button is selected?",
    "options": [
      "expect(locator).toBeChecked()",
      "expect(locator).isChecked()",
      "expect(locator).toBeSelected()",
      "expect(locator).toBeEnabled()"
    ],
    "correctOption": 0,
    "explanation": "`toBeChecked()` asserts that a checkbox or radio button is checked/selected."
  },
  {
    "testId": "pw-mock-01",
    "question": "How do you perform a click action on an element in Playwright?",
    "options": [
      "await locator.click()",
      "await locator.press()",
      "await locator.select()",
      "await locator.activate()"
    ],
    "correctOption": 0,
    "explanation": "The `click()` method is used to click on an element. Playwright waits for the element to be actionable before clicking."
  },
  {
    "testId": "pw-mock-01",
    "question": "How do you fill a text input field in Playwright?",
    "options": [
      "await locator.fill('text')",
      "await locator.type('text')",
      "await locator.input('text')",
      "await locator.setText('text')"
    ],
    "correctOption": 0,
    "explanation": "The `fill()` method is used to set the value of a text input field, clearing any existing text first."
  },
  {
    "testId": "pw-mock-01",
    "question": "What is the main difference between `fill()` and `type()` in Playwright?",
    "options": [
      "fill() sets the value immediately; type() simulates typing character by character",
      "type() sets the value immediately; fill() simulates typing",
      "Both do the same thing",
      "fill() is for checkboxes; type() is for text fields"
    ],
    "correctOption": 0,
    "explanation": "`fill()` instantly sets the field value, while `type()` simulates real user typing with keypress events."
  },
  {
    "testId": "pw-mock-01",
    "question": "How do you check a checkbox in Playwright?",
    "options": [
      "await locator.check()",
      "await locator.click()",
      "await locator.select()",
      "await locator.toggle()"
    ],
    "correctOption": 0,
    "explanation": "The `check()` method is specifically designed for checking checkboxes and radio buttons."
  },
  {
    "testId": "pw-mock-01",
    "question": "What is auto-waiting in Playwright?",
    "options": [
      "Playwright automatically waits for elements to be ready before performing actions",
      "A manual wait function",
      "A sleep function",
      "A polling mechanism"
    ],
    "correctOption": 0,
    "explanation": "Auto-waiting is a built-in feature where Playwright waits for elements to be actionable prior to performing actions."
  },
  {
    "testId": "pw-mock-01",
    "question": "What is the purpose of `test.beforeEach()` in Playwright?",
    "options": [
      "To run setup code before each test",
      "To run setup code once before all tests",
      "To run teardown code after each test",
      "To skip a test"
    ],
    "correctOption": 0,
    "explanation": "`test.beforeEach()` runs the specified function before each test in the suite, useful for setup like navigating to a URL."
  },
  {
    "testId": "pw-mock-01",
    "question": "What is the purpose of `test.describe()` in Playwright?",
    "options": [
      "To group related tests together",
      "To run tests in parallel",
      "To skip a group of tests",
      "To set test configuration"
    ],
    "correctOption": 0,
    "explanation": "`test.describe()` is used to group related tests, making the test suite more organized and readable."
  },
  {
    "testId": "pw-mock-01",
    "question": "What does the `--headed` flag do when running Playwright tests?",
    "options": [
      "Runs tests with the browser window visible",
      "Runs tests in headless mode",
      "Generates test reports",
      "Runs tests in debug mode"
    ],
    "correctOption": 0,
    "explanation": "The `--headed` flag runs tests with the browser window visible, useful for debugging and visual verification."
  },
  {
    "testId": "pw-mock-01",
    "question": "What is the purpose of `test.use()` in Playwright?",
    "options": [
      "To set configuration options for a specific test or test file",
      "To define a new fixture",
      "To run a test repeatedly",
      "To skip a test"
    ],
    "correctOption": 0,
    "explanation": "`test.use()` allows you to set configuration options (like browser, viewport) for a specific test or test file."
  },
  {
    "testId": "pw-mock-01",
    "question": "Which file contains the main configuration for Playwright tests?",
    "options": [
      "playwright.config.js or playwright.config.ts",
      "package.json",
      "playwright.json",
      "config.js"
    ],
    "correctOption": 0,
    "explanation": "`playwright.config.js` (or `.ts`) is the primary configuration file for Playwright test projects."
  },
  {
    "testId": "pw-mock-01",
    "question": "How do you run a single specific test file in Playwright?",
    "options": [
      "npx playwright test tests/my-test.spec.js",
      "npx playwright test --file my-test.spec.js",
      "npx playwright run my-test.spec.js",
      "npx playwright test --grep my-test.spec.js"
    ],
    "correctOption": 0,
    "explanation": "You can run a specific test file by passing its path as an argument to the test command."
  },
  {
    "testId": "pw-mock-01",
    "question": "What is the recommended way to handle authentication in Playwright tests?",
    "options": [
      "Use `test.beforeEach` for login or save storage state",
      "Use hardcoded credentials in each test",
      "Use environment variables only",
      "Use a separate authentication script"
    ],
    "correctOption": 0,
    "explanation": "Authentication is typically handled using `test.beforeEach` for login steps or by saving and reusing storage state."
  },
  {
    "testId": "pw-mock-01",
    "question": "How do you set the viewport size in a Playwright test?",
    "options": [
      "Using `test.use({ viewport: { width: 1280, height: 720 } })`",
      "Using `page.setViewport()`",
      "Using `browser.setViewport()`",
      "Using `context.setViewport()`"
    ],
    "correctOption": 0,
    "explanation": "`test.use({ viewport: { width, height } })` sets the viewport size for the test."
  },
  {
    "testId": "pw-mock-01",
    "question": "What is the purpose of the `--reporter` flag in Playwright?",
    "options": [
      "To specify the test report format (e.g., html, json, line)",
      "To report test results to a database",
      "To generate a report only on failure",
      "To disable reporting"
    ],
    "correctOption": 0,
    "explanation": "The `--reporter` flag specifies the output format for test reports, such as `html`, `json`, or `line`."
  },
  {
    "testId": "pw-mock-01",
    "question": "What is a fixture in Playwright?",
    "options": [
      "A reusable setup that provides resources to tests",
      "A type of assertion",
      "A locator strategy",
      "A test hook"
    ],
    "correctOption": 0,
    "explanation": "Fixtures are reusable setups that provide resources (like a browser instance) to tests, promoting code reuse."
  },
  {
    "testId": "pw-mock-01",
    "question": "Which of the following is NOT a valid Playwright assertion?",
    "options": [
      "expect(locator).toBeVisible()",
      "expect(locator).toHaveText()",
      "expect(locator).toExist()",
      "expect(locator).toBeChecked()"
    ],
    "correctOption": 2,
    "explanation": "`toExist()` is not a built-in Playwright assertion. Use `toBeAttached()` to check DOM presence."
  },
  {
    "testId": "pw-mock-01",
    "question": "How do you navigate to a URL in Playwright?",
    "options": [
      "await page.goto('url')",
      "await page.navigate('url')",
      "await page.load('url')",
      "await browser.goto('url')"
    ],
    "correctOption": 0,
    "explanation": "`page.goto()` is the method used to navigate to a URL in Playwright."
  },
  {
    "testId": "pw-mock-01",
    "question": "What is the purpose of `--workers` flag in Playwright?",
    "options": [
      "To specify the number of parallel workers for test execution",
      "To specify the number of test files",
      "To specify the number of browsers",
      "To specify the number of test retries"
    ],
    "correctOption": 0,
    "explanation": "The `--workers` flag controls the number of parallel test runners, speeding up execution."
  },
  {
    "testId": "pw-mock-01",
    "question": "Which locator should you use to find a form field by its associated label?",
    "options": ["getByLabel()", "getByRole()", "getByPlaceholder()", "getByTestId()"],
    "correctOption": 0,
    "explanation": "`getByLabel()` is the recommended locator for form fields with associated labels, focusing on accessibility."
  },
  {
    "testId": "pw-mock-01",
    "question": "What is the purpose of `page.screenshot()` in Playwright?",
    "options": [
      "To capture a screenshot of the page",
      "To capture a video of the page",
      "To capture network activity",
      "To capture console logs"
    ],
    "correctOption": 0,
    "explanation": "`page.screenshot()` captures a screenshot of the page, useful for debugging and visual validation."
  },
  {
    "testId": "pw-mock-01",
    "question": "How do you handle multiple pages in Playwright?",
    "options": [
      "Using `context.newPage()`",
      "Using `browser.newPage()`",
      "Using `page.newPage()`",
      "Using `new window()`"
    ],
    "correctOption": 0,
    "explanation": "`context.newPage()` creates a new page within the same browser context."
  },
  {
    "testId": "pw-mock-01",
    "question": "What is the role of `expect` in Playwright?",
    "options": [
      "To make assertions about the application state",
      "To locate elements",
      "To perform actions",
      "To navigate between pages"
    ],
    "correctOption": 0,
    "explanation": "The `expect` function is used to make web-first assertions, verifying that the application state matches expectations."
  },
  {
    "testId": "pw-mock-01",
    "question": "Which of the following is a benefit of Playwright's auto-waiting?",
    "options": [
      "Reduces test flakiness by eliminating manual waits",
      "Increases test execution speed",
      "Allows testing on more browsers",
      "Simplifies test syntax"
    ],
    "correctOption": 0,
    "explanation": "Auto-waiting reduces flakiness by automatically waiting for elements to be ready, eliminating the need for manual waits."
  },
  {
    "testId": "pw-mock-01",
    "question": "What is the purpose of `test.skip()` in Playwright?",
    "options": [
      "To skip a test or a group of tests conditionally",
      "To skip only the setup phase",
      "To skip all tests in the suite",
      "To skip test execution on CI"
    ],
    "correctOption": 0,
    "explanation": "`test.skip()` is used to conditionally skip a test or a group of tests based on certain conditions."
  },
  {
    "testId": "pw-mock-01",
    "question": "Which of the following is the correct way to get an element's text content in Playwright?",
    "options": [
      "await locator.textContent()",
      "await locator.innerText()",
      "await locator.getText()",
      "await locator.content()"
    ],
    "correctOption": 0,
    "explanation": "`textContent()` returns the text content of the element, similar to the DOM property."
  },
  {
    "testId": "pw-mock-02",
    "question": "What is the Page Object Model (POM) pattern in Playwright?",
    "options": [
      "A pattern that encapsulates page interactions into reusable classes",
      "A type of locator",
      "A test runner configuration",
      "A debugging tool"
    ],
    "correctOption": 0,
    "explanation": "POM encapsulates page interactions into reusable classes, making tests more maintainable and readable."
  },
  {
    "testId": "pw-mock-02",
    "question": "What is the main benefit of using Page Object Model in Playwright?",
    "options": [
      "Reduces test maintenance time by centralizing page interactions",
      "Makes tests run faster",
      "Eliminates the need for assertions",
      "Simplifies test setup"
    ],
    "correctOption": 0,
    "explanation": "POM reduces maintenance by centralizing page interactions, making tests more resilient to UI changes."
  },
  {
    "testId": "pw-mock-02",
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
    "testId": "pw-mock-02",
    "question": "How do you run Playwright tests in parallel?",
    "options": [
      "Using the `--workers` flag or configuration",
      "Using separate test files only",
      "Using multiple browsers only",
      "Using `--parallel` flag"
    ],
    "correctOption": 0,
    "explanation": "Playwright supports parallel test execution using the `--workers` flag or by configuring workers in the config file."
  },
  {
    "testId": "pw-mock-02",
    "question": "What is the recommended practice for keeping locators in a Page Object Model?",
    "options": [
      "Keep locators inside the page object as a single source of truth",
      "Define locators directly in tests",
      "Keep locators in a separate file",
      "Use CSS selectors only"
    ],
    "correctOption": 0,
    "explanation": "Best practice is to keep locators in page objects as a single source of truth for maintainability."
  },
  {
    "testId": "pw-mock-02",
    "question": "What should you avoid when designing Page Object Model methods?",
    "options": [
      "Including assertions in page methods",
      "Returning new page objects on navigation",
      "Using descriptive method names",
      "Exposing elements for custom assertions"
    ],
    "correctOption": 0,
    "explanation": "Page methods should not include assertions; keep assertions in the test files to separate concerns."
  },
  {
    "testId": "pw-mock-02",
    "question": "How do you handle API requests in Playwright tests?",
    "options": [
      "Using `page.request` or `context.request`",
      "Using `axios` with Playwright",
      "Using `fetch` only",
      "Using `http` module"
    ],
    "correctOption": 0,
    "explanation": "Playwright provides built-in `request` API for making HTTP requests within tests."
  },
  {
    "testId": "pw-mock-02",
    "question": "What is the purpose of network interception in Playwright?",
    "options": [
      "To intercept and modify network requests and responses",
      "To measure network speed",
      "To log network traffic",
      "To block all network requests"
    ],
    "correctOption": 0,
    "explanation": "Network interception allows you to modify requests/responses, mock APIs, and test offline scenarios."
  },
  {
    "testId": "pw-mock-02",
    "question": "How do you mock an API response in Playwright?",
    "options": [
      "Using `page.route()` and `route.fulfill()`",
      "Using `page.intercept()`",
      "Using `page.mock()`",
      "Using `page.stub()`"
    ],
    "correctOption": 0,
    "explanation": "`page.route()` intercepts requests and `route.fulfill()` provides a mock response."
  },
  {
    "testId": "pw-mock-02",
    "question": "How do you verify that an API was called with expected data?",
    "options": [
      "Using `page.waitForRequest()` or `page.waitForResponse()`",
      "Using `page.verifyRequest()`",
      "Using `page.assertRequest()`",
      "Using `page.expectRequest()`"
    ],
    "correctOption": 0,
    "explanation": "`page.waitForRequest()` or `page.waitForResponse()` can be used to check if specific network requests were made."
  },
  {
    "testId": "pw-mock-02",
    "question": "What is the purpose of `toHaveScreenshot()` assertion?",
    "options": [
      "To compare a screenshot against an expected baseline",
      "To capture a screenshot of the page",
      "To compare text content",
      "To compare element sizes"
    ],
    "correctOption": 0,
    "explanation": "`toHaveScreenshot()` performs visual regression testing by comparing a screenshot with a baseline image."
  },
  {
    "testId": "pw-mock-02",
    "question": "How do you capture a screenshot of a specific element?",
    "options": [
      "await locator.screenshot()",
      "await page.screenshot({ element: locator })",
      "await element.screenshot()",
      "await screenshot(locator)"
    ],
    "correctOption": 0,
    "explanation": "The `screenshot()` method can be called directly on a locator to capture a screenshot of a specific element."
  },
  {
    "testId": "pw-mock-02",
    "question": "What is the purpose of tracing in Playwright?",
    "options": [
      "To record test execution for debugging",
      "To trace network requests only",
      "To trace element locations only",
      "To generate test reports"
    ],
    "correctOption": 0,
    "explanation": "Tracing records test execution, including screenshots, DOM snapshots, and network logs for debugging flaky tests."
  },
  {
    "testId": "pw-mock-02",
    "question": "How do you generate a trace report in Playwright?",
    "options": [
      "Using `npx playwright show-trace trace.zip`",
      "Using `npx playwright trace trace.zip`",
      "Using `npx playwright report trace.zip`",
      "Using `npx playwright debug trace.zip`"
    ],
    "correctOption": 0,
    "explanation": "`npx playwright show-trace` opens the trace viewer for analyzing test execution."
  },
  {
    "testId": "pw-mock-02",
    "question": "How do you enable video recording in Playwright?",
    "options": [
      "Using the `video` option in the browser context configuration",
      "Using `--video` flag",
      "Using `recordVideo()` method",
      "Using `saveVideo()` method"
    ],
    "correctOption": 0,
    "explanation": "Video recording is enabled by setting the `video` option in the browser context or test configuration."
  },
  {
    "testId": "pw-mock-02",
    "question": "What is the purpose of device emulation in Playwright?",
    "options": [
      "To test applications on different mobile devices",
      "To emulate different browsers",
      "To emulate different operating systems",
      "To emulate different screen resolutions only"
    ],
    "correctOption": 0,
    "explanation": "Playwright supports device emulation through browser contexts, allowing testing on mobile devices like iPhone and iPad."
  },
  {
    "testId": "pw-mock-02",
    "question": "How do you emulate a mobile device in Playwright?",
    "options": [
      "Using `devices` object from Playwright",
      "Using `emulate` method",
      "Using `setDevice` method",
      "Using `mobile` configuration"
    ],
    "correctOption": 0,
    "explanation": "Playwright provides a `devices` object with predefined device configurations for emulation."
  },
  {
    "testId": "pw-mock-02",
    "question": "What is the purpose of environment variables in Playwright tests?",
    "options": [
      "To configure test behavior across different environments",
      "To store test data only",
      "To define assertions",
      "To set test priorities"
    ],
    "correctOption": 0,
    "explanation": "Environment variables allow you to configure test behavior for different environments (dev, staging, production)."
  },
  {
    "testId": "pw-mock-02",
    "question": "How do you set environment variables in Playwright?",
    "options": [
      "Using `.env` files and `process.env`",
      "Using `--env` flag",
      "Using `setEnvironment` method",
      "Using `env()` function"
    ],
    "correctOption": 0,
    "explanation": "`.env` files loaded with `dotenv` are commonly used to manage environment variables in Playwright projects."
  },
  {
    "testId": "pw-mock-02",
    "question": "What is the purpose of `project` configuration in Playwright?",
    "options": [
      "To define browser-specific and device-specific configurations",
      "To define test priorities",
      "To define test categories",
      "To define test teams"
    ],
    "correctOption": 0,
    "explanation": "Projects in Playwright configuration allow you to define different browser and device setups for testing."
  },
  {
    "testId": "pw-mock-02",
    "question": "How do you set up a CI/CD pipeline for Playwright tests?",
    "options": [
      "Using GitHub Actions, Jenkins, GitLab CI with the Playwright action",
      "Using manual execution only",
      "Using cloud services only",
      "Using local execution only"
    ],
    "correctOption": 0,
    "explanation": "Playwright tests can be integrated into CI/CD pipelines using actions like `playwright-github-action` or custom scripts."
  },
  {
    "testId": "pw-mock-02",
    "question": "What is the purpose of `--retries` flag in Playwright?",
    "options": [
      "To specify the number of times to retry a failed test",
      "To specify the number of test runs",
      "To specify the number of workers",
      "To specify the number of browsers"
    ],
    "correctOption": 0,
    "explanation": "The `--retries` flag configures the number of retry attempts for failed tests."
  },
  {
    "testId": "pw-mock-02",
    "question": "What is a custom fixture in Playwright?",
    "options": [
      "A user-defined fixture that extends Playwright's built-in fixtures",
      "A built-in fixture",
      "A type of assertion",
      "A locator strategy"
    ],
    "correctOption": 0,
    "explanation": "Custom fixtures allow you to extend Playwright's built-in fixtures with your own reusable resources."
  },
  {
    "testId": "pw-mock-02",
    "question": "How do you create a custom fixture in Playwright?",
    "options": [
      "Using `test.extend()`",
      "Using `test.fixture()`",
      "Using `test.addFixture()`",
      "Using `test.createFixture()`"
    ],
    "correctOption": 0,
    "explanation": "`test.extend()` is used to define custom fixtures in Playwright."
  },
  {
    "testId": "pw-mock-02",
    "question": "What is the purpose of `--debug` flag in Playwright?",
    "options": [
      "To run tests in debug mode with Playwright Inspector",
      "To generate debug logs",
      "To run tests slowly",
      "To capture debug screenshots"
    ],
    "correctOption": 0,
    "explanation": "The `--debug` flag runs tests with the Playwright Inspector for step-by-step debugging."
  },
  {
    "testId": "pw-mock-02",
    "question": "What is the role of `page.pause()` in Playwright?",
    "options": [
      "To pause test execution and open the Playwright Inspector",
      "To pause the page loading",
      "To pause video recording",
      "To pause network requests"
    ],
    "correctOption": 0,
    "explanation": "`page.pause()` pauses test execution and opens the Playwright Inspector for manual debugging."
  },
  {
    "testId": "pw-mock-02",
    "question": "How do you handle soft assertions in Playwright?",
    "options": [
      "Using `expect.soft()`",
      "Using `expect()` with a try/catch",
      "Using `expect().soft`",
      "Using `softExpect()`"
    ],
    "correctOption": 0,
    "explanation": "`expect.soft()` creates a soft assertion that doesn't stop test execution on failure."
  },
  {
    "testId": "pw-mock-02",
    "question": "What is the purpose of `test.only()` in Playwright?",
    "options": [
      "To run only the specified test(s)",
      "To skip a test",
      "To mark a test as pending",
      "To run a test exclusively"
    ],
    "correctOption": 0,
    "explanation": "`test.only()` runs only the specified test(s), useful for debugging or focused development."
  },
  {
    "testId": "pw-mock-02",
    "question": "What is the difference between `page.waitForSelector()` and `locator.waitFor()`?",
    "options": [
      "locator.waitFor() is the newer API; page.waitForSelector() is deprecated",
      "They are the same",
      "page.waitForSelector() is newer",
      "locator.waitFor() is for visibility only"
    ],
    "correctOption": 0,
    "explanation": "`locator.waitFor()` is the newer, recommended API for waiting on elements. `page.waitForSelector()` is still available but less preferred."
  },
  {
    "testId": "pw-mock-02",
    "question": "Which of the following is a benefit of using Playwright over Selenium?",
    "options": [
      "Built-in auto-waiting, faster execution, and better API design",
      "Better community support",
      "Supports more browsers",
      "Has been around longer"
    ],
    "correctOption": 0,
    "explanation": "Playwright offers auto-waiting, faster execution via WebSocket communication, and a modern, intuitive API."
  },
  {
    "testId": "pw-mock-02",
    "question": "What is the role of `--project` flag in Playwright?",
    "options": [
      "To run tests for a specific project configuration",
      "To define a new project",
      "To set the project name",
      "To skip a project"
    ],
    "correctOption": 0,
    "explanation": "The `--project` flag allows you to run tests for a specific project defined in the Playwright configuration."
  }
];

let questionsFile = fs.readFileSync('src/data/questions.js', 'utf8');
const endBraceIndex = questionsFile.lastIndexOf('];');
if (endBraceIndex !== -1 && !questionsFile.includes('"pw-mock-01"')) {
  const injectionString = ',\n' + questions.map(q => JSON.stringify(q, null, 2)).join(',\n') + '\n];';
  questionsFile = questionsFile.substring(0, endBraceIndex) + injectionString;
  fs.writeFileSync('src/data/questions.js', questionsFile);
  console.log('Questions added successfully for pw-full-mock');
} else {
  console.log('Questions for pw-full-mock already exist or file format unexpected');
}
