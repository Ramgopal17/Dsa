function sum(arr,k){
    let sum=0
    let max=-Infinity
for(i=0;i<k;i++){
    sum+=arr[i]
    if(sum>max){
        max=sum
    }
}
for(i=k;i<arr.length;i++){
       sum+=arr[i]-arr[i-k]
       if(sum>max){
        max=sum
       }
    }
    return max
}

let arr=[5,3,4,5,6,2]
k=3
let a=sum(arr,k)
      console.log(a)  
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
    

