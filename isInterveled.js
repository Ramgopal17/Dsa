function isIntervealed(s1,s2,s3){
    let i=0
    let j=0
    let k=0

    while(k!=s3.length){
        if(i<s1.length && s1[i]==s3[k]){
            i++
        }else if(j<s2.length && s2[j]==s3[k]){
            j++
        }else{
            return false
        }
        k++
    }
    if(i<s1.length|| j<s2.length){
        return false
    }
    return true
}

let s1="AB"
let s2="CD"
let s3="ACBD"

let a=isIntervealed(s1,s2,s3)
console.log(a)