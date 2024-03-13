let arr=[10, 22, 12, 3, 0, 6]
function leader(arr){
    let n=arr.length
    let max=arr[n-1]
let res=[]
res.push(arr[n-1])
for(i=n-2;i>=0;i--){
        if(arr[i]>max){
            max=arr[i]
            res.push(max)
           
        }
   
}
return res
}
let a=leader(arr)
console.log(a)