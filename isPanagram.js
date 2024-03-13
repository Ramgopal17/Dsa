s="abcdefghijklmnopqrstuvwxyz"

function isPanagram(s){

    let str=s.toLowerCase().split("")
    let arr=[]
    let arr1=[]
    let map={}
    for(i=0;i<str.length;i++){
        arr.push(str[i].charCodeAt(0)-"a".charCodeAt(0))
    }
for(e of arr){
    map[e]=(map[e]||0)+1
}

for(i=0;i<26;i++){
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
let a=isPanagram(s)
console.log(a)