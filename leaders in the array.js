let arr=[16,17,4,3,5,2]
let n=arr.length
let res=[]
max=arr[n-1]
res.push(arr[n-1])
for(i=n-2;i>=0;i--){
   if(arr[i]>max){
        max=arr[i]
        res.push(max)
    }
}
res.reverse()
console.log(res)