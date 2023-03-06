// The ternary operator massively cut down on the number of lines need to express conditionals.
// This in a massive codebase can cut down on lines of code and consequently file sizes
// which can impact the size of downloads at the end.

//Syntax
//=============

// Regular if-else
//======================

let temperature = 15;

if (temperature >= 25) {
  console.log("Today is a warm day");
} else {
  console.log("Today is a cold day");
}

//Ternary Operator
//======================
temperature > 25
  ? console.log("Today is a warm day")
  : console.log("Today is a cold day");

let feelTemp = temperature >= 25 ? "warm" : "cool";
console.log(`Today is a ${feelTemp} day`);

//More Examples
//=============

let cost = 2000;
let discount = cost < 1000 ? 0 : 10;
let afterDiscount = cost - cost * (discount / 100);
console.log(`Original Cost: ${cost}`);
console.log(`After Discount Cost: ${afterDiscount}`);
