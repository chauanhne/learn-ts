# Repo luyện tập Playwright/TypeScript — Cohort QC

Repo nền cho khoá đào tạo (khởi động **22/06/2026**). Mọi member clone repo này, làm bài trên
**branch riêng** và mở **Merge Request**. Lịch học & đề bài: xem bộ tài liệu `RoadmapQC`.

## 1. Bắt đầu (Bài 1)

```bash
git clone <URL-repo-tren-gitlab>
cd cohort-playwright-training
npm install
npx playwright install        # tải browser (~lần đầu)
cp .env.example .env          # điền tài khoản test
npm test                      # chạy test mẫu → phải PASS
```

Nếu `npm test` xanh là môi trường OK. Mở report: `npm run report`.

## 2. Cấu trúc

```
src/
├── pages/
│   ├── BasePage.ts      ← lớp cha dùng chung (đọc hiểu)
│   └── LoginPage.ts     ← VÍ DỤ MẪU để đọc (Bài 12 tham khảo)
├── tests/
│   ├── fixtures.ts      ← inject page object (Bài 13)
│   ├── setup.ts         ← global setup (Bài 16)
│   └── example.spec.ts  ← test mẫu, ĐỪNG sửa — viết file *.spec.ts mới của bạn
└── utils/               ← api-helpers (Bài 19), data-helpers
playwright.config.ts     ← baseURL=SauceDemo, reporter, trace (Bài 14)
.gitlab-ci.yml           ← CI chạy test (Bài 22)
```

App luyện tập: **SauceDemo** (`https://www.saucedemo.com`) và **TodoMVC** (`https://demo.playwright.dev/todomvc`).

## 3. Quy ước nộp bài (Bài 7 trở đi)

```bash
git checkout main && git pull
git checkout -b feature/<ten-cua-ban>-bai12      # 1 branch / 1 bài
# ... làm bài, viết test trong src/tests/<feature>.spec.ts ...
git add . && git commit -m "Bai 12: them LoginPage POM + 2 test"
git push -u origin feature/<ten-cua-ban>-bai12
# → mở Merge Request trên GitLab
```

**Merge Request phải có:**
- [ ] Test chạy **pass** (local trước Bài 22; **CI xanh** từ Bài 22).
- [ ] Tóm tắt ngắn: bài số mấy, làm gì, pass mấy/mấy test.
- [ ] (Checkpoint) link recording demo.

**1 đồng nghiệp review + approve** trước khi merge. Member **không** tự tick dashboard — Lead xác nhận.

> Bài 1–6 (TypeScript thuần) nộp qua **TS Playground/ảnh console** vào kênh chung, chưa cần repo này.

## 4. Quy ước code (tóm tắt)

| Thành phần | Mẫu | Ví dụ |
|---|---|---|
| File page | `<Tên>Page.ts` | `InventoryPage.ts` |
| File test | `<feature>.spec.ts` | `cart.spec.ts` |
| Locator | ưu tiên `getByRole`/`getByLabel`/`getByPlaceholder`, hạn chế xpath | |
| Method | `verb<Target>()` | `clickCheckout()`, `addToCart(name)` |
| Assertion | web-first: `await expect(locator).toBeVisible()` | tránh `waitForTimeout` |

Locator phải gom trong page class (POM), không rải trong file test. Mọi lệnh Playwright dùng `await`.

## 5. Lệnh hay dùng

| Lệnh | Tác dụng |
|---|---|
| `npm test` | Chạy toàn bộ test |
| `npm run test:headed` | Chạy mở trình duyệt |
| `npm run test:debug` | Debug từng bước (Inspector) |
| `npm run report` | Mở HTML report |
| `npm run codegen` | Ghi thao tác → sinh code (Bài 7) |
| `npm run typecheck` | Kiểm lỗi TypeScript |
