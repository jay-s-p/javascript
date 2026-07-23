const score=400
console.log(score) //400

const balance = new Number(100)
console.log(balance); //100

console.log(balance.toString().length); //3
console.log(balance.toFixed(1))   // to give decimal //100.0


const otherNumber =123.369
console.log(otherNumber.toPrecision(2));  //1.2e+2
console.log(otherNumber.toPrecision(4));  //123.3


// +++++++++++++ Maths +++++++++++++++++++++++++++++

console.log(Math);  // type of object
console.log(Math.abs(-4)); //4
console.log(Math.round(4.6));  //5
console.log(Math.ceil(4.2));  //5
console.log(Math.floor(4.9));   //4
console.log(Math.min(4, 3, 6, 8));   //3
console.log(Math.max(4, 3, 6, 8));   //8

console.log(Math.random());   //0.8130530025505316 random 0 to 1 
console.log((Math.random()*10) + 1);  //10.892226947020173
console.log(Math.floor(Math.random()*10) + 1);  // integral random 1 to 10

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)  // random number between 10 and 20