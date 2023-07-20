//~! Declare a variable with var or the let and const keword
let Name; //Declaring a Variable
//~* Definition is a confirmation of it's existence.
Name = "veeru"; // Define the variable and assign the value.

let user = "veeru", // Define multiple variables inn this multiline style.
  age = "32",
  newMessage = "Hello";

//~> We can also change it as many times as we want.
let message;
message = "Hello!";
message = "World"; // value changed.
// When the value is changed, the old data is removied from the variable.
// Variable should be declared only once.
// A repeated declaration of the same variable is an error.
// so, we should declare a variable once and then refer to it without let.
let apple;
let APPLE; // These two varialbles are two different variables.

//~! Variable created using let are only available within a block
// if (a > 10) {
//   let x = 10;
// }
// Variables created using let aren't available before they are initialized unlike var which are hoisted and set to undefined
// Block or expression scoped variables .
// canot be re-declared in the same scope.

//* Variable naming
//-----------------------
// The name must contain only letters, or the symbols $ and _
// The first character must not be adigit.
let userName; //camelCase is commonly used.
let test123;
let $ = 1;
let _ = 2;
// let 1a; // can't start with a digit
// let my-name; //hyphes aren't allowed in the name
// Reserved words, which can't be used as variable names abecause they are used by the language itself.
// let let =5


var x = 100; // Globally scoped or function scoped.
for (let x = 0; x < 10; x++) {// variables created using let are only available within a block.
  console.log(`The Number is ${x}`);//variables created using let are only available within a block.
}
console.log(`Original Number is: ${x}`);
// Variables created using let can't be re-declared in the same scope. 
// The statement marked in red will throw an error!. 


function doSomethind() {
  console.log(user);
  var user = "veeru"; // undefined
}
doSomethind();

function doSomethind() {
  console.log(user);
  let user = "veeru"; // Uncaught ReferenceError: Cannot access 'user' before initialization 
}
doSomethind();


//~! Both var and let have their own uses.
//~! It is a common perception that var should be aboided & let is better which is not entirely true.
//~! It is recommended to identify  the scope within which your variable needs to work & choose which one to use accordingly.