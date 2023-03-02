//~! Scope refers to the context, the limits within which your variables and their values are visible & accessible.
//~! A topmost context known as global or window scope is provided by the browser when javascript executes in the browser.
//~! Variables created using var keyword at the top level endup in global namespace in web browsers.

var user ='veeru';//=> this is in the global scope, available everywhere

function sayHi(){
    var greeting ="This variable is in the function's scope";//=> Only available inside the sayHi() function.
    //~* lexically scoped variable inside a function. 

    function greet(){
        return `Also availble to all inner functions such `; //=> Can't be accessed from outsid the function
    }
}
//~! JS is lexically scoped language.
//~! LexicalScope simply refers to scope or context that's defined by the position of variable declaration.
//_____________________________________________________________________________________________________________

//~~> Variable Hoisting 
//----------------------
//~! Variable created using var are defined (hoisted) to the top of their scopes before anything else executes and are later assigned their values.

var user1;// Hoisted before anything else.
user1 = 'banoth';

function sayHello(){
    var greet; //Hoisted before anything else.
    greet = "later value Assigned" 
}

/* Variables are hoisted to the top and set to undefined, and then later assiggned their individual values. 
This is why if you try to access a variable before it is declared in your code, you get undefined because
the vaiable is there as it was hoisted however the statement which sets the vlues hasn't been executed yet.
*/

