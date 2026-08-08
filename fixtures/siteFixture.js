const { test: baseTest, expect } = require('@playwright/test');
const { getSiteConfig } = require('../config/site.config');
const HomePage = require('../pages/HomePage');
const SearchResultsPage = require('../pages/SearchResultsPage');
const PropertyDetailsPage = require('../pages/PropertyDetailsPage');
const NavigationPage = require('../pages/NavigationPage');
const FormValidationPage = require('../pages/FormValidationPage');
const FooterPage = require('../pages/FooterPage');

/**
 * Custom Playwright Fixture supporting Multi-Site Execution with
 * selective promo popup suppression (does NOT suppress functional popovers).
 */
const test = baseTest.extend({
  siteKey: ['aliceLodging', { option: true }],

  siteConfig: async ({ siteKey }, use) => {
    const config = getSiteConfig(siteKey);
    await use(config);
  },

  page: async ({ page }, use) => {
    // Do not suppress Headless UI portals here. Guest and calendar popovers are
    // rendered in the portal root and must remain available to the tests.
    await use(page);
  },

  homePage: async ({ page, siteConfig }, use) => {
    await use(new HomePage(page, siteConfig));
  },

  searchResultsPage: async ({ page, siteConfig }, use) => {
    await use(new SearchResultsPage(page, siteConfig));
  },

  propertyDetailsPage: async ({ page, siteConfig }, use) => {
    await use(new PropertyDetailsPage(page, siteConfig));
  },

  navigationPage: async ({ page, siteConfig }, use) => {
    await use(new NavigationPage(page, siteConfig));
  },

  formValidationPage: async ({ page, siteConfig }, use) => {
    await use(new FormValidationPage(page, siteConfig));
  },

  footerPage: async ({ page, siteConfig }, use) => {
    await use(new FooterPage(page, siteConfig));
  }
});

module.exports = {
  test,
  expect
};
