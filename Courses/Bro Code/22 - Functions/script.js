/* function = A section of reusable code. Declare code once, use it whenever you want.
Call the function to execute that code. */

/* ===================================== First Example =============================== */

function happyBirthday(username, age){
    console.log(`Happy birthday to you!`);
    console.log(`Happy birthday to you!`);
    console.log(`Happy birthday dear, ${username}`);
    console.log(`Happy birthday to you!`);
    console.log(`You are ${age} years old!`);
}

happyBirthday("BroCode", 25);

/* ==================================== Second Examples =============================== */
/* =========================== Return Keyword ========================= */

function add(x, y){
    return x + y;
}
console.log(add(2, 3))

function subtract(x, y){
    return x - y;
}
console.log(subtract(2, 3))

function multiply(x, y){
    return x * y;
}
console.log(multiply(2, 3))

function divide(x, y){
    return x / y;
}
console.log(divide(2, 3))

/* ========================= Even/Odd (True/False) ========================= */

function isEven(number){

    if(number % 2 === 0){
        return true;
    }
    else{
        return false;
    }
}

/* or */

function isEven(number){

    return number % 2 === 0 ? true : false;
}
console.log(isEven())


function isValidEmail(email){
    
    return email.includes("@") ? true : false;
}
console.log(isValidEmail("Bro@fake.com"));