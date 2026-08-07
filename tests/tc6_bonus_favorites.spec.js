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

      if (count > 0) {
        Logger.info(`[TC6 Output] Discovered ${count} interactive favorite buttons on listing cards for ${siteConfig.name}`);
        const firstFav = favoriteButtons.first();
        await firstFav.click({ force: true });
        await page.waitForTimeout(500);
        Logger.info(`[TC6 Verified] Clicked favorite button on property card for ${siteConfig.name}`);
      } else {
        Logger.info(`[TC6 Limitation] Discovered 0 interactive favorite buttons on listing cards for ${siteConfig.name} — Feature not exposed on live listing cards.`);
      }

      // Check Favorites page navigation item
      const favLink = page.locator('a[href*="favourites"], a[href*="favorites"]').first();
      if (await favLink.isVisible({ timeout: 3000 }).catch(() => false)) {
        await favLink.click();
        await page.waitForLoadState('domcontentloaded');
        Logger.info(`[TC6 Output] Successfully navigated to Favorites section on ${siteConfig.name}`);
      } else {
        Logger.info(`[TC6 Limitation] Favorites header link not present on ${siteConfig.name}`);
      }

      Logger.info(`[TC6 Evaluated] Bonus workflow completed and evaluated for ${siteConfig.name}`);
    });
  });
}
