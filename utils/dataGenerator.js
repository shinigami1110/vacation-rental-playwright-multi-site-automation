/**
 * Dynamic Data Generator Utility
 * Generates synthetic data for form validation and test assertions.
 */

class DataGenerator {
  /**
   * Generate invalid form payloads for TC5 form validation
   */
  static getInvalidFormData() {
    const timestamp = Date.now();
    return {
      empty: {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
      },
      invalidFormats: {
        firstName: 'TestUser',
        lastName: 'Automation',
        email: `invalid-email-${timestamp}`,
        phone: '123',
        message: 'Testing form validation with invalid email format.'
      }
    };
  }

  /**
   * Generate valid guest search parameters
   */
  static getSearchCriteria(siteKey = 'aliceLodging') {
    return {
      destination: siteKey === 'aliceLodging' ? 'Palm Springs' : 'Scottsdale',
      adults: 2,
      children: 1,
      totalGuests: 3
    };
  }
}

module.exports = DataGenerator;
