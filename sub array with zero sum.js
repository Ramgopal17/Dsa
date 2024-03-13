// let arr=[4,2,-3,1,6]


let arr=[0,0,5,5,0,0]
 function findSubarray(arr, n){
    let s=0
     let map={}
    let c=0
  for(let i=0;i<n;i++){
      s+=arr[i]
      if(s==0||arr[i]==0||map[s]){
          c++
      }else{
          map[s]=1
      }
  }
  return c
 }

 let a=findSubarray(arr, 6)
 console.log(a)
// function subarr(arr){
//     let i=0
//     let c=0
//     let sum=0
//     let f=0
//     for(j=i;j<arr.length;j++){
//         sum+=arr[j]
//         if(sum!==0){
//             i++
//         }else if(sum==0){
//         c++
//         break;                                                                      
//     }
// }
//     return c
// }

// let a=subarr(arr)
// console.log(a)
