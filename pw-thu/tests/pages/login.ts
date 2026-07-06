import {Page, Locator} from '@playwright/test';
import { BasePage } from './basepage';

export class LoginPage {
readonly page: Page;
readonly username: Locator;
readonly password: Locator;
readonly loginButton: Locator;

constructor(page: Page) {
    this.page =page;
    this.username = page.locator('#user-name');
    this.password = page.locator('#password');
    this.loginButton = page.locator('#login-button');
}
//Hành động
async login(username: string, password: string) {
    //await this.page.goto('https://www.saucedemo.com/');
    await this.username.fill(username);
    await this.password.fill(password);
    await this.loginButton.click();
}

async logout(){
    const basePage = new BasePage(this.page);
    await basePage.Logout();
}
}