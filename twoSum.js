let arr=[2,5,7,11]
target=9
function twoSum(arr,target){
let s=new Set()
for(i=0;i<arr.length;i++){
    let curr=target-arr[i]
    if(s.has(curr)){
        return [curr,arr[i]]
    }
        s.add(arr[i])
    
}
}

let a=twoSum(arr,target)
console.log(a)