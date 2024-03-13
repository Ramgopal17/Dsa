function deciamlToBinary(d){
    let b=""
    while(d>0){
        b=(d%2)+b
        d=Math.floor(d/2)
    }
return b
}

let a=deciamlToBinary(9)
console.log(a)