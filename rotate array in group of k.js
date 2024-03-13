let arr=[1,2,3,4,5,6,7,8,9]
function rotate(arr,k){
    for(i=0;i<arr.length;i++){
        s=i
        e=Math.min(arr.length-1,i+k-1)
        reverse(arr,s,e)
    }
    return arr
}
function reverse(arr,l,r){
    while(l<=r){
        temp=arr[l]
        arr[l]=arr[r]
        arr[r]=temp
        l++
        r--

    }
    return arr
}

let a=rotate(arr,3)
console.log(a)