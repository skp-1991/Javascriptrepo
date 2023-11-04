// lexical scoping 
// if we make a method(function) and then make more function inside the parent function then we get the any variable from the parent then if we call method then this will take full function with the parent this will call lexical scoping 
function outer(){
    let username = 'Sushil'
    function inner(){
        console.log(`My name is ${username}`);
        let department = 'Web'
        function innerBox(){
            console.log(`My department is ${department}`);
        }
        innerBox()
    }
    // console.log(`My name is ${username}. My department is ${department}`)
    inner()
}
outer()


// clouser

function outerTwo(){
    let username = 'life'
}