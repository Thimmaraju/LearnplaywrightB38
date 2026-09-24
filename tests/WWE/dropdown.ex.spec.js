
import { test, expect } from '@playwright/test';


test('Dropdown and radio and check ',{tag: "@smoke"}, async ({ page }) => {

   await page.goto('https://register.rediff.com/register/register.php?FormName=user_details')

  // await page.locator('select[name^="DOB_Month"]').selectOption({index : 4})

  // await page.locator('select[name^="DOB_Month"]').selectOption("10")

   await page.locator('select[name^="DOB_Month"]').selectOption("AUG")

//    await page.locator('input[value="f"]').check()

//    //checkbox 

//    await page.locator('input[type="checkbox"]').check()

//    await page.waitForTimeout(5000)

//    await page.locator('input[type="checkbox"]').uncheck()

})


test(' check box 2  ',{tag: "@smoke"}, async ({ page }) => {

   await page.goto('https://rahulshettyacademy.com/AutomationPractice/')

    const checkboxes = ['#checkBoxOption1', '#checkBoxOption2','#checkBoxOption3']

    for(let checkbox of checkboxes){

        await page.locator(checkbox).check()
    }

})

test(' check box 3 ',{tag: "@smoke"}, async ({ page }) => {

   await page.goto('https://rahulshettyacademy.com/AutomationPractice/')

   const checkboxes = await page.$$('//input[@type="checkbox"]')

    for(let checkbox of checkboxes){

        await checkbox.check()
    }

})


test(' add to cart all  ',{tag: "@smoke"}, async ({ page }) => {

   await page.goto('https://rahulshettyacademy.com/seleniumPractise/#/')

   const addtocartbuttons = await page.$$("//button[text()='ADD TO CART']")

    for(let raju of addtocartbuttons){

        await raju.click()
    }

})


