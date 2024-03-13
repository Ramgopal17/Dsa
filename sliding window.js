
// brute force method
let arr=[16,46,7,8,54,45,67,23,67,98,45]
let k=3

let max=-Infinity
for(i=0;i<arr.length;i++){
    let sum=0
    for(j=i;j<i+k;j++){
        sum=sum+arr[j]
        if(sum>max){
            max=sum
        }
    }
   
}
console.log(max)


//sliding window optimum solution



// let arr=[16,46,7,8,54,45,67,23,67,98,45]
// let k=3
// let sum=0
// let max=-Infinity
// for(let i=0;i<k;i++){
// sum=sum+arr[i]
// }
// for(j=k;j<arr.length;j++){
//     sum=sum+arr[j]-arr[j-k]
//     if(sum>max){
//         max=sum
//     }
// }
// console.log(max)




//  window method using on strings

// let str="hellothere"
// function sub(str){
// let start=0
// let maxWindowSize=1
// let map={}
// for(j=0;j<str.length;j++){
//     if(map[str[j]]!=undefined && map[str[j]]>=0){
//     start=Math.max(start,map[str[j]]+1)
//     }
//     map[str[j]]=j
//     maxWindowSize=Math.max(maxWindowSize,j-start+1)
// }
// console.log(maxWindowSize);
// }

// sub(str)

