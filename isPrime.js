function countPrime(n){
    let cnt=0
    for(i=2;i<n;i++){
        if(n%i!=0){
        cnt++
        }
    }
    return  cnt
}

let a=countPrime(10)
console.log(a)