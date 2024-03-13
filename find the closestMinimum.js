let arr=[4,5,6,6,7,8,9,9,9,9,9,1,1]
var b=Math.min(...arr)
let m=[]
 for(i=0;i<arr.length;i++){
    if(arr[i]==b){
    m.push(i)
    }
 }
let min=Infinity
 for(i=0;i<m.length;i++){

    if(m.length==1){
        console.log(-1)
    }
    if((m[i+1]-m[i])<min){
        min=m[i+1]-m[i]
    }
 }
 console.log(min)