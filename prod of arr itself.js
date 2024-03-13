let arr=[1,2,3,4,5]
function product(arr){
    let left=new Array(arr.length).fill(0)
    left[0]=1
    let right=new Array(arr.length).fill(0)
    
    right[right.length-1]=1
    for(i=1;i<arr.length;i++){
        left[i]=left[i-1]*arr[i-1]
    }
    for(i=right.length-2;i>=0;i--){
        right[i]=right[i+1]*arr[i+1]
    }
    for(i=0;i<arr.length;i++){
        arr[i]=left[i]*right[i]
    }
    return arr
}

let a=product(arr)
console.log(a)