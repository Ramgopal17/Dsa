// function fibo(n){
//     if(n==0){
//         return 0
//     }else if(n==1){
//         return 1
//     }else if(n>1){
//         return fibo(n-1)+fibo(n-2)
//     }
// }

// let a=fibo(10)
// console.log(a)

function fibo(n){
    let fib=[0,1]
    for(i=2;i<=n;i++){
        fib[i]=fib[i-1]+fib[i-2]
    }
    return fib
}

let a=fibo(10)
console.log(a)