const name = "Asif";
const repoCount = 7;

// console.log(name+repoCount); dont use this

console.log(`Hello my name is ${name} and my total repositories are: ${repoCount}`)


//new method to declare string

let st1 = new String("Hello");

let str1 = "Hello";
let str2 = "Hello";
console.log(str1===str2);//compare memory

console.log(st1===str1); //compare memory but we we created another object of String using new keyword

console.log(st1[0])
console.log(str1.length);

console.log(str1.toUpperCase());

console.log(str1.charAt(1));
console.log(str1.indexOf("e"))

const newStr = str1.substring(0,4);
console.log(newStr)

const antoherString = str1.slice(-5,4);
console.log(antoherString)

const newStringOne = "   Asif    ";
console.log(newStringOne.trim());

const url = "https://asif.com/asif%20hussain";
console.log(url.replace("%20","-"))

console.log(url.includes("asif"))
const st = "Asif-Hussain-Khatian";
console.log(st.split("-"));