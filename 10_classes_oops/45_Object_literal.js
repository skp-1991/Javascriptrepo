// Object literal is the collection of properties and method
const obj = {
    username : 'Sushi',
    phone : 988925323,
    LogInded : true,
    getUser : function(){
        return `congration ${this.username}`
    }
}

console.log(obj.username)
console.log(obj.getUser())