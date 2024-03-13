let arr=[8,1,2,2,3]
function smaller(arr){
let res=[]
let cnt=0
for(i=0;i>arr.length;i++){
   for(j=1;j<arr.length;j++){
   if(j!=i){
    if(arr[j]<arr[i]){
         cnt++
        }
       
   }

    }
   
}
return res
}

let a=smaller(arr)
console.log(a);
