const decreaseBtn = document.getElementById('decreasebtn');
const resetBtn = document.getElementById('resetbtn');
const increaseBtn = document.getElementById('increasebtn');
const countlabel = document.getElementById('countlabel');
let count = 0;

increaseBtn.onclick = function(){
    // the "++" increases the count by 1
    count++;
    // "textContent" represents the change that has effect on "count"
    countlabel.textContent = count;
}

decreaseBtn.onclick = function(){
    count--;
    countlabel.textContent = count;
}

resetBtn.onclick = function(){
    count = 0;
    countlabel.textContent = count;
}