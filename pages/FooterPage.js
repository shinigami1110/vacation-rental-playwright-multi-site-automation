const BasePage = require('./BasePage');
const Logger = require('../utils/logger');

class FooterPage extends BasePage {
  constructor(page, siteConfig) {
    super(page, siteConfig);
  }

  /**
   * Dynamically discover all social media links in the site's footer and extract destination endpoints
   * @returns {Promise<Array<{platform: string, href: string, text: string, domain: string}>>}
   */
  async discoverSocialMediaLinks() {
    Logger.step(`[TC1] Dynamically discovering footer social media links on ${this.siteConfig.name}`);

    await this.dismissOverlays();
    await this.page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await this.page.waitForTimeout(1000);

    const socialLinks = await this.page.evaluate(() => {
      const allLinks = Array.from(document.querySelectorAll('footer a, [class*="footer"] a, a'));
      const socialPlatforms = ['facebook', 'instagram', 'linkedin', 'twitter', 'x.com', 'youtube', 'pinterest', 'tiktok'];
      
      const discovered = [];
      const seenUrls = new Set();

      for (const link of allLinks) {
        const href = (link.href || '').trim();
        const lowerHref = href.toLowerCase();
        
        const matchedPlatform = socialPlatforms.find(platform => lowerHref.includes(platform));
        if (matchedPlatform && !seenUrls.has(href)) {
          seenUrls.add(href);
          let domain = href;
          try {
            domain = new URL(href).hostname;
          } catch(e) {}

          discovered.push({
            platform: matchedPlatform === 'x.com' ? 'twitter' : matchedPlatform,
            href: href,
            domain: domain,
            text: link.innerText.trim() || link.getAttribute('aria-label') || matchedPlatform
          });
        }
      }
      return discovered;
    });

    Logger.info(`[TC1 Output] Discovered ${socialLinks.length} dynamic social media links for ${this.siteConfig.name}`);
    socialLinks.forEach((link, idx) => {
      Logger.info(`[Social Link ${idx + 1}] Platform: ${link.platform.toUpperCase()} -> Destination: ${link.href} (Domain: ${link.domain})`);
    });

    return socialLinks;
  }
}

module.exports = FooterPage;
