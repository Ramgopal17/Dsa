let arr=[5,6,1,2,3,4]

function minimun(arr){
    let s=0
    let e=arr.length-1
    while(s<e){
        mid=s+Math.floor((e-s)/2)
        if(arr[mid]>arr[e]){
            s=mid+1
        }else{
            e=mid
        }
    }
    return arr[s]
}

let a=minimun(arr)
console.log(a)