const myLabel = document.getElementById('myLabel');
const decreasebtn = document.getElementById('decreasebtn');
const resetbtn = document.getElementById('resetbtn');
const increasebtn = document.getElementById('increasebtn');
let count = 0;

decreasebtn.onclick = function(){
    count = count - 1;
    myLabel.textContent = count;
}
resetbtn.onclick = function(){
    count = 0;
    myLabel.textContent = count;
}
increasebtn.onclick = function(){
    count = count + 1;
    myLabel.textContent = count;
}