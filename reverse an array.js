// function reverse(arr){
//     let i=0
//     let j= arr.length-1
//     while(i<j){
//         arr[i]=arr[i]+arr[j]
//         arr[j]=arr[i]-arr[j]
//         arr[i]=arr[i]-arr[j]
//         i++
//         j--
//     }
//     return arr
// }
// let arr=[1,2,3,,4,5]

// let a = reverse(arr)
// console.log(a)


let arr=[-1,-6,-3,-4,-3,-4,5,2,7,7,4,5,7]

let l=0
let r=arr.length-1

while(l<r){
    if(arr[l]<0){
        l++
    }else if(arr[r]>0){
        r--
    }else{
        let temp=arr[l]
        arr[l]=arr[r]
        arr[r]=temp
    }
}

console.log(arr);