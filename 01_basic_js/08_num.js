let numValue = 87
let numValueOne = new Number(87)
console.log(numValue)
console.log(typeof numValueOne)
console.log(numValueOne)
let numst = numValueOne.toString()
console.log(typeof numst)
console.log(numst)
console.log(numst.length)
console.log(numValue.toFixed(2) + "- This is for the .value use")


let preValue = 54.55488998

console.log(preValue.toPrecision(3) + " - This fuction have some issue this will use if we know that how 2 or 3 number value will show.")

let countHun = 1999990099889

console.log(countHun.toLocaleString('en-in') + "- this use for showing any price number with coma.")


// 

console.log(Number.MAX_SAFE_INTEGER + ' -  max_safe_integer')
console.log(Number.MIN_SAFE_INTEGER + ' -  min_safe_integer')
console.log(Number.MAX_VALUE + ' -  max_integer')
console.log(Number.MIN_VALUE + ' -  min_integer')
console.log(Number.isFinite(1/0))
console.log(Number.isFinite(0/1))
console.log(Number.isFinite(0/0))
console.log(Number.isFinite(1/1))

// isInteger
function fits(x, y) {
    if (Number.isInteger(y / x)) {
      return 'Fits!';
    }
    return 'Does NOT fit!';
  }
  
  console.log(fits(2, 30));
  console.log(fits(2, 31));

  // Number.parseFloat()  - This will only return the number value and remove the sting

  console.log(Number.parseFloat('5.1mn,m55112345243'))

//   parseInt(x, base)

console.log(Number.parseInt('0xF'))


