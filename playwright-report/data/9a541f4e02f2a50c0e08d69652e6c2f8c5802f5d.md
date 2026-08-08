# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tc3_property_details.spec.js >> TC3 — Property Details Validation [fireskyRetreats] >> Verify property details and booking criteria consistency from search on fireskyRetreats
- Location: tests\tc3_property_details.spec.js:11:5

# Error details

```
TimeoutError: locator.waitFor: Timeout 10000ms exceeded.
Call log:
  - waiting for locator('input[placeholder*="destination" i], input[placeholder*="search" i], input[name*="location" i]').first() to be visible

```

# Page snapshot

```yaml
- generic [ref=e1]:
  - generic [ref=e2]:
    - banner "header" [ref=e3]:
      - navigation "Header Navigation Bar" [ref=e4]:
        - link [ref=e7] [cursor=pointer]:
          - /url: /
          - img "Firesky Retreats Logo" [ref=e8]
        - generic [ref=e9]:
          - button "Favourites" [ref=e10] [cursor=pointer]
          - button "Open menu" [ref=e14] [cursor=pointer]
    - generic [ref=e18]:
      - generic [ref=e22]:
        - heading "Find Your Arizona Escape" [level=1] [ref=e23]
        - generic [ref=e24]: Book beautiful stays in destinations you'll love. Thoughtfully selected homes, seamless stays, and everything you need to experience Arizona your way.
      - generic [ref=e30]:
        - generic [ref=e32]:
          - combobox "Where to next?" [ref=e38]
          - button [disabled] [ref=e40] [cursor=pointer]
        - button "Arrival on 2026-08-22 Departure on 2026-08-26" [active] [ref=e45] [cursor=pointer]:
          - generic [ref=e49]:
            - generic: Arrival
            - generic [ref=e50]: 2026-08-22
          - generic [ref=e54]:
            - generic: Depart
            - generic [ref=e55]: 2026-08-26
        - 'button "Select Guests: 2 Adults 1 Children" [ref=e58] [cursor=pointer]':
          - generic [ref=e59]: 3 guests
        - button "Search" [ref=e64] [cursor=pointer]
      - generic [ref=e67]:
        - generic [ref=e69]:
          - link "For You" [ref=e70] [cursor=pointer]:
            - /url: /
          - link "Pool Pool" [ref=e76] [cursor=pointer]:
            - /url: /category/pool
            - img "Pool" [ref=e78]
            - generic [ref=e83]: Pool
          - link "Group Homes" [ref=e84] [cursor=pointer]:
            - /url: /category/group-homes
          - link "Pet Friendly Pet Friendly" [ref=e89] [cursor=pointer]:
            - /url: /category/pet-friendly
            - img "Pet Friendly" [ref=e91]
            - generic [ref=e95]: Pet Friendly
          - link "Premium Stays Premium Stays" [ref=e96] [cursor=pointer]:
            - /url: /category/premium-stays
            - img "Premium Stays" [ref=e98]
            - generic [ref=e107]: Premium Stays
          - link "Long Term Stay" [ref=e108] [cursor=pointer]:
            - /url: /category/long-term-stay
          - link "Value Stay" [ref=e113] [cursor=pointer]:
            - /url: /category/value-stay
        - generic [ref=e118]:
          - link "⚡ Flash Summer Deals Alert • 20% Off with SUNNY20 • For Check-ins On or Before Sep 30" [ref=e120] [cursor=pointer]:
            - /url: /specials/arizona-summer-deals-save-20-on-vacation-rental
          - button "Close banner" [ref=e121] [cursor=pointer]
      - generic [ref=e128]:
        - generic [ref=e129]:
          - heading "Explore All Properties" [level=2] [ref=e131]
          - link "View All" [ref=e132] [cursor=pointer]:
            - /url: /listings
        - generic [ref=e134]:
          - generic "Property card High Pines Abode" [ref=e136]:
            - link "DINING AREA Click to add unit to Favourites Flagstaff, Arizona 5.0 (1) High Pines Abode Bedrooms 5 Bathrooms 3 12 $439/night (incl. all fees) Aug 09 – Aug 11" [ref=e138] [cursor=pointer]:
              - /url: /listings/high-pines-abode-flagstaff-az
              - generic [ref=e139]:
                - generic [ref=e140]:
                  - img "DINING AREA" [ref=e145]
                  - button "Click to add unit to Favourites" [ref=e147]
                - generic [ref=e150]:
                  - generic [ref=e151]:
                    - paragraph [ref=e152]: Flagstaff, Arizona
                    - link "5.0 (1)" [ref=e159]:
                      - /url: /listings/high-pines-abode-flagstaff-az?#unitReviews
                  - heading "High Pines Abode" [level=3] [ref=e160]
                  - generic [ref=e161]:
                    - generic [ref=e162]:
                      - img "Bedrooms" [ref=e164]
                      - generic [ref=e175]: "5"
                    - generic [ref=e176]:
                      - img "Bathrooms" [ref=e178]
                      - generic [ref=e182]: "3"
                    - generic [ref=e183]: "12"
                  - paragraph [ref=e187]:
                    - generic [ref=e188]: $439
                    - generic [ref=e189]: /night (incl. all fees)
                  - generic [ref=e190]: Aug 09 – Aug 11
          - generic "Property card Osborn - Old Town Elegance" [ref=e192]:
            - link "Pool Click to add unit to Favourites Scottsdale, Arizona 5.0 (18) Osborn - Old Town Elegance Bedrooms 3 Bathrooms 2.5 8 $280/night (incl. all fees) Aug 09 – Aug 11" [ref=e194] [cursor=pointer]:
              - /url: /listings/osborn-old-town-elegance-scottsdale-az
              - generic [ref=e195]:
                - generic [ref=e196]:
                  - img "Pool" [ref=e201]
                  - button "Click to add unit to Favourites" [ref=e203]
                - generic [ref=e206]:
                  - generic [ref=e207]:
                    - paragraph [ref=e208]: Scottsdale, Arizona
                    - link "5.0 (18)" [ref=e215]:
                      - /url: /listings/osborn-old-town-elegance-scottsdale-az?#unitReviews
                  - heading "Osborn - Old Town Elegance" [level=3] [ref=e216]
                  - generic [ref=e217]:
                    - generic [ref=e218]:
                      - img "Bedrooms" [ref=e220]
                      - generic [ref=e231]: "3"
                    - generic [ref=e232]:
                      - img "Bathrooms" [ref=e234]
                      - generic [ref=e238]: "2.5"
                    - generic [ref=e239]: "8"
                  - paragraph [ref=e243]:
                    - generic [ref=e244]: $280
                    - generic [ref=e245]: /night (incl. all fees)
                  - generic [ref=e246]: Aug 09 – Aug 11
          - generic "Property card Primrose Paradise" [ref=e248]:
            - link "OUTDOOR POOL Click to add unit to Favourites Gold Canyon, Arizona 5.0 (41) Primrose Paradise Bedrooms 4 Bathrooms 3.5 10 $173/night (incl. all fees) Aug 09 – Aug 11" [ref=e250] [cursor=pointer]:
              - /url: /listings/primrose-paradise-gold-canyon-az
              - generic [ref=e251]:
                - generic [ref=e252]:
                  - img "OUTDOOR POOL" [ref=e257]
                  - button "Click to add unit to Favourites" [ref=e259]
                - generic [ref=e262]:
                  - generic [ref=e263]:
                    - paragraph [ref=e264]: Gold Canyon, Arizona
                    - link "5.0 (41)" [ref=e271]:
                      - /url: /listings/primrose-paradise-gold-canyon-az?#unitReviews
                  - heading "Primrose Paradise" [level=3] [ref=e272]
                  - generic [ref=e273]:
                    - generic [ref=e274]:
                      - img "Bedrooms" [ref=e276]
                      - generic [ref=e287]: "4"
                    - generic [ref=e288]:
                      - img "Bathrooms" [ref=e290]
                      - generic [ref=e294]: "3.5"
                    - generic [ref=e295]: "10"
                  - paragraph [ref=e299]:
                    - generic [ref=e300]: $173
                    - generic [ref=e301]: /night (incl. all fees)
                  - generic [ref=e302]: Aug 09 – Aug 11
          - generic "Property card AZGD02-Potter" [ref=e304]:
            - link "LIVING AREA REVERSE Click to add unit to Favourites Glendale, Arizona 4.9 (52) AZGD02-Potter Bedrooms 3 Bathrooms 2 6 $309/night (incl. all fees) Aug 09 – Aug 11" [ref=e306] [cursor=pointer]:
              - /url: /listings/azgd02-potter-glendale-az
              - generic [ref=e307]:
                - generic [ref=e308]:
                  - img "LIVING AREA REVERSE" [ref=e313]
                  - button "Click to add unit to Favourites" [ref=e315]
                - generic [ref=e318]:
                  - generic [ref=e319]:
                    - paragraph [ref=e320]: Glendale, Arizona
                    - link "4.9 (52)" [ref=e327]:
                      - /url: /listings/azgd02-potter-glendale-az?#unitReviews
                  - heading "AZGD02-Potter" [level=3] [ref=e328]
                  - generic [ref=e329]:
                    - generic [ref=e330]:
                      - img "Bedrooms" [ref=e332]
                      - generic [ref=e343]: "3"
                    - generic [ref=e344]:
                      - img "Bathrooms" [ref=e346]
                      - generic [ref=e350]: "2"
                    - generic [ref=e351]: "6"
                  - paragraph [ref=e355]:
                    - generic [ref=e356]: $309
                    - generic [ref=e357]: /night (incl. all fees)
                  - generic [ref=e358]: Aug 09 – Aug 11
          - generic "Property card Old Town Oasis" [ref=e360]:
            - link "Pool Click to add unit to Favourites Scottsdale, Arizona 5.0 (80) Old Town Oasis Bedrooms 4 Bathrooms 3 16 $593/night (incl. all fees) Apr 30 – May 03" [ref=e362] [cursor=pointer]:
              - /url: /listings/old-town-oasis-scottsdale-az
              - generic [ref=e363]:
                - generic [ref=e364]:
                  - img "Pool" [ref=e369]
                  - button "Click to add unit to Favourites" [ref=e371]
                - generic [ref=e374]:
                  - generic [ref=e375]:
                    - paragraph [ref=e376]: Scottsdale, Arizona
                    - link "5.0 (80)" [ref=e383]:
                      - /url: /listings/old-town-oasis-scottsdale-az?#unitReviews
                  - heading "Old Town Oasis" [level=3] [ref=e384]
                  - generic [ref=e385]:
                    - generic [ref=e386]:
                      - img "Bedrooms" [ref=e388]
                      - generic [ref=e399]: "4"
                    - generic [ref=e400]:
                      - img "Bathrooms" [ref=e402]
                      - generic [ref=e406]: "3"
                    - generic [ref=e407]: "16"
                  - paragraph [ref=e411]:
                    - generic [ref=e412]: $593
                    - generic [ref=e413]: /night (incl. all fees)
                  - generic [ref=e414]: Apr 30 – May 03
          - generic "Property card Lakefront Serenity" [ref=e416]:
            - link "Exterior Pool Click to add unit to Favourites Tempe, Arizona 4.9 (19) Lakefront Serenity Bedrooms 2 Bathrooms 2 6 $136/night (incl. all fees) Aug 09 – Sep 09" [ref=e418] [cursor=pointer]:
              - /url: /listings/lakefront-serenity-tempe-az
              - generic [ref=e419]:
                - generic [ref=e420]:
                  - img "Exterior Pool" [ref=e425]
                  - button "Click to add unit to Favourites" [ref=e427]
                - generic [ref=e430]:
                  - generic [ref=e431]:
                    - paragraph [ref=e432]: Tempe, Arizona
                    - link "4.9 (19)" [ref=e439]:
                      - /url: /listings/lakefront-serenity-tempe-az?#unitReviews
                  - heading "Lakefront Serenity" [level=3] [ref=e440]
                  - generic [ref=e441]:
                    - generic [ref=e442]:
                      - img "Bedrooms" [ref=e444]
                      - generic [ref=e455]: "2"
                    - generic [ref=e456]:
                      - img "Bathrooms" [ref=e458]
                      - generic [ref=e462]: "2"
                    - generic [ref=e463]: "6"
                  - paragraph [ref=e467]:
                    - generic [ref=e468]: $136
                    - generic [ref=e469]: /night (incl. all fees)
                  - generic [ref=e470]: Aug 09 – Sep 09
          - generic "Property card AZPH11B-Casita" [ref=e472]:
            - link "Kitchen Click to add unit to Favourites Phoenix, Arizona 5.0 (1) AZPH11B-Casita Bedrooms 2 Bathrooms 1 4 $278/night (incl. all fees) Dec 31 – Jan 03" [ref=e474] [cursor=pointer]:
              - /url: /listings/azph11b-casita-phoenix-az
              - generic [ref=e475]:
                - generic [ref=e476]:
                  - img "Kitchen" [ref=e481]
                  - button "Click to add unit to Favourites" [ref=e483]
                - generic [ref=e486]:
                  - generic [ref=e487]:
                    - paragraph [ref=e488]: Phoenix, Arizona
                    - link "5.0 (1)" [ref=e495]:
                      - /url: /listings/azph11b-casita-phoenix-az?#unitReviews
                  - heading "AZPH11B-Casita" [level=3] [ref=e496]
                  - generic [ref=e497]:
                    - generic [ref=e498]:
                      - img "Bedrooms" [ref=e500]
                      - generic [ref=e511]: "2"
                    - generic [ref=e512]:
                      - img "Bathrooms" [ref=e514]
                      - generic [ref=e518]: "1"
                    - generic [ref=e519]: "4"
                  - paragraph [ref=e523]:
                    - generic [ref=e524]: $278
                    - generic [ref=e525]: /night (incl. all fees)
                  - generic [ref=e526]: Dec 31 – Jan 03
          - generic "Property card AZSC28-Ludlow" [ref=e528]:
            - link "Outdoor Dining Click to add unit to Favourites Scottsdale, Arizona 5.0 (43) AZSC28-Ludlow Bedrooms 4 Bathrooms 2.5 12 $400/night (incl. all fees) Aug 09 – Aug 11" [ref=e530] [cursor=pointer]:
              - /url: /listings/azsc28-ludlow-scottsdale-az
              - generic [ref=e531]:
                - generic [ref=e532]:
                  - img "Outdoor Dining" [ref=e537]
                  - button "Click to add unit to Favourites" [ref=e539]
                - generic [ref=e542]:
                  - generic [ref=e543]:
                    - paragraph [ref=e544]: Scottsdale, Arizona
                    - link "5.0 (43)" [ref=e551]:
                      - /url: /listings/azsc28-ludlow-scottsdale-az?#unitReviews
                  - heading "AZSC28-Ludlow" [level=3] [ref=e552]
                  - generic [ref=e553]:
                    - generic [ref=e554]:
                      - img "Bedrooms" [ref=e556]
                      - generic [ref=e567]: "4"
                    - generic [ref=e568]:
                      - img "Bathrooms" [ref=e570]
                      - generic [ref=e574]: "2.5"
                    - generic [ref=e575]: "12"
                  - paragraph [ref=e579]:
                    - generic [ref=e580]: $400
                    - generic [ref=e581]: /night (incl. all fees)
                  - generic [ref=e582]: Aug 09 – Aug 11
          - generic "Property card The Cosmopolitan Cottage" [ref=e584]:
            - link "Living Area Click to add unit to Favourites Phoenix, Arizona 5.0 (24) The Cosmopolitan Cottage Bedrooms 2 Bathrooms 2 8 $308/night (incl. all fees) Aug 09 – Aug 10" [ref=e586] [cursor=pointer]:
              - /url: /listings/the-cosmopolitan-cottage-phoenix-az
              - generic [ref=e587]:
                - generic [ref=e588]:
                  - img "Living Area" [ref=e593]
                  - button "Click to add unit to Favourites" [ref=e595]
                - generic [ref=e598]:
                  - generic [ref=e599]:
                    - paragraph [ref=e600]: Phoenix, Arizona
                    - link "5.0 (24)" [ref=e607]:
                      - /url: /listings/the-cosmopolitan-cottage-phoenix-az?#unitReviews
                  - heading "The Cosmopolitan Cottage" [level=3] [ref=e608]
                  - generic [ref=e609]:
                    - generic [ref=e610]:
                      - img "Bedrooms" [ref=e612]
                      - generic [ref=e623]: "2"
                    - generic [ref=e624]:
                      - img "Bathrooms" [ref=e626]
                      - generic [ref=e630]: "2"
                    - generic [ref=e631]: "8"
                  - paragraph [ref=e635]:
                    - generic [ref=e636]: $308
                    - generic [ref=e637]: /night (incl. all fees)
                  - generic [ref=e638]: Aug 09 – Aug 10
          - generic "Property card Four Amigos" [ref=e640]:
            - link "Pool Click to add unit to Favourites Scottsdale, Arizona 4.9 (16) Four Amigos Bedrooms 2 Bathrooms 2 4 $206/night (incl. all fees) Oct 31 – Nov 30" [ref=e642] [cursor=pointer]:
              - /url: /listings/four-amigos-scottsdale-az
              - generic [ref=e643]:
                - generic [ref=e644]:
                  - img "Pool" [ref=e649]
                  - button "Click to add unit to Favourites" [ref=e651]
                - generic [ref=e654]:
                  - generic [ref=e655]:
                    - paragraph [ref=e656]: Scottsdale, Arizona
                    - link "4.9 (16)" [ref=e663]:
                      - /url: /listings/four-amigos-scottsdale-az?#unitReviews
                  - heading "Four Amigos" [level=3] [ref=e664]
                  - generic [ref=e665]:
                    - generic [ref=e666]:
                      - img "Bedrooms" [ref=e668]
                      - generic [ref=e679]: "2"
                    - generic [ref=e680]:
                      - img "Bathrooms" [ref=e682]
                      - generic [ref=e686]: "2"
                    - generic [ref=e687]: "4"
                  - paragraph [ref=e691]:
                    - generic [ref=e692]: $206
                    - generic [ref=e693]: /night (incl. all fees)
                  - generic [ref=e694]: Oct 31 – Nov 30
          - generic "Property card Scottsdale Sol" [ref=e696]:
            - link "Scottsdale Sol Click to add unit to Favourites Scottsdale, Arizona 4.9 (110) Scottsdale Sol Bedrooms 4 Bathrooms 2.5 11 $359/night (incl. all fees) Aug 11 – Aug 13" [ref=e698] [cursor=pointer]:
              - /url: /listings/scottsdale-sol-scottsdale-az
              - generic [ref=e699]:
                - generic [ref=e700]:
                  - img "Scottsdale Sol" [ref=e705]
                  - button "Click to add unit to Favourites" [ref=e707]
                - generic [ref=e710]:
                  - generic [ref=e711]:
                    - paragraph [ref=e712]: Scottsdale, Arizona
                    - link "4.9 (110)" [ref=e719]:
                      - /url: /listings/scottsdale-sol-scottsdale-az?#unitReviews
                  - heading "Scottsdale Sol" [level=3] [ref=e720]
                  - generic [ref=e721]:
                    - generic [ref=e722]:
                      - img "Bedrooms" [ref=e724]
                      - generic [ref=e735]: "4"
                    - generic [ref=e736]:
                      - img "Bathrooms" [ref=e738]
                      - generic [ref=e742]: "2.5"
                    - generic [ref=e743]: "11"
                  - paragraph [ref=e747]:
                    - generic [ref=e748]: $359
                    - generic [ref=e749]: /night (incl. all fees)
                  - generic [ref=e750]: Aug 11 – Aug 13
          - generic "Property card Bliss By The Beach" [ref=e752]:
            - link "Bliss by the Beach Click to add unit to Favourites Phoenix, Arizona 4.9 (73) Bliss By The Beach Bedrooms 4 Bathrooms 2 16 $364/night (incl. all fees) Aug 09 – Aug 11" [ref=e754] [cursor=pointer]:
              - /url: /listings/bliss-by-the-beach-phoenix-az
              - generic [ref=e755]:
                - generic [ref=e756]:
                  - img "Bliss by the Beach" [ref=e761]
                  - button "Click to add unit to Favourites" [ref=e763]
                - generic [ref=e766]:
                  - generic [ref=e767]:
                    - paragraph [ref=e768]: Phoenix, Arizona
                    - link "4.9 (73)" [ref=e775]:
                      - /url: /listings/bliss-by-the-beach-phoenix-az?#unitReviews
                  - heading "Bliss By The Beach" [level=3] [ref=e776]
                  - generic [ref=e777]:
                    - generic [ref=e778]:
                      - img "Bedrooms" [ref=e780]
                      - generic [ref=e791]: "4"
                    - generic [ref=e792]:
                      - img "Bathrooms" [ref=e794]
                      - generic [ref=e798]: "2"
                    - generic [ref=e799]: "16"
                  - paragraph [ref=e803]:
                    - generic [ref=e804]: $364
                    - generic [ref=e805]: /night (incl. all fees)
                  - generic [ref=e806]: Aug 09 – Aug 11
          - generic "Property card Balboa Bungalow" [ref=e808]:
            - link "7503260279 Click to add unit to Favourites Tempe, Arizona 5.0 (12) Balboa Bungalow Bedrooms 3 Bathrooms 2 6" [ref=e810] [cursor=pointer]:
              - /url: /listings/balboa-bungalow-tempe-az
              - generic [ref=e811]:
                - generic [ref=e812]:
                  - img "7503260279" [ref=e817]
                  - button "Click to add unit to Favourites" [ref=e819]
                - generic [ref=e822]:
                  - generic [ref=e823]:
                    - paragraph [ref=e824]: Tempe, Arizona
                    - link "5.0 (12)" [ref=e831]:
                      - /url: /listings/balboa-bungalow-tempe-az?#unitReviews
                  - heading "Balboa Bungalow" [level=3] [ref=e832]
                  - generic [ref=e833]:
                    - generic [ref=e834]:
                      - img "Bedrooms" [ref=e836]
                      - generic [ref=e847]: "3"
                    - generic [ref=e848]:
                      - img "Bathrooms" [ref=e850]
                      - generic [ref=e854]: "2"
                    - generic [ref=e855]: "6"
          - generic "Property card AZPH11AB-Combo" [ref=e860]:
            - link "6566590570 Click to add unit to Favourites Phoenix, Arizona 5.0 (3) AZPH11AB-Combo Bedrooms 4 Bathrooms 2 8 $590/night (incl. all fees) Nov 24 – Nov 26" [ref=e862] [cursor=pointer]:
              - /url: /listings/azph11ab-combo-phoenix-az
              - generic [ref=e863]:
                - generic [ref=e864]:
                  - img "6566590570" [ref=e869]
                  - button "Click to add unit to Favourites" [ref=e871]
                - generic [ref=e874]:
                  - generic [ref=e875]:
                    - paragraph [ref=e876]: Phoenix, Arizona
                    - link "5.0 (3)" [ref=e883]:
                      - /url: /listings/azph11ab-combo-phoenix-az?#unitReviews
                  - heading "AZPH11AB-Combo" [level=3] [ref=e884]
                  - generic [ref=e885]:
                    - generic [ref=e886]:
                      - img "Bedrooms" [ref=e888]
                      - generic [ref=e899]: "4"
                    - generic [ref=e900]:
                      - img "Bathrooms" [ref=e902]
                      - generic [ref=e906]: "2"
                    - generic [ref=e907]: "8"
                  - paragraph [ref=e911]:
                    - generic [ref=e912]: $590
                    - generic [ref=e913]: /night (incl. all fees)
                  - generic [ref=e914]: Nov 24 – Nov 26
          - generic "Property card Happy Haus" [ref=e916]:
            - link "Pool Click to add unit to Favourites Phoenix, Arizona 4.9 (107) Happy Haus Bedrooms 3 Bathrooms 2 8 $327/night (incl. all fees) Aug 10 – Aug 12" [ref=e918] [cursor=pointer]:
              - /url: /listings/happy-haus-phoenix-az
              - generic [ref=e919]:
                - generic [ref=e920]:
                  - img "Pool" [ref=e925]
                  - button "Click to add unit to Favourites" [ref=e927]
                - generic [ref=e930]:
                  - generic [ref=e931]:
                    - paragraph [ref=e932]: Phoenix, Arizona
                    - link "4.9 (107)" [ref=e939]:
                      - /url: /listings/happy-haus-phoenix-az?#unitReviews
                  - heading "Happy Haus" [level=3] [ref=e940]
                  - generic [ref=e941]:
                    - generic [ref=e942]:
                      - img "Bedrooms" [ref=e944]
                      - generic [ref=e955]: "3"
                    - generic [ref=e956]:
                      - img "Bathrooms" [ref=e958]
                      - generic [ref=e962]: "2"
                    - generic [ref=e963]: "8"
                  - paragraph [ref=e967]:
                    - generic [ref=e968]: $327
                    - generic [ref=e969]: /night (incl. all fees)
                  - generic [ref=e970]: Aug 10 – Aug 12
          - generic "Property card Sweet Flames in Scottsdale" [ref=e972]:
            - link "Sweet Flames in Scottsdale Click to add unit to Favourites Scottsdale, Arizona 4.9 (85) Sweet Flames in Scottsdale Bedrooms 6 Bathrooms 3 16 $386/night (incl. all fees) Aug 09 – Aug 11" [ref=e974] [cursor=pointer]:
              - /url: /listings/sweet-flames-in-scottsdale-scottsdale-az
              - generic [ref=e975]:
                - generic [ref=e976]:
                  - img "Sweet Flames in Scottsdale" [ref=e981]
                  - button "Click to add unit to Favourites" [ref=e983]
                - generic [ref=e986]:
                  - generic [ref=e987]:
                    - paragraph [ref=e988]: Scottsdale, Arizona
                    - link "4.9 (85)" [ref=e995]:
                      - /url: /listings/sweet-flames-in-scottsdale-scottsdale-az?#unitReviews
                  - heading "Sweet Flames in Scottsdale" [level=3] [ref=e996]
                  - generic [ref=e997]:
                    - generic [ref=e998]:
                      - img "Bedrooms" [ref=e1000]
                      - generic [ref=e1011]: "6"
                    - generic [ref=e1012]:
                      - img "Bathrooms" [ref=e1014]
                      - generic [ref=e1018]: "3"
                    - generic [ref=e1019]: "16"
                  - paragraph [ref=e1023]:
                    - generic [ref=e1024]: $386
                    - generic [ref=e1025]: /night (incl. all fees)
                  - generic [ref=e1026]: Aug 09 – Aug 11
          - generic "Property card Casa de Palmas" [ref=e1028]:
            - link "Pool Click to add unit to Favourites Peoria, Arizona 4.9 (31) Casa de Palmas Bedrooms 4 Bathrooms 2 8 $328/night (incl. all fees) Aug 09 – Aug 11" [ref=e1030] [cursor=pointer]:
              - /url: /listings/casa-de-palmas-peoria-az
              - generic [ref=e1031]:
                - generic [ref=e1032]:
                  - img "Pool" [ref=e1037]
                  - button "Click to add unit to Favourites" [ref=e1039]
                - generic [ref=e1042]:
                  - generic [ref=e1043]:
                    - paragraph [ref=e1044]: Peoria, Arizona
                    - link "4.9 (31)" [ref=e1051]:
                      - /url: /listings/casa-de-palmas-peoria-az?#unitReviews
                  - heading "Casa de Palmas" [level=3] [ref=e1052]
                  - generic [ref=e1053]:
                    - generic [ref=e1054]:
                      - img "Bedrooms" [ref=e1056]
                      - generic [ref=e1067]: "4"
                    - generic [ref=e1068]:
                      - img "Bathrooms" [ref=e1070]
                      - generic [ref=e1074]: "2"
                    - generic [ref=e1075]: "8"
                  - paragraph [ref=e1079]:
                    - generic [ref=e1080]: $328
                    - generic [ref=e1081]: /night (incl. all fees)
                  - generic [ref=e1082]: Aug 09 – Aug 11
          - generic "Property card High country retreat" [ref=e1084]:
            - link "Living Room Click to add unit to Favourites Flagstaff, Arizona 5.0 (29) High country retreat Bedrooms 5 Bathrooms 4 18 $481/night (incl. all fees) Aug 09 – Aug 11" [ref=e1086] [cursor=pointer]:
              - /url: /listings/high-country-retreat-flagstaff-az
              - generic [ref=e1087]:
                - generic [ref=e1088]:
                  - img "Living Room" [ref=e1093]
                  - button "Click to add unit to Favourites" [ref=e1095]
                - generic [ref=e1098]:
                  - generic [ref=e1099]:
                    - paragraph [ref=e1100]: Flagstaff, Arizona
                    - link "5.0 (29)" [ref=e1107]:
                      - /url: /listings/high-country-retreat-flagstaff-az?#unitReviews
                  - heading "High country retreat" [level=3] [ref=e1108]
                  - generic [ref=e1109]:
                    - generic [ref=e1110]:
                      - img "Bedrooms" [ref=e1112]
                      - generic [ref=e1123]: "5"
                    - generic [ref=e1124]:
                      - img "Bathrooms" [ref=e1126]
                      - generic [ref=e1130]: "4"
                    - generic [ref=e1131]: "18"
                  - paragraph [ref=e1135]:
                    - generic [ref=e1136]: $481
                    - generic [ref=e1137]: /night (incl. all fees)
                  - generic [ref=e1138]: Aug 09 – Aug 11
          - generic "Property card High Pines Lodge" [ref=e1140]:
            - link "High Country Lodge Click to add unit to Favourites Flagstaff, Arizona 5.0 (8) High Pines Lodge Bedrooms 10 Bathrooms 6 30 $850/night (incl. all fees) Aug 09 – Aug 11" [ref=e1142] [cursor=pointer]:
              - /url: /listings/high-pines-lodge-flagstaff-az
              - generic [ref=e1143]:
                - generic [ref=e1144]:
                  - img "High Country Lodge" [ref=e1149]
                  - button "Click to add unit to Favourites" [ref=e1151]
                - generic [ref=e1154]:
                  - generic [ref=e1155]:
                    - paragraph [ref=e1156]: Flagstaff, Arizona
                    - link "5.0 (8)" [ref=e1163]:
                      - /url: /listings/high-pines-lodge-flagstaff-az?#unitReviews
                  - heading "High Pines Lodge" [level=3] [ref=e1164]
                  - generic [ref=e1165]:
                    - generic [ref=e1166]:
                      - img "Bedrooms" [ref=e1168]
                      - generic [ref=e1179]: "10"
                    - generic [ref=e1180]:
                      - img "Bathrooms" [ref=e1182]
                      - generic [ref=e1186]: "6"
                    - generic [ref=e1187]: "30"
                  - paragraph [ref=e1191]:
                    - generic [ref=e1192]: $850
                    - generic [ref=e1193]: /night (incl. all fees)
                  - generic [ref=e1194]: Aug 09 – Aug 11
          - generic "Property card A Hidden Space-Tempe" [ref=e1196]:
            - link "Outdoor Pool Click to add unit to Favourites Tempe, Arizona 4.9 (15) A Hidden Space-Tempe Bedrooms 3 Bathrooms 2 8 $291/night (incl. all fees) Aug 10 – Aug 12" [ref=e1198] [cursor=pointer]:
              - /url: /listings/a-hidden-space-tempe-tempe-az
              - generic [ref=e1199]:
                - generic [ref=e1200]:
                  - img "Outdoor Pool" [ref=e1205]
                  - button "Click to add unit to Favourites" [ref=e1207]
                - generic [ref=e1210]:
                  - generic [ref=e1211]:
                    - paragraph [ref=e1212]: Tempe, Arizona
                    - link "4.9 (15)" [ref=e1219]:
                      - /url: /listings/a-hidden-space-tempe-tempe-az?#unitReviews
                  - heading "A Hidden Space-Tempe" [level=3] [ref=e1220]
                  - generic [ref=e1221]:
                    - generic [ref=e1222]:
                      - img "Bedrooms" [ref=e1224]
                      - generic [ref=e1235]: "3"
                    - generic [ref=e1236]:
                      - img "Bathrooms" [ref=e1238]
                      - generic [ref=e1242]: "2"
                    - generic [ref=e1243]: "8"
                  - paragraph [ref=e1247]:
                    - generic [ref=e1248]: $291
                    - generic [ref=e1249]: /night (incl. all fees)
                  - generic [ref=e1250]: Aug 10 – Aug 12
          - generic "Property card AZSC24-Thomas" [ref=e1252]:
            - link "Pool Click to add unit to Favourites Scottsdale, Arizona 4.5 (4) AZSC24-Thomas Bedrooms 2 Bathrooms 2 4 $272/night (incl. all fees) May 01 – May 03" [ref=e1254] [cursor=pointer]:
              - /url: /listings/azsc24-thomas-scottsdale-az
              - generic [ref=e1255]:
                - generic [ref=e1256]:
                  - img "Pool" [ref=e1261]
                  - button "Click to add unit to Favourites" [ref=e1263]
                - generic [ref=e1266]:
                  - generic [ref=e1267]:
                    - paragraph [ref=e1268]: Scottsdale, Arizona
                    - link "4.5 (4)" [ref=e1275]:
                      - /url: /listings/azsc24-thomas-scottsdale-az?#unitReviews
                  - heading "AZSC24-Thomas" [level=3] [ref=e1276]
                  - generic [ref=e1277]:
                    - generic [ref=e1278]:
                      - img "Bedrooms" [ref=e1280]
                      - generic [ref=e1291]: "2"
                    - generic [ref=e1292]:
                      - img "Bathrooms" [ref=e1294]
                      - generic [ref=e1298]: "2"
                    - generic [ref=e1299]: "4"
                  - paragraph [ref=e1303]:
                    - generic [ref=e1304]: $272
                    - generic [ref=e1305]: /night (incl. all fees)
                  - generic [ref=e1306]: May 01 – May 03
          - generic "Property card AZTE02-Stanley" [ref=e1308]:
            - link "Pool Click to add unit to Favourites Tempe, Arizona 4.9 (54) AZTE02-Stanley Bedrooms 3 Bathrooms 2 8 $312/night (incl. all fees) Aug 09 – Aug 11" [ref=e1310] [cursor=pointer]:
              - /url: /listings/azte02-stanley-tempe-az
              - generic [ref=e1311]:
                - generic [ref=e1312]:
                  - img "Pool" [ref=e1317]
                  - button "Click to add unit to Favourites" [ref=e1319]
                - generic [ref=e1322]:
                  - generic [ref=e1323]:
                    - paragraph [ref=e1324]: Tempe, Arizona
                    - link "4.9 (54)" [ref=e1331]:
                      - /url: /listings/azte02-stanley-tempe-az?#unitReviews
                  - heading "AZTE02-Stanley" [level=3] [ref=e1332]
                  - generic [ref=e1333]:
                    - generic [ref=e1334]:
                      - img "Bedrooms" [ref=e1336]
                      - generic [ref=e1347]: "3"
                    - generic [ref=e1348]:
                      - img "Bathrooms" [ref=e1350]
                      - generic [ref=e1354]: "2"
                    - generic [ref=e1355]: "8"
                  - paragraph [ref=e1359]:
                    - generic [ref=e1360]: $312
                    - generic [ref=e1361]: /night (incl. all fees)
                  - generic [ref=e1362]: Aug 09 – Aug 11
          - generic "Property card AZSC21-Andora" [ref=e1364]:
            - link "Outdoor Fire Pit and Pool Click to add unit to Favourites Scottsdale, Arizona 5.0 (106) AZSC21-Andora Bedrooms 3 Bathrooms 2 6 $319/night (incl. all fees) Aug 09 – Aug 11" [ref=e1366] [cursor=pointer]:
              - /url: /listings/azsc21-andora-scottsdale-az
              - generic [ref=e1367]:
                - generic [ref=e1368]:
                  - img "Outdoor Fire Pit and Pool" [ref=e1373]
                  - button "Click to add unit to Favourites" [ref=e1375]
                - generic [ref=e1378]:
                  - generic [ref=e1379]:
                    - paragraph [ref=e1380]: Scottsdale, Arizona
                    - link "5.0 (106)" [ref=e1387]:
                      - /url: /listings/azsc21-andora-scottsdale-az?#unitReviews
                  - heading "AZSC21-Andora" [level=3] [ref=e1388]
                  - generic [ref=e1389]:
                    - generic [ref=e1390]:
                      - img "Bedrooms" [ref=e1392]
                      - generic [ref=e1403]: "3"
                    - generic [ref=e1404]:
                      - img "Bathrooms" [ref=e1406]
                      - generic [ref=e1410]: "2"
                    - generic [ref=e1411]: "6"
                  - paragraph [ref=e1415]:
                    - generic [ref=e1416]: $319
                    - generic [ref=e1417]: /night (incl. all fees)
                  - generic [ref=e1418]: Aug 09 – Aug 11
          - generic "Property card Hidden Lake Haven" [ref=e1420]:
            - link "Image Click to add unit to Favourites Tempe, Arizona Hidden Lake Haven Bedrooms 2 Bathrooms 2 6 $95/night (incl. all fees) Aug 09 – Aug 11" [ref=e1422] [cursor=pointer]:
              - /url: /listings/hidden-lake-haven-tempe-az
              - generic [ref=e1423]:
                - generic [ref=e1424]:
                  - img "Image" [ref=e1429]
                  - button "Click to add unit to Favourites" [ref=e1431]
                - generic [ref=e1434]:
                  - paragraph [ref=e1436]: Tempe, Arizona
                  - heading "Hidden Lake Haven" [level=3] [ref=e1437]
                  - generic [ref=e1438]:
                    - generic [ref=e1439]:
                      - img "Bedrooms" [ref=e1441]
                      - generic [ref=e1452]: "2"
                    - generic [ref=e1453]:
                      - img "Bathrooms" [ref=e1455]
                      - generic [ref=e1459]: "2"
                    - generic [ref=e1460]: "6"
                  - paragraph [ref=e1464]:
                    - generic [ref=e1465]: $95
                    - generic [ref=e1466]: /night (incl. all fees)
                  - generic [ref=e1467]: Aug 09 – Aug 11
          - generic "Property card The Talon House" [ref=e1469]:
            - link "Image Click to add unit to Favourites Scottsdale, Arizona 5.0 (11) The Talon House Bedrooms 4 Bathrooms 3.5 8 $446/night (incl. all fees) Aug 10 – Aug 13" [ref=e1471] [cursor=pointer]:
              - /url: /listings/grayhawk-renaissance-scottsdale-az
              - generic [ref=e1472]:
                - generic [ref=e1473]:
                  - img "Image" [ref=e1478]
                  - button "Click to add unit to Favourites" [ref=e1480]
                - generic [ref=e1483]:
                  - generic [ref=e1484]:
                    - paragraph [ref=e1485]: Scottsdale, Arizona
                    - link "5.0 (11)" [ref=e1492]:
                      - /url: /listings/grayhawk-renaissance-scottsdale-az?#unitReviews
                  - heading "The Talon House" [level=3] [ref=e1493]
                  - generic [ref=e1494]:
                    - generic [ref=e1495]:
                      - img "Bedrooms" [ref=e1497]
                      - generic [ref=e1508]: "4"
                    - generic [ref=e1509]:
                      - img "Bathrooms" [ref=e1511]
                      - generic [ref=e1515]: "3.5"
                    - generic [ref=e1516]: "8"
                  - paragraph [ref=e1520]:
                    - generic [ref=e1521]: $446
                    - generic [ref=e1522]: /night (incl. all fees)
                  - generic [ref=e1523]: Aug 10 – Aug 13
          - generic "Property card AZSC23-Moreland" [ref=e1525]:
            - link "Pool Click to add unit to Favourites Scottsdale, Arizona 5.0 (83) AZSC23-Moreland Bedrooms 3 Bathrooms 2 6 $350/night (incl. all fees) Aug 22 – Aug 24" [ref=e1527] [cursor=pointer]:
              - /url: /listings/azsc23-moreland-scottsdale-az
              - generic [ref=e1528]:
                - generic [ref=e1529]:
                  - img "Pool" [ref=e1534]
                  - button "Click to add unit to Favourites" [ref=e1536]
                - generic [ref=e1539]:
                  - generic [ref=e1540]:
                    - paragraph [ref=e1541]: Scottsdale, Arizona
                    - link "5.0 (83)" [ref=e1548]:
                      - /url: /listings/azsc23-moreland-scottsdale-az?#unitReviews
                  - heading "AZSC23-Moreland" [level=3] [ref=e1549]
                  - generic [ref=e1550]:
                    - generic [ref=e1551]:
                      - img "Bedrooms" [ref=e1553]
                      - generic [ref=e1564]: "3"
                    - generic [ref=e1565]:
                      - img "Bathrooms" [ref=e1567]
                      - generic [ref=e1571]: "2"
                    - generic [ref=e1572]: "6"
                  - paragraph [ref=e1576]:
                    - generic [ref=e1577]: $350
                    - generic [ref=e1578]: /night (incl. all fees)
                  - generic [ref=e1579]: Aug 22 – Aug 24
          - generic "Property card AZPH11A-Almeria Main" [ref=e1581]:
            - link "Kitchen/Dining Click to add unit to Favourites Phoenix, Arizona 4.9 (10) AZPH11A-Almeria Main Bedrooms 2 Bathrooms 1 4 $228/night (incl. all fees) Dec 01 – Dec 03" [ref=e1583] [cursor=pointer]:
              - /url: /listings/azph11a-almeria-main-phoenix-az
              - generic [ref=e1584]:
                - generic [ref=e1585]:
                  - img "Kitchen/Dining" [ref=e1590]
                  - button "Click to add unit to Favourites" [ref=e1592]
                - generic [ref=e1595]:
                  - generic [ref=e1596]:
                    - paragraph [ref=e1597]: Phoenix, Arizona
                    - link "4.9 (10)" [ref=e1604]:
                      - /url: /listings/azph11a-almeria-main-phoenix-az?#unitReviews
                  - heading "AZPH11A-Almeria Main" [level=3] [ref=e1605]
                  - generic [ref=e1606]:
                    - generic [ref=e1607]:
                      - img "Bedrooms" [ref=e1609]
                      - generic [ref=e1620]: "2"
                    - generic [ref=e1621]:
                      - img "Bathrooms" [ref=e1623]
                      - generic [ref=e1627]: "1"
                    - generic [ref=e1628]: "4"
                  - paragraph [ref=e1632]:
                    - generic [ref=e1633]: $228
                    - generic [ref=e1634]: /night (incl. all fees)
                  - generic [ref=e1635]: Dec 01 – Dec 03
          - generic "Property card Paradise Oasis" [ref=e1637]:
            - link "Pool Click to add unit to Favourites Peoria, Arizona 4.9 (21) Paradise Oasis Bedrooms 3 Bathrooms 2 10 $293/night (incl. all fees) Aug 17 – Aug 19" [ref=e1639] [cursor=pointer]:
              - /url: /listings/paradise-oasis-peoria-az
              - generic [ref=e1640]:
                - generic [ref=e1641]:
                  - img "Pool" [ref=e1646]
                  - button "Click to add unit to Favourites" [ref=e1648]
                - generic [ref=e1651]:
                  - generic [ref=e1652]:
                    - paragraph [ref=e1653]: Peoria, Arizona
                    - link "4.9 (21)" [ref=e1660]:
                      - /url: /listings/paradise-oasis-peoria-az?#unitReviews
                  - heading "Paradise Oasis" [level=3] [ref=e1661]
                  - generic [ref=e1662]:
                    - generic [ref=e1663]:
                      - img "Bedrooms" [ref=e1665]
                      - generic [ref=e1676]: "3"
                    - generic [ref=e1677]:
                      - img "Bathrooms" [ref=e1679]
                      - generic [ref=e1683]: "2"
                    - generic [ref=e1684]: "10"
                  - paragraph [ref=e1688]:
                    - generic [ref=e1689]: $293
                    - generic [ref=e1690]: /night (incl. all fees)
                  - generic [ref=e1691]: Aug 17 – Aug 19
          - generic "Property card The Nineteenth Hole" [ref=e1693]:
            - link "The Nineteenth Hole Click to add unit to Favourites Phoenix, Arizona 4.9 (30) The Nineteenth Hole Bedrooms 4 Bathrooms 5.5 18 $397/night (incl. all fees) Aug 15 – Aug 17" [ref=e1695] [cursor=pointer]:
              - /url: /listings/the-nineteenth-hole-phoenix-az
              - generic [ref=e1696]:
                - generic [ref=e1697]:
                  - img "The Nineteenth Hole" [ref=e1702]
                  - button "Click to add unit to Favourites" [ref=e1704]
                - generic [ref=e1707]:
                  - generic [ref=e1708]:
                    - paragraph [ref=e1709]: Phoenix, Arizona
                    - link "4.9 (30)" [ref=e1716]:
                      - /url: /listings/the-nineteenth-hole-phoenix-az?#unitReviews
                  - heading "The Nineteenth Hole" [level=3] [ref=e1717]
                  - generic [ref=e1718]:
                    - generic [ref=e1719]:
                      - img "Bedrooms" [ref=e1721]
                      - generic [ref=e1732]: "4"
                    - generic [ref=e1733]:
                      - img "Bathrooms" [ref=e1735]
                      - generic [ref=e1739]: "5.5"
                    - generic [ref=e1740]: "18"
                  - paragraph [ref=e1744]:
                    - generic [ref=e1745]: $397
                    - generic [ref=e1746]: /night (incl. all fees)
                  - generic [ref=e1747]: Aug 15 – Aug 17
          - generic "Property card Villa Sorriso" [ref=e1749]:
            - link "OUTER SEATING Click to add unit to Favourites Scottsdale, Arizona 5.0 (2) Villa Sorriso Bedrooms 3 Bathrooms 2 10 $307/night (incl. all fees) Sep 19 – Sep 21" [ref=e1751] [cursor=pointer]:
              - /url: /listings/villa-sorriso-scottsdale-az
              - generic [ref=e1752]:
                - generic [ref=e1753]:
                  - img "OUTER SEATING" [ref=e1758]
                  - button "Click to add unit to Favourites" [ref=e1760]
                - generic [ref=e1763]:
                  - generic [ref=e1764]:
                    - paragraph [ref=e1765]: Scottsdale, Arizona
                    - link "5.0 (2)" [ref=e1772]:
                      - /url: /listings/villa-sorriso-scottsdale-az?#unitReviews
                  - heading "Villa Sorriso" [level=3] [ref=e1773]
                  - generic [ref=e1774]:
                    - generic [ref=e1775]:
                      - img "Bedrooms" [ref=e1777]
                      - generic [ref=e1788]: "3"
                    - generic [ref=e1789]:
                      - img "Bathrooms" [ref=e1791]
                      - generic [ref=e1795]: "2"
                    - generic [ref=e1796]: "10"
                  - paragraph [ref=e1800]:
                    - generic [ref=e1801]: $307
                    - generic [ref=e1802]: /night (incl. all fees)
                  - generic [ref=e1803]: Sep 19 – Sep 21
        - link "View All Properties" [ref=e1805] [cursor=pointer]:
          - /url: /listings
      - generic [ref=e1808]:
        - generic [ref=e1809]:
          - heading "From The Blog" [level=2] [ref=e1810]
          - generic [ref=e1811]: Travel inspiration, local guides, and tips to help you make the most of your Arizona getaway.
        - generic [ref=e1814]:
          - link [ref=e1816] [cursor=pointer]:
            - /url: /blogs/where-arizona-travelers-go-to-avoid-high-summer-temperatures
            - generic [ref=e1818]:
              - img "Where Arizona Travelers Go to Avoid High Summer Temperatures" [ref=e1820]
              - generic [ref=e1821]:
                - heading "Where Arizona Travelers Go to Avoid High Summer Temperatures" [level=3] [ref=e1822]
                - paragraph [ref=e1823]:
                  - paragraph [ref=e1824]: Every Arizona resident knows the drill. June arrives, the thermometer clears triple digits, and you start calculating how far to drive for relief. The answer is 90 minutes to three hours. Arizona has mountains, forests, and mile high towns where summer actually feels like summer. Go up. Phoenix at 1,100 feet bakes. Flagstaff at 7,000 feet delivers a 30 degree temperature shift. No flight required. Just altitude.
          - link [ref=e1826] [cursor=pointer]:
            - /url: /blogs/arizona-road-trips
            - generic [ref=e1828]:
              - img "Arizona Road Trips to Beat the Heat in June" [ref=e1830]
              - generic [ref=e1831]:
                - heading "Arizona Road Trips to Beat the Heat in June" [level=3] [ref=e1832]
                - paragraph [ref=e1833]:
                  - paragraph [ref=e1834]: June in Arizona doesn’t shrink the state. It just shifts. The desert floor becomes unbearable, but within 90 minutes you can climb to pine forests and 70 degree days. Point your car north or east, gain elevation on Highway 60 or through Oak Creek Canyon, and discover a completely different climate. Arizona summer driving routes deliver stunning landscapes without the heat.
          - link [ref=e1836] [cursor=pointer]:
            - /url: /blogs/best-cool-arizona-towns
            - generic [ref=e1838]:
              - img "Best Cool Arizona Towns for a June Escape" [ref=e1840]
              - generic [ref=e1841]:
                - heading "Best Cool Arizona Towns for a June Escape" [level=3] [ref=e1842]
                - paragraph [ref=e1843]:
                  - paragraph [ref=e1844]: June in Arizona doesn’t have to mean suffering through heat in the desert. The state’s high country towns sit at 5,000 to 7,000 feet above sea level, and up there, June is genuinely comfortable and sometimes downright cool. Arizona’s reputation as an oven in summer is earned by Phoenix and Tucson, June temperatures regularly hit […]
      - generic [ref=e1847]:
        - generic [ref=e1848]:
          - paragraph [ref=e1849]: FIRESKY RETREATS
          - heading "The Firesky Way" [level=2] [ref=e1850]
          - generic [ref=e1851]: Comfortable homes. Seamless stays. Unforgettable Arizona experiences.
        - generic [ref=e1854]:
          - generic [ref=e1856]:
            - img "Vacation Homes You Can Book with Confidence" [ref=e1858]
            - generic [ref=e1859]:
              - heading "Vacation Homes You Can Book with Confidence" [level=3] [ref=e1860]
              - paragraph [ref=e1861]: Professionally managed, carefully maintained, and accurately represented for a seamless stay.
          - generic [ref=e1863]:
            - img "Space to Relax, Gather, and Recharge" [ref=e1865]
            - generic [ref=e1866]:
              - heading "Space to Relax, Gather, and Recharge" [level=3] [ref=e1867]
              - paragraph [ref=e1868]: Private pools, full kitchens, spacious living areas, and room to make yourself at home.
          - generic [ref=e1870]:
            - img "Arizona Expertise, Personalized Service" [ref=e1872]
            - generic [ref=e1873]:
              - heading "Arizona Expertise, Personalized Service" [level=3] [ref=e1874]
              - paragraph [ref=e1875]: Friendly local support and personalized recommendations throughout your Arizona getaway.
          - generic [ref=e1877]:
            - img "Prime Locations Across Arizona" [ref=e1879]
            - generic [ref=e1880]:
              - heading "Prime Locations Across Arizona" [level=3] [ref=e1881]
              - paragraph [ref=e1882]: Convenient access to golf, outdoor adventures, dining, shopping, and top attractions.
    - contentinfo "footer" [ref=e1884]:
      - list [ref=e1887]:
        - listitem [ref=e1888]:
          - button "Good Life Vacation Logo Explore Good Life Network" [ref=e1889] [cursor=pointer]:
            - generic [ref=e1891]:
              - img "Good Life Vacation Logo" [ref=e1893]
              - generic [ref=e1894]: Explore Good Life Network
          - list [ref=e1898]:
            - listitem [ref=e1899]:
              - button "Central Florida" [ref=e1900] [cursor=pointer]
              - list [ref=e1907]:
                - listitem [ref=e1908]:
                  - button [ref=e1909] [cursor=pointer]:
                    - link "Bahama Bay Logo Bahama Bay Resort and Spa" [ref=e1910]:
                      - /url: https://www.bahamabay.com
                      - generic [ref=e1911]:
                        - img "Bahama Bay Logo" [ref=e1913]
                        - generic [ref=e1914]: Bahama Bay Resort and Spa
                - listitem [ref=e1917]:
                  - button [ref=e1918] [cursor=pointer]:
                    - link "Caribe Cove Logo Caribe Cove" [ref=e1919]:
                      - /url: https://www.caribecove.com
                      - generic [ref=e1920]:
                        - img "Caribe Cove Logo" [ref=e1922]
                        - generic [ref=e1923]: Caribe Cove
                - listitem [ref=e1926]:
                  - button [ref=e1927] [cursor=pointer]:
                    - link "Beyond Lodging Logo Beyond Lodging" [ref=e1928]:
                      - /url: https://www.beyondlodging.com
                      - generic [ref=e1929]:
                        - img "Beyond Lodging Logo" [ref=e1931]
                        - generic [ref=e1932]: Beyond Lodging
            - listitem [ref=e1935]:
              - button "West Florida" [ref=e1936] [cursor=pointer]
              - list [ref=e1943]:
                - listitem [ref=e1944]:
                  - button [ref=e1945] [cursor=pointer]:
                    - link "TOPS'L Logo TOPS'L Beach & Raquet Resort" [ref=e1946]:
                      - /url: https://www.topsl.com
                      - generic [ref=e1947]:
                        - img "TOPS'L Logo" [ref=e1949]
                        - generic [ref=e1950]: TOPS'L Beach & Raquet Resort
                - listitem [ref=e1953]:
                  - button [ref=e1954] [cursor=pointer]:
                    - link "Annabelle Lodging Logo Annabelle Lodging" [ref=e1955]:
                      - /url: https://www.annabellelodging.com
                      - generic [ref=e1956]:
                        - img "Annabelle Lodging Logo" [ref=e1958]
                        - generic [ref=e1959]: Annabelle Lodging
            - listitem [ref=e1962]:
              - button "Arizona" [ref=e1963] [cursor=pointer]
              - list [ref=e1970]:
                - listitem [ref=e1971]:
                  - button [ref=e1972] [cursor=pointer]:
                    - link "Firesky Retreats Logo Firesky Retreats" [ref=e1973]:
                      - /url: https://www.fireskyretreats.com
                      - generic [ref=e1974]:
                        - img "Firesky Retreats Logo" [ref=e1976]
                        - generic [ref=e1977]: Firesky Retreats
            - listitem [ref=e1978]:
              - button "California" [ref=e1979] [cursor=pointer]
              - list [ref=e1986]:
                - listitem [ref=e1987]:
                  - button [ref=e1988] [cursor=pointer]:
                    - link "Alice Lodging Logo Alice Lodging" [ref=e1989]:
                      - /url: https://www.alicelodging.com
                      - generic [ref=e1990]:
                        - img "Alice Lodging Logo" [ref=e1992]
                        - generic [ref=e1993]: Alice Lodging
            - listitem [ref=e1996]:
              - button "Washington" [ref=e1997] [cursor=pointer]
              - list [ref=e2004]:
                - listitem [ref=e2005]:
                  - button [ref=e2006] [cursor=pointer]:
                    - link "Pacific Retreats Logo Pacific Retreats" [ref=e2007]:
                      - /url: https://www.pacificretreats.com
                      - generic [ref=e2008]:
                        - img "Pacific Retreats Logo" [ref=e2010]
                        - generic [ref=e2011]: Pacific Retreats
      - generic [ref=e2014]:
        - generic [ref=e2015]:
          - generic [ref=e2016]:
            - link [ref=e2017] [cursor=pointer]:
              - /url: /
              - img "Firesky Retreats" [ref=e2018]
            - link [ref=e2019] [cursor=pointer]:
              - /url: https://www.goodlifevacations.com/about-us
              - img "Good Life Vacations Logo" [ref=e2021]
          - list [ref=e2027]:
            - paragraph [ref=e2028]: About
            - listitem [ref=e2029]:
              - link "About Us" [ref=e2030] [cursor=pointer]:
                - /url: /about-us
            - listitem [ref=e2031]:
              - link "Blogs" [ref=e2032] [cursor=pointer]:
                - /url: /blogs
            - listitem [ref=e2033]:
              - link "List With Us" [ref=e2034] [cursor=pointer]:
                - /url: /list-with-us
          - list [ref=e2036]:
            - paragraph [ref=e2037]: Resources
            - listitem [ref=e2038]:
              - link "FAQs" [ref=e2039] [cursor=pointer]:
                - /url: /frequently-asked-questions
            - listitem [ref=e2040]:
              - link "Privacy Policy" [ref=e2041] [cursor=pointer]:
                - /url: /privacy-policy
            - listitem [ref=e2042]:
              - link "Rental Rules and Policies" [ref=e2043] [cursor=pointer]:
                - /url: /rental-rules-policies
            - listitem [ref=e2044]:
              - link "Travel Insurance" [ref=e2045] [cursor=pointer]:
                - /url: /travel-insurance
          - generic [ref=e2046]:
            - paragraph [ref=e2047]: Newsletter Signup
            - generic [ref=e2048]: Please complete the following form to receive news and special offers from Firesky Retreats
            - generic [ref=e2049]:
              - textbox "Email address" [ref=e2051]:
                - /placeholder: Enter your email
              - button "Subscribe to newsletter" [disabled] [ref=e2054]: Subscribe
          - generic [ref=e2056]:
            - paragraph [ref=e2057]: Contact Us
            - generic [ref=e2058]:
              - link "reservations@fireskyretreats.com" [ref=e2059] [cursor=pointer]:
                - /url: mailto:reservations@fireskyretreats.com
              - link "+1 (520) 394-8100" [ref=e2067] [cursor=pointer]:
                - /url: tel:+1 (520) 394-8100
            - link [ref=e2069] [cursor=pointer]:
              - /url: /contact-us
              - button "Contact Us" [ref=e2070]
        - generic [ref=e2072]:
          - generic [ref=e2073]: © 2026 Firesky Retreats. All rights reserved.
          - generic [ref=e2074]: "|"
          - link "All Properties" [ref=e2075] [cursor=pointer]:
            - /url: /all-properties
          - generic [ref=e2076]: "|"
          - generic [ref=e2077]:
            - generic [ref=e2078]:
              - text: Powered by
              - link "Flow One" [ref=e2079] [cursor=pointer]:
                - /url: https://flow.one/
            - img "Flow One Logo" [ref=e2080]
  - alert [ref=e2081]
```

# Test source

```ts
  146 |       throw new Error(`[TC2 FAILURE] Guest Adult count did not increment via UI. Expected: ${before.adults + adultsToAdd}, Got: ${after.adults}`);
  147 |     }
  148 |     if (after.children !== before.children + childrenToAdd) {
  149 |       throw new Error(`[TC2 FAILURE] Guest Child count did not increment via UI. Expected: ${before.children + childrenToAdd}, Got: ${after.children}`);
  150 |     }
  151 | 
  152 |     return {
  153 |       adultsBefore: before.adults,
  154 |       adultsAfter: after.adults,
  155 |       childrenBefore: before.children,
  156 |       childrenAfter: after.children
  157 |     };
  158 |   }
  159 | 
  160 |   /**
  161 |    * Select future travel dates strictly using real calendar UI clicks and verify via aria-label.
  162 |    * NO URL MANIPULATION FALLBACKS ALLOWED.
  163 |    * 
  164 |    * @param {Date} checkInDate 
  165 |    * @param {Date} checkOutDate 
  166 |    * @returns {Promise<{checkInSelected: string, checkOutSelected: string, displayText: string}>}
  167 |    */
  168 |   async setFutureDates(checkInDate, checkOutDate) {
  169 |     const checkInISO = checkInDate.toISOString().split('T')[0];
  170 |     const checkOutISO = checkOutDate.toISOString().split('T')[0];
  171 |     Logger.step(`[TC2] Selecting future dates: Check-in ${checkInISO}, Check-out ${checkOutISO}`);
  172 |     await this._dismissPromoPopupsOnly(true);
  173 | 
  174 |     // Step 1: Read BEFORE date state
  175 |     const before = await this._readDateStateFromUI();
  176 |     Logger.info(`[TC2] Dates BEFORE: arrival=${before.arrivalISO}, departure=${before.departureISO}`);
  177 | 
  178 |     // Step 2: Open the real calendar and verify its date controls are rendered.
  179 |     const dateBtn = this.page.locator('button.popoverButtonContainer[aria-label*="Arrival"]').first();
  180 |     await dateBtn.waitFor({ state: 'visible', timeout: 10000 });
  181 |     await dateBtn.click();
  182 | 
  183 |     const calendarDays = this.page.locator('time[datetime]');
  184 |     await calendarDays.first().waitFor({ state: 'visible', timeout: 10000 });
  185 | 
  186 |     const selectRenderedDate = async (targetISO, label) => {
  187 |       for (let monthAdvance = 0; monthAdvance < 12; monthAdvance++) {
  188 |         const targetDay = this.page
  189 |           .locator(`time[datetime="${targetISO}"]`)
  190 |           .first();
  191 | 
  192 |         if (await targetDay.count() > 0 && await targetDay.isVisible()) {
  193 |           await targetDay.click();
  194 |           return;
  195 |         }
  196 | 
  197 |         const nextMonthAriaLabel = await this.page.evaluate(() => {
  198 |           const nextMonthButton = Array.from(document.querySelectorAll('button')).find(button =>
  199 |             /next.*month|month.*next/i.test(button.getAttribute('aria-label') || '')
  200 |           );
  201 |           return nextMonthButton?.getAttribute('aria-label') || null;
  202 |         });
  203 | 
  204 |         if (!nextMonthAriaLabel) {
  205 |           throw new Error(`[TC2 FAILURE] ${label} ${targetISO} is not rendered and the open calendar exposes no next-month control on ${this.siteConfig.name}`);
  206 |         }
  207 | 
  208 |         await this.page.getByRole('button', { name: nextMonthAriaLabel, exact: true }).click();
  209 |       }
  210 | 
  211 |       throw new Error(`[TC2 FAILURE] ${label} ${targetISO} was not rendered after navigating 12 calendar months on ${this.siteConfig.name}`);
  212 |     };
  213 | 
  214 |     // Steps 3-4: Select the actual rendered check-in and check-out day controls.
  215 |     await selectRenderedDate(checkInISO, 'Check-in date');
  216 |     await selectRenderedDate(checkOutISO, 'Check-out date');
  217 | 
  218 |     // Step 5: Read AFTER date state strictly from actual UI (No URL fallbacks)
  219 |     const after = await this._readDateStateFromUI();
  220 |     Logger.info(`[TC2] Dates AFTER: arrival=${after.arrivalISO}, departure=${after.departureISO}`);
  221 | 
  222 |     if (after.arrivalISO !== checkInISO) {
  223 |       throw new Error(`[TC2 FAILURE] Check-in date not reflected in UI. Expected: ${checkInISO}, Got: ${after.arrivalISO}. Label: "${after.label}"`);
  224 |     }
  225 |     if (after.departureISO !== checkOutISO) {
  226 |       throw new Error(`[TC2 FAILURE] Check-out date not reflected in UI. Expected: ${checkOutISO}, Got: ${after.departureISO}. Label: "${after.label}"`);
  227 |     }
  228 | 
  229 |     return {
  230 |       checkInSelected: checkInISO,
  231 |       checkOutSelected: checkOutISO,
  232 |       displayText: after.label
  233 |     };
  234 |   }
  235 | 
  236 |   /**
  237 |    * Execute destination search using UI input
  238 |    * @param {string} destination
  239 |    */
  240 |   async executeSearch(destination) {
  241 |     Logger.step(`[TC2] Performing destination search for: "${destination}"`);
  242 |     await this._dismissPromoPopupsOnly();
  243 |     await this._closeAllPopovers();
  244 | 
  245 |     const destinationInput = this.page.locator(commonLocators.search.destinationInput).first();
> 246 |     await destinationInput.waitFor({ state: 'visible', timeout: 10000 });
      |                            ^ TimeoutError: locator.waitFor: Timeout 10000ms exceeded.
  247 |     await this.safeFill(destinationInput, destination, 'Destination search input');
  248 |     await this.page.keyboard.press('Enter');
  249 |     await this.waitForLoad();
  250 |     await this.page.waitForTimeout(2000);
  251 |     await this._dismissPromoPopupsOnly();
  252 |     await this._closeAllPopovers();
  253 |     Logger.info(`[TC2] Destination search submitted through the live UI.`);
  254 |   }
  255 | 
  256 |   /**
  257 |    * Get visible property card locators (links to /listing/ pages)
  258 |    */
  259 |   async getPropertyCards() {
  260 |     await this.page.waitForTimeout(2000);
  261 |     // Property cards are <a> links to /listings/XXXX
  262 |     const cards = this.page.locator('a[href*="/listing"]').filter({ hasText: /./ });
  263 |     const count = await cards.count();
  264 |     Logger.info(`[TC2] Property card links displayed: ${count}`);
  265 |     return cards;
  266 |   }
  267 | 
  268 |   /**
  269 |    * Extract normalized numerical price values from visible listing cards.
  270 |    * Prices are in <span> elements containing $NNN.
  271 |    * @returns {Promise<Array<number>>}
  272 |    */
  273 |   async getCardPrices() {
  274 |     await this.page.waitForTimeout(1500);
  275 |     const cardTexts = await this.page.locator('a[href*="/listing"]').evaluateAll(cards =>
  276 |       cards.map(card => card.innerText || '')
  277 |     );
  278 |     const prices = cardTexts.map(text => {
  279 |       const match = text.match(/\$(\d[\d,]*)/);
  280 |       return match ? parseInt(match[1].replace(/,/g, ''), 10) : null;
  281 |     }).filter(Number.isFinite);
  282 | 
  283 |     Logger.info(`[TC2] Extracted ${prices.length} prices: [${prices.join(', ')}]`);
  284 |     return prices;
  285 |   }
  286 | 
  287 |   /**
  288 |    * Apply a filter. Uses the filter panel button or category navigation.
  289 |    * @param {string} filterName
  290 |    */
  291 |   async applyFilter(filterName) {
  292 |     Logger.step(`[TC2] Applying filter: "${filterName}"`);
  293 |     await this._dismissPromoPopupsOnly();
  294 |     await this._closeAllPopovers();
  295 | 
  296 |     // Try the filter panel button (both sites have class filterAndSortButton filterButton)
  297 |     const filterPanelBtn = this.page.locator('.filterAndSortButton.filterButton, [aria-labelledby="filter"]').first();
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
```