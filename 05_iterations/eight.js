const myNums = [1,2,3];
const sum = myNums.reduce((sum,item)=>sum+item,1);
console.log(sum)


const users = [
{name:"Asif",status:"success",amount:10000},
{name:"Ali",status:"failure",amount:11000},
{name:"Asif",status:"success",amount:12000},
]

const totalSuccessAmount = users.filter((item)=>item.status==="success").reduce((sum,item)=>sum+item.amount,0);

console.log(totalSuccessAmount)