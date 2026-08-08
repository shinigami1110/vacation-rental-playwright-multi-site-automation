# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tc4_navigation.spec.js >> TC4 — Navigation Validation [aliceLodging] >> Verify navigation menu, options population, category page navigation, and property info consistency on aliceLodging
- Location: tests\tc4_navigation.spec.js:10:5

# Error details

```
TimeoutError: locator.click: Timeout 15000ms exceeded.
Call log:
  - waiting for locator('[aria-label^="Property card "]').first().locator('a[href*="/listing"]').first()
    - locator resolved to <a class="disable-highlight" href="/listings/6924de8c47db180013b451f6">…</a>
  - attempting click action
    2 × waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <div class="fixed bottom-0 h-[80%] sm:h-full sm:top-0 z-modal w-screen overflow-y-auto sm:flex sm:items-center sm:justify-center p-4">…</div> from <div id="headlessui-portal-root">…</div> subtree intercepts pointer events
    - retrying click action
    - waiting 20ms
    2 × waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <div class="fixed bottom-0 h-[80%] sm:h-full sm:top-0 z-modal w-screen overflow-y-auto sm:flex sm:items-center sm:justify-center p-4">…</div> from <div id="headlessui-portal-root">…</div> subtree intercepts pointer events
    - retrying click action
      - waiting 100ms
    24 × waiting for element to be visible, enabled and stable
       - element is visible, enabled and stable
       - scrolling into view if needed
       - done scrolling
       - <div class="fixed bottom-0 h-[80%] sm:h-full sm:top-0 z-modal w-screen overflow-y-auto sm:flex sm:items-center sm:justify-center p-4">…</div> from <div id="headlessui-portal-root">…</div> subtree intercepts pointer events
     - retrying click action
       - waiting 500ms

```

# Page snapshot

```yaml
- generic [ref=f5e1]:
  - generic [ref=f5e2]:
    - banner "header" [ref=f5e3]:
      - navigation "Header Navigation Bar" [ref=f5e4]:
        - link [ref=f5e7] [cursor=pointer]:
          - /url: /
          - img "Alice Lodging™ Logo" [ref=f5e8]
        - generic [ref=f5e9]:
          - generic [ref=f5e10]:
            - button "Destinations" [ref=f5e12] [cursor=pointer]
            - button "Collections" [ref=f5e16] [cursor=pointer]
            - link "Specials" [ref=f5e19] [cursor=pointer]:
              - /url: /specials
            - button "About" [ref=f5e21] [cursor=pointer]
            - link "Blog" [ref=f5e24] [cursor=pointer]:
              - /url: /blog
            - link "List With Us" [ref=f5e25] [cursor=pointer]:
              - /url: /list-with-us
            - link "Contact Us" [ref=f5e26] [cursor=pointer]:
              - /url: /contact-us
          - generic [ref=f5e27]:
            - button "Favourites" [ref=f5e28] [cursor=pointer]
            - button "User Login" [ref=f5e33] [cursor=pointer]
      - generic [ref=f5e39]:
        - link "⚡ Flash Summer Deals Alert • 20% Off with SUMMERESCAPE • For Check ins On or Before Sep 30" [ref=f5e41] [cursor=pointer]:
          - /url: /specials/palm-springs-palm-desert-summer-deals-save-20-on-vacation-rental
        - button "Close banner" [ref=f5e42] [cursor=pointer]
    - generic [ref=f5e46]:
      - heading "Vacation Rentals by Alice Lodging™" [level=1] [ref=f5e50]
      - generic [ref=f5e55]:
        - generic [ref=f5e57]:
          - generic [ref=f5e62]:
            - generic [ref=f5e63]: Location
            - combobox "Where to next?" [ref=f5e64]
          - button [disabled] [ref=f5e66] [cursor=pointer]
        - button "Select Arrival Date Select Departure Date" [ref=f5e72] [cursor=pointer]:
          - generic [ref=f5e76]:
            - generic [ref=f5e77]: Arrival
            - generic [ref=f5e78]: Add Date
          - generic [ref=f5e82]:
            - generic [ref=f5e83]: Depart
            - generic [ref=f5e84]: Add Date
        - 'button "Select Guests: 0 Adults 0 Children" [ref=f5e87] [cursor=pointer]':
          - generic [ref=f5e91]:
            - generic [ref=f5e92]: Guests
            - generic [ref=f5e93]: Who's in?
        - button "Search" [ref=f5e94] [cursor=pointer]
      - generic [ref=f5e99]:
        - generic [ref=f5e102]:
          - button "Filters" [ref=f5e103] [cursor=pointer]
          - button [ref=f5e109] [cursor=pointer]:
            - button "Sort" [ref=f5e110]:
              - generic [ref=f5e114]: ": Default"
        - generic [ref=f5e115]:
          - generic [ref=f5e118]:
            - generic "Property card Teal and Tangerine Retreat" [ref=f5e120]:
              - generic [ref=f5e121]:
                - link [ref=f5e123] [cursor=pointer]:
                  - /url: /listings/6924de8c47db180013b451f6
                  - generic [ref=f5e127]:
                    - img "BACK OF HOME" [ref=f5e131]
                    - img "BACK OF HOME REVERSE." [ref=f5e135]
                    - img "DEN" [ref=f5e139]
                    - img "DEN REVERSE" [ref=f5e143]
                    - img "DEN MOUNTAIN VIEW" [ref=f5e147]
                    - img "LIVING SPACE REVERSE" [ref=f5e151]
                    - img "LIVING SPACE" [ref=f5e155]
                    - img "LIVING SPACE TO DEN" [ref=f5e159]
                    - img "DINING SPACE" [ref=f5e163]
                    - img "DINING SPACE TO KITCHEN" [ref=f5e167]
                - generic [ref=f5e181]:
                  - generic [ref=f5e182]:
                    - generic [ref=f5e183]: Average $520 per night includes all fees
                    - generic [ref=f5e185]:
                      - generic [ref=f5e186]:
                        - generic [ref=f5e187]: $520
                        - generic [ref=f5e188]: /night
                      - generic [ref=f5e189]: (includes fees)
                  - generic [ref=f5e190]: Aug 09 – Aug 12
              - button "Click to add unit to Favourites" [ref=f5e192] [cursor=pointer]
              - generic [ref=f5e196]:
                - generic [ref=f5e197]:
                  - generic [ref=f5e198]:
                    - generic [ref=f5e199]:
                      - img "beds" [ref=f5e201]
                      - generic "3 Beds" [ref=f5e204]: "3"
                    - generic [ref=f5e205]:
                      - img "shower" [ref=f5e207]
                      - generic "3 Baths" [ref=f5e211]: "3"
                    - generic "6 Guestss" [ref=f5e215]: "6"
                  - generic [ref=f5e216]:
                    - generic [ref=f5e217]:
                      - img "Pet Friendly" [ref=f5e218]
                      - generic [ref=f5e220]: Pet Friendly
                    - generic [ref=f5e221]:
                      - img "Hot Tub" [ref=f5e222]
                      - generic [ref=f5e224]: Hot Tub
                - generic [ref=f5e225]:
                  - link "Teal and Tangerine Retreat" [ref=f5e227] [cursor=pointer]:
                    - /url: /listings/6924de8c47db180013b451f6
                  - generic [ref=f5e229]:
                    - generic [ref=f5e230]: Palm Springs, California
                    - generic [ref=f5e235]:
                      - text: 5.0 (
                      - link "2 reviews" [ref=f5e236] [cursor=pointer]:
                        - /url: /listings/6924de8c47db180013b451f6?#unitReviews
                      - text: )
            - generic "Property card VB938 - Safari Vibe" [ref=f5e238]:
              - generic [ref=f5e239]:
                - link [ref=f5e241] [cursor=pointer]:
                  - /url: /listings/6924de7947db180013b447d1
                  - generic [ref=f5e245]:
                    - img "LIVING ROOM OVER COUCH" [ref=f5e249]
                    - img "VIEW FROM BACK PATIO" [ref=f5e253]
                    - img "FRONT OF HOME" [ref=f5e257]
                    - img "BACK OF HOME" [ref=f5e261]
                    - img "MAIN BEDROOM PATIO" [ref=f5e265]
                    - img "PATIO TABLE REVERSE" [ref=f5e269]
                    - img "BACK PATIO TO VIEW" [ref=f5e273]
                    - img "LIVING ROOM.jpg mls" [ref=f5e277]
                    - img "LIVING ROOM REVERSE.jpg mls" [ref=f5e281]
                    - img "LIVING ROOM TIGHT.jpg mls" [ref=f5e285]
                - generic [ref=f5e299]:
                  - generic [ref=f5e300]:
                    - generic [ref=f5e301]: Average $325 per night includes all fees
                    - generic [ref=f5e303]:
                      - generic [ref=f5e304]:
                        - generic [ref=f5e305]: $325
                        - generic [ref=f5e306]: /night
                      - generic [ref=f5e307]: (includes fees)
                  - generic [ref=f5e308]: Aug 09 – Aug 13
              - button "Click to add unit to Favourites" [ref=f5e310] [cursor=pointer]
              - generic [ref=f5e314]:
                - generic [ref=f5e315]:
                  - generic [ref=f5e316]:
                    - generic [ref=f5e317]:
                      - img "beds" [ref=f5e319]
                      - generic "2 Beds" [ref=f5e322]: "2"
                    - generic [ref=f5e323]:
                      - img "shower" [ref=f5e325]
                      - generic "3 Baths" [ref=f5e329]: "3"
                    - generic "4 Guestss" [ref=f5e333]: "4"
                  - generic [ref=f5e335]:
                    - img "Hot Tub" [ref=f5e336]
                    - generic [ref=f5e338]: Hot Tub
                - generic [ref=f5e339]:
                  - link "VB938 - Safari Vibe" [ref=f5e341] [cursor=pointer]:
                    - /url: /listings/6924de7947db180013b447d1
                  - generic [ref=f5e343]:
                    - generic [ref=f5e344]: Palm Desert, California
                    - generic [ref=f5e349]:
                      - text: 5.0 (
                      - link "1 reviews" [ref=f5e350] [cursor=pointer]:
                        - /url: /listings/6924de7947db180013b447d1?#unitReviews
                      - text: )
            - generic "Property card VS862 - Bloom Valley" [ref=f5e352]:
              - generic [ref=f5e353]:
                - link [ref=f5e355] [cursor=pointer]:
                  - /url: /listings/6924de2744e4c800130e5ae4
                  - generic [ref=f5e359]:
                    - img "Living Area" [ref=f5e363]
                    - img "Living" [ref=f5e367]
                    - img "Living Area" [ref=f5e371]
                    - img "Living" [ref=f5e375]
                    - img "Living" [ref=f5e379]
                    - img "Living and Dining" [ref=f5e383]
                    - img "Living and Dining" [ref=f5e387]
                    - img "hall way" [ref=f5e391]
                    - img "Dining Area" [ref=f5e395]
                    - img "Kitchen" [ref=f5e399]
                - generic [ref=f5e413]:
                  - generic [ref=f5e414]:
                    - generic [ref=f5e415]: Average $270 per night includes all fees
                    - generic [ref=f5e417]:
                      - generic [ref=f5e418]:
                        - generic [ref=f5e419]: $270
                        - generic [ref=f5e420]: /night
                      - generic [ref=f5e421]: (includes fees)
                  - generic [ref=f5e422]: Aug 09 – Aug 13
              - button "Click to add unit to Favourites" [ref=f5e424] [cursor=pointer]
              - generic [ref=f5e428]:
                - generic [ref=f5e429]:
                  - generic [ref=f5e430]:
                    - generic [ref=f5e431]:
                      - img "beds" [ref=f5e433]
                      - generic "2 Beds" [ref=f5e436]: "2"
                    - generic [ref=f5e437]:
                      - img "shower" [ref=f5e439]
                      - generic "2 Baths" [ref=f5e443]: "2"
                    - generic "4 Guestss" [ref=f5e447]: "4"
                  - generic [ref=f5e449]:
                    - img "Hot Tub" [ref=f5e450]
                    - generic [ref=f5e452]: Hot Tub
                - generic [ref=f5e453]:
                  - link "VS862 - Bloom Valley" [ref=f5e455] [cursor=pointer]:
                    - /url: /listings/6924de2744e4c800130e5ae4
                  - generic [ref=f5e457]:
                    - generic [ref=f5e458]: Palm Desert, California
                    - generic [ref=f5e463]:
                      - text: 5.0 (
                      - link "3 reviews" [ref=f5e464] [cursor=pointer]:
                        - /url: /listings/6924de2744e4c800130e5ae4?#unitReviews
                      - text: )
            - generic "Property card VB887 - Desert Vacay" [ref=f5e466]:
              - generic [ref=f5e467]:
                - link [ref=f5e469] [cursor=pointer]:
                  - /url: /listings/6924ddb58b937d0012978adc
                  - generic [ref=f5e473]:
                    - img "LIVING ROOM" [ref=f5e477]
                    - img "LIVING ROOM OVER COUCH" [ref=f5e481]
                    - img "LIVING ROOM" [ref=f5e485]
                    - img "DINING SPACE" [ref=f5e489]
                    - img "DINING SPACE" [ref=f5e493]
                    - img "KITCHEN BAR TOP" [ref=f5e497]
                    - img "TOWARDS KITCHEN" [ref=f5e501]
                    - img "KITCHEN TIGHT" [ref=f5e505]
                    - img "KITCHEN" [ref=f5e509]
                    - img "KITCHEN REVERSE" [ref=f5e513]
                - generic [ref=f5e527]:
                  - generic [ref=f5e528]:
                    - generic [ref=f5e529]: Average $321 per night includes all fees
                    - generic [ref=f5e531]:
                      - generic [ref=f5e532]:
                        - generic [ref=f5e533]: $321
                        - generic [ref=f5e534]: /night
                      - generic [ref=f5e535]: (includes fees)
                  - generic [ref=f5e536]: Aug 09 – Aug 11
              - button "Click to add unit to Favourites" [ref=f5e538] [cursor=pointer]
              - generic [ref=f5e542]:
                - generic [ref=f5e543]:
                  - generic [ref=f5e544]:
                    - generic [ref=f5e545]:
                      - img "beds" [ref=f5e547]
                      - generic "2 Beds" [ref=f5e550]: "2"
                    - generic [ref=f5e551]:
                      - img "shower" [ref=f5e553]
                      - generic "2 Baths" [ref=f5e557]: "2"
                    - generic "4 Guestss" [ref=f5e561]: "4"
                  - generic [ref=f5e562]:
                    - generic [ref=f5e563]:
                      - img "Pet Friendly" [ref=f5e564]
                      - generic [ref=f5e566]: Pet Friendly
                    - generic [ref=f5e567]:
                      - img "Hot Tub" [ref=f5e568]
                      - generic [ref=f5e570]: Hot Tub
                - generic [ref=f5e571]:
                  - link "VB887 - Desert Vacay" [ref=f5e573] [cursor=pointer]:
                    - /url: /listings/6924ddb58b937d0012978adc
                  - generic [ref=f5e575]:
                    - generic [ref=f5e576]: Palm Desert, California
                    - generic [ref=f5e581]:
                      - text: 5.0 (
                      - link "4 reviews" [ref=f5e582] [cursor=pointer]:
                        - /url: /listings/6924ddb58b937d0012978adc?#unitReviews
                      - text: )
            - generic "Property card Luxe Retreat" [ref=f5e584]:
              - generic [ref=f5e585]:
                - link [ref=f5e587] [cursor=pointer]:
                  - /url: /listings/6a42c76cc789e20014b48707
                  - generic [ref=f5e591]:
                    - img "Image" [ref=f5e595]
                    - img "Image" [ref=f5e599]
                    - img "Image" [ref=f5e603]
                    - img "Image" [ref=f5e607]
                    - img "Image" [ref=f5e611]
                    - img "Image" [ref=f5e615]
                    - img "Image" [ref=f5e619]
                    - img "Image" [ref=f5e623]
                    - img "Image" [ref=f5e627]
                    - img "Image" [ref=f5e631]
                - generic [ref=f5e645]:
                  - generic [ref=f5e646]:
                    - generic [ref=f5e647]: Average $495 per night includes all fees
                    - generic [ref=f5e649]:
                      - generic [ref=f5e650]:
                        - generic [ref=f5e651]: $495
                        - generic [ref=f5e652]: /night
                      - generic [ref=f5e653]: (includes fees)
                  - generic [ref=f5e654]: Aug 09 – Aug 11
              - button "Click to add unit to Favourites" [ref=f5e656] [cursor=pointer]
              - generic [ref=f5e660]:
                - generic [ref=f5e661]:
                  - generic [ref=f5e662]:
                    - generic [ref=f5e663]:
                      - img "beds" [ref=f5e665]
                      - generic "3 Beds" [ref=f5e668]: "3"
                    - generic [ref=f5e669]:
                      - img "shower" [ref=f5e671]
                      - generic "2 Baths" [ref=f5e675]: "2"
                    - generic "6 Guestss" [ref=f5e679]: "6"
                  - generic [ref=f5e681]:
                    - img "Hot Tub" [ref=f5e682]
                    - generic [ref=f5e684]: Hot Tub
                - generic [ref=f5e685]:
                  - link "Luxe Retreat" [ref=f5e687] [cursor=pointer]:
                    - /url: /listings/6a42c76cc789e20014b48707
                  - generic [ref=f5e689]:
                    - generic [ref=f5e690]: Palm Springs, California
                    - generic [ref=f5e691]: No reviews yet
            - generic "Property card Casa de Mayo" [ref=f5e697]:
              - generic [ref=f5e698]:
                - link [ref=f5e700] [cursor=pointer]:
                  - /url: /listings/6924de41943654000f5d8a86
                  - generic [ref=f5e704]:
                    - img "Image" [ref=f5e708]
                    - img "Image" [ref=f5e712]
                    - img "BACK OF HOME TIGHT" [ref=f5e716]
                    - img "Image" [ref=f5e720]
                    - img "Image" [ref=f5e724]
                    - img "Image" [ref=f5e728]
                    - img "Image" [ref=f5e732]
                    - img "Image" [ref=f5e736]
                    - img "DINING TABLE" [ref=f5e740]
                    - img "KITCHEN HEAD ON" [ref=f5e744]
                - generic [ref=f5e758]:
                  - generic [ref=f5e759]:
                    - generic [ref=f5e760]: Average $480 per night includes all fees
                    - generic [ref=f5e762]:
                      - generic [ref=f5e763]:
                        - generic [ref=f5e764]: $480
                        - generic [ref=f5e765]: /night
                      - generic [ref=f5e766]: (includes fees)
                  - generic [ref=f5e767]: Aug 09 – Aug 12
              - button "Click to add unit to Favourites" [ref=f5e769] [cursor=pointer]
              - generic [ref=f5e773]:
                - generic [ref=f5e774]:
                  - generic [ref=f5e775]:
                    - generic [ref=f5e776]:
                      - img "beds" [ref=f5e778]
                      - generic "3 Beds" [ref=f5e781]: "3"
                    - generic [ref=f5e782]:
                      - img "shower" [ref=f5e784]
                      - generic "2 Baths" [ref=f5e788]: "2"
                    - generic "6 Guestss" [ref=f5e792]: "6"
                  - generic [ref=f5e793]:
                    - generic [ref=f5e794]:
                      - img "Pet Friendly" [ref=f5e795]
                      - generic [ref=f5e797]: Pet Friendly
                    - generic [ref=f5e798]:
                      - img "Hot Tub" [ref=f5e799]
                      - generic [ref=f5e801]: Hot Tub
                - generic [ref=f5e802]:
                  - link "Casa de Mayo" [ref=f5e804] [cursor=pointer]:
                    - /url: /listings/6924de41943654000f5d8a86
                  - generic [ref=f5e806]:
                    - generic [ref=f5e807]: Palm Springs, California
                    - generic [ref=f5e812]:
                      - text: 5.0 (
                      - link "13 reviews" [ref=f5e813] [cursor=pointer]:
                        - /url: /listings/6924de41943654000f5d8a86?#unitReviews
                      - text: )
            - generic "Property card V3947 Greens & Dream" [ref=f5e815]:
              - generic [ref=f5e816]:
                - link [ref=f5e818] [cursor=pointer]:
                  - /url: /listings/6924deab8434a600120e2b0b
                  - generic [ref=f5e822]:
                    - img "V3947- Greens and Dreams" [ref=f5e826]
                    - img "V3947- Greens and Dreams" [ref=f5e830]
                    - img "V3947- Greens and Dreams" [ref=f5e834]
                    - img "V3947- Greens and Dreams" [ref=f5e838]
                    - img "V3947- Greens and Dreams" [ref=f5e842]
                    - img "V3947- Greens and Dreams" [ref=f5e846]
                    - img "V3947- Greens and Dreams" [ref=f5e850]
                    - img "V3947- Greens and Dreams" [ref=f5e854]
                    - img "V3947- Greens and Dreams" [ref=f5e858]
                    - img "V3947- Greens and Dreams" [ref=f5e862]
                - generic [ref=f5e876]:
                  - generic [ref=f5e877]:
                    - generic [ref=f5e878]: Average $301 per night includes all fees
                    - generic [ref=f5e880]:
                      - generic [ref=f5e881]:
                        - generic [ref=f5e882]: $301
                        - generic [ref=f5e883]: /night
                      - generic [ref=f5e884]: (includes fees)
                  - generic [ref=f5e885]: Aug 09 – Aug 12
              - button "Click to add unit to Favourites" [ref=f5e887] [cursor=pointer]
              - generic [ref=f5e891]:
                - generic [ref=f5e892]:
                  - generic [ref=f5e893]:
                    - generic [ref=f5e894]:
                      - img "beds" [ref=f5e896]
                      - generic "3 Beds" [ref=f5e899]: "3"
                    - generic [ref=f5e900]:
                      - img "shower" [ref=f5e902]
                      - generic "3 Baths" [ref=f5e906]: "3"
                    - generic "6 Guestss" [ref=f5e910]: "6"
                  - generic [ref=f5e911]:
                    - generic [ref=f5e912]:
                      - img "Pet Friendly" [ref=f5e913]
                      - generic [ref=f5e915]: Pet Friendly
                    - generic [ref=f5e916]:
                      - img "Hot Tub" [ref=f5e917]
                      - generic [ref=f5e919]: Hot Tub
                - generic [ref=f5e920]:
                  - link "V3947 Greens & Dream" [ref=f5e922] [cursor=pointer]:
                    - /url: /listings/6924deab8434a600120e2b0b
                  - generic [ref=f5e924]:
                    - generic [ref=f5e925]: Palm Desert, California
                    - generic [ref=f5e930]:
                      - text: 5.0 (
                      - link "3 reviews" [ref=f5e931] [cursor=pointer]:
                        - /url: /listings/6924deab8434a600120e2b0b?#unitReviews
                      - text: )
            - generic "Property card VY630 - Desert Hock" [ref=f5e933]:
              - generic [ref=f5e934]:
                - link [ref=f5e936] [cursor=pointer]:
                  - /url: /listings/6924de2f44e4c800130e5c6a
                  - generic [ref=f5e940]:
                    - img "LIVING SPACE" [ref=f5e944]
                    - img "LIVING SPACE CONTINUED.jpg mls" [ref=f5e948]
                    - img "LVING SPACE REVERSE.jpg mls" [ref=f5e952]
                    - img "DINING SPACE REVERSE.jpg mls" [ref=f5e956]
                    - img "DINING SPACE.jpg mls" [ref=f5e960]
                    - img "KITCHEN TIGHT.jpg mls" [ref=f5e964]
                    - img "KITCHEN BAR TOP.jpg mls" [ref=f5e968]
                    - img "KITCHEN.jpg mls" [ref=f5e972]
                    - img "KITCHEN REVERSE.jpg mls" [ref=f5e976]
                    - img "DEN REVERSE.jpg mls" [ref=f5e980]
                - generic [ref=f5e994]:
                  - generic [ref=f5e995]:
                    - generic [ref=f5e996]: Average $292 per night includes all fees
                    - generic [ref=f5e998]:
                      - generic [ref=f5e999]:
                        - generic [ref=f5e1000]: $292
                        - generic [ref=f5e1001]: /night
                      - generic [ref=f5e1002]: (includes fees)
                  - generic [ref=f5e1003]: Aug 09 – Aug 12
              - button "Click to add unit to Favourites" [ref=f5e1005] [cursor=pointer]
              - generic [ref=f5e1009]:
                - generic [ref=f5e1010]:
                  - generic [ref=f5e1011]:
                    - generic [ref=f5e1012]:
                      - img "beds" [ref=f5e1014]
                      - generic "2 Beds" [ref=f5e1017]: "2"
                    - generic [ref=f5e1018]:
                      - img "shower" [ref=f5e1020]
                      - generic "2 Baths" [ref=f5e1024]: "2"
                    - generic "4 Guestss" [ref=f5e1028]: "4"
                  - generic [ref=f5e1029]:
                    - generic [ref=f5e1030]:
                      - img "Pet Friendly" [ref=f5e1031]
                      - generic [ref=f5e1033]: Pet Friendly
                    - generic [ref=f5e1034]:
                      - img "Hot Tub" [ref=f5e1035]
                      - generic [ref=f5e1037]: Hot Tub
                - generic [ref=f5e1038]:
                  - link "VY630 - Desert Hock" [ref=f5e1040] [cursor=pointer]:
                    - /url: /listings/6924de2f44e4c800130e5c6a
                  - generic [ref=f5e1042]:
                    - generic [ref=f5e1043]: Palm Desert, California
                    - generic [ref=f5e1048]:
                      - text: 5.0 (
                      - link "4 reviews" [ref=f5e1049] [cursor=pointer]:
                        - /url: /listings/6924de2f44e4c800130e5c6a?#unitReviews
                      - text: )
            - generic "Property card The Happy House" [ref=f5e1051]:
              - generic [ref=f5e1052]:
                - link [ref=f5e1054] [cursor=pointer]:
                  - /url: /listings/6924de648434a600120e1d25
                  - generic [ref=f5e1058]:
                    - img "LIVING ROOM CONTINUED" [ref=f5e1062]
                    - img "LIVING ROOM REVERSE" [ref=f5e1066]
                    - img "PATIO TABLE TIGHT" [ref=f5e1070]
                    - img "BACK OF HOME REVERSE" [ref=f5e1074]
                    - img "KITCHEN REVERSE" [ref=f5e1078]
                    - img "LIVING ROOM" [ref=f5e1082]
                    - img "TOWARDS LIVING ROOM" [ref=f5e1086]
                    - img "DINING TABLLE TIGHT" [ref=f5e1090]
                    - img "DINING SPACE" [ref=f5e1094]
                    - img "DINING SPACE TO KITCHEN" [ref=f5e1098]
                - generic [ref=f5e1112]:
                  - generic [ref=f5e1113]:
                    - generic [ref=f5e1114]: Average $478 per night includes all fees
                    - generic [ref=f5e1116]:
                      - generic [ref=f5e1117]:
                        - generic [ref=f5e1118]: $478
                        - generic [ref=f5e1119]: /night
                      - generic [ref=f5e1120]: (includes fees)
                  - generic [ref=f5e1121]: Aug 09 – Aug 11
              - button "Click to add unit to Favourites" [ref=f5e1123] [cursor=pointer]
              - generic [ref=f5e1127]:
                - generic [ref=f5e1128]:
                  - generic [ref=f5e1129]:
                    - generic [ref=f5e1130]:
                      - img "beds" [ref=f5e1132]
                      - generic "3 Beds" [ref=f5e1135]: "3"
                    - generic [ref=f5e1136]:
                      - img "shower" [ref=f5e1138]
                      - generic "2 Baths" [ref=f5e1142]: "2"
                    - generic "6 Guestss" [ref=f5e1146]: "6"
                  - generic [ref=f5e1147]:
                    - generic [ref=f5e1148]:
                      - img "Pet Friendly" [ref=f5e1149]
                      - generic [ref=f5e1151]: Pet Friendly
                    - generic [ref=f5e1152]:
                      - img "Hot Tub" [ref=f5e1153]
                      - generic [ref=f5e1155]: Hot Tub
                - generic [ref=f5e1156]:
                  - link "The Happy House" [ref=f5e1158] [cursor=pointer]:
                    - /url: /listings/6924de648434a600120e1d25
                  - generic [ref=f5e1160]:
                    - generic [ref=f5e1161]: Palm Springs, California
                    - generic [ref=f5e1166]:
                      - text: 5.0 (
                      - link "9 reviews" [ref=f5e1167] [cursor=pointer]:
                        - /url: /listings/6924de648434a600120e1d25?#unitReviews
                      - text: )
            - generic "Property card Palm Canyon Modern Bungalow" [ref=f5e1169]:
              - generic [ref=f5e1170]:
                - link [ref=f5e1172] [cursor=pointer]:
                  - /url: /listings/6924de515f54f00012cb0589
                  - generic [ref=f5e1176]:
                    - img "LIVING ROOM TIGHT REVERSE.jpg mls" [ref=f5e1180]
                    - img "LIVING SPACE TIGHT.jpg mls" [ref=f5e1184]
                    - img "LIVING SPACE PULLED BACK jpg mls" [ref=f5e1188]
                    - img "LIVING SPACE REVERSE CONTINUED.jpg mls" [ref=f5e1192]
                    - img "KITCHEN TABLE TIGHT" [ref=f5e1196]
                    - img "KITCHEN TABLE REVERSE" [ref=f5e1200]
                    - img "LIVING SPACE REVERSE.jpg mls" [ref=f5e1204]
                    - img "KITCHEN TABLE TO KITCHEN" [ref=f5e1208]
                    - img "OVER KITCHEN TABLE TO KITCHEN" [ref=f5e1212]
                    - img "VIEW OF MOUNTAINS FROM UNIT" [ref=f5e1216]
                - generic [ref=f5e1230]:
                  - generic [ref=f5e1231]:
                    - generic [ref=f5e1232]: Average $150 per night includes all fees
                    - generic [ref=f5e1234]:
                      - generic [ref=f5e1235]:
                        - generic [ref=f5e1236]: $150
                        - generic [ref=f5e1237]: /night
                      - generic [ref=f5e1238]: (includes fees)
                  - generic [ref=f5e1239]: Aug 09 – Aug 14
              - button "Click to add unit to Favourites" [ref=f5e1241] [cursor=pointer]
              - generic [ref=f5e1245]:
                - generic [ref=f5e1246]:
                  - generic [ref=f5e1247]:
                    - generic [ref=f5e1248]:
                      - img "beds" [ref=f5e1250]
                      - generic "2 Beds" [ref=f5e1253]: "2"
                    - generic [ref=f5e1254]:
                      - img "shower" [ref=f5e1256]
                      - generic "2 Baths" [ref=f5e1260]: "2"
                    - generic "4 Guestss" [ref=f5e1264]: "4"
                  - generic [ref=f5e1265]:
                    - generic [ref=f5e1266]:
                      - img "Pet Friendly" [ref=f5e1267]
                      - generic [ref=f5e1269]: Pet Friendly
                    - generic [ref=f5e1270]:
                      - img "Hot Tub" [ref=f5e1271]
                      - generic [ref=f5e1273]: Hot Tub
                - generic [ref=f5e1274]:
                  - link "Palm Canyon Modern Bungalow" [ref=f5e1276] [cursor=pointer]:
                    - /url: /listings/6924de515f54f00012cb0589
                  - generic [ref=f5e1278]:
                    - generic [ref=f5e1279]: Palm Springs, California
                    - generic [ref=f5e1284]:
                      - text: 5.0 (
                      - link "8 reviews" [ref=f5e1285] [cursor=pointer]:
                        - /url: /listings/6924de515f54f00012cb0589?#unitReviews
                      - text: )
            - generic "Property card Modern Plaza Villas Oasis" [ref=f5e1287]:
              - generic [ref=f5e1288]:
                - link [ref=f5e1290] [cursor=pointer]:
                  - /url: /listings/6924de605cce4a0012e6aba7
                  - generic [ref=f5e1294]:
                    - img "PATIO TABLE" [ref=f5e1298]
                    - img "LIVING ROOM" [ref=f5e1302]
                    - img "LIVING ROOM CONTINUED" [ref=f5e1306]
                    - img "LIVING ROOM" [ref=f5e1310]
                    - img "BACK PATIO" [ref=f5e1314]
                    - img "DINING SPACE" [ref=f5e1318]
                    - img "DINING SPACE REVERSE" [ref=f5e1322]
                    - img "DINING TABLE TIGHT" [ref=f5e1326]
                    - img "LIVING ROOM REVERSE" [ref=f5e1330]
                    - img "OPEN FLOOR PLAN REVERSE" [ref=f5e1334]
                - generic [ref=f5e1348]:
                  - generic [ref=f5e1349]:
                    - generic [ref=f5e1350]: Average $192 per night includes all fees
                    - generic [ref=f5e1352]:
                      - generic [ref=f5e1353]:
                        - generic [ref=f5e1354]: $192
                        - generic [ref=f5e1355]: /night
                      - generic [ref=f5e1356]: (includes fees)
                  - generic [ref=f5e1357]: Aug 14 – Aug 20
              - button "Click to add unit to Favourites" [ref=f5e1359] [cursor=pointer]
              - generic [ref=f5e1363]:
                - generic [ref=f5e1364]:
                  - generic [ref=f5e1365]:
                    - generic [ref=f5e1366]:
                      - img "beds" [ref=f5e1368]
                      - generic "1 Bed" [ref=f5e1371]: "1"
                    - generic [ref=f5e1372]:
                      - img "shower" [ref=f5e1374]
                      - generic "1 Bath" [ref=f5e1378]: "1"
                    - generic "2 Guestss" [ref=f5e1382]: "2"
                  - generic [ref=f5e1383]:
                    - generic [ref=f5e1384]:
                      - img "Pet Friendly" [ref=f5e1385]
                      - generic [ref=f5e1387]: Pet Friendly
                    - generic [ref=f5e1388]:
                      - img "Hot Tub" [ref=f5e1389]
                      - generic [ref=f5e1391]: Hot Tub
                - generic [ref=f5e1392]:
                  - link "Modern Plaza Villas Oasis" [ref=f5e1394] [cursor=pointer]:
                    - /url: /listings/6924de605cce4a0012e6aba7
                  - generic [ref=f5e1396]:
                    - generic [ref=f5e1397]: Palm Springs, California
                    - generic [ref=f5e1402]:
                      - text: 5.0 (
                      - link "9 reviews" [ref=f5e1403] [cursor=pointer]:
                        - /url: /listings/6924de605cce4a0012e6aba7?#unitReviews
                      - text: )
            - generic "Property card PS674 - East Island" [ref=f5e1405]:
              - generic [ref=f5e1406]:
                - link [ref=f5e1408] [cursor=pointer]:
                  - /url: /listings/6924ddc48434a600120e182d
                  - generic [ref=f5e1412]:
                    - img "Living Sofas" [ref=f5e1416]
                    - img "Living Area" [ref=f5e1420]
                    - img "East Island Living Space" [ref=f5e1424]
                    - img "Breakfast Table" [ref=f5e1428]
                    - img "Breakfast Table with high chairs" [ref=f5e1432]
                    - img "Induction Stove" [ref=f5e1436]
                    - img "Living Room with cutlery" [ref=f5e1440]
                    - img "King bedroom with TV and Dresser" [ref=f5e1444]
                    - img "King bedroom" [ref=f5e1448]
                    - img "Bathroom" [ref=f5e1452]
                - generic [ref=f5e1466]:
                  - generic [ref=f5e1467]:
                    - generic [ref=f5e1468]: Average $276 per night includes all fees
                    - generic [ref=f5e1470]:
                      - generic [ref=f5e1471]:
                        - generic [ref=f5e1472]: $276
                        - generic [ref=f5e1473]: /night
                      - generic [ref=f5e1474]: (includes fees)
                  - generic [ref=f5e1475]: Aug 09 – Aug 12
              - button "Click to add unit to Favourites" [ref=f5e1477] [cursor=pointer]
              - generic [ref=f5e1481]:
                - generic [ref=f5e1482]:
                  - generic [ref=f5e1483]:
                    - generic [ref=f5e1484]:
                      - img "beds" [ref=f5e1486]
                      - generic "2 Beds" [ref=f5e1489]: "2"
                    - generic [ref=f5e1490]:
                      - img "shower" [ref=f5e1492]
                      - generic "2 Baths" [ref=f5e1496]: "2"
                    - generic "4 Guestss" [ref=f5e1500]: "4"
                  - generic [ref=f5e1501]:
                    - generic [ref=f5e1502]:
                      - img "Pet Friendly" [ref=f5e1503]
                      - generic [ref=f5e1505]: Pet Friendly
                    - generic [ref=f5e1506]:
                      - img "Hot Tub" [ref=f5e1507]
                      - generic [ref=f5e1509]: Hot Tub
                - generic [ref=f5e1510]:
                  - link "PS674 - East Island" [ref=f5e1512] [cursor=pointer]:
                    - /url: /listings/6924ddc48434a600120e182d
                  - generic [ref=f5e1514]:
                    - generic [ref=f5e1515]: Palm Desert, California
                    - generic [ref=f5e1520]:
                      - text: 5.0 (
                      - link "3 reviews" [ref=f5e1521] [cursor=pointer]:
                        - /url: /listings/6924ddc48434a600120e182d?#unitReviews
                      - text: )
          - navigation "Pagination" [ref=f5e1522]:
            - button "No Previous Page, disabled" [ref=f5e1523] [cursor=pointer]
            - button "Page 1, current page" [ref=f5e1526] [cursor=pointer]:
              - generic [ref=f5e1527]: "1"
            - button "Page 2" [ref=f5e1528] [cursor=pointer]:
              - generic [ref=f5e1529]: "2"
            - button "Page 3" [ref=f5e1530] [cursor=pointer]:
              - generic [ref=f5e1531]: "3"
            - generic [ref=f5e1532]: ...
            - button "Page 7" [ref=f5e1534] [cursor=pointer]:
              - generic [ref=f5e1535]: "7"
            - button "Page 8" [ref=f5e1536] [cursor=pointer]:
              - generic [ref=f5e1537]: "8"
            - button "Next Page" [ref=f5e1538] [cursor=pointer]
        - paragraph [ref=f5e1541]: "*Please select dates to see nightly prices"
      - button "Show Map" [ref=f5e1543] [cursor=pointer]
    - contentinfo "footer" [ref=f5e1548]:
      - list [ref=f5e1551]:
        - listitem [ref=f5e1552]:
          - button "Good Life Vacation Logo Explore Good Life Network" [ref=f5e1553] [cursor=pointer]:
            - generic [ref=f5e1556]:
              - img "Good Life Vacation Logo" [ref=f5e1558]
              - generic [ref=f5e1559]: Explore Good Life Network
          - list [ref=f5e1563]:
            - listitem [ref=f5e1564]:
              - button "Central Florida" [ref=f5e1565] [cursor=pointer]
              - list [ref=f5e1573]:
                - listitem [ref=f5e1574]:
                  - button [ref=f5e1575] [cursor=pointer]:
                    - link "Bahama Bay Logo Bahama Bay Resort and Spa" [ref=f5e1577]:
                      - /url: https://www.bahamabay.com
                      - generic [ref=f5e1578]:
                        - img "Bahama Bay Logo" [ref=f5e1580]
                        - generic [ref=f5e1581]: Bahama Bay Resort and Spa
                - listitem [ref=f5e1584]:
                  - button [ref=f5e1585] [cursor=pointer]:
                    - link "Caribe Cove Logo Caribe Cove" [ref=f5e1587]:
                      - /url: https://www.caribecove.com
                      - generic [ref=f5e1588]:
                        - img "Caribe Cove Logo" [ref=f5e1590]
                        - generic [ref=f5e1591]: Caribe Cove
                - listitem [ref=f5e1594]:
                  - button [ref=f5e1595] [cursor=pointer]:
                    - link "Beyond Lodging Logo Beyond Lodging" [ref=f5e1597]:
                      - /url: https://www.beyondlodging.com
                      - generic [ref=f5e1598]:
                        - img "Beyond Lodging Logo" [ref=f5e1600]
                        - generic [ref=f5e1601]: Beyond Lodging
            - listitem [ref=f5e1604]:
              - button "West Florida" [ref=f5e1605] [cursor=pointer]
              - list [ref=f5e1613]:
                - listitem [ref=f5e1614]:
                  - button [ref=f5e1615] [cursor=pointer]:
                    - link "TOPS'L Logo TOPS'L Beach & Raquet Resort" [ref=f5e1617]:
                      - /url: https://www.topsl.com
                      - generic [ref=f5e1618]:
                        - img "TOPS'L Logo" [ref=f5e1620]
                        - generic [ref=f5e1621]: TOPS'L Beach & Raquet Resort
                - listitem [ref=f5e1624]:
                  - button [ref=f5e1625] [cursor=pointer]:
                    - link "Annabelle Lodging Logo Annabelle Lodging" [ref=f5e1627]:
                      - /url: https://www.annabellelodging.com
                      - generic [ref=f5e1628]:
                        - img "Annabelle Lodging Logo" [ref=f5e1630]
                        - generic [ref=f5e1631]: Annabelle Lodging
            - listitem [ref=f5e1634]:
              - button "Arizona" [ref=f5e1635] [cursor=pointer]
              - list [ref=f5e1643]:
                - listitem [ref=f5e1644]:
                  - button [ref=f5e1645] [cursor=pointer]:
                    - link "Firesky Retreats Logo Firesky Retreats" [ref=f5e1647]:
                      - /url: https://www.fireskyretreats.com
                      - generic [ref=f5e1648]:
                        - img "Firesky Retreats Logo" [ref=f5e1650]
                        - generic [ref=f5e1651]: Firesky Retreats
            - listitem [ref=f5e1654]:
              - button "California" [ref=f5e1655] [cursor=pointer]
              - list [ref=f5e1663]:
                - listitem [ref=f5e1664]:
                  - button [ref=f5e1665] [cursor=pointer]:
                    - link "Alice Lodging Logo Alice Lodging" [ref=f5e1667]:
                      - /url: https://www.alicelodging.com
                      - generic [ref=f5e1668]:
                        - img "Alice Lodging Logo" [ref=f5e1670]
                        - generic [ref=f5e1671]: Alice Lodging
            - listitem [ref=f5e1672]:
              - button "Washington" [ref=f5e1673] [cursor=pointer]
              - list [ref=f5e1681]:
                - listitem [ref=f5e1682]:
                  - button [ref=f5e1683] [cursor=pointer]:
                    - link "Pacific Retreats Logo Pacific Retreats" [ref=f5e1685]:
                      - /url: https://www.pacificretreats.com
                      - generic [ref=f5e1686]:
                        - img "Pacific Retreats Logo" [ref=f5e1688]
                        - generic [ref=f5e1689]: Pacific Retreats
      - generic [ref=f5e1692]:
        - generic [ref=f5e1695]:
          - generic [ref=f5e1696]:
            - heading "Sign up for exclusive offers from us" [level=2] [ref=f5e1697]
            - generic [ref=f5e1698]:
              - generic [ref=f5e1699]: Please complete the following form to receive news and special offers from Alice Lodging™
              - generic [ref=f5e1700]:
                - textbox "Email address" [ref=f5e1702]:
                  - /placeholder: Enter your email
                - button "Subscribe to newsletter" [disabled] [ref=f5e1705]:
                  - generic [ref=f5e1706]: Subscribe
          - generic [ref=f5e1711]:
            - generic [ref=f5e1712]:
              - link [ref=f5e1713] [cursor=pointer]:
                - /url: /
                - img "Alice Lodging™" [ref=f5e1714]
              - link [ref=f5e1715] [cursor=pointer]:
                - /url: https://www.goodlifevacations.com/about-us
                - img "Good Life Vacations Logo" [ref=f5e1717]
            - list [ref=f5e1723]:
              - paragraph [ref=f5e1724]: About
              - listitem [ref=f5e1725]:
                - link "About Alice Lodging" [ref=f5e1726] [cursor=pointer]:
                  - /url: /about-us
              - listitem [ref=f5e1727]:
                - link "Our Story" [ref=f5e1728] [cursor=pointer]:
                  - /url: /our-story
              - listitem [ref=f5e1729]:
                - link "Meet The Team" [ref=f5e1730] [cursor=pointer]:
                  - /url: /meet-the-team
              - listitem [ref=f5e1731]:
                - link "List With Us" [ref=f5e1732] [cursor=pointer]:
                  - /url: /list-with-us
            - list [ref=f5e1734]:
              - paragraph [ref=f5e1735]: Explore
              - listitem [ref=f5e1736]:
                - link "Specials" [ref=f5e1737] [cursor=pointer]:
                  - /url: /specials
              - listitem [ref=f5e1738]:
                - link "Blogs" [ref=f5e1739] [cursor=pointer]:
                  - /url: /blog
              - listitem [ref=f5e1740]:
                - link "Travel Insurance" [ref=f5e1741] [cursor=pointer]:
                  - /url: /travel-insurance
              - listitem [ref=f5e1742]:
                - link "Privacy Policy" [ref=f5e1743] [cursor=pointer]:
                  - /url: /privacy-policy
              - listitem [ref=f5e1744]:
                - link "Rental Rules and Policies" [ref=f5e1745] [cursor=pointer]:
                  - /url: /rental-rules-and-policies
            - generic [ref=f5e1746]:
              - generic [ref=f5e1748]:
                - paragraph [ref=f5e1749]: Contact Us
                - generic [ref=f5e1750]:
                  - generic [ref=f5e1751]: 76300 Country Club Drive, Palm Desert, CA 92211
                  - generic [ref=f5e1756]: 707 E. Tahquitz Canyon Way Ste 16, Palm Springs, CA 92262
                  - link "office@alicelodging.com" [ref=f5e1761] [cursor=pointer]:
                    - /url: mailto:office@alicelodging.com
                  - link "+1 (760)-345-5695" [ref=f5e1769] [cursor=pointer]:
                    - /url: tel:+1 (760)-345-5695
              - generic [ref=f5e1772]:
                - combobox "Search By Property" [ref=f5e1777]
                - button [disabled] [ref=f5e1779] [cursor=pointer]
        - generic [ref=f5e1785]:
          - generic [ref=f5e1786]:
            - link "Facebook" [ref=f5e1787] [cursor=pointer]:
              - /url: https://www.facebook.com/profile.php?id=61579637295109
            - link "Instagram" [ref=f5e1791] [cursor=pointer]:
              - /url: https://www.instagram.com/alicelodging/
            - link "Linkedin" [ref=f5e1795] [cursor=pointer]:
              - /url: https://www.linkedin.com/company/alice-lodging
          - generic [ref=f5e1799]:
            - generic [ref=f5e1800]: © 2026 Alice Lodging™. All rights reserved.
            - generic [ref=f5e1801]: "|"
            - link "All Properties" [ref=f5e1802] [cursor=pointer]:
              - /url: /all-properties
            - generic [ref=f5e1803]: "|"
            - generic [ref=f5e1804]:
              - generic [ref=f5e1805]:
                - text: Powered by
                - link "Flow One" [ref=f5e1806] [cursor=pointer]:
                  - /url: https://flow.one/
              - img "Flow One Logo" [ref=f5e1807]
  - alert [ref=f5e1808]
  - generic:
    - generic:
      - generic:
        - dialog "Announcement Popup" [active]:
          - generic [ref=f5e1812]:
            - img "Promo image" [ref=f5e1813]
            - button "Close Announcement Popup" [ref=f5e1815] [cursor=pointer]: X
            - generic [ref=f5e1817]:
              - generic [ref=f5e1819]:
                - paragraph [ref=f5e1820]: GET 20% OFF
                - generic [ref=f5e1821]: SUMMER SPECIAL
              - generic [ref=f5e1822]:
                - paragraph [ref=f5e1823]: Sun, Savings & Your Perfect Desert Escape.
                - link "View Specials" [ref=f5e1824] [cursor=pointer]:
                  - /url: /specials/palm-springs-palm-desert-summer-deals-save-20-on-vacation-rental
                  - generic [ref=f5e1825]: VIEW SPECIALS
```

# Test source

```ts
  298 |     if (await filterPanelBtn.isVisible({ timeout: 4000 }).catch(() => false)) {
  299 |       await filterPanelBtn.click({ force: true });
  300 |       await this.page.waitForTimeout(1500);
  301 | 
  302 |       // Look for the filter option inside the opened panel
  303 |       const filterOption = this.page.locator(`button:has-text("${filterName}"), label:has-text("${filterName}")`).first();
  304 |       if (await filterOption.isVisible({ timeout: 3000 }).catch(() => false)) {
  305 |         await filterOption.click({ force: true });
  306 |         await this.page.waitForTimeout(1500);
  307 |         Logger.info(`[TC2] Filter "${filterName}" applied via filter panel`);
  308 |         // Close filter panel
  309 |         await this.page.keyboard.press('Escape').catch(() => {});
  310 |         await this.page.waitForTimeout(500);
  311 |         return true;
  312 |       }
  313 |     }
  314 | 
  315 |     // Fallback: Navigate to category page
  316 |     if (this.siteConfig.sampleCategoryPath) {
  317 |       const currentUrl = new URL(this.page.url());
  318 |       const catUrl = new URL(`${this.siteConfig.baseUrl}${this.siteConfig.sampleCategoryPath}`);
  319 |       // Preserve search params
  320 |       for (const [key, value] of currentUrl.searchParams.entries()) {
  321 |         catUrl.searchParams.set(key, value);
  322 |       }
  323 |       await this.navigateTo(catUrl.toString());
  324 |       await this.page.waitForTimeout(2000);
  325 |       await this._dismissPromoPopupsOnly();
  326 |       await this._closeAllPopovers();
  327 |       Logger.info(`[TC2] Filter applied via category navigation: ${this.siteConfig.sampleCategoryPath}`);
  328 |     }
  329 |     return true;
  330 |   }
  331 | 
  332 |   /**
  333 |    * Apply sorting option using the headlessui sort popover.
  334 |    * Both sites have a "Sort: Default" / "Sort: ..." button with class sortButton.
  335 |    * NO URL FALLBACK ALLOWED. If UI sort fails, throw a clear error.
  336 |    * @param {string} sortOption - e.g. "Price: Low to High"
  337 |    */
  338 |   async selectSortOption(sortOption) {
  339 |     Logger.step(`[TC2] Selecting sort: "${sortOption}"`);
  340 |     await this._dismissPromoPopupsOnly();
  341 | 
  342 |     // The sort button: class filterAndSortButton sortButton, text contains "Sort:"
  343 |     const sortBtn = this.page.locator('.filterAndSortButton.sortButton, button.sortButton, button:has-text("Sort:"), button:has-text("Sort")').first();
  344 |     const sortBtnVisible = await sortBtn.isVisible({ timeout: 5000 }).catch(() => false);
  345 |     if (!sortBtnVisible) {
  346 |       throw new Error(`[TC2 FAILURE] Sort button not found on ${this.siteConfig.name}. Cannot perform sort UI interaction.`);
  347 |     }
  348 | 
  349 |     await sortBtn.click({ force: true });
  350 |     await this.page.waitForTimeout(1000);
  351 | 
  352 |     // Find the sort option in the opened popover
  353 |     const option = this.page.locator(`button:has-text("${sortOption}"), [role="option"]:has-text("${sortOption}"), li:has-text("${sortOption}")`).first();
  354 |     const optionVisible = await option.isVisible({ timeout: 3000 }).catch(() => false);
  355 |     if (!optionVisible) {
  356 |       // Dump visible options for debugging
  357 |       const visibleOptions = await this.page.evaluate(() =>
  358 |         Array.from(document.querySelectorAll('[role="option"], li, button'))
  359 |           .map(el => (el.textContent || '').trim())
  360 |           .filter(t => t.length > 0 && t.length < 50)
  361 |           .slice(0, 20)
  362 |       );
  363 |       throw new Error(`LIVE SITE LIMITATION: ${this.siteConfig.name} exposes no "${sortOption}" option in its real sort UI. Visible sort choices: [${visibleOptions.join(' | ')}]`);
  364 |     }
  365 | 
  366 |     await option.click({ force: true });
  367 |     await this.page.waitForTimeout(2500);
  368 |     Logger.info(`[TC2] Sort "${sortOption}" selected via real UI popover`);
  369 |   }
  370 | 
  371 |   /**
  372 |    * Open the first property listing card and return the card text.
  373 |    * @returns {Promise<string>} Property name from the card
  374 |    */
  375 |   async openFirstProperty() {
  376 |     Logger.step(`[TC3/TC4] Opening first property card from listings`);
  377 |     await this._dismissPromoPopupsOnly();
  378 |     await this._closeAllPopovers();
  379 | 
  380 |     const propertyCards = this.page.locator('[aria-label^="Property card "]');
  381 |     const count = await propertyCards.count();
  382 | 
  383 |     if (count === 0) {
  384 |       throw new Error(`[TC3 FAILURE] No property listing cards found on ${this.siteConfig.name}`);
  385 |     }
  386 | 
  387 |     const firstCard = propertyCards.first();
  388 |     await firstCard.waitFor({ state: 'visible', timeout: 10000 });
  389 |     const cardLabel = await firstCard.getAttribute('aria-label');
  390 |     const name = cardLabel?.replace(/^Property card\s+/i, '').trim();
  391 |     if (!name) {
  392 |       throw new Error(`[TC3 FAILURE] The first property card on ${this.siteConfig.name} has no accessible name.`);
  393 |     }
  394 |     const propertyLink = firstCard.locator('a[href*="/listing"]').first();
  395 |     await propertyLink.waitFor({ state: 'visible', timeout: 10000 });
  396 |     Logger.info(`[TC3/TC4] Opening property: "${name}"`);
  397 | 
> 398 |     await propertyLink.click();
      |                        ^ TimeoutError: locator.click: Timeout 15000ms exceeded.
  399 |     await this.waitForLoad();
  400 |     return name;
  401 |   }
  402 | }
  403 | 
  404 | module.exports = SearchResultsPage;
  405 | 
```