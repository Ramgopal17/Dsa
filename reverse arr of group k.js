function revrese(arr,s,e){
    while(s<e){
        let temp=arr[s]
        arr[s]=arr[e]
        arr[e]=temp
        s++
        e--
    }
    return arr
}

function group(arr,k){
    for(let i=0;i<arr.length;i+=k){
        let start=i
        let end=Math.min(i+k-1,arr.length-1)
        revrese(arr,start,end)
    }
    return  arr
}
arr=[1,2,3,4,5,6,7,8]
k=3

let a= group(arr,k)
console.log(a)