// primitive
// call by value -> value is copied and used and changes happen to that
// 7 types -> : String, number, Boolean , null , undefined, Symbol, Bigint

const score =100
const scoreValue =10.3


const id= Symbol('123')
const anotherId = Symbol('123')

console.log(id=== anotherId) // false

// Reference (Non Primitive)
// address is copied
// 3 types Arrays , Objects, Functions


const heros = ["shaktiman", "nagrajj", "doga"];

let myObj = {
    name: "jay",
    age :22,

}

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof anotherId)  //symbol
console.log(typeof undefined)   //undefined
console.log(typeof scoreValue) //number
console.log(typeof heros)  // object
console.log(typeof myObj) //object
console.log(typeof myFunction)  // function -> object function


// https://262.ecma-international.org/5.1/#sec-11.4.3



// Stack (primitive) , heap (Non Primitive)

let name="jay"
let newName=name
newName = "ram" // no change in original name variable

console.log(name)   //jay
console.log(newName)   //ram

let userOne = {
    email : "jay.com",
    upi : "user@ybl"
}

let userTwo = userOne
userTwo.email= "user.com"  // also changes the value of email in user one

console.log(userOne.email)  //user.com
console.log(userTwo.email)   //user.com