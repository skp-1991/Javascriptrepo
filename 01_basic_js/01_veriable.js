console.log("HI");
console.log("Words");
console.log("mera desh");

const accountId = "9458505700"
let accountPassword = "sushil1991"
let accountEmail = "1991sushilpandey@gmail.com"
let accountCity = "Noida"
let accountPincode;   // For now this have undefine value
// accountId = 2  Note allowed

console.log([accountId, accountPassword, accountEmail, accountCity]);

accountEmail = "sushil@gmail.com"
accountPassword = "sushil123"
accountCity = "Delhi"

/*
This is the changed value print
Now we will only use const and let
var have scope issue thats why javascript give the let veriable
*/

console.log([accountId, accountPassword, accountEmail, accountCity]);


console.log(accountPincode)