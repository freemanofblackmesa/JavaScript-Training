/* variable scope = where a variable is recognized and accessible (local vs global) */

/* ===================================== Local Scope ==================================== */
/* Local Scope: a variable that is declare within a set of curly braces that variable is then only accesssible to anything within that set of curly braces. */
/* In this case the local scope is the first one to be used before moving on to the global scope */

let x = 3; // global scope

function1();

function function1(){
    let x = 1; // local scope
    console.log(x);
}

function function2(){
    let x = 2; // local scope
    console.log(x);
}

/* ===================================== Global Scope ==================================== */
/* Global Scope: is where a variable is declare outside of any functions, it's available throughtout the whole program. */
/* Any variable declared outside of a function has a global scope.
It is available throught the whole program a global variable is recognized and accessible from anywhere. ( NOT RECOMMENDED TO USE IN A LARGE SCALE PROGRAM DUE TO NAMING CONFLICTS )*/

let y = 3;

function1();
function2();

function function1(){
    console.log(y);
}

function function2(){
    console.log(y);
}
