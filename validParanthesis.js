var isValid=function(s){
    let map={ '{':'}','(':')','[':']'}
    let arr=[]
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
s="(]"
let a=isValid(s)
console.log(a)