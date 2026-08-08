const BasePage = require('./BasePage');
const Logger = require('../utils/logger');

class PropertyDetailsPage extends BasePage {
  constructor(page, siteConfig) {
    super(page, siteConfig);
  }

  /**
   * Get Property Name from the detail page title header.
   * Fails if the element is empty.
   * @returns {Promise<string>}
   */
  async getPropertyName() {
    Logger.step(`[TC3] Reading property name from detail page on ${this.siteConfig.name}`);
    await this.dismissOverlays();

    const name = await this.page.evaluate(() => {
      const headings = Array.from(document.querySelectorAll('h1, h2, h3, [class*="title" i], [class*="property-name" i]'));
      for (const h of headings) {
        const text = (h.innerText || '').trim();
        if (text && text.length > 2 && !text.toLowerCase().includes('vacation rentals by')) {
          return text;
        }
      }
      return document.title || '';
    });

    if (!name) {
      throw new Error(`[TC3 FAILURE] Property name title header was empty on ${this.siteConfig.name}`);
    }

    Logger.info(`[TC3] Property page title: "${name}"`);
    return name;
  }

  /**
   * Extract actual booking/search criteria shown on the property detail page.
   * Reads the search bar's guest button aria-label and date button aria-label
   * from the property page (the same search bar persists across pages).
   * Compares extracted values against the expected search criteria.
   * 
   * @param {Object} expectedCriteria - { adults: number, children: number, checkInISO: string, checkOutISO: string }
   * @returns {Promise<{actualGuests: string, actualDates: string, guestsConsistent: boolean, datesConsistent: boolean, pageLoaded: boolean}>}
   */
  async verifyBookingDetails(expectedCriteria = {}) {
    Logger.step(`[TC3] Verifying booking criteria consistency on property page`);
    await this.dismissOverlays();

    // Remove popup suppression so headlessui elements are readable
    await this.page.evaluate(() => {
      const suppressStyle = document.getElementById('suppress-promo-popups');
      if (suppressStyle) suppressStyle.remove();
    }).catch(() => {});

    const pageText = await this.page.innerText('body');
    const pageLoaded = pageText.length > 300;

    // Read the guest picker button's aria-label on this page
    let actualGuests = '';
    const guestBtn = this.page.locator('button.popoverButtonContainer[aria-label*="Select Guests"]').first();
    if (await guestBtn.isVisible({ timeout: 5000 }).catch(() => false)) {
      actualGuests = await guestBtn.getAttribute('aria-label');
      Logger.info(`[TC3] Property page guest picker aria-label: "${actualGuests}"`);
    } else {
      Logger.warn(`[TC3] Guest picker button not found on property page`);
    }

    // Read the date picker button's aria-label on this page
    let actualDates = '';
    const dateBtn = this.page.locator('button.popoverButtonContainer[aria-label*="Arrival"]').first();
    if (await dateBtn.isVisible({ timeout: 5000 }).catch(() => false)) {
      actualDates = await dateBtn.getAttribute('aria-label');
      Logger.info(`[TC3] Property page date picker aria-label: "${actualDates}"`);
    } else {
      Logger.warn(`[TC3] Date picker button not found on property page`);
    }

    // Check consistency: does the property page reflect the search criteria?
    let guestsConsistent = false;
    if (actualGuests && expectedCriteria.adults !== undefined) {
      const adultsMatch = actualGuests.match(/(\d+)\s*Adults/i);
      const childrenMatch = actualGuests.match(/(\d+)\s*Children/i);
      const actualAdults = adultsMatch ? parseInt(adultsMatch[1], 10) : 0;
      const actualChildren = childrenMatch ? parseInt(childrenMatch[1], 10) : 0;

      guestsConsistent = (actualAdults === expectedCriteria.adults) &&
                          (actualChildren === expectedCriteria.children);

      Logger.info(`[TC3] Guest consistency: expected=${expectedCriteria.adults}A/${expectedCriteria.children}C, actual=${actualAdults}A/${actualChildren}C, match=${guestsConsistent}`);
    }

    let datesConsistent = false;
    if (actualDates && expectedCriteria.checkInISO) {
      datesConsistent = actualDates.includes(expectedCriteria.checkInISO) &&
                        actualDates.includes(expectedCriteria.checkOutISO);

      Logger.info(`[TC3] Date consistency: expected CI=${expectedCriteria.checkInISO} CO=${expectedCriteria.checkOutISO}, label="${actualDates}", match=${datesConsistent}`);
    }

    // Also check for a booking widget / reserve button on the property page
    const bookingWidget = this.page.locator('form, [class*="booking" i], [class*="reserve" i], button:has-text("Book"), button:has-text("Reserve"), button:has-text("Request")').first();
    const hasBookingSection = await bookingWidget.isVisible({ timeout: 5000 }).catch(() => false);
    Logger.info(`[TC3] Booking widget/form visible: ${hasBookingSection}`);

    return {
      actualGuests,
      actualDates,
      guestsConsistent,
      datesConsistent,
      hasBookingSection,
      pageLoaded
    };
  }
}

module.exports = PropertyDetailsPage;
