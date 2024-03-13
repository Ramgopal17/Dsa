let str="ram"
function reverse(str){
    let ans
    if(str.length==0){
        return str
    }
   
    return ans=reverse(str.slice(1))+str[0]

  
}

let a=reverse(str)
console.log(a)