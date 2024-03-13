function getChar(str1,str2){
    let a=str1.split("")

    let map={}
    let max=-Infinity
    let ans
    for(let i of a){
        map[i]=(map[i]||0)+1

        if(map[i]>max){
            max=map[i]
            ans=i
        }
       }

let b=str2.split("")
let mp={}
for(let j of b){
    mp[j]=(mp[j]||0)+1
}
if(mp[ans]==max){
    return "Yes"
}else{
    return "No"
}

}    
let str1="hello world"
let str2="albcllsyaaaaaaaa"
// let str1="code codee"
// let str2="code"
// let str1="h"
// let str2="h"
let c=getChar(str1,str2)
console.log(c);
