var findGCD = function(nums) {
    let max=-Infinity
    let min=Infinity
    for(i=0;i<nums;i++){
     max=Math.max(max,nums[i])
     min=Math.min(min,arr[i])
    }
    return gcd(min,max)
};
const gcd = (a, b) => b == 0 ? a : gcd(b, a % b);
    
let nums=[2,5,6,9,10]
let c=findGCD(nums)
console.log(c)