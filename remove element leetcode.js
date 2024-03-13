let nums = [3,2,2,3]
let val = 3


// var removeElement = function(nums, val) {
//     let res=[]
//     for(i=0;i<nums.length;i++){
//         if(nums[i]==val){
//             continue;
//             }
//         res.push(nums[i])
//     }
//     return res
// };
var removeElement = function (nums, val) {
    let k = 0;
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] === val) continue;
      nums[k++] = nums[i];
        
    }
      
    return k;
      
  };
let a=removeElement(nums,val)

console.log(a)