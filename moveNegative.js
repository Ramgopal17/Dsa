let arr=[2,-3,-4,-5,6,8,-9,5,-5]

function moveNegative(arr){
    let left=0
    let right=0
    while(right<arr.length){
        if(arr[right]>0){
            
            right++
        }else{
            temp=arr[right]
            arr[right]=arr[left]
            arr[left]=temp
            left++
            right++
        }
    }
    return arr
}
let a=moveNegative(arr)
console.log(a)
