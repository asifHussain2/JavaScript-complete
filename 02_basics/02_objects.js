// singleton 
//Object.create


const mySym = Symbol("key1");

// object literals
const JsUser = {
    [mySym]:"mySymKey", //alwasy use Symbol as key like this
    name:"Asif",
    age: 23,
    location:"Karachi",
    email:"asif@gmail.com",
    isLoggedIn:false,
    "last Login Days":["Monday","Saturday"]
}

// console.log(JsUser.name)//one way to access value
// console.log(JsUser["last Login Days"]);//another for long names that have spaces
// console.log(JsUser[mySym]); //always call values of symbol key in object like this in square brackets without quotations

JsUser.email = "asifkhatian@gmail.com"; //change value
// Object.freeze(JsUser); //it will not let you change values in object
JsUser.email="hah@gmail.com";

// console.log(JsUser)

JsUser.greeting = function(){
    console.log(`Hello ${this.name}`);
}

console.log(JsUser.greeting())

