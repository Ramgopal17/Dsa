let arr=[5,4,3,2,1]
function mergesort(arr){
    if(arr.length<=1){
        return arr
    }
    let mid=Math.floor(arr.length/2)
    leftSide= mergesort(arr.slice(0,mid))
    rightSide=mergesort(arr.slice(mid))
   return  merge(leftSide,rightSide)
}
// function mergesort (arr){
//     if(arr.length<=1) return arr;
//     let middle = Math.floor(arr.length/2)
//     let leftSide = mergesort(arr.slice(0,middle))
//     let rightSide = mergesort(arr.slice(middle))
//     return merge(leftSide,rightSide)
// }
// let arr1=[1,3,5,5,7,7,9]
// let arr2=[2,4,6,8,10]
function merge(arr1,arr2){
    let i=0
    let j=0
    let res=[]
    while(i<arr1.length && j<arr2.length){
        if(arr1[i]<arr2[j]){
            res.push(arr1[i])
            i++
        }else if(arr1[i]>arr2[j]){
            res.push(arr2[j])
            j++
        }
    }
    while(i<arr1.length){
        res.push(arr1[i])
        i++
    }
    while(j<arr2.length){
        res.push(arr2[j])
        j++
    }
    return res
}

let a=mergesort(arr)
console.log(a)