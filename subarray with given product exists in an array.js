let arr=[-2, -1, 3, -4, 5]
let k=2
function productSubArray(arr,k){
    let prod=1

    for(i=0;i<arr.length;i++){
    prod*=arr[i]
    if(prod==k){
        return "Yes"
     }else{
        return "No"
    }
}
}
let a=productSubArray(arr,k)
console.log(a)
