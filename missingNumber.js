let arr= [9,6,4,2,3,5,7,0,1]
function max(arr){
    let mx=-Infinity
    for(i=0;i<arr.length;i++){
if(mx<arr[i]){
    mx=arr[i]
}
    }
    return mx
}


function missingNum(arr){
    let sum1= arr.length*(arr.length+1)/2
    let sum=0
    for(i=0;i<arr.length;i++){
        sum+=arr[i]
    }
    return sum1-sum
}

let b=missingNum(arr)
console.log(b)
