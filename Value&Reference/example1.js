const a = 1;
const b = 1;
//^ premitive data type
//~# a -----> 1 (if it is premitive)
//~# JavaScript takes the actual value of the String and points 
//~# the variable to that, it doesn't create a new string.

const c = [1];
const d = [1];
//^ Objects 
//~# if it's an object javascript actually creates the object from scratch 
//~# and points the variable to the location.
console.log(c === d);

const myName = 'sinaa';

