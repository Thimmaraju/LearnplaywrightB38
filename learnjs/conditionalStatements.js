
if (true) {

    console.log("Mamata")
    console.log("Chethan")
}
else {

    console.log("Raju")
    console.log("Ganesh")
}

//=================================================


// condition1 {


// }

// condition2{


// }

// condition3{


// }

// else{



// }

// if(condition1){


// }
// else if(condition2){


// }
// else if(condition3){


// }
// else{


// }

// condition1 ->  marks >= 90 and marks<=100  = A+ 


// condition2 ->  marks >= 75 and marks<90  = A


// condition3 ->  marks >= 60 and marks<75  = B


// condition4 ->  marks >= 35 and marks<60  = C 

//  otherwise         Fail 


const marks = 45

if (marks >= 90 && marks <= 100) {

    console.log("Grade A+")
}
else if (marks >= 75 && marks < 90) {

    console.log("Grade A")
}
else if (marks >= 60 && marks < 75) {

    console.log("Grade B")
}
else if (marks >= 35 && marks < 60) {

    console.log("Grade C")
}
else {

    console.log("Fail")
}

//=============================================

key = "Raju"

switch (key) {
    case "Raju": {

        console.log("============Raju=================")

    }
    break;

    case "Gangadhar": {

        console.log("Gangadhar")

    }
    break;
    case "Rupa": {

        console.log("Rupa")

    }
        break;

    case "mamata": {

        console.log("mamatha")

    }
        break;
    default: {

        console.log("No Key Matched")
    }
        break;
}



