var pivotIndex = function(nums) {
    let s=0
    let e=nums.length-1
    let mid=Math.floor(s+(e-s)/2)
    while(s<e){
        if(nums[mid]>=nums[0]){
            s=mid+1
        }else{
            e=mid
        }
            mid=Math.floor(s+(e-s)/2)
    }
    return s
};
// let nums=[8,10,17,1,3]

let nums=[3,4,5,1,2]
let a=pivotIndex(nums)
console.log(a);