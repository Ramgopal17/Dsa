let arr=[4,5,6,7,0,1,2]

function search(arr,target){
    let s=0
    let e=arr.length-1
    while(s<=e){
        let mid=Math.floor((e+s)/2)
        if(target==mid){
            return mid
        }

        if(arr[s]<=arr[mid]){
        if(target>=arr[s] && arr[mid]>target){
            e=mid-1
        }else{
            s=mid+1
        }
    }else {
        if(target>arr[mid] && target<=arr[e]){
            s=mid+1
        }else{
            e=mid-1
        }
    }
    }
    return -1 
}

let a=search(arr,5)
console.log(a)