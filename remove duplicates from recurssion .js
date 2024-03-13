
var removeDuplicates = function(s) {
    if(s.length==0){
        return ""
        
    }
    let ch=s[0]
    let ans=removeDuplicates(s.slice(1))

    if(ch==ans[0]){
        return ans
    }
    return (ch+ans)
};

let a=removeDuplicates("aaaabbbeeecdddd")
console.log(a);