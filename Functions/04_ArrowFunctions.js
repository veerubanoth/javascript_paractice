
//~! Normal Functions 
const areaOfRect = function (l, w) {
   return Number(l) * Number(w);
}
//~% Arrow Function
const AreaOfRect = () => Number(l) * Number(w);

const aoR = areaOfRect(20, 30);
const arrowFunction = areaOfRect(20, 50);

console.log(`Normal Function Area of Rect is :${aoR} `);
console.log(`Arrow Function Area of Rect is :${arrowFunction} `);

//~^ Arrow Function which returns objects

const createUser = (user, age, isAdmin) => ({
   user: user,
   age: age,
   isAdmin, // Shorthand Notation
});

let jhon = createUser('Veeru', 20, true);
console.log(jhon);



