const { has } = require("lodash")

var GroupAnagram=function (strs){
    const sorted=strs.map(word=>word.split("").sort().join(""))

    const hash={}
    for(i=0;i<strs.length;i++){
        if(!hash[sorted[i]]){
            hash[sorted[i]]=[strs[i]]
        }else{
            hash[sorted[i]].push(strs[i])
        }
    }
    return Object.values(hash)

}
str=["eat","tea","tan","ate","nat","bat"]
let a= GroupAnagram(str)
console.log(a)