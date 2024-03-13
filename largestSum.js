let arr=[1,2,3,4,3,5,4,6,7,8]
let num=4
let sum=25

for(i=0;i<num.length;i++){
    for(j=0;j<num.length;j++){
if(arr[i]+arr[j]==sum){
    console.log(i)
}
    }
}