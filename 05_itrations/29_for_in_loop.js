// for in for onbject

const ourObj = {
    Name : 'Sushil',
    Email : 'sushil@sushil.com',
    Phone : 99999999999,
    Account : 'active'
}

for (const key in ourObj) {
    console.log(`${key} - ${ourObj[key]}`);
}



// for in for array

let myArr = ['sushil',"kumar","ram"]

for (const key in myArr) {
    console.log(`${key} - ${myArr[key]}`);
}


// For in for map - for in loop do not work for map

const map = new Map()

map.set('First Name','Sushil')
map.set('Phone', 9999999999)
map.set('Login Active', true)
map.set('Email', 'sushil@sushil.com')

// for (const key in map) {
//     console.log(`${key}`);
// }