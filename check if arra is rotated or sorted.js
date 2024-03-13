let arr=[3,4,5,1,2]
function isSorted(arr){
    count=0
for(j=1;j<arr.length;j++){
    if(arr[j-1]>arr[j]){
   count++
    }
    if(count>1){
        return false
    }
   
}
return count==0||(arr[0]>arr[arr.length-1])
}

let a=isSorted(arr)
console.log(a)