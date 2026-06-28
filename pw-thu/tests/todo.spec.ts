import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://todomvc.com/examples/react/dist/');
  await page.getByTestId('text-input').click();
  await page.getByTestId('text-input').fill('chau anh ne');
  await page.getByTestId('text-input').click();
  await page.getByTestId('text-input').fill('to do 1');
  await page.getByTestId('text-input').press('Enter');
  await page.getByTestId('text-input').fill('to do 2');
  await page.getByTestId('text-input').press('Enter');
  await page.getByRole('listitem').filter({ hasText: 'to do 1' }).getByTestId('todo-item-toggle').check();
 
 
  // Kiểm tra có 2 todo trong danh sách
await expect(page.getByTestId('todo-item')).toHaveCount(2);

    // Kiểm tra "to do 1" đã được đánh dấu hoàn thành
  await expect(page.getByRole('listitem').filter({ hasText: 'to do 1' })).toHaveClass(/completed/);


});