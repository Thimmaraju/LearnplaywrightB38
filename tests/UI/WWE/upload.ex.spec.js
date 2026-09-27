import { test, expect } from '@playwright/test';

test.beforeEach(async ({page}) =>{

  await page.goto('/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).fill(process.env.APP_USERNAME);
  await page.getByRole('textbox', { name: 'Password' }).fill(process.env.APP_PASSWORD);
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: 'PIM' }).click();
  await page.getByRole('link', { name: 'Add Employee' }).click();

})

test('verify add employee with basic details', async ( {page }) => {

  await page.getByRole('textbox', { name: 'First Name' }).fill('lakshmikanth');
  await page.getByRole('textbox', { name: 'Last Name' }).fill('D');

  // single file upload 
  await page.locator('//input[@type="file"]').setInputFiles('testdata/files/playwright.png')

  await page.getByRole('button', { name: 'Save' }).click();
  await expect(page.getByRole('heading', { name: 'Personal Details' })).toBeVisible({timeout : 30000});
});

test('verify add employee with basic details - invalid input', async ( {page }) => {

  await page.getByRole('textbox', { name: 'First Name' }).fill('lakshmikanth');
  await page.getByRole('textbox', { name: 'Last Name' }).fill('D');
  await page.locator('//input[@type="file"]').setInputFiles('testdata/files/21. Test cases.xlsx')

  await expect(page.locator("//span[text()='File type not allowed']")).toBeVisible()
//   await page.getByRole('button', { name: 'Save' }).click();

//   await expect(page.getByRole('heading', { name: 'Personal Details' })).toBeVisible({timeout : 30000});
});

