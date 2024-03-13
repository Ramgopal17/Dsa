let arr=[3,4,2,2,2,5,2,7,8,9,2,2,2,2]

function majority(arr){
    let count=0
    let ans
    for(i=0;i<arr.length;i++){
        if(count==0){
            ans=arr[i]
        }else if(ans==arr[i]){
            count++
        }else{
            count--
        }
    }
    return ans
}

let a=majority(arr)
console.log(a)