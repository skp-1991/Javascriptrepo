// promise take function in his and two things in function resolve or reject, resolve and reject is function
const promiseOne = new Promise(function(resolve, reject){

    // do an aync task
    // DB Calls, cryptogrphy, network
    setTimeout(function(){
        console.log('Welcome to Promise')
        resolve()
    },1000)
})

promiseOne.then(function(){
    console.log('Then is working')
})



// // Second Promise

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('Second Promise')
        resolve()
    },1000)
}).then(function(){
    console.log('then work twise')
})


// // third promise

const thirdPromise = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username : 'Sushil', email : 'sushil@sushil.com'})
    },1000)
})

thirdPromise.then(function(user){
    console.log(user)
})


// fourth promise

const fourthPromise = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false
        if (!error) {
            resolve({username : 'Anil', email : 'anil@anil.com'})
        }else{
            reject('Error: something wrong')
        }
    }, 1000)
})

fourthPromise.then(function(user){ // then use for get the data
    console.log(user);
    return user.username
}).then((username)=>{
    console.log(username);
}).catch((err)=>{   // catch use for print the error 
    console.log(err);
}).finally(()=>{
    console.log('promise resolved')
})


// Promise five

const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let err = true
        if(!err){
        resolve({username : 'Sunil', pass : '2323'})
        }else{
            reject('Error gone wrong')
        }
    },1000)
})

// This way we use only when we get the data without any error
async function consumePromiseFive(){
    const res = await promiseFive
    console.log(res)
}


// If we have any error then we use try and catch in side this fucntion
async function consumePromiseFive(){
    try {
        const res = await promiseFive
    console.log(res)
    } catch (error) {
        console.log(error)
    }
}

consumePromiseFive()



// Promise Six

// we will use await with the fatch becasue this is taking time to fatch the data
async function allUserData(){
    try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users')  
            // this data will come in string formate and we will convert this in JSON formate
            const data = await response.json()
            for (let index = 0; index < data.length; index++) {
                console.log(`${data[index].address.geo.lat} - ${data[index].address.geo.lng} `)
            }
        } 
    catch (error) {
        console.log('E:', error)
    }
    
}

allUserData()


// Promise Seven


fetch('https://jsonplaceholder.typicode.com/users')
.then(function(resolve){
    return resolve.json()
}).then(function(data){
    console.log(data)
})
