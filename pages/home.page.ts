import {Page, Locator } from '@playwright/test';

class HomePage {
    page: Page;
    getStartedBtn: Locator;
    learnMoreTextBtn: Locator;
    homeText: Locator;
    searchBtn: Locator;
    navLinks: Locator;
    blogTopButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.getStartedBtn = page.locator('#get-started');
        this.learnMoreTextBtn = page.locator('text=Learn more');
        this.homeText = page.locator('#menu-item-489:has-Text("Home")');
        this.searchBtn =  page.locator('(//*[@class="zak-icon zakra-icon--magnifying-glass"])[1]');
        this.navLinks = page.locator('#zak-primary-menu li[id*=menu]');
        this.blogTopButton = page.locator('#zak-primary-menu li[id*=menu]').nth(3);
        
    }

    async navigate() {
        await this.page.goto('/');
    }

    async getNavLinksText() {
        return this.navLinks.allTextContents();
    }
}

export default HomePage;