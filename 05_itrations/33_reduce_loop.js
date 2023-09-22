let numbers = [1,2,3,4]
let inValue = 0
// let numbersAll = numbers.reduce((acc,curr)=> {
//     console.log(`acc value : ${acc} ------ curr value : ${curr}`);
//     return acc + curr 
// }, inValue)

// numbersAll = numbers.reduce((acc,curr)=> {
//     console.log(`acc value : ${acc} ------ curr value : ${curr}`);
//     return acc + curr 
// }, 0)

let numbersAll = numbers.reduce((acc,curr)=> acc + curr , 0 )
numbersAll = numbers.reduce((acc,curr)=> (acc + curr) , 0 )

console.log(numbersAll);