import {Page, Locator, expect} from '@playwright/test';

export class BasePage {
    readonly page: Page;
    readonly menubutton: Locator;
    readonly shoppingcartlink: Locator;


    constructor(page: Page){
        this.page = page;
        this.menubutton = page.locator('#react-burger-menu-btn');
        this.shoppingcartlink = page.locator('#shopping_cart_container');
    }

    async Logout() {
        await this.menubutton.click();
        await this.page.locator('#logout_sidebar_link').click();
    }

    async ShoppingCart() {
        await this.shoppingcartlink.click();
    }
}
