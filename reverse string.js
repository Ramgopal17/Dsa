// let str="hello"

// function reverse(str){
//     if(str.length<=1){
//         return str
//     }

//     return reverse(str.slice(1))+str[0]
// }
// console.log(reverse(str));

// pollindrome or not


// function isplr(str){
//     if(str.length<=1){
//         return true
//     }
//     if(str[0]!=str.slice(-1)){
//         return false
//     }
//     return isplr(str.slice(1,-1))
// }

// let a= isplr("refer")
// console.log(a)

function equilibrium(arr){
    let sum=0
    for(i=0;i<arr.length;i++){
        sum+=arr[i]
    }
    leftsum=0
    for(i=0;i<arr.length;i++){
        sum-=arr[i]
        leftsum+=arr[i]
        if(leftsum==sum){
            return true
        }
    }
    return -1
}

let arr=[1,2,3,4,5]
let a=equilibrium(arr)
console.log(a)