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




//Operations

let value = 3;
let negValue = -value;
console.log(negValue)

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**2);
// console.log(2/2);
// console.log(2%3);

let str1 = "Hello";
let str2 = " Asif";
let str3 = str1+str2;
console.log(str3)

console.log("1" + 2);//12
console.log(1+"2"); //12
console.log("1"+2+2);//122
console.log(1+2+"2");//32

console.log(+true);
console.log(+"");

let no1,no2,no3;

no1=no2=no3=2+2;

let gameCounter = 100;
++gameCounter;
console.log(gameCounter)