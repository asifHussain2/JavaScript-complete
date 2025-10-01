// var c =300;
let a =300;

if(true){
    
let a =10;
const b=20;
// console.log(a)
// var c = 30;
}

// console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const username = "Asif";

    function two(){
        const website = "youtube";
        console.log(username);
    }
    // console.log(website);
    two();

}
// one();


if(true){
    const username = "Asif";
    if(username){
        const website = " youtube"
        // console.log(username+website);
    }
    // console.log(website) // not in scope
}

// console.log(username); // not in scope


// interesting concept


console.log(addOne(5));

//function
function addOne(num){
    return num+1;
}


//expression
var addTwo = function(num){ 
    return num+2;
}

console.log(addTwo(5));