import { de } from '@faker-js/faker';
import { test, expect } from '@playwright/test';
import personDetails from '../testdata/smaple.js';

test('fill the form', async ({ page }) => {
  
  let details = ["Raju g ", "Rajutester2673@gmail.com", "Bangalore", "Hyderabad"]
  await page.goto('https://demoqa.com/text-box');
  await page.getByRole('textbox', { name: 'Full Name' }).fill(details[0]);
  await page.getByRole('textbox', { name: 'name@example.com' }).fill(details[1]);
  await page.getByRole('textbox', { name: 'Current Address' }).fill(details[2]);
  await page.locator('#permanentAddress').fill(details[3]);
  await page.getByRole('button', { name: 'Submit' }).click();
});




test('fill the form - .env ', async ({ page }) => {


  await page.goto('https://demoqa.com/text-box');
  await page.getByRole('textbox', { name: 'Full Name' }).fill(personDetails.fullname);
  await page.getByRole('textbox', { name: 'name@example.com' }).fill(personDetails.emailid);
  await page.getByRole('textbox', { name: 'Current Address' }).fill(personDetails.currentAddress);
  await page.locator('#permanentAddress').fill(personDetails.permanentAdd);
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



test('fill the form - CLI', async ({ page }) => {
  await page.goto('https://demoqa.com/text-box');

  let fullname = (Math.random() + 1).toString(36).substring(7);
  await page.getByRole('textbox', { name: 'Full Name' }).fill("ehbfruybg4");
  await page.getByRole('textbox', { name: 'name@example.com' }).fill('rajutester2673@gmail.com');
  await page.getByRole('textbox', { name: 'Current Address' }).fill('Bangalore');
  await page.locator(`#permanentAddress`).fill('Bangalore');
  await page.getByRole('button', { name: 'Submit' }).click();
});