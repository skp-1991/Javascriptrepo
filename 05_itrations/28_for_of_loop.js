


// for of loop

let arr1 = [1,2,3,4,5]

for (const arr of arr1) {
    //console.log(`This is our array Value - ${arr}`);
}

let greetings = "Hello World!"

for (const greet of greetings) {
    //console.log(`Greetings Every Word - ${greet}`);
}



// Maps

const map = new Map()

map.set('First Name','Sushil')
map.set('Phone', 9999999999)
map.set('Login Active', true)
map.set('Email', 'sushil@sushil.com')

//console.log(map);

// for (const key of map){
//     console.log(key)
// }

// below we have used two itriator key and value show the both value  and this is the destruchered of map
for (const [key,value] of map){
    console.log(`${key} - ${value}`);
}

// for of do not work for the object

const ourObj = {
    'name' : 'sushil',
    'email' : 'sushil@sushil.com'
}

// for (const [key,value] of ourObj){
//     //console.log(`${key} - ${value}`);
// }
