
// let str="cbbd"
// let str="a"

var longestPalindrome=function (str){
    if(str.length<1|| str==null) return ''
    let longest='';
    for(let i=0;i<str.length;i++){
        let oddPalindrom=expandFromCenter(str,i,i)
        let evenPalindrom=expandFromCenter(str,i-1,i)
        if(oddPalindrom.length>longest.length){
            longest = oddPalindrom
        }
        if(evenPalindrom.length>longest.length){
            longest=evenPalindrom
        }
    }
    return longest
}

var expandFromCenter=function(str,left,right){
    let i=0
    while(str[left-i] && str[left-i]===str[right+i]){
        i++
    }
    i--
    return str.slice(left-i,right+i+1)
}

let str="babad"

let a=longestPalindrome(str)
console.log(a)