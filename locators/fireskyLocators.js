/**
 * Firesky Retreats Specific Locators Overrides
 */
const fireskyLocators = {
  siteName: 'Firesky Retreats',
  navigation: {
    categoryLinks: 'header nav a[href*="category"], a[href*="category"]',
    favoritesLink: 'a[href*="favourites"], a[href*="favorites"]'
  },
  forms: {
    contactForm: 'form',
    submitBtn: 'button[type="submit"], input[type="submit"]'
  }
};

module.exports = fireskyLocators;
