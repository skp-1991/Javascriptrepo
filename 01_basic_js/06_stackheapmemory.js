// stack and heap meory

// Premitive datatype use Stack memory and this memory create a copy of the every value of variable 

let useId = "1991sushilpandey@gmail.com"
console.log(useId)
let useIdOne = useId
console.log(useIdOne)
useIdOne = "sushil@gmail.com"

console.log(useId)    // This variable not changed his value 
console.log(useIdOne)  // This variable changed value






// Non premitive data type use heap memory and this memory give refrence of the value and variable and if change the value then this will change everywhere.

// Array example
let userId = ["sushil","kumar","pandey"]

let userIdOne = userId

userIdOne[0] = "rahul"


console.log(userId)
console.log(userIdOne)

console.log("===================================")

// object example

let emp = {
    empName : "Sushil",
    empPhone : 9999999999,
    empLogin : true,
    empFun : function(){console.log("hi")}
}

let employee = emp

employee.empName = "Rahul"

console.log(emp)
console.log(employee)
