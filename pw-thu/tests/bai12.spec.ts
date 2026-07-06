import {test, expect, Locator, Page} from '@playwright/test';
import { LoginPage } from './pages/login';
import { BasePage } from './pages/basepage';

test.beforeEach(async({page}) => {
    await page.goto('https://www.saucedemo.com/');
})

test('Login_true', async({page}) => {
    const loginPage = new LoginPage(page);
    await loginPage.login('standard_user', 'secret_sauce');
    //expect
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
   

})

test('Login_false_password', async({page}) => {
    const loginPage = new LoginPage(page);
    await loginPage.login('standard_user', 'secret_sauce1');
    //expect
    await expect(page.getByText('Epic sadface: Username and password do not match any user in this service')).toBeVisible();
})


test('Logout', async({page}) => {
    const loginPage = new LoginPage(page);
    await loginPage.login('standard_user', 'secret_sauce');
    const basePage = new BasePage(page);
    await basePage.Logout();
    //expect
    await expect(page).toHaveURL('https://www.saucedemo.com/');
})

