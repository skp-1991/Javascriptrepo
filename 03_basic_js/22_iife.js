// iife - Immediately Invoked Function Expressions

// simple function
// function oneTea(){
//     console.log(`Connect DB`)
// }
// oneTea()

// iife funtion - IIFE function remove the global variable pallution issue and execute the funtion immediately.
// If we are declear two iife function then do not forget to add samecolum after every iife funtion.
// First way -- Named iife
(function oneTea(){
    console.log(`Connect DB`)
})();

// Second way - simple iife
((name) => {
    console.log(`Connect DB Two ${name}`)
})("Sushil");