let arr = [1,2,3,4,5,6]

arr.forEach(function(item,index){
    arr[index]=item*item})

console.log(arr)


// let newArr = arr.map((ele)=>ele*ele)

// let evenArr = arr.filter((ele)=>ele%2===0)

// let sum = 0;
// for(let i=0; i<arr.length; i++){
//     sum += arr[i]
// }

let sum = arr.reduce((a,b)=>{
     b *=a;
     return b;
},1)

console.log(sum);