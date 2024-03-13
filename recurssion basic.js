// print name 5 times

let name="ram"
let cnt=0
function Printname(){
   
    if(cnt==5){
        return cnt
    }
 
    console.log("ram");
    cnt++
    Printname()

}
Printname()


// print 1 to n 

// function series(n){
//     if(n==0){
//         return 
//     }
   
//     series(n-1)

//     console.log(n)
// }

// series(10)


// print name n times without using global variable

// function namePrint(i,n){
//     if(i>n){
//         return
//     }
//     console.log("ram")

//     namePrint(i+1,n)
// }

// namePrint(1,5)
// t(c)==o(n) //sc=o(n)

// print 1 to n using recursion

// function Num(i,n){
//     if(i>n){
//         return 
//     }
//     console.log(i);
//     Num(i+1,n)
// }

// Num(1,4)

// print number n to 1

// function reverseNum(i,n){
//     if(i<1){
//         return
//     }
//     console.log(i)
//     reverseNum(i-1,n)
// }
// reverseNum(5,5)


// print 1 to n using back tracking

// function series(i,n){
//     if(i<1){
//         return 
//     }
//     series(i-1,n)
//     console.log(i)
// }
// series(5,5)

// print n to 1 using backtracking

// function reverseCount(i,n){
//     if(i>n){
//         return 

//     }
//     reverseCount(i+1,n)
//     console.log(i)
// }

// reverseCount(1,5)

// print  1 to n sum using parameterised way

// function summation(i,sum){
//     if(i<1){
//         console.log(sum)
//         return 
//     }
//     summation(i-1,sum+i)
// }


// summation(5,0)

// print sum of n number using function recurssion
// here we use function to return parameter

// function sum(n){
//     if(n==0){
//         return 0
//     }
//     return n+sum(n-1)
// }
// console.log(sum(3))

// reverse an array 

let arr=[2,3,4,5,6,7,8]

// function reverse(arr,l,r){
//     if(l>=r){
//         return arr
//     }

//     let temp=arr[l]
//     arr[l]=arr[r]
//     arr[r]=temp

//    return reverse(arr,l+1,r-1)
// }

// let a=reverse(arr,0,6)
// console.log(a)
// reverse arr using single pointer
// function  reve(arr,i)
// {
// let n=arr.length

// if(i>=n/2){
//     return arr
// }
//     let temp=arr[i]
//     arr[i]=arr[n-i-1]
//     arr[n-i-1]=temp

//    return reve(arr,i+1)
// }
// let a=reve(arr,0)
// console.log(a);

// check palindrom or not using single pointer

// function isPalindrome(arr,i){
//     let n=arr.length
//     if(i>=n/2){
//         return true
//     }
//     if(arr[i]!=arr[n-i-1]){
//         return false
//     }
//   return  isPalindrome(arr,i+1)

// }
// arr="madan"
// let a=isPalindrome(arr,0)
// console.log(a)