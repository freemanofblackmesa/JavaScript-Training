/* logical operators =  used to combine or manipulate boolean values (true or false)
AND = &&, OR  = ||, NOT = ! */

/* True or True = True,
   True or False = True if one is True,
   False or False = False*/
/* True and True = True,
   True and False = False if one is False,
   False and False = False*/

/* ---------- Using AND = &&  ---------- */

const temp = -100;

if(temp > 0 && temp <= 30){
    console.log("The weather is GOOD");
}
else{
    console.log("The weather is BAD");
}

/* ---------- Using OR  = || ---------- */

const tempe = -250;

if(tempe <= 0 || tempe > 30){
    console.log("The weather is BAD");
}
else{
    console.log("The weather is GOOD");
}

/* ---------- Using NOT = ! ---------- */

const isSunny = true;

if(!isSunny){
    console.log("It is CLOUDY");
}
else{
    console.log("It is SUNNY");
}