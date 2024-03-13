function calculateTotalSum(arr){
    let total=0
    for(let num of arr){
        total+=num
    }
    return total

}

function RichestPerson(accounts){
    let max=-Infinity
    for(let customer of accounts){
        if(calculateTotalSum(customer)>max){
            max=calculateTotalSum(customer)
        }
    }
    return max
}
let a=RichestPerson([[1,2,3],[4,5,6],[6,7,8]])
console.log(a);