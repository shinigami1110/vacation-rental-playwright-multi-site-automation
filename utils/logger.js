/**
 * Custom Logger Utility
 * Standardized logging with timestamps and integration with Playwright test steps.
 * Emojis omitted for clean terminal output.
 */

class Logger {
  static getTimestamp() {
    return new Date().toISOString();
  }

  /**
   * Log a major step header (attached to test report step if testInfo provided)
   * @param {string} message 
   * @param {import('@playwright/test').TestInfo} [testInfo] 
   */
  static step(message, testInfo = null) {
    const formatted = `[${this.getTimestamp()}] [STEP] ${message}`;
    console.log(formatted);
    if (testInfo && testInfo.annotations) {
      testInfo.annotations.push({ type: 'STEP', description: message });
    }
  }

  /**
   * Log an informational message
   * @param {string} message 
   */
  static info(message) {
    console.log(`[${this.getTimestamp()}] [INFO] ${message}`);
  }

  /**
   * Log a warning message
   * @param {string} message 
   */
  static warn(message) {
    console.warn(`[${this.getTimestamp()}] [WARN] ${message}`);
  }

  /**
   * Log an error message
   * @param {string} message 
   */
  static error(message) {
    console.error(`[${this.getTimestamp()}] [ERROR] ${message}`);
  }
}

module.exports = Logger;
