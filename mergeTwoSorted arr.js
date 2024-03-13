let arr1=[1,3,5,7,9]
let arr2=[2,4,6,8,10]
function merge(arr1,arr2){
    let i=0
    let j=0
    let res=[]
    while(i<arr1.length && j<arr2.length){
        if(arr1[i]>arr2[j]){
            res.push(arr2[j])
            j++
        }else{
            res.push(arr1[i])
            i++
        }
    }
    while(i<arr1.length){
        res.push(arr1[i])
        i++
    }
    while(j<arr2.length){
        res.push(arr2[j])
        j++
    }
return res
}

let a=merge(arr1,arr2)
console.log(a)