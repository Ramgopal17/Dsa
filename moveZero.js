let arr=[0,1,1,0,1,0,0,1,0,0,1,1,0]
function moveZero(arr){
    let l=0
    let r=0
    while(r<arr.length){
        if(arr[r]==1){
            r++
        }else{
            temp=arr[r]
            arr[r]=arr[l]
            arr[l]=temp
            l++
            r++
        }

    }
    return arr

}

let a= moveZero(arr)
console.log(a)