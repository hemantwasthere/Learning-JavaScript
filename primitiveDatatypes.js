// Primitive DataTypes in Javascript - there are 7 primitive datatypes in javascript
// nn ss bb u -> (null, number), (string, symbol), (boolean bigint), (undefined)

let a = null;
let b = 345;
let c = true;
let d = BigInt(69) + BigInt(1);
let e = "Dread";
let f = Symbol("Dread Symbol");
// let g = undefined; // never assign undefined to a variable, its not good practice, just leave it after declaration
let g;

console.log("null -> ",a);
console.log("number -> ",b);
console.log("boolean -> ",c);
console.log("BigInt -> ",d);
console.log("string -> ",e);
console.log("Symbol -> ",f);
console.log("undefined -> ",g);

console.log(typeof g);