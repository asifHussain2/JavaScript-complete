//array
const myArray = [0,1,2,3,4,5];//also allows multiple types of data

const heros = ["spiderman","batman"];
const myArr2 = new Array(1,2,3,4); // another method to create array
// console.log(myArray[0])

//Array methods
myArray.push(6); // add value at the end of array
myArray.push(7);
myArray.pop(); // remove last element, here is 7

myArray.unshift(9); //add value to the first index
myArray.shift(); //removed first elment from array

// console.log(myArray.includes(9)) // checks whether array has this elment or not
// console.log(myArray.indexOf(3)) // return index of element

// const newArr = myArray.join();// converts array to string
// console.log(myArray);
// console.log(newArr);
// console.log(typeof newArr);

//slice, splice
console.log("A ",myArray);
const myn1 = myArray.slice(1,3);
console.log(myn1);
console.log("B ",myArray)

const myn2 = myArray.splice(1,3);//also include end index that is 3 here and also remove this portion(1 to 3)indices from original array
console.log(myArray)
console.log(myn2);