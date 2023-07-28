console.log("========== Conversaion ==============")
let score = 55
console.log(typeof score)
console.log(typeof(score))
console.log("==============")
let scoreTwo = "55"
console.log(typeof scoreTwo)
console.log(typeof(scoreTwo))
console.log("==============")
let valueScore = Number(scoreTwo)
console.log(typeof valueScore)
console.log("==============")
let valueScoreOne = String(score)
console.log(typeof valueScoreOne)
console.log("==============")
let scoreThree = "55abc"
let valueScoreTwo = Number(scoreThree)
console.log(typeof valueScoreTwo)
console.log("If convert string to number and string have the alphabatical text the this will show in value NaN (Not a Number)")
console.log(valueScoreTwo) 
console.log("==============")
let temprature = Number(null)
console.log("If convert Null to number, then this will give the 0 value, this can be create the issue in if we are geting the temprature")
console.log(temprature)

console.log("false ============== 0")
let nValue = 0
let nnValue = Boolean(nValue)
console.log(nnValue)
console.log("ture ============== 1")
let nValueOne = 1
let nnValueOne = Boolean(nValueOne)
console.log(nnValueOne)
console.log("============== If have the value then this will show true and If string is empty then show false ")
let nValueTwo = "sushil"
let nnValueTwo = Boolean(nValueTwo)
console.log(nnValueTwo)
console.log("============== ")
let nValueThree = 33
let nnValueThree



console.log("========== Math Operations ==============")

let opValue = 3
let opValueOne = 4

console.log(opValue + opValueOne)
console.log(opValue - opValueOne)
console.log(opValue / opValueOne)
console.log(opValue * opValueOne)
console.log(opValue % opValueOne)


console.log("1" + 4)
console.log(1 + "4")

//Wrong Way
console.log(1 + 1 + "4")
console.log("1" + 1 + 4)

//Write Way
console.log("1" + (1 + 4))


//Prefixed ++x and postfixed x++

