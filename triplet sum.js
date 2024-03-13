
let arr=[12, 3, 4, 1, 6, 9]
sum=24
function triplet(arr,sum){
    let mp=new Map()
    let res=[]
    for(i=0;i<arr.length-2;i++){
        curr=sum-arr[i]
        for(j=i+1;j<arr.length;j++){
            if(mp.has(curr-arr[j])){
   res.push(curr,arr[j],curr-arr[j])
   return res
            }else{
                mp.set(arr[j],1)
            }
        }
    }
}

let a=triplet(arr,sum)
console.log(a)