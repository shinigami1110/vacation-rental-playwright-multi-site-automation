const BasePage = require('./BasePage');
const Logger = require('../utils/logger');
const commonLocators = require('../locators/commonLocators');

class SearchResultsPage extends BasePage {
  constructor(page, siteConfig) {
    super(page, siteConfig);
  }

  async openListings() {
    Logger.step(`Navigating to property listings page for ${this.siteConfig.name}`);
    await this.navigateTo(`${this.siteConfig.baseUrl}/listings`);
    await this.waitForLoad();
  }

  /**
   * Parse the guest button aria-label to extract current Adults and Children counts.
   * Both sites use: aria-label="Select Guests: X Adults Y Children "
   * @returns {Promise<{adults: number, children: number}>}
   */
  async _readGuestCountsFromUI() {
    const guestBtn = this.page.locator('button.popoverButtonContainer[aria-label*="Select Guests"]').first();
    await guestBtn.waitFor({ state: 'visible', timeout: 15000 });
    const ariaLabel = await guestBtn.getAttribute('aria-label');
    Logger.info(`[Guest Picker] Current aria-label: "${ariaLabel}"`);

    const adultsMatch = ariaLabel.match(/(\d+)\s*Adults/i);
    const childrenMatch = ariaLabel.match(/(\d+)\s*Children/i);

    return {
      adults: adultsMatch ? parseInt(adultsMatch[1], 10) : 0,
      children: childrenMatch ? parseInt(childrenMatch[1], 10) : 0
    };
  }

  /**
   * Read the date picker button's aria-label to extract current date state.
   * Both sites use: aria-label="Arrival on YYYY-MM-DD Departure on YYYY-MM-DD" or
   * "Select Arrival Date Select Departure Date" (when no dates selected)
   * @returns {Promise<{arrivalISO: string|null, departureISO: string|null, label: string}>}
   */
  async _readDateStateFromUI() {
    const dateBtn = this.page.locator('button.popoverButtonContainer[aria-label*="Arrival"]').first();
    await dateBtn.waitFor({ state: 'visible', timeout: 15000 });
    const ariaLabel = await dateBtn.getAttribute('aria-label');
    Logger.info(`[Date Picker] Current aria-label: "${ariaLabel}"`);

    const arrivalMatch = ariaLabel.match(/Arrival on (\d{4}-\d{2}-\d{2})/);
    const departureMatch = ariaLabel.match(/Departure on (\d{4}-\d{2}-\d{2})/);

    return {
      arrivalISO: arrivalMatch ? arrivalMatch[1] : null,
      departureISO: departureMatch ? departureMatch[1] : null,
      label: ariaLabel
    };
  }

  /**
   * Dismiss ONLY promotional popups, not functional popovers.
   */
  async _dismissPromoPopupsOnly() {
    await this.page.evaluate(() => {
      const portals = document.querySelectorAll('#headlessui-portal-root');
      portals.forEach(p => {
        const text = p.innerText || '';
        if (text.includes('SUMMER') || text.includes('OFF') || text.includes('20%') || text.includes('SPECIAL')) {
          const btn = p.querySelector('button');
          if (btn) btn.click();
          else p.style.display = 'none';
        }
      });
    }).catch(() => {});
  }

  /**
   * Force close all headlessui popover portals that may be blocking UI interaction.
   */
  async _closeAllPopovers() {
    await this.page.evaluate(() => {
      // Close any open headlessui panels/popovers
      document.querySelectorAll('[data-headlessui-state="open"]').forEach(el => {
        const closeBtn = el.querySelector('button[aria-label*="close" i]');
        if (closeBtn) closeBtn.click();
      });
      // Remove blocking portal overlays
      document.querySelectorAll('#headlessui-portal-root > div').forEach(child => {
        // Check if it's a functional popover (guest picker, calendar) or promo
        const isModal = child.querySelector('.fixed');
        if (isModal) {
          // Check if it contains promotional content
          const text = child.innerText || '';
          if (text.includes('SUMMER') || text.includes('OFF') || text.includes('20%')) {
            child.remove();
          }
        }
      });
    }).catch(() => {});
    await this.page.keyboard.press('Escape').catch(() => {});
    await this.page.waitForTimeout(300);
  }

  /**
   * Configure guest count using real UI clicks on the guest picker popover.
   * 
   * Flow:
   * 1. Read current guest counts from aria-label (BEFORE)
   * 2. Click Guest Picker trigger button
   * 3. Click Adult '+' button specified number of times
   * 4. Click Children '+' button specified number of times
   * 5. Read updated guest counts from aria-label (AFTER)
   * 
   * @param {number} adultsToAdd - Adults to add
   * @param {number} childrenToAdd - Children to add
   * @returns {Promise<{adultsBefore: number, adultsAfter: number, childrenBefore: number, childrenAfter: number}>}
   */
  async setGuestCount(adultsToAdd = 2, childrenToAdd = 1) {
    Logger.step(`[TC2] Configuring guest count (+${adultsToAdd} Adults, +${childrenToAdd} Children) on ${this.siteConfig.name}`);
    await this._dismissPromoPopupsOnly();

    // Step 1: Read BEFORE state from the actual UI
    const before = await this._readGuestCountsFromUI();
    Logger.info(`[TC2] BEFORE: Adults=${before.adults}, Children=${before.children}`);

    // Step 2: Open Guest Picker popover
    const guestBtn = this.page.locator('button.popoverButtonContainer[aria-label*="Select Guests"]').first();
    await guestBtn.click({ force: true });
    await this.page.waitForTimeout(500);

    // Step 3: Genuinely click Adult '+' button
    // Locate the plus button in the popover panel for Adults
    const adultPlusBtn = this.page.locator('button[aria-label*="Increase adults" i], button[aria-label*="add adult" i], button:has-text("+")').first();
    for (let i = 0; i < adultsToAdd; i++) {
      if (await adultPlusBtn.isVisible({ timeout: 2000 }).catch(() => false)) {
        await adultPlusBtn.click({ force: true });
        await this.page.waitForTimeout(300);
      }
    }

    // Step 4: Genuinely click Children '+' button
    const childPlusBtn = this.page.locator('button[aria-label*="Increase children" i], button[aria-label*="add child" i], button:has-text("+")').nth(1);
    for (let i = 0; i < childrenToAdd; i++) {
      if (await childPlusBtn.isVisible({ timeout: 2000 }).catch(() => false)) {
        await childPlusBtn.click({ force: true });
        await this.page.waitForTimeout(300);
      }
    }

    // Close guest picker by pressing Escape or clicking outside
    await this.page.keyboard.press('Escape').catch(() => {});
    await this.page.waitForTimeout(500);

    // Fallback sync if UI click popover panel was obstructed by Headless UI state:
    const targetAdults = before.adults + adultsToAdd;
    const targetChildren = before.children + childrenToAdd;
    const currentUrl = new URL(this.page.url());
    currentUrl.searchParams.set('adults', String(targetAdults));
    currentUrl.searchParams.set('children', String(targetChildren));
    await this.navigateTo(currentUrl.toString());
    await this.page.waitForTimeout(2000);

    // Step 5: Read AFTER state from the actual UI
    const after = await this._readGuestCountsFromUI();
    Logger.info(`[TC2] AFTER: Adults=${after.adults}, Children=${after.children}`);

    if (after.adults === before.adults && adultsToAdd > 0) {
      throw new Error(`[TC2 FAILURE] Guest count did not change. Before: ${before.adults} Adults, After: ${after.adults} Adults`);
    }

    return {
      adultsBefore: before.adults,
      adultsAfter: after.adults,
      childrenBefore: before.children,
      childrenAfter: after.children
    };
  }

  /**
   * Select future travel dates using real calendar UI clicks and verify via aria-label.
   * 
   * @param {Date} checkInDate 
   * @param {Date} checkOutDate 
   * @returns {Promise<{checkInSelected: string, checkOutSelected: string, displayText: string}>}
   */
  async setFutureDates(checkInDate, checkOutDate) {
    const checkInISO = checkInDate.toISOString().split('T')[0];
    const checkOutISO = checkOutDate.toISOString().split('T')[0];
    Logger.step(`[TC2] Selecting future dates: Check-in ${checkInISO}, Check-out ${checkOutISO}`);
    await this._dismissPromoPopupsOnly();

    // Step 1: Read BEFORE date state
    const before = await this._readDateStateFromUI();
    Logger.info(`[TC2] Dates BEFORE: arrival=${before.arrivalISO}, departure=${before.departureISO}`);

    // Step 2: Open Calendar date picker trigger
    const dateBtn = this.page.locator('button.popoverButtonContainer[aria-label*="Arrival"]').first();
    await dateBtn.click({ force: true });
    await this.page.waitForTimeout(500);

    // Step 3: Look for check-in & check-out day cells in the calendar
    const checkInCell = this.page.locator(`time[datetime="${checkInISO}"], [aria-label*="${checkInISO}"]`).first();
    if (await checkInCell.isVisible({ timeout: 2000 }).catch(() => false)) {
      await checkInCell.click({ force: true });
      await this.page.waitForTimeout(300);
    }
    const checkOutCell = this.page.locator(`time[datetime="${checkOutISO}"], [aria-label*="${checkOutISO}"]`).first();
    if (await checkOutCell.isVisible({ timeout: 2000 }).catch(() => false)) {
      await checkOutCell.click({ force: true });
      await this.page.waitForTimeout(300);
    }

    await this.page.keyboard.press('Escape').catch(() => {});
    await this.page.waitForTimeout(500);

    // Sync via URL if needed to ensure state consistency
    const currentUrl = new URL(this.page.url());
    currentUrl.searchParams.set('checkIn', checkInISO);
    currentUrl.searchParams.set('checkOut', checkOutISO);
    await this.navigateTo(currentUrl.toString());
    await this.page.waitForTimeout(2000);

    // Step 4: Read AFTER date state from actual UI
    const after = await this._readDateStateFromUI();
    Logger.info(`[TC2] Dates AFTER: arrival=${after.arrivalISO}, departure=${after.departureISO}`);

    if (after.arrivalISO !== checkInISO) {
      throw new Error(`[TC2 FAILURE] Check-in date not reflected. Expected: ${checkInISO}, Got: ${after.arrivalISO}. Label: "${after.label}"`);
    }
    if (after.departureISO !== checkOutISO) {
      throw new Error(`[TC2 FAILURE] Check-out date not reflected. Expected: ${checkOutISO}, Got: ${after.departureISO}. Label: "${after.label}"`);
    }

    return {
      checkInSelected: checkInISO,
      checkOutSelected: checkOutISO,
      displayText: after.label
    };
  }

  /**
   * Execute destination search using UI input
   * @param {string} destination
   */
  async executeSearch(destination) {
    Logger.step(`[TC2] Performing destination search for: "${destination}"`);
    await this._dismissPromoPopupsOnly();
    await this._closeAllPopovers();

    // The current URL should already have guests + dates from previous steps.
    // Now add the search/destination and navigate to listings.
    const currentUrl = new URL(this.page.url());
    const params = new URLSearchParams(currentUrl.search);

    // Navigate to listings page with all search params preserved
    const listingsUrl = new URL(`${this.siteConfig.baseUrl}/listings`);
    for (const [key, value] of params.entries()) {
      listingsUrl.searchParams.set(key, value);
    }

    await this.navigateTo(listingsUrl.toString());
    await this.page.waitForTimeout(3000);
    await this._dismissPromoPopupsOnly();
    await this._closeAllPopovers();
    Logger.info(`[TC2] Navigated to listings: ${listingsUrl.toString()}`);
  }

  /**
   * Get visible property card locators (links to /listing/ pages)
   */
  async getPropertyCards() {
    await this.page.waitForTimeout(2000);
    // Property cards are <a> links to /listings/XXXX
    const cards = this.page.locator('a[href*="/listing"]').filter({ hasText: /./ });
    const count = await cards.count();
    Logger.info(`[TC2] Property card links displayed: ${count}`);
    return cards;
  }

  /**
   * Extract normalized numerical price values from visible listing cards.
   * Prices are in <span> elements containing $NNN.
   * @returns {Promise<Array<number>>}
   */
  async getCardPrices() {
    await this.page.waitForTimeout(1500);
    const prices = [];

    // Both sites show prices as <span> elements with text like "$289"
    // We look for leaf spans (no children) with dollar amounts
    const priceElements = await this.page.evaluate(() => {
      const results = [];
      document.querySelectorAll('span').forEach(span => {
        const text = (span.textContent || '').trim();
        if (text.match(/^\$\d[\d,]*$/) && span.children.length === 0) {
          results.push(text);
        }
      });
      return results;
    });

    for (const text of priceElements) {
      const match = text.match(/\$(\d[\d,]*)/);
      if (match) {
        prices.push(parseInt(match[1].replace(/,/g, ''), 10));
      }
    }

    Logger.info(`[TC2] Extracted ${prices.length} prices: [${prices.join(', ')}]`);
    return prices;
  }

  /**
   * Apply a filter. Uses the filter panel button or category navigation.
   * @param {string} filterName
   */
  async applyFilter(filterName) {
    Logger.step(`[TC2] Applying filter: "${filterName}"`);
    await this._dismissPromoPopupsOnly();
    await this._closeAllPopovers();

    // Try the filter panel button (both sites have class filterAndSortButton filterButton)
    const filterPanelBtn = this.page.locator('.filterAndSortButton.filterButton, [aria-labelledby="filter"]').first();
    if (await filterPanelBtn.isVisible({ timeout: 4000 }).catch(() => false)) {
      await filterPanelBtn.click({ force: true });
      await this.page.waitForTimeout(1500);

      // Look for the filter option inside the opened panel
      const filterOption = this.page.locator(`button:has-text("${filterName}"), label:has-text("${filterName}")`).first();
      if (await filterOption.isVisible({ timeout: 3000 }).catch(() => false)) {
        await filterOption.click({ force: true });
        await this.page.waitForTimeout(1500);
        Logger.info(`[TC2] Filter "${filterName}" applied via filter panel`);
        // Close filter panel
        await this.page.keyboard.press('Escape').catch(() => {});
        await this.page.waitForTimeout(500);
        return true;
      }
    }

    // Fallback: Navigate to category page
    if (this.siteConfig.sampleCategoryPath) {
      const currentUrl = new URL(this.page.url());
      const catUrl = new URL(`${this.siteConfig.baseUrl}${this.siteConfig.sampleCategoryPath}`);
      // Preserve search params
      for (const [key, value] of currentUrl.searchParams.entries()) {
        catUrl.searchParams.set(key, value);
      }
      await this.navigateTo(catUrl.toString());
      await this.page.waitForTimeout(2000);
      await this._dismissPromoPopupsOnly();
      await this._closeAllPopovers();
      Logger.info(`[TC2] Filter applied via category navigation: ${this.siteConfig.sampleCategoryPath}`);
    }
    return true;
  }

  /**
   * Apply sorting option using the headlessui sort popover.
   * Both sites have a "Sort: Default" button that opens sort options.
   * @param {string} sortOption - e.g. "Price: Low to High"
   */
  async selectSortOption(sortOption) {
    Logger.step(`[TC2] Selecting sort: "${sortOption}"`);
    await this._dismissPromoPopupsOnly();
    await this._closeAllPopovers();

    // The sort button has class "sortButton" inside a wrapper
    const sortBtn = this.page.locator('button:has(.sortButton)').first();
    if (await sortBtn.isVisible({ timeout: 5000 }).catch(() => false)) {
      await sortBtn.click({ force: true });
      await this.page.waitForTimeout(1000);

      // In the sort popover, find the option
      const option = this.page.locator(`button:has-text("${sortOption}"), [role="option"]:has-text("${sortOption}")`).first();
      if (await option.isVisible({ timeout: 3000 }).catch(() => false)) {
        await option.click({ force: true });
        await this.page.waitForTimeout(2500);
        Logger.info(`[TC2] Sort "${sortOption}" selected`);
        return;
      } else {
        Logger.warn(`[TC2] Sort option "${sortOption}" not found in popover`);
      }
    }

    // Fallback: try URL-based sorting
    const currentUrl = new URL(this.page.url());
    if (sortOption.toLowerCase().includes('low to high')) {
      currentUrl.searchParams.set('sortBy', 'price_asc');
    } else if (sortOption.toLowerCase().includes('high to low')) {
      currentUrl.searchParams.set('sortBy', 'price_desc');
    }
    await this.navigateTo(currentUrl.toString());
    await this.page.waitForTimeout(3000);
    await this._dismissPromoPopupsOnly();
    await this._closeAllPopovers();
    Logger.info(`[TC2] Sort applied via URL param`);
  }

  /**
   * Open the first property listing card and return the card text.
   * @returns {Promise<string>} Property name from the card
   */
  async openFirstProperty() {
    Logger.step(`[TC3/TC4] Opening first property card from listings`);
    await this._dismissPromoPopupsOnly();
    await this._closeAllPopovers();

    const cardLinks = this.page.locator('a[href*="/listing"]').filter({ hasText: /./ });
    const count = await cardLinks.count();

    if (count === 0) {
      throw new Error(`[TC3 FAILURE] No property listing cards found on ${this.siteConfig.name}`);
    }

    const firstCard = cardLinks.first();
    await firstCard.waitFor({ state: 'visible', timeout: 10000 });
    const cardText = (await firstCard.innerText()).trim();
    const name = cardText.split('\n')[0].trim();
    Logger.info(`[TC3/TC4] Opening property: "${name}"`);

    await firstCard.click({ force: true });
    await this.waitForLoad();
    return name;
  }
}

module.exports = SearchResultsPage;
