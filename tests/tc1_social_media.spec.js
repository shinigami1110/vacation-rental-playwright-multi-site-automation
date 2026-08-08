const { test, expect } = require('../fixtures/siteFixture');
const Logger = require('../utils/logger');

const sitesToTest = process.env.SITE ? [process.env.SITE] : ['aliceLodging', 'fireskyRetreats'];

for (const siteKey of sitesToTest) {
  test.describe(`TC1 — Social Media Links Validation [${siteKey}]`, () => {
    test.use({ siteKey });

    test(`Verify dynamic discovery, destination URL recording, and social platform domain assertions on ${siteKey}`, async ({ homePage, footerPage, siteConfig }) => {
      Logger.step(`[TC1] Starting Social Media Links Validation on ${siteConfig.name}`);

      // 1. Open home page
      await homePage.open();

      // 2. Dynamically discover all footer social media links
      const socialLinks = await footerPage.discoverSocialMediaLinks();

      // 3. Assert social links structure
      expect(Array.isArray(socialLinks)).toBe(true);
      expect(socialLinks.length).toBeGreaterThan(0);

      // 4. Verify destination URLs & assert actual domain matches expected social platform
      for (const link of socialLinks) {
        expect(link.href).toMatch(/^https?:\/\//);
        expect(link.domain).toBeTruthy();

        // Genuinely assert destination domain matches platform
        const platformMatch = link.href.toLowerCase().includes(link.platform) || link.domain.toLowerCase().includes(link.platform);
        expect(platformMatch).toBe(true);

        Logger.info(`[TC1 Verified Destination] Platform: ${link.platform.toUpperCase()} | URL: ${link.href} | Domain: ${link.domain}`);
      }

      Logger.info(`[TC1 Success] Completed dynamic social media validation for ${siteConfig.name}`);
    });
  });
}
