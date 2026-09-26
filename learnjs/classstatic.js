

class student {

    static stuname = "Ganesh"  // Static Variable 

    stuplace = "Pune" // Non Static variable 

    m1() {

        console.log("This is M1 method") // Non static method
        this.m3() 

        student.m2()
    }

    static m2() {

        console.log("This is M2 method") // Static method 

        this.m4()
    }

    m3() {

        console.log("This is M3 method")
    }

    static m4() {

        console.log("This is M4 method")
    }


}



// In the above case all varibales and all methods are non static 


 const stu1 = new student()

 stu1.m1()

// stu1.m2()

 student.m2()

// //student.m4()
 
// console.log(student.stuname)  // Ganesh