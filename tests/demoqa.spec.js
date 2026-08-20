import { test, expect } from '@playwright/test';

test('fill the form', async ({ page }) => {
  await page.goto('https://demoqa.com/text-box');
  await page.getByRole('textbox', { name: 'Full Name' }).fill('Raju G');
  await page.getByRole('textbox', { name: 'name@example.com' }).fill('rajutester2673@gmail.com');
  await page.getByRole('textbox', { name: 'Current Address' }).fill('Bangalore');
  await page.locator('#permanentAddress').fill('Bangalore');
  await page.getByRole('button', { name: 'Submit' }).click();
});


test('fill the form - JSon ', async ({ page }) => {
  await page.goto('https://demoqa.com/text-box');
  await page.getByRole('textbox', { name: 'Full Name' }).fill();
  await page.getByRole('textbox', { name: 'name@example.com' }).fill();
  await page.getByRole('textbox', { name: 'Current Address' }).fill();
  await page.locator('#permanentAddress').fill();
  await page.getByRole('button', { name: 'Submit' }).click();
});



test('fill the form - .env ', async ({ page }) => {
  await page.goto('https://demoqa.com/text-box');
  await page.getByRole('textbox', { name: 'Full Name' }).fill('Raju G');
  await page.getByRole('textbox', { name: 'name@example.com' }).fill('rajutester2673@gmail.com');
  await page.getByRole('textbox', { name: 'Current Address' }).fill('Bangalore');
  await page.locator('#permanentAddress').fill('Bangalore');
  await page.getByRole('button', { name: 'Submit' }).click();
});

test('fill the form - fakerjs  ', async ({ page }) => {
  await page.goto('https://demoqa.com/text-box');
  await page.getByRole('textbox', { name: 'Full Name' }).fill('Raju G');
  await page.getByRole('textbox', { name: 'name@example.com' }).fill('rajutester2673@gmail.com');
  await page.getByRole('textbox', { name: 'Current Address' }).fill('Bangalore');
  await page.locator('#permanentAddress').fill('Bangalore');
  await page.getByRole('button', { name: 'Submit' }).click();
});

test('fill the form - JS  ', async ({ page }) => {
  await page.goto('https://demoqa.com/text-box');

  let fullname = (Math.random() + 1).toString(36).substring(7);
  await page.getByRole('textbox', { name: 'Full Name' }).fill();
  await page.getByRole('textbox', { name: 'name@example.com' }).fill('rajutester2673@gmail.com');
  await page.getByRole('textbox', { name: 'Current Address' }).fill('Bangalore');
  await page.locator('#permanentAddress').fill('Bangalore');
  await page.getByRole('button', { name: 'Submit' }).click();
});

test('fill the form - CLI', async ({ page }) => {
  await page.goto('https://demoqa.com/text-box');

  let fullname = (Math.random() + 1).toString(36).substring(7);
  await page.getByRole('textbox', { name: 'Full Name' }).fill();
  await page.getByRole('textbox', { name: 'name@example.com' }).fill('rajutester2673@gmail.com');
  await page.getByRole('textbox', { name: 'Current Address' }).fill('Bangalore');
  await page.locator('#permanentAddress').fill('Bangalore');
  await page.getByRole('button', { name: 'Submit' }).click();
});