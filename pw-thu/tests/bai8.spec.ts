import {test, expect} from '@playwright/test';

test('test', async ({ page }) => {
    await page.goto('https://todomvc.com/examples/react/dist/');
    await page.getByPlaceholder('What needs to be done?').click();
    await page.getByRole('textbox', {name: 'New Todo Input'}).fill('Chau anh ne');
    await page.getByRole('textbox', {name: 'New Todo Input'}).press('Enter');



});

