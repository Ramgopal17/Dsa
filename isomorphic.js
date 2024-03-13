let s1="egg"
let s2="adx"
function isIsomorphic(s1,s2){
    let map={}
    let obj={}

    for(i=0;i<s1.length;i++){
       if(map[s1[i]]!=obj[s2[i]]){
        return false
       }else{
        map[s1[i]]=i
        obj[s2[i]]=i
       }

    }
    return true
}

let a=isIsomorphic(s1,s2)
console.log(a)