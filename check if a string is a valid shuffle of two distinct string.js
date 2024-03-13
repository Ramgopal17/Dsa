function validShuffle(s1,s2,res){
    
    let l1=s1.length
    let l2=s2.length
    let lr=res.length
    if((l1+l2)!=lr){
        return "No"
    }else{
        let f=0
let i=0
let j=0
let k=0
while(k<lr){
    if(i<l1 && s1[i]==res[i]) i++
    else if (j<l2 && s2[j]==res[j]) j++
    else{
        f=1
        break;
    }
    k++
}

if(i<l1 || j<l2) return "Yes"
    else return "No"
    }
    
}
s1="XY"
s2="12"
res="X1Y2"

let a=validShuffle(s1,s2,res)
console.log(a)