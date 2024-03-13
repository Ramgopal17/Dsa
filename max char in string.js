const { max } = require("lodash")

let str="testsample"

function maxChar(str){
    let arr=[]
    let number=0
    for(i=0;i<str.length;i++){
        let ch=str[i].charCodeAt(0)

        if(ch>="a".charCodeAt(0) && ch<="z".charCodeAt(0)){
        number=ch-"a".charCodeAt(0)
    }
   arr.push(number)

}
max=-1
ans=0
for(i=0;i<str.length;i++){
    if(max<arr[i]){
        ans=i
        max=arr[i]
    }
}
return String.fromCharCode(max)
}

let a=maxChar(str)
console.log(a)

// let a="z".charCodeAt(0)
// console.log(a)

// let str="testsample"
// for(i=0;i<str.length;i++){

// let ch=str[i].charCodeAt(0)

// console.log(ch)

// }