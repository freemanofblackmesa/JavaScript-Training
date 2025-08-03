/* A variable is a container for storing data
A variable behves as if it was the value that is contains

Two steps:
1. Declaration (var, let, const)
2. Assignment ( x = 100)
3. There are: 
    - Numbers
    - Strings
    - Booleans
*/

/* ================================ Number Variables ================================== */

// let age = 25;
// let price = 10.99;
// let gpa = 2.1;


// console.log(`You are ${age} years old`);
// console.log(typeof age);
// console.log(`The price is ${price}`);
// console.log(typeof price);
// console.log(`Your gpa is ${gpa}`);
// console.log(typeof gpa);

/* ================================ Strings Variables ================================= */

// let firstName = "Bro";
// let favoriteFood = "Pizza"
// let email = "Bro123@Gmail.com"

// console.log(`Your name is ${firstName}`);
// console.log(typeof firstName);
// console.log(`You like ${favoriteFood}`);
// console.log(typeof favoriteFood);
// console.log(`Your email is ${email}`);
// console.log(typeof email);

/* ================================ Booleans Variables ================================ */

// let online = false;
// let forSale = true;
// let isStudent = true;

// console.log(`Bro is online: ${online}`);
// console.log(typeof online);
// console.log(`Is this car for sale: ${forSale}`);
// console.log(typeof forSale);
// console.log(`Enrolled: ${isStudent}`);
// console.log(typeof isStudent);

/* ================================ All In One Example =================================== */

let fullName = "Bro Code"; //strings
let age = 21; //numbers
let student = false; //booleans

console.log("Hello", fullName);
console.log("You are", age, "years old!");
console.log("It is", student,"that", fullName,"is a student.");

// .textContent is to display the code on a web page
document.getElementById("p1").textContent = "Hello, " + fullName;
document.getElementById("p2").textContent = "You are " + age + " years old";
document.getElementById("p3").textContent = "Enrolled: " + student;
