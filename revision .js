// let arr=[2,7,8,11,13,15]
// function twoSum(arr){
//     let sum=0
//     let l=0
//     let r=arr.length-1
//     while(l<r){
//         sum=arr[l]+arr[r]
//         if(sum==9){
//             return [l,r]
//         }else if( sum>9){
//             r--
//         }else if(sum<9){
//             l++
//         }
//     }
// }

// const { isNumber } = require("lodash");

// let a=twoSum(arr)
// console.log(a)

// reverse a string using  two pointer method

// let s="the sky is blue"
// let str=s.split(" ")
// function reverse(str){
//     let l=0
//     let r=str.length-1
// while(l<r){
//     temp=str[l]
//     str[l]=str[r]
//     str[r]=temp
//     l++
//     r--
// }
// return str.join(" ")
// }

// let a=reverse(str)
// console.log(a)

//  count duplicate using two pointer

// nums = [0,0,1,1,1,2,2,3,3,4]

// function removeDuplicate (nums){
//     let i=0
//     for(j=1;j<nums.length;j++){
//         if(nums[i]!=nums[j]){
//             i++
//         }
//         nums[i]=nums[j]
//     }
//     return i+1
    
// }

// let a=removeDuplicate(nums)
// console.log(a)

// let arr=[1,2,3,1,4,2,5,6,7,8]
// function count(arr){
//     let map={}
//     for(i of arr){
//         map[i]=(map[i]||0)+1

//     }
//     let count=0
//     for( key in map){
//         if(map[key]==1){
//             count++
//         }
//     }
//     return count
// }

// let a=count(arr)
// console.log(a)

// max  sum in subarray of size k

// let arr=[16,45,7,8,54,45,67,23,67,98,45]

// function maxSubarr(arr,k){
// max=-Infinity
// for(i=0;i<arr.length;i++){
//     let sum=0
//     for(j=0;j<i+k;j++){
//         sum=sum+arr[j]
    
//     if(sum>max){
//         max=sum
//     }
// }
    
// }
// return max
// }

// let a=maxSubarr(arr,3)
// console.log(a);


// // optimize solution

// function maxSub(arr,k){
//     let sum=0
 
//     for(i=0;i<k;i++){
//         sum=sum+arr[i]
//     }

//     let max=-Infinity
//     for(j=k;j<arr.length;j++){
//         sum=sum+arr[j]-arr[j-k]
    
//     if(sum>max){
//         max=sum
//     }
// }
//     return max
// }

// let b=maxSub(arr,3)
// console.log(b);

// sliding window maximum 

// arr=[5,3,4,7,2,1,9,3,4,6]
// function maxInWindow(arr,k){
//     let max=-Infinity
// for(let i=0;i<arr.length;i++){
   
//     for(j=i;j<i+k;j++){
//         if(arr[i]>max){
//             max=arr[i]
//         }
     
//     }

// }
// return max
// }

// let a=maxInWindow(arr,3)
// console.log(a);

// function maxInWindow(arr,k){
//     let max=-Infinity
//     for(i=0;i<k;i++){
//         if(arr[i]>max){
//             max=arr[i]
//         }
//     }
//     let res=[]
//     for(j=k;j<arr.length;j++){
//         // if(arr[j]>max){
//         //     max=arr[j]
//         //     res.push(max)
//         // }

//         max=Math.max(arr[j],max)
//         res.push(max)
//     }
//     return res
// }

// let a= maxInWindow(arr,3)
// console.log(a);


// function maxInWindow(arr,k){
//     let min=Infinity
//     for(i=0;i<k;i++){
//         if(arr[i]<min){
//             min=arr[i]
//         }
//     }
//     let res=[]
//     for(j=k;j<arr.length;j++){
//         // if(arr[j]<min){
//         //     min=arr[j]
//         //     res.push(min)
//         // }
//         min=Math.min(arr[j],min)
//         res.push(min)
//     }
//     return res
// }
// let arr=[12, -1, -7, 8, -15, 30, 16, 28]
// let a= maxInWindow(arr,3)
// console.log(a);


// function reverseArray(arr,left,right){
//     while(left<right){
//         let temp=arr[left]
//         arr[left]=arr[right]
//         arr[right]=temp
//         left++
//         right--
//     }
//     return arr
// }

// function rotate(arr,k){
//     reverseArray(arr,0,arr.length-1)
//     reverseArray(arr,0,k-1)
//     reverseArray(arr,k,arr.length-1)

//     return arr
// }

// let arr=[1,2,3,4,5,6,7]
// let a=rotate(arr,3)
// console.log(a)


// merge two sorted array 
// let arr1=[1,3,5,7,9]
// let arr2=[2,4,6,8]

// function merge(arr1,arr2){
//     let i=0
//     let j=0
//     res=[]
//     while(i<arr1.length && j<arr2.length){
//         if(arr1[i]<arr2[j]){
//             res.push(arr1[i])
//             i++
//         }else{
//             res.push(arr2[j])
//             j++
//         }

//     }
//     while(i<arr1.length){
//         res.push(arr1[i])
//         i++
//     }
// while(j<arr2.length){
//     res.push(arr2[j])
//     j++
// }
// return res
// }

// let a= merge(arr1,arr2)
// console.log(a)

// find target index after when arr is sorted

// let arr=[0,1,6,7,5,2,4,9,8,3]
// let k=4

// function searchIndex(arr,k){
// let count=0
// for(i=0;i<arr.length;i++){
//     if(arr[i]<k){
//         count++
//     }
   
// }
// return count
// }

// let a=searchIndex(arr,k)
// console.log(a)

// function isPalindrome(str){

//     let l=0
//     r=str.length-1
//     while(l<r){
//         if(str[l]!=str[r]){
//             return false

//         }
//         l++
//         r--
        
//     }
//     return true
// }

// s="level"
// str=s.split("")

// let a=isPalindrome(str)
// console.log(a)

// function countDown(n){
//     if(n==0){
//         return 0
//     }
    
//     n--
//     countDown(n)
//     console.log(n)
// }

// let a=countDown(7)
// console.log(a)

// function sumRange(n){
//     if(n==0){
//         return 0
//     }
//     return n+sumRange(n-1)
// }

// let a=sumRange(10)
// console.log(a);


// let arr=[2,4,3,5,7,8,4]
// function product(arr){
//   if(arr.length==0){
//     return 1
//   }
//     return arr[0]*product(arr.splice(1))
// }

// let a=product(arr,7)
// console.log(a);

// function pow(b,exp){
//     if( exp==0){
//         return 1
//     }
//     return b*pow(b,exp-1)
// }

// let a=pow(2,5)
// console.log(a);


// function fib(n){
//     if(n==0){
//         return 0
//     }
//     if(n==1||n==2){
//         return 1

//     }
//     return fib(n-1)+fib(n-2)
// }

// let a=fib(4)
// console.log(a);

// let arr=["hey","hello","hai"]

// function capitalize(arr){
// if(arr.length==0){
//     return []
// }
// let res=[]

//     let s=arr[0][0].toUpperCase()+arr[0].slice(1)
//     res.push(s)

// return res.concat(capitalize(arr.slice(1)))
// }

// let a=capitalize(arr)
// console.log(a);
// let input="123"
//   function isValid(input=""){
//   let  isNumber=true
//     for(i=0;i<input.length;i++){
//         if(input[i]>="0" && input[i]<="9"){
//             continue

//         }else{
//             isNumber=false
//             break;
//         }
//     }
//     return isNumber
//   }

//   let a=isValid(input)
//   console.log(a)


// binary serach
// let arr=[1,2,3,4,5,6,7,8]
// find=7
// function Binaryserach(arr){
//     let s=0
//     let e=arr.length-1

//     while(s<=e){
//     let mid=Math.floor((s+e)/2)
//     if(arr[mid]==find){
//         return mid
//     }else if(arr[mid]<find){
//         s=mid+1

//     }else{
//         e=mid-1
//     }
//     }
//     return -1
// }
// let a=Binaryserach(arr)
// console.log(a)


// function sqrt(nums){
//     let s=0
//     e=nums
//     let ans=-1
//     while(s<=e){
//     mid=Math.floor((s+e)/2)
//  let square=mid*mid
//  if(square==nums){
//     return mid
//  }else if(square<nums){
//     ans=mid
//     s=mid+1
//  }else{
//     e=mid
//  }


// }
// return ans
// }
// let a=sqrt(16)
// console.log(a)
// nums= [5,7,7,8,8,10]
// target =8
// function searchRange(nums,target){
//     return [firstOccurence(nums,target),lastOccurence(nums,target)]

// }

// function firstOccurence(nums,target){
//     let l=0
//     let r=nums.length-1
//     let fi=-1
//     mid=Math.floor((l+r)/2)
//     while(l<=r){
//     if(target==nums[mid]){
//       fi=mid
//       r=mid-1
//     }else if(target<nums[mid]){
//         r=mid-1
//     }else{
//         l=mid+1
//     }
   
// }
// return fi
// }
// function lastOccurence(nums,target){
//     let l=0
//     r=nums.length-1
//     let li=-1
//     mid=Math.floor((l+r)/2)
//     if(target==nums[mid]){
//    li=mid
//    left=mid+1
//     }else if(target<nums[mid]){
//         li=mid
//         right=mid-1
//     }else{
//         left=mid+1
//     }
//         return li
//     }
// let a=searchRange(nums,target)
// console.log(a)


function binary(n){
let ans=0
    let i=0
    while(n!=0){
        bit= n & 1

        ans=bit*Math.pow(10,i)+ans
    n=n>>1
    i++
    }
    return ans

}

let a=binary(5)
console.log(a);