var productExceptSelf = function(nums) {
    
    let left=new Array(nums.length).fill(0)
     left[0]=1
    let right=new Array(nums.length).fill(0)
       right[right.length-1]=1
    
    for(i=1;i<nums.length;i++){
        left[i]=left[i-1]*nums[i-1]
    }
    for(let i=right.length-2;i>=0;i--){
        right[i]=right[i+1]*nums[i+1]
    }
    
for(i=0;i<nums.length;i++){
    nums[i]=left[i]*right[i]
}
    
  return nums  

};

let nums=[1,2,3,4,5]

let a=productExceptSelf(nums)
console.log(a)
