let arr=[4,2,-3,1,6]

function subarray(arr){
    let sum=0
    let sumSet=new Set()
    for(i=0;i<arr.length;i++){
        sum+=arr[i]   
        
        if(sum==0||sumSet.has(sum)){
            return true
        }
        sumSet.add(sum)
    }
    return false
}

let a=subarray(arr)
console.log(a)