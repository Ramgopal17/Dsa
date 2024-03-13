function isNumber(num){

     if(typeof(num)=="number"){
    return "integer"
}else{
    return "string"
}
}
let num=17.97
let a=isNumber(num)
console.log(a);