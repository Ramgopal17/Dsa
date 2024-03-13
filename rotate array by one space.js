function rotate(arr){
    let n=arr.length
   let temp=arr[0]
    for(i=0;i<arr.length;i++){
        arr[i]=arr[i+1]
    }
    arr[n-1]=temp
    return arr
}
arr=[1,2,3,4,5]
let a=rotate(arr)
console.log(a)