let arr=[1,2,3,4,5,6]

function reverse(arr,l,r){
    while(l<r){
        temp=arr[l]
        arr[l]=arr[r]
        arr[r]=temp
        l++
        r--

    }
    return arr
}


function revrseByK(arr,k){
    reverse(arr,0,arr.length-1)
    reverse(arr,0,k)
    reverse(arr,k,arr.length-1)
    return arr
}

let a=revrseByK(arr,3)
console.log(a)