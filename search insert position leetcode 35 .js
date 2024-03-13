let nums=[1]
target=0

var searchInsert = function(nums, target) {
    
    for(i=0;i<nums.length;i++){
        if(nums[i]==target){
            return i
        }else if(nums[i]<target && nums[i+1]>target){
            return i+1
        }else if(nums[nums.length-1]<target){
            return nums.length
        }else if(nums[0]>target){
            return 0
        }
    }
    
};

let a=searchInsert(nums,target)

console.log(a)