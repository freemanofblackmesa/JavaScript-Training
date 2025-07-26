/* How to accept user input */

/* EASY WAY with a window prompt */

//let username = window.prompt("What's your name?");
//console.log(username);

/* DIFFICULT WAY HTML textbox */

let username;

document.getElementById("myButton").onclick = function(){
    
    username = document.getElementById("myText").value;
    console.log(username);

    /*you can change the name of the label with this */
    document.getElementById("myLabel").innerHTML = "Hello " + username;
}

/* THE CLEANER WAY */

// const myButton = document.getElementById('mybutton');
// const myText = document.getElementById('mytext');
// const myLabel = document.getElementById('mylabel');
// let username;

// myButton.onclick = function(){
//     username = myText.value;
//     console.log(username);

//     myLabel.innerHTML = "Hello, " + username;
// }