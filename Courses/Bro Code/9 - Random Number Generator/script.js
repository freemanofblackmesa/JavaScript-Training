/* "Math.floor" rounds down and "Math.random() * max" randomly generates from 1 to max 
the "+ min" is the minimum added*/

// const min = 50;
// const max = 100;

/* This makes the random number between 50 - 100 */
// let randomNum = Math.floor(Math.random() * (max - min)) + min;


// console.log(randomNum);

/* =================================================================================== */

/* The label id in the HTML file needs change for this line of code to workv*/

// const myButton = document.getElementById("mybutton");
// const myLabel = document.getElementById("mylabel");
// const min = 1;
// const max = 6;
// let randomNum;

// myButton.onclick = function(){
//     randomNum = Math.floor(Math.random() * max) + min;
//     myLabel.textContent = randomNum;
// }

/* =================================================================================== */

/* If the label id was made like the above lines of code, it should be edited */

const myButton = document.getElementById("mybutton");
const label1 = document.getElementById("label1");
const label2 = document.getElementById("label2");
const label3 = document.getElementById("label3");
const min = 1;
const max = 6;
let randomNum1;
let randomNum2;
let randomNum3;

myButton.onclick = function(){
    randomNum1 = Math.floor(Math.random() * max) + min;
    label1.textContent = randomNum1;
    randomNum2 = Math.floor(Math.random() * max) + min;
    label2.textContent = randomNum2;
    randomNum3 = Math.floor(Math.random() * max) + min;
    label3.textContent = randomNum3;
}