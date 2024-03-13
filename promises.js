// promises are used to handle asynchronous operation like server request 

function SumOfThreeElement(...element){
    return new Promise((resolve,reject)=>{
        if(element.length>3){
            reject("only three elemnt or less than allowed")
        }else{
            let sum=0
            for(i=0;i<element.length;i++){
                sum+=element[i]
            }

            resolve("sum has been calculated"+  sum)
        }
    })
}


// then method is used to access the result when promise is fulfilled

// catch method is used to acess the result/error when the promises is rejected in the code Below we are consuming promises
SumOfThreeElement(5,5,6)
.then(result=>console.log(result))
.catch(error=>console.log(error))

SumOfThreeElement(5,5,6,8)