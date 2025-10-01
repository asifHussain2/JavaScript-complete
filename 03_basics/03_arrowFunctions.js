const user ={
    username:"Asif",
    price:999,
    welcomeMessage:function(){
        console.log(`${this.username}, welcome to website`)
        console.log(this)
    }
}

// user.welcomeMessage()
// user.username="Sam";
// user.welcomeMessage();

// function any(){
//     let username="Asif"
//     console.log(this.username);// undefined
// }

// any();

// const any = ()=>{
//    let username = "Asif";
//    console.log(this)
// }

// any();

//explicit return
// const addTwo = (num1,num2)=>{
//     return num1+num2;
// }


const addTwo = (num1,num2)=>(num1+num2)
console.log(addTwo(3,5))


