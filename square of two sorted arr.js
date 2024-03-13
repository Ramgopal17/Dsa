let arr=[-4,-3,-2,-1,0,1,2,3,4]

function square(arr){
    let s=0
    let e=arr.length-1
    k=arr.length-1
    let ans=[]
    while(s<=e){
        if(Math.abs(arr[s])>Math.abs(arr[e])){
            ans[k]=arr[s]*arr[s]
            s++
        }else if(Math.abs(arr[s])<Math.abs(arr[e])){
            ans[k]=arr[e]*arr[e]
            e--
        }
        k--
    }
    return ans
}

let a=square(arr)
console.log(a);