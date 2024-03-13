let arr=[1,2,3,4,5]
function equilibrium(arr){
    let sum=0
    for(i=0;i<arr.length;i++){
        sum+=arr[i]
    }
    let leftSum=0
    for(j=0;j<arr.length;j++){
        sum-=arr[j]
        leftSum+=arr[j]
        if(leftSum==sum){
            return true
        }
        leftSum+=arr[j]
      }
      return false
}

let a=equilibrium(arr)
console.log(a)