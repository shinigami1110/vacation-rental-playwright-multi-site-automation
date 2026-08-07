/**
 * Shared Standard & Accessible Locators
 * Shared across both Alice Lodging and Firesky Retreats platforms.
 */

const commonLocators = {
  header: {
    logo: 'header a[href="/"], header img, nav a[href="/"]',
    navLinks: 'header nav a, header a, nav a',
    contactLink: 'a[href*="contact"]',
    listWithUsLink: 'a[href*="list-with-us"]'
  },
  footer: {
    footerContainer: 'footer, [class*="footer"]',
    allLinks: 'footer a, [class*="footer"] a',
    socialLinks: 'footer a[href*="facebook"], footer a[href*="instagram"], footer a[href*="linkedin"], footer a[href*="twitter"], footer a[href*="youtube"]'
  },
  search: {
    destinationInput: 'input[placeholder*="destination" i], input[placeholder*="search" i], input[name*="location" i]',
    datePickerTrigger: 'button[class*="date" i], [class*="datepicker" i], [placeholder*="Check" i]',
    guestPickerTrigger: 'button[class*="guest" i], [class*="guest-picker" i]',
    searchButton: 'button:has-text("Search"), button[type="submit"]:has-text("Search"), [class*="search-btn"]'
  },
  listings: {
    cards: '[class*="card" i], [class*="property" i], [class*="listing-item" i]',
    propertyTitle: 'h2, h3, [class*="title" i]',
    sortDropdown: 'select[class*="sort" i], button[class*="sort" i], [id*="sort" i]',
    filterButton: 'button:has-text("Filter"), [class*="filter" i]'
  },
  propertyDetails: {
    title: 'h1, [class*="property-name" i]',
    bookingWidget: '[class*="booking" i], [class*="reservation" i], form',
    guestCount: '[class*="guest" i], [class*="capacity" i]',
    dates: '[class*="date" i]'
  },
  forms: {
    firstName: 'input[name="firstName"], input[name="first_name"], input[placeholder*="First" i]',
    lastName: 'input[name="lastName"], input[name="last_name"], input[placeholder*="Last" i]',
    email: 'input[type="email"], input[name="email"]',
    phone: 'input[type="tel"], input[name="phone"]',
    submitButton: 'button[type="submit"]',
    errorMessage: '[class*="error" i], [class*="invalid" i], span:has-text("required" i)'
  }
};

module.exports = commonLocators;
