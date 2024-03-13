// let arr1=[1,3,5,7]
// let arr2=[2,4,6]

function merge(arr1,arr2){
    let i=0
    let j=0
    let res=[]
    l1=arr1.length
    l2=arr2.length
    
    while(i<l1 && j<l2){
        if(arr1[i]>arr2[j]){
            res.push(arr2[j])
            j++
        }else{
            res.push(arr1[i])
            i++
        }}
        while(i<l1){
            res.push(arr1[i])
            i++
        }
        while(j<l2){
            res.push(arr2[j])
            j++
        }
return res
}

function mergesort (arr){
    if(arr.length<=1) return arr;
    let middle = Math.floor(arr.length/2)
    let leftSide = mergesort(arr.slice(0,middle))
    let rightSide = mergesort(arr.slice(middle))
    return merge(leftSide,rightSide)
}
// let a= merge(arr1,arr2)
// console.log(a);
console.log(mergesort([3,5,2,8,6,0,9]));