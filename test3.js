// var rotate = function(nums, k) {
//     if(nums.length<=1){
//         return nums
//     }
//     k=k%nums.length
//     rotateArray(nums,0,nums.length-1)
//     rotateArray(nums,0,k-1)
//     rotateArray(nums,k,nums.length-1)
//     return nums
// };

// function rotateArray(nums,left,right){

//     while(left<right){
//      let temp=nums[left]
//      nums[left]=nums[right]
//      nums[right]=temp
// left++
// right--
//     }
// return nums
// }

// nums=[-1]
// k=3
// let a=rotate(nums)
// console.log(a)

// // print leader in array

// let arr=[16,17,4,3,5,2]
// let n=arr.length
// for(i=n-1;i<)

// arr=[16,17,4,3,5,2]
// n=arr.length
// let res=[]
// for(i=n-1;i>=0;i--){
//     max=arr[n-1]
//     if(arr[i]>max){
//         max=arr[i]
// res.push(arr[i])
//     }
// }
// console.log(res)

// function count(n){
// if(n<=0){
//     return 
// }
// console.log(n)
// count(n-1)
// }

// count(5)

// function sum(n){
//     if(n==0){
//         return 0
//     }
//     return  n+sum(n-1)
// }
// let a=sum(10)
// console.log(a)


// function fib(n){
//     if(n==0){
//         return 0
//     }
//     if(n==1){
//         return 1
//     }

//     return fib(n-1)+fib(n-2)
// }
// let a=fib(10)
// console.log(a)


// function fibo(n){
//     let fib=[0,1]
//     for( var i=2;i<=n;i++){
//         fib[i]=fib[i-1]+fib[i-2]
//     }
//     return fib
// }

// let a=fibo(10)
// console.log(a)
// // 

// function rec(arr){
//     let s=0
//     let e=arr.length-1
//     return isRec(arr,s,e)
// }
// function isRec(arr,s,e){
//     if(s<=e){
//     temp=arr[s]
//     arr[s]=arr[e]
//     arr[e]=temp
// isRec(arr,s+1,e-1)

//     }
//     return arr
// }

// let arr=[1,2,3,4,5,6]
// let a=rec(arr)
// console.log(a)


function reve(str){
    if(str.length<=1){
        return str
    }
   return  reve(str.slice(1))+str[0]
}


let str="hello"
let a=reve(str)
console.log(a)