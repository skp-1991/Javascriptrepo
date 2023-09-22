let numbers = [1,2,3,4,5,6,7,8,9,10]

// let numbs = numbers.map((nums) => {nums + 2} ) This will show the undefined so use return
let numbs = numbers.map((nums) => nums + 2)
numbs = numbers.map((nums) => {
    return nums + 2
})
console.log(numbs);