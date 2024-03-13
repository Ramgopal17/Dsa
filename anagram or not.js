let a="earth"
let b="heart"

function isAnagram(a,b){
    let map={}
    if(a.length!=b.length){
        return false
    }
for( i of a){
map[i]=(map[i]||0)+1
}
for(j of b){
    if(!map[j]){
        return false
    }
    map[j]-=1
}
return true
}

let c=isAnagram(a,b)
console.log(c)