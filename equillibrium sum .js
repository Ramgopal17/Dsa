
function equilibrium(arr){
    let sum=0
    for(i=0;i<arr.length;i++){
        sum+=arr[i]
    }
    leftsum=0
    for(i=0;i<arr.length;i++){
        sum-=arr[i]
        leftsum+=arr[i]
    
        if(leftsum==sum){
            return true
        }
        leftsum += arr[i];
    }
    return -1
}

let arr=[1,2,3,4,5]
let a=equilibrium(arr)
console.log(a)