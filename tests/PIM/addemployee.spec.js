
import { test, expect } from '@playwright/test';

import data from "../../testdata/login.json"


const { faker } = require('@faker-js/faker');


test('Verify add Employee with Basic Details', async ({ page }) => {


  await page.goto('/web/index.php/auth/login');
  console.log("Launched application")

  await page.getByRole('textbox', { name: 'Username' }).fill(data.username);
   console.log("Entered username ")
  await page.getByRole('textbox', { name: 'Password' }).fill(data.password);
   console.log("Entered password ")
  await page.getByRole('button', { name: 'Login' }).click();
  console.log("Clicked Login")
  await page.getByRole('link', { name: 'PIM' }).click();
  console.log("Opened PIM module")
  await page.getByRole('link', { name: 'Add Employee' }).click();
  console.log("Navigated to Add Employee page")
  await page.waitForTimeout(6000)

  let firstname = faker.person.firstName()
  await page.getByRole('textbox', { name: 'First Name' }).fill(firstname);
  console.log("Filled First Name:"+ firstname )
  let middlename = faker.person.middleName()
  await page.getByRole('textbox', { name: 'Middle Name' }).fill(middlename);
  console.log("Filled Middle Name: "+ middlename)
  let lastname = faker.person.lastName()
  await page.getByRole('textbox', { name: 'Last Name' }).fill(lastname);
  console.log("Filled Last Name: "+ lastname)
  await page.getByRole('textbox').nth(4).click();
  let empid = faker.string.alphanumeric(5)
  await page.getByRole('textbox').nth(4).fill(empid);
  console.log("Entered employee identifier:" + empid)
  await page.getByRole('button', { name: 'Save' }).click();
  console.log("Clicked Save")
  await expect(page.getByRole('heading', { name: 'Personal Details' })).toBeVisible();
  console.log("Personal Details visible - employee added successfully")

  await page.close()
});



test('Verify launching flipcart', async ({ page }) => {
  console.log("Starting flipcart launch test")
  await page.goto('/');
  console.log("Navigated to / (Flipcart home)")
  
});


