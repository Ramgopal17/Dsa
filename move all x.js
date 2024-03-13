function moveAllX(str){
    if(str.length==0){
        return ""
    }
    ch=str[0]
    let ans=moveAllX(str.slice(1))
    if(ch=='x'){
        return ans+ch
    }
    return ch+ans
}

let a=moveAllX("axxbdxcefxhix")
console.log(a);