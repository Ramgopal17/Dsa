function search(arr,target){

    let s=0
    let e=arr.length-1
    while(s<e){
        mid=s+Math.floor((e-s)/2)
        if(arr[mid]>target){
   e=mid-1
        }else if(arr[mid]<target){
           s=mid+1
        }else{
            return mid
        }

    }
    return -1
}
arr=[1,2,3,4,5,6]
target=5

let a=search(arr,target)
console.log(a)