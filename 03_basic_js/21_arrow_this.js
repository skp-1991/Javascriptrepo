// "this" variable use for define the variable in scope 

const objOne = {
    userName : "Sushil",
    phoneNumber :  9999999999,
    attendence : true,
    welcomeFun : function(){
        console.log(`${this.userName}, Welcome to the website. We will call on ${this.phoneNumber}`)
        console.log(this)
    }
}

// objOne.welcomeFun()
// objOne.userName = "Anil"
// objOne.phoneNumber = 8888888888
// objOne.welcomeFun()

// console.log(this)


// we can not use the this in function.

// function sus(){
//     let userName = "Sushil"
//     console.log(this.userName)
// }

// const sus = function () {
//     let userName = "Sushil"
//     console.log(this.userName)
// }

// const sus = () =>  {
//     let userName = "Sushil"
//     console.log(this.userName)
// }

// sus()



// arrow function


// emplicit 
// no need to add return in this
// const oneValue = (num1, num2) => num1 + num2
// const oneValue = (num1, num2) => ( num1 + num2 )
const oneValue = (num1, num2) => ({username : "Sushil"})

console.log(oneValue(4,3));

const myArray = [2,4,6,2,8]
//currect way one
// myArray.forEach(function(){

// })

//currect way two arrow function = one line function in arrow function
myArray.forEach((num1,num2) => (num1 + num2))

//currect way third arrow function
// myArray.forEach(() => {})