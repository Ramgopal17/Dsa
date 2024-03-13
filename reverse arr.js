let arr=[2,3,6,4,5,6,8]
function reverse(arr){
    let res=[]
    if(arr.length==0){
        return res
    }

    let d=reverse(arr.slice(1))+arr[0]
    res.push(d)
    
}

let a=reverse(arr)
console.log(a)

// let arr=[2,4,5,7,9,4]

//  let a=arr.splice(-1)
// console.log(arr);