var permute = function(nums) {
    let l=0
    let r=nums.length-1
    return  permutate(nums,l,r)
};

function permutate(nums,l,r){
    if(l>=r){
        return nums
    }else{
        for(i=l;i<=r;i++){
        swap(nums,l,i)
        permutate(nums,l+1,r)
        swap(nums,l,i)
    }
    }
}
let nums=[1,2,3]
function swap(a,i,j){
    temp=a[i]
    a[i]=a[j]
    a[j]=temp
    return a
}

let a=permute(nums)
console.log(a)