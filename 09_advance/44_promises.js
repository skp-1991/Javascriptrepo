// // promise take function in his and two things in function resolve or reject, resolve and reject is function
// const promiseOne = new Promise(function(resolve, reject){

//     // do an aync task
//     // DB Calls, cryptogrphy, network
//     setTimeout(function(){
//         console.log('Welcome to Promise')
//         resolve()
//     },1000)
// })

// promiseOne.then(function(){
//     console.log('Then is working')
// })



// // Second Promise

// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log('Second Promise')
//         resolve()
//     },1000)
// }).then(function(){
//     console.log('then work twise')
// })


// // third promise

// const thirdPromise = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve({username : 'Sushil', email : 'sushil@sushil.com'})
//     },1000)
// })

// thirdPromise.then(function(user){
//     console.log(user)
// })


// fourth promise

const fourthPromise = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username : 'Anil', email : 'anil@anil.com'})
        }else{
            reject('Error: something wrong')
        }
    }, 1000)
})

fourthPromise.then(function(user){
    console.log(user);
})