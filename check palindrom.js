function isPalindrome(str,i){
    let n=str.length
    if(i>=n/2){
        return true
    }
    if(str[i]!=str[n-i-1]){
        return false
    }
   return isPalindrome(str,i+1)
}
str="madan"
let a=isPalindrome(str,0)
console.log(a)