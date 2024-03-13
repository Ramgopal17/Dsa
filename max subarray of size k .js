function sub(arr,k){
    let i=0
    let res=[]
    while(i<arr.length-k+1){
        res.push(findMax(arr,i,i+k-1))
         i++
    }
    return res
}

 function findMax(arr,s,e){
    let max=-Infinity
    for(i=s;i<=e;i++){
        if(arr[i]>max){
            max=arr[i]
        }
    }
    return max
 }
 let arr=[1,2,3,4,5,6,7,8,9]
 k=3
 let a=sub(arr,k)
 console.log(a);