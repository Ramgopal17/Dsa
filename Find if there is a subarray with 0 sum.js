function subArray(arr){
    const sumSet= new Set ()
    let sum=0
    for (i=0;i<arr.length;i++){
        sum+=arr[i]
        if(sum==0|| sumSet.has(sum)){
            return true
        }
        sumSet.add(sum)
    }
    return false
}
let arr=[4,2,-3,1,6]
// let arr=[3,-1,-2,5]
let a=subArray(arr)
console.log(a)