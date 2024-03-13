let arr=[0,1,1,1,1,2,2,1,1,1,0,0,0,]
function sortColor(arr){
    let l=0
    let mid=0
    let r=arr.length-1
    while(mid<=r){
        if(arr[mid]==0){
            temp=arr[mid]
            arr[mid]=arr[l]
            arr[l]=temp
            l++
            mid++
        }else if(arr[mid]==1){
            mid++
        }else if(arr[mid]==2){
            temp=arr[mid]
            arr[mid]=arr[r]
            arr[r]=temp
          

            r--
        }
    }
    return arr
}

let a=sortColor(arr)
console.log(a)
