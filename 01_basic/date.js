let myDate = new Date();

// console.log(myDate)  //2026-07-23T03:04:27.786Z
// console.log(myDate.toString());  //Thu Jul 23 2026 03:04:27 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toDateString());  //Thu Jul 23 2026
// console.log(myDate.toLocaleString());  //7/23/2026, 3:04:27 AM
// console.log(typeof myDate);  //object

// let myCreatedDate = new Date(2023, 0, 23)  //months start 0 based 0-> january
// console.log(myCreatedDate);   // 2023-01-23T00:00:00.000Z
// console.log(myCreatedDate.toLocaleString());  // 1/23/2023, 12:00:00 AM

// let myCreatedDate = new Date(2023, 0, 23, 5, 3)  // yyyy mm dd hh min
// console.log(myCreatedDate); //2023-01-23T05:03:00.000Z
// console.log(myCreatedDate.toLocaleString());  // 1/23/2023, 5:03:00 AM


// let myCreatedDate = new Date("2023-01-14")
// console.log(myCreatedDate.toLocaleString());  //1/14/2023, 12:00:00 AM


let myCreatedDate = new Date("01-14-2023")
console.log(myCreatedDate.toLocaleString());  //1/14/2023, 12:00:00 AM

let myTimeStamp = Date.now() 

console.log(myTimeStamp);  //1784776357250 in milisecond form 1970s
console.log(myCreatedDate.getTime());   //1673654400000
console.log(Math.floor(Date.now()/1000));  //1784776357  cureent date in second

let newDate = new Date()
console.log(newDate);  //2026-07-23T03:14:26.994Z
console.log(newDate.getMonth() + 1);  //7 -> july
console.log(newDate.getDay());  //4 -> thursday

// `${newDate.getDay()} and the time `

console.log(newDate.toLocaleString('default', {
    weekday: "long",  //thursday
    
})) //customizing date