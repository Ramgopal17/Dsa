// let arr=[15,2,45,12,7]

let arr=[1]
function value(arr){
for(i=0;i<arr.length;i++){
 if((i+1)==arr[i]){
  return arr[i]
 }
}
return -1
}
let a=value(arr)
console.log(a)