function longest(arr,k){
    let i=0
    let j=0
    let sum=0
    max=-Infinity
    while(j<arr.length){
        sum+=arr[j]


        if(sum<k){
            j++
        }else if(sum==k){
            if(j-i+1>max){
                max=j-i+1
            }
        }else if(sum>k){
            while(sum>k){
                sum-=arr[i]
                i++
            }
            j++
        }
    }
    return max
}
arr=[1,2,3,4,5,5,5,6]
k=10
let a=longest(arr,k)
console.log(a)