
// Encapsulation 

class employee {

    empname 
    empplace
    empid 
 

    printempDetails(){

        console.log(this.empname, this.empplace, this.empid)
    }

       
    setemployeeDetails(name, place , id ){

        this.empname = name
        this.empplace= place
        this.empid = id
    }

}

const emp1 = new employee()

emp1.setemployeeDetails("Koushal", "Tumkur", "23456")
emp1.printempDetails()



