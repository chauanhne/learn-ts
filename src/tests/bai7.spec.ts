import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://demo.playwright.dev/todomvc/#/');
  await page.getByRole('textbox', { name: 'What needs to be done?' }).click();
  await page.getByRole('textbox', { name: 'What needs to be done?' }).fill('chau anh ne');
  await page.getByRole('textbox', { name: 'What needs to be done?' }).press('Enter');
  await page.getByRole('textbox', { name: 'What needs to be done?' }).fill('to do 1');
  await page.getByRole('textbox', { name: 'What needs to be done?' }).press('Enter');
  await page.getByRole('textbox', { name: 'What needs to be done?' }).fill('to do 2');
  await page.getByRole('textbox', { name: 'What needs to be done?' }).press('Enter');
  await page.getByRole('listitem').filter({ hasText: 'to do 1' }).getByLabel('Toggle Todo').check();


   // Kiểm tra có 2 todo trong danh sách
   await expect(page.getByTestId('todo-item')).toHaveCount(3);

    // Kiểm tra "to do 1" đã được đánh dấu hoàn thành
    await expect(page.getByRole('listitem').filter({ hasText: 'to do 1' })).toHaveClass(/completed/);

});