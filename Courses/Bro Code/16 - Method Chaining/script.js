/* Method Chaining = Calling one method after another in one continuous line of code. */

let username = window.prompt("Enter your username: ");
/* write the name "broCode" without quotes */

/* ================================== NO METHOD CHAINING ============================== */

/* .trin() - is used to remove any white space (empty space) */
username = username.trim();
/* the following is used to select the first character and capitalize it */
let letter = username.charAt(0);
letter = letter.toUpperCase();

/* .slice(1) - slices everything else after the first character then turns them into lowercase */
let extraChars = username.slice(1);
extraChars = extraChars.toLowerCase();
/* rename all the above to "username" */
username = letter + extraChars;

console.log(username);

/* ==================================== METHOD CHAINING =============================== */

/* the line of code below is the "username = letter + extraChars" in the expanded form */
username = username.trim().charAt(0).toUpperCase() + username.trim().slice(1).toLowerCase();

console.log(username);