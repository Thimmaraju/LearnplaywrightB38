

// IN JAVA 


//  int  x = 10


// string  x = "Raju"

//JavaScript is Dynamically typed Language 

let x = undefined;

//type of 

console.log(typeof(x))

//Primitive Datatypes 

let st1 = "true"

let st2 = `Raju's place is "Bangalore"`

console.log(typeof(st1))

//1. strring 
// ""
// ''
// ``

// page.goto(``)

// page.locator(``)

//2 Number 

let n1 = 10  // int

let n2 = 10.7  // float 

console.log(typeof(n2))

// 3 Boolean 

// true or flase 

let  value1 = true

let  value2 = false

console.log(typeof(value2))

// 4. Undefined 

let st3 = undefined ;   //declaration 

console.log(st3)

console.log(typeof(st3))

// 5 Null 

let z = null  // empty 

console.log(typeof(z))  // object 



//Non Primitive Datatypes 

arr  = ["Raju", true , 30, undefined, "Bangalore"] 


console.log(arr[4])

console.log(typeof(arr[2]))



// Mutable  -  Non Primitive 
// Immutable  - Primitive


// Only Javascript 

let num1 = 10 

  num1 = "Raju"

  num1 = true


  //typescript 
//   let num1 : number = 10 

//      num1 = "Raju"  throw error 

//num1 = 20


const student = {
   
    firstname : "Mamata",
    lastname : "xyz",
    Place : "Bangalore",
    age : 24, 
    currentBatch : true,
    coursename : "PlaYWRIGHT"

}

console.log(student.firstname)


arr = ["Raju"]

arr[0]  //"Raju"
arr = [  {
   
    firstname : "Ganesh",
    lastname : "xyz",
    Place : "Bangalore",
    age : 24, 
    currentBatch : true,
    coursename : "PlaYWRIGHT"

},  {
   
    firstname : "Mamata",
    lastname : "xyz",
    Place : "Bangalore",
    age : 24, 
    currentBatch : true,
    coursename : "PlaYWRIGHT"

},  {
   
    firstname : "Mamata",
    lastname : "xyz",
    Place : "Bangalore",
    age : 24, 
    currentBatch : true,
    coursename : "PlaYWRIGHT"

}]

console.log(arr[0].firstname)

// Mutable 
// Immutable 