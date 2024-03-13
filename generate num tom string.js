function generateString(num){
    let alphabet="abcdefghijklmnopqrstuvwxyz"
    let i=0
    let finalStr=""
    while(i<num){
      finalStr+=alphabet[i]
      i++
    }
    return finalStr
}
let arr=[2,3,4,6,1,7]

function ArrTostring(arr){
    for(i=0;i<arr.length;i++){
        
        arr[i]=generateString(arr[i])
    }
    return arr
}

let a=ArrTostring(arr)
console.log(a)