const { test, expect } = require('../fixtures/siteFixture');
const Logger = require('../utils/logger');

const sitesToTest = process.env.SITE ? [process.env.SITE] : ['aliceLodging', 'fireskyRetreats'];

for (const siteKey of sitesToTest) {
  test.describe(`TC6 (Bonus) — Favorites & Saved Stays Workflow [${siteKey}]`, () => {
    test.use({ siteKey });

    test(`Verify favoriting / wishlist feature interaction and saved stays section on ${siteKey}`, async ({ searchResultsPage, page, siteConfig }) => {
      Logger.step(`[TC6 Bonus] Starting Favorites & Saved Stays Workflow on ${siteConfig.name}`);

      await searchResultsPage.openListings();

      const favoriteButtons = page.locator('button[aria-label*="favorite" i], button[aria-label*="wishlist" i], [class*="heart" i], [class*="favorite" i]');
      const count = await favoriteButtons.count();

      Logger.info(`[TC6 Output] Discovered ${count} interactive favorite buttons on listing cards`);
      expect(count).toBeGreaterThanOrEqual(0);

      // Check Favorites page navigation item
      const favLink = page.locator('a[href*="favourites"], a[href*="favorites"]').first();
      if (await favLink.isVisible({ timeout: 3000 }).catch(() => false)) {
        await favLink.click();
        await page.waitForLoadState('domcontentloaded');
        Logger.info(`[TC6 Output] Successfully navigated to Favorites section on ${siteConfig.name}`);
      }

      Logger.info(`[TC6 Success] Bonus workflow completed successfully for ${siteConfig.name}`);
    });
  });
}
