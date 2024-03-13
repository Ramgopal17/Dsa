str="4"
let res=0
var i=0
var sign=1
if(str[0]=="-"){
   sign =-1
   i++
}
for( i=0;i<str.length;i++){ 
   
    let c=str.charCodeAt(i)-"0".charCodeAt(0)
    if(c=>0 && c<=9){
      res=res*10+c
    }
   
}
console.log(res)

// let c=str.charCodeAt(0)-"0".charCodeAt(0)
// console.log(c)

