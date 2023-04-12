var eich = {
   id: 1,
   name: "Brendan"
};
console.log(eich.id, eich.name);
eich.age = 25;
console.log(eich);
delete eich.age;
console.log(eich);

//# Object literal
var newEich = {};//! Empty  Object(dictionary)
console.log(newEich);

//^ Normally hashtable (dictionaries) -> dic["key"] = value;
// newEich["id"] = 1; //* Hashtable notation;
newEich.id = 1; //* Object property notation (Dotnotation);
// newEich.401 = 123123 //! Not a normal identifier
//newEich.en-us = "English"//! It doesn't Work
newEich["en-us"] = "English"

newEich[401] = 123123;
console.log(newEich);

