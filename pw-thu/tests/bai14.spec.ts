import {test, expect} from '@playwright/test';
import {LoginPage} from './pages/login';
import {BasePage} from './pages/basepage';

test('Login_config_url', async({page}) => {

    await page.goto('/');
    const loginPage = new LoginPage(page);
    await loginPage.login('standard_user', 'secret_sauce');
    //expect
    await expect(page).toHaveURL('/inventory.html');
    const basePage = new BasePage(page);
    await basePage.ShoppingCart();
    //expect
    await expect(page).toHaveURL('cart.html');
})

