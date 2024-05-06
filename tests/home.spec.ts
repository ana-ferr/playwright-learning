import { test, expect } from "@playwright/test"
import HomePage from '../pages/home.page';
//test.setTimeout(60000);

test.describe('Home', () => {
    let homePage: HomePage;
    test('Open Homepage and verify title', async ({ page }) => {
        homePage = new HomePage(page);

        //open url
        //await page.goto('https://practice.sdetunicorns.com/');
        await homePage.navigate();

        //verify title
        await expect(page).toHaveTitle('Practice E-Commerce Site – SDET Unicorns – Helping you succeed in Software Quality.');

        //click on Get started
        //await page.locator('#get-started').click();
        await homePage.getStartedBtn.click();

        await expect(page).toHaveURL('https://practice.sdetunicorns.com/#get-started');
    })

    test('Getting started', async ({ page }) => {
        homePage = new HomePage(page);
        //open url
        await homePage.navigate();

        //click the button
        //const learnMoreText = page.locator('text=Learn more');

        await expect(homePage.learnMoreTextBtn).toBeVisible();

        await homePage.learnMoreTextBtn.click();

        //verify if URL works
        await expect(page).toHaveURL('https://sdetunicorns.com/');
    })

    test('Open About and verify title', async ({ page }) => {
        homePage = new HomePage(page);
        //open url
        await homePage.navigate();

        //verify title
        await expect(page).toHaveTitle('About – Practice E-Commerce Site');
    })

    test('Verify home text', async ({ page }) => {
     homePage = new HomePage(page);

     await homePage.navigate();
        
        // Find element with class and text
        //const homeText = await page.locator('#menu-item-489 >> text=Home')
        //const homeText = page.locator('#menu-item-489:has-Text("Home")'
        const homeText = await homePage.homeText;

        await expect(homeText).toBeEnabled();
    })


    test('Verify search via xpath', async ({ page }) => {
    homePage = new HomePage(page);
    await homePage.navigate();

        //find the search icon
        const searchIcon = await homePage.searchBtn;

        //search icon is visible
        await expect(searchIcon).toBeVisible();
    })

    test('Verify text from all navy links', async ({ page }) => {
    homePage = new HomePage(page);
    const expectedLinks = [
        "Home",
        "About",
        "Shop",
        "Blog",
        "Contact",
        "My account",
    ];

    await homePage.navigate();

    //Verify text links
    expect(await homePage.getNavLinksText()).toEqual(expectedLinks);
    })


    test('Verify text from ONE item of the list', async ({ page }) => {
        const navLinksSingleElement = [
            "Home",
            "About",
            "Shops",
            "Blog",
            "Contact",
            "My account",
        ];
    
        await homePage.navigate();
    
        //Find 'Blog (index 3) element from the list
        const blog = await homePage.blogTopButton;
    
            //Verify text links
            expect(await blog.textContent()).toEqual(navLinksSingleElement[3]);
        })
    test('Loop though all elements and print it', async ({ page }) => {
        
        await homePage.navigate();
        
        //Find all emelents from the list
        const navLinks2 = page.locator('#zak-primary-menu li[id*=menu]');
        
        //Loop trhough all and print all the elements
        for (const el of await navLinks2.elementHandles()) {
            console.log(await el.textContent());
        }

    })

})

