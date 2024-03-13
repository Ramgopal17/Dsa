let str="Yellowish red Orange black"
let res=[]
let arr=str.split(" ")
arr.sort((a,b)=>a.length-b.length)
console.log(arr)