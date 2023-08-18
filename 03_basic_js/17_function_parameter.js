function hello() {
    console.log("hello")
}

// hello()


// second way of function with parameter

function sum(num1, num2){
    console.log(num1 + num2)
}

// sum(4,5)

//let result = sum(4,5)

// console.log("Result - ", result)  // this is showing the undefine because we are console the value


//console.log("===================================================================================")

// If we will use the return in the function then return below data will not run in the function

function addition(num1, num2){
    // return num1 + num2

    let results = num1 + num2
    return results
}
let results = addition(4,5)

// console.log("Results - ", results) // this is showing the value because we are return the value




// Parameter
// First uses of parameter and mentioned way
function userLogined(username) {
    return `${username} just logined`
}

userLogined("Sushil")  // wrong way to declear the function for this.

let userlog = userLogined("Sushil")

console.log(userlog);


// second user for parameter


function loginUserMessage(userName){  // function loginUserMessage(userName = "Sushil"){ We give the defult value for userName if we will not define the value then this will show
    if(userName === undefined) {  // we can also do this if(!userName) {
        return "Please enter the User Name"
    }else {
        return `${userName} just logined`
    }
}

let userlogedMessage = loginUserMessage()

console.log(userlogedMessage);