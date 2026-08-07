# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tc7_intentional_failure.spec.js >> TC7 — Intentional Failure Diagnostic Reporting Demo >> Demonstrate failure diagnostics (screenshot, element highlight, trace, & step logs)
- Location: tests\tc7_intentional_failure.spec.js:8:3

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('#non-existent-property-verification-title-element')
Expected: visible
Timeout: 3000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 3000ms
  - waiting for locator('#non-existent-property-verification-title-element')

```

```yaml
- banner "header":
  - navigation "Header Navigation Bar":
    - link "Alice Lodging™ Logo":
      - /url: /
      - img "Alice Lodging™ Logo"
    - button "Destinations"
    - button "Collections"
    - link "Specials":
      - /url: /specials
    - button "About"
    - link "Blog":
      - /url: /blog
    - link "List With Us":
      - /url: /list-with-us
    - link "Contact Us":
      - /url: /contact-us
    - button "Favourites"
    - button "User Login"
- text: PREMIER VACATION HOMES
- heading "For the moments that matter most" [level=1]
- text: Location
- combobox "Where to next?"
- button "Select Arrival Date Select Departure Date": Arrival Add Date Depart Add Date
- 'button "Select Guests: 0 Adults 0 Children"': Guests Who's in?
- button "Search"
- text: The Alice Stays
- heading "Five-Star Standards" [level=2]
- text: Each home in our exclusive, Five-Star collection is chosen for its unparalleled elegance and distinctive character. From serene desert oases and secluded forest sanctuaries to breathtaking mountain escapes, every stay promises refined luxury infused with local soul.
- link "Luxury Homes Luxury":
  - /url: /luxury-vacation-rentals
  - img "Luxury Homes"
  - paragraph: Luxury
- link "Private Pool Private Pool":
  - /url: /private-pool-retreats
  - img "Private Pool"
  - paragraph: Private Pool
- link "Pet Friendly Pet Friendly":
  - /url: /pet-friendly-vacation-rentals
  - img "Pet Friendly"
  - paragraph: Pet Friendly
- link "Golf Course Golf Course":
  - /url: /golf-course-vacation-rentals
  - img "Golf Course"
  - paragraph: Golf Course
- link "Group Stays Group Stays":
  - /url: /large-group-getaways
  - img "Group Stays"
  - paragraph: Group Stays
- link "Romantic Getaways Romantic Getaways":
  - /url: /romantic-retreats
  - img "Romantic Getaways"
  - paragraph: Romantic Getaways
- text: Destinations
- heading "Wonder Awaits You" [level=2]
- text: Our California destinations redefine escape by inviting you to unwind in absolute luxury. Relax in serene desert landscapes with private pools, panoramic mountain views, and sun-drenched outdoor living spaces designed for effortless relaxation. Retreat to peaceful alpine settings where fresh mountain air, towering pines, and scenic surroundings create the perfect backdrop for a restorative getaway. From quiet mornings on private patios to evenings spent under star-filled skies, every experience is designed to help you slow down and reconnect. Each stay delivers striking design, immersive comfort, and effortless style that elevates every moment.
- link "Explore Palm Desert. Palm Desert":
  - /url: /palm-desert-vacation-rentals
  - img "Explore Palm Desert."
  - paragraph: Palm Desert
- link "Explore Palm Springs. Palm Springs":
  - /url: /palm-springs-vacation-rentals
  - img "Explore Palm Springs."
  - paragraph: Palm Springs
- link "Explore Rancho Mirage. Rancho Mirage":
  - /url: /rancho-mirage-area-guide
  - img "Explore Rancho Mirage."
  - paragraph: Rancho Mirage
- link "Explore La Quinta. La Quinta":
  - /url: /la-quinta-area-guide
  - img "Explore La Quinta."
  - paragraph: La Quinta
- link "Explore Indio. Indio":
  - /url: /indio-area-guide
  - img "Explore Indio."
  - paragraph: Indio
- text: Featured home of the week
- heading "Alice’s Stay of the Week" [level=2]
- text: Curated for its distinctive design and welcoming ambiance, this exceptional property combines generous space with contemporary elegance, creating the ultimate retreat.
- link "Book Now":
  - /url: /listings/6924de4d943654000f5d8c1f
  - button "Book Now"
- text: More From the featured
- heading "Luxury Stays, Selected for You" [level=2]
- link "See All Properties":
  - /url: /listings
  - button "See All Properties"
- link "HEAD ON OVER CHAISE.":
  - /url: /listings/6924de481fd98a001220af10
  - img "HEAD ON OVER CHAISE."
- text: Average $661 per night includes all fees Aug 08 – Aug 11
- button "Click to add unit to Favourites"
- img "Loading beds"
- text: "4"
- img "Loading shower"
- text: 4 8
- img "Pet Friendly"
- text: Pet Friendly
- img "Hot Tub"
- text: Hot Tub
- link "Mag's Mountain View":
  - /url: /listings/6924de481fd98a001220af10
- text: Palm Springs, California
- img
- text: 5.0 (
- link "7 reviews":
  - /url: /listings/6924de481fd98a001220af10?#unitReviews
- text: )
- link "Desert Dream- Alice Lodging":
  - /url: /listings/6924de9447db180013b45623
  - img "Desert Dream- Alice Lodging"
- text: Average $617 per night includes all fees Aug 09 – Aug 12
- button "Click to add unit to Favourites"
- img "Loading beds"
- text: "2"
- img "Loading shower"
- text: 2 4
- link "Desert Dream":
  - /url: /listings/6924de9447db180013b45623
- text: Palm Springs, California
- img
- text: 5.0 (
- link "8 reviews":
  - /url: /listings/6924de9447db180013b45623?#unitReviews
- text: ) THE ALICE DIFFERENCE
- heading "Why Book With Alice Lodging™?" [level=2]
- text: Alice Lodging™ redefines luxury vacation rentals by offering an effortless and seamless experience designed to make your getaway truly unforgettable. From meticulously curated high-end properties to personalized service tailored to your unique needs, Alice Lodging™ ensures every detail is taken care of so you can relax and indulge in the best that vacationing has to offer.
- link "Learn More":
  - /url: /list-with-us
  - button "Learn More"
- img "Best pricing":
  - img
- paragraph: 24/7 Guest Support
- paragraph: Seamless stays with always-available support
- img "Worry Free Cancellation":
  - img
- paragraph: Local Care Teams
- paragraph: On-the-ground staff in each destination for quick fixes
- img "24/7 Guest Service":
  - img
- paragraph: Transparent Pricing
- paragraph: Book direct for clear and lower rates, no hidden platform fees
- img "Professional cleaning":
  - img
- paragraph: Professionally Cleaned
- paragraph: Professionally serviced between each stay making it guest ready
- text: Reviews
- paragraph: "\"We had an incredible stay celebrating my wife's 40th birthday. The home was spacious, beautifully maintained, and had everything we needed. We loved the pool, hot tub, and tennis court, and the location was perfect for exploring Palm Springs. The hosts were wonderful, and we would love to come back!\""
- paragraph: ★
- paragraph: ★
- paragraph: ★
- paragraph: ★
- paragraph: ★
- paragraph: Hamish and friends
- paragraph: Stayed at Casa Grande
- paragraph: "\"A beautiful and peaceful place with breathtaking views. The home was spotless, stylish, and had everything we needed. We loved the nearby golf courses and morning walks. Our family had a wonderful time, and we would gladly return.\""
- paragraph: ★
- paragraph: ★
- paragraph: ★
- paragraph: ★
- paragraph: ★
- paragraph: Ahmed and family
- paragraph: Stayed at Cool Camino
- paragraph: "\"Our stay at Casa Grande was amazing. The hosts were very responsive, and all the instructions were easy to follow. It's an amazing house and has so many amenities to choose from we couldn't even use them all! Thank you for making it an amazing weekend and we look forward to returning!\""
- paragraph: ★
- paragraph: ★
- paragraph: ★
- paragraph: ★
- paragraph: ★
- paragraph: Heather and friends
- paragraph: Stayed at Casa Grande
- paragraph: "\"This team takes excellent care of their guests and goes above and beyond. They are honest, reliable, and genuinely care about making both guests and owners happy. As a vacation rental owner, I appreciate how thoughtful they are. I’m very glad I chose this team and would trust them without hesitation. \""
- paragraph: ★
- paragraph: ★
- paragraph: ★
- paragraph: ★
- paragraph: ★
- paragraph: James H.
- paragraph: Homeowner Partner Review
- paragraph: “We want to congratulate the team for earning exceptional guest reviews of our property. Seven 5-star reviews on Airbnb and two on VRBO are wonderful! Guests praised the easy check-in process and caring support from the team. It's rewarding to see our hard work recognized with 100% 5-star ratings and excellent comments."
- paragraph: ★
- paragraph: ★
- paragraph: ★
- paragraph: ★
- paragraph: ★
- paragraph: John G.
- paragraph: Homeowner Partner Review
- text: GET INSPIRED
- heading "Latest tips & tricks" [level=2]
- link "SEE ALL BLOGS":
  - /url: /blog
  - button "SEE ALL BLOGS"
- img "Best Water Parks in Palm Springs for Families, Slides & Summer Fun"
- link "California":
  - /url: /blog/california
- text: ·
- link "Palm Springs":
  - /url: /blog/california/palm-springs
- heading "Best Water Parks in Palm Springs for Families, Slides & Summer Fun" [level=3]:
  - link "Best Water Parks in Palm Springs for Families, Slides & Summer Fun":
    - /url: /blog/best-water-parks-in-palm-springs-for-families
- text: 5 Jun 2026
- img "Palm Desert Shopping Guide – El Paseo & Hidden Gems"
- link "California":
  - /url: /blog/california
- text: ·
- link "Palm Desert":
  - /url: /blog/california/palm-desert
- heading "Palm Desert Shopping Guide – El Paseo & Hidden Gems" [level=3]:
  - link "Palm Desert Shopping Guide – El Paseo & Hidden Gems":
    - /url: /blog/palm-desert-shopping-guide-el-paseo-hidden-gems
- text: 10 Mar 2026
- img "Palm Springs Golf Getaways – Top Courses, Weather & Where to Stay"
- link "California":
  - /url: /blog/california
- text: ·
- link "Palm Springs":
  - /url: /blog/california/palm-springs
- heading "Palm Springs Golf Getaways – Top Courses, Weather & Where to Stay" [level=3]:
  - link "Palm Springs Golf Getaways – Top Courses, Weather & Where to Stay":
    - /url: /blog/palm-springs-golf-getaways
- text: 5 Feb 2026
- button "Scroll right"
- contentinfo "footer":
  - list:
    - listitem:
      - button "Good Life Vacation Logo Explore Good Life Network":
        - img "Good Life Vacation Logo"
        - text: Explore Good Life Network
      - list:
        - listitem:
          - button "Central Florida"
          - list:
            - listitem:
              - button "Bahama Bay Logo Bahama Bay Resort and Spa":
                - link "Bahama Bay Logo Bahama Bay Resort and Spa":
                  - /url: https://www.bahamabay.com
                  - img "Bahama Bay Logo"
                  - text: Bahama Bay Resort and Spa
            - listitem:
              - button "Caribe Cove Logo Caribe Cove":
                - link "Caribe Cove Logo Caribe Cove":
                  - /url: https://www.caribecove.com
                  - img "Caribe Cove Logo"
                  - text: Caribe Cove
            - listitem:
              - button "Beyond Lodging Logo Beyond Lodging":
                - link "Beyond Lodging Logo Beyond Lodging":
                  - /url: https://www.beyondlodging.com
                  - img "Beyond Lodging Logo"
                  - text: Beyond Lodging
        - listitem:
          - button "West Florida"
          - list:
            - listitem:
              - button "TOPS'L Logo TOPS'L Beach & Raquet Resort":
                - link "TOPS'L Logo TOPS'L Beach & Raquet Resort":
                  - /url: https://www.topsl.com
                  - img "TOPS'L Logo"
                  - text: TOPS'L Beach & Raquet Resort
            - listitem:
              - button "Annabelle Lodging Logo Annabelle Lodging":
                - link "Annabelle Lodging Logo Annabelle Lodging":
                  - /url: https://www.annabellelodging.com
                  - img "Annabelle Lodging Logo"
                  - text: Annabelle Lodging
        - listitem:
          - button "Arizona"
          - list:
            - listitem:
              - button "Firesky Retreats Logo Firesky Retreats":
                - link "Firesky Retreats Logo Firesky Retreats":
                  - /url: https://www.fireskyretreats.com
                  - img "Firesky Retreats Logo"
                  - text: Firesky Retreats
        - listitem:
          - button "California"
          - list:
            - listitem:
              - button "Alice Lodging Logo Alice Lodging":
                - link "Alice Lodging Logo Alice Lodging":
                  - /url: https://www.alicelodging.com
                  - img "Alice Lodging Logo"
                  - text: Alice Lodging
        - listitem:
          - button "Washington"
          - list:
            - listitem:
              - button "Pacific Retreats Logo Pacific Retreats":
                - link "Pacific Retreats Logo Pacific Retreats":
                  - /url: https://www.pacificretreats.com
                  - img "Pacific Retreats Logo"
                  - text: Pacific Retreats
  - heading "Sign up for exclusive offers from us" [level=2]
  - text: Please complete the following form to receive news and special offers from Alice Lodging™
  - textbox "Email address":
    - /placeholder: Enter your email
  - button "Subscribe to newsletter" [disabled]: Subscribe
  - link "Alice Lodging™":
    - /url: /
    - img "Alice Lodging™"
  - link "Good Life Vacations Logo":
    - /url: https://www.goodlifevacations.com/about-us
    - img "Good Life Vacations Logo":
      - img
  - list:
    - paragraph: About
    - listitem:
      - link "About Alice Lodging":
        - /url: /about-us
    - listitem:
      - link "Our Story":
        - /url: /our-story
    - listitem:
      - link "Meet The Team":
        - /url: /meet-the-team
    - listitem:
      - link "List With Us":
        - /url: /list-with-us
  - list:
    - paragraph: Explore
    - listitem:
      - link "Specials":
        - /url: /specials
    - listitem:
      - link "Blogs":
        - /url: /blog
    - listitem:
      - link "Travel Insurance":
        - /url: /travel-insurance
    - listitem:
      - link "Privacy Policy":
        - /url: /privacy-policy
    - listitem:
      - link "Rental Rules and Policies":
        - /url: /rental-rules-and-policies
  - paragraph: Contact Us
  - text: 76300 Country Club Drive, Palm Desert, CA 92211 707 E. Tahquitz Canyon Way Ste 16, Palm Springs, CA 92262
  - link "office@alicelodging.com":
    - /url: mailto:office@alicelodging.com
  - link "+1 (760)-345-5695":
    - /url: tel:+1 (760)-345-5695
  - combobox "Search By Property"
  - link "Facebook":
    - /url: https://www.facebook.com/profile.php?id=61579637295109
  - link "Instagram":
    - /url: https://www.instagram.com/alicelodging/
  - link "Linkedin":
    - /url: https://www.linkedin.com/company/alice-lodging
  - text: © 2026 Alice Lodging™. All rights reserved. |
  - link "All Properties":
    - /url: /all-properties
  - text: "| Powered by"
  - link "Flow One":
    - /url: https://flow.one/
  - img "Flow One Logo"
- alert
```

# Test source

```ts
  1  | const { test, expect } = require('../fixtures/siteFixture');
  2  | const Logger = require('../utils/logger');
  3  | const ScreenshotHelper = require('../utils/screenshotHelper');
  4  | 
  5  | test.describe('TC7 — Intentional Failure Diagnostic Reporting Demo', () => {
  6  |   test.use({ siteKey: 'aliceLodging' });
  7  | 
  8  |   test('Demonstrate failure diagnostics (screenshot, element highlight, trace, & step logs)', async ({ homePage, page, siteConfig }) => {
  9  |     Logger.step(`[TC7 Failure Demo] Opening site ${siteConfig.name} to demonstrate diagnostic reporting`);
  10 | 
  11 |     await homePage.open();
  12 | 
  13 |     Logger.step(`Attempting assertion on intentional non-existent element`);
  14 | 
  15 |     const nonExistentElement = page.locator('#non-existent-property-verification-title-element');
  16 | 
  17 |     // Visually highlight element attempt before asserting failure
  18 |     await ScreenshotHelper.highlightElement(nonExistentElement);
  19 | 
  20 |     // Intentional strict assertion failure
> 21 |     await expect(nonExistentElement).toBeVisible({ timeout: 3000 });
     |                                      ^ Error: expect(locator).toBeVisible() failed
  22 |   });
  23 | });
  24 | 
```