import { test, expect } from "@playwright/test"
import ContactPage from "../pages/contact.page";
import { faker } from '@faker-js/faker';

test.describe('My first exercise contact form', () => {
    let contactPage: ContactPage;
    test('Open contact page', async ({ page }) => {
        contactPage = new ContactPage(page);
        //Open URL
        await page.goto('/');

        await contactPage.contactBtn.click();
        page.pause();


        await expect(contactPage.contactName).toBeVisible();

        await page.waitForTimeout(20000);

        await contactPage.contactBtn.fill('Hello darkness');

        await contactPage.contactName.fill('hello@gmail.com');
        
        await contactPage.contactPhone.fill('0196863');
        
        await contactPage.contactMessage.fill('Hello darkness');

        await contactPage.contactSubmitBtn.click();

        await page.waitForTimeout(2000);

        // Verify success message
        const successAlert = page.locator('div[role="alert"]');
        await expect(successAlert).toHaveText('Thanks for contacting us! We will be in touch with you shortly') 

    })
    
})

test.describe('Second exercise blog', () => {
    test('Verify recent posts count and length of each list item', async ({ page }) => {
        //Go to URL and click on blog menu
        await page.goto('/');
        await page.locator('#menu-item-490 > a').click();

        // Get recent post list elements
        const recentPostList = page.locator('#recent-posts-3 ul li');

        // Loop though 
        for (const el of await recentPostList.elementHandles()) {
            expect((await el.textContent())?.length).toBeGreaterThan(10)
        }

        // Assert total lenght = 5
        expect(await recentPostList.count()).toEqual(5);
    })
    
})
