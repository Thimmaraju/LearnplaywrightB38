const { test, expect } = require('@playwright/test');

test('How to work with New Tab / new window', async ({ page }) => {

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");


    const [newTab] = await Promise.all([

        page.waitForEvent("popup"),

        page.click('//a[@href="https://www.youtube.com/c/OrangeHRMInc"]')
    ])

    await expect(newTab).toHaveURL('https://www.youtube.com/c/OrangeHRMInc')

    //await newTab.locator('sunscribe').click()

    await page.locator('//a[@href="https://www.linkedin.com/company/orangehrm/mycompany/"]').click()

})