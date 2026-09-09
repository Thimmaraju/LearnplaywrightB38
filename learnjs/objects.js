
// let objectname = {

//     key : value 
// }

let employee = {

    firstname : "Ganesh",
    lastname : "G",
    gender : "Male",
    Place : "Blr",
    parents: { fathername: "Govindapaa", mothername : "Rangamma"}
}


//Properties 

console.log(employee.firstname)

console.log(employee['gender'])

console.log(employee.parents.fathername)

console.log(employee.parents.mothername)


// Update / Modify values 

employee['firstname'] = "Raju"

console.log(employee.firstname)

// role

// Add Properties 

employee['role'] = "QA Lead"

console.log(employee.role)

//delete Properties 

delete employee.Place

console.log(employee.Place)


const jobtitles = {

    title1 : "SDET 1 ",
    title2  : "SDET 2",
    title3 : "Account Executive I",
    title4 : "Account Executive II",
}

// for in

for(let title in jobtitles){

    console.log("Loops strats")

    console.log(jobtitles[title])

    console.log("Loop ends here")
}