import {test, expect} from "@playwright/test"

import { loginpage } from "../pages/loginpage.po"
import { dashboardPage } from "../pages/dashboardpage.po"
import { addEmployeePage } from "../pages/addemployee.po"

import employeedata from "../testdata/addemployee-login-data.json"

test("Verify Admin can add employee", async ({page}) => {

    const login = new loginpage(page)
    const dashboard = new dashboardPage(page)
    const addemp = new addEmployeePage(page)

    await login.LaunchApp()
    await login.loginwithCreds(process.env.APP_USERNAME, process.env.APP_PASSWORD)
    await login.loginSuccess()
    await dashboard.navigatetoPIM()
    await addemp.navigatetoAddEmployeePage()
    await addemp.addemployeewithBasicDetails(employeedata.firstName, employeedata.lastName)
    await addemp.employeeCreationSuccess()

})