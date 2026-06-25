import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

/**
 * ✅ TEST MẪU — chạy được ngay sau khi clone (để CI xanh & xác nhận môi trường OK).
 * Đăng nhập SauceDemo với tài khoản chuẩn rồi kiểm tra vào được trang sản phẩm.
 * Bạn KHÔNG sửa file này — viết test của mình trong các file *.spec.ts mới.
 */
test.describe('SMOKE — môi trường & SauceDemo login', () => {
  test('Đăng nhập standard_user → thấy trang Products', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.open();
    await loginPage.login(
      process.env.SAUCE_USER || 'standard_user',
      process.env.SAUCE_PASS || 'secret_sauce',
    );
    await expect(page).toHaveURL(/inventory/);
    await expect(page.getByText('Products')).toBeVisible();
  });
});
