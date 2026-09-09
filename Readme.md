# Playwright Automation Framework

A reusable end-to-end UI automation framework built with Playwright and JavaScript for testing the Automation Exercise web application.

## Tech Stack

- Playwright Test
- JavaScript
- Node.js
- Page Object Model (POM)
- POMManager
- Reusable Fixtures
- JSON Test Data
- dotenv / Environment Variables
- GitHub Actions
- GitHub Pages
- HTML Reports

## Framework Structure

```text
automation-framework/
├── .github/
│   └── workflows/
├── fixtures/
├── pages/
├── test-data/
├── tests/
├── playwright.config.js
├── package.json
└── package-lock.json
Key Features
Page Object Model

The framework separates page-specific locators and actions from test logic, making the tests easier to maintain and reuse.

POMManager

A central POMManager provides access to the different page objects used throughout the test flow.

Reusable Fixtures

Custom Playwright fixtures are used to provide reusable test setup and page objects across tests.

Data-Driven Testing

Test data is maintained separately in JSON files to avoid hardcoding test values directly inside test cases.

Environment Configuration

Environment variables are used for configuration such as the application URL and test credentials.

Locator Strategies

The framework uses Playwright locator strategies including:

getByRole
getByText
getByTestId
CSS selectors
XPath
Dynamic locators
Synchronization

Playwright's auto-waiting and web-first assertions are used to improve test reliability without unnecessary hard-coded waits.

Debugging & Reporting

The framework supports:

HTML reports
Screenshots
Videos
Trace Viewer
Playwright debugging
Automated E2E Flow

The main end-to-end purchase workflow covers:
Login
  ↓
Products
  ↓
Search Product
  ↓
Product Details
  ↓
Add to Cart
  ↓
Cart
  ↓
Checkout
  ↓
Place Order

CI/CD

GitHub Actions is configured to execute the Playwright test suite automatically.

The workflow includes:

Setting up Node.js
Installing dependencies
Installing Playwright Chromium
Running Playwright tests
Uploading test artifacts

The project also includes a GitHub Pages deployment flow where deployment is gated by successful test execution.

Installation

Clone the repository and install dependencies:
git clone https://github.com/har-i-krish/automation-framework.git
cd automation-framework
npm ci
npx playwright install

Run Tests

Run the Playwright test suite:
npx playwright test

Run tests in headed mode:
npx playwright test --headed

Run tests with debugging:
npx playwright test --debug

View the HTML report:
npx playwright show-report

What This Project Demonstrates
Playwright UI automation
Page Object Model
POMManager architecture
Reusable fixtures
Data-driven testing
Environment configuration
Locator strategies
Web-first assertions
End-to-end testing
Debugging with Trace Viewer
Screenshots and video capture
GitHub Actions CI
Test-gated deployment

Author

Harikrishnan J
GitHub: https://github.com/har-i-krish
LinkedIn: https://www.linkedin.com/in/harikrishnan-j-ece
