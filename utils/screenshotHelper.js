/**
 * Failure Screenshot & Visual Element Highlighter Utility
 * Highlights target elements with a visible border before capturing failure diagnostics.
 */

class ScreenshotHelper {
  /**
   * Highlight an element visually in red border
   * @param {import('@playwright/test').Locator} locator 
   */
  static async highlightElement(locator) {
    try {
      if (await locator.isVisible()) {
        await locator.evaluate((el) => {
          el.style.outline = '4px solid red';
          el.style.backgroundColor = 'rgba(255, 0, 0, 0.2)';
          el.style.transition = 'all 0.3s ease';
        });
      }
    } catch (e) {
      // Element might be detached, suppress non-critical style injection error
    }
  }

  /**
   * Capture a failure screenshot with highlighted target element
   * @param {import('@playwright/test').Page} page 
   * @param {string} screenshotName 
   * @param {import('@playwright/test').Locator} [targetLocator] 
   */
  static async captureDiagnosticScreenshot(page, screenshotName, targetLocator = null) {
    if (targetLocator) {
      await this.highlightElement(targetLocator);
    }
    return await page.screenshot({
      path: `./screenshots/${screenshotName}_${Date.now()}.png`,
      fullPage: false
    });
  }
}

module.exports = ScreenshotHelper;
