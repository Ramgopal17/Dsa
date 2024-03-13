arr=[30,20,10,45,76]

function deleteEle(arr){
    let pos=2
    for(i=pos;i<arr.length-1;i++){
        arr[i]=arr[i+1]
    }
arr.length--
return arr
}
a=deleteEle(arr)
console.log(a)