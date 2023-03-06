function functionOne() {
  return "Hi From Function One";
}
function functionTwo(cb) {
  setTimeout(function () {
    cb("Hi From Function Two");
  }, 2000);
}
functionTwo((out)=>{console.log(out)});

function functionThree() {
  return "Hi From Function Three";
}

console.log(functionOne());
console.log(functionThree());
