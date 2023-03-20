//~# It allows us to look over properties rather than values.
//~# It can be used with objects to loop over it's proterty name that can be used to fetch vlues.
//~# It can also be used with arrays but is strictly advised against.
//~# - because it does not honour the order or elements, which is paramount for arrays.

const user = {
   id: 2,
   name: 'Dennis McKellan',
   age: 35,
   profession: 'Cardiologist',
};

for (const prop in user) {
   console.log(prop);
   console.log(user[prop]);

}


//~! Strictly avoid using for-in loop when working with arrays
//~! as it does not guarantee the order of iteration of element. 

const colors = ["red", "green", "blue"];
for (const index in colors) {
   console.log(colors[index]);
}