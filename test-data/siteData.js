/**
 * Site Test Data Repository
 * Holds site-specific metadata, search terms, categories, and test expectations.
 */

const siteData = {
  aliceLodging: {
    siteName: 'Alice Lodging',
    baseUrl: 'https://www.alicelodging.com',
    destinations: ['Palm Springs', 'Palm Desert', 'La Quinta'],
    categories: ['Specials', 'Blogs'],
    socialLinks: [
      { platform: 'facebook', domain: 'facebook.com' },
      { platform: 'instagram', domain: 'instagram.com' },
      { platform: 'linkedin', domain: 'linkedin.com' }
    ],
    formPath: '/list-with-us'
  },
  fireskyRetreats: {
    siteName: 'Firesky Retreats',
    baseUrl: 'https://www.fireskyretreats.com',
    destinations: ['Scottsdale', 'Phoenix'],
    categories: ['Pool', 'Group Homes', 'Pet Friendly', 'Premium Stays'],
    socialLinks: [
      { platform: 'facebook', domain: 'facebook.com' },
      { platform: 'instagram', domain: 'instagram.com' }
    ],
    formPath: '/contact-us'
  }
};

module.exports = siteData;
