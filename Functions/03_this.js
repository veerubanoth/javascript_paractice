// 'use strict' //~! No globals allowed

//~! THIS in Global Scope
// console.log(this);
gfn = function () {
   this.count = 1;
   console.log(this.count);
}

function lfn() {
   this.count++;
   console.log(this.count);//~> Outer functioins, 'this' points to global ('this' in functions outside objects)
};

var vfn = function () {
   this.count += 2;
   console.log(this.count);
}

gfn();
lfn();
vfn();

//~* THIS inside function (methods) & ( bind, call, apply)
//~% The 'this' keyword points to the object allowing us to access
//~% - object's properties & values when the function is part of an object.
let user = {
   name: 'Jhon',
   age: 30,
   sayHi: function () {
      console.log(this.name); //* The value of this will be user
   }
}
user.sayHi();
//~> Technically possible to access properties of an Object
console.log(user.age);


gfn = function () {
   console.log(`gfn ${this}`)
}
var vfn = function () {
   console.log(`vfn ${this}`)

}
function vfn() {
   console.log(`lfn ${this}`)
}

var person = {
   name: 'veeru',
   age: 36,
   print: function () { }
}



//~! THIS inside Constructor functions
//~! THIS inside callback functions
//~! THIS inside arrow functions

