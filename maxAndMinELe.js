let arr=[1,2,3,4,5,6,7,8,9,10,11,12]

function maxEle(arr) {

    let max=-Infinity
    for(i=0;i<arr.length;i++){
        if(arr[i]>max){
            max=arr[i]}
    }
    return max
}

let a=maxEle(arr)
console.log(a)

function minELe(arr){
    min=Infinity
    for(i=0;i<arr.length;i++){
        if(arr[i]<min){
            min=arr[i]
        }

    }
    return min
}

let b=minELe(arr)

console.log(b)