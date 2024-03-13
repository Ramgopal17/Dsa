let arr=[3,1,4,1,5]
k=2
function diff(arr,k){
    let s=new Set()
    let res=[]
    for(i=0;i<arr.length;i++){
        curr=k+arr[i]
        if(s.has(curr)){
            res.push([curr,arr[i]])
        }else{
            s.add(arr[i])
        }
    }
    return res
}

let a=diff(arr,k)
console.log(a)