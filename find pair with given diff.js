let arr=[80,3,5,20,2,5]
let N=78
function minDiff(arr,N){
let map={}
let output=[]
for(i of arr){
    map[i]=(map[i]||0)+1
}
for(i=0;i<arr.length;i++){
    curr=N+arr[i]
    if(map[curr]){
        output.push(curr,arr[i])
    }
}
return output
}
let a=minDiff(arr,N)
console.log(a)