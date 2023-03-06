// When the value of the operand on the left is something like 0 or an empty string.
// You may not want these to be evaluated as false.
// In such cases, the nullish coalescing operator was create.

let quantity = 0;

console.log(`Quantity: ${quantity || "N/A"}`); // This locial OR operator consider 0 as false.
console.log(`Quantity: ${quantity ?? "N/A"}`);
// Null coalescing operator will return as 0 because it is not accepted as false. Neither will NaN or an empty string.

//Examples:
//========================

let products = [
  {
    name: "TV32Inch",
    cost: 2500,
    shipping: 0,
  },
  {
    name: "TV21Inch",
    cost: 10,
    shipping: 0,
  },
];

console.log(`${products[0].shipping || 2.5}`);
console.log(`${products[0].shipping ?? 2.5}`);
