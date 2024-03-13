let s1="xxy"
let s2="aab"
function isIsomorphic(s1,s2){
    let map={}
    let obj={}
    if(s1.length!=s2.length){
        return false
    }
    for(i=0;i<s1.length;i++){
        if(map[s1[i]]!=obj[s2[i]]){
            return false
        }
        map[s1[i]]=i
        obj[s2[i]]=i
    }
    return true

}

let a=isIsomorphic(s1,s2)
console.log(a)