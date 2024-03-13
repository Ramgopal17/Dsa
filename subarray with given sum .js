let arr=[1,2,3,7,5]
s=12
function subarray(arr,s){
    let sum=0
    let i=0
    let count=0
    for(j=i;j<arr.length;j++){
        sum+=arr[j]
  
        if(sum>s){
      count++
        }else if(sum==s){
            return i,j
        }
           
        
    }
  return count
}
let a=subarray(arr,s)
console.log(a)