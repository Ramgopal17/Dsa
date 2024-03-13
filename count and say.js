function countAndSay(n){
    if(n==1) return "1"
    if(n==2) return "11"
    s="11"
    for(i=3;i<=n;i++){
        t=""
        s=s+"&"
        let c=1
        for(j=1;j<s.length;j++){
            if(s[j]!=s[j-1]){
                t=t+c.toString()
                t=t+s[j-1]
                c=1
            }else c++
        }
        s=t
    }
    return s
}

let a=countAndSay(4)
console.log(a)