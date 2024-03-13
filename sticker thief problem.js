// let arr=[5,5,10,100,10,5]
arr=[1,2,3]
n=3
function findMaxSum(arr, n)
{ 
let sum=0   
 if(n%2==0){

     for(let i=1;i<n;i=i+2){
         sum+=arr[i]
       
     }}
     else if(n%2!=0){

          for(let i=0;i<n;i=i+2){
               sum+=arr[i]
     
   
     }
 }
 return sum
}

let a= findMaxSum(arr, 3)
console.log(a)