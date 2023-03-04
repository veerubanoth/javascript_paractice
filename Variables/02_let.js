//~! Declare a variable with var or the let and const keword
let Name; // variable defined (DEFINITION).
//~* Definition is a confirmation of it's existence.
Name = "veeru"; // Define the variable and assign the value.

let user = "veeru", // Define multiple variables inn this multiline style.
  age = "32",
  newMessage = "Hello";

//~> We can also changge it as many times as we want.
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
if (a > 10) {
  let x = 10;
}

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
