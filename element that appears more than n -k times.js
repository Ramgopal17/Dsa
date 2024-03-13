let arr=[1,1,2,2,3,5,4,2,2,3,1,1,1]
function ele(arr,k){
    let map={}
    let res=[]
    let x=Math.floor(arr.length/k)
    for( i of arr){
        map[i]=(map[i]||0)+1
    }
    for(key in map){
        if(map[key]>x){
            res.push(key)
        }
    }
    return res
}

let a=ele(arr,4)
console.log(a)