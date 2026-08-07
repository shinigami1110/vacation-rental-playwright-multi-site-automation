const BasePage = require('./BasePage');
const Logger = require('../utils/logger');
const commonLocators = require('../locators/commonLocators');

class HomePage extends BasePage {
  constructor(page, siteConfig) {
    super(page, siteConfig);
  }

  async open() {
    Logger.step(`Opening home page for ${this.siteConfig.name || 'Website'}`, this.page.testInfo);
    await this.navigateTo(this.siteConfig.baseUrl);
    await this.waitForLoad();
  }

  /**
   * Execute basic destination search
   * @param {string} destination 
   */
  async searchDestination(destination) {
    Logger.step(`Searching destination: "${destination}"`);
    const searchInput = this.page.locator(commonLocators.search.destinationInput).first();
    if (await searchInput.isVisible({ timeout: 5000 }).catch(() => false)) {
      await this.safeFill(searchInput, destination, 'Destination Input');
      await this.page.keyboard.press('Enter');
    } else {
      Logger.warn(`Direct destination input not found on home hero, navigating to listings page`);
      await this.navigateTo(`${this.siteConfig.baseUrl}/listings`);
    }
    await this.waitForLoad();
  }
}

module.exports = HomePage;
