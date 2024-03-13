let arr= [0,1,2,4,2,1]

function find(arr,target){
    let s=0
    e=arr.length-1
let peak=-1
    while(s<e){
        mid=Math.floor((s+e)/2)
        if(arr[mid]<arr[mid+1]){
            s=mid+1
        }else{
            e=mid
        }
    }
    peak=s
   
 s=0
 e=peak
 while(s<e){
    mid=Math.floor((s+e)/2)
    if(arr[mid]<target){
        s=mid+1
    }else if(arr[mid]>target){
        e=mid-1
    }else{
        return mid
    }
 }
 s=peak+1
 e=arr.length-1
 while(s<e){
    mid=Math.floor((s+e)/2)
    if(arr[mid]<target){
        s=mid+1
    }else if(arr[mid]>target){
        e=mid-1
    }else{
        return mid
    }
 }
return -1

}
let target=3
let z=find(arr,target)
console.log(z)


