// let arr=[2,4,5,-3,9,2,6,-7]

// function sum(arr){
//     let sum=0
//     let max=0
//     for(i=0;i<arr.length;i++){
//         sum+=arr[i]
//         if(sum>max){
//             max=sum
//         }
//         if(sum<0){
//             sum=0
//         }
//     }
//     return sum
// }

// let a= sum(arr)
// console.log(a)

// majority element

let arr=[2,1,2,2,3,4,2,5,6,8]
function major(arr){
    let count=0
    let ans=0
    for(i=0;i<arr.length;i++){
    if(count==0){
        ans=arr[i]
    }
    if(ans=arr[i]){
        count++
    }else{
        count--
    }
}
    return ans
}

let a=major(arr)
console.log(a)