let arr=[15,12,2,3,5,7]
function rotationCount(arr){
      let minIdx=0
      let min=Infinity
    for(i=0;i<arr.length;i++){
      if(min>arr[i]){
            min=arr[i]
            minIdx=i
         }
        }
    return minIdx
}

let a=rotationCount(arr)
console.log(a);