let arr1=[1,3,2,4]
let arr2=[2,3,6,7]
function intersection(arr1,arr2){
    let i=0
    let j=0
    let res=[]
    while(i<arr1.length && j<arr2.length){
        if(arr1[i]==arr2[j]){
            res.push(arr1[i])
            i++
            j++
        }else if(arr1[i]<arr2[j]){
            i++
        }else{
            j++
        }
    }
    return res
}

let a=intersection(arr1,arr2)
console.log(a)