let a="level"
let b=a.split("")
function isPalindrome (a){
let left =0
let right=a.length-1
while(left<right){
    if(a[left]!=a[right]){
        return false
   
    }
    left++
    right--

}
return true
}
let d=isPalindrome(a)
console.log(d)

// var isPalindrome = function(x) {
//     let sum=0
//     let temp=x
    
//     while(x>0){
//         let a=x%10
//          sum=sum*10+a
         
//     x=Math.floor(x/10)
    
//     }

//     if(temp===sum){
//         return true
//     }else{
//         return false
//     }
// }

// let c=isPalindrome(121)
// console.log(c);