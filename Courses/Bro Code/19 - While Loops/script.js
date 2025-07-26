// while loop = repeat some code WHILE some condition is true

/* ==================================== First Example ================================= */

// let username = "";

// if(username === ""){
//     console.log(`You didn't enter your name`);
// }
// else{
//     console.log(`Hello ${username}`);
// }

/* ==================================== Second Example ================================ */

// let username = "";

// while(username === ""){
//     username = window.prompt('Enter your name');
// }

// console.log(`Hello ${username}`)

/* ==================================== Third Example ================================= */

// let username = "";

// while(username === "" || username === null){
//     username = window.prompt('Enter your name');
// }

// console.log(`Hello ${username}`)

/* =================================== Fourth Example ================================= */
/* There is a variation called the "Do While Loop" */

// let username;

// do{
// username = window.prompt('Enter your name');
// }while(username === "" || username === null)

// console.log(`Hello ${username}`)

/* =================================== Fifth Example ================================= */
/* the "Do While Loop" can be applied in this case as well */
/* if "loggedIn" is changed to True the program will still run */

let loggedIn = false;
let username;
let password;

do{
    username = window.prompt(`Enter your username`);
    password = window.prompt(`Enter your password`);

    if(username === "myUsername" && password === "myPassword"){
        loggedIn = true;
        console.log("You are logged in!");
    }
    else{
        console.log("Invalid credentials! Please try again");
    }
}while(!loggedIn)


// let loggedIn = false;
// let username;
// let password;

// while(!loggedIn){
//     username = window.prompt(`Enter your username`);
//     password = window.prompt(`Enter your password`);

//     if(username === "myUsername" && password === "myPassword"){
//         loggedIn = true;
//         console.log("You are logged in!");
//     }
//     else{
//         console.log("Invalid credentials! Please try again");
//     }
// }