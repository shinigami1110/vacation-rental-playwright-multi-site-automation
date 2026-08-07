# Vacation Rental Playwright Automation Framework

A production-quality UI automation framework built with **Playwright** and **JavaScript** for validating vacation rental booking workflows across multiple websites:
- **Alice Lodging** (`https://www.alicelodging.com/`)
- **Firesky Retreats** (`https://www.fireskyretreats.com/`)

---

##  Framework Architecture & Principles

- **Shared Test Logic**: The exact same test scripts (TC1 through TC6) run against both websites. Website-specific differences (URLs, locators, paths) are isolated in configuration and locator modules.
- **Pure JavaScript**: Built with standard ES6+ and Node.js (strictly no TypeScript).
- **Custom Site Fixtures**: Custom Playwright test fixtures (`siteFixture.js`) inject site configurations, base URLs, and page objects into tests.
- **Dynamic Data Generation**: Future travel dates (e.g. 14 days in advance) and form payloads are generated programmatically.
- **Failure Diagnostics**: Visual red-border element highlighting, automatic failure screenshots, Playwright trace zips, videos, and step logs attached to HTML reports.

---

##  Project Directory Structure

```
vacation-rental-playwright-multi-site-automation/
├── config/
│   └── site.config.js             # Site configurations, base URLs, & environment settings
├── locators/
│   ├── commonLocators.js          # Shared standard & accessibility-based locators
│   ├── aliceLocators.js           # Alice Lodging locator overrides
│   └── fireskyLocators.js         # Firesky Retreats locator overrides
├── pages/
│   ├── BasePage.js                # Core page class: actions, waiting, logging, popup dismissal
│   ├── HomePage.js                # Search hero, destination picker, header navigation
│   ├── SearchResultsPage.js       # Search results grid, date/guest pickers, filters, sorting
│   ├── PropertyDetailsPage.js     # Property header, booking widget, guest/date validation
│   ├── NavigationPage.js          # Header/footer category navigation & collection pages
│   ├── FormValidationPage.js      # 'List With Us' / 'Contact Us' forms & validation checks
│   └── FooterPage.js              # Dynamic social media link discovery & domain verification
├── fixtures/
│   └── siteFixture.js             # Custom Playwright test fixture injecting page objects & popups observer
├── utils/
│   ├── logger.js                  # Clean step logger (no emojis) with report step annotations
│   ├── dateHelper.js              # Dynamic future date generator (ISO & UI formats)
│   ├── dataGenerator.js          # Invalid form input generator
│   └── screenshotHelper.js        # Failure screenshot & element highlighter utility
├── test-data/
│   └── siteData.js                # Search destinations, categories, and test datasets
├── tests/
│   ├── tc1_social_media.spec.js   # Dynamic footer social media discovery & domain assertions
│   ├── tc2_search_filter_sort.spec.js # Guest config, date selection, search, filters & sorting
│   ├── tc3_property_details.spec.js # Property details & booking criteria consistency
│   ├── tc4_navigation.spec.js     # Category navigation & property listing verification
│   ├── tc5_form_validation.spec.js# Inquiry form invalid input submission & field-level checks
│   ├── tc6_bonus_favorites.spec.js# Bonus: Saved Stays / Favorites workflow validation
│   └── tc7_intentional_failure.spec.js # Intentional failure demo for failure reporting
├── playwright.config.js           # Playwright runner configuration (traces, screenshots, report)
├── package.json                   # Cross-platform npm scripts and dependencies
└── README.md                      # Production QA documentation
```

---

##  Prerequisites & Setup

### 1. Prerequisites
- **Node.js**: v16+ (Recommended Node 18 or 20)
- **Git**

### 2. Installation
```bash
git clone https://github.com/shinigami1110/vacation-rental-playwright-multi-site-automation.git
cd vacation-rental-playwright-multi-site-automation
npm install
npx playwright install
```

---

##  Executing Tests

### Cross-Platform Execution Commands (Windows, macOS, Linux)

```bash
# Run all tests (including intentional failure diagnostic test)
npm test

# Run all tests in headed mode (full screen browser GUI visible)
npm run test:headed

# Run tests for Alice Lodging only
npm run test:alice

# Run tests for Firesky Retreats only
npm run test:firesky

# Run intentional failure diagnostic demo
npm run test:failure

# Open HTML test report
npm run test:report
```

---

##  Reports & Failure Diagnostics

When failures occur, Playwright captures:
1. **Visual Element Highlighting**: The target element is highlighted with a red outline.
2. **Screenshots & Videos**: Saved in `test-results/` and attached directly to the HTML report.
3. **Playwright Traces**: Zip trace files containing full DOM snapshots, console logs, and network calls.

View the report anytime using:
```bash
npx playwright show-report
```

---

##  How to Add a 3rd Website

Adding a 3rd website (e.g. `Pacific Retreats`) requires minimal effort:
1. Add a configuration entry in `config/site.config.js` specifying base URL, site name, default search destination, and form path.
2. Add site-specific locator overrides in `locators/` if the new site's DOM structure differs.
3. Add the new site key to `sitesToTest` in the test files.

All existing test scenarios will execute against the new website automatically!

---

##  Bonus Scenario & Intentional Failure

- **Bonus Test (`tc6_bonus_favorites.spec.js`)**: Validates property favoriting / saved stays feature interaction to increase guest booking consideration confidence.
- **Intentional Failure (`tc7_intentional_failure.spec.js`)**: Fails deliberately on a non-existent element to demonstrate screenshot attachment, red element highlighting, trace viewer zips, and stack trace details in the HTML report.

---

##  Assumptions, Limitations & Trade-Offs

1. **Production Safety**: Alice Lodging and Firesky Retreats are live production sites. Tests perform full UI interactions up to reservation/inquiry forms, but do **not** submit financial transactions or real guest bookings.
2. **Dynamic UI Render Waits**: Both websites use React/Next.js SPA routing. Explicit load waits and resilient locators are used to handle network loading cleanly across environments.
