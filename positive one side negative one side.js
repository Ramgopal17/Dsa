

// // function random(arr){
// //     let result=[]
// //     for(i=0;i<arr.length;i++){
// //         if(arr[i]>0){
// //             result.push(arr[i])
// //         }
// //     }
// //     for(i=arr.length-1;i>=0;i--){
// //         if(arr[i]<0){
// //             result.push(arr[i])
// //         }
// //     }
// //     return result
// // }
// // let a=random(arr)
// // console.log(a)

// const { dropRight } = require("lodash")

// let arr=[5,-1,-4,2,6,8,-9]

// function moveNeg(arr){
//     let left=0
//     let right=0
//     while(right<arr.length){
//         if(arr[right]>=0){
//             right++
//         }else{
//             temp=arr[left]
//             arr[left]=arr[right]
//             arr[right]=temp
//             left++
//             right++

//         }
//     }
//     return arr
// }
// let a= moveNeg(arr)
// console.log(a);

