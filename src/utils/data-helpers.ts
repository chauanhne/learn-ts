/**
 * Data helpers — parser/format dữ liệu test (vi-VN, ISO date, so sánh sai số).
 */

/** Parse số định dạng vi-VN: "1.234,56" → 1234.56 */
export function parseViVNNumber(str: string): number {
  return parseFloat(str.replace(/\./g, '').replace(',', '.'));
}

/** Format số sang vi-VN: 1234.56 → "1.234,56" */
export function formatViVNNumber(num: number, decimals = 0): string {
  return num.toLocaleString('vi-VN', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });
}

/** So sánh float có dung sai (dùng cho assertion phần trăm/tiền tệ). */
export function approxEqual(actual: number, expected: number, tolerance = 0.01): boolean {
  return Math.abs(actual - expected) <= tolerance;
}
