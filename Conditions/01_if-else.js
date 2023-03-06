// if-else statement helps you implement conditional branching of control based on a simple true or false condition.
// if the condition is true, then the block following the if statement will execute, otherwise the block following 
// the if staement will execute, otherwise the block following the else will be executed.  

let cost = 250;

if(cost<1000){
    console.log("No Discount");
}else{
    console.log("10% Discount")
}


let currentHour = new Date().getHours();

if(currentHour >= 0 && currentHour < 12){
    console.log('Good Morning');
} else{
    console.log('Good Day!');
}