// let arr=[-5,-4,-3,-2,0,2,4,6,8]

// for(i=0;i<arr.length;i++){
//     for(j=1;j<arr.length;j++){
//         if(arr[i]+arr[j]==0){
//             console.log(arr[i],arr[j])

//         }
//     }
// }

// optimize solution

let arr=[2,7,11,15]
function sumZero(arr){
let left=0
let right=arr.length-1

while(left<right){
    sum=arr[right]-arr[left]
    if(sum===9){
        return [arr[left],arr[right]]
    }else if(sum>9){
        right--;
    }else{
        left++;
    }
}
}

// let a=sumZero(arr)
// console.log(a)  

// let s="The quick brown fox jumps"
// let str=s.toLowerCase().split("")
// let arr=[]
// for(i=0;i<str.length;i++){
// if(str[i]!=" "){
//     arr.push(str[i].charCodeAt(0)-"a".charCodeAt(0))
// }

// }
// let map={}
// for(ele of arr){
//     map[ele]=(map[ele]||0)+1


// }
// let arr1=[]
// for(i=0;i<26;i++){
//     if(!map[i]){
//         arr1.push(i)
//     }
// }

// console.log(arr1)


// find the pair of closest sum 


// // closest to 12
// let data = [1, 2, 5, 8, 9, 14]
// function closest(data) {
//     let i = 0
//     let j = data.length - 1

//     let diff = Infinity
//     while (i < j) {
//         if (Math.abs((data[i] + data[j]) - 12) < diff) {
//             result = [data[i], data[j]]

//             diff = Math.abs((data[i] + data[j]) - 12);
//         }
//         if ((data[i] + data[j] - 12) > 0) {
//             j--
//         } else if ((data[i] + data[j] - 12) < 0) {
//             i++
//         }
//     }
//     return result
// }
// let m = closest(data)
// console.log(m)


// two sum unsorted array 
// let nums=[1,2,3,4,5]
// let target=7
// let map ={}
//    for(i=0;i<nums.length;i++){
//        let value = nums[i]
//        let pair = target - value
//        if(map[pair]!==undefined){
//            console.log([map[pair], i])
//        }else{
//            map[value]= i
//        }
//    }

// three sum

// let arr=[18,24,36,48,60,67]
// let A=[1,2,2,1]
// function threeSum(A){
//     let arr=A.sort((a,b)=>a-b)
// target =5

// for(i=0;i<arr.length;i++){
//     let start=i+1
//     let end=arr.length-1


//     while(start<=end){
//         let sum=target-arr[i]
//     if(arr[start]+arr[end]==sum){
//         return [arr[i],arr[start],arr[end]]
//     }else if([start]+arr[end]<sum){
//         start++

//     }else{
//         end--
//     }

//     }
// }
// return 0
// }

// let n=threeSum(A)
// console.log(n)
// nums = [-1,0,1,2,-1,-4]


// function threeSum(nums){
//     let arr=nums.sort((a,b)=>(a-b))
// for(i=0;i<arr.length-2;i++){
//     let start=i+1
//     let end=arr.length-1


//     while(start<end){

//     if(arr[start]+arr[end]+arr[i]==0){

//         return  [ arr[i],arr[start],arr[end]]

//     }else if(arr[start]+arr[end]+arr[i]<0){
//         start++

//     }else{
//         end--
//     }


// }

// }
// return false
// }

// let a= threeSum(nums)

// console.log(a)

// let A = [-1, 0, 1, 2, -1, -4]
// function find3Numbers(A, X)
// {

//         let l, r;


//         A.sort((a, b) => a - b);


//         for (let i = 0; i < A.length - 2; i++) {


//             l = i + 1;

//             r = A.length - 1;
//             while (l < r) {
//                 if (A[i] + A[l] + A[r] == X) {
//                     return [[A[i],A[l],A[r]]]
//                 }
//                 else if (A[i] + A[l] + A[r] < X)
//                     l++;
//                 else {
//                     r--;
//                 }
//             }
//         }


//         return false;
//     }

// let X=0

// let a = find3Numbers(A, X)
// console.log(a);
