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

//console.log(numbersAll);



let cource = [
    {
        courceName : "Mobile Repair",
        price : 2500
    },
    {
        courceName : "B.Tech",
        price : 5000
    },
    {
        courceName : "JS",
        price : 1500
    },
    {
        courceName : "React Js",
        price : 4000
    },
    {
        courceName : "PHP",
        price : 6000
    }
]

let Allcource = cource.reduce((accu,items) => (accu + items.price),0)

console.log(Allcource);