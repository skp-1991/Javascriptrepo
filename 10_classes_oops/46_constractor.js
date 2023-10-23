// new - this is a constroctor function and this allow to make multiple insistence ('objectone(value1,value2 etc)') by single object literal 

// example of new 

// const promiseOne = new Promise()
// const date = new Date()


// if do not use new constractor function then this create this type of the issue.
function userDataIn(username,loginCount,isLogined,greeting){
    this.username = username
    this.loginCount = loginCount
    this.isLogined = isLogined
    this.greeting = greeting

    return this;
}

// if we do not use new then first added value in this will replaced by second value 
// const userDataOne = userDataIn('sushil',8,true,function(){console.log('hello')})
// const userDataTwo = userDataIn('Anil',20,false,function(){console.log('hello Second')})
// console.log(userDataOne)


// if we use new constractor function then this resolve the issue like below

const userDataThree = new userDataIn('sushil',8,true)
const userDataFour = new userDataIn('Anil',20,false,function(){console.log('hello Second')})
const userDataFive = new userDataIn('Sunil',30,true,function(){console.log('hello Third')})
console.log(userDataThree.isLogined)
console.log(userDataFour.username)
console.log(userDataFive.greeting())



