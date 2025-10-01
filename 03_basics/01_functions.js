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

console.log(loginUserMessage("Asif"))

