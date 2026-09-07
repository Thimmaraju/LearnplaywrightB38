

import { test, expect } from '@playwright/test';


test('fill the form', async ({ page }) => {

await page.goto('https://register.rediff.com/register/register.php?FormName=user_details')



const  checkboxstatus = await page.locator('//input[@type="checkbox"]').isChecked()  //false

console.log(checkboxstatus)

if(!checkboxstatus){

    await page.locator('//input[@type="checkbox"]').check()
}


})