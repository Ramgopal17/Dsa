// arr=[1,2,3,4,8,6,7]



// function isSorted(arr,n){

//     if(n==1){
//         return true
//     }
//     let i=0

//     restArray = isSorted(arr,n-1)
//     return arr[i]<arr[i+1] && restArray
        
    
// }
// let a=isSorted(arr,7)
// console.log(a)


let arr=[4,2,1,2,5,2,7]

function firstOccurence(arr,n,i,key){
    if(i==n){
        return -1
    }
    if(arr[i]===key){
        return i
    }
    return firstOccurence(arr,n,i+1,key)
}


function lastOccurence(arr,n,i,key){


    if(i==n){
        return -1
    }
    let restArray=lastOccurence(arr,n,i+1,key)
    if(restArray!=-1){
        return restArray
    }
    if(arr[i]==key){
        return i
    }
    return -1
}
let b=lastOccurence(arr,7,0,2)
let a=firstOccurence(arr,7,0,2)
console.log(a)
console.log(b)
