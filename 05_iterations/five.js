const coding = ["js","ruby","java","pyton","cpp"];


// coding.forEach((item)=>console.log(item))

// coding.forEach((item,index,arr)=>{
//     console.log(item,index,arr)
// })

const myCoding = [
    {
        languageName: "JavaScript",
        languageFileName:"js"
    },
    {
        languageName: "Java",
        languageFileName:"java"
    },
    {
        languageName: "Python",
        languageFileName:"py"
    }
]

myCoding.forEach((item)=>{
    console.log(item.languageName,item.languageFileName)
})