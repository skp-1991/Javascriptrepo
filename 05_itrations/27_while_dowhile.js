// while

let i = 0
while (i <= 10) {
    //console.log(`This is the Value of i - ${i}`)
    // i++
    i = i + 2
}

let myArr = ["Shaktiman","Nagraj","Dhruv"]
let index = 0

while (index < myArr.length) {
    //console.log(`Value is ${myArr[index]}`);
    index = index + 1
}


// do while

let score = 11

do {
    // console.log(`Score - ${score}`)
    score++
} while (score <= 10);


let myArray = ["Doga","Superman","nagraj"]
let value = 0

// in do while - while only use for condition and print value will show on do and do not forget about increment

do{
    console.log(`He is our Favorite hero - ${myArray[value]}`)
    value++
}while(value < myArray.length);