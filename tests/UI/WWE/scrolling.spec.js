const { test, expect } = require('@playwright/test');

test('scroll to specific element', async ({ page }) => {

    await page.goto("https://www.flipkart.com/");

     await page.waitForTimeout(10000)

     await page.locator(`//a[@href="/noise-junior-champ-3-in-built-learning-hub-habit-builder-exam-school-mode-kids-smartwatch/p/itm033925786ca39?pid=SMWHFJAX4ETHWQQ7&lid=LSTSMWHFJAX4ETHWQQ7PTEKWX&hl_lid=&marketplace=FLIPKART&fm=eyJ3dHAiOiJwbXVfdjIiLCJwcnB0IjoiaHAiLCJtaWQiOiJjb250aW51dW0vaHAifQ%3D%3D"]`).scrollIntoViewIfNeeded()

  // await page.waitForTimeout(5000)

     //await page.locator("//h4[text()='Network']").click()

    //await page.locator("//h3[text()='The Incredibles']").scrollIntoViewIfNeeded()

    // let dJanagoMovieLink = await page.locator("//h3[contains(text(),'128. Hamilton')]");

    // await dJanagoMovieLink.scrollIntoViewIfNeeded();

    //await page.locator("//h3[text()='176. The Bridge on the River Kwai']").scrollIntoViewIfNeeded()

    // //await dJanagoMovieLink.click();

    // await page.waitForTimeout(4000)

    // await page.locator("//h3[contains(text(),'130. Hamilton')]").click()

    // expect(await page.locator('h1 span').textContent()).toEqual('Hamilton')

});
