//~^ A function is a block of organized, reusable code that performs a specific task.
//~^ A function encapsulates multiple statements, expressions, and logic.
//~^ Functions are reusable and remove redundancy by allowing you to encapsulate your code logic for reuse.
//~^ Technically Functions are classified as objects in javascript.

//~# Parts of Function Declaration
//===============================
//1. Function Keyword
//2. Function Name
//3. Parameters
//4. Code Block
//5. Return Keyword

function functionName(parameter1, parameter2) {
  return parameter1 + parameter2;
}
//Calling Function
functionName(25, 20);


//~! Example 
function computeRectStats(length, width) {
  let areaRectA = Number(length) * Number(width);
  let perimeterRect = 2 * (Number(length)) + Number(length);
  console.log(`Area: ${areaRectA}`);
  console.log(`Perimeter: ${perimeterRect}`);
}

let rectALength = 25;
let rectAWidth = 10;
computeRectStats(rectALength, rectAWidth);

let rectBLength = 25;
let rectBWidth = 10;
computeRectStats(rectBLength, rectBWidth);

let rectCLength = 25;
let rectCWidth = 10;
computeRectStats(rectCLength, rectCWidth);
