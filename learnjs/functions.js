
// function Names() {

//     console.log("Raju")
//     console.log("Swathi")
//     console.log("xyz")

// }

// //module.exports = { Names }

// // its physical , it will not run 

// Names()



function login(Username, Password) {


    console.log("Launch URL ")
    console.log("fill Username "+ Username)
    console.log("fill Password " + Password)
    console.log("Click on login  ")
}

// login("Admin", "admin123")


// function add(n1, n2){

//     console.log(n1+n2)
// }

// add(2,8)

// add(4,9)

//Function with Params  and without Params 


Logincreds = {


    user1 : {Username: "Admin", Password : "Admin123"},
    user2 : {Username: "Raju", Password : "g"},
    user3 : {Username: "Mamata", Password : "Abc"},
    user4 : {Username: "Rupa", Password : "xyz"},
    user5 : {Username: "Ganesh", Password : "pqr"}
}

// for(let user in Logincreds){


//     login(Logincreds[user].Username, Logincreds[user].Password)

// }


//function with return Keyword 


function add(n1,n2){

    return n1+n2
}

function randomIndianMobileNumber(){

    const firstDigit = Math.floor(Math.random() * 4) + 6
    const remainingDigits = Math.floor(Math.random() * 1000000000)

    return `${firstDigit}${remainingDigits.toString().padStart(9, "0")}`
}

function randomUSMobileNumber(){

    const areaCode = Math.floor(Math.random() * 8) + 2
    const exchangeCode = Math.floor(Math.random() * 8) + 2
    const remainingDigits = Math.floor(Math.random() * 10000).toString().padStart(4, "0")

    return `${areaCode}${Math.floor(Math.random() * 100)}-${exchangeCode}${Math.floor(Math.random() * 100)}-${remainingDigits}`
}


//await page.locator(xpath).fill(randomUSMobileNumber())


console.log(randomIndianMobileNumber())

console.log(randomIndianMobileNumber())






console.log(randomUSMobileNumber())

console.log(randomUSMobileNumber())