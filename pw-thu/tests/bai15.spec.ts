import {test, expect} from '@playwright/test';
import {LoginPage} from './pages/login';
import {HomePage} from './pages/homepage';
import {BasePage} from './pages/basepage';

test.beforeEach(async({page}) => {
    await page.goto('/');
    const loginpage = new LoginPage(page);
    await loginpage.login ('standard_user', 'secret_sauce');
})

test('addtocart', async({page}) => {
    const homepage = new HomePage(page);
    await homepage.addtocart();
    //expect
    await expect(page.locator('.shopping_cart_badge')).toHaveText('6');
    
    const basepage = new BasePage(page);
    await basepage.ShoppingCart();
    //expect
    await expect(page.locator('.cart_item_label')).toHaveCount(6);

})

test('removecart', async({page}) => {
    const homepage = new HomePage(page);
    await homepage.addtocart();
    await homepage.removecart();
    //expect
    await expect(page.locator('.shopping_cart_badge')).not.toBeVisible();
    const basepage = new BasePage(page);
    await basepage.ShoppingCart();
    //expect
    await expect(page.locator('.cart_item_label')).toHaveCount(0);

})
