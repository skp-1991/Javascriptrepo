class user {
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`Username is ${this.username}`)
    }

    // if you do not want to give the access of any method to other object of variable then we use static before the method(function) name. You can only access this with the class name like (console.log(user.createId());)
    static createId(){
        return `123`
    }
}

console.log(user.createId());

const sushil = new user("Sushil")


console.log(sushil);
//console.log(sushil.createId());


class department extends user {
    constructor(username, department){
        super(username)
        this.department = department
    }

}

const phoneBox = new department('hello','Web')
//console.log(phoneBox.createId());
phoneBox.logMe()