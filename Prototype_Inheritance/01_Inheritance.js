function Person() { }
Person.prototype.talk = function () {
   return 'talking';
}
const me = new Person();
console.log(me);