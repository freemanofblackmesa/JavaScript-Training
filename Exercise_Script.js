const myLabel = document.getElementById('mylabel');
const decreaseBtn = document.getElementById('decreasebtn');
const resetBtn = document.getElementById('resetbtn');
const increaseBtn = document.getElementById('increasebtn');
let count = 0;

decreaseBtn.onclick = function(){
    count--;
    myLabel.innerHTML = count;
}
resetBtn.onclick = function(){
    count = 0;
    myLabel.innerHTML = count;
}
increaseBtn.onclick = function(){
    count++;
    myLabel.innerHTML = count;
}