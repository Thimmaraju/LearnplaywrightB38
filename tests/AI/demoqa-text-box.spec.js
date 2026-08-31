import { test, expect } from '@playwright/test';

test('Verify DemoQA text box form values are displayed after submit', async ({ page }) => {
  const fullName = 'John Murphy';
  const email = 'john.murphy@example.com';
  const currentAddress = '123 Demo Street, Bengaluru, India';
  const permanentAddress = '456 Test Lane, Hyderabad, India';

  await page.goto('https://demoqa.com/text-box');

  await page.locator('#userName').fill(fullName);
  await page.locator('#userEmail').fill(email);
  await page.locator('#currentAddress').fill(currentAddress);
  await page.locator('#permanentAddress').fill(permanentAddress);

  await page.locator('#submit').click();

  await expect(page.locator('#output #name')).toContainText(fullName);
  await expect(page.locator('#output #email')).toContainText(email);
  await expect(page.locator('#output #currentAddress')).toContainText(currentAddress);
  await expect(page.locator('#output #permanentAddress')).toContainText(permanentAddress);
});
