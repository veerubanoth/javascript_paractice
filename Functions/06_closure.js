//~! The accessibility of variables is determined by the position of the variables inside the nested scopes

//~* Lexical Scope defines how variable names are resolved in nested functions.
//~* Nested(child) functions have access to the scope of their parent funtions.
//~* This is often confused with closure, but lexical scope is only an important part of closure.
//~^ A Closure is a function having access to the parent scope, even after the parent function has closed.
//~^ A closure is created when we define a function, not when a function is executed.

//~# https://dmitripavlutin.com/javascript-closure/

//% Global Scope
let x = 1;
const parentFunction = () => {
   //# Local Scope 
   let myValue = 2;
   console.log(x);
   console.log(myValue);

   const childFunction = () => {
      console.log(x += 5);
      console.log(myValue += 5);
   }
   return childFunction;

}

const result = parentFunction()
// console.log(result);

result();
result();