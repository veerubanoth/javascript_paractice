let x = 10;
let y = "20"
console.log(x + y);
//% When we try to add a number to a string using the plus operator, strings take precedence, and we get concatenation.
console.log(x - y);
//> However, if you try to substract a numberr and a string, we will notice the opposite happens, -
//>  the strig is treated or converted as a number. 

x = 5 * "5";
x = 5 * null;
x = Number(null);
x = Number(true);
x = Number(false);
x = 5 + true;
z = 5 - 0; 
x = 5 + undefined;
console.log(`z is ${z}`)