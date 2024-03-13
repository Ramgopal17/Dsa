let s="earth"
let t="heart"


function isAnagram(a,b){
let map={}
for( i of a){
    map[i]=(map[i]||0)+1
}
for(j of b){
    if(!map[j]){
        return "NO"
    }
    map[j]-=1
}
for(key in map){
    if(map[key]!=0){
        return "NO"
    }
}
return "YES"
}

let a=isAnagram(s,t)
console.log(a)
