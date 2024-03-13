let arr=[2,3,4,5,6,7,8]

function sum(arr){
    let sum=0
    max=-Infinity
    for(i=0;i<arr.length;i++){
        sum+=arr[i]
        if(sum>max){
           max=sum
        }else if(sum<0){
            sum=0
        }

    }
    return max
}
let a=sum(arr)
console.log(a)