let numbers = [1,2,3,4,5,6,7,8,9,10]

// let numbs = numbers.map((nums) => {nums + 2} ) This will show the undefined so use return
let numbs = numbers.map((nums) => nums + 2)
numbs = numbers.map((nums) => {
    return nums + 2
})

numbs = numbers.map((nums) => {
    return nums + 30
})

// Chaining

numbs1 = numbers.filter((fil)=> fil > 5).map((nums) => nums + 2)
numbs2 = numbers.filter((fil)=> fil > 5).map((nums) => nums + 2).map((nums)=> nums + 5)
numbs = numbers.filter((fil)=> fil > 5).map((nums) => nums + 2).map((nums)=> nums + 5).filter((nums)=> nums >= 15 )
console.log(numbs1);
console.log(numbs2);
console.log(numbs);


// // by foreach
// numbers.forEach((nu) => {
//     console.log(nu + 2);
// })

