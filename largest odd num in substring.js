nums="4206"
console.log(nums.length);
function odd(nums){

for(i=nums.length-1;i>=0;i--){
    if(nums[i]%2!==0){
        return nums.slice(0,i+1)
    }
    
}
return ""
}

let a=odd(nums)
console.log(a);