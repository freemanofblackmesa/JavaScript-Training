/* A variable is a container for storing data
A variable behves as if it was the value that is contains

Two steps:
1. Declaration (var, let, const)
2. Assignment (= assignment operator)*/

let firstName = "Bro"; //strings
let age = 21; //numbers
let student = false; //booleans

console.log("Hello", firstName);
console.log("You are", age, "years old!");
console.log("It is", student,"that", firstName,"is a student.");

// This is to display the code on a web page
document.getElementById("p1").innerHTML = "Hello " + firstName;
document.getElementById("p2").innerHTML = "You are " + age + "years old";
document.getElementById("p3").innerHTML = "Enrolled: " + student;
