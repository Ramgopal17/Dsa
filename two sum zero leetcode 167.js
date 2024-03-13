let nums=[2,7,11,15]
target=9
function twoSum(nums,target){
let res=[]
for(i=0;i<nums.length;i++){
    for(j=1;j<nums.length;j++){
        if(nums[i]+nums[j]==target){
            res.push(i+1,j+1                                                                    )
        }
    }
}
return res
}

let a=twoSum(nums,target)
console.log(a)