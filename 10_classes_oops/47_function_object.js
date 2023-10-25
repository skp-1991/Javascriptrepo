function multipleBy(num){
    return num*5
}

multipleBy.power = 2

console.log(multipleBy(5))

// array, string and function can be work like the object. javascript try best and send the array, string and function for get the result to the above, above means to the object and after the object result not show then this show the null.
console.log(multipleBy.power)
console.log(multipleBy.prototype)



// Exp 2

function createUser(username, score){
    this.username = username
    this.score = score

}
// this means jiska - jis ne call ki hai us ke pass
createUser.prototype.increment = function(){
    this.score++
}

createUser.prototype.printMe = function(){
    console.log(`This is my score ${this.score}`)
}
// This code will show error without use new keyword
// let createOne = createUser('sushil', 58)
// let createTwo = createUser('Anil', 58)

// This code will not show error without use new keyword
let createOne = new createUser('sushil', 58)
let createTwo = new createUser('Anil', 58)


console.log(createOne)
console.log(createTwo)
createOne.printMe()