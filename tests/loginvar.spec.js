import { test, expect } from '@playwright/test';



test('Login with valid Credntials', async ({ page }) => {

    await page.goto('/web/index.php/auth/login');
    let usernametext = await page.locator('(//p[@class="oxd-text oxd-text--p"])[1]').textContent()
    console.log(usernametext)
    let Username = usernametext.split(" ")[2]  // Admin
    console.log(Username)
    let passwordtext = await page.locator('(//p[@class="oxd-text oxd-text--p"])[2]').textContent()
    console.log(passwordtext)
    let Password = passwordtext.split(" ")[2] // admin123
    console.log(Password)
    await page.getByRole('textbox', { name: 'Username' }).fill(Username);
    await page.getByRole('textbox', { name: 'Password' }).fill(Password);
    await page.getByRole('button', { name: 'Login' }).click();
    await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible({ timeout: 40000 });
    await expect(page.getByText('Time at Work')).toBeVisible();
});