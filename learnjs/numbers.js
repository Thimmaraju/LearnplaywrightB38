
num1 = 10  //Integer  - number 

num1 = 23.34  //float  - number 

//any number > 2^53  is Big Integer 

n1 = 64675675686786789798791n
n2 = 3n

//n1+n2  - 64675675686786789798794

console.log(n1+n2)

console.log(2**53)

//9007199254740992 > 

n5 = 9878687876875865675n
num5 = String(67)  // "67"

console.log(typeof(num5))


str = Number("56")


str = "67.45"  // ParseInt  // ParseFloat 

console.log(Number.isInteger(10)); 

console.log(5+undefined)  // NaN

console.log(isNaN(5+undefined))  // true 

console.log(isNaN(4+6))  // false 

//Math - to Work with Numbers 


console.log(Math.PI)

console.log(Math.E)

arr = [12,34,67,42,12,9,3,65,87,4]

maxnumber = Math.max(...arr)

console.log(maxnumber)


minnumber = Math.min(...arr)

console.log(minnumber)

//spead Operator 

console.log(Math.trunc(12.7))  // 12

console.log(Math.floor(26.9))

console.log(Math.ceil(12.1))  // 13

console.log(Math.ceil(12.9))

console.log(Math.random())

console.log(Math.round(4.4));


console.log(Math.pow(2,53))

console.log(Math.sqrt(81))

// Date 

///Today 

//Momemt()

const moment = require('moment');

// const currentDate = moment().format('DD/MMM/YYYY');

// console.log(currentDate);

const date = moment().add(3, 'days').format('DD-MM-YYYY');

console.log(date)

//fill(date)


// const currentDate = moment().format('YYYY-DD-MM');

// await page.locator().fill(currentDate)

//const todate = currentDate.add(3, 'days').format('DD-MM-YYYY');

//// await page.locator().fill(todate)

.click()

