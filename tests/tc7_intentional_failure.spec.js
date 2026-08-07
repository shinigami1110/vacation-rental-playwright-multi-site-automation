const { test, expect } = require('../fixtures/siteFixture');
const Logger = require('../utils/logger');
const ScreenshotHelper = require('../utils/screenshotHelper');

test.describe('TC7 — Intentional Failure Diagnostic Reporting Demo', () => {
  test.use({ siteKey: 'aliceLodging' });

  test('Demonstrate failure diagnostics (screenshot, element highlight, trace, & step logs)', async ({ homePage, page, siteConfig }) => {
    Logger.step(`[TC7 Failure Demo] Opening site ${siteConfig.name} to demonstrate diagnostic reporting`);

    await homePage.open();

    Logger.step(`Attempting assertion on intentional non-existent element`);

    const nonExistentElement = page.locator('#non-existent-property-verification-title-element');

    // Visually highlight element attempt before asserting failure
    await ScreenshotHelper.highlightElement(nonExistentElement);

    // Intentional strict assertion failure
    await expect(nonExistentElement).toBeVisible({ timeout: 3000 });
  });
});
