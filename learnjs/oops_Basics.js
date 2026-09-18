
// class 

// constructor

// Static 

// this 

// class is a Pysical entity similar to function 

// //its a collection different Methods AND Variable

// 


class calculator {


    x = "raju"

    y = "Chethan"

    printName(){

        console.log("Raju")
    }

    constructor(n1, n2) {

        console.log(n1 + n2)
    }

    substract(n1, n2) {

        console.log(n1 - n2)

        this.printName()

        this.Multiply(n1,n2)

        console.log(this.x)
    }

    Multiply(n1, n2) {

        console.log(n1 * n2)
    }

    devide(n1, n2) {

        console.log(n1 / n2)
    }

}

const cal1 = new calculator(3,8)

// cal1.add(3,8)

// cal1.Multiply(4,7)


// cal1.add(5,9)

// console.log(cal1.y)



const cal2 = new calculator(23,45)  // Object or Instance of the class 

// console.log(cal2.y)

// cal2.add(4,8)




// Usage - Reusability 
// Maintanace will easy 
// readbility 

//constructor - its method 
// It will invoked or called automatically 
// U dont need to explicitly call that constructor 

// single constructor 

// if dont define the constructor - there will be empty contructor present by default 




cal3 = new calculator(12,34)

cal4 = new calculator(1,7)

cal4.substract(2,8)



// class classname{

//   // Variables 

//   // Methods 


//   constructor(){

//   }
// //   v1
// //   v2
// //   v3


// // m1{


// this.m2()
// this.m3()
// }
// // m2
// // m3
// // m4

// }


// const obj = new classname()

// obj.m1()

