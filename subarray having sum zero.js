let arr=[4,2,-3,1,6]
function subarr(arr){
    let sum=0
    let s=new Set()
for(i=0;i<arr.length;i++){
    sum+=arr[i]
 
    if(sum==0|| s.has(sum)){
        return true
    }else{
        s.add(sum)
    }
}
return false
}

let a=subarr(arr)
console.log(a)