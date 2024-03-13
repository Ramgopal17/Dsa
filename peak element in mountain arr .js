var peakIndexInMountainArray = function(arr) {
    let s=0
    let e=arr.length-1
    
    while(s<e){
      let  mid=Math.floor((e+s)/2)
        if(arr[mid]<arr[mid+1]){
            s=mid+1
        }else{
            e=mid
        }
    }
    return s
    };
let arr=[3,4,5,1]

let a=peakIndexInMountainArray(arr)
console.log(a)