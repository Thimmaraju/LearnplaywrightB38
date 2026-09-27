import { test, expect } from "@playwright/test"

test.describe("Group 1", () => {


    test("test case 1",{tag: ["@smoke", "@hooksexample"]}, () => {

  
        console.log("Test case 1 ")

        expect(5).toBe(8)

    })


    test("test case 2", () => {

        console.log("Test case 2 ")

    })

    test("test case 3", () => {

        console.log("Test case 3 ")

    })

    test("test case 4", () => {

        console.log("Test case 4 ")

    })

})



test.describe("Group 2", () => {

    test("test case 5", () => {

        console.log("Test case 5 ")

    })


    test("test case 6", () => {

        console.log("Test case 6 ")

    })

    test("test case 7", () => {

        console.log("Test case 7")

    })

    test("test case 8", () => {

        console.log("Test case 8")

    })

})