let arr1=[1,3,5,7]
let arr2=[2,4,6]
function mergeSort(arr1,arr2){
let i=0
let j=0
let k=0
l1=arr1.length
l2=arr2.length
arr3=new Array(l1+l2).fill(0)
while(i<l1 && j<l2){
    if(arr1[i]<arr2[j]){
        arr3[k++]=arr1[i++]
        
    }else{
        arr3[k++]=arr2[j++]
        
    }
    

}
while(i<l1){
    arr3[k++]=arr1[i++]
   
}
while(j<l2){
    arr3[k++]=arr1[j++]
  
}
return arr3
}

let a=mergeSort(arr1,arr2)
console.log(a)