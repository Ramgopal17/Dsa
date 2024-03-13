let arr=[5,7,7,7,7,8,8,10]
let target=7

function serach(arr,target){
    return [firstOccurence(arr,target),secondOccurence(arr,target)]
}

function firstOccurence(arr,target){
    let l=0
    let r=arr.length-1
    let first=-1
    while(l<=r){
        let mid=Math.floor(l+(r-l)/2)
        if(arr[mid]==target){
            first=mid
            r=mid-1

        }else if(arr[mid]>target){
            l=mid+1

        }else if(arr[mid]<target){
            r=mid-1
        }
    }
    return first
}


function secondOccurence(arr,target){
    let l=0
    let r=arr.length-1
    let second=-1
    while(l<=r){
        let mid=Math.floor(l+(r-l)/2)
        if(arr[mid]==target){
            second=mid
            l=mid+1

        }else if(arr[mid]>target){
            l=mid+1

        }else if(arr[mid]<target){
            r=mid-1
        }
    }
    return second
}

let a=serach(arr,target)
console.log(a)