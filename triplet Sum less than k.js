let arr=[12, 3, 4, 1, 6, 9]
k=24

function tripletSum(arr){
    let out=[]
    for(i=0;i<arr.length-2;i++){
        let s=i+1
        let e=arr.length-1
        while(s<e){
            if(arr[i]+arr[s]+arr[e]>=k){
                s++
            }else{
        out.push([arr[i],arr[s],arr[e]])
        e--
            }
        }
    }
    return out
}

let a=tripletSum(arr,k)
console.log(a);