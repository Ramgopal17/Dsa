var containsDuplicate = function(nums) {
    let map={}
    for( i of nums){
        map[i]=(map[i]||0)+1   
         }
         console.log(map)
         let d=Object.keys(map).length
       if(nums.length== Object.keys(map).length){
           return false
       }
     return true
};
nums=[1,2,3,1]
let a=containsDuplicate(nums)
console.log(a)