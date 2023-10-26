// ES6

// with class

class user{
    constructor(username,password,email,phone){
        this.username = username
        this.password = password
        this.email = email
        this.phone = phone
    }

    encryptpassword(){
        return `${this.password}xyz`
    }

    usernameUpper(){
        return `${this.username.toUpperCase()}`
    }
}

const firstData = new user('Anil','lifeof@123','sushil@gmail.com',6546898465)

console.log(firstData)
console.log(firstData.encryptpassword())
console.log(firstData.usernameUpper())


// with out class  ======= behind the class work

function users(username,password,email,phone){
    this.username = username
    this.password = password
    this.email = email
    this.phone = phone
}

users.prototype.encryptpassword = function(){
    return `${this.password}xyz`
}

const su = new users('sushil','liefofpie','sushl@sushil.com',4545454)

console.log(su.encryptpassword());