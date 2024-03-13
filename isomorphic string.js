function isIsomorphic(s1,s2){
    if(s1.length!=s2.length){
        return false
    }
    let map1={}
    let map2={}
    for(i=0;i<s1.length;i++){
        if(map1[s1[i]]!=map2[s2[i]]){
            return false
        }else{
            map1[s1[i]]=i
            
            map2[s2[i]]=i
        }

    }
    return true
}

let a=isIsomorphic("egg","add")
console.log(a)