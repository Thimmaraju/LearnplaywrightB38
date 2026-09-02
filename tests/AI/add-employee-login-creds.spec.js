import { test, expect } from '@playwright/test';

test('Add employee with login credentials', async ({ page }) => {
  const firstName = 'Akhil';
  const lastName = 'User';
  const employeeId = 'A1B2C3';
  const username = 'Akhil' + Date.now().toString().slice(-5);
  const password = 'Abc@1234';

  await page.goto('/web/index.php/auth/login');
  await expect(page).toHaveURL(/\/auth\/login$/);

  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();

  await expect(page).toHaveURL(/\/dashboard\/index$/);
  await page.getByRole('link', { name: 'PIM' }).click();
  await page.getByRole('link', { name: 'Add Employee' }).click();

  await expect(page).toHaveURL(/\/pim\/addEmployee$/);
  await page.getByRole('textbox', { name: 'First Name' }).fill(firstName);
  await page.getByRole('textbox', { name: 'Last Name' }).fill(lastName);

  const empIdInput = page.locator('input[name="employeeId"], input[placeholder="Employee Id"], input[aria-label="Employee Id"]');
  await empIdInput.fill('');
  await empIdInput.fill(employeeId);

  await page.locator('input[type="checkbox"]').first().check({ force: true });

  await page.locator('input[name="username"]').fill(username);
  await page.locator('input[name="password"]').fill(password);
  await page.locator('input[name="confirmPassword"]').fill(password);

  await page.getByRole('button', { name: 'Save' }).click();

  await expect(page).toHaveURL(/\/pim\/viewPersonalDetails\/empNumber\//);
  await expect(page.getByRole('heading', { name: `${firstName} ${lastName}` })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Personal Details' })).toBeVisible();
});
