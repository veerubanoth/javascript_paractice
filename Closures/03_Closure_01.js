function outer() {
  let counter = 0;
  function inner() {
    counter++;
    console.log(counter);
  }
  inner();
}
outer();
