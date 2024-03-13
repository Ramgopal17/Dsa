let arr=[1,2,3,4,5]

var check=function (nums){
    let n=nums.length
    let count=0
    for(i=1;i<nums.length;i++){
        if(nums[i-1]>nums[i]){
            count++
        }
    }

    if(nums[n-1]>nums[0]){
        count++
    } 
    

    return count<=1
}

let a=check(arr)
console.log(a)