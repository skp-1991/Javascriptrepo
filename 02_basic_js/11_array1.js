const arrValue = [0,1,2,3,4,5]
const arrValue1 = [6,7,8,9,10,11]

console.log(arrValue)
console.log(arrValue[2])
console.log(arrValue.length)

arrValue.push(6)  // add the value in end
arrValue.push(7)  // add the value in end
arrValue.pop()  // remove the value form the end.
arrValue.unshift(9)  // add the value in Start
arrValue.unshift(10)  // add the value in Start
arrValue.shift()  // remove the value in Start
console.log(arrValue)
console.log(arrValue.includes(4))
console.log(arrValue.indexOf(4))

const newArray = arrValue.join()   // this convert the value in string
console.log(arrValue)
console.log(newArray)

console.log("======== spread operator ============")
// in spread operator we combine arrays in one array and we can also add value in this.
const otherValue = [...arrValue, ...arrValue1, 86, "Hello"]

console.log(otherValue)





// shallow property - if you will change the value then array will also change and Deep copy - this create a copy of the array this do not change in the orignal array.


// const arrValueOne = [4, 6, 8, 10, 60]
// const arrValueTwo = [14, 62, 83, 15, 10]
// console.log("======== concat ============")
// let arrFull = arrValueOne.concat(arrValueTwo)
// console.log(arrFull)

// console.log("======== copyWithin ============")
// const arrValueThree = [4, 6, 8, 10, 60, 14, 62, 83, 15, 10]
// let arrFullOne = arrValueThree.copyWithin(0, 3,6)
// console.log(arrFullOne)

// console.log("======== every - this will return true or false ============")
// const isBelowThreshold = (currentValue) => currentValue < 40;
// const array1 = [1, 30, 39, 29, 10, 13];
// console.log(array1.every(isBelowThreshold));

// console.log("======== fill ============")
// console.log(array1.fill(3,3,5))

// console.log("======== filter ============")
// const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
// const result = words.filter((word) => word.length < 6);
// console.log(result);

// console.log("======== flat() ============")
// // we can use number value in flat for marge the arr with child array and we can also use infinity for marge the all arrays
// const flArr = [0, 1, 2, [3, 4, 5]]
// console.log(flArr.flat())
// const flArrOne = [0, 1, 2, [3, 4, 5, [6, 7, 8, [9, 10, 11]]]]
// console.log(flArrOne.flat(2))
// console.log(flArrOne.flat(Infinity))  

// // we can define the call back function
// const arr1 = [1, 2, 3, 4];
// console.log(arr1.map((x) => [x * 2]));

// console.log("======== flatMap() - this work with call back ============")
// const arr2 = [1, 2, 3, 4];
// console.log(arr2.flatMap((x) => [x * 2]));

// console.log("======== forEach() ============")
// const arr3 = arr2.forEach((element) => {
//     console.log(element)
// })

// console.log("======== indexOf() ============")
// console.log(arrValue.indexOf(3))

// console.log("======== lastIndexOf() ============")
// console.log(arrValueOne.lastIndexOf(10))


// console.log("======== map() ============")
// arrValueOne.map(element => {
//     console.log(element)
// })


// console.log("======== slice & splice ============")

// const newArrayOne = arrValue.slice(1,3)  // This will create the a copy of the array then orignal array will not reflect by new one and this will only show the starting value to before end value. this will not show end value in array
// console.log(newArrayOne)
// console.log(arrValue)

// const newArrayTwo = arrValue.splice(1,3) // this will create a new array and form the orignal array and changed the orignal array and this will show value to starting point(1) value to end point value (3) 
// console.log(newArrayTwo)
// console.log(arrValue)