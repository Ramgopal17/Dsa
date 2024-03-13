function nextPermutation(nums) {
    if (nums.length == 1) {
        return
    }
let idx1;
    for (i = nums.length - 2; i >= 0; i--) {
        if (nums[i] < nums[i + 1]) {
            idx1 = i;
            break;
        }
    }
    if(idx1<0){
        reverse(nums,nums[0], nums[nums.length - 1])
    }else{
        
             let idx2 = 0
             for (j = nums.length - 1; j>= 0; j--) {
      
                 if (nums[j] > nums[idx1]) {
                     idx2 = j
                     break;
                 }
    }

        temp = nums[idx1]
        nums[idx1] = nums[idx2]
        nums[idx2] = temp

        reverse(nums,nums[0] + idx1 + 1, nums[nums.length - 1])
    }
    return nums
}

var reverse = (nums,start, end) => {

    while (start < end) {
      temp=nums[start]
      nums[start]=nums[end]
      nums[end]=temp
        start++;
        end--;
    }
    return nums
}


let a = nextPermutation([1,2,3])
console.log(a);