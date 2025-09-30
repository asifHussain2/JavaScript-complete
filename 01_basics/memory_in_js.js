//memory management
//Stack memory used in Primitive dataTypes , Heap is used in (Non-Primitive dataTypes)


//Stack memory
let myName = "Asif Hussain"
let anotherName = myName;
anotherName = "Sohail";

console.log(myName);
console.log(anotherName);


//Heap memory

let userOne ={
    email:"user@gmail.com",
    upi:"user@ybl"
}

let userTwo = userOne;

userTwo.email = "userTwo@gmail.com";

console.log("userOne:",userOne);
console.log("userTwo:",userTwo);



