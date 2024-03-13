211
function maxSub(arr,k){
    let n=arr.length
    let sum=0
    for(i=0;i<k;i++){
        sum+=arr[i]
    } 
    let max=-Infinity
    for(j=k;j<n;j++){
        sum=sum+arr[j]-arr[j-k]
    }
    if(sum>max){
        max=sum
    }
    return max

}

let a=maxSub(arr,3)
console.log(a)