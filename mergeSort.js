function mergeSort(arr){
    if(arr.length<=1)
    return arr
    let mid=Math.floor(arr.length/2)
    leftSide=mergeSort(arr.slice(0,mid))
    rightSide=mergeSort(arr.slice(mid))
   return  merge(leftSide,rightSide)
}