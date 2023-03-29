//~% When the loop first runs it validates the condition as truthy before running the code in the block.
let counter = 0;
while (counter < 10) {
   console.log(counter);
   counter++;
   //~* if you do not increment or mutate the counter, 
   //~*the while loop runs endlessly & cause application to lock up and crash out.  
}
//~^ Never run a while loop untill you double check your condition & the counter incrementing logic.



