s1="aab"
s2="xxy"
let map={}

let obj={}
function isIsomorphic(s1,s2){
if(s1.length!=s2.length){
    return false
}
for( i=0;i<s1.length;i++){

    
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


