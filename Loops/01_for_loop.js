//~> Running statements repeatedly.
//~> Iterative execution of task is often implemented when dealing with data.

//~# for       - Loops through a block of code a number of times.
//~# for/in    - Loops through the properties of an object.
//~# for/of    - Loops through the values of an iterable object.
//~# while     - loops through a block of code while a specified condition is true.
//~# do/while  - Also loops through a block of code while a specified condition is true.

//~* Loops are programming constructs allowing us to iteratively execute code based on iterations,
//~* or the number of elements in an array, or an object to conditional iteration.

//~!<====LOOPS CAN HAVE 3 FEATURES======>
//~^ Counter: Keeps a acount of the iteration,	Executes once upon entering the loop.
//~# Conditon: Decides when to terminate the loop.	Checked before every loop iteration. If false, the loop stops.
//~> Iterator: Increments the loops count. Executes after the body on each iteration. 

//~% For Loop
for (let x = 1; x <= 12; x++) {
   console.log(`${x}`);

}