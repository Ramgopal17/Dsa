let arr = [1, 7, 5, 5, 3, 9, 5, 1]

function freqCount(arr){
    let map={}
    for(i of arr){
        map[i]=(map[i]||0)+1
    } let res=[]
    for(key in map){
res.push(map[key])
    }
    return res
}

let a=freqCount(arr)
console.log(a);