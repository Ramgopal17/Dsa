let arr=[2,3,1,-4,6]
function subArray(arr){
    let map={}
    let sum=0
    for(i=0;i<arr.length;i++){
        sum+=arr[i]
        if(arr[i]==0 || map[sum]){
                 return "true"
        }else{
            map[sum]=1
        }

    }
    return false
}

let a=subArray(arr)
console.log(a)