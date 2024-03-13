function reverse(str){
    if(str.length<=0){
        return str
    }

    return reverse(str.slice(1))+str[0]
}

let str="aman"
let a=reverse(str)
console.log(a)