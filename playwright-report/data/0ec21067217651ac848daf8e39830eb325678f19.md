# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tc3_property_details.spec.js >> TC3 — Property Details Validation [aliceLodging] >> Verify property details and booking criteria consistency from search on aliceLodging
- Location: tests\tc3_property_details.spec.js:11:5

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: true
Received: false
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
      - generic [ref=f9e49]:
        - generic [ref=f9e50]:
          - img "Desert Dream- Alice Lodging" [ref=f9e56]
          - img "Desert Dream- Alice Lodging" [ref=f9e62]
          - img "Desert Dream- Alice Lodging" [ref=f9e66]
          - img "Desert Dream- Alice Lodging" [ref=f9e70]
          - img "Desert Dream- Alice Lodging" [ref=f9e74]
          - img "Desert Dream- Alice Lodging" [ref=f9e78]
          - img "Desert Dream- Alice Lodging" [ref=f9e82]
          - img "Desert Dream- Alice Lodging" [ref=f9e88]
          - img "Desert Dream- Alice Lodging" [ref=f9e94]
          - img "Desert Dream- Alice Lodging" [ref=f9e100]
          - img "Desert Dream- Alice Lodging" [ref=f9e106]
          - img "Desert Dream- Alice Lodging" [ref=f9e112]
          - img "Desert Dream- Alice Lodging" [ref=f9e118]
          - img "Desert Dream- Alice Lodging" [ref=f9e124]
          - img "Desert Dream- Alice Lodging" [ref=f9e130]
          - img "Desert Dream- Alice Lodging" [ref=f9e136]
          - img "Desert Dream- Alice Lodging" [ref=f9e142]
          - img "Desert Dream- Alice Lodging" [ref=f9e148]
          - img "Desert Dream- Alice Lodging" [ref=f9e154]
          - img "Desert Dream- Alice Lodging" [ref=f9e160]
          - img "Desert Dream- Alice Lodging" [ref=f9e166]
          - img "Desert Dream- Alice Lodging" [ref=f9e172]
          - img "Desert Dream- Alice Lodging" [ref=f9e178]
          - img "Desert Dream- Alice Lodging" [ref=f9e184]
          - img "Desert Dream- Alice Lodging" [ref=f9e190]
          - img "Desert Dream- Alice Lodging" [ref=f9e196]
          - img "Desert Dream- Alice Lodging" [ref=f9e202]
          - img "Desert Dream- Alice Lodging" [ref=f9e208]
          - img "Desert Dream- Alice Lodging" [ref=f9e214]
          - img "Desert Dream- Alice Lodging" [ref=f9e220]
          - img "Desert Dream- Alice Lodging" [ref=f9e226]
          - img "Desert Dream- Alice Lodging" [ref=f9e232]
          - img "Desert Dream- Alice Lodging" [ref=f9e238]
          - img "Desert Dream- Alice Lodging" [ref=f9e244]
          - img "Desert Dream- Alice Lodging" [ref=f9e250]
          - img "Desert Dream- Alice Lodging" [ref=f9e256]
          - img "Desert Dream- Alice Lodging" [ref=f9e262]
          - img "Desert Dream- Alice Lodging" [ref=f9e268]
          - img "Desert Dream- Alice Lodging" [ref=f9e274]
        - generic [ref=f9e275] [cursor=pointer]
        - generic [ref=f9e276] [cursor=pointer]
        - button "View Gallery" [ref=f9e278] [cursor=pointer]
      - generic [ref=f9e284]:
        - generic [ref=f9e285]:
          - generic [ref=f9e286]:
            - generic [ref=f9e287]:
              - heading "Desert Dream" [level=1] [ref=f9e288]
              - generic [ref=f9e289]:
                - button "Click to add unit to Favourites" [ref=f9e291] [cursor=pointer]
                - button "Open share options" [ref=f9e296] [cursor=pointer]
            - generic [ref=f9e300]: Palm Springs, California 92264
            - generic [ref=f9e304]:
              - generic [ref=f9e305]:
                - img "beds" [ref=f9e306]
                - text: 2 Beds
              - generic [ref=f9e309]:
                - img "bath" [ref=f9e310]
                - text: 2 Baths
              - generic [ref=f9e314]: 4 Guests
              - generic [ref=f9e321]:
                - text: 5.0 (
                - link "8 reviews" [ref=f9e322] [cursor=pointer]:
                  - /url: /listings/6924de9447db180013b45623?#unitReviews
                - text: )
          - generic [ref=f9e323]:
            - heading "About this place" [level=2] [ref=f9e324]
            - generic [ref=f9e325]:
              - generic [ref=f9e326]: "Effortlessly blending indoor-outdoor living with floor to ceiling windows, sliding glass doors, vaulted ceilings, an infinity pool, and landscaping that showcases the serene beauty of the desert, this 2 bedroom, 2 bath home is perfect for guests looking for a dreamy desert retreat. Gorgeous and sophisticated, but casual and comfortable at the same time, the interior features a fabulous open floor plan ideal for gathering and relaxing with comfortable seating, a fireplace, a lovely large dining table that seats 6, and a sleek, open kitchen with stainless steel appliances, including a wine fridge. Enjoy an invigorating morning dip in the infinity pool, then dry off on a sun lounger. Spend the day lounging by the pool, relaxing in the peaceful side-yard lanai, or head into the city to visit an award-winning museum or gallery, play a round of golf, do some shopping, or dine at some of Palm Springs best restaurants. As the sun begins to set and the desert sky turns into a kaleidoscope of vibrant hues, enjoy a cocktail from the back deck. Later in the evening, gather around several fire pits, or take a dip in the pool under a blanket of stars. Sun-kissed and sleepy, guests will drift off to sleep in their choice of two comfortable ensuite bedrooms. The gorgeous primary bedroom has a king bed, large walk-in closet, separate walk-in shower, a soaking tub, and sliding glass doors that open up directly to the pool. Bedroom 2 has a king bed, closet, and tiled shower. Everything about this property has been designed to provide the ultimate vacation paradise. The resort-style back yard features a saltwater pool with a tanning deck. You will also find poolside chaise lounges, alfresco dining areas, and a poolside fire pit. Towering palm trees, gorgeous desert landscaping, lemon trees, water features and panoramic mountain views add to the lure of this spectacular property. If you are looking for a tranquil, secluded setting with modern amenities and unbeatable views, this stunning desert retreat is waiting to welcome you. Desert Dream - Alice Lodging City I.D.#027698 - TOT 3203 Please note: This home is not child friendly due to the open layout of the infinity pool and drop to canyon. Due to it's location, this home is also susceptible to desert animals like bighorn sheep, coyotes, bobcats and more. This home has a security Device, a camera is facing the front yard and driveway. Per the City of Palm Springs, all adult guests (18 years and older) are required to read and provide written acknowledgment the Palm Springs Good Neighbor Brochure prior to gaining access to the rental property. A copy of these policies will be sent upon confirmation of your reservation. The primary guest is also required to provide details for all vehicles of guests staying at the property. Monthly Stays & Utility Deposit For stays of 28 nights or more, a utility deposit of $1,500 per month is required. This includes a monthly gas and electric usage allowance of $200. Any charges exceeding this amount will be deducted from the deposit. The remaining balance, if any, will be refunded following check-out based on actual usage."
              - button "Read more" [ref=f9e330] [cursor=pointer]
          - generic [ref=f9e332]:
            - heading "Amenities" [level=2] [ref=f9e333]
            - generic [ref=f9e334]:
              - generic [ref=f9e335]: Air conditioning
              - generic [ref=f9e336]: BBQ grill
              - generic [ref=f9e337]: Baking sheet
              - generic [ref=f9e338]: Bathtub
              - generic [ref=f9e339]: Body soap
              - generic [ref=f9e340]: Carbon monoxide detector
              - button "Show all amenities" [ref=f9e341] [cursor=pointer]
          - generic [ref=f9e343]:
            - heading "Details" [level=2] [ref=f9e344]
            - list [ref=f9e345]:
              - listitem [ref=f9e346]:
                - text: "Bedrooms:"
                - strong [ref=f9e347]: "2"
              - listitem [ref=f9e348]:
                - text: "Check-in After:"
                - strong [ref=f9e349]: 04:00 PM
              - listitem [ref=f9e350]:
                - text: "Bathrooms:"
                - strong [ref=f9e351]: "2"
              - listitem [ref=f9e352]:
                - text: "Check-out Before:"
                - strong [ref=f9e353]: 10:00 AM
              - listitem [ref=f9e354]:
                - text: "Guests:"
                - strong [ref=f9e355]: "4"
              - listitem [ref=f9e356]:
                - text: "Pets Allowed:"
                - strong [ref=f9e357]: "No"
              - listitem [ref=f9e358]:
                - text: "Area:"
                - strong [ref=f9e359]: 1442.04 sq ft
          - generic [ref=f9e360]:
            - heading "Map" [level=2] [ref=f9e361]
            - generic [ref=f9e364]:
              - generic:
                - region "Map" [ref=f9e365]
                - img "Map marker" [ref=f9e366]
              - link "Mapbox homepage" [ref=f9e372] [cursor=pointer]:
                - /url: https://www.mapbox.com/
              - generic [ref=f9e373]:
                - generic [ref=f9e374]:
                  - switch [ref=f9e375] [cursor=pointer]
                  - generic [ref=f9e376]: Satellite View
                - generic [ref=f9e378]:
                  - generic [ref=f9e379] [cursor=pointer]
                  - generic [ref=f9e383] [cursor=pointer]
          - generic [ref=f9e386]:
            - heading "Guest Reviews" [level=2] [ref=f9e388]
            - generic [ref=f9e389]:
              - generic [ref=f9e390]:
                - paragraph [ref=f9e391]: 5.0 out of 5 stars. Based on 8 reviews
                - generic [ref=f9e392]:
                  - generic [ref=f9e393]:
                    - generic [ref=f9e394]:
                      - generic [ref=f9e395]: "5.0"
                      - generic [ref=f9e396]: out of 5
                    - paragraph [ref=f9e413]: 8 reviews
                  - generic [ref=f9e415]:
                    - generic [ref=f9e416]:
                      - generic [ref=f9e417]: 5 star
                      - generic [ref=f9e420]: 100%
                    - generic [ref=f9e421]:
                      - generic [ref=f9e422]: 4 star
                      - generic [ref=f9e424]: 0%
                    - generic [ref=f9e425]:
                      - generic [ref=f9e426]: 3 star
                      - generic [ref=f9e428]: 0%
                    - generic [ref=f9e429]:
                      - generic [ref=f9e430]: 2 star
                      - generic [ref=f9e432]: 0%
                    - generic [ref=f9e433]:
                      - generic [ref=f9e434]: 1 star
                      - generic [ref=f9e436]: 0%
                - generic [ref=f9e437]:
                  - generic [ref=f9e438]:
                    - generic [ref=f9e439]:
                      - generic [ref=f9e440]: "5.0"
                      - generic [ref=f9e441]: (1)
                    - img "internal" [ref=f9e442]
                  - generic [ref=f9e443]:
                    - generic [ref=f9e444]:
                      - generic [ref=f9e445]: "5.0"
                      - generic [ref=f9e446]: (2)
                    - img "vrbo" [ref=f9e447]
                  - generic [ref=f9e448]:
                    - generic [ref=f9e449]:
                      - generic [ref=f9e450]: "5.0"
                      - generic [ref=f9e451]: (5)
                    - img "airbnb" [ref=f9e452]
              - generic [ref=f9e453]:
                - generic [ref=f9e454]:
                  - generic [ref=f9e455]:
                    - generic [ref=f9e456]: OM
                    - heading "Oneida Muñoz" [level=4] [ref=f9e458]
                  - generic [ref=f9e475]:
                    - paragraph [ref=f9e478]: Good
                    - paragraph [ref=f9e482]: Hi Oneida, We're happy to hear you enjoyed your stay. Hope to welcome you back again soon.
                  - generic [ref=f9e483]: 1 month ago
                - generic [ref=f9e487]:
                  - generic [ref=f9e488]:
                    - generic [ref=f9e489]: PT
                    - heading "P T." [level=4] [ref=f9e491]
                  - paragraph [ref=f9e509]: Left a 5-star rating
                  - generic [ref=f9e512]: 2 months ago
                - generic [ref=f9e516]:
                  - generic [ref=f9e517]:
                    - generic [ref=f9e518]: A
                    - heading "Anna" [level=4] [ref=f9e520]
                  - generic [ref=f9e538]:
                    - paragraph [ref=f9e540]: Amazing, relaxing place! We loved watching the sunset as we ate dinner on the patio and spending hours swimming in the pool. The place is gorgeous, clean, and so peaceful/private. The perfect getaway!
                    - button "See more" [ref=f9e541] [cursor=pointer]
                  - generic [ref=f9e546]: 4 months ago
                - generic [ref=f9e550]:
                  - generic [ref=f9e551]:
                    - generic [ref=f9e552]: A
                    - heading "Ashley" [level=4] [ref=f9e554]
                  - paragraph [ref=f9e574]: Great location! We loved the privacy, wildlife, pool, and being just minutes from downtown! Host was incredibly responsive too!
                  - generic [ref=f9e575]: 4 months ago
                - generic [ref=f9e579]:
                  - generic [ref=f9e580]:
                    - generic [ref=f9e581]: D
                    - heading "Denise" [level=4] [ref=f9e583]
                  - paragraph [ref=f9e603]: Great place. Highly recommend
                  - generic [ref=f9e604]: 4 months ago
                - generic [ref=f9e608]:
                  - generic [ref=f9e609]:
                    - generic [ref=f9e610]: A
                    - heading "Alan" [level=4] [ref=f9e612]
                  - generic [ref=f9e630]:
                    - paragraph [ref=f9e632]: We enjoyed our stay at the "Desert Dream." It's a comfortable house with modern appointments perched on a hillside in a quiet neighborhood with sweeping views of Palm Springs and beyond. Location is an easy drive to the downtown, some local trails, super markets, and local dining. Dougie the pup was thrilled to be included but was leery of the unique swimming pool (which was fine with us.)
                    - button "See more" [ref=f9e633] [cursor=pointer]
                  - generic [ref=f9e638]: 7 months ago
              - navigation "Review pages" [ref=f9e643]:
                - button "Previous page" [disabled]
                - button "Page 1" [ref=f9e644] [cursor=pointer]: "1"
                - button "Page 2" [ref=f9e645] [cursor=pointer]: "2"
                - button "Next page" [ref=f9e646] [cursor=pointer]
        - generic [ref=f9e650]:
          - generic [ref=f9e651]:
            - generic [ref=f9e652]:
              - superscript [ref=f9e653]: $
              - text: "617.00"
              - subscript [ref=f9e654]: /night
            - generic [ref=f9e655]:
              - button "Arrival on 2026-08-09 Departure on 2026-08-12" [ref=f9e658] [cursor=pointer]:
                - generic [ref=f9e662]:
                  - generic [ref=f9e663]: Arrival
                  - generic [ref=f9e664]: 2026-08-09
                - generic [ref=f9e668]:
                  - generic [ref=f9e669]: Depart
                  - generic [ref=f9e670]: 2026-08-12
              - 'button "Select Guests: 1 Adults 0 Children" [ref=f9e673] [cursor=pointer]':
                - generic [ref=f9e674]: 1 guest
              - generic [ref=f9e680]:
                - img "voucher" [ref=f9e681]:
                  - img [ref=f9e682]:
                    - generic [ref=f9e688]: Created by erix subyarko
                    - generic [ref=f9e689]: from the Noun Project
                - textbox "Promo code" [ref=f9e690]
                - button "Apply" [ref=f9e691] [cursor=pointer]
              - button "Book Now" [ref=f9e693] [cursor=pointer]
          - generic [ref=f9e701]:
            - generic [ref=f9e702]:
              - paragraph [ref=f9e703]: $425 X 3 nights
              - paragraph [ref=f9e704]: $1275
            - generic [ref=f9e705]:
              - paragraph [ref=f9e706]: Booking-Fee
              - paragraph [ref=f9e707]: $177
            - generic [ref=f9e708]:
              - paragraph [ref=f9e709]: Cleaning-Fee
              - paragraph [ref=f9e710]: $325
            - generic [ref=f9e711]:
              - paragraph [ref=f9e712]: Damage Waiver
              - paragraph [ref=f9e713]: $75
            - generic [ref=f9e714]:
              - paragraph [ref=f9e715]: Total before taxes
              - paragraph [ref=f9e716]: $1852
            - generic [ref=f9e717]:
              - heading "Cancellation Policy" [level=4] [ref=f9e718]
              - paragraph [ref=f9e719]: Your reservation is 30 days or less to your desired check-in date. Your reservation will be NON-REFUNDABLE once complete.
    - contentinfo "footer" [ref=f9e721]:
      - list [ref=f9e724]:
        - listitem [ref=f9e725]:
          - button "Good Life Vacation Logo Explore Good Life Network" [ref=f9e726] [cursor=pointer]:
            - generic [ref=f9e729]:
              - img "Good Life Vacation Logo" [ref=f9e731]
              - generic [ref=f9e732]: Explore Good Life Network
          - list [ref=f9e736]:
            - listitem [ref=f9e737]:
              - button "Central Florida" [ref=f9e738] [cursor=pointer]
              - list [ref=f9e746]:
                - listitem [ref=f9e747]:
                  - button [ref=f9e748] [cursor=pointer]:
                    - link "Bahama Bay Logo Bahama Bay Resort and Spa" [ref=f9e750]:
                      - /url: https://www.bahamabay.com
                      - generic [ref=f9e751]:
                        - img "Bahama Bay Logo" [ref=f9e753]
                        - generic [ref=f9e754]: Bahama Bay Resort and Spa
                - listitem [ref=f9e757]:
                  - button [ref=f9e758] [cursor=pointer]:
                    - link "Caribe Cove Logo Caribe Cove" [ref=f9e760]:
                      - /url: https://www.caribecove.com
                      - generic [ref=f9e761]:
                        - img "Caribe Cove Logo" [ref=f9e763]
                        - generic [ref=f9e764]: Caribe Cove
                - listitem [ref=f9e767]:
                  - button [ref=f9e768] [cursor=pointer]:
                    - link "Beyond Lodging Logo Beyond Lodging" [ref=f9e770]:
                      - /url: https://www.beyondlodging.com
                      - generic [ref=f9e771]:
                        - img "Beyond Lodging Logo" [ref=f9e773]
                        - generic [ref=f9e774]: Beyond Lodging
            - listitem [ref=f9e777]:
              - button "West Florida" [ref=f9e778] [cursor=pointer]
              - list [ref=f9e786]:
                - listitem [ref=f9e787]:
                  - button [ref=f9e788] [cursor=pointer]:
                    - link "TOPS'L Logo TOPS'L Beach & Raquet Resort" [ref=f9e790]:
                      - /url: https://www.topsl.com
                      - generic [ref=f9e791]:
                        - img "TOPS'L Logo" [ref=f9e793]
                        - generic [ref=f9e794]: TOPS'L Beach & Raquet Resort
                - listitem [ref=f9e797]:
                  - button [ref=f9e798] [cursor=pointer]:
                    - link "Annabelle Lodging Logo Annabelle Lodging" [ref=f9e800]:
                      - /url: https://www.annabellelodging.com
                      - generic [ref=f9e801]:
                        - img "Annabelle Lodging Logo" [ref=f9e803]
                        - generic [ref=f9e804]: Annabelle Lodging
            - listitem [ref=f9e807]:
              - button "Arizona" [ref=f9e808] [cursor=pointer]
              - list [ref=f9e816]:
                - listitem [ref=f9e817]:
                  - button [ref=f9e818] [cursor=pointer]:
                    - link "Firesky Retreats Logo Firesky Retreats" [ref=f9e820]:
                      - /url: https://www.fireskyretreats.com
                      - generic [ref=f9e821]:
                        - img "Firesky Retreats Logo" [ref=f9e823]
                        - generic [ref=f9e824]: Firesky Retreats
            - listitem [ref=f9e827]:
              - button "California" [ref=f9e828] [cursor=pointer]
              - list [ref=f9e836]:
                - listitem [ref=f9e837]:
                  - button [ref=f9e838] [cursor=pointer]:
                    - link "Alice Lodging Logo Alice Lodging" [ref=f9e840]:
                      - /url: https://www.alicelodging.com
                      - generic [ref=f9e841]:
                        - img "Alice Lodging Logo" [ref=f9e843]
                        - generic [ref=f9e844]: Alice Lodging
            - listitem [ref=f9e845]:
              - button "Washington" [ref=f9e846] [cursor=pointer]
              - list [ref=f9e854]:
                - listitem [ref=f9e855]:
                  - button [ref=f9e856] [cursor=pointer]:
                    - link "Pacific Retreats Logo Pacific Retreats" [ref=f9e858]:
                      - /url: https://www.pacificretreats.com
                      - generic [ref=f9e859]:
                        - img "Pacific Retreats Logo" [ref=f9e861]
                        - generic [ref=f9e862]: Pacific Retreats
      - generic [ref=f9e865]:
        - generic [ref=f9e868]:
          - generic [ref=f9e869]:
            - heading "Sign up for exclusive offers from us" [level=2] [ref=f9e870]
            - generic [ref=f9e871]:
              - generic [ref=f9e872]: Please complete the following form to receive news and special offers from Alice Lodging™
              - generic [ref=f9e873]:
                - textbox "Email address" [ref=f9e875]:
                  - /placeholder: Enter your email
                - button "Subscribe to newsletter" [disabled] [ref=f9e878]:
                  - generic [ref=f9e879]: Subscribe
          - generic [ref=f9e884]:
            - generic [ref=f9e885]:
              - link [ref=f9e886] [cursor=pointer]:
                - /url: /
                - img "Alice Lodging™" [ref=f9e887]
              - link [ref=f9e888] [cursor=pointer]:
                - /url: https://www.goodlifevacations.com/about-us
                - img "Good Life Vacations Logo" [ref=f9e890]
            - list [ref=f9e896]:
              - paragraph [ref=f9e897]: About
              - listitem [ref=f9e898]:
                - link "About Alice Lodging" [ref=f9e899] [cursor=pointer]:
                  - /url: /about-us
              - listitem [ref=f9e900]:
                - link "Our Story" [ref=f9e901] [cursor=pointer]:
                  - /url: /our-story
              - listitem [ref=f9e902]:
                - link "Meet The Team" [ref=f9e903] [cursor=pointer]:
                  - /url: /meet-the-team
              - listitem [ref=f9e904]:
                - link "List With Us" [ref=f9e905] [cursor=pointer]:
                  - /url: /list-with-us
            - list [ref=f9e907]:
              - paragraph [ref=f9e908]: Explore
              - listitem [ref=f9e909]:
                - link "Specials" [ref=f9e910] [cursor=pointer]:
                  - /url: /specials
              - listitem [ref=f9e911]:
                - link "Blogs" [ref=f9e912] [cursor=pointer]:
                  - /url: /blog
              - listitem [ref=f9e913]:
                - link "Travel Insurance" [ref=f9e914] [cursor=pointer]:
                  - /url: /travel-insurance
              - listitem [ref=f9e915]:
                - link "Privacy Policy" [ref=f9e916] [cursor=pointer]:
                  - /url: /privacy-policy
              - listitem [ref=f9e917]:
                - link "Rental Rules and Policies" [ref=f9e918] [cursor=pointer]:
                  - /url: /rental-rules-and-policies
            - generic [ref=f9e919]:
              - generic [ref=f9e921]:
                - paragraph [ref=f9e922]: Contact Us
                - generic [ref=f9e923]:
                  - generic [ref=f9e924]: 76300 Country Club Drive, Palm Desert, CA 92211
                  - generic [ref=f9e929]: 707 E. Tahquitz Canyon Way Ste 16, Palm Springs, CA 92262
                  - link "office@alicelodging.com" [ref=f9e934] [cursor=pointer]:
                    - /url: mailto:office@alicelodging.com
                  - link "+1 (760)-345-5695" [ref=f9e942] [cursor=pointer]:
                    - /url: tel:+1 (760)-345-5695
              - generic [ref=f9e945]:
                - combobox "Search By Property" [ref=f9e950]
                - button [disabled] [ref=f9e952] [cursor=pointer]
        - generic [ref=f9e958]:
          - generic [ref=f9e959]:
            - link "Facebook" [ref=f9e960] [cursor=pointer]:
              - /url: https://www.facebook.com/profile.php?id=61579637295109
            - link "Instagram" [ref=f9e964] [cursor=pointer]:
              - /url: https://www.instagram.com/alicelodging/
            - link "Linkedin" [ref=f9e968] [cursor=pointer]:
              - /url: https://www.linkedin.com/company/alice-lodging
          - generic [ref=f9e972]:
            - generic [ref=f9e973]: © 2026 Alice Lodging™. All rights reserved.
            - generic [ref=f9e974]: "|"
            - link "All Properties" [ref=f9e975] [cursor=pointer]:
              - /url: /all-properties
            - generic [ref=f9e976]: "|"
            - generic [ref=f9e977]:
              - generic [ref=f9e978]:
                - text: Powered by
                - link "Flow One" [ref=f9e979] [cursor=pointer]:
                  - /url: https://flow.one/
              - img "Flow One Logo" [ref=f9e980]
  - alert [ref=f9e981]
```

# Test source

```ts
  1  | const { test, expect } = require('../fixtures/siteFixture');
  2  | const DateHelper = require('../utils/dateHelper');
  3  | const Logger = require('../utils/logger');
  4  | 
  5  | const sitesToTest = process.env.SITE ? [process.env.SITE] : ['aliceLodging', 'fireskyRetreats'];
  6  | 
  7  | for (const siteKey of sitesToTest) {
  8  |   test.describe(`TC3 — Property Details Validation [${siteKey}]`, () => {
  9  |     test.use({ siteKey });
  10 | 
  11 |     test(`Verify property details and booking criteria consistency from search on ${siteKey}`, async ({ homePage, searchResultsPage, propertyDetailsPage, siteConfig }) => {
  12 |       test.setTimeout(120000);
  13 |       Logger.step(`[TC3] Starting Property Details Validation on ${siteConfig.name}`);
  14 | 
  15 |       const dates = DateHelper.getFutureDates(14, 4);
  16 |       const targetAdults = 2;
  17 |       const targetChildren = 1;
  18 | 
  19 |       // 1. Open home page and configure search criteria
  20 |       await homePage.open();
  21 | 
  22 |       // 2. Set guests
  23 |       const guestResult = await searchResultsPage.setGuestCount(targetAdults, targetChildren);
  24 |       Logger.info(`[TC3] Guests configured: ${guestResult.adultsAfter} Adults, ${guestResult.childrenAfter} Children`);
  25 | 
  26 |       // 3. Set dates
  27 |       const dateResult = await searchResultsPage.setFutureDates(dates.checkIn.dateObj, dates.checkOut.dateObj);
  28 |       Logger.info(`[TC3] Dates configured: ${dateResult.checkInSelected} to ${dateResult.checkOutSelected}`);
  29 | 
  30 |       // 4. Search and navigate to listings
  31 |       await searchResultsPage.executeSearch(siteConfig.defaultDestination);
  32 | 
  33 |       // 5. Open first property from results
  34 |       const selectedPropertyName = await searchResultsPage.openFirstProperty();
  35 |       expect(selectedPropertyName.length).toBeGreaterThan(0);
  36 |       Logger.info(`[TC3] Selected property card name: "${selectedPropertyName}"`);
  37 | 
  38 |       // 6. Verify property name on detail page
  39 |       const pagePropertyName = await propertyDetailsPage.getPropertyName();
  40 |       expect(pagePropertyName).toBeTruthy();
  41 |       expect(pagePropertyName.trim().toLowerCase()).toBe(selectedPropertyName.trim().toLowerCase());
  42 |       Logger.info(`[TC3] Property page title: "${pagePropertyName}"`);
  43 | 
  44 |       // 7. Verify booking criteria consistency — BLOCKER 4
  45 |       const bookingInfo = await propertyDetailsPage.verifyBookingDetails({
  46 |         adults: guestResult.adultsAfter,
  47 |         children: guestResult.childrenAfter,
  48 |         checkInISO: dates.checkIn.iso,
  49 |         checkOutISO: dates.checkOut.iso
  50 |       });
  51 | 
  52 |       // Assert page actually loaded
  53 |       expect(bookingInfo.pageLoaded).toBe(true);
  54 |       expect(bookingInfo.actualGuests).toBeTruthy();
> 55 |       expect(bookingInfo.guestsConsistent).toBe(true);
     |                                            ^ Error: expect(received).toBe(expected) // Object.is equality
  56 |       expect(bookingInfo.actualDates).toBeTruthy();
  57 |       expect(bookingInfo.datesConsistent).toBe(true);
  58 |       expect(bookingInfo.hasBookingSection).toBe(true);
  59 | 
  60 |       // Assert guests are consistent between search and property page
  61 |       if (bookingInfo.actualGuests) {
  62 |         expect(bookingInfo.guestsConsistent).toBe(true);
  63 |         Logger.info(`[TC3 ASSERT] Guest criteria consistency: PASS ✓`);
  64 |       } else {
  65 |         Logger.warn(`[TC3] Guest picker not found on property page — cannot verify guest consistency`);
  66 |       }
  67 | 
  68 |       // Assert dates are consistent between search and property page
  69 |       if (bookingInfo.actualDates) {
  70 |         expect(bookingInfo.datesConsistent).toBe(true);
  71 |         Logger.info(`[TC3 ASSERT] Date criteria consistency: PASS ✓`);
  72 |       } else {
  73 |         Logger.warn(`[TC3] Date picker not found on property page — cannot verify date consistency`);
  74 |       }
  75 | 
  76 |       Logger.info(`[TC3 Success] Property details and booking criteria genuinely verified on ${siteConfig.name}`);
  77 |     });
  78 |   });
  79 | }
  80 | 
```