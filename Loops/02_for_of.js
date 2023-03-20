//~% It is used to loop data structures like {},"String",[]..... and access their values directly.
//~# for/of    - Loops through the values of an iterable object.
const users = [
   {
      id: 1,
      name: 'John Mockery',
      age: 31,
      profession: 'General Physician'
   },
   {
      id: 2,
      name: 'Dennis McKellan',
      age: 35,
      profession: 'Cardiologist'
   }
];

const introduceUser = (user) =>
   `${user.name} , ${user.age} , ${user.profession}`;

for (const user of users) {
   console.log(introduceUser(user));
}



//~> Example two                    

const averageOfNums = function () {
   let sum = 0;
   for (const argument of arguments) {
      sum += argument;
   }
   return sum / arguments.length;
};
console.log(averageOfNums(1, 2, 3));