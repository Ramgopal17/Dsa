function reverse(arr,s,e){
    while(s<e){
        temp=arr[s]
        arr[s]=arr[e]
        arr[e]=temp
        s++
        e--
    }
    return arr
}

let arr=[1,2,3,4,5,6]
let a=reverse(arr,0,arr.length-1)
console.log(a)
