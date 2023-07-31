 const mName = "Sushil"
 const mAge = 30

 console.log("My name is " + mName + " and my age is " + mAge)

 // New way of define the variable
 console.log(`My name is ${mName} and my age is ${mAge}`)

 const meName = new String("Sushil")
 console.log(meName.length + "- find the length of string")  // Check this in console
 console.log(meName.toUpperCase() + "- convert into the uppercase")
 console.log(meName.charAt(3) + "- This find the charecter by index")
 console.log(meName.indexOf("i") + "- This will provide index number")
 console.log(meName.includes("i") + "- true or false value") 
 console.log(meName.anchor("Hello") + "- add ancher tag text")
 console.log(meName.at(4) + "- This find the charecter by index")
 console.log(meName.big() + "- add big tag text")
 console.log(meName.blink() + "- add blink tag text")
 console.log(meName.bold() + "- b tag to text")
 console.log(meName.charCodeAt(3) + "- charecter code")
 console.log(meName.codePointAt(1) + "- charecter code")

// substr is same as substing but substr not support some browser

 console.log(meName.substring(2) + "- for create a small sting, if we will insert signle value then do not show those other value will show")
 console.log(meName.substring(1,4) + "- for create a small sting by the both value this will take only those value")

 let conValue = meName.concat(mAge)
 console.log(conValue + "- This use for add the two value or charater")

 let subValue = meName.substring(0,5)
 console.log(subValue + "- This use for create the new string by present sting, this only work on positive value")

 // For take the value for the back side of the string then slice first value will be nagative and end point will be the positive number of end point of the value (or you only add start nagative value) then we will be incress and decress the start nagative value
 let subValueOne = mName.slice(-3, 6)
 console.log(subValueOne + "- This use for create the new string by present sting, this only work on positive and negative value both")


//  trim - remove the left right extra spacing and this only work on the space.

let trValue = "     This is my      "
console.log(trValue)
console.log(trValue.length)
let trimValue = trValue.trim()

console.log(trimValue)
console.log(trimValue.length)


// remove -  this use for remove the any type of the spacial carector, number or text

let reValue = "He is the most powerful%20"
let remValue = reValue.replace(" ","-")  // only replace use for the single space or anything
let remValueOne = reValue.replaceAll(" ","-")  // replaceAll use for everywhere space change with the minius
console.log(remValue + " - replace one only")
console.log(remValueOne + " - replace all in one time")

console.log(reValue)


// repeat - this use for repeat the values

let repValue = "Happy!"

console.log(`I am so ${repValue.repeat(5)} `)

// raw -- It's used to get the raw string form of template literals
const filePath = String.raw`C:\Development\profile\aboutme.html`;

console.log(`The file was uploaded from: ${filePath}`);



// padStart - this work as you saw cridet card last 4 digit only show

const fullNumber = '2034399002125581';
const last4Digits = fullNumber.slice(-4);
const maskedNumber = last4Digits.padStart(fullNumber.length, '*');

console.log(maskedNumber);


// padEnd - this use for add any value in last of the sting

const str1 = 'Breaded Mushrooms';

console.log(str1.padEnd(25, '%'));


// split

console.log(str1.split(" "))