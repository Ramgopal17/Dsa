let arr=[1, 19, -4, 31, 38, 25, 100]

function minDiff(arr){
    arr.sort((a,b)=>a-b)
    let min=Infinity

    for(i=0;i<arr.length;i++){
        if((arr[i+1]-arr[i])<min){
            min =arr[i+1]-arr[i]
    
        }
    }
    return min
}

let a=minDiff(arr)
console.log(a)