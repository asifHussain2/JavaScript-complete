// Immediately Invoked Function Expressions (IIFE)

(function dbConnect(){
    console.log("DB connected")
})();

((dbName)=>{
    console.log(`${dbName} db connected`)
})("asif")