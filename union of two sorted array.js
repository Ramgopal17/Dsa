let arr1=[2,5,6]
let arr2=[4,6,8,10]

function union(arr1,arr2){
    let l1=arr1.length
let l2=arr2.length
let i=0
let j=0
let output =[]

while(i<l1 && j<l2){
    if(arr1[i]<arr2[j]){
  output.push(arr1[i])
  i++
    }else if(arr1[i]>arr2[j]){
        output.push(arr2[j])
        j++
    }else{
        i++
        
    }
}
while(i<l1){
    output.push(arr1[i])
    i++
}
while(j<l2){
    output.push(arr2[j])
    j++
}
return output
}

let a=union(arr1,arr2)
console.log(a)


