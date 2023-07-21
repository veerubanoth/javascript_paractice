//~> 1. Arthmetic Operators
let x;
x = 5 + 5;
x = 5 - 5;
x = 5 * 5;
x = 5 / 5;
x = 5 % 5;
console.log(x);

//~# Concatenation 
x = "Hello" + " Word";
console.log(x);

//~% Exponent
x = 2 ** 3;

//~^ Increment
x = 1;
x = x + 1;
x++;
//~* Decrement
x = 1;
x = x - 1;
x--;


//~> 2.Assignment Operators
x = 10;
x += 5;
x -= 5;
x *= 5;
x /= 5;
x %= 5;
x **= 5;

//~> 2.Comparision  Operators
x = 2 == 2; //# evaluating expression 
x = 2 == "2";//~* True
//# Here evaluate the value only, Not the type. 
x = 2 === "2";//~! False
//# Triple equal not only evaluates the value, but it evaluates the type as well. 

x = 2 != 2;//~! False
x = 2 != "2";//~* True
x = 2 !== 2;//~! False
x = 10 > 5
x = 10 < 5
x = 10 >= 5
x = 10 <= 5