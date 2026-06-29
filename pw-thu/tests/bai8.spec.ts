import {test, expect} from '@playwright/test';

test('test', async ({ page }) => {
    await page.goto('https://todomvc.com/examples/react/dist/');
    await page.getByPlaceholder('What needs to be done?').click();
    await page.getByRole('textbox', {name: 'New Todo Input'}).fill('Chau anh ne');
    await page.getByRole('textbox', {name: 'New Todo Input'}).press('Enter');



});

test('tongdaiwifi', async ({page}) => {
    await page.goto('https://staging.tongdaiwifi.vn/');
    
});


test('test2', async ({ page }) => {
  await page.goto('https://staging.tongdaiwifi.vn/');
  await page.locator('a[href="/internet/goi-giga"]').last().click();
  await page.getByRole('button', { name: 'Đăng ký ngay' }).first().click({ force: true });

});