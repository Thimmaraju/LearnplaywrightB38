import { test, expect } from '@playwright/test';


const jobtitles = {

    title1 : "SDET 1 ",
    title2  : "SDET 2",
    title3 : "Account Executive I",
    title4 : "Account Executive II",
}

for(let title in jobtitles){

   test(`Verify admin can add job title - ${jobtitles[title]}`, async ({page}) =>{


    await page.goto('/web/index.php/auth/login')


    await page.locator(`//input[@placeholder='Username']`).fill(process.env.APP_USERNAME)

    await page.locator("//input[@type='password']").fill(process.env.APP_PASSWORD)

    await page.locator("//button[@type='submit']").click()

    // assertions - expect 

    await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')

    await expect(page.locator("//p[text()='Time at Work']")).toBeVisible()

    await page.getByRole('link', { name: 'Admin' }).click()


    await page.getByText('Job', { exact: true }).click()

    await page.getByRole('menuitem', { name: 'Job Titles' }).click()

    await page.getByRole('button', { name: 'Add' }).click()

    await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/admin/saveJobTitle')


    await page.locator("//div[@class='oxd-input-group oxd-input-field-bottom-space']//div//input[@class='oxd-input oxd-input--active']").fill(jobtitles[title])
    
    await page.getByRole('textbox', { name: 'Type description here' }).fill("jobtitledata.jobDescription")

    await page.getByRole('textbox', { name: 'Add note' }).fill("jobtitledata.notes")
    await page.getByRole('button', { name: 'Save' }).click()

    await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewJobTitleList')

})

}

