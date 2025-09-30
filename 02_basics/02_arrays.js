const marvel_heros = ["thor","Ironman","spiderman"];
const dc_heros = ["superman","flash","batman"];

// marvel_heros.push(dc_heros); // added dc_heros as element in marvel_heros array


// const allHeros=marvel_heros.concat(dc_heros);//it adds elements of dc_heros in marvel_heros but it returns another array so we have to save it in another variable
// console.log(allHeros);


const all_new_heros = [...marvel_heros,...dc_heros]; //spread operator
// console.log(all_new_heros)

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]];
const real_another_array = another_array.flat(Infinity);
console.log(real_another_array)


console.log(Array.isArray("Asif"))
console.log(Array.from("Asif"))
console.log(Array.from({name:"Asif"})) // interesting returning empty array

let score1= 100;
let score2=200;
let score3=300;
console.log(Array.of(score1,score2,score3));