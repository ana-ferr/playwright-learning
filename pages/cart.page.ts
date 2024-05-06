import {Page, Locator } from '@playwright/test';
import UploadComponent from './component/upload.comp';

class CartPage {
    private page: Page;


    constructor(page: Page) {
      this.page = page;
    }

    uploadComponent(){
      return new UploadComponent(this.page);
    }
}

export default CartPage;