// Evalueates an expression and uses the outcome of that expression
// to match against a set of given conditions known as cases.
// if none are fount, then an optional default case can be put to use.
// The switch is extremely useful when handling a fixed set of choices.

let a = 70;
let b = 50;

let action = "ADD";

switch (action) {
  case "ADD": {
    let sum = a + b;
    console.log(`The sum of ${a} and ${b} is : ${sum}`);
    break;
  }
  case "SUBSTRACT": {
    let diff = a - b;
    console.log(`The sum of ${a} and ${b} is : ${diff}`);
    break;
  }

  case "MULTIPLY": {
    let multi = a * b;
    console.log(`The sum of ${a} and ${b} is : ${multi}`);
    break;
  }
  case "DIVIDE": {
    let div = a / b;
    console.log(`The sum of ${a} and ${b} is : ${div}`);
    break;
  }
  default: {
    console.log("action is not matching");
  }
}
//============================================================

const day = 6;

// let dayName;

switch (day) {
  case 0: {
    console.log("Sunday");
    break;
  }
  case 1: {
    console.log("Monday");
    break;
  }
  case 2: {
    console.log("Tuesday");
    break;
  }

  case 3: {
    console.log("Wednesday");
    break;
  }
  case 4: {
    console.log("Thursday");
    break;
  }
  case 5: {
    console.log("Friday");
    break;
  }
  case 6: {
    console.log("Saturday");
    break;
  }
}
//=========================================

let item = "kiwi";
let type;

switch (item) {
  case "apple":
  case "kiwi":
  case "banan":
  case "strawberry":
    type = "fruit";
    break;
  case "lettuce":
  case "potato":
  case "celery":
  case "eggplant":
    type = "veggies";
    break;
    default:{
        throw new Error('Unable to identify item...');
    }
}
console.log(`${item} is a type of ${type}`);
