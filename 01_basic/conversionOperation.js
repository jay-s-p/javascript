let score =33

console.log(typeof score) //Number
console.log(typeof (score)) //number

score ="33asd"

let valueInNumber = Number(score);

console.log(typeof valueInNumber) // Number
console.log(valueInNumber) //NaN -> not a number is a number 

let isLoggedIn =1
let booleanLoggedIn = Boolean(isLoggedIn)
console.log(booleanLoggedIn)  //true

// 1 => true; 0 => false
// '' => false
// "jay" => true

let someNumber =33
let stringNumber = String(someNumber)

console.log(stringNumber) //33
console.log(typeof stringNumber)  //string
