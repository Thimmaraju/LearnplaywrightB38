
// // const arr = [] //empty array

// //arrayname = [element1, element2 ....]  // Syntax 

// // const arr2  = ["Raju",5,6,7,3]   // Array with Elements 

// //Index   - always starts with 0 

// // console.log(arr2[8])


// // arr3 = [2,"raju", 4, 7, true , null, undefined]


// //   const employeeDetails = ["Mamata", "abc", "xyz", "ureyg38"]

// // console.log(employeeDetails[0])

// // console.log(employeeDetails[1])

// // console.log(employeeDetails[3])

// // console.log(employeeDetails.length)

// arr1 = [1,2,3,4]
// arr2 = [5,6,"raju",8]

// arr3 = arr1.concat(arr2)

// console.log(arr3)

// // concat - clubbing arrays 

// arr4 = ["Raju", "Rupa", "mamata", "swathi", "Mounika"].reverse()

// console.log(arr4)

// // reverse - reverse the elements in  the array 

// arr5 = ["Raju", "Rupa", "mamata", "swathi", "Mounika"].join("")

// console.log(arr5)

// // Join - converts array to string 

// // split() - converts string to array 

// str = "This is Javascript class"

// arr6 = str.split(" ")

// console.log(arr6)

// // push  - will add elements at end 
// //pop  - will remove last element 
// // unshift  - will add eleemnts at beginning 
// //shift  - will remove first element

// // arr7 =["sleep", "eat", "read"]

// // arr7.push("Jump")

// // arr7.push("exersize", "drink")

// // console.log(arr7)

// // arr8 =["sleep", "eat", "read"]

// // arr8.unshift("jump")

// // arr8.unshift("exersize", "drink")

// //  console.log(arr8)

// arr9 = [ 'exersize', 'drink', 'jump', 'sleep', 'eat', 'read' ]

// // arr9.pop()
// // arr9.pop()
// // arr9.pop()

// arr9.shift()

// arr9.shift()


// console.log(arr9)

// //========================================================

// arr1 = [2,4,5,6,7,8,9]

// arr2 = [3,54,612,87,23,4]

// arr3 = [...arr1, ...arr2 ]

// console.log(arr3)

// // is it possible to add elements in the middle of the array 

// //splice()


// // Object.values()
// // Object.entries()
// // Object.keys()
// // Object.assign()
// // Object.freeze()
// // Object.seal()

// //Includes - it will the check the elements is present or not  
// // return true or flase 



// arr = ['exersize', 'drink', 'jump', 'sleep', 'eat', 'read' ]

// console.log(arr.includes("drink") )  // true

// console.log(arr.includes("raju") )  // false 


// adding , Insert, remove , replace 

//splice(index, howmanyelements_should_be_removed, elements_to_be_added )
let arr = [10, 20, 30, 40, 50];

arr.splice(1, 3, "Raju", "Tarun");

console.log(arr);
// [10, 40]


arr2 = ['exersize', 'drink', 'jump', 'sleep', 'eat', 'read' ]

// arr2.splice(1, 1, "Raju")

// console.log(arr2)

arr2[1] = "Raju"

console.log(arr2)

//slice (index, position)

arr3 = arr2.slice(0,3)

console.log(arr3)



arr4 = [1,2,3,4,5,6,7,8]

arr5 = arr4.map(element => element+"Raju")

console.log(arr5)


arr6 = arr4.filter(element=> element%2 !== 0)

console.log(arr6)


arr8 = ['exersize', 'drink', 'jump', 'sleep', 'eat', 'read' ]

arr9 = arr8.filter(element => element.includes("p"))

console.log(arr9)