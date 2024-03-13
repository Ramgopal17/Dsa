
let arr=[15,12,2,3,5,7]
let n=5
function findKRotation(arr,n) {
    let min=Infinity
let  minIdx=0
for(let i=0;i<n;i++){

  if(min>arr[i]){
      min=arr[i]
      minIdx=i
  }
}
return minIdx
}

let a=findKRotation(arr,n)
console.log(a)