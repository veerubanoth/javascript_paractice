//~# 1. Syntax Difference 
//~* Regular Function
function regularFunction(x, y) {
   return x + y;
}
const regular = regularFunction(2, 3);
console.log(`This is Regular function: ${regular}`);

//~^ Arrow Function
const arrowFunction = (x, y) => { return x + y };
const arrow = arrowFunction(2, 3);
console.log(`This is Arrow Function: ${arrow}`);

//~# 2. Binding of this 
//~* Regular Function 
const obj = {
   name: "RAHUL",
   regularFunc: function () {
      console.log(`Binding "this" with Regular Function: ${this.name}`);
   }
};
obj.regularFunc();
//~^ Arrow Function 
const objArrow = {
   name: "VEERU",
   arrowFunc: () => {
      console.log(this.name);
   }
}
// obj.arrowFunc();
//# 'this' refer to the global scope rather than the object `objArrow`
//~%  Do not bind their own this value. Instead, 
//~% they inherit the this value from the surrounding scope in which they are defined.



//~# 3. Arguments object
//~* Regular Function 
//* Regular functions: Have access to the arguments object, 
//* Which is an array - like object containing all the arguments passed to the function.

function regularFunc(x, y) {
   console.log(arguments);
}
regularFunc(1, 2, 3);