import { test, expect } from '@playwright/test';



test('Verify Header text', async ({ page }) => {

    await page.goto('https://register.rediff.com/register/register.php?FormName=user_details')

    await expect(page.locator('//div[@class="cnt"]/h2')).toHaveText('Create a Rediffmail acccount')


})