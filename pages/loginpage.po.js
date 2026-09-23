import { expect } from "@playwright/test"

export class loginpage{


     constructor(page){

         this.page = page 
         this.usernameInput = page.locator('//input[@name="username"]')
         this.passwordInput = page.locator('input[name="password"]')
         this.loginBtn = page.getByRole('button', { name: 'Login' })
         this.loginErrorMessage = page.locator('//p[text()="Invalid credentials"]')

     }

     async LaunchApp(){

       await  this.page.goto('/web/index.php/auth/login')
     }

     async loginwithCreds(username, password){

       await  this.usernameInput.fill(username)
       await  this.passwordInput.fill(password)
       await  this.loginBtn.click()
     }

     async loginSuccess(){

        await expect(this.page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
     }

     async loginFialure(){

        await expect(this.loginErrorMessage).toBeVisible()
     }
}



