// arrays


const myArr =  [0,1,2,3,4,5]
const myHeros  = ["shaktiman", "nagraj"]

const myArr2 =  new Array (1,2,3,4)
console.log(myArr[1]); //1

// Array methods 

myArr.push(6)   
console.log(myArr[myArr.length-1]); //6

myArr.pop() // delete last element 6

myArr.unshift(9)
console.log(myArr)   // [9, 0, 1, 2, 3, 4, 5,]

console.log(myArr.includes(9))
console.log(myArr.indexOf(3))

const newArr = myArr.join()  // return as string and join each element with parameter u give or , as default

console.log(myArr)  //[9, 0, 1, 2, 3, 4, 5,]
console.log(newArr) //9,0,1,2,3,4,5


console.log(typeof myArr) // object
console.log(typeof newArr)  // striiiing

// slice -> return the copy of element in range without modifying original array
// splice -> return the copy of element in range modifes original array

console.log("A", myArr)  //A  [9, 0, 1, 2, 3, 4, 5,]

const myn1= myArr.slice(1,3)
 console .log(myn1) //[0, 1]

console.log("B ", myArr)  //B  [9, 0, 1, 2, 3, 4, 5,]

const myn2= myArr.splice(1,3) 
console.log("C", myArr) // c [9,3, 4 ,5]
console.log(myn2)  // [0,1,2]

myArr.shift()
console.log(myArr.shift())