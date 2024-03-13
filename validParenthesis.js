let s = "()[]{}"

function isValid(s){
    let arr=[]
let map={"(":")","[":"]","{":"}"}
for( ch of s){
    if(map[ch]){
        arr.push(map[ch])
    }else if(arr.length>0 && arr[arr.length-1]==ch){
        arr.pop(ch)
    }else{
        return false
    }
}
return arr.length==0
}
let a=isValid(s)
console.log(a)