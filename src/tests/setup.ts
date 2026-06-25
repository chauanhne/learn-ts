import { FullConfig } from '@playwright/test';

/**
 * Global setup — chạy 1 lần trước toàn bộ test.
 * Dùng cho: kiểm tra env, dựng dữ liệu, lưu storageState (Bài 16)...
 */
async function globalSetup(_config: FullConfig) {
  const recommended = ['BASE_URL', 'SAUCE_USER', 'SAUCE_PASS'];
  for (const env of recommended) {
    if (!process.env[env]) {
      console.warn(`⚠️  Thiếu biến môi trường: ${env} — một số test có thể cần (xem .env.example).`);
    }
  }
}

export default globalSetup;
