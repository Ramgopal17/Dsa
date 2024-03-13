arr=[1,2,3,-5,4,-7,5,-8]

function square(arr){
    let s=0
    let ans=[]
    let e=arr.length-1
    let k=arr.length-1
    while(s<=e){
        if(Math.abs[s]>Math.abs(e)){
            ans[k]=arr[s]*arr[s]
            s++

        }else{
            ans[k]=arr[e]*arr[e]
            e--
        }
        k--
    }
    return ans

}

let a=square(arr)
console.log(a)