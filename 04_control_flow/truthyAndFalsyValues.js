const userEmail = "asif@gmail.com";


if(userEmail){
    console.log("User logged in")
}
else{
    console.log("Not logged in")
}


// Falsy Values
// false, 0,-0, BigInt 0n, "", null, undefined, NaN

// Truthy Values
// "0", 'false', " ", [], {}, function(){}


//how to check array empty or not
const arr = [];
if(arr.length===0){
    console.log("Array is empty")
}

// how to check object is empty or not
const obj = {};
if(Object.keys(obj).length===0){
    console.log("Object is empty");
}

//other interesting stuff
// false== 0   -> true
// false == '' -> true
// 0 == ''     -> true


// Nullish Coalescing Operator (??): null undefined
let val1;
// val1= 5 ?? 10;
val1 = null ?? undefined ?? 10 ?? 15; // if there is any value other than undefined or null than it will take first acceptable value
console.log(val1);


// Ternary Operator
// condition ? true statement : false statement
const iceTeaPrice =100;
iceTeaPrice >=80 ? console.log("greater than or equal to 80") : console.log("less than 80")