let arr=[1,2,3,4,5,6]
 

let a=arr.reduce((sum,cv)=>{
    return sum+=cv
})

console.log(a)