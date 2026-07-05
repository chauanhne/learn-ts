import{test, expect} from '@playwright/test';

test('testbai11', async ({page}) => {
    await page.goto('https://todomvc.com/examples/react/dist/');
    //expect
    await expect(page).toHaveURL('https://todomvc.com/examples/react/dist/');
    await page.getByRole('textbox', {name: 'New Todo Input'}).fill('chau anh 2');
    
    
    await page.getByRole('textbox', {name: 'New Todo Input'}).press('Enter');
    //expect
    await expect(page.getByText('chau anh 2')).toBeVisible();
    await page.getByTestId('text-input').fill('chau anh 3');
    await page.getByTestId('text-input').press('Enter');
    //expect
    await expect(page.getByTestId('todo-item-label').filter({hasText: 'chau anh 3'})).toHaveText('chau anh 3');
    
    
    
    await page.getByLabel('New Todo Input').fill('chau anh 4');
    await page.getByLabel('New Todo Input').press('Enter');

    await page.locator("[data-testid='todo-item']")
    .filter({ hasText: 'chau anh 3' }).locator('.toggle').check();
    await page.locator("[data-testid='todo-item']")
    .filter({ hasText: 'chau anh 3' }).locator('.toggle').uncheck();
})