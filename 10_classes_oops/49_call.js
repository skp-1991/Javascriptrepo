function userName(username){
    this.username = username
    console.log('hello');
}
// if we do not use the call then we can not access the one function variable in other function
// if we use call then we will also provide the two parameter which is first is this value and second our parameter
// userName.call(this, username)
// we use this for telling the function that now we will use your this not our
function createUser(username,email,password){
    userName.call(this, username)

    this.email = email
    this.password = password
}

const firstUser = new createUser('sushil','sushil@sushil.com',56488)

console.log(firstUser);


function firstVe(username){
    this.username = username
    console.log('first');
}
function secondVe(password){
    this.password = password
    console.log('second');
}
function thirdVe(username,password,logins,phone){
    firstVe.call(this, username)
    secondVe.call(this, password)
    
    this.logins = logins
    this.phone = phone
}

const allVe = new thirdVe('sunil','sushil@123',true,98556222114)  /// do not forget to write the new keyword other wise this will show the undefined error

console.log(allVe);