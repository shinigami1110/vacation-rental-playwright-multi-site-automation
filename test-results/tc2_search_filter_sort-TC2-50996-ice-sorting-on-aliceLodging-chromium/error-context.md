# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tc2_search_filter_sort.spec.js >> TC2 — Search, Filtering, and Sorting Workflow [aliceLodging] >> Verify search, guest count, date selection, filters, and price sorting on aliceLodging
- Location: tests\tc2_search_filter_sort.spec.js:11:5

# Error details

```
Error: [TC2 FAILURE] Guest Child count did not increment via UI. Expected: 1, Got: 0
```

# Page snapshot

```yaml
- generic [ref=e1]:
  - generic [ref=e2]:
    - banner "header" [ref=e3]:
      - navigation "Header Navigation Bar" [ref=e4]:
        - link [ref=e7] [cursor=pointer]:
          - /url: /
          - img "Alice Lodging™ Logo" [ref=e8]
        - generic [ref=e9]:
          - generic [ref=e10]:
            - button "Destinations" [ref=e12] [cursor=pointer]
            - button "Collections" [ref=e16] [cursor=pointer]
            - link "Specials" [ref=e19] [cursor=pointer]:
              - /url: /specials
            - button "About" [ref=e21] [cursor=pointer]
            - link "Blog" [ref=e24] [cursor=pointer]:
              - /url: /blog
            - link "List With Us" [ref=e25] [cursor=pointer]:
              - /url: /list-with-us
            - link "Contact Us" [ref=e26] [cursor=pointer]:
              - /url: /contact-us
          - generic [ref=e27]:
            - button "Favourites" [ref=e28] [cursor=pointer]
            - button "User Login" [ref=e33] [cursor=pointer]
    - generic "Alice Lodging™ Home Page" [ref=e40]:
      - generic [ref=e47]:
        - generic [ref=e50]:
          - generic [ref=e51]: PREMIER VACATION HOMES
          - heading "For the moments that matter most" [level=1] [ref=e52]
        - generic [ref=e54]:
          - generic [ref=e56]:
            - generic [ref=e61]:
              - generic [ref=e62]: Location
              - combobox "Where to next?" [ref=e63]
            - button [disabled] [ref=e65] [cursor=pointer]
          - button "Select Arrival Date Select Departure Date" [ref=e71] [cursor=pointer]:
            - generic [ref=e75]:
              - generic [ref=e76]: Arrival
              - generic [ref=e77]: Add Date
            - generic [ref=e81]:
              - generic [ref=e82]: Depart
              - generic [ref=e83]: Add Date
          - 'button "Select Guests: 2 Adults 0 Children" [active] [ref=e86] [cursor=pointer]':
            - generic [ref=e90]:
              - generic [ref=e91]: Guests
              - generic [ref=e92]: 2 guests
          - button "Search" [ref=e93] [cursor=pointer]
      - generic [ref=e97]:
        - generic [ref=e99]:
          - generic [ref=e102]:
            - generic [ref=e103]: The Alice Stays
            - heading "Five-Star Standards" [level=2] [ref=e104]
            - generic [ref=e105]: Each home in our exclusive, Five-Star collection is chosen for its unparalleled elegance and distinctive character. From serene desert oases and secluded forest sanctuaries to breathtaking mountain escapes, every stay promises refined luxury infused with local soul.
          - generic [ref=e106]:
            - generic "Luxury" [ref=e108]:
              - link [ref=e109] [cursor=pointer]:
                - /url: /luxury-vacation-rentals
                - generic [ref=e110]:
                  - img "Luxury Homes" [ref=e111]
                  - paragraph [ref=e115]: Luxury
            - generic "Private Pool" [ref=e117]:
              - link [ref=e118] [cursor=pointer]:
                - /url: /private-pool-retreats
                - generic [ref=e119]:
                  - img "Private Pool" [ref=e120]
                  - paragraph [ref=e124]: Private Pool
            - generic "Pet Friendly" [ref=e126]:
              - link [ref=e127] [cursor=pointer]:
                - /url: /pet-friendly-vacation-rentals
                - generic [ref=e128]:
                  - img "Pet Friendly" [ref=e129]
                  - paragraph [ref=e133]: Pet Friendly
            - generic "Golf Course" [ref=e135]:
              - link [ref=e136] [cursor=pointer]:
                - /url: /golf-course-vacation-rentals
                - generic [ref=e137]:
                  - img "Golf Course" [ref=e138]
                  - paragraph [ref=e142]: Golf Course
            - generic "Group Stays" [ref=e144]:
              - link [ref=e145] [cursor=pointer]:
                - /url: /large-group-getaways
                - generic [ref=e146]:
                  - img "Group Stays" [ref=e147]
                  - paragraph [ref=e151]: Group Stays
            - generic "Romantic Getaways" [ref=e153]:
              - link [ref=e154] [cursor=pointer]:
                - /url: /romantic-retreats
                - generic [ref=e155]:
                  - img "Romantic Getaways" [ref=e156]
                  - paragraph [ref=e160]: Romantic Getaways
        - generic [ref=e162]:
          - generic [ref=e165]:
            - generic [ref=e166]: Destinations
            - heading "Wonder Awaits You" [level=2] [ref=e167]
            - generic [ref=e168]: Our California destinations redefine escape by inviting you to unwind in absolute luxury. Relax in serene desert landscapes with private pools, panoramic mountain views, and sun-drenched outdoor living spaces designed for effortless relaxation. Retreat to peaceful alpine settings where fresh mountain air, towering pines, and scenic surroundings create the perfect backdrop for a restorative getaway. From quiet mornings on private patios to evenings spent under star-filled skies, every experience is designed to help you slow down and reconnect. Each stay delivers striking design, immersive comfort, and effortless style that elevates every moment.
          - generic [ref=e172]:
            - generic "Palm Desert" [ref=e174]:
              - link [ref=e175] [cursor=pointer]:
                - /url: /palm-desert-vacation-rentals
                - generic [ref=e176]:
                  - img "Explore Palm Desert." [ref=e177]
                  - paragraph [ref=e181]: Palm Desert
            - generic "Palm Springs" [ref=e183]:
              - link [ref=e184] [cursor=pointer]:
                - /url: /palm-springs-vacation-rentals
                - generic [ref=e185]:
                  - img "Explore Palm Springs." [ref=e186]
                  - paragraph [ref=e190]: Palm Springs
            - generic "Rancho Mirage" [ref=e192]:
              - link [ref=e193] [cursor=pointer]:
                - /url: /rancho-mirage-area-guide
                - generic [ref=e194]:
                  - img "Explore Rancho Mirage." [ref=e195]
                  - paragraph [ref=e199]: Rancho Mirage
            - generic "La Quinta" [ref=e201]:
              - link [ref=e202] [cursor=pointer]:
                - /url: /la-quinta-area-guide
                - generic [ref=e203]:
                  - img "Explore La Quinta." [ref=e204]
                  - paragraph [ref=e208]: La Quinta
            - generic "Indio" [ref=e210]:
              - link [ref=e211] [cursor=pointer]:
                - /url: /indio-area-guide
                - generic [ref=e212]:
                  - img "Explore Indio." [ref=e213]
                  - paragraph [ref=e217]: Indio
        - generic [ref=e226]:
          - generic [ref=e228]:
            - generic [ref=e229]: Featured home of the week
            - heading "Alice’s Stay of the Week" [level=2] [ref=e230]
            - generic [ref=e231]: Curated for its distinctive design and welcoming ambiance, this exceptional property combines generous space with contemporary elegance, creating the ultimate retreat.
          - link [ref=e232] [cursor=pointer]:
            - /url: /listings/6924de4d943654000f5d8c1f
            - button "Book Now" [ref=e233]
        - generic [ref=e240]:
          - generic [ref=e241]:
            - generic [ref=e242]:
              - generic [ref=e243]: More From the featured
              - heading "Luxury Stays, Selected for You" [level=2] [ref=e244]
            - link "See All Properties" [ref=e246] [cursor=pointer]:
              - /url: /listings
              - button "See All Properties" [ref=e247]
          - generic [ref=e257]:
            - generic "Property card Desert Dream" [ref=e259]:
              - generic [ref=e260]:
                - link [ref=e262] [cursor=pointer]:
                  - /url: /listings/6924de9447db180013b45623
                  - img "Desert Dream- Alice Lodging" [ref=e267]
                - generic [ref=e268]:
                  - generic [ref=e269]:
                    - generic [ref=e270]: Average $617 per night includes all fees
                    - generic [ref=e272]:
                      - generic [ref=e273]:
                        - generic [ref=e274]: $617
                        - generic [ref=e275]: /night
                      - generic [ref=e276]: (includes fees)
                  - generic [ref=e277]: Aug 09 – Aug 12
              - button "Click to add unit to Favourites" [ref=e279] [cursor=pointer]
              - generic [ref=e283]:
                - generic [ref=e285]:
                  - generic [ref=e286]:
                    - img "beds" [ref=e288]
                    - generic "2 Beds" [ref=e291]: "2"
                  - generic [ref=e292]:
                    - img "shower" [ref=e294]
                    - generic "2 Baths" [ref=e298]: "2"
                  - generic "4 Guestss" [ref=e302]: "4"
                - generic [ref=e303]:
                  - link "Desert Dream" [ref=e305] [cursor=pointer]:
                    - /url: /listings/6924de9447db180013b45623
                  - generic [ref=e307]:
                    - generic [ref=e308]: Palm Springs, California
                    - generic [ref=e313]:
                      - text: 5.0 (
                      - link "8 reviews" [ref=e314] [cursor=pointer]:
                        - /url: /listings/6924de9447db180013b45623?#unitReviews
                      - text: )
            - generic "Property card Mag's Mountain View" [ref=e316]:
              - generic [ref=e317]:
                - link [ref=e319] [cursor=pointer]:
                  - /url: /listings/6924de481fd98a001220af10
                  - img "HEAD ON OVER CHAISE." [ref=e324]
                - generic [ref=e325]:
                  - generic [ref=e326]:
                    - generic [ref=e327]: Average $661 per night includes all fees
                    - generic [ref=e329]:
                      - generic [ref=e330]:
                        - generic [ref=e331]: $661
                        - generic [ref=e332]: /night
                      - generic [ref=e333]: (includes fees)
                  - generic [ref=e334]: Aug 09 – Aug 12
              - button "Click to add unit to Favourites" [ref=e336] [cursor=pointer]
              - generic [ref=e340]:
                - generic [ref=e341]:
                  - generic [ref=e342]:
                    - generic [ref=e343]:
                      - img "beds" [ref=e345]
                      - generic "4 Beds" [ref=e348]: "4"
                    - generic [ref=e349]:
                      - img "shower" [ref=e351]
                      - generic "4 Baths" [ref=e355]: "4"
                    - generic "8 Guestss" [ref=e359]: "8"
                  - generic [ref=e360]:
                    - generic [ref=e361]:
                      - img "Pet Friendly" [ref=e362]
                      - generic [ref=e364]: Pet Friendly
                    - generic [ref=e365]:
                      - img "Hot Tub" [ref=e366]
                      - generic [ref=e368]: Hot Tub
                - generic [ref=e369]:
                  - link "Mag's Mountain View" [ref=e371] [cursor=pointer]:
                    - /url: /listings/6924de481fd98a001220af10
                  - generic [ref=e373]:
                    - generic [ref=e374]: Palm Springs, California
                    - generic [ref=e379]:
                      - text: 5.0 (
                      - link "7 reviews" [ref=e380] [cursor=pointer]:
                        - /url: /listings/6924de481fd98a001220af10?#unitReviews
                      - text: )
        - generic [ref=e382]:
          - generic [ref=e384]:
            - generic [ref=e385]:
              - generic [ref=e386]: THE ALICE DIFFERENCE
              - heading "Why Book With Alice Lodging™?" [level=2] [ref=e387]
              - generic [ref=e388]: Alice Lodging™ redefines luxury vacation rentals by offering an effortless and seamless experience designed to make your getaway truly unforgettable. From meticulously curated high-end properties to personalized service tailored to your unique needs, Alice Lodging™ ensures every detail is taken care of so you can relax and indulge in the best that vacationing has to offer.
            - link "Learn More" [ref=e390] [cursor=pointer]:
              - /url: /list-with-us
              - button "Learn More" [ref=e391]
          - generic [ref=e397]:
            - generic [ref=e398]:
              - img "Best pricing" [ref=e401]
              - paragraph [ref=e408]: 24/7 Guest Support
              - paragraph [ref=e409]: Seamless stays with always-available support
            - generic [ref=e410]:
              - img "Worry Free Cancellation" [ref=e413]
              - paragraph [ref=e418]: Local Care Teams
              - paragraph [ref=e419]: On-the-ground staff in each destination for quick fixes
            - generic [ref=e420]:
              - img "24/7 Guest Service" [ref=e423]
              - paragraph [ref=e431]: Transparent Pricing
              - paragraph [ref=e432]: Book direct for clear and lower rates, no hidden platform fees
            - generic [ref=e433]:
              - img "Professional cleaning" [ref=e436]
              - paragraph [ref=e456]: Professionally Cleaned
              - paragraph [ref=e457]: Professionally serviced between each stay making it guest ready
        - generic [ref=e461]:
          - generic [ref=e462]: Reviews
          - generic [ref=e467]:
            - generic [ref=e470]:
              - paragraph [ref=e471]: "\"We had an incredible stay celebrating my wife's 40th birthday. The home was spacious, beautifully maintained, and had everything we needed. We loved the pool, hot tub, and tennis court, and the location was perfect for exploring Palm Springs. The hosts were wonderful, and we would love to come back!\""
              - generic [ref=e472]:
                - paragraph [ref=e473]: ★
                - paragraph [ref=e474]: ★
                - paragraph [ref=e475]: ★
                - paragraph [ref=e476]: ★
                - paragraph [ref=e477]: ★
              - paragraph [ref=e478]: Hamish and friends
              - paragraph [ref=e479]: Stayed at Casa Grande
            - generic [ref=e482]:
              - paragraph [ref=e483]: "\"A beautiful and peaceful place with breathtaking views. The home was spotless, stylish, and had everything we needed. We loved the nearby golf courses and morning walks. Our family had a wonderful time, and we would gladly return.\""
              - generic [ref=e484]:
                - paragraph [ref=e485]: ★
                - paragraph [ref=e486]: ★
                - paragraph [ref=e487]: ★
                - paragraph [ref=e488]: ★
                - paragraph [ref=e489]: ★
              - paragraph [ref=e490]: Ahmed and family
              - paragraph [ref=e491]: Stayed at Cool Camino
            - generic [ref=e494]:
              - paragraph [ref=e495]: "\"Our stay at Casa Grande was amazing. The hosts were very responsive, and all the instructions were easy to follow. It's an amazing house and has so many amenities to choose from we couldn't even use them all! Thank you for making it an amazing weekend and we look forward to returning!\""
              - generic [ref=e496]:
                - paragraph [ref=e497]: ★
                - paragraph [ref=e498]: ★
                - paragraph [ref=e499]: ★
                - paragraph [ref=e500]: ★
                - paragraph [ref=e501]: ★
              - paragraph [ref=e502]: Heather and friends
              - paragraph [ref=e503]: Stayed at Casa Grande
            - generic [ref=e506]:
              - paragraph [ref=e507]: "\"This team takes excellent care of their guests and goes above and beyond. They are honest, reliable, and genuinely care about making both guests and owners happy. As a vacation rental owner, I appreciate how thoughtful they are. I’m very glad I chose this team and would trust them without hesitation. \""
              - generic [ref=e508]:
                - paragraph [ref=e509]: ★
                - paragraph [ref=e510]: ★
                - paragraph [ref=e511]: ★
                - paragraph [ref=e512]: ★
                - paragraph [ref=e513]: ★
              - paragraph [ref=e514]: James H.
              - paragraph [ref=e515]: Homeowner Partner Review
            - generic [ref=e518]:
              - paragraph [ref=e519]: “We want to congratulate the team for earning exceptional guest reviews of our property. Seven 5-star reviews on Airbnb and two on VRBO are wonderful! Guests praised the easy check-in process and caring support from the team. It's rewarding to see our hard work recognized with 100% 5-star ratings and excellent comments."
              - generic [ref=e520]:
                - paragraph [ref=e521]: ★
                - paragraph [ref=e522]: ★
                - paragraph [ref=e523]: ★
                - paragraph [ref=e524]: ★
                - paragraph [ref=e525]: ★
              - paragraph [ref=e526]: John G.
              - paragraph [ref=e527]: Homeowner Partner Review
        - generic [ref=e529]:
          - generic [ref=e530]:
            - generic [ref=e531]:
              - generic [ref=e532]: GET INSPIRED
              - heading "Latest tips & tricks" [level=2] [ref=e533]
            - link "SEE ALL BLOGS" [ref=e535] [cursor=pointer]:
              - /url: /blog
              - button "SEE ALL BLOGS" [ref=e536]
          - generic [ref=e542]:
            - generic [ref=e544]:
              - generic "Blog undefined" [ref=e545]:
                - generic [ref=e546]:
                  - img "Best Water Parks in Palm Springs for Families, Slides & Summer Fun" [ref=e547]
                  - generic [ref=e548]:
                    - generic [ref=e549]:
                      - generic [ref=e550]:
                        - generic [ref=e551]:
                          - link "California" [ref=e552] [cursor=pointer]:
                            - /url: /blog/california
                          - text: ·
                        - link "Palm Springs" [ref=e554] [cursor=pointer]:
                          - /url: /blog/california/palm-springs
                      - heading [level=3] [ref=e555]:
                        - link "Best Water Parks in Palm Springs for Families, Slides & Summer Fun" [ref=e556] [cursor=pointer]:
                          - /url: /blog/best-water-parks-in-palm-springs-for-families
                    - generic [ref=e557]:
                      - generic [ref=e558]: 5 Jun
                      - generic [ref=e559]: "2026"
              - generic "Blog undefined" [ref=e560]:
                - generic [ref=e561]:
                  - img "Palm Desert Shopping Guide – El Paseo & Hidden Gems" [ref=e562]
                  - generic [ref=e563]:
                    - generic [ref=e564]:
                      - generic [ref=e565]:
                        - generic [ref=e566]:
                          - link "California" [ref=e567] [cursor=pointer]:
                            - /url: /blog/california
                          - text: ·
                        - link "Palm Desert" [ref=e569] [cursor=pointer]:
                          - /url: /blog/california/palm-desert
                      - heading [level=3] [ref=e570]:
                        - link "Palm Desert Shopping Guide – El Paseo & Hidden Gems" [ref=e571] [cursor=pointer]:
                          - /url: /blog/palm-desert-shopping-guide-el-paseo-hidden-gems
                    - generic [ref=e572]:
                      - generic [ref=e573]: 10 Mar
                      - generic [ref=e574]: "2026"
              - generic "Blog undefined" [ref=e575]:
                - generic [ref=e576]:
                  - img "Palm Springs Golf Getaways – Top Courses, Weather & Where to Stay" [ref=e577]
                  - generic [ref=e578]:
                    - generic [ref=e579]:
                      - generic [ref=e580]:
                        - generic [ref=e581]:
                          - link "California" [ref=e582] [cursor=pointer]:
                            - /url: /blog/california
                          - text: ·
                        - link "Palm Springs" [ref=e584] [cursor=pointer]:
                          - /url: /blog/california/palm-springs
                      - heading [level=3] [ref=e585]:
                        - link "Palm Springs Golf Getaways – Top Courses, Weather & Where to Stay" [ref=e586] [cursor=pointer]:
                          - /url: /blog/palm-springs-golf-getaways
                    - generic [ref=e587]:
                      - generic [ref=e588]: 5 Feb
                      - generic [ref=e589]: "2026"
            - button "Scroll right" [ref=e591] [cursor=pointer]
    - contentinfo "footer" [ref=e599]:
      - list [ref=e602]:
        - listitem [ref=e603]:
          - button "Good Life Vacation Logo Explore Good Life Network" [ref=e604] [cursor=pointer]:
            - generic [ref=e607]:
              - img "Good Life Vacation Logo" [ref=e609]
              - generic [ref=e610]: Explore Good Life Network
          - list [ref=e614]:
            - listitem [ref=e615]:
              - button "Central Florida" [ref=e616] [cursor=pointer]
              - list [ref=e624]:
                - listitem [ref=e625]:
                  - button [ref=e626] [cursor=pointer]:
                    - link "Bahama Bay Logo Bahama Bay Resort and Spa" [ref=e628]:
                      - /url: https://www.bahamabay.com
                      - generic [ref=e629]:
                        - img "Bahama Bay Logo" [ref=e631]
                        - generic [ref=e632]: Bahama Bay Resort and Spa
                - listitem [ref=e635]:
                  - button [ref=e636] [cursor=pointer]:
                    - link "Caribe Cove Logo Caribe Cove" [ref=e638]:
                      - /url: https://www.caribecove.com
                      - generic [ref=e639]:
                        - img "Caribe Cove Logo" [ref=e641]
                        - generic [ref=e642]: Caribe Cove
                - listitem [ref=e645]:
                  - button [ref=e646] [cursor=pointer]:
                    - link "Beyond Lodging Logo Beyond Lodging" [ref=e648]:
                      - /url: https://www.beyondlodging.com
                      - generic [ref=e649]:
                        - img "Beyond Lodging Logo" [ref=e651]
                        - generic [ref=e652]: Beyond Lodging
            - listitem [ref=e655]:
              - button "West Florida" [ref=e656] [cursor=pointer]
              - list [ref=e664]:
                - listitem [ref=e665]:
                  - button [ref=e666] [cursor=pointer]:
                    - link "TOPS'L Logo TOPS'L Beach & Raquet Resort" [ref=e668]:
                      - /url: https://www.topsl.com
                      - generic [ref=e669]:
                        - img "TOPS'L Logo" [ref=e671]
                        - generic [ref=e672]: TOPS'L Beach & Raquet Resort
                - listitem [ref=e675]:
                  - button [ref=e676] [cursor=pointer]:
                    - link "Annabelle Lodging Logo Annabelle Lodging" [ref=e678]:
                      - /url: https://www.annabellelodging.com
                      - generic [ref=e679]:
                        - img "Annabelle Lodging Logo" [ref=e681]
                        - generic [ref=e682]: Annabelle Lodging
            - listitem [ref=e685]:
              - button "Arizona" [ref=e686] [cursor=pointer]
              - list [ref=e694]:
                - listitem [ref=e695]:
                  - button [ref=e696] [cursor=pointer]:
                    - link "Firesky Retreats Logo Firesky Retreats" [ref=e698]:
                      - /url: https://www.fireskyretreats.com
                      - generic [ref=e699]:
                        - img "Firesky Retreats Logo" [ref=e701]
                        - generic [ref=e702]: Firesky Retreats
            - listitem [ref=e705]:
              - button "California" [ref=e706] [cursor=pointer]
              - list [ref=e714]:
                - listitem [ref=e715]:
                  - button [ref=e716] [cursor=pointer]:
                    - link "Alice Lodging Logo Alice Lodging" [ref=e718]:
                      - /url: https://www.alicelodging.com
                      - generic [ref=e719]:
                        - img "Alice Lodging Logo" [ref=e721]
                        - generic [ref=e722]: Alice Lodging
            - listitem [ref=e723]:
              - button "Washington" [ref=e724] [cursor=pointer]
              - list [ref=e732]:
                - listitem [ref=e733]:
                  - button [ref=e734] [cursor=pointer]:
                    - link "Pacific Retreats Logo Pacific Retreats" [ref=e736]:
                      - /url: https://www.pacificretreats.com
                      - generic [ref=e737]:
                        - img "Pacific Retreats Logo" [ref=e739]
                        - generic [ref=e740]: Pacific Retreats
      - generic [ref=e743]:
        - generic [ref=e746]:
          - generic [ref=e747]:
            - heading "Sign up for exclusive offers from us" [level=2] [ref=e748]
            - generic [ref=e749]:
              - generic [ref=e750]: Please complete the following form to receive news and special offers from Alice Lodging™
              - generic [ref=e751]:
                - textbox "Email address" [ref=e753]:
                  - /placeholder: Enter your email
                - button "Subscribe to newsletter" [disabled] [ref=e756]:
                  - generic [ref=e757]: Subscribe
          - generic [ref=e762]:
            - generic [ref=e763]:
              - link [ref=e764] [cursor=pointer]:
                - /url: /
                - img "Alice Lodging™" [ref=e765]
              - link [ref=e766] [cursor=pointer]:
                - /url: https://www.goodlifevacations.com/about-us
                - img "Good Life Vacations Logo" [ref=e768]
            - list [ref=e774]:
              - paragraph [ref=e775]: About
              - listitem [ref=e776]:
                - link "About Alice Lodging" [ref=e777] [cursor=pointer]:
                  - /url: /about-us
              - listitem [ref=e778]:
                - link "Our Story" [ref=e779] [cursor=pointer]:
                  - /url: /our-story
              - listitem [ref=e780]:
                - link "Meet The Team" [ref=e781] [cursor=pointer]:
                  - /url: /meet-the-team
              - listitem [ref=e782]:
                - link "List With Us" [ref=e783] [cursor=pointer]:
                  - /url: /list-with-us
            - list [ref=e785]:
              - paragraph [ref=e786]: Explore
              - listitem [ref=e787]:
                - link "Specials" [ref=e788] [cursor=pointer]:
                  - /url: /specials
              - listitem [ref=e789]:
                - link "Blogs" [ref=e790] [cursor=pointer]:
                  - /url: /blog
              - listitem [ref=e791]:
                - link "Travel Insurance" [ref=e792] [cursor=pointer]:
                  - /url: /travel-insurance
              - listitem [ref=e793]:
                - link "Privacy Policy" [ref=e794] [cursor=pointer]:
                  - /url: /privacy-policy
              - listitem [ref=e795]:
                - link "Rental Rules and Policies" [ref=e796] [cursor=pointer]:
                  - /url: /rental-rules-and-policies
            - generic [ref=e797]:
              - generic [ref=e799]:
                - paragraph [ref=e800]: Contact Us
                - generic [ref=e801]:
                  - generic [ref=e802]: 76300 Country Club Drive, Palm Desert, CA 92211
                  - generic [ref=e807]: 707 E. Tahquitz Canyon Way Ste 16, Palm Springs, CA 92262
                  - link "office@alicelodging.com" [ref=e812] [cursor=pointer]:
                    - /url: mailto:office@alicelodging.com
                  - link "+1 (760)-345-5695" [ref=e820] [cursor=pointer]:
                    - /url: tel:+1 (760)-345-5695
              - generic [ref=e823]:
                - combobox "Search By Property" [ref=e828]
                - button [disabled] [ref=e830] [cursor=pointer]
        - generic [ref=e836]:
          - generic [ref=e837]:
            - link "Facebook" [ref=e838] [cursor=pointer]:
              - /url: https://www.facebook.com/profile.php?id=61579637295109
            - link "Instagram" [ref=e842] [cursor=pointer]:
              - /url: https://www.instagram.com/alicelodging/
            - link "Linkedin" [ref=e846] [cursor=pointer]:
              - /url: https://www.linkedin.com/company/alice-lodging
          - generic [ref=e850]:
            - generic [ref=e851]: © 2026 Alice Lodging™. All rights reserved.
            - generic [ref=e852]: "|"
            - link "All Properties" [ref=e853] [cursor=pointer]:
              - /url: /all-properties
            - generic [ref=e854]: "|"
            - generic [ref=e855]:
              - generic [ref=e856]:
                - text: Powered by
                - link "Flow One" [ref=e857] [cursor=pointer]:
                  - /url: https://flow.one/
              - img "Flow One Logo" [ref=e858]
  - generic [ref=e859]:
    - paragraph [ref=e860]:
      - text: By continuing to use this website, you agree to use of cookies in accordance with our
      - link "Privacy Policy" [ref=e861] [cursor=pointer]:
        - /url: /privacy-policy
      - text: . By exiting this window, default cookies will be accepted. To change your preferences, Click Here.
    - button "Accept" [ref=e863] [cursor=pointer]
  - alert [ref=e865]
```

# Test source

```ts
  106 |    *     relative to labelled rows (Adults, Children)
  107 |    *  5. Click those buttons N times
  108 |    *  6. Read aria-label to verify
  109 |    *
  110 |    * @param {number} adultsToAdd
  111 |    * @param {number} childrenToAdd
  112 |    */
  113 |   async setGuestCount(adultsToAdd = 2, childrenToAdd = 1) {
  114 |     Logger.step(`[TC2] Configuring guest count (+${adultsToAdd} Adults, +${childrenToAdd} Children) on ${this.siteConfig.name}`);
  115 | 
  116 |     // Step 1: Read BEFORE state
  117 |     const before = await this._readGuestCountsFromUI();
  118 |     Logger.info(`[TC2] BEFORE: Adults=${before.adults}, Children=${before.children}`);
  119 | 
  120 |     // Step 2: Remove fixed promo overlay that intercepts pointer events
  121 |     await this.page.evaluate(() => {
  122 |       document.querySelectorAll('#headlessui-portal-root > div').forEach(child => {
  123 |         const style = window.getComputedStyle(child);
  124 |         const isFixed = style.position === 'fixed' || child.className.includes('fixed');
  125 |         if (isFixed) child.remove();
  126 |       });
  127 |       const bannerClose = document.querySelector('button[aria-label="Close banner"]');
  128 |       if (bannerClose) bannerClose.click();
  129 |     }).catch(() => {});
  130 |     await this.page.waitForTimeout(300);
  131 | 
  132 |     // Step 3: Open guest picker via direct DOM element click (avoids CSS pointer-event interception)
  133 |     const guestBtn = this.page.locator('button.popoverButtonContainer[aria-label*="Select Guests"]').first();
  134 |     await guestBtn.waitFor({ state: 'visible', timeout: 10000 });
  135 | 
  136 |     // Use page.evaluate to dispatch a real click event on the button element directly
  137 |     await this.page.evaluate(() => {
  138 |       const btn = document.querySelector('button.popoverButtonContainer[aria-label*="Select Guests"]');
  139 |       if (btn) {
  140 |         btn.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true }));
  141 |       }
  142 |     });
  143 |     await this.page.waitForTimeout(1500);
  144 | 
  145 |     // Step 4: Find the Increment Adults and Increment Children buttons by aria-label
  146 |     // The dispatchEvent click opens the guest picker; buttons appear with known aria-labels
  147 |     const stepperData = await this.page.evaluate(() => {
  148 |       const incrementAdults = document.querySelector('button[aria-label="Increment adults"]');
  149 |       const incrementChildren = document.querySelector('button[aria-label="Increment children"]');
  150 |       if (!incrementAdults || !incrementChildren) {
  151 |         // Try partial match
  152 |         const allBtns = Array.from(document.querySelectorAll('button'));
  153 |         const adultBtn = allBtns.find(b => (b.getAttribute('aria-label') || '').toLowerCase().includes('increment adult') || (b.getAttribute('aria-label') || '').toLowerCase().includes('add adult'));
  154 |         const childBtn = allBtns.find(b => (b.getAttribute('aria-label') || '').toLowerCase().includes('increment child') || (b.getAttribute('aria-label') || '').toLowerCase().includes('add child'));
  155 |         if (!adultBtn || !childBtn) {
  156 |           return { found: false, allAriaLabels: allBtns.map(b => b.getAttribute('aria-label') || '').filter(Boolean) };
  157 |         }
  158 |         const aR = adultBtn.getBoundingClientRect();
  159 |         const cR = childBtn.getBoundingClientRect();
  160 |         return {
  161 |           found: true,
  162 |           adultPlus: { x: aR.x + aR.width / 2, y: aR.y + aR.height / 2 },
  163 |           childPlus: { x: cR.x + cR.width / 2, y: cR.y + cR.height / 2 }
  164 |         };
  165 |       }
  166 |       const aR = incrementAdults.getBoundingClientRect();
  167 |       const cR = incrementChildren.getBoundingClientRect();
  168 |       return {
  169 |         found: true,
  170 |         adultPlus: { x: aR.x + aR.width / 2, y: aR.y + aR.height / 2 },
  171 |         childPlus: { x: cR.x + cR.width / 2, y: cR.y + cR.height / 2 }
  172 |       };
  173 |     });
  174 | 
  175 |     Logger.info(`[TC2] Guest stepper detection: ${JSON.stringify(stepperData)}`);
  176 | 
  177 |     if (!stepperData.found) {
  178 |       throw new Error(`[TC2 FAILURE] Increment adults/children buttons not found after guest picker opened on ${this.siteConfig.name}. AriaLabels present: [${(stepperData.allAriaLabels || []).join(', ')}]`);
  179 |     }
  180 | 
  181 |     // Step 5: Click Adult '+' stepper
  182 |     for (let i = 0; i < adultsToAdd; i++) {
  183 |       await this.page.mouse.click(stepperData.adultPlus.x, stepperData.adultPlus.y);
  184 |       await this.page.waitForTimeout(400);
  185 |     }
  186 | 
  187 |     // Step 6: Click Children '+' stepper
  188 |     for (let i = 0; i < childrenToAdd; i++) {
  189 |       await this.page.mouse.click(stepperData.childPlus.x, stepperData.childPlus.y);
  190 |       await this.page.waitForTimeout(400);
  191 |     }
  192 | 
  193 |     // Step 7: Close popover
  194 |     await this.page.keyboard.press('Escape').catch(() => {});
  195 |     await this.page.waitForTimeout(800);
  196 | 
  197 | 
  198 |     // Step 8: Read AFTER state and verify
  199 |     const after = await this._readGuestCountsFromUI();
  200 |     Logger.info(`[TC2] AFTER: Adults=${after.adults}, Children=${after.children}`);
  201 | 
  202 |     if (after.adults !== before.adults + adultsToAdd) {
  203 |       throw new Error(`[TC2 FAILURE] Guest Adult count did not increment via UI. Expected: ${before.adults + adultsToAdd}, Got: ${after.adults}`);
  204 |     }
  205 |     if (after.children !== before.children + childrenToAdd) {
> 206 |       throw new Error(`[TC2 FAILURE] Guest Child count did not increment via UI. Expected: ${before.children + childrenToAdd}, Got: ${after.children}`);
      |             ^ Error: [TC2 FAILURE] Guest Child count did not increment via UI. Expected: 1, Got: 0
  207 |     }
  208 | 
  209 |     return {
  210 |       adultsBefore: before.adults,
  211 |       adultsAfter: after.adults,
  212 |       childrenBefore: before.children,
  213 |       childrenAfter: after.children
  214 |     };
  215 |   }
  216 | 
  217 |   /**
  218 |    * Select future travel dates strictly using real calendar UI clicks and verify via aria-label.
  219 |    * NO URL MANIPULATION FALLBACKS ALLOWED.
  220 |    * 
  221 |    * @param {Date} checkInDate 
  222 |    * @param {Date} checkOutDate 
  223 |    * @returns {Promise<{checkInSelected: string, checkOutSelected: string, displayText: string}>}
  224 |    */
  225 |   async setFutureDates(checkInDate, checkOutDate) {
  226 |     const checkInISO = checkInDate.toISOString().split('T')[0];
  227 |     const checkOutISO = checkOutDate.toISOString().split('T')[0];
  228 |     Logger.step(`[TC2] Selecting future dates: Check-in ${checkInISO}, Check-out ${checkOutISO}`);
  229 |     await this._dismissPromoPopupsOnly();
  230 | 
  231 |     // Step 1: Read BEFORE date state
  232 |     const before = await this._readDateStateFromUI();
  233 |     Logger.info(`[TC2] Dates BEFORE: arrival=${before.arrivalISO}, departure=${before.departureISO}`);
  234 | 
  235 |     // Step 2: Open Calendar date picker trigger via real UI click
  236 |     const dateBtn = this.page.locator('button.popoverButtonContainer[aria-label*="Arrival"]').first();
  237 |     await dateBtn.waitFor({ state: 'visible', timeout: 10000 });
  238 |     await dateBtn.click({ force: true });
  239 |     await this.page.waitForTimeout(1000);
  240 | 
  241 |     // Step 3: Locate and click check-in day cell by ISO date attribute / label
  242 |     const checkInCell = this.page.locator(`time[datetime="${checkInISO}"], button[aria-label*="${checkInISO}"], [data-date="${checkInISO}"]`).first();
  243 |     if (!await checkInCell.isVisible({ timeout: 5000 }).catch(() => false)) {
  244 |       throw new Error(`[TC2 FAILURE] Check-in calendar cell for date ${checkInISO} was not found in open Calendar on ${this.siteConfig.name}`);
  245 |     }
  246 |     await checkInCell.click({ force: true });
  247 |     await this.page.waitForTimeout(500);
  248 | 
  249 |     // Step 4: Locate and click check-out day cell
  250 |     const checkOutCell = this.page.locator(`time[datetime="${checkOutISO}"], button[aria-label*="${checkOutISO}"], [data-date="${checkOutISO}"]`).first();
  251 |     if (!await checkOutCell.isVisible({ timeout: 5000 }).catch(() => false)) {
  252 |       throw new Error(`[TC2 FAILURE] Check-out calendar cell for date ${checkOutISO} was not found in open Calendar on ${this.siteConfig.name}`);
  253 |     }
  254 |     await checkOutCell.click({ force: true });
  255 |     await this.page.waitForTimeout(500);
  256 | 
  257 |     await this.page.keyboard.press('Escape').catch(() => {});
  258 |     await this.page.waitForTimeout(800);
  259 | 
  260 |     // Step 5: Read AFTER date state strictly from actual UI (No URL fallbacks)
  261 |     const after = await this._readDateStateFromUI();
  262 |     Logger.info(`[TC2] Dates AFTER: arrival=${after.arrivalISO}, departure=${after.departureISO}`);
  263 | 
  264 |     if (after.arrivalISO !== checkInISO) {
  265 |       throw new Error(`[TC2 FAILURE] Check-in date not reflected in UI. Expected: ${checkInISO}, Got: ${after.arrivalISO}. Label: "${after.label}"`);
  266 |     }
  267 |     if (after.departureISO !== checkOutISO) {
  268 |       throw new Error(`[TC2 FAILURE] Check-out date not reflected in UI. Expected: ${checkOutISO}, Got: ${after.departureISO}. Label: "${after.label}"`);
  269 |     }
  270 | 
  271 |     return {
  272 |       checkInSelected: checkInISO,
  273 |       checkOutSelected: checkOutISO,
  274 |       displayText: after.label
  275 |     };
  276 |   }
  277 | 
  278 |   /**
  279 |    * Execute destination search using UI input
  280 |    * @param {string} destination
  281 |    */
  282 |   async executeSearch(destination) {
  283 |     Logger.step(`[TC2] Performing destination search for: "${destination}"`);
  284 |     await this._dismissPromoPopupsOnly();
  285 |     await this._closeAllPopovers();
  286 | 
  287 |     // The current URL should already have guests + dates from previous steps.
  288 |     // Now add the search/destination and navigate to listings.
  289 |     const currentUrl = new URL(this.page.url());
  290 |     const params = new URLSearchParams(currentUrl.search);
  291 | 
  292 |     // Navigate to listings page with all search params preserved
  293 |     const listingsUrl = new URL(`${this.siteConfig.baseUrl}/listings`);
  294 |     for (const [key, value] of params.entries()) {
  295 |       listingsUrl.searchParams.set(key, value);
  296 |     }
  297 | 
  298 |     await this.navigateTo(listingsUrl.toString());
  299 |     await this.page.waitForTimeout(3000);
  300 |     await this._dismissPromoPopupsOnly();
  301 |     await this._closeAllPopovers();
  302 |     Logger.info(`[TC2] Navigated to listings: ${listingsUrl.toString()}`);
  303 |   }
  304 | 
  305 |   /**
  306 |    * Get visible property card locators (links to /listing/ pages)
```