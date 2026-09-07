

//Operators 

import { machine } from "node:os"

// 1. Arithematic Operators 

// +, - , * ,/ , % , **


console.log(10+30 )  // addition  // 40

console.log(10-30 )
console.log(10*30 )

console.log(30/10)

console.log(3%2) // 1 


console.log(8%3)  // 2 Remiander of 2 operands 

console.log(2*2*2*2*2*2*2*2)

console.log(2**8)

//Coersion 

//+ will act as concatination also 



console.log("Raju" + "Blr")  /// Join 2 or more strings  - concatonation   //RajuBlr

console.log(10 + "Raju") //  "10" + "Raju"  -> "10Raju"  // this behaviour is called as Coersion 

// + number converted to string 
console.log(30 + "10") // "3010" 

console.log(2+3+4+"5"+3+2+1)  //2345321   // 956 // 155 //95321

//9+"5"  //"95"+ 3   // "953" + 2   // "9532" + 1 // "95321"


// -,*, /, %    string will convert to number 

console.log("30" - 20 )     // 10


console.log(30 - "20" )   // 10 

console.log(30 - "Raju")  //NaN - Not a Number 


console.log(30*"20") // 600



//70 test cases 

vehicle = {

   price : 1600

}

// vehicleprice = vehicle.price 

// Deliverycharge = undefined

// totalpayble = vehicleprice + Deliverycharge   // 1600 + 400 


// totalpayble  = 2000


//Payment (totalpayble)

//Payment(NaN)



console.log(1600+ undefined)  // NaN


// 2. Logical Operators

//AND  &&  

//  x      y         result 
// true   false      false

// false   true       false

// false   false      false

// true    true       true


x = true 

y = true 

console.log(x&&y)

//Element is visible and element enbaled 

// if(await page.locator(xpath).isVisible() &&   await page.locator(xapth).isEnbaled())
// {



// }

// OR   ||

//  x                  y             result 

//  true              false            true
//  false             true             true
//  false             false            false
//  true              true             true


console.log( false || false)

// isVisible()
// isEnabled()
// isChecked()

// if(visible ||  cheked){


// }

//NOT  !


// x        y 

// true    False 
// false    true 

console.log(!false)

// let status = await page.locator(xpath).isChecked()  // false

// if(!flase){


// }


// 3. Comparision Operators

// return true or false 


//  >
//  <
//  >= 
//  <= 


console.log(5<=5)

//  ==   // will compare only values not data type 

// allow the Type conversion 


console.log(2 == 2 ) // true 

console.log(2 == "2")  // true

console.log(2 == "Raju")  // false 

console.log("Raju" == "Raju") // true 

//  === will compare not only values but also data type 

// will not allow type conversion 

console.log(2 === 2 ) // true 

console.log(2 === "2")  // false


// 4. Assignment Operators

//=  , +=, -= , *= , /= 

// x = 5  

// // =  assignmnet operator 

// x+= 5  // x = x+5   // 10 

num1 = 5 

//num1 = num1+ 5  

//num1 +=5
num1 *=5  // num1 = num1*5

console.log(num1)

// 5. Ternary 


// condition -  false  

// 2 values - "Swathi", "Soumya"

// stuname = "Soumya"

x = "Swathi"

y = "Soumya"


//condition ? value1 : value2 

z = false ? x : y 

console.log(z)


// process.env.CI = true  when you are running in CICD (virtual machine) - 1

// process.env.CI = false when you are running in local   2 

//   retries=   process.env.CI ? 1 : 2, 

// conditional statements 

// if 

// if else 

// else if 

// switch 