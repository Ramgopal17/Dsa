let arr=[0,1,1,1,1,2,2,1,1,1,0,0,0,]
function sortColor(arr){
    let low=0
    let high=arr.length-1
     let mid=0
     while(mid<=high){
        if(arr[mid]==0){
            temp=arr[mid]
            arr[mid]=arr[low]
            arr[low]=temp
            low++
            mid++

        }else if(arr[mid]==1){
            mid++

        }else if(arr[mid]==2){
            temp=arr[mid]
            arr[mid]=arr[high]
            arr[high]=temp
            
            high--
        }
     }
     return arr
}
let a=sortColor(arr)
console.log(a)