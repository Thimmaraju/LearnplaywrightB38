
// str = "Javascript"

//WAP program to reverse the Sring in jS 

// console.log(str.split(""))
// console.log(str.split("").reverse())

// revstr = str.split("").reverse().join("")

// console.log(revstr)

// WAP to verify a string Palindrome or not 

//str = "madam"  revstr = "madam"

// str = "Raju".toLowerCase()  //revstr = "madaM"


// //madam
// revstr = str.split("").reverse().join("")

// if(str == revstr){

//     console.log("Given string is a palindrome")
// }
// else{

//      console.log("Given string is not a palindrome")

// }


//anagrams 

str1 = "Mary".toLowerCase()

str2 = "Army".toLowerCase()

console.log(str1.split(""))
console.log(str1.split("").sort())

str3 = str1.split("").sort().join("")

console.log(str3)

str4 = str2.split("").sort().join("")

console.log(str4)

if(str3 == str4 ){

    console.log("Given strings are anagrams")

}
else {
 console.log("Given strings are not  anagrams")

}