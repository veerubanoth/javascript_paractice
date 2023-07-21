//~^ string conversion happens when we need the string from a value.
let value = true;
value = String(value);
// console.log(value);

//~^ Convert String to Number
let amount = "100";
amount = parseInt(amount);//^ Older way to do type converstion. 
//# Newer way to do type converstion 
amount = +amount;
//% Another way to do type conversion 
amount = Number(amount);
// console.log(amount, typeof amount);

//~^ Convert Number to String 
let change = 1000;
let changed = change.toString();
console.log(changed, typeof changed);

//~^ Convert String to decimal
let decimalValue = "99.5";
// NewDecimal = parseInt(decimalValue);
NewDecimal = parseFloat(decimalValue);
console.log(NewDecimal, typeof NewDecimal);


//~^ Convert Number to boolean
let booleanValue = 0;
let newBooleanValue = Boolean(booleanValue);
console.log(newBooleanValue, typeof newBooleanValue);


//~> NaN 
let newNumber = "hello";
newNumber = parseInt(newNumber);
console.log(newNumber); //~! NaN
console.log(Math.sqrt(-1)); //~! NaN
console.log(1 + NaN); //~! NaN
console.log("foo" * 3);//~! NaN
console.log(newNumber, typeof newNumber);//~! NaN number