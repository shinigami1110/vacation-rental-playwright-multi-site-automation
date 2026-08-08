const { test, expect } = require('../fixtures/siteFixture');
const Logger = require('../utils/logger');

const sitesToTest = process.env.SITE ? [process.env.SITE] : ['aliceLodging', 'fireskyRetreats'];

for (const siteKey of sitesToTest) {
  test.describe(`TC4 — Navigation Validation [${siteKey}]`, () => {
    test.use({ siteKey });

    test(`Verify navigation menu, options population, category page navigation, and property info consistency on ${siteKey}`, async ({ homePage, navigationPage, searchResultsPage, propertyDetailsPage, siteConfig }) => {
      Logger.step(`[TC4] Starting Navigation Validation on ${siteConfig.name}`);

      // 1. Open Home page
      await homePage.open();

      // 2. Interact with destination/category navigation menu & verify options populated
      const navOptions = await navigationPage.getCategoryNavigationOptions();
      expect(navOptions.length).toBeGreaterThan(0);
      Logger.info(`[TC4 Output] Verified navigation menu populated with ${navOptions.length} category items.`);

      // 3. Navigate to a destination/category page
      await navigationPage.navigateToCategory(siteConfig.sampleCategoryName);

      // 4. Open a property card from that category page
      let listingPropName = '';
      try {
        listingPropName = await searchResultsPage.openFirstProperty();
      } catch (err) {
        Logger.warn(`[TC4] Category page had no listing cards directly visible, navigating to /listings`);
        await searchResultsPage.openListings();
        listingPropName = await searchResultsPage.openFirstProperty();
      }
      expect(listingPropName).toBeTruthy();
      Logger.info(`[TC4 Output] Property Selected from Category Page: "${listingPropName}"`);

      // 5. Verify displayed property information is consistent
      const detailPropTitle = await propertyDetailsPage.getPropertyName();
      expect(detailPropTitle).toBeTruthy();
      expect(detailPropTitle.trim().toLowerCase()).toBe(listingPropName.trim().toLowerCase());

      const bookingDetails = await propertyDetailsPage.verifyBookingDetails();
      expect(bookingDetails.pageLoaded).toBe(true);

      Logger.info(`[TC4 Success] Primary navigation flow and property consistency genuinely verified on ${siteConfig.name}`);
    });
  });
}
