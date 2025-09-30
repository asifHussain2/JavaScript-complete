//Dates
let myDate = new Date();
console.log(myDate.toString());
console.log(myDate.toISOString());
console.log(myDate.toDateString())
console.log(myDate.toLocaleString())
console.log(typeof myDate)

// let myCreateDate = new Date(2025,0,23,5,3);
// let myCreateDate = new Date(2025,0,23);
// let myCreateDate = new Date("2023-01-14");
let myCreateDate = new Date("01-14-2025");
// console.log(myCreateDate)
// console.log(myCreateDate.toDateString())

// let myTimeStamp = Date.now();
// console.log(myTimeStamp)
// console.log(myCreateDate.getTime())
// console.log(Math.floor(Date.now()/1000)) // in seconds


let newDate = new Date("01-24-2025");
console.log(newDate.getMonth()+1) // give jan month as 0 so +1 will help
console.log()

console.log(newDate.toLocaleString('default',{weekday:"long"}))