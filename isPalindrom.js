function isPalindrome(str){
    if(str.length==1){
        return "Yes"
    }
    if(str[0]==str.slice(-1)){
        return isPalindrome(str.slice(1,-1))
    }else{
        return "No"
    }

}
let str="referq"
let a=isPalindrome(str)
console.log(a);