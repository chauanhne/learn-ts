import {test, expect} from '@playwright/test';

test('testbai9', async ({ page }) => {
  await page.goto('https://todomvc.com/examples/react/dist/');
  await page.getByTestId('text-input').click();
  await page.getByTestId('text-input').fill('chau anh ne');
  await page.getByTestId('text-input').press('Enter');
  await page.getByTestId('text-input').fill('chau anh 1');
  await page.getByTestId('text-input').press('Enter');
  await page.getByTestId('text-input').fill('chau anh 2');
  await page.getByTestId('text-input').press('Enter');

  const dem = page.getByTestId("todo-item-label");

  console.log(await dem.count());
 
  const todoItem = page.locator(".view").filter({ hasText: '1'});
  await todoItem.hover();
  await page.getByRole('button', { name: 'Delete todo' })
  .click();



});


/*test('tongdaiwifi', async ({page}) => {
    await page.goto('https://staging.tongdaiwifi.vn/');
    
});


test('test2', async ({ page }) => {
  await page.goto('https://staging.tongdaiwifi.vn/');
  await page.locator('a[href="/internet/goi-giga"]').last().click();
  await page.getByRole('button', { name: 'Đăng ký ngay' }).first().click({ force: true });

});*/