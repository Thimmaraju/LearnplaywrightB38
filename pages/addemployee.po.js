import { expect } from "@playwright/test"

export class addEmployeePage{

     constructor(page){

        this.page = page 
        this.addEmploeyeeSubmenu = page.locator('//a[text()="Add Employee"]')
        this.firstnameInput = page.locator('input[name="firstName"]')
        this.lastnameInput = page.locator('input[name="lastName"]')
        this.SaveButton = page.locator('//button[@type="submit"]')
        this.personaldetailHeader = page.locator("//h6[text()='Personal Details']")
     }

     async navigatetoAddEmployeePage(){

        await this.addEmploeyeeSubmenu.click()
     }

     async addemployeewithBasicDetails(firstName, lastName){

        await this.firstnameInput.fill(firstName)
        await this.lastnameInput.fill(lastName)
        await this.SaveButton.click()
     }

     async employeeCreationSuccess(){

        await expect(this.personaldetailHeader).toBeVisible()
     }

}