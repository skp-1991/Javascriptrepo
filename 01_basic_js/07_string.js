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

 let conValue = meName.concat(mAge)
 console.log(conValue + "- This use for add the two value or charater")

 let subValue = meName.substring(0,5)
 console.log(subValue + "- This use for create the new string by present sting, this only work on positive value")

 // For take the value for the back side of the string then slice first value will be nagative and end point will be the positive number of end point of the value (or you only add start nagative value) then we will be incress and decress the start nagative value
 let subValueOne = mName.slice(-3, 6)
 console.log(subValueOne + "- This use for create the new string by present sting, this only work on positive and negative value both")
