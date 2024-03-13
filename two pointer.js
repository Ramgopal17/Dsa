// reverse a string using two pointer method

// s = "the sky is blue"
// let arr=s.split(" ")
// let left=0
// let right=arr.length-1

// while(left<right){
//     temp=arr[left]
//     arr[left]=arr[right]
//     arr[right]=temp

//     left++
//     right--
// }
// console.log(arr.join(" "))

//  remove duplicate from array using two pointer

let nums = [0,0,1,1,1,2,2,3,3,4]

function removeDuplicate(nums){
let i=0

for(let j=1;j<nums.length;j++){
    if(nums[i]!=nums[j]){
        i++
     } 
     nums[i]=nums[j]
        
    
}
return i+1

}
let a=removeDuplicate(nums)
console.log(a)


// max sum of subArray using kadane algo
// let nums = [-2, 1, -3, 4]
// function maxSubarray(nums){

// let sum=0
// let max=-Infinity

// for(i=0;i<nums.length;i++){
//     sum=sum+nums[i]

// if(sum>max){
//     max=sum
// }
// if(sum<0){
//     sum=0
// }
// }
// return max

// }

// let a=maxSubarray(nums)
// console.log(a)

// // majority element moores voting algo

// let  arr=[3, 3, 4, 2, 4, 4, 2, 4, 4]

// let count=0
// let ans=0

// for(j=1;j<arr.length;j++){
// if(arr[i]==ans){
//     count++
    
// }else{
//     count--
// }
// return ans
// }

// second largest

// let arr=[12,35,1,10,34,1]
// function secondLargest(arr){
// if(arr.length<2){
//     return false
// }
//   a=arr.sort()
// for(i=arr.length-2;i>=0;i--){
//     if(arr[i]!=arr[arr.length-1]){
//     return arr[i]
//     }
// }
// }
// let b=secondLargest(arr)
// console.log(b);