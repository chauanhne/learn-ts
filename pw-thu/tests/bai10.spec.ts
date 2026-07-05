import {test, expect} from '@playwright/test';

test('test', async ({page}) => {
    await page.goto('https://todomvc.com/examples/react/dist/');
    await page.getByRole('textbox', { name: 'New Todo Input'}).fill('chau anh 1');
    await page.getByRole('textbox', {name: 'New Todo Input'}).press('Enter');
    await page.getByRole('textbox', {name: 'New Todo Input'}).fill('chau anh 2');
    await page.getByRole('textbox', {name: 'New Todo Input'}).press('Enter');
    await page.getByTestId('text-input').fill('chau anh 3');
    await page.getByTestId('text-input').press('Enter');
    await page.getByLabel('New Todo Input').fill('chau anh 4');
    await page.getByLabel('New Todo Input').press('Enter');

    await page.locator("[data-testid='todo-item']")
    .filter({ hasText: 'chau anh 3' }).locator('.toggle').check();
    //await page.waitForTimeout(2000);
    await page.locator("[data-testid='todo-item']")
    .filter({ hasText: 'chau anh 3' }).locator('.toggle').uncheck();

})