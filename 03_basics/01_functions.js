function sayMyName(){
    console.log("A");
    console.log("S");
    console.log("I");
    console.log("F");
}

// sayMyName();

//only prints result
// function addTwoNumbers(number1,number2){
//     console.log(number1+number2);
// } 

//returning value in function
function addTwoNumbers(number1,number2){
    return number1+number2;
}

const result = addTwoNumbers(3,5);

// console.log("Result:",result)

function loginUserMessage(username="Same"){
    if(!username){
        console.log("Please enter a username");
        return;
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Asif"))

function calculateCartPrice(val1,val2,...num1){
    return num1;
}

// console.log(calculateCartPrice(200,400,500));

const user = {
    username:"Asif",
    price:199
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}.`)
}


handleObject(user)

const myNewArray = [200,400,100,600];

function returnSecondValue(getArray){
    return getArray[1];
}

console.log(returnSecondValue(myNewArray))