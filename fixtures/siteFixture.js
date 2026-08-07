const { test: baseTest, expect } = require('@playwright/test');
const { getSiteConfig } = require('../config/site.config');
const HomePage = require('../pages/HomePage');
const SearchResultsPage = require('../pages/SearchResultsPage');
const PropertyDetailsPage = require('../pages/PropertyDetailsPage');
const NavigationPage = require('../pages/NavigationPage');
const FormValidationPage = require('../pages/FormValidationPage');
const FooterPage = require('../pages/FooterPage');

/**
 * Custom Playwright Fixture supporting Multi-Site Execution with clean full-screen rendering and banner popup suppression
 */
const test = baseTest.extend({
  siteKey: ['aliceLodging', { option: true }],

  siteConfig: async ({ siteKey }, use) => {
    const config = getSiteConfig(siteKey);
    await use(config);
  },

  page: async ({ page }, use) => {
    // Inject global stylesheet to permanently suppress floating promo modals from appearing on screenshots or blocking UI
    await page.addInitScript(() => {
      const injectStyle = () => {
        if (!document.getElementById('suppress-promo-popups')) {
          const style = document.createElement('style');
          style.id = 'suppress-promo-popups';
          style.innerHTML = `
            #headlessui-portal-root,
            [id*="headlessui-portal"],
            div[role="dialog"] {
              display: none !important;
              visibility: hidden !important;
              opacity: 0 !important;
              pointer-events: none !important;
            }
          `;
          if (document.head) {
            document.head.appendChild(style);
          }
        }
      };

      if (document.readyState === 'loading') {
        window.addEventListener('DOMContentLoaded', injectStyle);
      } else {
        injectStyle();
      }

      // Mutation observer fallback to clean modal nodes
      const observer = new MutationObserver(() => {
        const portals = document.querySelectorAll('#headlessui-portal-root');
        portals.forEach(p => {
          if (p.innerText && (p.innerText.includes('SUMMER') || p.innerText.includes('OFF') || p.innerText.includes('20%') || p.innerText.includes('SPECIAL'))) {
            p.style.display = 'none';
            p.remove();
          }
        });
      });
      if (document.documentElement) {
        observer.observe(document.documentElement, { childList: true, subtree: true });
      }
    });

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
