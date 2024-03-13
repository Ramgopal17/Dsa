let arr=[2,4,6,8,10,12,14,16,18]
target=15
// ceiling of a number
function serach(arr,target){
    let s=0
    let e=arr.length-1
    while(s<=e){
        mid=Math.floor((s+e)/2)
        if(arr[mid]>target){
            e=mid-1
        }else if(arr[mid]<target){
            s=mid+1
        }else if(arr[mid]==target){
            return mid
        }
    }
    // ceiling of a number
    // return s
    // floor of a number
    return e
}
let a=serach(arr,target)
console.log(a)