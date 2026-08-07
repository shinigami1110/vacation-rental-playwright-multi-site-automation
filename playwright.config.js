const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',
  timeout: 90000,
  expect: {
    timeout: 15000
  },
  fullyParallel: false,
  forbidOnly: !!process.env.CI,
  retries: 0,
  workers: 1,
  reporter: [
    ['html', { outputFolder: 'playwright-report', open: 'never' }],
    ['list'],
    ['json', { outputFile: 'reports/test-results.json' }]
  ],
  use: {
    actionTimeout: 15000,
    navigationTimeout: 30000,
    trace: 'on',
    screenshot: 'on',
    video: 'retain-on-failure',
    headless: false,
    viewport: null,
    launchOptions: {
      args: ['--start-maximized']
    },
    ignoreHTTPSErrors: true
  },
  projects: [
    {
      name: 'chromium',
      use: {
        viewport: null,
        launchOptions: {
          args: ['--start-maximized']
        }
      }
    }
  ]
});
