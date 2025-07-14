let firstname = "Bro";
let age = 21;
let student = false;

console.log(firstname);
console.log(age);
console.log(student);

document.getElementById('p1').innerHTML = "Hello, " + firstname + "!";
document.getElementById('p2').innerHTML = "You are " + age + " years old!";
document.getElementById('p3').innerHTML = "Enrolled: " + student;