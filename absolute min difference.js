function absoluteMin(arr){
    let res=[]
    let min=Infinity
    arr.sort((a,b)=>a-b)

    for(i=0;i<arr.length-1;i++){
        diff=arr[i+1]-arr[i]
        min=Math.min(min,diff)
    }
    for(i=0;i<arr.length-1;i++){
        diff=arr[i+1]-arr[i]
        if(min===diff){
            res.push([arr[i],arr[i+1]])
        }
    }
    return res
}

arr=[3,8,-10,23,19,-4,-14,27]
let a=absoluteMin(arr)
console.log(a)