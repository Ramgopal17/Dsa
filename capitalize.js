let arr=["abhay","ajay","bharat"]

function capitalize(arr){
    if(arr.length==0){
        return 
    }
    let res=[]

    s=arr[0][0].toUpperCase()+arr[0].slice(1)
    res.push(s)

 return res.concat(capitalize(arr.slice(1)))


}

let a=capitalize(arr)
console.log(a)
