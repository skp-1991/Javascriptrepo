// Global Scope
// which variable mentioned out of the brakets thats call global scope

// Local Scope
// which variable mentioned in side the brakets thats call local scope thats mean { inside braket local scope }

// what is the issue in the var 

var a = 10
console.log("Var value", a)

if (true) {
    var a = 100
    console.log("Var value", a)
}

console.log("Var value", a)

// var all variable is global scope use that why this make an issue and use the last value of the variable which inside the local or globle scope. By this create confusion

// if we do not need this issue we use let

let b = 20   // and this is globle scope variable
console.log("B Value", b )

if (true){
    let b = 200  // this value will only work for the local scope
    console.log("B Value", b )
}

console.log("B Value", b )



// const  -- this work same as let but this is a constant value which not changed

const c = 30
console.log("C value", c)

if (true) {
    const c = 300
    console.log("C value", c)
}

console.log("C value", c)