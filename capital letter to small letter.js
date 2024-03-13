// let s="level"
// str=s.split("")
// function palindrome(str){
// let l=0
// let r=str.length-1
// while(l<r){
//     if(str[l]!=str[r]){
//         return false
//     }
//     l++
//     r--
//     return true  
// }

// }


// let a= toLowerCase(ch)
// console.log(a)

// let a=palindrome(str)
// console.log(a)

// let ch="CAA"
// for(i=0;i<ch.length;i++){
// let s=ch.charCodeAt(i)-"A".charCodeAt(0)+"a".charCodeAt(0)

// let b=String.fromCharCode(s)

// console.log(b)
// }
let ch="CAA"
function toLowerCase(ch){
let s
let b
let temp=""
    if(ch>='a' && ch<="z"){
    return ch
}else{
    for(i=0;i<ch.length;i++){
    s=ch.charCodeAt(i)-"A".charCodeAt(0)+"a".charCodeAt(0)
  b=String.fromCharCode(s)
  temp=temp+b
}
return temp
}

}

let a=toLowerCase(ch)
console.log(a)

// function isValid(ch){
//     if((ch>="a" && ch<="z")|| (ch >="A"  && ch<="Z") ||(ch>="0"  && ch<="9")){
//         return 1
//     }
//     return 0
// }

// function isPolindrome(str){
    
//     let temp=[]
//     for(j=0;j<str.length;j++){
//         if(isValid(str[j])){
//             temp.push(str[j])
//         }
//     }
//     let g=temp.toLowerCase()
//     return g
// }
// let str="level"
// let d=isPolindrome(str)
// console.log(d)

