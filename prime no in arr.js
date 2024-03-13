
let arr=[1,2,3,4,5,6,7,8]
function isPrime(num){
    if(num<2){
        return false
    }
    for(i=2;i<num;i++){
        if(num%2==0){
            return false
        }
    }
return true
}

function isPrimeArr(arr){
    let res=[]
    for(i=0;i<arr.length;i++){
        ans=isPrime(arr[i])
        if(ans==true){
            res.push(ans)
        }
    }
    
   

    return res
}

let a=isPrimeArr(arr)
console.log(a)