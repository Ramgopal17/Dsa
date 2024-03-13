let a="earthu"
let b="hearyt"
function isAnagram(a,b){
    if(a.length!=b.length){
        return false
    }
    let map1={}
    for( i of a){
        map1[i]=(map1[i]|0)+1
}
let map2=[]
for(j of b){
    if(!map1[j]){
        return false
    }
    map1[j]-=1

}
for(key in map1){
    if(map1[key]!=0){
        return false
    }
}
return true
}

let c=isAnagram(a,b)
console.log(c)