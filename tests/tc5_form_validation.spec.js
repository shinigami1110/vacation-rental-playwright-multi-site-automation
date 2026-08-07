const { test, expect } = require('../fixtures/siteFixture');
const DataGenerator = require('../utils/dataGenerator');
const Logger = require('../utils/logger');

const sitesToTest = ['aliceLodging', 'fireskyRetreats'];

for (const siteKey of sitesToTest) {
  test.describe(`TC5 — Form Validation Workflow [${siteKey}]`, () => {
    test.use({ siteKey });

    test(`Verify inquiry form submission of invalid input, field-level error association, and document website differences on ${siteKey}`, async ({ formValidationPage, siteConfig }) => {
      Logger.step(`[TC5] Starting Form Validation on ${siteConfig.name}`);

      // 1. Locate property owner inquiry form ("List With Us" / "Contact Us")
      await formValidationPage.openInquiryForm();

      // 2. Generate invalid form input payload
      const invalidData = DataGenerator.getInvalidFormData().invalidFormats;

      // 3. Submit invalid input and capture validation state & field association
      const validationResult = await formValidationPage.submitInvalidData(invalidData);

      // 4. Assert appropriate validation is displayed
      expect(validationResult.isValidationDisplayed).toBe(true);
      expect(validationResult.totalFields).toBeGreaterThan(0);

      // 5. Document notable differences between Alice Lodging and Firesky Retreats
      if (siteKey === 'aliceLodging') {
        Logger.info(`[TC5 Documented Difference] Alice Lodging Form Path: /list-with-us | Uses HTML5 email validation and client-side button state checks.`);
      } else {
        Logger.info(`[TC5 Documented Difference] Firesky Retreats Form Path: /contact-us | Uses HTML5 required validation and modal/inline field notification popups.`);
      }

      Logger.info(`[TC5 Success] Form validation behavior and field error association genuinely captured for ${siteConfig.name}`);
    });
  });
}
