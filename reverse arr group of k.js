function reverse(arr,s,e){
    while(s<=e){
        let temp=arr[s]
        arr[s]=arr[e]
        arr[e]=temp
        s++
        e--

    }
    return arr
}

function groups(arr,k){
    for(i=0;i<arr.length;i+=k){
        let s=i
        let e=Math.min(i+k-1,arr.length-1)
        reverse(arr,s,e)
    }
    return arr
}
let arr=[1,2,3,4,5,6,7,8]
k=3
let a=groups(arr,k)
console.log(a)
