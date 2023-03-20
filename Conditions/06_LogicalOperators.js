//~!Binary Logical Operators &&,&&=, ||,||=
//~* Binary logical Operators provide a shortcut syntax to expressing complex conditional statements 

//~# Logical OR
//=================================================
let user = "veeru";
let greeting = `Hello, ${user || "stranger"}`; //~> if the left operand is false, then the right operand is retured.
console.log(greeting);

//~#Logical AND
//===========================
let isUserSmiling = false;
isUserSmiling && console.log("user is smiling ");

//~#Logical AND and OR Assignment
//===========================
//~% To Assign a value if the existing value is true.
//~% This one assigns the value on the right to the variable on the left if the variable is not false.

let dataDownloaded = 10;
let hasBeenDownloaded = dataDownloaded === 100;
// hasBeenDownloaded = hasBeenDownloaded && 'Data downloaded now completed....';
hasBeenDownloaded &&= 'Data downloaded now completed....';
hasBeenDownloaded ||= 'Downloading....';

//~% if the variable is truthy orverride it's value with something else. 

console.log(hasBeenDownloaded);
