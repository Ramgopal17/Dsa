arr=[6,-3,-10,0,2]

function maxProduct(arr){
    let max=arr[0]
    min=arr[0]
    maxProduct=arr[0]
    for(i=1;i<arr.length;i++){
        if(arr[i]<0){
            let temp=max
            max=min
            min=temp
        }
        max=Math.max(arr[i],max*arr[i])
        min=Math.min(arr[i],min*arr[i])
        maxProduct=Math.max(maxProduct,max)
    }
    return maxProduct
}

let a=maxProduct(arr)
console.log(a)