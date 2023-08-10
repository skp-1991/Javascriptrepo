// function of array

const arrValue = [0,1,2,3,4,5]
const arrValue1 = [6,7,8,9,10,11]

// shallow property - if you will change the value then array will also change and Deep copy - this create a copy of the array this do not change in the orignal array.


const arrValueOne = [4, 6, 8, 10, 60]
const arrValueTwo = [14, 62, 83, 15, 10]

console.log("======== at ============")
let atValue = arrValueOne.at(2)
console.log(atValue)


console.log("======== concat ============")
let arrFull = arrValueOne.concat(arrValueTwo)
console.log(arrFull)

console.log("======== copyWithin ============")
const arrValueThree = [4, 6, 8, 10, 60, 14, 62, 83, 15, 10]
let arrFullOne = arrValueThree.copyWithin(0, 3,6)
console.log(arrFullOne)

console.log("======== every - this will return true or false ============")
const isBelowThreshold = (currentValue) => currentValue < 40;
const array1 = [1, 30, 39, 29, 10, 13];
console.log(array1.every(isBelowThreshold));

console.log("======== fill ============")
console.log(array1.fill(3,3,5))

console.log("======== filter ============")
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const result = words.filter((word) => word.length < 6);
console.log(result);

console.log("======== flat() ============")
// we can use number value in flat for marge the arr with child array and we can also use infinity for marge the all arrays
const flArr = [0, 1, 2, [3, 4, 5]]
console.log(flArr.flat())
const flArrOne = [0, 1, 2, [3, 4, 5, [6, 7, 8, [9, 10, 11]]]]
console.log(flArrOne.flat(2))
console.log(flArrOne.flat(Infinity))  

// we can define the call back function
const arr1 = [1, 2, 3, 4];
console.log(arr1.map((x) => [x * 2]));

console.log("======== flatMap() - this work with call back ============")
const arr2 = [1, 2, 3, 4];
console.log(arr2.flatMap((x) => [x * 2]));

console.log("======== forEach() ============")
const arr3 = arr2.forEach((element) => {
    console.log(element)
})

console.log("======== indexOf() ============")
console.log(arrValue.indexOf(3))

console.log("======== lastIndexOf() ============")
console.log(arrValueOne.lastIndexOf(10))


console.log("======== map() ============")
arrValueOne.map(element => {
    console.log(element)
})


console.log("======== slice & splice ============")

const newArrayOne = arrValue.slice(1,3)  // This will create the a copy of the array then orignal array will not reflect by new one and this will only show the starting value to before end value. this will not show end value in array
console.log(newArrayOne)
console.log(arrValue)

const newArrayTwo = arrValue.splice(1,3) // this will create a new array and form the orignal array and changed the orignal array and this will show value to starting point(1) value to end point value (3) 
console.log(newArrayTwo)
console.log(arrValue)

console.log("======== reduce ============")
//The reduce() method executes a user-supplied "reducer" callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element. The final result of running the reducer across all elements of the array is a single value.

const arrValu = [0,1,2,3,4,5]
const initialValue = 0;
const redValue = arrValu.reduce((accumulator, currentValue, index) => accumulator + currentValue + index, initialValue)
console.log(redValue)
const getMax = (a, b) => Math.max(a, b);
const arrValu1 = arrValu.reduce(getMax)
console.log(arrValu1)


console.log("======== reduceRight ============")
// this manage the array right to left
const rrValue = [[0, 1],[2, 3],[4, 5],];
const rrValue1 = rrValue.reduceRight((accumulator, currentValue) => accumulator.concat(currentValue));
console.log(rrValue1);

console.log("======== reverse ============")
// This reverse the array value
const rva = [5, 10, 20, 30, 40]
const reValu = rva.reverse()
console.log(reValu);

console.log("======== some ============")
// this provide the value in boolean (true & false)
const soValue = [4, 1, 3, 2, 0]
const soValue1 = (element) => element % 2 === 0;
console.log(soValue.some(soValue1));


console.log("======== sort ============")
// this align the value as per numeric or alphabaticaly
console.log(soValue.sort())


console.log("======== from ============")

console.log(Array.from("Sushil"))
console.log(Array.from({
    name : "Sushil",
    Age : 31
}))  // We need to tell create a value by key or value

console.log("======== of - This create array by the define variable ============")

let value1 = 100
let value2 = 300
let value3 = 400

console.log(Array.of(value1,value2, value3))

