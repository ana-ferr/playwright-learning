import { test, expect } from "@playwright/test"
import CartPage from "../pages/cart.page";
import path from 'path';
import UploadComponent from "../pages/component/upload.comp";


test.describe('Upload file', () => {
   let cartPage: CartPage;
    test('Upload file', async ({ page }) => {
      cartPage = new CartPage(page);
           
      // open url
      await page.goto('https://practice.sdetunicorns.com/');
      await page.getByRole('link', { name: '0', exact: true }).click();
      
      // store test file path
      const filePath = path.join(__dirname, '../data/hello_sir.png');
      console.log(filePath);

      // upload test file
      await page.waitForTimeout(2000)
      cartPage.uploadComponent().uploadFile(filePath);


      // assertion
      await page.waitForTimeout(2000);
      await expect(cartPage.uploadComponent().successText).toContainText('uploaded successfully');
   })


   test('Upload file for a hidden input', async ({ page }) => {
           
      // open url
      await page.goto('https://practice.sdetunicorns.com/');
      await page.getByRole('link', { name: '0', exact: true }).click();
      
      // store test file path
      const filePath = path.join(__dirname, '../data/hello_sir.png');
      console.log(filePath);

       // DOM manipulation
       await page.waitForTimeout(5000);
      await page.evaluate(() => {
         const selector = document.querySelector('input#upfile_1');
         if (selector) {
            selector.className = ''
         }
      })

      // upload test file and submit
      cartPage.uploadComponent().uploadFile(filePath);

      // assertion
      await page.waitForTimeout(2000);
      await expect(cartPage.uploadComponent().successText).toContainText('uploaded successfully');
   })
})

