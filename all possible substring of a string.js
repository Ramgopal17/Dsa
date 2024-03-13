// let str="eceba"
let str="52"
let result=[]
for(i=0;i<str.length;i++){
    for(j=i+1;j<str.length+1;j++){
       result.push(str.slice(i,j))
    }
}
console.log(result)

// ---------------------------------------

// let start=1

// result=[]
// for(i=0;i<str.length;i++){
//      result.push(str.substring(start,i))

// }
// console.log(result)