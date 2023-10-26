class user {
    constructor(username,fname){
        this.username = username
        this.fname = fname
    }
    printUser(){
        return `My Username is ${this.username} --- ${this.fname}`
    }
}
const prnt = new user("ram","ram")
console.log(prnt.printUser());


// in noraml javascript we use prototype but in class we use extends to create a new class
class teacherData extends user {
    constructor(username,fname,password,email,phone){
        super(username,fname)
        this.password = password
        this.email = email
        this.phone = phone
    }

    addCourseName(){
        return `Our course name is ${this.username} --- ${this.fname}`
    }
}

const teachOne = new teacherData('sushil','sus','su32ds','sus@sus.com',565498433)

console.log(teachOne.addCourseName());


// instance

console.log(prnt instanceof user);