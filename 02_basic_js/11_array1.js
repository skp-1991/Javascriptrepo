const arrValue = [0,1,2,3,4,5]
const arrValue1 = [6,7,8,9,10,11]

console.log(arrValue)
console.log(arrValue[2])
console.log(arrValue.length)

arrValue.push(arrValue1)  // issue for puch the value in one array by other
console.log(arrValue)

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



