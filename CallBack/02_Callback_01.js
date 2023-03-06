// funtion 
function greet(name, callback) {
  console.log(`hi ${name}`);
  callback();
}

//~> Callback Function 
function callMe(){
    console.log('I am callback function');
}

// passing function as an argument 
greet('Jhon', callMe);



