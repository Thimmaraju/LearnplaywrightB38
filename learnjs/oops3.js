//Polymorphism 

// Method Overrding 
// Method Overloading 

class A {

    PrintName() {

        console.log("This is Parent class related Method - Raju")
    }

    add(n1, n2) {

        console.log(n1)
        console.log(n2)

        console.log(n1 + n2)
    }


}


class B extends A {


    PrintName() {

        console.log("This is child class related Method - Koushal")
    }

    add(n1, n2, n3) {

        console.log(n1)
        console.log(n2)
        console.log(n3)

        console.log(n1 + n2 + n3)
    }


}

// const obj = new B()

// obj.PrintName()  //Method Overrding 

// obj.add(2,7)  // Method Overriding 

const obj2 = new A()

obj2.PrintName()

obj2.add(3,8,7)  //Method OverLoading 