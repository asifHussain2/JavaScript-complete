// for of
const array = ["Spiderman","Superman","Batman"];

// for of select element values
for (const element of array) {
    console.log(element)
}

// for in select index of array
for(const element in array){
    console.log(element)
}

// string for of loop
const greetings = "Hello World";
for(const greet of greetings){
    console.log(greet)
}

// Maps
const map = new Map();
map.set('PK',"Pakistan")
map.set('IN',"India")
map.set('FR',"France")

// for(const key of map.keys()){
//     console.log(map.get(key));
// }

for(const [key,value] of map){
    console.log(key,'=>',value)
}


