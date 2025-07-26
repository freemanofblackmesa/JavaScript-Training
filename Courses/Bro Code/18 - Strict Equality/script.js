//   = assignment operator
//  == comparison operator (compare if values are equal)
//  != inequality operator
// === strict equality operator (compare if values & datatype are equal)
// !== strict inequality operator

/* ============================== First Example ================================= */

const Pi = 3.14;

if(Pi == "3.14"){
    console.log("That is Pi");
}
else{
    console.log("That is NOT Pi");
}

/* OR */

const Py = 3.14;

if(Py != "3.14"){
    console.log("That is NOT Pi");
}
else{
    console.log("That is Pi");
}

/* ============================== Second Example ================================ */
/* JS will show "This is NOT Pi" in both cases below, this is due to comparing the datatype as well (string compared to float)*/
const PI = 3.14;

if(PI === "3.14"){
    console.log("That is NOT Pi");
}
else{
    console.log("That is Pi");
}

/* OR */

const PY = 3.14;

if(PY !== "3.14"){
    console.log("That is NOT Pi");
}
else{
    console.log("That is Pi");
}