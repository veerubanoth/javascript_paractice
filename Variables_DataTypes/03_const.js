// Variables declared using const are called "constants".
// They can't be reassigned.
// When a programmer is sure that a variable will never change, 
// they can declare it with const to guarantee and clearly communicate that fact to everyone.

const MYBIRTHDAY = '12-07-1985';

const Pi = 3.1412;
const VERSION =2.01;
const URI = '/API/v2/posts';

const ADMIN = {
    access:2,
    userId:'veeru123',
};
ADMIN.access = 3;
console.log(ADMIN);//{ access: 3, userId: 'veeru123' }

const COLORS = ['Red', 'Green', 'Blue'];
COLORS.push('Black');
console.log(COLORS);// [ 'Red', 'Green', 'Blue', 'Black' ]

// In the case of objects or arrays, you can mutate the contents but can't reassign constant to new object/arrays.
// Constants follow block/expression scope like let.
// Constants cannot be re-declared in the same scope.
// Constants are not hoisted.
