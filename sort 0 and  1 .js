let arr=[0,0,0,1,0,1,0,1,0,1]
function sort01(arr){
let i =0,j=arr.length-1
while(i<j){
    if(arr[i]==0){
        i++
    }else if( arr[j]==1){
        j--
    }else{
        let temp=arr[i]
        arr[i]=arr[j]
        arr[j]=temp
    }}
return arr
}
let a=sort01(arr)
console.log(a)