const { template } = require("lodash");

arr=[-12,11,-13,-5,6,-7,5,-3,-6]

function negativeEle(arr){
let l=0;
let r=arr.length-1
for(i=0;i<arr.length;i++){
    if(arr[i]<0){
        temp=arr[i]
        arr[i]=arr[l]
        arr[l]=temp 
        l++
    }
   
}
return arr
}


let a=negativeEle(arr)
console.log(a)