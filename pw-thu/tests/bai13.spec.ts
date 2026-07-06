import {test, expect, Page, Locator} from '@playwright/test';
import { LoginPage } from './pages/login';
import { BasePage } from './pages/basepage';

test.beforeEach(async({page}) => {
    await page.goto('https://www.saucedemo.com/');
    const loginPage = new LoginPage(page);
    await loginPage.login('standard_user', 'secret_sauce');
    //expect
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
})

test('trangchu', async({page}) => {
    await expect(page.locator('.inventory_item')).toHaveCount(6);
})

test('logout', async({page}) => {
    const logoutPage = new BasePage(page);
    await logoutPage.Logout();
    //expect
    await expect(page).toHaveURL('https://www.saucedemo.com/');
})