/* string slicing = creating a substring from a portion of another string
To do so the following formula is taken "string.slice(start, end)" */

/* ================================== Example 1 ==================================== */

const fullName = "Bro Code";

/* to select the first and second name separately */

// let firstName = fullName.slice(0, 3);
// let lastName = fullName.slice(4, 8);
// console.log(firstName);
// console.log(lastName);

/* To select the first character only */

// let firstChar = fullName.slice(0, 1);
// let lastChar = fullName.slice(-1);
// console.log(firstChar);
// console.log(lastChar);

/* the last part helps to not count all the characters of a string if it is large */
/* the "+1" is used to exclude the whitespace before "Code"*/

// let firstName = fullName.slice(0, fullName.indexOf(" "));
// console.log(firstName);
// let lastName = fullName.slice(fullName.indexOf(" ") + 1);
// console.log(lastName);

/* ------------ EXAMPLE 2 ------------ */

// const email = "Bro1@gmail.com";

// let username = email.slice(0, email.indexOf("@"));
// let extension = email.slice(email.indexOf("@") + 1);

// console.log(username);
// console.log(extension);