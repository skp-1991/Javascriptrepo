// This is the hidden properties of an object. By this we can manage any key or value writable(ture or false), enuramable(loop)(ture or flase) ect.
// If we take an example of Math.PI value but for seing hidden properties we will do like below
// getOwnPropertyDescriptor show hidden properties first will write the object name and then key or value
const desc = Object.getOwnPropertyDescriptor(Math, 'PI')

//console.log(desc);

// Output
// {
//     value: 3.141592653589793,
//     writable: false,
//     enumerable: false,
//     configurable: false
//   }

const objOne = {
    name : 'Object One',
    propertiesCount : 8,
    working : true
}
// This way only work on one
// let obj1 = Object.getOwnPropertyDescriptor(objOne, 'working')
let obj1 = Object.getOwnPropertyDescriptors(objOne)
//console.log(obj1.name);
//console.log(obj1.propertiesCount);
//console.log(obj1.working);


// If we want to change the hidden properties then we will use defineProperty
// you can check that now name properties not showing on loop.
Object.defineProperty(objOne , 'name', {
     writable: false,
     enumerable: false,
     configurable: false
})
objOne.name = "sushil"


// Object is not an ilitratable so we use Object.entries(ObjectName)

for (let [key,value] of Object.entries(objOne)) {
    //console.log(`${key} --- ${value}`);
}

// Other example with the defineProperties, we can add key and value and also hidden properties by this.

let ObjTwo = {}

Object.defineProperties(ObjTwo, {
    userName : {
        value : 'Sushil',
        writable : true,
        enumerable : true
    },
    phone : {
        value : 999999999,
        writable :true,
        enumerable : true,
    },
    email : {
        value : 'sushil@sushil.com',
        writable :true,
        enumerable : true,
    },
    isLogined : {
        value : true,
        writable :true,
        enumerable : true,
    }
})

console.log(ObjTwo);



/// If we are using function in side the Object then we use if condition when we create loop

let objThree = {}

Object.defineProperties(objThree, {
    empName : {
        value : 'Rahul',
        writable : true,
        enumerable : true
    },
    empID : {
        value : 101,
        writable : true,
        enumerable : true
    },
    empList : {
        value : function(){
            console.log('hello world')
        },
        writable : true,
        enumerable : true
    }
})

console.log(objThree);

for (const [key, value] of Object.entries(objThree)) {
    if (typeof value !== 'function'){
        console.log(`${key} --- ${value}`)
    }
}