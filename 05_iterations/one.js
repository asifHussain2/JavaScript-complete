// for loop
for(let i=0;i<5;i++){
    // console.log(i);
}

// nested loop

for(let i=1; i<=5;i++){
    // console.log(`Outer loop value: ${i}`)
    for(let j=1;j<=5;j++){
        // console.log(`Inner loop value: ${j}`)
        // console.log(i + '*' + j + "="+(i*j))
    }
}


// const arr = ["Superman","Spiderman","Batman"];
// for(let index=0;index<arr.length;index++){
//     console.log(arr[index])
// }


//break and continue

for(let i=1;i<=20;i++){
    if(i==5){
        console.log(`Detected 5`);
        // break;
        continue;
    }
    console.log(`Value of i is ${i}`)
}