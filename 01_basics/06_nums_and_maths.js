const score = 400;
const balance = new Number(100);

console.log(balance)
console.log(balance.toString())
console.log(balance.toFixed(2))

const otherNumber = 134.85353;
console.log(otherNumber.toPrecision(3))

const hundreads = 1000000;
console.log(hundreads.toLocaleString('en-PK'))


//Maths

console.log(Math);
console.log(Math.abs(-5));
console.log(Math.round(1.5));
console.log(Math.ceil(1.2));
console.log(Math.floor(1.8));
console.log(Math.min(4,3,2,1));
console.log(Math.max(1,2,3,4,5,6));

//random number from 10 to 20
const min =10;
const max = 20;

console.log(Math.floor(Math.random()*(max-min+1)+10));