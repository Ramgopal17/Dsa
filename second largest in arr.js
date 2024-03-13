let arr=[1 ,2 ,3 ,89, 4, 10]
function totalSum(arr){
let max=0
let secLarge=0
for( i=0;i<arr.length;i++){
if(arr[i]>max){
    max=arr[i]
}

}
for(i=0;i<arr.length;i++){
    if(arr[i]>secLarge && arr[i]<max){
        secLarge=arr[i]
    }

}
return max+secLarge
}

let a=totalSum(arr)
console.log(a)

