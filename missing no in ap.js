let arr=[2,4,8,10,12,14]
function miss(arr){
    let sum=0
    let a=arr[0]
    let p=arr.length
    let l=arr[p-1]

    let d=arr[1]-arr[0] 
    let n=((l-a)/d)+1
    s=(n/2)*(a+l)
    for(i=0;i<arr.length;i++){
        sum+=arr[i]
    }
    return s-sum

}
let a=miss(arr)
console.log(a)