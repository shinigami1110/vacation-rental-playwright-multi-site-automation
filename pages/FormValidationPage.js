const BasePage = require('./BasePage');
const Logger = require('../utils/logger');
const commonLocators = require('../locators/commonLocators');

class FormValidationPage extends BasePage {
  constructor(page, siteConfig) {
    super(page, siteConfig);
  }

  /**
   * Locate property owner inquiry form (e.g. List With Us or Contact Us)
   */
  async openInquiryForm() {
    Logger.step(`[TC5] Locating property owner inquiry form at: ${this.siteConfig.formUrl}`);
    await this.navigateTo(this.siteConfig.formUrl);
    await this.waitForLoad();
  }

  /**
   * Submit invalid form inputs and verify validation message association per field
   * @param {Object} invalidData 
   */
  async submitInvalidData(invalidData) {
    Logger.step(`[TC5] Submitting invalid input to verify field-level validation association on ${this.siteConfig.name}`);
    await this.dismissOverlays();

    const emailInput = this.page.locator(commonLocators.forms.email).first();
    const submitBtn = this.page.locator(commonLocators.forms.submitButton).first();

    if (await emailInput.isVisible({ timeout: 5000 }).catch(() => false)) {
      await this.safeFill(emailInput, invalidData.email, 'Invalid Email Input Field');
    }

    if (await submitBtn.isVisible({ timeout: 5000 }).catch(() => false)) {
      await submitBtn.click({ force: true }).catch(async () => {
        await this.page.evaluate(() => {
          const form = document.querySelector('form');
          if (form) form.requestSubmit();
        });
      });
      await this.page.waitForTimeout(1500);
    } else {
      await this.page.keyboard.press('Enter');
    }

    // Capture field-level validation details & associated error messages
    const validationDetails = await this.page.evaluate(() => {
      const inputs = Array.from(document.querySelectorAll('form input, form textarea, form select'));
      
      const fieldValidations = inputs.map(input => ({
        name: input.getAttribute('name') || input.getAttribute('placeholder') || input.type || 'field',
        type: input.type,
        isValid: input.checkValidity(),
        validationMessage: input.validationMessage || '',
        value: input.value
      }));

      const uiErrors = Array.from(document.querySelectorAll('[class*="error"], [class*="invalid"], [role="alert"], span.text-red-500'))
        .map(el => el.innerText.trim())
        .filter(t => t.length > 0);

      const invalidFields = fieldValidations.filter(f => !f.isValid || f.validationMessage.length > 0);

      return {
        totalFields: inputs.length,
        invalidFieldsCount: invalidFields.length,
        fieldValidations: fieldValidations,
        uiErrorMessages: uiErrors,
        isValidationDisplayed: invalidFields.length > 0 || uiErrors.length > 0
      };
    });

    Logger.info(`[TC5 Output] Site: ${this.siteConfig.name} | Total Form Fields Evaluated: ${validationDetails.totalFields}`);
    Logger.info(`[TC5 Output] Field-Level Invalid Assertions Count: ${validationDetails.invalidFieldsCount}`);
    
    validationDetails.fieldValidations.forEach(field => {
      if (!field.isValid) {
        Logger.info(`  -> Field Associated: [${field.name}] (${field.type}) -> Validation Error: "${field.validationMessage || 'Value is invalid/required'}"`);
      }
    });

    return validationDetails;
  }
}

module.exports = FormValidationPage;
