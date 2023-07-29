// premitive data type // this use stack memory for work
/*
7 categories
String
Number
Boolearn
Null
Undefined
Symbol
BigInt
*/


// String

const stValue = "Text"
console.log(typeof stValue)

// Number
const nuValue = 45
console.log(typeof nuValue)
console.log("===========================")
// Boolearn
const boValue = true
console.log(typeof boValue)
console.log("===========================")
// Null

const nulValue = null
console.log(typeof nulValue)
console.log("===========================")
// Undefined

let undValue
console.log(typeof unValue)
console.log("===========================")
// Symbol
let syValue = Symbol(123)
let syValueOne = Symbol(123)

console.log(syValue === syValueOne)
console.log("===========================")
// BigInt
// If we will add the "n" in the last of the number then this will be convert in to the BigInt

const bigValue = 9999999999999999999999999999999999999n

console.log(typeof bigValue)


// Reference Type (Non premitive data type)  // This use heap memory

/*
Array
object
function
*/
console.log("===========================")
//Array
let arrValue = ["sushil","pandey","kumar"]
console.log(typeof arrValue);

console.log("===========================")
//Object
let objValue = {
    employeeName : "Sushil",
    employeeId : 230,
    employeeSallary : 25000,
    employeeLogin : false,
    employeeCounter : function(){
        console.log(objValue.employeeId)
    }
}
console.log(typeof objValue)
console.log(objValue.employeeCounter());
console.log(typeof objValue.employeeCounter);
console.log(typeof objValue.employeeId);
console.log(typeof objValue.employeeName);
console.log(typeof objValue.employeeLogin);


console.log("===========================")
//function


let funValue = function (){ }
function funValueOne(){ }
funValueOne();   // this is for call the function

console.log(typeof funValue)