// for loop

for (let index = 0; index < 10; index++) {
    const element = index;
    if( element == 5){
        //console.log("5 is the best number");
    }
    //console.log(element);
}


for (let i = 1; i <= 10; i++) {
    //console.log(`Outer Value ${i}`)
    for (let j = 1; j <= 10; j++) {
        //console.log(`Second Value ${j}`)
        //console.log(`${i} * ${j} = ${i * j}`);
    }   
}



const myArray = ["flash","Batman","Superman"]
//console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    
    //console.log(element);
}


// break and continue

for (let index = 1; index < 20; index++) {

    if(index == 5){
        //console.log("Detect the 5");
        break
    }
    //console.log(`Value of index is ${index}`)
    
}

// continue - 

for (let index = 1; index < 20; index++) {

    if(index == 5){
        console.log("Detect the 5");
        continue
    }
    console.log(`Value of index is ${index}`)
    
}

