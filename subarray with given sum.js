let arr=[1,2,3,7,5]
sum=12
function subarray(arr,sum){
let i=0
let s=0
for(j=i;j<arr.length;j++){
    s+=arr[j]
    if(sum<s){
        i++
    }else{
        return i,j
    }
}
}

let a=subarray(arr,sum)
console.log(a)