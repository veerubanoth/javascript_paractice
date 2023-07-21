//~? Primitive Types: Stored directly in the "Stack", where it is accessed from
//^ String | Number | Boolean | Null | Undefined | Symbol | BigInt
const name = 'Jhon';
const age = '30';


//~# Reference Types: Strored in the heap and accessed by reference
//% Arrays | Functions | Objects
const person = {
   name: " Veeru", //refering to Heap 
   age: 38
}

let newName = name;
newName = "Rahul";

let newPerson = person;
newPerson.name = "Rahul"; // refers to Same heap 

console.log(name, newName);
console.log(person, newPerson);