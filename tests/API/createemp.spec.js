import { test, expect } from "@playwright/test"
import { faker } from "@faker-js/faker"


test("Verify add employee with API ", async ({ request }) => {

    const URL = "/web/index.php/api/v2/pim/employees"

    const firstname = faker.person.firstName()
    const middelname = faker.person.middleName()
    const  lastname = faker.person.lastName()
    const empid  = faker.string.numeric(5)

    const requestStartTime = Date.now()
    const addemp = await request.post(URL, {

        headers: {

            "cookie": process.env.COOKIEVALUE
        },
        data: { 
            "firstName": "Triambica", 
            "middleName": "", 
            "lastName": "A", 
            "empPicture": null, 
            "employeeId": empid  
        }
    })
    const responseTime = Date.now() - requestStartTime

    
    await expect(addemp.status()).toBe(200)
    expect(responseTime).toBeLessThan(5000)
    console.log(`Response time: ${responseTime} ms`)

    console.log(await addemp.json())

const responseBody = await addemp.json();

//expect(responseBody.data.empNumber).toBe();

expect(responseBody.data.empNumber).toBeDefined();
expect(typeof responseBody.data.empNumber).toBe('number');
expect(responseBody.data.lastName).toBe("A");

expect(responseBody.data.firstName).toBe("Triambica");

//expect(responseBody.data.middleName).toBe(middelname);

expect(responseBody.data.employeeId).toBe(empid);

expect(responseBody.data.terminationId).toBeNull();

expect(responseBody.meta).toEqual([]);

expect(responseBody.rels).toEqual([]);


})

// 6 API request automate 