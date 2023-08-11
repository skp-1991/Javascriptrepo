const obValue = Object()
// console.log(obValue)

const obValueOne = {}

obValueOne.id = "1212adfadf"
obValueOne.name = "Sushil Kumar"
obValueOne.age = 31
obValueOne.isLogined = true
obValueOne.lastLogin = ["Monday","Tuesday","Wensday"]

// console.log(obValueOne)


const regularEmployee = {
    emailId : "sushil@sushil.com",
    fullName : {
        userFullName : {
            firstName : "Sushil",
            lastName : "Kumar"
        }
    }
}
// if we do not know that fullName exist or not. then we can use question mark in last of fullName(fullName?)
// console.log(regularEmployee.fullName.userFullName.firstName)

const obj1 = {1 : "a", 2 : "b"}
const obj2 = {3 : "c", 4 : "d"}

const obj4 = {obj1,obj2}

//console.log(obj4)

const ob1 = Object.assign({}, obj1,obj2)

console.log(ob1)