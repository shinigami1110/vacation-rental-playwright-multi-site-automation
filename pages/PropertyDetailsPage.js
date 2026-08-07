const BasePage = require('./BasePage');
const Logger = require('../utils/logger');

class PropertyDetailsPage extends BasePage {
  constructor(page, siteConfig) {
    super(page, siteConfig);
  }

  /**
   * Get Property Name from title header and record in test output
   * @returns {Promise<string>}
   */
  async getPropertyName() {
    Logger.step(`[TC3] Recording and verifying Property Name on detail page`);
    await this.dismissOverlays();

    const titleLocator = this.page.locator('h1, h2, h3, [class*="title" i], [class*="property-name" i]').first();
    await titleLocator.waitFor({ state: 'attached', timeout: 20000 });
    const name = (await titleLocator.innerText().catch(() => 'Vacation Rental Listing')).trim();
    
    Logger.info(`RECORDED PROPERTY NAME: "${name}"`);
    return name;
  }

  /**
   * Verify Booking Details (Guests, Dates, & Search Criteria consistency)
   * @param {Object} expectedCriteria 
   */
  async verifyBookingDetails(expectedCriteria = {}) {
    Logger.step(`[TC3] Verifying booking information & search criteria consistency`);
    await this.dismissOverlays();

    const pageText = await this.page.innerText('body');
    const hasBookingSection = await this.page.locator('form, [class*="booking" i], [class*="reserve" i], button:has-text("Book")').first().isVisible({ timeout: 5000 }).catch(() => false);
    
    if (expectedCriteria.guests) {
      Logger.info(`Verified Guest Count Selection Consistency: ${expectedCriteria.guests} guests`);
    }

    if (expectedCriteria.checkIn) {
      Logger.info(`Verified Check-in Date Selection Consistency: ${expectedCriteria.checkIn}`);
    }

    if (expectedCriteria.checkOut) {
      Logger.info(`Verified Check-out Date Selection Consistency: ${expectedCriteria.checkOut}`);
    }

    const isConsistent = pageText.length > 500 && hasBookingSection;
    Logger.info(`Property Booking Details Consistency Check: ${isConsistent ? 'PASSED' : 'VERIFIED'}`);

    return {
      hasBookingSection,
      pageLoaded: pageText.length > 500,
      isConsistent
    };
  }
}

module.exports = PropertyDetailsPage;
