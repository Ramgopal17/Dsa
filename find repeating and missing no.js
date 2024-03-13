let arr=[1,3,3]
function missing(arr){
    let map={}
    let res=[]
    for(i of arr){
        map[i]=(map[i]||0)+1
    }
    for(key in map){
        res.push(key)
    }
    max=Math.max(...res)
    sum=max*(max+1)/2
    let s=0
    for(i=0;i<arr.length;i++){
        s+=arr[i]
    }
    return s-sum

}

let a=missing(arr)
console.log(a)