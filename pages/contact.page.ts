import { Locator, Page } from '@playwright/test';

class ContactPage {
  page: Page;
  contactBtn: Locator;
  contactName: Locator;
  contactEmail: Locator;
  contactPhone: Locator;
  contactMessage: Locator;
  contactSubmitBtn: Locator;


    constructor(page: Page) {
      this.page = page;
      this.contactBtn = page.locator('#menu-item-493 > a');
      this.contactName = page.locator('#evf-277-field_ys0GeZISRs-1');
      this.contactEmail = page.locator('#evf-277-field_LbH5NxasXM-2');
      this.contactPhone = page.locator('#evf-277-field_66FR384cge-3');
      this.contactMessage = page.locator('#evf-277-field_yhGx3FOwr2-4');
      this.contactSubmitBtn = page.locator('#evf-submit-277');

    }
}

export default ContactPage;