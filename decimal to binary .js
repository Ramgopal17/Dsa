
function decToBinary(n){
    let ans=0
    let cnt=0
    while(n!=0){
        rem=n%2
        c=Math.pow(10,cnt)
        ans+=rem*c
        n=parseInt(n/2)
        cnt++
    }
    return ans
}
let d=decToBinary(7)
console.log(d);


















// function binary(n){
//     let i=0
//     let ans=0

//     while(n!=0){
//         //n&1 --->1 it is odd
//         //n&1 --->0 it is even
//         let bit =n & 1
//         ans=bit*Math.pow(10,i)+ans
//         n= n>>1 // rigth shift means divide by 2
//         i++
//     }
//     return ans
// }

// let a= binary(10)
// console.log(a);

// function to convert a negative no to decimal

// function fc(n){
//   n=Math.abs(n)
//     let i=0
//     let ans=0
   
//     while(n!=0){
//         let bit =n & 1

//          ans=bit*Math.pow(10,i)+ans

//         n=n>>1
//         i++
//     }
//     return ans+1
// }
// let a=fc(-6)
// console.log(a);

// n=-6
// let a=n.toString(2)
// console.log(a);