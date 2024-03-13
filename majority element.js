let arr = [7, 7, 5, 8, 9, 7, 7, 2, 5, 6, 7]
function majority(arr){
    let count=0
    let ans=0
    for(i=0;i<arr.length;i++){
        if(count==0){
            ans=arr[i]
        }else if(ans=arr[i]){
            count++
        }else{
            count--
        }
    }
    return ans
}

let a=majority(arr)
console.log(a)