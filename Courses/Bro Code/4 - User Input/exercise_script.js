let username;

document.getElementById('mybutton').onclick = function(){
    username = document.getElementById('myinput').value;
    console.log(username);

    document.getElementById('mylabel').innerHTML = "Hello, " + username;
}