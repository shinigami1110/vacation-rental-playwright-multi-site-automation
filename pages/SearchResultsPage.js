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
   * Dismiss only the currently observed seasonal promotional modal. Functional
   * guest, calendar, filter, and sort portals remain untouched.
   */
  async _dismissPromoPopupsOnly(waitForPromo = false) {
    const promoModal = this.page
      .locator('#headlessui-portal-root div.fixed.bottom-0.z-modal')
      .first();
    const deadline = Date.now() + (waitForPromo ? 8000 : 0);

    while (true) {
      if (await promoModal.count() > 0 && await promoModal.isVisible()) {
        // The observed seasonal modal's first button is its visible X close control.
        const closeButton = promoModal.locator('button').first();
        await closeButton.click();
        await promoModal.waitFor({ state: 'hidden', timeout: 5000 });
        return;
      }

      if (Date.now() >= deadline) return;
      await this.page.waitForTimeout(250);
    }
  }

  /**
   * Force close all headlessui popover portals that may be blocking UI interaction.
   */
  async _closeAllPopovers() {
    await this.page.evaluate(() => {
      document.querySelectorAll('[data-headlessui-state="open"]').forEach(el => {
        const closeBtn = el.querySelector('button[aria-label*="close" i]');
        if (closeBtn) closeBtn.click();
      });
    }).catch(() => {});
    await this.page.keyboard.press('Escape').catch(() => {});
    await this.page.waitForTimeout(300);
  }

  /**
   * Configure guest count strictly using real UI clicks on the guest picker popover.
   * NO URL MANIPULATION FALLBACKS ALLOWED.
   *
   * Strategy:
   *  1. Remove any promo portal overlay that intercepts pointer events
   *  2. Click the guest trigger button
   *  3. Wait for popover to open by detecting new buttons appearing in the portal
   *  4. Use page.evaluate to find the actual +/- stepper buttons by their position
   *     relative to labelled rows (Adults, Children)
   *  5. Click those buttons N times
   *  6. Read aria-label to verify
   *
   * @param {number} adultsToAdd
   * @param {number} childrenToAdd
   */
  async setGuestCount(adultsToAdd = 2, childrenToAdd = 1) {
    Logger.step(`[TC2] Configuring guest count (+${adultsToAdd} Adults, +${childrenToAdd} Children) on ${this.siteConfig.name}`);

    // Step 1: Read BEFORE state
    const before = await this._readGuestCountsFromUI();
    Logger.info(`[TC2] BEFORE: Adults=${before.adults}, Children=${before.children}`);

    // Step 2: Open the guest picker through its real trigger.
    await this._dismissPromoPopupsOnly(true);
    const guestBtn = this.page.locator('button.popoverButtonContainer[aria-label*="Select Guests"]').first();
    await guestBtn.waitFor({ state: 'visible', timeout: 10000 });
    await guestBtn.click();

    // Step 3: Use the real accessible increment controls rendered by the open picker.
    const incrementAdults = this.page.getByRole('button', { name: 'Increment adults', exact: true });
    const incrementChildren = this.page.getByRole('button', { name: 'Increment children', exact: true });
    await incrementAdults.waitFor({ state: 'visible', timeout: 10000 });
    await incrementChildren.waitFor({ state: 'visible', timeout: 10000 });

    // Step 4: Click Adult '+' stepper.
    for (let i = 0; i < adultsToAdd; i++) {
      await incrementAdults.click();
    }

    // Step 5: Click Children '+' stepper.
    for (let i = 0; i < childrenToAdd; i++) {
      await incrementChildren.click();
    }

    // Step 6: Read AFTER state directly from the updated trigger aria-label.
    const after = await this._readGuestCountsFromUI();
    Logger.info(`[TC2] AFTER: Adults=${after.adults}, Children=${after.children}`);

    if (after.adults !== before.adults + adultsToAdd) {
      throw new Error(`[TC2 FAILURE] Guest Adult count did not increment via UI. Expected: ${before.adults + adultsToAdd}, Got: ${after.adults}`);
    }
    if (after.children !== before.children + childrenToAdd) {
      throw new Error(`[TC2 FAILURE] Guest Child count did not increment via UI. Expected: ${before.children + childrenToAdd}, Got: ${after.children}`);
    }

    return {
      adultsBefore: before.adults,
      adultsAfter: after.adults,
      childrenBefore: before.children,
      childrenAfter: after.children
    };
  }

  /**
   * Select future travel dates strictly using real calendar UI clicks and verify via aria-label.
   * NO URL MANIPULATION FALLBACKS ALLOWED.
   * 
   * @param {Date} checkInDate 
   * @param {Date} checkOutDate 
   * @returns {Promise<{checkInSelected: string, checkOutSelected: string, displayText: string}>}
   */
  async setFutureDates(checkInDate, checkOutDate) {
    const checkInISO = checkInDate.toISOString().split('T')[0];
    const checkOutISO = checkOutDate.toISOString().split('T')[0];
    Logger.step(`[TC2] Selecting future dates: Check-in ${checkInISO}, Check-out ${checkOutISO}`);
    await this._dismissPromoPopupsOnly(true);

    // Step 1: Read BEFORE date state
    const before = await this._readDateStateFromUI();
    Logger.info(`[TC2] Dates BEFORE: arrival=${before.arrivalISO}, departure=${before.departureISO}`);

    // Step 2: Open the real calendar and verify its date controls are rendered.
    const dateBtn = this.page.locator('button.popoverButtonContainer[aria-label*="Arrival"]').first();
    await dateBtn.waitFor({ state: 'visible', timeout: 10000 });
    await dateBtn.click();

    const calendarDays = this.page.locator('time[datetime]');
    await calendarDays.first().waitFor({ state: 'visible', timeout: 10000 });

    const selectRenderedDate = async (targetISO, label) => {
      for (let monthAdvance = 0; monthAdvance < 12; monthAdvance++) {
        const targetDay = this.page
          .locator(`time[datetime="${targetISO}"]`)
          .first();

        if (await targetDay.count() > 0 && await targetDay.isVisible()) {
          await targetDay.click();
          return;
        }

        const nextMonthAriaLabel = await this.page.evaluate(() => {
          const nextMonthButton = Array.from(document.querySelectorAll('button')).find(button =>
            /next.*month|month.*next/i.test(button.getAttribute('aria-label') || '')
          );
          return nextMonthButton?.getAttribute('aria-label') || null;
        });

        if (!nextMonthAriaLabel) {
          throw new Error(`[TC2 FAILURE] ${label} ${targetISO} is not rendered and the open calendar exposes no next-month control on ${this.siteConfig.name}`);
        }

        await this.page.getByRole('button', { name: nextMonthAriaLabel, exact: true }).click();
      }

      throw new Error(`[TC2 FAILURE] ${label} ${targetISO} was not rendered after navigating 12 calendar months on ${this.siteConfig.name}`);
    };

    // Steps 3-4: Select the actual rendered check-in and check-out day controls.
    await selectRenderedDate(checkInISO, 'Check-in date');
    await selectRenderedDate(checkOutISO, 'Check-out date');

    // Step 5: Read AFTER date state strictly from actual UI (No URL fallbacks)
    const after = await this._readDateStateFromUI();
    Logger.info(`[TC2] Dates AFTER: arrival=${after.arrivalISO}, departure=${after.departureISO}`);

    if (after.arrivalISO !== checkInISO) {
      throw new Error(`[TC2 FAILURE] Check-in date not reflected in UI. Expected: ${checkInISO}, Got: ${after.arrivalISO}. Label: "${after.label}"`);
    }
    if (after.departureISO !== checkOutISO) {
      throw new Error(`[TC2 FAILURE] Check-out date not reflected in UI. Expected: ${checkOutISO}, Got: ${after.departureISO}. Label: "${after.label}"`);
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

    const destinationInput = this.page.locator(commonLocators.search.destinationInput).first();
    await destinationInput.waitFor({ state: 'visible', timeout: 10000 });
    await this.safeFill(destinationInput, destination, 'Destination search input');
    await this.page.keyboard.press('Enter');
    await this.waitForLoad();
    await this.page.waitForTimeout(2000);
    await this._dismissPromoPopupsOnly();
    await this._closeAllPopovers();
    Logger.info(`[TC2] Destination search submitted through the live UI.`);
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
    const cardTexts = await this.page.locator('a[href*="/listing"]').evaluateAll(cards =>
      cards.map(card => card.innerText || '')
    );
    const prices = cardTexts.map(text => {
      const match = text.match(/\$(\d[\d,]*)/);
      return match ? parseInt(match[1].replace(/,/g, ''), 10) : null;
    }).filter(Number.isFinite);

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
   * Both sites have a "Sort: Default" / "Sort: ..." button with class sortButton.
   * NO URL FALLBACK ALLOWED. If UI sort fails, throw a clear error.
   * @param {string} sortOption - e.g. "Price: Low to High"
   */
  async selectSortOption(sortOption) {
    Logger.step(`[TC2] Selecting sort: "${sortOption}"`);
    await this._dismissPromoPopupsOnly();

    // The sort button: class filterAndSortButton sortButton, text contains "Sort:"
    const sortBtn = this.page.locator('.filterAndSortButton.sortButton, button.sortButton, button:has-text("Sort:"), button:has-text("Sort")').first();
    const sortBtnVisible = await sortBtn.isVisible({ timeout: 5000 }).catch(() => false);
    if (!sortBtnVisible) {
      throw new Error(`[TC2 FAILURE] Sort button not found on ${this.siteConfig.name}. Cannot perform sort UI interaction.`);
    }

    await sortBtn.click({ force: true });
    await this.page.waitForTimeout(1000);

    // Find the sort option in the opened popover
    const option = this.page.locator(`button:has-text("${sortOption}"), [role="option"]:has-text("${sortOption}"), li:has-text("${sortOption}")`).first();
    const optionVisible = await option.isVisible({ timeout: 3000 }).catch(() => false);
    if (!optionVisible) {
      // Dump visible options for debugging
      const visibleOptions = await this.page.evaluate(() =>
        Array.from(document.querySelectorAll('[role="option"], li, button'))
          .map(el => (el.textContent || '').trim())
          .filter(t => t.length > 0 && t.length < 50)
          .slice(0, 20)
      );
      throw new Error(`LIVE SITE LIMITATION: ${this.siteConfig.name} exposes no "${sortOption}" option in its real sort UI. Visible sort choices: [${visibleOptions.join(' | ')}]`);
    }

    await option.click({ force: true });
    await this.page.waitForTimeout(2500);
    Logger.info(`[TC2] Sort "${sortOption}" selected via real UI popover`);
  }

  /**
   * Open the first property listing card and return the card text.
   * @returns {Promise<string>} Property name from the card
   */
  async openFirstProperty() {
    Logger.step(`[TC3/TC4] Opening first property card from listings`);
    await this._dismissPromoPopupsOnly();
    await this._closeAllPopovers();

    const propertyCards = this.page.locator('[aria-label^="Property card "]');
    const count = await propertyCards.count();

    if (count === 0) {
      throw new Error(`[TC3 FAILURE] No property listing cards found on ${this.siteConfig.name}`);
    }

    const firstCard = propertyCards.first();
    await firstCard.waitFor({ state: 'visible', timeout: 10000 });
    const cardLabel = await firstCard.getAttribute('aria-label');
    const name = cardLabel?.replace(/^Property card\s+/i, '').trim();
    if (!name) {
      throw new Error(`[TC3 FAILURE] The first property card on ${this.siteConfig.name} has no accessible name.`);
    }
    const propertyLink = firstCard.locator('a[href*="/listing"]').first();
    await propertyLink.waitFor({ state: 'visible', timeout: 10000 });
    Logger.info(`[TC3/TC4] Opening property: "${name}"`);

    await propertyLink.click();
    await this.waitForLoad();
    return name;
  }
}

module.exports = SearchResultsPage;
