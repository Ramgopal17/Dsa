let a=121
function isPalin(a){
    let temp=a
    let sum=0
    while(a>0){
        rem=a%10
        sum=sum*10+rem
        a=Math.floor(a/10)

      
    }

 if(sum==temp){
    return true
 }
 return false
}

let c=isPalin(a)
console.log(c)