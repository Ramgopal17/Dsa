arr=[1,2,3,4,5,6]

function product(arr){
    let left=new Array(arr.length).fill(0)
    left[0]=1

    let right=new Array(arr.length).fill(0)

    right[arr.length-1]=1
    for(i=1;i<arr.length;i++){
        left[i]=arr[i-1]*left[i-1]
    }


    for(let i=right.length-2;i>=0;i--){
        right[i]=right[i+1]*arr[i+1]
    }

    for(k=0;k<arr.length;k++){
        arr[k]=left[k]*right[k]
    }
    return arr
}

let a=product(arr)
console.log(a)