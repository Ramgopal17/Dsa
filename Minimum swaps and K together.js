function minimumSwap(arr,n,k){
    var count=0
    for(let i=0;i<n;i++){
        if(arr[i]>k){
            count++
        }
    }
    let bad=0
    for(let i=0;i<count;i++){
        bad++
    }

    ans=bad
     let i=0
    for(let j=count;j<n;j++){
        if(arr[i]>k){
            bad--
        }
     if(arr[j]>k){
        bad++
        }
        i++
ans=Math.min(ans,bad)

    }
    return ans
}
let arr=[2,1,5,6,3]
let k=3
let a=minimumSwap(arr,5,k)
console.log(a);