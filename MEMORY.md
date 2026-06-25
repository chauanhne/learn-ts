# MEMORY — cohort-playwright-training (source code)

> File trí nhớ của source code (chuẩn §1–§19 của qc-claude-v1). Khi vào Phase 3, chạy `/scan-source`
> để skill tự cập nhật đầy đủ. Phần §2 dưới đây để skill downstream (`implement`, `execute`...) nhận đúng stack.

## 1. Project Structure
Repo luyện tập Playwright TypeScript cho cohort QC. Page Object Model:
`src/pages/` (BasePage + page classes) · `src/tests/` (fixtures, setup, *.spec.ts) · `src/utils/`.
Config: `playwright.config.ts` (baseURL=SauceDemo). CI: `.gitlab-ci.yml`.

## 2. Tech Stack

| Component     | Value           | Version |
|---------------|-----------------|---------|
| Language      | TypeScript      | 5.x     |
| Framework     | Playwright      | 1.x     |
| Test Runner   | Playwright Test | 1.x     |
| Build Tool    | npm             | 10.x    |
| Package Mgr   | npm             | —       |
| Locator API   | page.locator()  | —       |
| Async pattern | async/await     | —       |

## 3–19
Sẽ được `scan-source-code` điền khi bắt đầu Phase 3 (đối tượng test, locator inventory, env, run log...).
