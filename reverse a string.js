

function reverse(arr,l,r){
    if(l>=r){
        return arr.join("")
    }

    let temp=arr[l]
    arr[l]=arr[r]
    arr[r]=temp

   return reverse(arr,l+1,r-1)
}
str="aman"
let arr=str.split("")

let a= reverse(arr,0,3)
console.log(a);