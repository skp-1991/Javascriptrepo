// forEach loop for array

let myArr = ['sushil','kumar','rama','rahul']

// simple funtion in forEach
// myArr.forEach(function(item) {
//     console.log(`${item}`)
// })

// arrow function in forEach

// myArr.forEach((key) =>{console.log(`${key}`);})


// foreach with callback function name

// function pMe(item){
//     console.log(item);
// }

// myArr.forEach(pMe)


// forEach multiple parameter

// myArr.forEach((item,index,fullarray)=>{
//     // console.log(`${index} - ${item} - ${fullarray}`);
//     console.log(index, item, fullarray);
// })


let myAr = [
    {
        language : 'javascript',
        fileName : 'js',
    },
    {
        language : 'HTML',
        fileName : 'html',
    },
    {
        language : 'java',
        fileName : 'java',
    },
    {
        language : 'python',
        fileName : 'PY',
    }
]


myAr.forEach((item,index,fularr)=> {
    console.log(`${index} - ${item.language}  - ${item.fileName}`);
})