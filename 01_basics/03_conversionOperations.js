let score = "33";

console.log(typeof score);

let valueInNumber = Number(score);
console.log(typeof valueInNumber);

let num1 = 33;

let stringNumber = String(num1);
console.log(typeof stringNumber)

let stringNum2 = "33abc";
let numberStringNum2 = Number(stringNum2); //type changed to number but value is NaN
console.log(typeof stringNum2) //print number
console.log(numberStringNum2) // print NaN because it is not a number


let number = null;
let covertToNumber = Number(null);
console.log("Null to Number: ",covertToNumber);

let string1  = null;
let covertToString = String(string1);
console.log("null to string:",covertToString);

let bool1 = true;
console.log("bool to number:",Number(bool1));
console.log("bool to String:",String(bool1));

let n1 = 1;
console.log("1 to bool:",Boolean(n1));

let s1 = "";
console.log("empty string to bool:",Boolean(s1));
let s2 = "a";
console.log("string to bool:",Boolean(s2));

console.log("0 to boolean:",Boolean(0));
console.log("123 to boolean:",Boolean(123));

let d;
console.log("undefined to number:",Number(d))
console.log("undefined to String:",String(d))
console.log("undefined to boolean:",Boolean(d))