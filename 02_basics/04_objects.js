// const tinderUser = new Object(); //singleton Object
const tinderUser={};
tinderUser.id="123abc";
tinderUser.name="Asif";
tinderUser.isLoggedIn=false;

// console.log(tinderUser);

const regularUser = {
    email:"some@gmail.com",
    fullName:{
        userFullName:{
            firstName:"Asif",
            lastName:"Hussain"
        }
    }
}

// console.log(regularUser.fullName.userFullName.firstName)

const obj1 = {
    1:"a",
    2:"b"
}
const obj2 = {
    3:"a",
    4:"b"
}

const obj3 = {...obj1,...obj2};//one way
const obj4 = Object.assign({},obj1,obj2);// second way

// console.log(obj3)
// console.log(obj4)


const users = [
    {
        id:1,
        email:"a@gmail.com"
    },
     {
        id:2,
        email:"a@gmail.com"
    },
     {
        id:3,
        email:"a@gmail.com"
    },

]

users[1].email
console.log(tinderUser)
console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))
console.log(tinderUser.hasOwnProperty("name"))


//destructuring
const course ={
    courseName: "JavaScript",
    price:"999",
    courseInstructor: "Asif"
}

const {courseName:coursename,price,courseInstructor}=course;
console.log(coursename);
