function flattenArr(arr){
    let result=[]
    for(i=0;i<arr.length;i++){
 
        if(Array.isArray(arr[i])){
            result=result.concat(flattenArr(arr[i]))
        }else{
       result.push(arr[i])
        }
    }
    return result
}
arr=[1,2,[3,[4,[5,6]]]]
let a=flattenArr(arr)
console.log(a)