/* – Numbers – Number object */

console.log(Number( true)); 
console.log(Number(false));
console.log(Number(undefined));
console.log(Number(null));
console.log(Number("10"));
console.log(Number("    10"));
console.log(Number("    10    "));
console.log(Number("  10   1 "));
console.log("-----------------")
console.log(Number.NaN == Number.NaN);
console.log(Number.NaN === Number.NaN);
console.log("-----------------")
console.log(Number.isNaN(undefined));
console.log(Number.isNaN(null));
console.log(Number.isNaN("15"));

console.log("-----------------")

console.log( isNaN(undefined));
console.log( isNaN(null));
console.log( isNaN("15")); 
console.log("-----------------")
console.log(Number.isFinite("0"));

console.log(isFinite("0"));

