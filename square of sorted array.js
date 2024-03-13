let a=[-4,-1,0,2,5]
function squareSortedArray(a){
    let s=0
    let ans=[]
    let e=a.length-1
    let k=a.length-1
while(s<=e){
    if(Math.abs(a[s])>Math.abs(a[e])){
        ans[k]=a[s]*a[s]
        s++
    }else{
        ans[k]=a[e]*a[e]
        e--
    }
    k--
}
return ans
}

let v=squareSortedArray(a)
console.log(v);