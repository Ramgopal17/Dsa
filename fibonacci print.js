function fibo(n){
  let   fibo=[0,1]
  for(i=2;i<=n;i++){
    fibo[i]=fibo[i-1]+fibo[i-2]
  }
  return fibo
}

let a=fibo(10)
console.log(a)