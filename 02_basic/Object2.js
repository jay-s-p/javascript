// const tinderUser =new Object()

const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "jayy"
tinderUser.isLoggedIn = false

console.log(tinderUser)  //{ id: '123abc', name: 'jayy', isLoggedIn: false }

const regularUser = {
    email : "jay@.com",
    fullname : {
        userfullname : {
            firstname : "jay",
            lastname : "patel"
        }
    }
}

console.log(regularUser) 
/*{
  email: 'jay@.com',
  fullname: { userfullname: { firstname: 'jay', lastname: 'patel' } }
}*/

console.log(regularUser.fullname.userfullname.firstname) //jay

const obj1 = {1 : "a", 2: "b"}
const obj2 = {3 : "a", 4: "b"}
const obj4 = {5 : "a", 6: "b"}

// const obj3 = {obj1, obj2}
// console.log(obj3) //{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }

// const obj3 = Object.assign({}, obj1 , obj2, obj4)
// console.log(obj3) //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }

const obj3 = {...obj1, ...obj2}
console.log(obj3)  //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

const users = [
    {
        id: 1,
        email: "j@gmail.com"
    },
    {
        id: 1,
        email: "j@gmail.com"
    },
    {
        id: 1,
        email: "j@gmail.com"
    },
]

users[1].email
console.log(tinderUser);  //{ id: '123abc', name: 'jayy', isLoggedIn: false }

console.log(Object.keys(tinderUser));  //[ 'id', 'name', 'isLoggedIn' ]
console.log(Object.values(tinderUser));  //[ '123abc', 'jayy', false ]
console.log(Object.entries(tinderUser));  //[ [ 'id', '123abc' ], [ 'name', 'jayy' ], [ 'isLoggedIn', false ] ]

console.log(tinderUser.hasOwnProperty('isLoggedIn')); // true

const course = {
    coursename : "jay studied by js",
    price:  "99",
    courseInstructor : "jay"
}

// course.courseInstructor

const {courseInstructor : instructor } = course

// console.log(courseInstructor)
console.log(instructor) // jay

{
    "name" : "jay",
    "coursename" : "js in hindi", //json file api response format
    "price" : "free"
}

[
    {},
    {},
    {}
]