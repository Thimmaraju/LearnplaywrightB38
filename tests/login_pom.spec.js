import {test,expect} from "@playwright/test"

import { loginpage } from "../pages/loginpage.po"

import data from "../testdata/login.json"

test.beforeEach(async ({page}) =>{
    const login = new loginpage(page)

    await login.LaunchApp()

})

test("Login with Valid Credentils", async ({page}) =>{


    await login.loginwithCreds(process.env.APP_USERNAME, process.env.APP_PASSWORD)
    await login.loginSuccess()
})

test("Login with Valid Username and Invalid password ", async ({page}) =>{


    await login.loginwithCreds(process.env.APP_USERNAME, data.wrongpassword)
    await login.loginFialure()
})