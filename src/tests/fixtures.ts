import { test as base } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

/**
 * Custom fixtures — mở rộng test gốc của Playwright để inject sẵn Page Object.
 * Bài 13 bạn sẽ thêm fixture của riêng mình tại đây.
 */
type CustomFixtures = {
  loginPage: LoginPage;
  // Ví dụ thêm sau: authenticatedPage, apiHelper, ...
};

export const test = base.extend<CustomFixtures>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
});

export { expect } from '@playwright/test';
