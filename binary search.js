var search = function(nums, target) {

    l=0
    r=nums.length-1
while(l<=r){
            mid=l+Math.floor((r-l)/2)
        if(nums[mid]==target){
       return mid
          
        }else if(nums[mid]<target){
            l=mid+1
        }else{
            r=mid-1
        }
    }
    return -1
};
nums=[1,2,3,4,5,6]
target= 6

let a= search(nums,target)
console.log(a)