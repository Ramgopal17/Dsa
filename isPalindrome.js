let str="maadam"

function isPalindrome(str){
    let l=0
    let r=str.length-1
    while(l<=r){
        if(str[l]!=str[r]){
            return false
        }
        l++
        r--
    }
    return true
}
let a=isPalindrome(str)
console.log(a)