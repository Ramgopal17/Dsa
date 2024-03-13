function longestconsequence(arr,n){
    let s=new Set()
    let ans=0
    for(i=0;i<n;i++){
        s.add(arr[i])

    }
    for(i=0;i<n;i++){
        if((!s.has(arr[i]-1))){
            let j=arr[i]
            while(s.has(j)){
                j++
                ans=Math.max(ans,j-arr[i])
            }
        }
    }
    return ans
}
arr=[102,4,100,1,101,3,2]
let a=longestconsequence(arr,7)
console.log(a)