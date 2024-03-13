let arr=[3,4,5,1]
function peak(arr){
    let s=0;
    let e=arr.length-1

    while(s<e){
        let mid=s+Math.floor((e-s)/2)

        if(arr[mid]<arr[mid+1]){
            s=mid+1
        }else if(arr[mid]>arr[mid+1]){
            e=mid

        }
    }
    return s
}
let a=peak(arr)
console.log(a)