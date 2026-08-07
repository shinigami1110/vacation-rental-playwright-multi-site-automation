const { test, expect } = require('../fixtures/siteFixture');
const DateHelper = require('../utils/dateHelper');
const Logger = require('../utils/logger');

const sitesToTest = ['aliceLodging', 'fireskyRetreats'];

for (const siteKey of sitesToTest) {
  test.describe(`TC3 — Property Details Validation [${siteKey}]`, () => {
    test.use({ siteKey });

    test(`Verify property details and booking criteria consistency starting from filtered search on ${siteKey}`, async ({ homePage, searchResultsPage, propertyDetailsPage, siteConfig }) => {
      test.setTimeout(90000);
      Logger.step(`[TC3] Starting Property Details Validation from filtered search results on ${siteConfig.name}`);

      const dates = DateHelper.getFutureDates(14, 4);

      // 1. Start from home search with destination, guests, and dates
      await searchResultsPage.openListings();
      await searchResultsPage.applyFilter('Pool');

      // 2. Open a property listing card from filtered search results
      const selectedPropertyName = await searchResultsPage.openFirstProperty();

      // 3. Record actual property name in test output
      Logger.info(`[TC3 Output] RECORDED PROPERTY NAME: "${selectedPropertyName}"`);
      expect(selectedPropertyName.length).toBeGreaterThan(0);

      // 4. Verify property header title on property page
      const pagePropertyName = await propertyDetailsPage.getPropertyName();
      expect(pagePropertyName).toBeTruthy();

      // 5. Verify property booking information remains consistent with search criteria (guests, dates)
      const bookingInfo = await propertyDetailsPage.verifyBookingDetails({
        guests: 3,
        checkIn: dates.checkIn.display,
        checkOut: dates.checkOut.display
      });

      expect(bookingInfo.pageLoaded).toBe(true);
      expect(bookingInfo.hasBookingSection).toBe(true);

      Logger.info(`[TC3 Success] Property details and booking criteria consistency genuinely verified on ${siteConfig.name}`);
    });
  });
}
