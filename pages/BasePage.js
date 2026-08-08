const Logger = require('../utils/logger');
const ScreenshotHelper = require('../utils/screenshotHelper');

/**
 * Base Page Object
 * Parent class for all Page Objects providing resilient actions, logging, popup dismissal, and error diagnostics.
 */
class BasePage {
  /**
   * @param {import('@playwright/test').Page} page 
   * @param {Object} [siteConfig] 
   */
  constructor(page, siteConfig = {}) {
    this.page = page;
    this.siteConfig = siteConfig;
  }

  /**
   * Dismiss popups, promo modals, and cookie banners automatically
   */
  async dismissOverlays() {
    try {
      // Accept Cookie Banner if present
      const cookieAcceptBtn = this.page.locator('button:has-text("ACCEPT"), button:has-text("Accept"), button:has-text("Allow All")').first();
      if (await cookieAcceptBtn.isVisible({ timeout: 500 }).catch(() => false)) {
        await cookieAcceptBtn.click({ force: true }).catch(() => {});
        Logger.info('Dismissed cookie consent banner');
      }

      // Close Promotional Modal Popup if present (only when text indicates promo popup)
      await this.page.evaluate(() => {
        const portalRoots = document.querySelectorAll('#headlessui-portal-root');
        portalRoots.forEach(portal => {
          const text = portal.innerText || '';
          if (text.includes('SUMMER') || text.includes('OFF') || text.includes('20%') || text.includes('SPECIAL')) {
            const closeBtn = portal.querySelector('button[aria-label*="close" i], button:has-text("X"), button:has-text("×")');
            if (closeBtn) closeBtn.click();
            else portal.style.display = 'none';
          }
        });
      }).catch(() => {});
    } catch (e) {
      // Non-blocking popup helper
    }
  }

  /**
   * Navigate to a URL with fallback for live production network latency
   * @param {string} url 
   */
  async navigateTo(url) {
    Logger.info(`Navigating to: ${url}`);
    try {
      await this.page.goto(url, { waitUntil: 'domcontentloaded', timeout: 45000 });
    } catch (err) {
      Logger.warn(`Initial navigation latency for ${url}, attempting commit retry...`);
      await this.page.goto(url, { waitUntil: 'commit', timeout: 45000 });
    }
    await this.dismissOverlays();
  }

  /**
   * Click an element safely with element highlighting and diagnostic error reporting
   * @param {import('@playwright/test').Locator | string} selector 
   * @param {string} elementName 
   */
  async safeClick(selector, elementName = 'Element') {
    await this.dismissOverlays();
    const locator = typeof selector === 'string' ? this.page.locator(selector).first() : selector;
    Logger.info(`Clicking ${elementName}`);
    try {
      await locator.waitFor({ state: 'visible', timeout: 10000 });
      await locator.click({ force: true });
    } catch (err) {
      Logger.error(`Failed action on ${elementName}: ${err.message}`);
      await ScreenshotHelper.captureDiagnosticScreenshot(this.page, `failed_click_${elementName.replace(/\s+/g, '_')}`, locator);
      throw err;
    }
  }

  /**
   * Fill text into an input field with element highlighting and diagnostic error reporting
   * @param {import('@playwright/test').Locator | string} selector 
   * @param {string} value 
   * @param {string} elementName 
   */
  async safeFill(selector, value, elementName = 'Input Field') {
    await this.dismissOverlays();
    const locator = typeof selector === 'string' ? this.page.locator(selector).first() : selector;
    Logger.info(`Filling ${elementName} with value: "${value}"`);
    try {
      await locator.waitFor({ state: 'visible', timeout: 10000 });
      await locator.fill(value);
    } catch (err) {
      Logger.error(`Failed action on ${elementName}: ${err.message}`);
      await ScreenshotHelper.captureDiagnosticScreenshot(this.page, `failed_fill_${elementName.replace(/\s+/g, '_')}`, locator);
      throw err;
    }
  }

  /**
   * Get text content of an element
   * @param {import('@playwright/test').Locator | string} selector 
   * @returns {Promise<string>}
   */
  async getText(selector) {
    const locator = typeof selector === 'string' ? this.page.locator(selector).first() : selector;
    await locator.waitFor({ state: 'visible', timeout: 10000 });
    return (await locator.innerText()).trim();
  }

  /**
   * Highlight element visually with red outline
   * @param {import('@playwright/test').Locator} locator 
   */
  async highlight(locator) {
    await ScreenshotHelper.highlightElement(locator);
  }

  /**
   * Wait for page load state
   */
  async waitForLoad() {
    await this.page.waitForLoadState('domcontentloaded').catch(() => {});
    await this.dismissOverlays();
  }
}

module.exports = BasePage;
