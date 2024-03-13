let arr=[1,2,3]

// let arr=[23,45,34,45,23,45,34,45,23,45]
function hidden(arr){
    let n=arr.length
let sum=0
for(i=0;i<arr.length;i++){
    sum+=arr[i]
}
let x=sum/n

 if(x*n==sum){
    return x
 }
else{
    return -1
}
}

let a= hidden(arr)
console.log(a)
