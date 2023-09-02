const emailId = [] //"sushil@sushil.com"

if(emailId){
    console.log("Got the email id");
}else{
    console.log("Do not get the email id");
}


// truthy value

// "0" - string 0 is true
// 'false' - string ture value
// " " - space is ture value
// []- blank array is true
// {}- blank object is true
// function(){} - true funtion


// falsy value

// false
// 0, -0
// in BigInt - 0n is false Value
// null
// undefined
// NaN

const userName = []

if(userName.length === 0) {
    console.log("Blank array");
}

const userData = {}
// this code (Object.keys(userData)) will convert object in array then we will use length
if(Object.keys(userData).length === 0) {
    console.log("Blank Object");
}