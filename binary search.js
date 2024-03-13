let arr=[2,4,6,8,9,10]
target=11
function search(arr,target){
    let l=0
    let r=arr.length-1
    while(l<=r){
    let mid=Math.floor((l+r)/2)
    if(arr[mid]==target){
        return mid
    }else if(arr[mid]>target){
    r=mid-1
    }else if(arr[mid]<target){
        l=mid+1
    }
 
}
return -1
}
let a=search(arr,target)
console.log(a)