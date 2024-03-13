// let arr=[111,222,333,444,554]
let arr = [ 121, 131, 121 ]

 function isPalin(N){
    let str=""+N
    let l=0
    let r=str.length-1
    while(l<r){
        if(str[l]!=str[r]){
            return false
        }
        l++
        r--
    }
    return true
 }
 function isPalindrome(arr,n){
    for(i=0;i<arr.length;i++){
        let ans=isPalin(arr[i])
    if(ans==false){
        return false
    }
    }
    return true

 }

 let a=isPalindrome(arr,3)
 console.log(a)