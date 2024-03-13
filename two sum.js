// find index of pair existing in the arr
let nums=[2,7,11,15]
target=9
var twoSum = function(nums, target) {
    let s=new Set()
    for(i=0;i<nums.length;i++){
        curr=target-nums[i]
  if(s.has(curr)){
    return [curr,nums[i]]
  }else{
    s.add(nums[i])
  }
    }
};
let a=twoSum(nums,target)
console.log(a)

// ------two sum using two pointer- when array is sorted---------
// let arr=[2,7,11,15]
// target =9
// function sumPair(arr,target){
//     let left=0
//     let right=arr.length-1
//     while(left<right){
//         if(arr[left]+arr[right]==target){
//             return [arr[left],arr[right]]
//         }else if(arr[left]+arr[right]>target){
//             right--
//         }else {
//             left++
//         }
//     }
// }

// let a=sumPair(arr,target)
// console.log(a)


// ----------------------two sum whwn array is unsorted-----------------

// arr=[2,9,6,2,4,7,9,1,4,5]
// sum=8

// function twoSum(arr,sum){
//     let map=new Set()
//     let res=[]
//     for(i=0;i<arr.length;i++){
//         curr=sum-arr[i]
//         if(map.has(curr)){
//             res.push(curr,arr[i])
//             return res
//         }else{
//             map.add(arr[i])
//         }
//     }
// }

// let a= twoSum(arr,sum)
// console.log(a)


// let arr=[12, 3, 4, 1, 6, 9]
// sum=24
// function triplet(arr,sum){
//     let mp=new Map()
//     let res=[]
//     for(i=0;i<arr.length-2;i++){
//         curr=sum-arr[i]
//         for(j=i+1;j<arr.length;j++){
//             if(mp.has(curr-arr[j])){
//    res.push(curr,arr[j],curr-arr[j])
//    return res
//             }else{
//                 mp.set(arr[j],1)
//             }
//         }
//     }
// }

// let a=triplet(arr,sum)
// console.log(a)


// let arr=[12, 3, 4, 1, 6, 9]
// target=24

// function triplet(arr,target){

//     let mp=new Map()
//     let res=[]
//     for(i=0;i<arr.length-2;i++){
//         curr=target-arr[i]
//         for(j=i+1;j<arr.length;j++){

//         if(mp.has(curr)){
//             res.push(arr[j],curr,curr-arr[j])
//         }else{
//             mp.set(arr[j],1)
//         }
//     }
// }
// return res
// }

// let a=triplet(arr,target)
// console.log(a)