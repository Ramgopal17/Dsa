let S="thequickbrownfoxjumpsoverthelazydog"

function IsPanagram(S){
str=S.toLowerCase().split("");
let arr=[]
for(let i=0;i<str.length;i++){
    if(str[i]!=" "){
        arr.push(str[i].charCodeAt(0)-"a".charCodeAt(0))
    }
}

let map={}
for(let el of arr){
    map[el]=(map[el]||0)+1
}

let arr1=[]
for(let i=0;i<26;i++){
    if(!map[i]){
        arr1.push(i)
    }
}
if(arr1.length==0){
    return true
}else{
    return false
}
}
let a=IsPanagram(S)

console.log(a)