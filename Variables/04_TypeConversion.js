// string conversion happens when we need the string from of a value.
let value = true;
value = String(value);
console.log(value);

let str = "123";
let num = Number(str);
console.log( typeof num);

let x = 10;
let y = "20"
console.log(x+y);
//When we try to add a number to a string using the plus operator, strings take precedence, and we get concatenation.
console.log(x-y);
//However, if you try to substract a numberr and a string, we will notice the opposite happens, 
// the strig is treated or converted as a number. 