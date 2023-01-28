function longRun(ms) {
   const start = new Date;
   while (new Date - start < ms);
   console.log("just did longRun");
}

function doLater() {
   // setTimeout will not start untill we finish our function
   setTimeout(longRun, 2000, 1000);
}

doLater();
console.log("Program Ends");