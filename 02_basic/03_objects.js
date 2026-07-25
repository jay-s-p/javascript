// singlton
// Object.create

// object literals

const mySym = Symbol("key1")

const JsUser = {
    name : "jay",
    "full name" : "Jay Singh",
    [mySym] : "mykey1",
    age : 18,
    location : "Jaipur",
    email : "jaymd@gmail.com",
    isLoggedIn  : false,
    lastLoginDays : ["monday", "Saturday"]
}

console.log(JsUser.email)  //jaymd@gmail.com
console.log(JsUser["email"])  //jaymd@gmail.com
console.log(JsUser["full name"]) //Jay Singh
console.log(JsUser[mySym])  //mykey1

JsUser.email = "jaysin@chatgpt.com" // 

// Object.freeze(JsUser) // after freezing u cant update object

JsUser.email = "ram@gmail.com";
console.log(JsUser)  // not updated
/*{
  name: 'jay',
  'full name': 'Jay Singh',
  age: 18,
  location: 'Jaipur',
  email: 'jaysin@chatgpt.com',
  isLoggedIn: false,
  lastLoginDays: [ 'monday', 'Saturday' ],
  Symbol(key1): 'mykey1'
}*/

JsUser.greeting = function(){
    console.log("hello Js User");
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting()); //hello Js User
                                //undefined


console.log(JsUser.greetingTwo());//Hello JS user, jay
                                    //undefined


