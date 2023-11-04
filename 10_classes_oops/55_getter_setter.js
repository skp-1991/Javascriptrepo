// getter and setter both use if we mentioned the get then we also need to mention set and we need to change the variable name other get and set will be conflict with the constructor.
// get and set make all the variable as a function. but we need to write the get and set both before the variable name like below
//

class user {
    constructor(username,password,email){
        this.username = username
        this.password = password
        this.email = email
    }
    get username(){
        let us = `${this.usernames}Helo`
        return us.toUpperCase()
    }
    set username(name){
        this.usernames = name
    }
    get password(){
        let va = `${this.passwords}adsfasdf`
        return va.toUpperCase() 
    }
    set password(value){
        this.passwords = value
    }
}

const classOne = new user('sushil','34343','sushil@sushil.com')
//console.log(classOne.password);
//console.log(classOne.username);


// when we do not have the getter and setter that time we do by this way.
// this is also a function base syntex
function userData(username,password){
    this._username = username
    this._password = password

    Object.defineProperty(this, 'username', {
        get : function(){
            return this._username.toUpperCase()
        },
        set : function(value){
            this._username = value
        }
    })
}
const other = new userData('Anil','t87')
//console.log(other.username);



// when we do not have the getter and setter that time we do by this way.
// this is also a Object base syntex
// when we use underscore before any key that means this is a private property
// if we use underscore before key then we take get and set function then underscore not make any sence with variable 
const ObjTwo = {
    _username : 'Sushil',
    _password : 'aldsfk',
    get username(){
        return this._username.toUpperCase()
    },
    set username(value){
        this._username = value
    }
}

// Object properties call factory function - Object.create etc.

let userMain = Object.create(ObjTwo)
console.log(userMain._username);
console.log(userMain.username);