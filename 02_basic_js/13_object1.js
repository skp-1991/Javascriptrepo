// singleton object
const objValueOne = new Object()


// Object.create

// object literals

const mySym = Symbol("key1")  // define symbol value

const objValue = {
    name : "Sushil",
    "full name" : "Sushil Kumar",
    [mySym] : "This is an symbol",  // define symbol value
    Age : 31,
    designation : "Website Designer",
    email : "sushil@sushil.com",
    isLogined : false,
    lastLogin : ["Monday","Tuesday","Wensday","Thusday"],
    greetings : function(){
        console.log(`Hello Boss, I am ${this.name} and my age is ${this.age}`)
    }
}

console.log(objValue.name)
console.log(objValue["name"])
console.log(objValue["full name"])
console.log(objValue[mySym])  // for define the symbol value

// Object.freeze(objValue)  // By the freeze We can not change the value of the object

objValue.age = 60

objValue.life = function(){
    console.log(`My designation is ${this.designation} and emil id is ${this.email}`);
}

console.log(objValue.greetings())
console.log(objValue.life())

