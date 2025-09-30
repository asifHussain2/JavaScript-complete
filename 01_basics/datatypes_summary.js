// Primitive DataTypes (call by value)
//7  types: String, Number, Boolean, null, undefined,Symbol,BigInt


const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null

//Symbol use to make value unique
const id = Symbol("123");
const id2= Symbol("123");
console.log(id===id2);

const bigNumber = 9n;
console.log(typeof bigNumber);



//Reference DataTypes (Non primitive: call by reference)
// Array, Objects,Functions

const heros = ["spiderman","batman","ironman"];//array

const obj = {
    name:"Asif",
    age:23
} // object

const myFunction = function(){
console.log("Hello World")
}

console.log("array type:",typeof heros);
console.log("object type:",typeof obj);
console.log("function type",typeof myFunction);
console.log("type of bigInt",typeof bigNumber)

// Javascript is dynamic in dataType assiging;

