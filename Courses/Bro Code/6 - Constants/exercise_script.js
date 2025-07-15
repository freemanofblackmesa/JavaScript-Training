const pi = 3.14;
let radius;
let circumference;

radius = window.prompt("Enter radius of a circle");
radius = Number(radius);

circumference = 2 * pi * radius;
console.log("The circumference is:", circumference)