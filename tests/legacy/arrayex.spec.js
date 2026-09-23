import { test, expect } from '@playwright/test';


test('Verify produts count', async ({ page }) => {


await page.goto("https://rahulshettyacademy.com/seleniumPractise/#/")


 const produtnames = await page.locator('//h4[@class="product-name"]').allTextContents()

// console.log(produtnames)

// console.log(produtnames[0])

// await expect(produtnames.length).toBe(30)

if(produtnames.includes("Brokoli")){

    // scripts 
}

await expect(page.locator('//h4[@class="product-name"]')).toHaveCount(30)


})