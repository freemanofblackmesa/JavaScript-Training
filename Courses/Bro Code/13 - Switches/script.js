/* SWITCH = can be an efficient replacement to many else if statements */

// let day = 1;

// if(day == 1){
//     console.log('It is Monday');
// }
// else if(day == 2){
//     console.log('It is Tuesday');
// }
// else if(day == 3){
//     console.log('It is Wedday');
// }
// else if(day == 4){
//     console.log('It is Thursday');
// }
// else if(day == 5){
//     console.log('It is Friday');
// }
// else if(day == 6){
//     console.log('It is Satday');
// }
// else if(day == 7){
//     console.log('It is Sunday');
// }
// else{
//     console.log(`${day} is not a day`);
// }

/* Alternative */

const day = 7; 

switch (day) {
    case 1:
        console.log("It is Monday");
        break;
    case 2:
        console.log("It is Tuesday");
        break;
    case 3:
        console.log("It is Wednesday");
        break;
    case 4:
        console.log("It is Thursday");
        break;
    case 5:
        console.log("It is Friday");
        break;
    case 6:
        console.log("It is Saturday");
        break;
    case 7:
        console.log("It is Sunday");
        break;
    default:
        console.log(`${day} is not a day`);
}