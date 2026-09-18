

class A {

    m1() {

        console.log("This is M1 method")
    }
    m2() {

        console.log("This is M2 method")
    }
    m3() {

        console.log("This is M3 method")
    }
    m4() {

        console.log("This is M4 method")
    }


}


class B extends A {


    m5() {

        console.log("This is M5 method")
    }
    m6() {

        console.log("This is M6 method")
    }

    m7() {

        console.log("This is M7 method")
    }


}


class C extends B {


    m8() {

        console.log("This is M8 method")
    }


}

const obj = new C()

obj.m5()

obj.m1()

obj.m8()