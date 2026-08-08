const { test, expect } = require('../fixtures/siteFixture');
const DateHelper = require('../utils/dateHelper');
const Logger = require('../utils/logger');

const sitesToTest = process.env.SITE ? [process.env.SITE] : ['aliceLodging', 'fireskyRetreats'];

for (const siteKey of sitesToTest) {
  test.describe(`TC3 — Property Details Validation [${siteKey}]`, () => {
    test.use({ siteKey });

    test(`Verify property details and booking criteria consistency from search on ${siteKey}`, async ({ homePage, searchResultsPage, propertyDetailsPage, siteConfig }) => {
      test.setTimeout(120000);
      Logger.step(`[TC3] Starting Property Details Validation on ${siteConfig.name}`);

      const dates = DateHelper.getFutureDates(14, 4);
      const targetAdults = 2;
      const targetChildren = 1;

      // 1. Open home page and configure search criteria
      await homePage.open();

      // 2. Set guests
      const guestResult = await searchResultsPage.setGuestCount(targetAdults, targetChildren);
      Logger.info(`[TC3] Guests configured: ${guestResult.adultsAfter} Adults, ${guestResult.childrenAfter} Children`);

      // 3. Set dates
      const dateResult = await searchResultsPage.setFutureDates(dates.checkIn.dateObj, dates.checkOut.dateObj);
      Logger.info(`[TC3] Dates configured: ${dateResult.checkInSelected} to ${dateResult.checkOutSelected}`);

      // 4. Search and navigate to listings
      await searchResultsPage.executeSearch(siteConfig.defaultDestination);

      // 5. Open first property from results
      const selectedPropertyName = await searchResultsPage.openFirstProperty();
      expect(selectedPropertyName.length).toBeGreaterThan(0);
      Logger.info(`[TC3] Selected property card name: "${selectedPropertyName}"`);

      // 6. Verify property name on detail page
      const pagePropertyName = await propertyDetailsPage.getPropertyName();
      expect(pagePropertyName).toBeTruthy();
      expect(pagePropertyName.trim().toLowerCase()).toBe(selectedPropertyName.trim().toLowerCase());
      Logger.info(`[TC3] Property page title: "${pagePropertyName}"`);

      // 7. Verify booking criteria consistency — BLOCKER 4
      const bookingInfo = await propertyDetailsPage.verifyBookingDetails({
        adults: guestResult.adultsAfter,
        children: guestResult.childrenAfter,
        checkInISO: dates.checkIn.iso,
        checkOutISO: dates.checkOut.iso
      });

      // Assert page actually loaded
      expect(bookingInfo.pageLoaded).toBe(true);
      expect(bookingInfo.actualGuests).toBeTruthy();
      expect(bookingInfo.guestsConsistent).toBe(true);
      expect(bookingInfo.actualDates).toBeTruthy();
      expect(bookingInfo.datesConsistent).toBe(true);
      expect(bookingInfo.hasBookingSection).toBe(true);

      // Assert guests are consistent between search and property page
      if (bookingInfo.actualGuests) {
        expect(bookingInfo.guestsConsistent).toBe(true);
        Logger.info(`[TC3 ASSERT] Guest criteria consistency: PASS ✓`);
      } else {
        Logger.warn(`[TC3] Guest picker not found on property page — cannot verify guest consistency`);
      }

      // Assert dates are consistent between search and property page
      if (bookingInfo.actualDates) {
        expect(bookingInfo.datesConsistent).toBe(true);
        Logger.info(`[TC3 ASSERT] Date criteria consistency: PASS ✓`);
      } else {
        Logger.warn(`[TC3] Date picker not found on property page — cannot verify date consistency`);
      }

      Logger.info(`[TC3 Success] Property details and booking criteria genuinely verified on ${siteConfig.name}`);
    });
  });
}
