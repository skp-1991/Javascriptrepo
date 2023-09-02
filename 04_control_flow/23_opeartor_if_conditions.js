// if

// const isUserLoggedIn = true

// if(isUserLoggedIn){
//     console.log("this is true");
// }else{
//     console.log("This is false")
// }


// We use some earthmatic opeartor for condition
// < , > , >= , <= , == , != , ===

// if (2 < 3){
//     console.log("Less Than")
// }

// if (3 > 2){
//     console.log("Greater Than")
// }

// if (3 >= 3){
//     console.log("Greater Than equal too")
// }

// if (3 <= 3){
//     console.log("Less Than equal too")
// }

// if(3 != 2){
//     console.log("Not Equal too")
// }

// this only check the value not data type
// if (3 == "3"){
//     console.log("double equal too")
// }

// this check value and data type both - this call strickt equal
// if (3 === 3){
// if (3 === "3"){
//     console.log("tripal equal too")
// }else{
//     console.log("not")
// }


const temprature = 50

// if(temprature <= 50){
//     console.log("Temprature less then 50");
// }else{
//     console.log("Temprature greater then 50")
// }


const balance = 400
// implicet scope in one line
// if(balance > 500) console.log("Blance less then 500"), console.log("Test2");

// if(balance < 400) console.log("Balance less then 400")
// else if(balance < 600) console.log("Balance less then 600")
// else if(balance < 800) console.log("Balance less then 800")
// else if(balance < 1000) console.log("Balance less then 1000")
// else console.log("Balance less then 1200")




//  && , || 


const userLoggedIn = true
const creditCard = true

if(userLoggedIn && creditCard && 2==2) {
    console.log("User buy course")
}

const userLoggedInGoogle = true
const userLoggedInEmail = true

if(userLoggedInGoogle || userLoggedInEmail) {
    console.log("user login by google or email");
}


// Nullish Coalescing Operator (??) :: We will watch in the only null and undefine

let val1
val1 = 5 ?? 10
val1 = null ?? 20
val1 = undefined ?? 30
val1 = null ?? undefined ?? 40 ?? 50

console.log(val1);


// Terniary Operator

const iceCream = 10

iceCream <= 8 ? console.log("Less then 8"):console.log("more then 8");;