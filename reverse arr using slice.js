let arr=[1,2,3,4,5,6]

function reverse(arr){
    if(arr.length==0){
        return arr
    }
    let res=[]
    let a=reverse(arr.slice(1))+arr[0]
    res.push(a)
    return res
}
let a= reverse(arr)
console.log(a)