// scope

function oneF(){
    const userName = "Sushil"
    function twoF(){
        const website = "www.sushil.com"
        console.log("User Name is ", userName ,"My website is ", website)
    }
    // child function can use parent variables and but parent function can not use child function variable 

    twoF()
    console.log("User Name is ", userName)
}
oneF()





// hosting

// In this we can call the function above the function.

console.log(oneFun(5))
function oneFun (num){
    return num + 1
}

// If we are using this type of function then we can not call the function above the function. If we will do this then show error

// this show error because we have created this function by the variable. thats why we can not call the function before variable 
let twoFun = function(num){
    return num + 2
}

console.log(twoFun(8))
