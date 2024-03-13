let arr=[2,5,6,9,1,2,6,97,8,5]


function isPrime(arr){
    if(arr<2){
        return false
    }
    for( i=2;i<arr.length;i++){
        if(arr%2==0){
            return false
        }
    }
    return true
}
let res=[]
arr.forEach(function(element){
    let item=isPrime(element)
    if(item){
        res.push(element)
    }
})
console.log(res)