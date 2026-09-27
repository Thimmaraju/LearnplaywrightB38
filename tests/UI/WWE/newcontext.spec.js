const {  test, expect } = require('@playwright/test');

test.describe('Automation - Working With Elements', () => {

  test("browse context test", async ({browser}) => {

    
    const context1 = await browser.newContext(); // Browser instance1 

    const page1 = await context1.newPage(); //IN  the  Browser instance1  it open a new page


    const context2 = await browser.newContext();// Browser instance 2 
 
    const page2 = await context2.newPage(); // In the Browser instance 2 it openn a new page 


      const context3 = await browser.newContext();// Browser instance 3 
 
    const page3 = await context2.newPage(); // In the Browser instance 3 it openn a new page

    await page1.goto('https://opensource-demo.orangehrmlive.com/');
    await page1.locator('input[name="username"]').fill("Admin")
    await page1.locator("input[type='password']").fill("admin123")
    await page1.locator("input[type='password']").press("Enter")

    await expect(page1).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
    await page1.locator('span').filter({ hasText: 'PIM' }).click();
    await page1.locator("//a[text()='Add Employee']").click()
    await page1.getByPlaceholder('First Name').fill(`Rupa`);
    await page1.getByPlaceholder('Last Name').fill(`H`);
    await page1.locator('//input[@class="oxd-input oxd-input--active"]').last().fill(`9fd66fe`);
    await page1.locator('//input[@type="checkbox"]').dispatchEvent('click');
    await page1.locator("//label[text()='Username']/../following-sibling::div/input").fill("rupahg")
    await page1.locator("//label[text()='Password']/../following-sibling::div/input").fill("Pass@1234")
    await page1.locator("//label[text()='Confirm Password']/../following-sibling::div/input").fill("Pass@1234")

    await page1.locator('button[type="submit"]').click();


    await page2.goto('https://opensource-demo.orangehrmlive.com/');
    await page2.locator('input[name="username"]').fill("rupahg")
    await page2.locator("input[type='password']").fill("Pass@1234")
    await page2.locator("input[type='password']").press("Enter")

    await expect(page2).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')


    // await page1.locator('//input[@name="middleName"]').fill("xyz")
    // await page1.locator('//button[@type="submit"]').click()

    // await page2.locator("//span[text()='My Info']").click()

    // await expect(page2.locator('//input[@name="middleName"]')).toHaveText("xyz")

   
   

    // //  await page1.waitForTimeout(10000)
     
    // // //await browser.close();
  });

})