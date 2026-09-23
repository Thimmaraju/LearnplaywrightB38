import {test, expect} from "@playwright/test"

import { loginpage } from "../pages/loginpage.po"

import { dashboardPage } from "../pages/dashboardpage.po"

import { buzzpage } from "../pages/buzzpage.po"

import { faker } from "@faker-js/faker"

test("Create a post ", async ({page}) =>{

    const login = new loginpage(page)

    const dashboard = new dashboardPage(page)

    const buzz = new buzzpage(page)

    await login.LaunchApp()
    await login.loginwithCreds(process.env.APP_USERNAME, process.env.APP_PASSWORD)
    await login.loginSuccess()
    await dashboard.navigateToBuzz()
    const message = "Sharing a positive update with the team and celebrating our progress together."
    await buzz.postAMessage(message)
})
