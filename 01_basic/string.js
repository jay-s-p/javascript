const name = "hitesh"
const repoCount =50;

console.log(name + repoCount + "Value") //hitesh50Value

console.log(`Hello my name is ${name} and my repocount is ${repoCount}`)  //Hello my name is hitesh and my repocount is 50
//this recommended way of printing

const gameName = new String('hitesh-hc-com')

console.log(gameName[0])    //h
console.log(gameName.length)    //13
console.log(gameName.charAt(2))   // t
console.log(gameName.indexOf('t')) //2

const newString = gameName.substring(0,4)
console.log(newString)   //hite

const anotherString = gameName.slice(-8,4)
console.log(anotherString);  //

const newStringOne = "  hitesh  "
console.log(newStringOne);  //  "  hitesh  "
console.log(newStringOne.trim());  //hitesh

const url= "https://hitesh.com/hitesh%20choudhary"
console.log(url.replace('%20' , '-'));  //https://hitesh.com/hitesh-choudhary
console.log(url.includes('sundar'))  //false
console.log(gameName.split('-'));  //[ 'hitesh', 'hc', 'com' ]




