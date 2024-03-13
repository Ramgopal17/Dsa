let arr=[2,1,3,5,7,89]
function second(arr){
max=-Infinity
for(i=0;i<arr.length;i++){
    if(arr[i]>max){
        max=arr[i]
    }
}
let secMax=-Infinity
for(i=0;i<arr.length;i++){
    if(arr[i]!=max && arr[i]>secMax){
        secMax=arr[i]
    }
}
return secMax
}

let a=second(arr)
console.log(a)