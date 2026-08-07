/**
 * Alice Lodging Specific Locators Overrides
 */
const aliceLocators = {
  siteName: 'Alice Lodging',
  search: {
    destinationInput: 'input[placeholder*="destination" i], input[placeholder*="Search" i]',
    datePickerTrigger: 'button:has-text("Dates"), [placeholder*="Check-in" i]',
    searchButton: 'button:has-text("SEARCH"), button:has-text("Search")'
  },
  forms: {
    listWithUsForm: 'form',
    submitBtn: 'button[type="submit"], button:has-text("Submit")'
  }
};

module.exports = aliceLocators;
