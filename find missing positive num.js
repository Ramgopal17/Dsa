 let array=[6,1,2,8,3,4,7,10,5]
 n=10
 function MissingNumber(array,n){
    let sum=0
    max=-Infinity
for(let i=0;i<n;i++){
    sum=sum+array[i]
        if(array[i]>max){
            max=array[i]
        }
     
      let a=max*(max+1)/2} 
      return a-sum
        }

let a=MissingNumber(array,n)
console.log(a)        