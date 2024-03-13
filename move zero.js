// let arr=[0,1,1,0,0,1,0]
// function MoveZero(arr){
// let i=0
// for(j=i;j<arr.length;j++){
//   if(arr[j]==0){
//     temp=arr[j]
//     arr[j]=arr[i]
//     arr[i]=temp
//     i++
//   }

// }
// return arr
// }

// let a= MoveZero(arr)
// console.log(a)
let arr=[0,1,1,0,0,1,0,0,1,1]
function moveZero(arr){
  let left=0
  let right=0
  while(right<arr.length){
    if(arr[right]==1){
      right++
    }else{
      temp=arr[right]
      arr[right]=arr[left]
      arr[left]=temp
      left++
      right++
    }
  }
  return arr
}

let a=moveZero(arr)
console.log(a)