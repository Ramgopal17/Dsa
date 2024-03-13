// let arr=[1,2,3,4,5]

// function product(arr){
//     if(arr.length==0){
//         return 1
//     }

//   return arr[0]*product(arr.slice(1))
// }

// let a= product(arr)
// console.log(a);

// arr=["hi","hello","hey"]
// function capitalize(arr){
//     let res=[]
//  for(i=0;i<arr.length;i++){
//     s=arr[0][0].toUpperCase()+arr[0].slice(1)
//   res.push(s)
//  return res.concat(capitalize(arr.slice(1)))
//     }
// }

//     let a=capitalize(arr)
//     console.log(a)

// function factorial(n){

//     if(n<=0){
//         return 1
//     }
//        return n*factorial(n-1)
// }

// let a=factorial(5)
// console.log(a)

// function total(i,sum,n){
   
//     if(i<=n/2){
//         return sum
//     }
//     return total(i+1,sum+i,)
// }

// let a=total(0,0,5)
// console.log(a)

// function isplr(str,i){
//     n=str.length
//     if(i>=n/2){
//         return true
//     }
//     if(str[i]!=str[n-i-1]){
//         return false
//     }
//    return  isplr(str,i+1)
// }
// let str="madan"
// let a=isplr(str,0)
// console.log(a);


// power of (a,b)

// function power(a,b){
//     if(b==0){
//         return 1
//     }
//     return a*power(a,b-1)
// }

// let a=power(3,4)
// console.log(a)

// product of arr 

// function product(arr){
//     if(arr.length===0){
//         return 1
//     }
//     return arr[0]*product(arr.slice(1))
// }

// let arr=[1,2,3,4,5]
// let a=product(arr)
// console.log(a);