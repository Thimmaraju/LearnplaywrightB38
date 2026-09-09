

import { test, expect } from '@playwright/test';


test('fill the form', async ({ page }) => {

    await page.goto('https://register.rediff.com/register/register.php?FormName=user_details')



    const checkboxstatus = await page.locator('//input[@type="checkbox"]').isChecked()  //false

    console.log(checkboxstatus)

    if (!checkboxstatus) {

        await page.locator('//input[@type="checkbox"]').check()
    }


})


test("Working with Dynamic Elements - some times visible ", async ({ page }) => {

    await page.goto("https://the-internet.herokuapp.com/disappearing_elements")

    if (await page.locator('//a[@href="/gallery/"]').isVisible()) {

        await page.locator('//a[@href="/gallery/"]').click()

    }
    else {

        await page.locator('//a[@href="/portfolio/"]').click()

    }

})


test("Launch App Based on Browser", async ({ page, browserName }) => {

    switch (browserName) {
        case "chromium": {

            await page.goto("https://www.flipkart.com/")
        }
            break;
        case "firefox": {

            await page.goto("https://www.amazon.in/")
        }
            break;
        case "webkit": {

            await page.goto("https://www.myntra.com/")
        }
            break;

    }

})


test("Launch App Based on Browser =2 ", async ({ page, browserName }) => {

    if (browserName == "chromium") {

        await page.goto("https://www.flipkart.com/")
    }

    else if (browserName == "firefox") {

        await page.goto("https://www.amazon.in/")
    }

    else if (browserName == "webkit") {

        await page.goto("https://www.myntra.com/")
    }

})

