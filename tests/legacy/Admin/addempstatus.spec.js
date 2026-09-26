
import { test, expect } from '@playwright/test';

test("Verify admin can add employment status", async  ({page}) =>{

    test.slow()

    await page.goto("/web/index.php/auth/login")

    await page.locator("Raju").fill("Admin")

    

})