let S="thequickbrownfoxjumpsoverthelazydog"
str=S.toLowerCase().split("");
let arr=[]
for(let i=0;i<str.length;i++){
    if(str[i]!=" "){
        arr.push(str[i].charCodeAt(0)-"a".charCodeAt(0))
    }
}
console.log(arr)
let map={}
for(let el of arr){
    map[el]=(map[el]||0)+1
}
console.log(map)
let arr1=[]
for(let i=0;i<26;i++){
    if(!map[i]){
        arr1.push(i)
    }
}
console.log(arr1)
let res="";
for(let num of arr1){
    res+=String.fromCharCode(num + "a".charCodeAt(0))
}
