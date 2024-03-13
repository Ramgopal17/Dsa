// let num=121

// function isPalindrome(num){

//     let temp=num
//     sum=0
// while(num>0){
//     let a=num%10
//     sum=sum*10+a
//     num=Math.floor(num/10)
// }
// ;

// if(sum==temp){
//     return "true"
//    }else{
//    return "false"
//   }
// }
// let a=isPalindrome(num)
// console.log(a);

function fib(n){
    let fibo=[0,1]
    for(i=2;i<=n;i++){
        fibo[i]=fibo[i-1]+fibo[i-2]
    }
    return fibo
}

let a=fib(10)
console.log(a)