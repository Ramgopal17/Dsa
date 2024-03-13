//  left rotation of a array
// function leftRotate(arr, k){
//     let n=arr.length
//     let mod = k % n;
   
 
//     // Prints the rotated array from start position
//     let t=[]
//     for (let i = 0; i < n; i++){
//        let a= arr[(mod + i) % n]
//     t.push(a)

//     }
//     console.log(...t);
  
// }
// let arr=[1,2,3,4,5]
// leftRotate(arr,2)

// rotate cyclicly  array using recurssion 

let arr=[1,2,3,4,5,6]

// let arr=[-1]
let left =0    
let right= arr.length-1
function reverseArray(arr,left,right) {
     while (left < right) {
        [arr[left], arr[right]] = [arr[right], arr[left]]
        left++
        right--
    }
    return arr
}
// let a=reverseArray(arr,0,arr.length-1)
// console.log(a);
function rotateArray(arr,k){

   reverseArray(arr,0,arr.length-1)
   reverseArray(arr,0,k-1)
   reverseArray(arr,k,arr.length-1)
return arr
}

let c=rotateArray(arr,2)
console.log(c)

// let arr=[1,2,3,4,5,6]
// let k =3

// function rotate(arr,k){
// let temp=arr
//   k=k%arr.length
// for( i=0;i<arr.length;i++){
// arr[(i+k)%arr.length]=temp[i]

// }
// return arr
// }

// let a=rotate(arr,k)
// console.log(a)