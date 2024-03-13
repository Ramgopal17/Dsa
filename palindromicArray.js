// let str="madam"
// function isPalindrome(str){
//     let l=0
//     let r=str.length-1
//     while(l<r){
//         if(str[l]!=str[r])
//         {
//             return false
//         }
//         l++
//         r--
//     }
//     return true
// }

// let a=isPalindrome(str)
// console.log(a)

let num=122
function isPalindrome(num){
    let temp=num
    let sum=0
    let rem
    while(num>0){
        rem=num%10
        sum=sum*10+rem
        num=Math.floor(num/10)
    }
    if(sum==temp){
        return true
    }else{
        return false
    }
}

let a=isPalindrome(num)
console.log(a)