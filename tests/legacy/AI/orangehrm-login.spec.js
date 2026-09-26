import { test, expect } from '@playwright/test';

test('OrangeHRM login redirects to dashboard', async ({ page }) => {
  await page.goto('/web/index.php/auth/login');

  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();

  await expect(page).toHaveURL(/\/dashboard\/index$/);
  await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();
});
