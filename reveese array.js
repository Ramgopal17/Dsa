let arr=[1,2,3,4,5,6]

function reverse(arr){
    let finalArr=[]
    for(let i=arr.length-1;i>=0;i--){
        finalArr.push(arr[i])

    }
return finalArr
}

let a=reverse(arr)
console.log(a)