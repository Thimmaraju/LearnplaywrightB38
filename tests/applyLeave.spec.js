import { test, expect } from '@playwright/test';
const moment = require('moment');

test("Verify admin can add job title ", async ({page}) =>{


    await page.goto('/web/index.php/auth/login')

   // await page.getByRole('textbox', { name: 'Username' }).fill("Admin")

    await page.locator(`//input[@placeholder='Username']`).fill(process.env.APP_USERNAME)

    await page.locator("//input[@type='password']").fill(process.env.APP_PASSWORD)

    await page.locator("//button[@type='submit']").click()

    await page.getByRole('link', { name: 'Leave' }).click()

    await page.locator("//a[text()='Apply']").click()

    const currentDate = moment().format('YYYY-DD-MM');

     console.log(currentDate);


    await page.locator(`(//div[@class="oxd-date-input"])[1]/input`).fill(currentDate)



})