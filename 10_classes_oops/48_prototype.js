let myName = 'Sushil     '
console.log(myName.length)

let myNameF = 'Sushil      '
console.log(myNameF.trim().length);




// object

let myHeros = ['saktiman','doga','dhruv']

let herosPower = {
    saktiman : 'circle',
    doga : 'gun',
    saktimanPower : function(){
        console.log(`Saktiman power ${this.saktiman}`);
    }
}

// If we want to access the method which not mentioned in the object

Object.prototype.rep = function(){
    console.log(`Doga Power`)
}


herosPower.rep()
// If we added a method in object then this will acesible by the function,string, array and object.
myHeros.rep()


// if we add a method in array then this will be accesible by the array only not others(function,string, array and object)

Array.prototype.rota = function(){
    console.log(`This is not array`)
}
myHeros.rota()


// inheritance


// how to connect two or many objects

const objOne = {
    userName : 'sushil'
}
const objTwo = {
    phone : 985222114475
}
const objThree = {
    email : 'sushil@sushil.com'
}
const objFour = {
    isLogined : true,
    __proto__: objTwo  // this only work when other object will be define above this object
}

console.log(objOne.userName)

console.log(objFour.phone);

// by the this(__proto__)  we can connect two object. But this is an old method
objOne.__proto__ = objThree
console.log(objOne.email)



// Mordern way to connect objects

const objFive = {
    greeting : function(){
        console.log(`our objFive`)
    }
}
const objSix = {
    road : function(){
        console.log(`our objSix`)
    }
}

Object.setPrototypeOf(objFive, objSix)

objFive.road()


// We will create one method for the trim length after the proto

let myFullName = 'ram Kumar    '

String.prototype.trueLength = function(){
    console.log(this);
    console.log(`True Length is ${this.trim().length}`);
}

myFullName.trueLength()

'sushil'.trueLength()
'suresh'.trueLength()
