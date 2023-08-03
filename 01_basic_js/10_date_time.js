let dateValue = new Date()
console.log(typeof dateValue)
console.log(dateValue.toLocaleString('defult',{ 
    weekday : "short",
    timeZone : "IST",  // this is for indian time zone
    month : "2-digit",
    day : "2-digit",
    formatMatcher : "best fit",
    hourCycle : "h12",
    hour : "2-digit",
    minute : "2-digit",
    second : "2-digit",
    year : "numeric"
 }))

// console.log(dateValue.getDate())
// console.log(dateValue.getDay())
// console.log(dateValue.getFullYear())
// console.log(dateValue.getHours())
// console.log(dateValue.getMilliseconds())
// console.log(dateValue.getMinutes())
// console.log(dateValue.getMonth() + 1)
// console.log(dateValue.getSeconds())
// console.log(dateValue.getTime())
// console.log(dateValue.getTimezoneOffset())
// console.log(dateValue.getUTCDate())
// console.log(dateValue.getUTCDay())
// console.log(dateValue.toString())
// console.log(dateValue.toISOString())
// console.log(dateValue.toDateString())
// console.log(dateValue.toJSON())
// console.log(dateValue.toLocaleDateString())
// console.log(dateValue.toLocaleString())
// console.log(dateValue.toLocaleTimeString())
// console.log(dateValue.toLocaleTimeString())
// console.log(dateValue.toTimeString())
// console.log(dateValue.toUTCString())


// let myDate = new Date(2023,5,24)   // in date if you add value like this then this will start month from the 0 to 11
// console.log(myDate)
// console.log(myDate.toDateString())


// let myDateOne = new Date(2023,5,24,5,50)   // in date if you add value like this then this will start month from the 0 to 11
// console.log(myDateOne)
// console.log(myDateOne.toLocaleString())


// let myDateTwo = new Date("2023-08-14")   // in date if you add value like this then this will start month from the 1 to 12
// console.log(myDateTwo)
// console.log(myDateTwo.toLocaleString())