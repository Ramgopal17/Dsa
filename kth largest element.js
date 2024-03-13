let arr=[6,3,9,1,7,12,6,4]
function kthlarge(arr,k){
    let n=arr.length
arr.sort((a,b)=>a-b)
return arr[n-k]
}

let a=kthlarge(arr,2)
console.log(a);
