# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tc2_search_filter_sort.spec.js >> TC2 — Search, Filtering, and Sorting Workflow [aliceLodging] >> Verify search, guest count, date selection, filters, and price sorting on aliceLodging
- Location: tests\tc2_search_filter_sort.spec.js:11:5

# Error details

```
Error: expect(received).toBeGreaterThan(expected)

Expected: > 0
Received:   0
```

# Page snapshot

```yaml
- generic [active] [ref=f9e1]:
  - generic [ref=f9e2]:
    - banner "header" [ref=f9e3]:
      - navigation "Header Navigation Bar" [ref=f9e4]:
        - link [ref=f9e7] [cursor=pointer]:
          - /url: /
          - img "Alice Lodging™ Logo" [ref=f9e8]
        - generic [ref=f9e9]:
          - generic [ref=f9e10]:
            - button "Destinations" [ref=f9e12] [cursor=pointer]
            - button "Collections" [ref=f9e16] [cursor=pointer]
            - link "Specials" [ref=f9e19] [cursor=pointer]:
              - /url: /specials
            - button "About" [ref=f9e21] [cursor=pointer]
            - link "Blog" [ref=f9e24] [cursor=pointer]:
              - /url: /blog
            - link "List With Us" [ref=f9e25] [cursor=pointer]:
              - /url: /list-with-us
            - link "Contact Us" [ref=f9e26] [cursor=pointer]:
              - /url: /contact-us
          - generic [ref=f9e27]:
            - button "Favourites" [ref=f9e28] [cursor=pointer]
            - button "User Login" [ref=f9e33] [cursor=pointer]
      - generic [ref=f9e39]:
        - link "⚡ Flash Summer Deals Alert • 20% Off with SUMMERESCAPE • For Check ins On or Before Sep 30" [ref=f9e41] [cursor=pointer]:
          - /url: /specials/palm-springs-palm-desert-summer-deals-save-20-on-vacation-rental
        - button "Close banner" [ref=f9e42] [cursor=pointer]
    - generic [ref=f9e46]:
      - heading "Specials" [level=1] [ref=f9e48]
      - generic [ref=f9e51]:
        - generic [ref=f9e53]:
          - link [ref=f9e54] [cursor=pointer]:
            - /url: /specials/labor-day-vacation-deals-save-15-on-palm-springs-palm-desert-vacation-rentals
            - 'img "Labor Day Vacation Deals: Save 15% on Palm Springs & Palm Desert Vacation Rentals" [ref=f9e55]'
          - generic [ref=f9e56]:
            - heading [level=3] [ref=f9e57]:
              - 'link "Labor Day Vacation Deals: Save 15% on Palm Springs & Palm Desert Vacation Rentals" [ref=f9e58] [cursor=pointer]':
                - /url: /specials/labor-day-vacation-deals-save-15-on-palm-springs-palm-desert-vacation-rentals
            - paragraph [ref=f9e61]: Celebrate Labor Day with Alice Lodging and save 15% on eligible Palm Springs and Palm Desert vacation rentals using promo code LABORDAY26. Book before September 2, 2026, for check-ins from September 3 through September 7, 2026, with a minimum three-night stay. Enjoy spacious vacation homes, private amenities, and a relaxing Greater Palm Springs getaway while this limited-time offer is available.
        - generic [ref=f9e63]:
          - link [ref=f9e64] [cursor=pointer]:
            - /url: /specials/stay-near-the-wta-finals-in-indian-wells-ca
            - img "Stay Near the WTA Finals in Indian Wells, CA" [ref=f9e65]
          - generic [ref=f9e66]:
            - heading [level=3] [ref=f9e67]:
              - link "Stay Near the WTA Finals in Indian Wells, CA" [ref=f9e68] [cursor=pointer]:
                - /url: /specials/stay-near-the-wta-finals-in-indian-wells-ca
            - paragraph [ref=f9e71]: Planning a trip to the WTA Finals? Alice Lodging offers professionally managed vacation rentals across Greater Palm Springs, with many homes located just 10–30 minutes from Indian Wells Tennis Garden.
        - generic [ref=f9e73]:
          - link [ref=f9e74] [cursor=pointer]:
            - /url: /specials/palm-springs-palm-desert-summer-deals-save-20-on-vacation-rental
            - 'img "Palm Springs & Palm Desert Summer Deals: Save 20% on Your Vacation Rental" [ref=f9e75]'
          - generic [ref=f9e76]:
            - heading [level=3] [ref=f9e77]:
              - 'link "Palm Springs & Palm Desert Summer Deals: Save 20% on Your Vacation Rental" [ref=f9e78] [cursor=pointer]':
                - /url: /specials/palm-springs-palm-desert-summer-deals-save-20-on-vacation-rental
            - paragraph [ref=f9e81]: Escape to Greater Palm Springs this summer and save 20% on selected Alice Lodging vacation rentals. Use promo code SUMMERESCAPE when booking a minimum two-night stay with check-in before September 30, 2026. Relax by a private pool, enjoy spacious accommodations, and experience everything Palm Springs and Palm Desert have to offer while this limited-time summer deal lasts.
        - generic [ref=f9e83]:
          - link [ref=f9e84] [cursor=pointer]:
            - /url: /specials/head-trip-festival-2026
            - img "HEAD TRIP FESTIVAL 2026" [ref=f9e85]
          - generic [ref=f9e86]:
            - heading [level=3] [ref=f9e87]:
              - link "HEAD TRIP FESTIVAL 2026" [ref=f9e88] [cursor=pointer]:
                - /url: /specials/head-trip-festival-2026
            - paragraph [ref=f9e91]: October 10 & 11, 2026 • Indio, California Your Private Desert Home Base, Just Minutes from the Festival Don’t Just Attend. Actually Experience It. Head Trip is unlike anything else happening in the desert this fall. Two nights of world-class electronic music, under open skies, with a lineup that feels like a festival curator’s dream. […]
        - generic [ref=f9e93]:
          - link [ref=f9e94] [cursor=pointer]:
            - /url: /specials/last-minute-palm-springs-palm-desert-getaways-save-15
            - img "Last Minute Palm Springs & Palm Desert Getaways – Save 15% with LASTCALL15" [ref=f9e95]
          - generic [ref=f9e96]:
            - heading [level=3] [ref=f9e97]:
              - link "Last Minute Palm Springs & Palm Desert Getaways – Save 15% with LASTCALL15" [ref=f9e98] [cursor=pointer]:
                - /url: /specials/last-minute-palm-springs-palm-desert-getaways-save-15
            - paragraph [ref=f9e101]: Save 15% on Palm Springs and Palm Desert vacation rentals with promo code LASTCALL15. Book last-minute stays with check-in within 14 days of reservation and enjoy flexible desert getaways. Valid on all properties with a 2-night minimum stay, this ongoing offer is ideal for spontaneous travel, weekend trips, and short-notice vacations in California’s desert region.
        - generic [ref=f9e103]:
          - link [ref=f9e104] [cursor=pointer]:
            - /url: /specials/snowbird-rentals-in-southern-california-save-10-on-monthly-stays
            - img "Snowbird Rentals in Southern California – Save 10% on Monthly Stays" [ref=f9e105]
          - generic [ref=f9e106]:
            - heading [level=3] [ref=f9e107]:
              - link "Snowbird Rentals in Southern California – Save 10% on Monthly Stays" [ref=f9e108] [cursor=pointer]:
                - /url: /specials/snowbird-rentals-in-southern-california-save-10-on-monthly-stays
            - paragraph [ref=f9e111]: Looking to escape the cold this season? Settle into sunshine and warmth with a month-long stay in Southern California’s Greater Palm Springs. Our snowbird-friendly vacation homes in the Palms and Coach communities offer private pools, quiet neighborhoods, and comfortable remote-work setups, all with 10% off when you stay a minimum of 28 nights and a […]
        - generic [ref=f9e113]:
          - link [ref=f9e114] [cursor=pointer]:
            - /url: /specials/palm-and-coach-wonderland-10
            - img "Save 10% on Alice Lodging’s Palms and Coachella Vacation Rentals" [ref=f9e115]
          - generic [ref=f9e116]:
            - heading [level=3] [ref=f9e117]:
              - link "Save 10% on Alice Lodging’s Palms and Coachella Vacation Rentals" [ref=f9e118] [cursor=pointer]:
                - /url: /specials/palm-and-coach-wonderland-10
            - paragraph [ref=f9e121]: Discover Alice Lodging – Palm & Coach, where style meets comfort and savings. Book your next stay and enjoy 10% off with code WONDERLAND. From serene coastal retreats to chic city homes, every property is handpicked to make your getaway easy, elegant, and unforgettable.
    - contentinfo "footer" [ref=f9e123]:
      - list [ref=f9e126]:
        - listitem [ref=f9e127]:
          - button "Good Life Vacation Logo Explore Good Life Network" [ref=f9e128] [cursor=pointer]:
            - generic [ref=f9e131]:
              - img "Good Life Vacation Logo" [ref=f9e133]
              - generic [ref=f9e134]: Explore Good Life Network
          - list [ref=f9e138]:
            - listitem [ref=f9e139]:
              - button "Central Florida" [ref=f9e140] [cursor=pointer]
              - list [ref=f9e148]:
                - listitem [ref=f9e149]:
                  - button [ref=f9e150] [cursor=pointer]:
                    - link "Bahama Bay Logo Bahama Bay Resort and Spa" [ref=f9e152]:
                      - /url: https://www.bahamabay.com
                      - generic [ref=f9e153]:
                        - img "Bahama Bay Logo" [ref=f9e155]
                        - generic [ref=f9e156]: Bahama Bay Resort and Spa
                - listitem [ref=f9e159]:
                  - button [ref=f9e160] [cursor=pointer]:
                    - link "Caribe Cove Logo Caribe Cove" [ref=f9e162]:
                      - /url: https://www.caribecove.com
                      - generic [ref=f9e163]:
                        - img "Caribe Cove Logo" [ref=f9e165]
                        - generic [ref=f9e166]: Caribe Cove
                - listitem [ref=f9e169]:
                  - button [ref=f9e170] [cursor=pointer]:
                    - link "Beyond Lodging Logo Beyond Lodging" [ref=f9e172]:
                      - /url: https://www.beyondlodging.com
                      - generic [ref=f9e173]:
                        - img "Beyond Lodging Logo" [ref=f9e175]
                        - generic [ref=f9e176]: Beyond Lodging
            - listitem [ref=f9e179]:
              - button "West Florida" [ref=f9e180] [cursor=pointer]
              - list [ref=f9e188]:
                - listitem [ref=f9e189]:
                  - button [ref=f9e190] [cursor=pointer]:
                    - link "TOPS'L Logo TOPS'L Beach & Raquet Resort" [ref=f9e192]:
                      - /url: https://www.topsl.com
                      - generic [ref=f9e193]:
                        - img "TOPS'L Logo" [ref=f9e195]
                        - generic [ref=f9e196]: TOPS'L Beach & Raquet Resort
                - listitem [ref=f9e199]:
                  - button [ref=f9e200] [cursor=pointer]:
                    - link "Annabelle Lodging Logo Annabelle Lodging" [ref=f9e202]:
                      - /url: https://www.annabellelodging.com
                      - generic [ref=f9e203]:
                        - img "Annabelle Lodging Logo" [ref=f9e205]
                        - generic [ref=f9e206]: Annabelle Lodging
            - listitem [ref=f9e209]:
              - button "Arizona" [ref=f9e210] [cursor=pointer]
              - list [ref=f9e218]:
                - listitem [ref=f9e219]:
                  - button [ref=f9e220] [cursor=pointer]:
                    - link "Firesky Retreats Logo Firesky Retreats" [ref=f9e222]:
                      - /url: https://www.fireskyretreats.com
                      - generic [ref=f9e223]:
                        - img "Firesky Retreats Logo" [ref=f9e225]
                        - generic [ref=f9e226]: Firesky Retreats
            - listitem [ref=f9e229]:
              - button "California" [ref=f9e230] [cursor=pointer]
              - list [ref=f9e238]:
                - listitem [ref=f9e239]:
                  - button [ref=f9e240] [cursor=pointer]:
                    - link "Alice Lodging Logo Alice Lodging" [ref=f9e242]:
                      - /url: https://www.alicelodging.com
                      - generic [ref=f9e243]:
                        - img "Alice Lodging Logo" [ref=f9e245]
                        - generic [ref=f9e246]: Alice Lodging
            - listitem [ref=f9e247]:
              - button "Washington" [ref=f9e248] [cursor=pointer]
              - list [ref=f9e256]:
                - listitem [ref=f9e257]:
                  - button [ref=f9e258] [cursor=pointer]:
                    - link "Pacific Retreats Logo Pacific Retreats" [ref=f9e260]:
                      - /url: https://www.pacificretreats.com
                      - generic [ref=f9e261]:
                        - img "Pacific Retreats Logo" [ref=f9e263]
                        - generic [ref=f9e264]: Pacific Retreats
      - generic [ref=f9e267]:
        - generic [ref=f9e270]:
          - generic [ref=f9e271]:
            - heading "Sign up for exclusive offers from us" [level=2] [ref=f9e272]
            - generic [ref=f9e273]:
              - generic [ref=f9e274]: Please complete the following form to receive news and special offers from Alice Lodging™
              - generic [ref=f9e275]:
                - textbox "Email address" [ref=f9e277]:
                  - /placeholder: Enter your email
                - button "Subscribe to newsletter" [disabled] [ref=f9e280]:
                  - generic [ref=f9e281]: Subscribe
          - generic [ref=f9e286]:
            - generic [ref=f9e287]:
              - link [ref=f9e288] [cursor=pointer]:
                - /url: /
                - img "Alice Lodging™" [ref=f9e289]
              - link [ref=f9e290] [cursor=pointer]:
                - /url: https://www.goodlifevacations.com/about-us
                - img "Good Life Vacations Logo" [ref=f9e292]
            - list [ref=f9e298]:
              - paragraph [ref=f9e299]: About
              - listitem [ref=f9e300]:
                - link "About Alice Lodging" [ref=f9e301] [cursor=pointer]:
                  - /url: /about-us
              - listitem [ref=f9e302]:
                - link "Our Story" [ref=f9e303] [cursor=pointer]:
                  - /url: /our-story
              - listitem [ref=f9e304]:
                - link "Meet The Team" [ref=f9e305] [cursor=pointer]:
                  - /url: /meet-the-team
              - listitem [ref=f9e306]:
                - link "List With Us" [ref=f9e307] [cursor=pointer]:
                  - /url: /list-with-us
            - list [ref=f9e309]:
              - paragraph [ref=f9e310]: Explore
              - listitem [ref=f9e311]:
                - link "Specials" [ref=f9e312] [cursor=pointer]:
                  - /url: /specials
              - listitem [ref=f9e313]:
                - link "Blogs" [ref=f9e314] [cursor=pointer]:
                  - /url: /blog
              - listitem [ref=f9e315]:
                - link "Travel Insurance" [ref=f9e316] [cursor=pointer]:
                  - /url: /travel-insurance
              - listitem [ref=f9e317]:
                - link "Privacy Policy" [ref=f9e318] [cursor=pointer]:
                  - /url: /privacy-policy
              - listitem [ref=f9e319]:
                - link "Rental Rules and Policies" [ref=f9e320] [cursor=pointer]:
                  - /url: /rental-rules-and-policies
            - generic [ref=f9e321]:
              - generic [ref=f9e323]:
                - paragraph [ref=f9e324]: Contact Us
                - generic [ref=f9e325]:
                  - generic [ref=f9e326]: 76300 Country Club Drive, Palm Desert, CA 92211
                  - generic [ref=f9e331]: 707 E. Tahquitz Canyon Way Ste 16, Palm Springs, CA 92262
                  - link "office@alicelodging.com" [ref=f9e336] [cursor=pointer]:
                    - /url: mailto:office@alicelodging.com
                  - link "+1 (760)-345-5695" [ref=f9e344] [cursor=pointer]:
                    - /url: tel:+1 (760)-345-5695
              - generic [ref=f9e347]:
                - combobox "Search By Property" [ref=f9e352]
                - button [disabled] [ref=f9e354] [cursor=pointer]
        - generic [ref=f9e360]:
          - generic [ref=f9e361]:
            - link "Facebook" [ref=f9e362] [cursor=pointer]:
              - /url: https://www.facebook.com/profile.php?id=61579637295109
            - link "Instagram" [ref=f9e366] [cursor=pointer]:
              - /url: https://www.instagram.com/alicelodging/
            - link "Linkedin" [ref=f9e370] [cursor=pointer]:
              - /url: https://www.linkedin.com/company/alice-lodging
          - generic [ref=f9e374]:
            - generic [ref=f9e375]: © 2026 Alice Lodging™. All rights reserved.
            - generic [ref=f9e376]: "|"
            - link "All Properties" [ref=f9e377] [cursor=pointer]:
              - /url: /all-properties
            - generic [ref=f9e378]: "|"
            - generic [ref=f9e379]:
              - generic [ref=f9e380]:
                - text: Powered by
                - link "Flow One" [ref=f9e381] [cursor=pointer]:
                  - /url: https://flow.one/
              - img "Flow One Logo" [ref=f9e382]
  - alert [ref=f9e383]
```

# Test source

```ts
  1   | const { test, expect } = require('../fixtures/siteFixture');
  2   | const DateHelper = require('../utils/dateHelper');
  3   | const Logger = require('../utils/logger');
  4   | 
  5   | const sitesToTest = process.env.SITE ? [process.env.SITE] : ['aliceLodging', 'fireskyRetreats'];
  6   | 
  7   | for (const siteKey of sitesToTest) {
  8   |   test.describe(`TC2 — Search, Filtering, and Sorting Workflow [${siteKey}]`, () => {
  9   |     test.use({ siteKey });
  10  | 
  11  |     test(`Verify search, guest count, date selection, filters, and price sorting on ${siteKey}`, async ({ homePage, searchResultsPage, siteConfig }) => {
  12  |       test.setTimeout(120000);
  13  |       Logger.step(`[TC2] Starting Search, Filter, Sort Workflow on ${siteConfig.name}`);
  14  | 
  15  |       // 1. Generate dynamic future travel dates (14 days from today, 4-night stay)
  16  |       const dates = DateHelper.getFutureDates(14, 4);
  17  |       Logger.info(`[TC2] Dynamic dates: Check-in ${dates.checkIn.iso} | Check-out ${dates.checkOut.iso}`);
  18  | 
  19  |       // 2. Open Home page
  20  |       await homePage.open();
  21  | 
  22  |       // ===== BLOCKER 1: REAL GUEST SELECTION WITH BEFORE/AFTER ASSERTION =====
  23  |       const guestResult = await searchResultsPage.setGuestCount(2, 1);
  24  | 
  25  |       // Assert that Adults actually incremented
  26  |       expect(guestResult.adultsAfter).toBeGreaterThan(guestResult.adultsBefore);
  27  |       Logger.info(`[TC2 ASSERT] Adults: ${guestResult.adultsBefore} → ${guestResult.adultsAfter} ✓`);
  28  | 
  29  |       // Assert that Children actually incremented
  30  |       expect(guestResult.childrenAfter).toBeGreaterThan(guestResult.childrenBefore);
  31  |       Logger.info(`[TC2 ASSERT] Children: ${guestResult.childrenBefore} → ${guestResult.childrenAfter} ✓`);
  32  | 
  33  |       // ===== BLOCKER 2: REAL CALENDAR DATE SELECTION BY ISO DATE =====
  34  |       const dateResult = await searchResultsPage.setFutureDates(dates.checkIn.dateObj, dates.checkOut.dateObj);
  35  | 
  36  |       // Assert check-in date was actually selected (reflected in the UI display)
  37  |       expect(dateResult.displayText).toContain(dates.checkIn.iso);
  38  |       Logger.info(`[TC2 ASSERT] Check-in ${dates.checkIn.iso} reflected in UI: "${dateResult.displayText}" ✓`);
  39  | 
  40  |       // Assert check-out date was actually selected
  41  |       expect(dateResult.displayText).toContain(dates.checkOut.iso);
  42  |       Logger.info(`[TC2 ASSERT] Check-out ${dates.checkOut.iso} reflected in UI ✓`);
  43  | 
  44  |       // 3. Perform destination search
  45  |       await searchResultsPage.executeSearch(siteConfig.defaultDestination);
  46  | 
  47  |       // 4. Verify property listings displayed
  48  |       const cardsBefore = await searchResultsPage.getPropertyCards();
  49  |       const countBefore = await cardsBefore.count();
  50  |       Logger.info(`[TC2] Property listings count after search: ${countBefore}`);
  51  |       expect(countBefore).toBeGreaterThan(0);
  52  | 
  53  |       // 5. Apply filter
  54  |       const filterApplied = await searchResultsPage.applyFilter(siteConfig.sampleCategoryName || 'Pool');
  55  |       expect(filterApplied).toBe(true);
> 56  |       expect(await searchResultsPage.getPropertyCards().then(cards => cards.count())).toBeGreaterThan(0);
      |                                                                                       ^ Error: expect(received).toBeGreaterThan(expected)
  57  | 
  58  |       // ===== BLOCKER 2: REAL PRICE SORTING MATHEMATICAL ASSERTION =====
  59  |       // Sort Low to High
  60  |       await searchResultsPage.selectSortOption('Price: Low to High');
  61  |       const lowPrices = await searchResultsPage.getCardPrices();
  62  | 
  63  |       if (lowPrices.length < 2) {
  64  |         throw new Error(`[TC2 FAILURE] Insufficient prices (${lowPrices.length}) extracted to evaluate Low→High sort on ${siteConfig.name}`);
  65  |       }
  66  | 
  67  |       for (let i = 0; i < lowPrices.length - 1; i++) {
  68  |         if (lowPrices[i] > lowPrices[i + 1]) {
  69  |           throw new Error(
  70  |             `LIVE SITE SORTING DEFECT: The UI sort option "Price: Low to High" was successfully selected on ${siteConfig.name}, ` +
  71  |             `but the displayed listing prices are NOT in ascending order. ` +
  72  |             `Prices found: [${lowPrices.join(', ')}] — position ${i} ($${lowPrices[i]}) > position ${i+1} ($${lowPrices[i+1]})`
  73  |           );
  74  |         }
  75  |         expect(lowPrices[i]).toBeLessThanOrEqual(lowPrices[i + 1]);
  76  |       }
  77  |       Logger.info(`[TC2 ASSERT] Low→High prices are strictly ascending: [${lowPrices.join(', ')}] ✓`);
  78  | 
  79  |       // Sort High to Low
  80  |       await searchResultsPage.selectSortOption('Price: High to Low');
  81  |       const highPrices = await searchResultsPage.getCardPrices();
  82  | 
  83  |       if (highPrices.length < 2) {
  84  |         throw new Error(`[TC2 FAILURE] Insufficient prices (${highPrices.length}) extracted to evaluate High→Low sort on ${siteConfig.name}`);
  85  |       }
  86  | 
  87  |       for (let i = 0; i < highPrices.length - 1; i++) {
  88  |         if (highPrices[i] < highPrices[i + 1]) {
  89  |           throw new Error(
  90  |             `LIVE SITE SORTING DEFECT: The UI sort option "Price: High to Low" was successfully selected on ${siteConfig.name}, ` +
  91  |             `but the displayed listing prices are NOT in descending order. ` +
  92  |             `Prices found: [${highPrices.join(', ')}] — position ${i} ($${highPrices[i]}) < position ${i+1} ($${highPrices[i+1]})`
  93  |           );
  94  |         }
  95  |         expect(highPrices[i]).toBeGreaterThanOrEqual(highPrices[i + 1]);
  96  |       }
  97  |       Logger.info(`[TC2 ASSERT] High→Low prices are strictly descending: [${highPrices.join(', ')}] ✓`);
  98  | 
  99  |       Logger.info(`[TC2 Success] Search, Filter, Sort workflow genuinely verified for ${siteConfig.name}`);
  100 |     });
  101 |   });
  102 | }
  103 | 
```