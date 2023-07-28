const myString = "developer";
let myNewString1;

myNewString1 = myString.charAt(0).toUpperCase() + myString.substring(1);
//  myNewString1 = myString[0].toUpperCase() + myString.substring(1);
const myNewString2 = myString.toUpperCase();
const myNewString3 = myString[0].toUpperCase() + myString.substring(1);
const myNewString4 = `${myString[0].toUpperCase()}${myString.slice(1)}`;

console.log(myNewString1);
console.log(myNewString2);
console.log(myNewString3);
console.log(myNewString4);