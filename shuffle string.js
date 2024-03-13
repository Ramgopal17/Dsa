function shuffleString(s,indices){

    let l1=s.length
    let l2=indices.length
    let res= new Array(l2).fill(0)
    let i=0
    let j=0
    while(i<l1 && j<l2){
        res[indices[j]]=s[i]

        i++
        j++
    }
    return res.join("")
   
}
s="codeleet"
let indices=[4,5,6,7,0,2,1,3]
let a=shuffleString(s,indices)
console.log(a)