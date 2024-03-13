let arr=[2,0,2,1,1,0]
function  sortColors(arr){
    let low=0
    mid=0
    high=arr.length-1
    while(mid<=high){
        if(arr[mid]==0)
        {
            temp=arr[mid]
            arr[mid]=arr[low]
            arr[low]=temp
            low++
            mid++
        }else if(arr[mid]==1){
            mid++
        }else if(arr[mid]==2){
            temp=arr[high]
            arr[high]=arr[mid]
            arr[mid]=temp
            high--
        }
    }
    return arr
}

let a=sortColors(arr)
console.log(a)