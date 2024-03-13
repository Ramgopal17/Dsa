let arr=[2,2,1,1,1,2,2,2]

function major(arr){
    let count=0
    let ans=0
    for(i=0;i<arr.length;i++){
        if(count==0){
            ans=arr[i]
        }
        if(ans=arr[i]){
            count++
        }else{
            count--
        }
    }
    return ans
}
let a=major(arr)
console.log(a)