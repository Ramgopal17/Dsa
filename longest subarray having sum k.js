// let arr=[1,2,3]

let arr=[1,2,3,5,6,7,4,2]
k=6

function longest(arr,k){
    let sum=0
    max=0
    let mp= new Map()

for(i=0;i<arr.length;i++){
    sum+=arr[i]
    if(sum==k){
       max=i+1
      
    }
    if(!mp.has(sum-k)){
        mp.set(sum,i)
    }else{
        max=Math.max(max,i-mp.get(sum-k))
       
    }

}
return max
}

let a=longest(arr,k)
console.log(a)