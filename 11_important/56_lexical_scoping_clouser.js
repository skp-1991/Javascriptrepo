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


// we are return innerTwo and we have remove the function exicution that why now memory refrence will work. Now if innerTwo function will exicute by the outerTwo then This will call with his outer function, if avaliable.

// clouser work when we reture a function thats mean full of the scope will returen(a inner function return then outer function will also retrun(lexical scope))
function outerTwo(){
    let username = 'life'
    function innerTwo(){
        console.log(`This is ${username}`);
    }
    return innerTwo
}
const all = outerTwo()
all()