 let arr=[1,2,[3,[4,[5,6]]]]

function flatten(arr){
    let res=[]
    for(i=0;i<arr.length;i++){
        if(Array.isArray(arr[i])){
           res =res.concat(flatten(arr[i]))
        }else{
            res.push(arr[i])
        }
    }
return res
}

let a=flatten(arr)
console.log(a)