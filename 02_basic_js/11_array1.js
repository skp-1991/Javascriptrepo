const arrValue = [0,1,2,3,4,5]

console.log(arrValue)
console.log(arrValue[2])
console.log(arrValue.length)


// shallow property - if you will change the value then array will also change and Deep copy - this create a copy of the array this do not change in the orignal array.


const arrValueOne = [4, 6, 8, 10, 60]
const arrValueTwo = [14, 62, 83, 15, 10]
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
