let arr=[2,-3,5,6,-4]
function maxSum(arr){
    let sum=0
    let max=-Infinity
for(i=0;i<arr.length;i++){
  sum+=arr[i]
  if(sum>max){
    max=sum
  }
  if(sum<0){
    sum=0
  }
  }
return max
}

let a=maxSum(arr)
console.log(a)