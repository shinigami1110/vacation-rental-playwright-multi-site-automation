const BasePage = require('./BasePage');
const Logger = require('../utils/logger');

class NavigationPage extends BasePage {
  constructor(page, siteConfig) {
    super(page, siteConfig);
  }

  /**
   * Interact with destination or category navigation menu and confirm options are populated
   * @returns {Promise<Array<{text: string, href: string}>>}
   */
  async getCategoryNavigationOptions() {
    Logger.step(`[TC4] Interacting with navigation component and verifying options population on ${this.siteConfig.name}`);
    await this.dismissOverlays();

    // Hover or click menu if dropdown
    const destMenu = this.page.locator('header button:has-text("Destinations"), header button:has-text("Collections"), header nav button').first();
    if (await destMenu.isVisible({ timeout: 2000 }).catch(() => false)) {
      await destMenu.hover().catch(() => {});
    }

    const options = await this.page.evaluate(() => {
      const links = Array.from(document.querySelectorAll('header a, nav a, [class*="category"] a'));
      return links
        .map(a => ({ text: a.innerText.trim(), href: a.href }))
        .filter(l => l.text.length > 0 && !l.href.endsWith('#'));
    });
    
    Logger.info(`[TC4] Discovered ${options.length} populated navigation options for ${this.siteConfig.name}`);
    options.slice(0, 8).forEach((opt, i) => Logger.info(`[Nav Item ${i+1}] ${opt.text} -> ${opt.href}`));

    return options;
  }

  /**
   * Navigate to a destination or category page
   * @param {string} categoryName 
   */
  async navigateToCategory(categoryName = '') {
    Logger.step(`[TC4] Navigating to destination/category page: "${categoryName || 'Category'}"`);
    await this.dismissOverlays();

    if (categoryName) {
      const catLink = this.page.locator(`header a:has-text("${categoryName}"), nav a:has-text("${categoryName}"), a:has-text("${categoryName}")`).first();
      if (await catLink.isVisible({ timeout: 4000 }).catch(() => false)) {
        await catLink.click({ force: true });
        await this.waitForLoad();
        return;
      }
    }

    // Fallback category path (e.g. /category/pool or /listings)
    const targetUrl = `${this.siteConfig.baseUrl}${this.siteConfig.sampleCategoryPath || '/listings'}`;
    await this.navigateTo(targetUrl);
    await this.waitForLoad();
  }
}

module.exports = NavigationPage;
