const Roll = document.getElementById('roll');
const Reset = document.getElementById('reset');
const Label1 = document.getElementById('label1');
const Label2 = document.getElementById('label2');
const Label3 = document.getElementById('label3');
let randomNum1;
let randomNum2;
let randomNum3;
let min = 1;
let max = 6;
let reset = 0;

Roll.onclick = function(){
    randomNum1 = Math.floor(Math.random() * max) + min;
    Label1.innerHTML = randomNum1;
    randomNum2 = Math.floor(Math.random() * max) + min;
    Label2.innerHTML = randomNum2;
    randomNum3 = Math.floor(Math.random() * max) + min;
    Label3.innerHTML = randomNum3;
}
Reset.onclick = function(){
    randomNum1 = reset;
    Label1.innerHTML = randomNum1;
    randomNum2 = reset;
    Label2.innerHTML = randomNum2;
    randomNum3 = reset;
    Label3.innerHTML = randomNum3;
}