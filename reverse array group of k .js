function reverse(arr,start,end){
    while(start<end){
        let temp=arr[start]
        arr[start]=arr[end]
        arr[end]=temp
        start++
        end--
    }
    return arr
}

function reverseGroupOfK(arr,k){
    let len=arr.length
    for(i=0;i<arr.length-1;i=i+k){
    start=i
    end=Math.min(i+k-1,len-1)
    reverse(arr,start,end)
    }
    return arr
}

let arr=[1,2,3,4,5,6,7,8,9,10]
k=4

let a=reverseGroupOfK(arr,k)

console.log(a)