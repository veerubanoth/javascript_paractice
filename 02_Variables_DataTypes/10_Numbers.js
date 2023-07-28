let x;

const num = new Number(50.1230);
// x = num.toString();
// x = num.toString().length;
x = num.toFixed(2);
x = num.toPrecision(3);

console.log(num, typeof num);
console.log(x);