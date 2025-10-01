// if statement
const isUserLoggedIn = true;
const temperature = 41;
// comparison operators
// <, >, <=, >=, ==, !=, ===,!==

// if(temperature<50){
// console.log("Temperature is less than 50")
// }
// else{
//     console.log("Temperature is greater than 50")
// }


// const score = 200;
// if(score>100){
//     const power = "fly";
//     console.log(`User Power : ${power}`)
// }

// const balance = 1000;

// if(balance>500) console.log("test");

// if(balance < 500){
//     console.log("less than 500")
// }
// else if(balance <750){
//     console.log("less than 750")
// }
// else if(balance < 900){
//     console.log("less than 900")
// }
// else{
//     console.log("less than 1200")
// }


const userLoggenIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

if(userLoggenIn && debitCard){
    console.log("Allowed to buy courses")
}

if(loggedInFromEmail || loggedInFromGoogle){
    console.log("User logged in")
}
