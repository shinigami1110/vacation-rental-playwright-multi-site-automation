/**
 * Centralized Multi-Site Configuration
 * 
 * Supports Alice Lodging and Firesky Retreats.
 * Easily expandable to add a 3rd website by adding a new configuration block.
 */

const siteConfig = {
  aliceLodging: {
    key: 'aliceLodging',
    name: 'Alice Lodging',
    baseUrl: 'https://www.alicelodging.com',
    defaultDestination: 'Palm Springs',
    formUrl: 'https://www.alicelodging.com/list-with-us',
    expectedSocialDomains: ['facebook.com', 'instagram.com', 'linkedin.com', 'twitter.com', 'x.com', 'youtube.com', 'pinterest.com'],
    sampleCategoryPath: '/specials',
    sampleCategoryName: 'Specials'
  },
  fireskyRetreats: {
    key: 'fireskyRetreats',
    name: 'Firesky Retreats',
    baseUrl: 'https://www.fireskyretreats.com',
    defaultDestination: 'Scottsdale',
    formUrl: 'https://www.fireskyretreats.com/contact-us',
    expectedSocialDomains: ['facebook.com', 'instagram.com', 'linkedin.com', 'twitter.com', 'x.com', 'youtube.com', 'pinterest.com'],
    sampleCategoryPath: '/category/pool',
    sampleCategoryName: 'Pool'
  }
};

/**
 * Get configuration for a specific site or default to aliceLodging
 * @param {string} siteKey 
 */
function getSiteConfig(siteKey) {
  const envSite = process.env.SITE || siteKey;
  if (envSite && siteConfig[envSite]) {
    return siteConfig[envSite];
  }
  return siteConfig.aliceLodging;
}

module.exports = {
  siteConfig,
  getSiteConfig
};
