let arr=[2,7,11,15]
target=9
let sum= function (arr,target){
    let s=new Set()
    for(i=0;i<arr.length;i++){
        curr=target-arr[i]
        if(s.has(curr)){
            return [curr,arr[i]]
        }else{
            s.add(arr[i])
        }
    }
}

let a=sum(arr,target)
console.log(a)