let arr=[2,3,-2,4]
function maxProductSub(arr){
let max=arr[0]
let min=arr[0]
let maxProd=arr[0]
for(i=1;i<arr.length;i++){
 if(arr[i]<0){
    temp=max
    max=min
    min=temp
 }


    max=Math.max(arr[i],max*arr[i])
    min=Math.min(arr[i],min*arr[i])
    maxProd=Math.max(maxProd,max)
}
return maxProd
}

let a=maxProductSub(arr)
console.log(a)