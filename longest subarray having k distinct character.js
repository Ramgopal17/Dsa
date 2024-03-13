function longestK(str,k){
    let max=0
    let i=0
    let j=0
    let map={}
    while(j<str.length){
    if(map[str[j]]){
        map[str[j]]+=1
    }else{
        map[str[j]]=1
    }
    j++
    }
if(Object.keys(map).length<k){
    j++
}else if(Object.keys(map).length==k){
    max=Math.max(max,j-i+1)
    j++
}else if(Object.keys(map).length>k){
    while(Object.keys(map).length>k){
        map[str[i]]--
   
        if(map[str[i]]==0){
            delete map[str[i]]
        }
        i++
       
    }
   
    j++

}
return max
}
str="abcbebebe"
let a=longestK(str,3)
console.log(a)