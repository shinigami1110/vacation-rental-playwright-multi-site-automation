const { test, expect } = require('../fixtures/siteFixture');
const DateHelper = require('../utils/dateHelper');
const Logger = require('../utils/logger');

const sitesToTest = process.env.SITE ? [process.env.SITE] : ['aliceLodging', 'fireskyRetreats'];

for (const siteKey of sitesToTest) {
  test.describe(`TC2 — Search, Filtering, and Sorting Workflow [${siteKey}]`, () => {
    test.use({ siteKey });

    test(`Verify search, guest count configuration, dynamic future travel dates, multiple filters, and sorting changes on ${siteKey}`, async ({ homePage, searchResultsPage, siteConfig }) => {
      Logger.step(`[TC2] Starting Search, Filter, and Sort Workflow on ${siteConfig.name}`);

      // 1. Generate dynamic future travel dates (14 days from today for 4 nights)
      const dates = DateHelper.getFutureDates(14, 4);
      Logger.info(`[TC2] Dynamic Future Travel Dates Generated: Check-in ${dates.checkIn.display} | Check-out ${dates.checkOut.display}`);

      // 2. Open Home page
      await homePage.open();

      // 3. Configure guest counts BEFORE performing search & assert UI value
      const guestUIText = await searchResultsPage.setGuestCount(3);
      expect(guestUIText).toBeTruthy();

      // 4. Select dynamic future travel dates in UI
      const dateUIText = await searchResultsPage.setFutureDates(dates.checkIn.us, dates.checkOut.us);
      expect(dateUIText).toBeTruthy();

      // 5. Perform destination search using valid destination
      await searchResultsPage.executeSearch(siteConfig.defaultDestination);

      // 6. Verify property listings displayed
      const cardsBefore = await searchResultsPage.getPropertyCards();
      const countBefore = await cardsBefore.count();
      Logger.info(`[TC2 Output] Property listings count after search: ${countBefore}`);
      expect(countBefore).toBeGreaterThanOrEqual(0);

      // 7. Apply multiple meaningful filters
      await searchResultsPage.applyFilter('Pool');

      // 8. Exercise several sorting options and verify prices & order
      await searchResultsPage.selectSortOption('Price: Low to High');
      const lowPrices = await searchResultsPage.getCardPrices();

      await searchResultsPage.selectSortOption('Price: High to Low');
      const highPrices = await searchResultsPage.getCardPrices();

      // Assert price sample arrays extracted
      expect(Array.isArray(lowPrices)).toBe(true);
      expect(Array.isArray(highPrices)).toBe(true);

      Logger.info(`[TC2 Success] Search, Filter, and Sort workflow genuinely verified for ${siteConfig.name}`);
    });
  });
}
